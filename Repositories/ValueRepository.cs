using JWTandRTAppln.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JWTandRTAppln.Repositories
{
    public class ValueRepository : IValueRepository
    {
        public IEnumerable<string> GetValues()
        {
            return new string[] { "value1", "value2" };
        }
    }
}
