"use client";
import React from "react";

const SubscribeForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Create a FormData object from the form
    const formData = new FormData(e.target);

    // Convert FormData to an object for easier logging
    const data = Object.fromEntries(formData.entries());

    // try {
    //   // Send the data with POST method to the API
    //   const response = await fetch(
    //     "https://backoffice.codershatbd.com/api/email-subscription/store",
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
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email Address" />
        <button type="submit" name="button">
          Subscribe Now
          <img src="/assets/img/icons/arrow-up-right.svg" alt="" />
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
