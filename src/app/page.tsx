import React from "react";
import { Play, Mic, FileText, Settings2 } from "lucide-react";

const Page = () => {
  return (
    <div className="mt-24">
      {/* Hero Section */}
      <div className="flex flex-col gap-12 items-start w-full p-6 animate-fade-in">
        <div className="flex flex-col space-y-6 justify-center items-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Transform Text into Natural Speech
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Professional text-to-speech conversion with advanced AI voices.
            Perfect for content creators, educators, and accessibility needs.
          </p>
          <div className="flex lg:flex-row flex-col gap-4">
            <button className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white  lg:w-[fit-content] w-full px-4 py-2 lg:px-8 lg:py-4 rounded-xl text-lg font-semibold hover:shadow-lg hover:shadow-indigo-200 transition-all duration-300 flex items-center gap-2">
              <Play className="h-5 w-5" />
              Try it Free
            </button>
            <button className="bg-white border-2 border-gray-200 text-gray-700 lg:w-[fit-content] w-full px-4 py-2 lg:px-8 lg:py-4 rounded-xl text-lg font-semibold hover:border-indigo-200 hover:bg-indigo-50/50 transition-all duration-300 flex items-center gap-2">
              Learn More
            </button>
          </div>
        </div>

        <div className=" w-full flex-1 bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="bg-gray-50 p-6 rounded-xl mb-6 hover:bg-gray-100/80 transition-colors">
            <textarea
              className="w-full h-32 bg-transparent border-none resize-none text-gray-700 placeholder-gray-400 focus:outline-none text-lg"
              placeholder="Enter your text here to convert to speech..."
            />
          </div>
          <div className="flex justify-between items-center gap-4 lg:flex-row flex-col">
            <div className="flex gap-4 lg:flex-row flex-col w-full">
              <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-700 hover:border-indigo-200 transition-colors cursor-pointer">
                <option>English (US)</option>
                <option>English (UK)</option>
              </select>
              <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-700 hover:border-indigo-200 transition-colors cursor-pointer">
                <option>Natural</option>
                <option>Professional</option>
              </select>
            </div>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 hover:shadow-lg hover:shadow-indigo-200 lg:w-[fit-content] w-full">
              <Play className="h-5 w-5" />
              Convert
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Why Choose Our TTS Solution?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Mic className="h-12 w-12 text-indigo-600" />,
              title: "Natural Voices",
              description:
                "State-of-the-art AI voices that sound incredibly human-like and natural.",
            },
            {
              icon: <FileText className="h-12 w-12 text-indigo-600" />,
              title: "Multiple Formats",
              description:
                "Support for various text formats including TXT, PDF, and DOCX files.",
            },
            {
              icon: <Settings2 className="h-12 w-12 text-indigo-600" />,
              title: "Customizable",
              description:
                "Adjust speed, pitch, and emphasis to get exactly the voice you need.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 p-3 bg-indigo-50 rounded-xl w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Give Your Text a Voice?
            </h2>
            <p className="text-indigo-100 text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of content creators, educators, and businesses who
              trust our TTS solution.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-colors hover:shadow-xl hover:shadow-indigo-700/20">
              Start Converting Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
