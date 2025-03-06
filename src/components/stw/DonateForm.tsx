import React, { useState } from "react";

const DonateForm: React.FC = () => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for donating $${amount}!`);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Support Our Cause</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter donation amount"
            className="w-full p-3 border rounded"
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">
            Donate Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default DonateForm;
