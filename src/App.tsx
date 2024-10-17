import React, { useState } from 'react';
import { Coffee, Send } from 'lucide-react';
import RepairForm from './components/RepairForm';

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (formData: any) => {
    // TODO: Implement form submission logic (API call, etc.)
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="mb-8 text-center">
        <Coffee className="w-16 h-16 text-brown-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800">Coffee Machine Repair</h1>
        <p className="text-gray-600">Fast and reliable repair services</p>
      </header>
      {formSubmitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative max-w-md w-full" role="alert">
          <strong className="font-bold">Thank you!</strong>
          <p>Your repair request has been submitted successfully. We'll contact you soon.</p>
        </div>
      ) : (
        <RepairForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default App;