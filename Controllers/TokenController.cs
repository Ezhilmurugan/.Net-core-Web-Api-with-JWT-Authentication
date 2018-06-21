using JWTandRTAppln.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace JWTandRTAppln.Controllers
{
    [Route("api/token")]
    public class TokenController : Controller
    {
        private IOptions<Audience> _settings;
        private IMemoryCache cache;

        public TokenController(IOptions<Audience> settings, IMemoryCache cache)
        {
            this._settings = settings;
            this.cache = cache;

        }

        [HttpPost("auth")]
        public IActionResult Auth([FromBody]TokenParameters parameters)
        {
            
            if (parameters == null)
            {
                return Json(new ResponseData
                {
                    Code = "901",
                    Message = "null of parameters",
                    Data = null
                });
            }
            if (parameters.grant_type == "password")
            {
                return Json(DoPassword(parameters));
            }
            else if (parameters.grant_type == "refresh_token")
            {
                return Json(DoRefreshToken(parameters));
               // return null;
            }
            else
            {
                return Json(new ResponseData
                {
                    Code = "904",
                    Message = "bad request",
                    Data = null
                });
            }
        }

        private ResponseData DoPassword(TokenParameters parameters)
        {
            //validate the client_id/client_secret/username/password                                          
            var isValidated = UserInfo.GetAllUsers().Any(x => x.ClientId == parameters.client_id
                                    && x.ClientSecret == parameters.client_secret
                                    && x.UserName == parameters.username
                                    && x.Password == parameters.password);

            if (!isValidated)
            {
                return new ResponseData
                {
                    Code = "902",
                    Message = "invalid user infomation",
                    Data = null
                };
            }

            var refresh_token = Guid.NewGuid().ToString().Replace("-", "");

            var rToken = new RefreshToken
            {
                ClientId = parameters.client_id,
                Refresh_Token = refresh_token,
                Id = Guid.NewGuid().ToString(),
                IsStop = 0
            };

            //store the refresh_token 
            if (rToken != null)
            {

                cache.Set(rToken.ClientId,rToken.Refresh_Token);
                return new ResponseData
                {
                    Code = "999",
                    Message = "OK",
                    Data = GetJwt(parameters.client_id, refresh_token)
                };
            }
            else
            {
                return new ResponseData
                {
                    Code = "909",
                    Message = "can not add token to database",
                    Data = null
                };
            }
        }

        //scenario 2 ： get the access_token by refresh_token
        private ResponseData DoRefreshToken(TokenParameters parameters)
        {
            string obj;
            if (!cache.TryGetValue<string>(parameters.client_id, out obj))
            {
                return new ResponseData
                {
                    Code = "902",
                    Message = "client id is not valid",
                    Data = null
                };
            }
            else 
                {
                if (cache.Get<string>(parameters.client_id) == parameters.refresh_token)
                {
                    var refresh_token = Guid.NewGuid().ToString().Replace("-", "");
                    cache.Remove(parameters.client_id);
                    cache.Set(parameters.client_id, refresh_token);
                    return new ResponseData
                    {
                        Code = "999",
                        Message = "OK",
                        Data = GetJwt(parameters.client_id, refresh_token)
                    };
                }
                else
                {
                    return new ResponseData
                    {
                        Code = "902",
                        Message = "refresh token is not valid",
                        Data = null
                    };
                }
                }
        }

        private string GetJwt(string client_id, string refresh_token)
        {
            var now = DateTime.UtcNow;

            var claims = new Claim[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, client_id),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, now.ToUniversalTime().ToString(), ClaimValueTypes.Integer64)
            };

            var symmetricKeyAsBase64 = "Y2F0Y2hlciUyMHdvbmclMjBsb3ZlJTIwLm5ldA==";
            var keyByteArray = Encoding.ASCII.GetBytes(symmetricKeyAsBase64);
            var signingKey = new SymmetricSecurityKey(keyByteArray);

            var jwt = new JwtSecurityToken(
                issuer: "Honda_TMS",
                audience: "Honda_TMS",
                claims: claims,
                notBefore: now,
                expires: now.Add(TimeSpan.FromMinutes(10)),
                signingCredentials: new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256));
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            var response = new
            {
                access_token = encodedJwt,
                expires_in = (int)TimeSpan.FromMinutes(10).TotalSeconds,
                refresh_token = refresh_token,
            };

            return JsonConvert.SerializeObject(response, new JsonSerializerSettings { Formatting = Formatting.Indented });
        }
    }
}
