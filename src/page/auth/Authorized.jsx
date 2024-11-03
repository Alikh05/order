import React from 'react';

function Authorized() {
  return (
    <div className="authorized-container flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Welcome to the Authorized Area</h2>
      <p>Manage your account and settings here.</p>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
        View Dashboard
      </button>
    </div>
  );
}

export default Authorized;
