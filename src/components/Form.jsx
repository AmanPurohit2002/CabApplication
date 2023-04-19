import React, { useState } from 'react';

function Form() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to submit the form data to the server
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded">
      <div className="mb-3">
        <label htmlFor="source" className="form-label">Source</label>
        <input type="text" className="form-control" id="source" value={source} onChange={(event) => setSource(event.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="destination" className="form-label">Destination</label>
        <input type="text" className="form-control" id="destination" value={destination} onChange={(event) => setDestination(event.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Book Cab</button>
    </form>
  );
}

export default Form;
