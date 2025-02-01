import { useNavigate } from "react-router-dom";

export default function EntryPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-between px-12 md:px-20 bg-gradient-to-r from-green-50 to-green-100">
        {/* Left Section */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-9xl font-extrabold text-green-700 leading-tight">
            Support Local Farmers & Vendors 🌱
          </h1>
          <p className="mt-6 text-2xl text-gray-800 font-semibold leading-relaxed">
            Every purchase from a small vendor sustains a farmer’s livelihood
            and brings you the freshest, organic produce. Choose local. Choose
            fresh. Make a difference today! 🌾
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col md:flex-row gap-6">
            <button
              onClick={() => navigate("/signup")}
              className="bg-green-600 text-white px-10 py-4 text-xl rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            >
              Sign Up
            </button>
            <button
              onClick={() => navigate("/signin")}
              className="border-2 border-green-600 text-green-700 px-10 py-4 text-xl rounded-lg shadow-md hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Sign In
            </button>
          </div>
        </div>

        {/* Right Section (For Animation) */}
        <div className="w-full md:w-[55%] flex justify-center mt-8 md:mt-0">
          {/* Enlarged Animation Box */}
          <div className="w-[550px] h-[550px] bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-300">
            <p className="text-gray-500 text-xl">Your Animation Here 🎥</p>
          </div>
        </div>
      </div>
    </div>
  );
}
