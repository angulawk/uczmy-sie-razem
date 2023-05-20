"use client";

import React, { useRef } from "react";

const Body: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flow-root print:bg-red-100 bg-gray-50 rounded-lg px-6 pb-8 print:p-0">
      <div className={"print:hidden"}>
        <button onClick={handlePrint}>Drukuj</button>
      </div>
      <div>
        <h1>Ciało</h1>
        <p>
          <span className="font-bold">la cabeza</span> - głowa
        </p>
        <p>
          <span className="font-bold">
            Me duele la cabeza después de estudiar durante horas.
          </span>{" "}
          - Boli mnie głowa po kilku godzinach nauki.
        </p>
        <hr className="border-thin border-solid border-black w-48 mt-8" />
      </div>
    </div>
  );
};

export default Body;
