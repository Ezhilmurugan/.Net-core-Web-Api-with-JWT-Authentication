using JWTandRTAppln.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JWTandRTAppln.Services
{
    public class ValueService : IValueService
    {
        IValueRepository valueRepository;

        public ValueService(IValueRepository _valueRepository)
        {
            valueRepository = _valueRepository;
        }

        public IEnumerable<string> GetValues()
        {
            return valueRepository.GetValues();
        }
    }
}
