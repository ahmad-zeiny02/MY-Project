using System;
using System.ComponentModel.DataAnnotations;

namespace RestaurantReservation.Models
{
    public class Reservation
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        [Phone]
        public string Phone { get; set; }

        [Required]
        [Range(1, 20)]
        public int Guests { get; set; }

        [Required]
        public DateTime ReservationDate { get; set; }
    }
}

