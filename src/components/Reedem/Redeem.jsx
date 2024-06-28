import React from "react";
import redeem_bg from "../../assets/RedeemImg/redeem_bg.jpg";
const Redeem = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <img src={redeem_bg} alt="" className="bg-cover bg-center" />
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full absolute">
        <h2 className="text-2xl font-bold mb-4">Redeem Page</h2>
        <form className="space-y-4 max-w-md mx-auto">
          <div>
            <label
              htmlFor="characterId"
              className="block text-sm font-medium text-gray-700"
            >
              Character ID
            </label>
            <input
              type="text"
              id="characterId"
              name="characterId"
              placeholder="Enter your Character ID"
              className="w-full py-2 text-base border-2 border-gray-500 px-2"
            />
          </div>
          <div>
            <label
              htmlFor="redemptionCode"
              className="block text-sm font-medium text-gray-700"
            >
              Redemption Code
            </label>
            <input
              type="text"
              id="redemptionCode"
              name="redemptionCode"
              placeholder="Enter your redemption code"
              className="w-full py-2 text-base border-2 border-gray-500 px-2"
            />
          </div>
          <div>
            <label
              htmlFor="verificationCode"
              className="block text-sm font-medium text-gray-700"
            >
              Verification Code
            </label>
            <input
              type="text"
              id="verificationCode"
              name="verificationCode"
              placeholder="Enter your verification code"
              className="w-full py-2 text-base border-2 border-gray-500 px-2"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            >
              Redeem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Redeem;
