import React, { useState } from "react";

const MemberForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Join Swahilipot Hub</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
        required
      />

      <select
        name="interest"
        value={formData.interest}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
      >
        <option value="">Select Interest</option>
        <option value="Technology">Technology</option>
        <option value="Creatives">Creatives</option>
        <option value="Community">Community</option>
      </select>

      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default MemberForm;
