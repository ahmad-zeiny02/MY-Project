using System.Collections.Generic;
using RestaurantReservation.DTOs;
using RestaurantReservation.Interfaces;
using RestaurantReservation.Models;

namespace RestaurantReservation.Services
{
    public class ReservationService : IReservationService
    {
        private readonly IReservationRepository _repository;

        public ReservationService(IReservationRepository repository)
        {
            _repository = repository;
        }

        public IEnumerable<Reservation> GetAllReservations()
        {
            return _repository.GetAll();
        }

        public Reservation GetReservationById(int id)
        {
            return _repository.GetById(id);
        }

        public void AddReservation(Reservation reservation)
        {
            _repository.Add(reservation);
        }

        public void UpdateReservation(Reservation reservation)
        {
            _repository.Update(reservation);
        }

        public void DeleteReservation(int id)
        {
            _repository.Delete(id);
        }

        public void Add(ReservationDto reservationDto)
        {
            var reservation = new Reservation
            {
                Name = reservationDto.Name,
                Phone = reservationDto.Phone,
                Guests = reservationDto.Guests,
                ReservationDate = reservationDto.ReservationDate
            };

            _repository.Add(reservation);
        }
    }
}
