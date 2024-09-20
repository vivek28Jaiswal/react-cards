import React, { useState } from "react";

const Practice = () => {
  const [val, setVal] = useState({ name: "vivek jaiswal", isBanned: false });
  return (
    <div className="p-6">
      <h2>name: {val.name}</h2>
      <h3>banned: {val.isBanned.toString()}</h3>
      <button
        onClick={() => setVal({...val, isBanned: !val.isBanned})}
        className={`px-4 py-1 ${val.isBanned ? "bg-blue-500" : "bg-red-500"} rounded-full mt-4 text-sm font-semibold`}
      >change </button>
    </div>
  );
};

export default Practice;
