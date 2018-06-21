using System.Collections.Generic;
using JWTandRTAppln.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace JWTandRTAppln.Controllers
{

    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        readonly ILogger<ValuesController> _log;
        IValueService valueService;

        public ValuesController(IValueService _valueService, ILogger<ValuesController> log)
        {
            this.valueService = _valueService;
            _log = log;
        }

        // GET api/values
        [HttpGet]
        [Authorize]
        public IEnumerable<string> Get()
        {
           FtpUtility ftp = new FtpUtility();
           ftp.Ftp();
		   IEnumerable<string> res = valueService.GetValues();
           _log.LogInformation(res.ToString());
            return res;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
