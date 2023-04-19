import React, { useState } from 'react';
import axios from 'axios';
import Modal from '../components/Modal';
import Loader from '../components/Loader';

const Booking = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [email, setEmail] = useState('');
  const [cab, setCab] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:5000/bookings', {
        source,
        destination,
        email,
      });
      setCab(response.data.cab);
      setIsModalOpen(true);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Book a Cab</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="source" className="form-label">Source:</label>
          <input
            type="text"
            id="source"
            className="form-control"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="destination" className="form-label">Destination:</label>
          <input
            type="text"
            id="destination"
            className="form-control"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Book Now</button>
      </form>
      {isLoading && <Loader />}
      {error && <p className="text-danger">{error}</p>}
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <h2>Booking Confirmed!</h2>
          <p>Cab: {cab.name}</p>
          <p>Estimated Time: {cab.time} minutes</p>
          <p>Estimated Cost: {cab.cost} INR</p>
        </Modal>
      )}
    </div>
  );
};

export default Booking;
