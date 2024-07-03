import Image from "next/image";
import React from "react";

const Work = ({
  className = `group row-span-2 h-96 overflow-hidden rounded-xl bg-darkgray`,
  link = "/",
  image = "/assets/images/works/Preview1.jpg",
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className={`relative${className ? ` ${className}` : ""}`}
    >
      <Image
        src={image}
        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm"
        width={1000}
        height={1000}
        alt="projects"
      />
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.5)] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="flex items-center gap-4 rounded-full border border-solid px-4 py-2 leading-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Preview
        </div>
      </div>
    </a>
  );
};

export default Work;
