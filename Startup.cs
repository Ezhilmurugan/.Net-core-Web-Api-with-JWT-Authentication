using System;
using System.IO;
using System.Text;
using JWTandRTAppln.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using JWTandRTAppln.Repositories.Interfaces;
using JWTandRTAppln.Repositories;

namespace JWTandRTAppln
{
    public class Startup
    {

        public Startup(IConfiguration configuration, IHostingEnvironment env)
        {

            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddCors();
            services.AddSingleton<IConfiguration>(Configuration);
            ConfigureJwtAuthService(services);
            services.AddMemoryCache();
            services.AddTransient<IValueService, ValueService>();
            services.AddTransient<IValueRepository, ValueRepository>();
        }



        private void ConfigureJwtAuthService(IServiceCollection services)
        {
            // var audienceConfig = Configuration.GetSection("Audience");
            //var symmetricKeyAsBase64 = audienceConfig["Secret"];
            var symmetricKeyAsBase64 = "Y2F0Y2hlciUyMHdvbmclMjBsb3ZlJTIwLm5ldA==";
            var keyByteArray = Encoding.ASCII.GetBytes(symmetricKeyAsBase64);
            var signingKey = new SymmetricSecurityKey(keyByteArray);

            var tokenValidationParameters = new TokenValidationParameters
            {
                // The signing key must match!
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = signingKey,

                // Validate the JWT Issuer (iss) claim
                ValidateIssuer = true,
                //ValidIssuer = audienceConfig["Iss"],
                ValidIssuer = "Honda_TMS",

                // Validate the JWT Audience (aud) claim
                ValidateAudience = true,
                //ValidAudience = audienceConfig["Aud"],
                ValidAudience = "Honda_TMS",

                // Validate the token expiry
                ValidateLifetime = true,

                ClockSkew = TimeSpan.Zero
            };
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(jwtOptions =>
            {
                jwtOptions.TokenValidationParameters = tokenValidationParameters;
            });
        }



        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            loggerFactory.AddFile("Logs/myapp-{Date}.txt");
            loggerFactory.AddDebug();
            app.UseAuthentication();

            app.UseMvcWithDefaultRoute();
            //app.UseMvc();

            app.Use(async (Context, next) =>
            {
                await next();
                if (Context.Response.StatusCode == 404 &&
                !Path.HasExtension(Context.Request.Path.Value) &&
                !Context.Request.Path.Value.StartsWith("/api/"))
                {
                    Context.Request.Path = "index.html";
                }
            });
            app.UseDefaultFiles();
            app.UseStaticFiles();
	    }
    }
}
