import React from 'react';

function BookingDetails({ booking }) {
  const { email, source, destination, cab, duration, cost } = booking;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-medium mb-2">Booking Details</h2>
      <div className="flex flex-col space-y-2">
        <p>
          <span className="font-medium">Email:</span> {email}
        </p>
        <p>
          <span className="font-medium">Source:</span> {source}
        </p>
        <p>
          <span className="font-medium">Destination:</span> {destination}
        </p>
        <p>
          <span className="font-medium">Cab:</span> {cab}
        </p>
        <p>
          <span className="font-medium">Duration:</span> {duration} minutes
        </p>
        <p>
          <span className="font-medium">Cost:</span> ${cost}
        </p>
      </div>
    </div>
  );
}

export default BookingDetails;
