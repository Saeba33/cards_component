import dataCardThree from "@/data/StyledCardThreeData";
import Image from "next/image";

export default function StyledCardThree() {
  return (
    <div className="bg-green-900 min-h-screen w-full flex items-center justify-center">
      <div className="flex flex-wrap justify-center gap-6">
        {dataCardThree.map((card, index) => (
          <div
            key={index}
            className=" w-[250px] p-3 bg-white/10 backdrop-blur-sm rounded-lg shadow-xl"
          >
            <div className="grid grid-rows-[auto,1fr,auto] h-full bg-white rounded-lg overflow-hidden">
              <Image
                src={card.img}
                alt="picture"
                width={250}
                height={200}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-3 grid grid-rows-[auto,1fr,auto] gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold">{card.title}</h3>
                  <span className="bg-green-200 px-3 py-1 rounded-full text-gray-700 text-sm">
                    {card.category}
                  </span>
                </div>
                <p className="text-sm">{card.description}</p>
                <span className="border border-gray-300 rounded-lg p-2 text-center text-2xl font-bold">
                  {card.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
