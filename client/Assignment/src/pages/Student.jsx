import React, { useState } from "react";

const Student = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    resume: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, contactNumber, resume } = formData;

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("contactNumber", contactNumber);
      formData.append("resume", resume);

      await fetch("/api/student/studentinfo", {
        method: "POST",
        body: formData,
      });

      // Handle success
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form: ", error);
      // Handle error
      alert("Error submitting form. Please try again.");
    }

    console.log(formData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student Details Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contactNumber" className="block font-semibold mb-1">
            Contact Number:
          </label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="resume" className="block font-semibold mb-1">
            Upload Resume (PDF):
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf"
            onChange={handleFileChange}
            className="w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Student;
