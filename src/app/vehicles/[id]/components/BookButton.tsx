// components/BookButton.tsx
"use client";

type BookButtonProps = {
  vehicleId: string;
};

export default function BookButton({ vehicleId }: BookButtonProps) {
  const handleBooking = () => {
    alert(`Booking for Vehicle ${vehicleId}`);
  };

  return (
    <button
      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
      onClick={handleBooking}
    >
      Book Now
    </button>
  );
}
