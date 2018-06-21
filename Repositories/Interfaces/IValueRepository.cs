using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JWTandRTAppln.Repositories.Interfaces
{
    public interface IValueRepository
    {
        IEnumerable<string> GetValues();
    }
}
