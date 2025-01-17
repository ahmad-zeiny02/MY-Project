using AutoMapper;
using RestaurantReservation.Models;
using RestaurantReservation.DTOs;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace RestaurantReservation
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Reservation, ReservationDto>().ReverseMap();
        }
    }
}
