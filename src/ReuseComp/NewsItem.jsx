import React from "react";

const NewsItem = ({ image, head, desc, date }) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
        <img className="w-full" src={image} alt="Image" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{head}</div>
          <p className="text-gray-700 text-base">{desc}</p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
