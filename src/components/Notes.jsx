import React from "react";

const Notes = ({ notes }) => {
  return (
    <section className="notes mt-5 mb-5">
      <p>** {notes}</p>
    </section>
  );
};

export default Notes;
