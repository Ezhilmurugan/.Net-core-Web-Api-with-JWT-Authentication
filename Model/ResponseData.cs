using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JWTandRTAppln.Model
{
    public class ResponseData
    {
        public string Code { get; set; }
        public string Message { get; set; }
        public object Data { get; set; }
    }
}
