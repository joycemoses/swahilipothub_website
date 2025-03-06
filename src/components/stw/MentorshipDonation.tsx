import React from "react";
import DonateForm from "./DonateForm";
import MembershipForm from "./MembershipForm";

const MembershipDonation: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Join & Support Us</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <MembershipForm />
          <DonateForm />
        </div>
      </div>
    </section>
  );
};

export default MembershipDonation;
