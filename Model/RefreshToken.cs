using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace JWTandRTAppln.Model
{
    public class RefreshToken
    {
        [Column("id")]
        [Key]
        public string Id { get; set; }

        [Column("client_id")]
        public string ClientId { get; set; }

        [Column("refresh_token")]
        public string Refresh_Token { get; set; }

        [Column("isstop")]
        public int IsStop { get; set; }
    }
}
