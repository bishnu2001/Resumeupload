import React, { useState } from 'react'
import Studenthistory from './Studenthistory';

const Teacher = () => {
  const [uploadHistory, setUploadHistory] = useState([
    {
      student: "John Doe",
      dateTime: "2024-03-23 10:00 AM",
      resume: "resume1.pdf",
    },
    {
      student: "Jane Smith",
      dateTime: "2024-03-22 02:30 PM",
      resume: "resume2.pdf",
    },
    // Add more upload history entries as needed
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload History</h1>
      <Studenthistory data={uploadHistory} />
    </div>
  );
}

export default Teacher