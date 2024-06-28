import React from "react";
import logo from "../../assets/EsportsImg/Esports_logo.svg";
import trophy from "../../assets/EsportsImg/trophy.png";
const Esports = () => {
  return (
    <div>
      {/* ========= Hero section ========= */}
      <div className="bg-orange-500 min-h-min flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-6 lg:pt-20">
        <div className="flex flex-col gap-4 lg:gap-8 text-white items-center lg:items-start">
          <div className="cursor-pointer">
            <img src={logo} alt="Logo" className="w-24 h-auto" />
          </div>
          <div className="text-4xl lg:text-6xl font-semibold cursor-pointer">
            GRAND FINALS
          </div>
          <div className="bg-white text-black px-8 py-2 text-xl lg:text-4xl rounded-lg shadow-lg">
            <a
              href="https://insider.in/bgis-grand-finals-2024-jun28-2024/event"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-200 hover:text-black px-6 py-2 rounded-lg transition duration-300 ease-in-out"
            >
              Book Tickets
            </a>
          </div>
        </div>

        <div className="mt-6 lg:mt-0">
          <img
            src={trophy}
            alt="Trophy"
            className="w-full max-w-xs lg:max-w-md cursor-pointer"
          />
        </div>
      </div>

      {/* ========= vedio ========= */}
      <div className="py-5 bg-[#e9e9e9] flex items-center justify-center">
        <iframe
          className="w-[350px] h-[250px]  md:w-[800px] md:h-[400px] lg:w-[1000px] lg:h-[500px] xl:w-[1200px] xl:h-[600px] sm:px-10 mx:px-0"
          src="https://www.youtube.com/embed/2JYxc5yQd9Y?si=tZKqJtESy4XslRhN"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      {/* ========= Format section ========= */}
      <div className="bg-gray-200 text-gray-900 py-12 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">THE GRIND</h2>

          {/* Section Dates */}
          <div className="mb-8">
            <p className="text-lg lg:text-xl">04 April – 28 April</p>
          </div>

          {/* Section Description */}
          <div className="mb-8 text-left text-2xl">
            <p className="mb-4">
              In The Grind, 256 teams will be invited and grouped into 16
              groups. Each group will play 3 matches in 2 weeks. After 2 weeks,
              based on the overall standings, the 256 teams will be grouped into
              16 teams again and play 3 matches for the next 2 weeks. The Top 64
              teams based on the cumulative overall standings of the 4 weeks
              will qualify for the BATTLEGROUNDS MOBILE INDIA SERIES 2024 in the
              following rounds,
            </p>
            <ul className="list-disc ml-6">
              <li className="mb-2">1st –16th Ranked Teams - BGIS Round 4</li>
              <li className="mb-2">17th – 32nd Ranked Teams - BGIS Round 3</li>
              <li className="mb-2">33rd – 64th Ranked Teams - BGIS Round 2</li>
            </ul>
          </div>

          {/* Section Divider */}
          <hr className="border-gray-400 mb-8" />

          {/* Additional Events */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl lg:text-2xl font-bold mb-2">BGIS 2024</h3>
              <p className="mb-2">02 May - 26 May</p>
              <p className="text-lg">
                Top 32 teams from BGIS Round 4 will qualify for BGIS 2024.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl lg:text-2xl font-bold mb-2">
                WILDCARD ENTRY
              </h3>
              <p className="mb-2">30 May - 02 June</p>
              <p className="text-lg">Wildcard entry for 8 additional teams.</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl lg:text-2xl font-bold mb-2">
                SEMI-FINALS WEEK 1
              </h3>
              <p className="mb-2">06 June - 09 June</p>
              <p className="text-lg">
                Top 16 teams from BGIS 2024 will compete.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl lg:text-2xl font-bold mb-2">
                SEMI-FINALS WEEK 2
              </h3>
              <p className="mb-2">13 June – 16 June</p>
              <p className="text-lg">
                Remaining 16 teams from BGIS 2024 will compete.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl lg:text-2xl font-bold mb-2">
                GRAND FINALS
              </h3>
              <p className="mb-2">28 June – 30 June</p>
              <p className="text-lg">
                Top teams from Semi-Finals will compete for the championship.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========= Prize pool section ========== */}

      <div className="bg-gray-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Total Prize Pool Section */}
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              TOTAL PRIZE POOL
            </h2>
            <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-200">
                  <tr className="text-left">
                    <th className="py-3 px-4 sm:px-6 lg:px-8 text-lg lg:text-xl font-semibold">
                      Position
                    </th>
                    <th className="py-3 px-4 sm:px-6 lg:px-8 text-lg lg:text-xl font-semibold">
                      Prize (INR)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-xl">
                  <tr className="bg-green-500">
                    <td className="py-4 px-4 sm:px-6 lg:px-8">Champions</td>
                    <td className="py-4 px-4 sm:px-6 lg:px-8">60,00,000</td>
                  </tr>
                  <tr className="bg-yellow-300">
                    <td className="py-4 px-4 sm:px-6 lg:px-8">Runners Up</td>
                    <td className="py-4 px-4 sm:px-6 lg:px-8">30,00,000</td>
                  </tr>
                  <tr className="bg-red-300">
                    <td className="py-4 px-4 sm:px-6 lg:px-8">
                      2nd Runners Up
                    </td>
                    <td className="py-4 px-4 sm:px-6 lg:px-8">20,00,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-4 sm:px-6 lg:px-8">4th Place</td>
                    <td className="py-4 px-4 sm:px-6 lg:px-8">15,00,000</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-4 sm:px-6 lg:px-8">5th Place</td>
                    <td className="py-4 px-4 sm:px-6 lg:px-8">12,50,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-4 sm:px-6 lg:px-8">6th Place</td>
                    <td className="py-4 px-4 sm:px-6 lg:px-8">10,00,000</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-4 sm:px-6 lg:px-8">7th Place</td>
                    <td className="py-4 px-4 sm:px-6 lg:px-8">9,00,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-4 sm:px-6 lg:px-8">8th Place</td>
                    <td className="py-4 px-4 sm:px-6 lg:px-8">8,00,000</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-4 sm:px-6 lg:px-8">
                      9th - 10th Place
                    </td>
                    <td className="py-4 px-4 sm:px-6 lg:px-8">6,00,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-4 sm:px-6 lg:px-8">
                      11th - 12th Place
                    </td>
                    <td className="py-4 px-4 sm:px-6 lg:px-8">4,00,000</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-4 sm:px-6 lg:px-8">
                      13th - 16th Place
                    </td>
                    <td className="py-4 px-4 sm:px-6 lg:px-8">2,50,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* MVP of BGIS */}
            <div className="bg-blue-500 text-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl lg:text-2xl font-bold mb-4">
                MVP OF BGIS
              </h3>
              <p className="text-3xl">INR 2,50,000</p>
            </div>

            {/* Most Finishes */}
            <div className="bg-green-500 text-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl lg:text-2xl font-bold mb-4">
                MOST FINISHES
              </h3>
              <p className="text-3xl">INR 1,00,000</p>
            </div>

            {/* Lone Survivor */}
            <div className="bg-yellow-500 text-gray-900 rounded-lg shadow-lg p-6">
              <h3 className="text-xl lg:text-2xl font-bold mb-4">
                LONE SURVIVOR
              </h3>
              <p className="text-3xl">INR 1,00,000</p>
            </div>

            {/* Rampage */}
            <div className="bg-purple-500 text-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl lg:text-2xl font-bold mb-4">RAMPAGE</h3>
              <p className="text-3xl">INR 1,00,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Esports;
