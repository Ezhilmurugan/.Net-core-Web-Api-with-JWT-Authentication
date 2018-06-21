using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JWTandRTAppln.Services
{
    public interface IValueService
    {
        IEnumerable<string> GetValues();
    }
}
