import React from "react";

const Attachment: React.FC = () => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Downloadable Resources</h2>
        <div className="text-center">
          <a href="/docs/brochure.pdf" className="text-blue-600 font-semibold hover:underline" download>
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
};

export default Attachment;
