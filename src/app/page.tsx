"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/quiz");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-500 flex flex-col items-center justify-center p-4 sm:p-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-white text-center">
        Welcome to the Coolest Quiz Ever!
      </h1>

      <p className="mb-8 text-lg sm:text-xl md:text-2xl text-gray-200 text-center">
        If you get a high score, you're officially a quiz master!
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["A", "B", "C", "D"].map((option, index) => (
          <span
            key={index}
            className="py-5 px-7 md:py-7 md:px-9 bg-indigo-500 text-center text-3xl sm:text-4xl md:text-5xl font-semibold rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-indigo-700 transition-colors"
            onClick={handleRedirect}
          >
            {option}
          </span>
        ))}
      </div>

      <button
        onClick={handleRedirect}
        className="mt-8 py-3 px-6 bg-blue-500 text-xl sm:text-2xl text-white rounded-full hover:bg-blue-600 transition"
        style={{ borderRadius: "20px" }}
      >
        Start the Adventure! 🚀
      </button>
    </main>
  );
}
