import React from "react";

const PatnerItem = ({ image, name, date }) => {
  return (
    <div>
      <div className="max-w-xs md:max-w-md overflow-hidden shadow-lg cursor-pointer pt-4">
        <img
          className="w-fit h-52 md:h-56 object-cover border-2 border-black"
          src={image}
          alt="Card image"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default PatnerItem;
