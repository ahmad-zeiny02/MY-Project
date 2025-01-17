using Microsoft.AspNetCore.Mvc;
using RestaurantReservation.DTOs;
using RestaurantReservation.Interfaces;
using RestaurantReservation.Models;

namespace RestaurantReservation.Controllers
{
    public class ReservationController : Controller
    {
        private readonly IReservationService _reservationService;

        public ReservationController(IReservationService reservationService)
        {
            _reservationService = reservationService;
        }

        [HttpGet]
        public IActionResult Index()
        {
            var reservations = _reservationService.GetAllReservations()
                .Select(r => new ReservationDto
                {
                    Id = r.Id,
                    Name = r.Name,
                    Phone = r.Phone,
                    Guests = r.Guests,
                    ReservationDate = r.ReservationDate
                }).ToList();

            return View(reservations);
        }
        [HttpGet]
        public IActionResult Edit(int id)
        {
            var reservation = _reservationService.GetReservationById(id);
            if (reservation == null)
            {
                return NotFound(); 
            }

            var reservationDto = new ReservationDto
            {
                Id = reservation.Id,
                Name = reservation.Name,
                Phone = reservation.Phone,
                Guests = reservation.Guests,
                ReservationDate = reservation.ReservationDate
            };

            return View(reservationDto);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(int id, ReservationDto reservationDto)
        {
            if (id != reservationDto.Id)
            {
                return BadRequest(); 
            }

            if (!ModelState.IsValid)
            {
                return View(reservationDto); 
            }

            var reservation = new Reservation
            {
                Id = reservationDto.Id,
                Name = reservationDto.Name,
                Phone = reservationDto.Phone,
                Guests = reservationDto.Guests,
                ReservationDate = reservationDto.ReservationDate
            };

            _reservationService.UpdateReservation(reservation);

            return RedirectToAction(nameof(Index));
        }
        [HttpGet]
        public IActionResult Create()
        {
            return View(); 
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(ReservationDto reservationDto)
        {
            if (!ModelState.IsValid)
            {
                return View(reservationDto);
            }

            var reservation = new Reservation
            {
                Name = reservationDto.Name,
                Phone = reservationDto.Phone,
                Guests = reservationDto.Guests,
                ReservationDate = reservationDto.ReservationDate
            };

            _reservationService.AddReservation(reservation);
            return RedirectToAction(nameof(Index));
        }
    }
}
