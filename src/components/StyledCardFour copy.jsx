import dataCardFour from "@/data/StyledCardFourData";
import Image from "next/image";

export default function StyledCardFour() {
  return (
    <div className="bg-slate-900 min-h-screen w-full flex items-center justify-center p-8">
      <div className=" flex flex-wrap items-center justify-center gap-10 p-6">
        {dataCardFour.map((card, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-start items-center w-[350px] max-w-full bg-white rounded-2xl transition-all duration-500 shadow-lg group"
          >
            {/* Container for image */}
            <div className="w-full rounded-t-2xl overflow-hidden transition-all duration-500">
              <Image
                src={card.img}
                alt="card"
                width={350}
                height={200} // Ajuste la hauteur en fonction de l'image
                className="w-[350px] h-[200px] object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {card.title}
            </h2>
            {/* Content */}
            <div className="h-0 hidden group-hover:flex flex-col items-center w-full p-6 text-center transition-all duration-500 group-hover:h-auto">
              <p className="text-gray-700 mb-4">{card.description}</p>
              <a
                href="#"
                className="inline-block px-6 py-3 text-white bg-black rounded-md hover:opacity-80"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
