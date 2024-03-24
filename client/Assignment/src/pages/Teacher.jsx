import React, { useState } from 'react'
import Studenthistory from './Studenthistory';

const Teacher = () => {

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload History</h1>
      <Studenthistory />
    </div>
  );
}

export default Teacher