import React, { useState } from "react";
import NewsData from "../../AllData/NewsData";
import NewsItem from "../../ReuseComp/NewsItem";

const News = () => {
  const [filter, setFilter] = useState("all");

  const filteredNews = NewsData.filter((item) => {
    if (filter === "all") {
      return true;
    } else {
      return item.type === filter;
    }
  });

  return (
    <div>
      {/* ========= Heading ========= */}
      <div className="flex items-center justify-center text-5xl bg-orange-500 min-h-60 font-bold text-white">
        <p>News</p>
      </div>

      {/* ========= News types ========= */}
      <div className="flex flex-col items-center justify-center">
        <div className="my-4 mx-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="all">All</option>
            <option value="anti-cheat">Anti-Cheat</option>
            <option value="event">Event</option>
          </select>
        </div>

        {/* ========= Display News ========= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          {filteredNews.map((item) => (
            <NewsItem
              key={item.id}
              image={item.image}
              head={item.head}
              desc={item.desc}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
