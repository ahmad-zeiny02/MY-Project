using System.Collections.Generic;
using RestaurantReservation.DTOs;
using RestaurantReservation.Models;

namespace RestaurantReservation.Interfaces
{
    public interface IReservationService
    {
        IEnumerable<Reservation> GetAllReservations();
        Reservation GetReservationById(int id); 
        void AddReservation(Reservation reservation);
        void UpdateReservation(Reservation reservation);
        void DeleteReservation(int id);
        void Add(ReservationDto reservationDto); 

    }
}
