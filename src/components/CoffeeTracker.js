"use client";
import { useState } from "react";
import { FaCoffee, FaMinus, FaPlus, FaRedo } from "react-icons/fa";

export default function CoffeeTracker() {
  const [coffeeCount, setCoffeeCount] = useState(0);

  const getMoodEmoji = () => {
    if (coffeeCount === 0) {
      return { emoji: "😴", text: "Sleepy" };
    }
    if (coffeeCount === 1) {
      return { emoji: "🙂", text: "Warming up" };
    }
    if (coffeeCount === 2) {
      return { emoji: "😌", text: "Focused" };
    }
    if (coffeeCount === 3) {
      return { emoji: "😅", text: "Hyper" };
    }
    if (coffeeCount >= 4) {
      return { emoji: "🤪", text: "Over-caffeinated" };
    }
  };

  const handleIncrement = () => {
    setCoffeeCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCoffeeCount((prev) => Math.max(0, prev - 1));
  };

  const handleReset = () => {
    setCoffeeCount(0);
  };

  const { emoji, text } = getMoodEmoji();

  return (
    <div className="w-full py-16 bg-gradient-to-b from-gray-900 to-gray-800 px-6">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-center mb-8">
          <div className="h-1 w-10 bg-blue-500 mr-4 rounded-full"></div>
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-center">
            Mood-based Coffee Tracker
          </h2>
          <div className="h-1 w-10 bg-purple-500 ml-4 rounded-full"></div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-6 shadow-lg">
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-6 animate-bounce">{emoji}</div>

            <div className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-8">
              {text}
            </div>

            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gray-700/70 p-3 rounded-lg border border-gray-600">
                <FaCoffee className="h-5 w-5 text-amber-400" />
              </div>
              <div className="text-3xl font-bold text-white">{coffeeCount}</div>
              <div className="text-gray-400">cups today</div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleDecrement}
                disabled={coffeeCount === 0}
                className={`p-3 rounded-full ${
                  coffeeCount === 0
                    ? "bg-gray-700/30 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30"
                } border border-blue-500/30 transition-all`}
              >
                <FaMinus />
              </button>

              <button
                onClick={handleReset}
                className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-md hover:shadow-blue-500/30 transition-all"
              >
                <FaRedo />
              </button>

              <button
                onClick={handleIncrement}
                className="p-3 rounded-full bg-gray-700/50 text-gray-400 hover:bg-gray-700/70 hover:text-white border border-gray-600 transition-all"
              >
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
