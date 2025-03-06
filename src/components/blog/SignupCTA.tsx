import React from "react";

const SignupCTA: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white py-12 text-center rounded-lg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="text-lg mb-6">Subscribe to our blog and never miss an update!</p>
        <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 w-full rounded-md text-black"
            required
          />
          <button type="submit" className="bg-white text-blue-600 font-bold px-6 py-3 rounded-md">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignupCTA;
