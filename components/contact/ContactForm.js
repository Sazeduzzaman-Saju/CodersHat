"use client";
import React from "react";

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Create a FormData object from the form
    const formData = new FormData(e.target);

    // Convert FormData to an object for easier logging
    const data = Object.fromEntries(formData.entries());

    // try {
    //   // Send the data with POST method to the API
    //   const response = await fetch(
    //     "https://backoffice.codershatbd.com/api/contact/store",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(data), 
    //     }
    //   );

    //   // Check if the response is okay
    //   if (!response.ok) {
    //     throw new Error("Failed to send the data: " + response.statusText);
    //   }

    //   const result = await response.json();
    //   console.log("Success:", result); 
    // } catch (error) {
    //   console.error("Error sending data:", error);
    // }
  };

  return (
    <div>
      <div className="main-form">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <input
                type="text"
                name="name"
                placeholder="First Name"
                required
              />
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                name="phone"
                placeholder="+880 15******"
                required
              />
            </div>
            <div className="col-12">
              <input
                type="email"
                name="email"
                placeholder="email@example.com"
                required
              />
            </div>
            <div className="col-lg-12">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="col-12">
              <textarea
                name="message"
                cols={30}
                rows={5}
                placeholder="Tell Us About Your Message"
                required
              />
            </div>
            <div className="col-12">
              <button type="submit" className="full-btn theme-btn-11">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
