import StyledCardOneData from "@/data/StyledCardOneData";
import Image from "next/image";

export default function StyledCardOne() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-yellow-600">
      <div className="flex justify-around w-full">
        {StyledCardOneData.map((card, index) => (
          <div
            key={index}
            className="relative flex items-end w-[280px] h-[460px] rounded-xl shadow-xl transition-transform duration-500 ease-out hover:translate-y-5"
          >
            <Image
              src={card.src}
              alt={card.title}
              width={280}
              height={280}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-end bg-black/60 rounded-lg transition-opacity duration-500 opacity-0 hover:opacity-100">
              <div className="p-6 text-white">
                <h1 className="text-4xl font-bold">{card.title}</h1>
                <p className="mt-2 text-sm tracking-wide">{card.description}</p>
                <button className="mt-4 px-3 py-2 bg-white text-black font-bold rounded hover:bg-blue-500 hover:text-white transition-all duration-400">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
