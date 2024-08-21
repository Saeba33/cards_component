import dataCardFour from "@/data/StyledCardFourData";
import Image from "next/image";

export default function StyledCardFour() {
  return (
    <div className="bg-slate-900 min-h-screen w-full flex items-center justify-center">
      <div className="relative flex flex-wrap items-center justify-center gap-10">
        {dataCardFour.map((card, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center w-[350px] bg-white rounded-xl shadow-xl transition-all ease-in-out duration-1000 p-6 group"
          >

            <div className=" transition-all duration-1000">
              <Image
                src={card.img}
                alt="card"
                width={100}
                height={100}
                className="w-[350px] h-[200px] object-cover rounded-xl group-hover:scale-75 group-hover:-translate-y-1/2 transition-all duration-1000 ease-in-out"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 py-3">
              {card.title}
            </h2>

            <div className=" max-h-0 opacity-0 group-hover:max-h-full group-hover:opacity-100 transition-all duration-1000 ease-in-out flex flex-col">
              <p className="text-gray-700">{card.description}</p>
              <a
                href="#"
                className="px-6 py-3 text-white bg-black rounded-md hover:opacity-80"
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
