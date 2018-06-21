using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JWTandRTAppln.Model
{
    public class UserInfo
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string ClientId { get; set; }
        public string ClientSecret { get; set; }

        public static IList<UserInfo> GetAllUsers()
        {
            return new List<UserInfo>()
            {
                new UserInfo {  ClientId="100",ClientSecret="888", UserName="Admin",Password="Admin@321" },
                new UserInfo {  ClientId="101",ClientSecret="999", UserName="User",Password="Welcome@321" },
            };
        }
    }
}
