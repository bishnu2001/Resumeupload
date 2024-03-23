import React, { useEffect, useState } from "react";

const Studenthistory = ({ data }) => {
  const [historyData, setHistoryData] = useState([]);

  const studentinfo = async () => {
    try {
      const res = await fetch("/api/student/getallstudentinfo");
      const data = await res.json();
      setHistoryData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    studentinfo();
  }, []);

  // Function to format date to Indian Standard Time (IST)
  const formatISTDate = (dateString) => {
    const options = {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Date(dateString).toLocaleString("en-IN", options);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Student</th>
            <th className="border border-gray-300 px-4 py-2">Date & Time</th>
            <th className="border border-gray-300 px-4 py-2">Resume</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                {formatISTDate(item.createdAt)}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <a
                  href={`/resumes/${item.resume}`}
                  className="text-blue-500 underline"
                >
                  {item.resume}
                </a>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2">
                  View
                </button>
                <button className="px-3 py-1 bg-green-500 text-white rounded-md">
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Studenthistory;