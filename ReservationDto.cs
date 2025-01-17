namespace RestaurantReservation.DTOs
{
    public class ReservationDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public int Guests { get; set; }
        public DateTime ReservationDate { get; set; }
    }
}
