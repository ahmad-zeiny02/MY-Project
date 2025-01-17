using System.Collections.Generic;
using RestaurantReservation.Models;

namespace RestaurantReservation.Interfaces
{
    public interface IReservationRepository
    {
        IEnumerable<Reservation> GetAll();
        Reservation GetById(int id);
        void Add(Reservation reservation);
        void Update(Reservation reservation);
        void Delete(int id);
    }
}
