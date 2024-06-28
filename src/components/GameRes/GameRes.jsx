import React from "react";
import game_res from "../../assets/GameresImg/game_res.webp";

const GameRes = () => {
  return (
    <div>
      {/* ========= heading ========= */}
      <div className="flex items-center justify-center text-3xl sm:text-5xl bg-orange-500 min-h-60 font-bold text-white">
        <p>Game Resposnsibility</p>
      </div>

      {/* ========= game responsibily vedios 3 */}
      <div className="flex flex-col items-center justify-center gap-5 py-20 bg-[#e9e9e9] text-center px-4">
        <div>
          <p className="text-2xl sm:text-4xl lg:text-6xl font-bold text-[#333333]">
            IN GAME FEATURES FOR SAFE GAMING
          </p>
          <p className="text-base sm:text-2xl">
            As a parent, we know most of the time you are wondering why your
            child is spending so much time with their phone. What games are they
            playing? Who are they talking to?
          </p>
        </div>
        <div>
          <iframe
            className="w-[350px] h-[250px]  md:w-[800px] md:h-[400px] lg:w-[1000px] lg:h-[500px] xl:w-[1200px] xl:h-[600px] sm:px-10 mx:px-0"
            src="https://www.youtube.com/embed/NP-uLAZo1yc?si=gZIjUve05prA4GLz"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <p className="text-sm sm:text-base">
          When we launched Battlegrounds Mobile India, we truly believed that
          creating a culture of responsible gaming was our responsibility too.
          So, here’s what we did about it.
        </p>

        {/* ========= saftey measures ========= */}
        <div className="bg-gray-400 mt-12 py-8 px-4 sm:px-8 lg:px-12 rounded-lg shadow-lg">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-gray-800">
            Virtual World Warning & Safety Measures
          </h2>

          {/* Bullet Points Section */}
          <ul className="divide-y divide-gray-300">
            {/* Virtual World Warning */}
            <li className="py-4">
              <h3 className="text-lg lg:text-xl font-semibold mb-2 text-gray-900">
                Virtual World Awareness
              </h3>
              <p className="text-base text-gray-800">
                Just before the game starts, our in-game audio reinforces that
                the game exists in a virtual world and is not real life.
              </p>
            </li>

            {/* OTP Authentication */}
            <li className="py-4">
              <h3 className="text-lg lg:text-xl font-semibold mb-2 text-gray-900">
                OTP Authentication
              </h3>
              <p className="text-base text-gray-800">
                Players below 18 must register a parent or guardian. An OTP is
                sent to the registered person's number before gameplay begins.
              </p>
            </li>

            {/* Breaktime Reminders */}
            <li className="py-4">
              <h3 className="text-lg lg:text-xl font-semibold mb-2 text-gray-900">
                Breaktime Reminders
              </h3>
              <p className="text-base text-gray-800">
                Timely reminders help players take breaks, encouraging a healthy
                balance between gaming and real life activities.
              </p>
            </li>

            {/* Gameplay Limits */}
            <li className="py-4">
              <h3 className="text-lg lg:text-xl font-semibold mb-2 text-gray-900">
                Gameplay Limits
              </h3>
              <p className="text-base text-gray-800">
                Players below 18 are restricted to a maximum of 3 hours of
                gaming per day, promoting moderation in gameplay.
              </p>
            </li>

            {/* Daily Spend Limits */}
            <li className="py-4">
              <h3 className="text-lg lg:text-xl font-semibold mb-2 text-gray-900">
                Daily Spend Limits
              </h3>
              <p className="text-base text-gray-800">
                An in-game daily spend limit of Rs. 7000 prevents overspending
                and encourages responsible gaming habits.
              </p>
            </li>

            {/* Moderated Game Graphics */}
            <li className="py-4">
              <h3 className="text-lg lg:text-xl font-semibold mb-2 text-gray-900">
                Moderated Game Graphics
              </h3>
              <p className="text-base text-gray-800">
                In-game graphics are sensitized to reduce violence, nudity, and
                bloodshed, promoting a healthy gaming environment.
              </p>
            </li>
          </ul>
        </div>

        {/* ========== End ========== */}

        <div className="pt-20">
          <div className="text-3xl lg:text-4xl font-bold mb-6 text-center text-gray-800">
            <p>INDIA, LET'S BATTLE THIS TOGETHER!</p>
          </div>
          <div className="max-w-full">
            <img src={game_res} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameRes;
