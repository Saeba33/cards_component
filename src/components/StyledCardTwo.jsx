import Image from "next/image";
import links from "@/data/StyledCardTwoData";

export default function StyledCardTwo() {
  return (
    <div className="min-h-screen w-full bg-red-800 flex items-center justify-center relative">
      <div className="relative w-[500px] h-[400px] group">
        <div className="w-full h-full overflow-hidden relative">
          <Image
            src="/1.jpg"
            alt="picture"
            width={500}
            height={400}
            className="w-full h-full object-cover duration-500 group-hover:opacity-50 group-hover:translate-x-9"
          />
        </div>
        <div className="absolute top-0 left-0 w-[70%] h-full bg-[#ffc107] perspective  duration-500 group-hover:rotate-hover group-hover:opacity-100 opacity-0">
          <div className="absolute top-1/4 p-5 text-center bg-white">
            <h3 className="text-red-500 text-3xl font-semibold">Title</h3>
            <span className="text-gray-800 text-xl font-medium">Subtitle</span>
            <p className="text-gray-800">
              Lorem ipsum is simple dummy text on the printing and typesetting
              industry.
            </p>
            <ul className="flex justify-center space-x-2 mt-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex w-[30px] h-[30px] bg-gray-800 text-white items-center justify-center transition-all duration-500 hover:bg-red-500"
                    aria-label={link.ariaLabel}
                  >
                    <i className="text-center" aria-hidden="true">
                      {link.text}
                    </i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
