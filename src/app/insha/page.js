import Header from "@/components/ui/Header";
import MongoDB from "@/icon/mongo";
import ReactNative from "@/icon/react_native";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div id="sticky-wrapper">
      <section className="h-screen bg-black md:h-auto">
        <Header menu={false} />
        <section className="cover-background h-full py-28 sm:pb-16">
          <div className="absolute right-5 top-14 aspect-square w-[700px] md:top-72 md:h-[300px] md:w-[300px]">
            <div className="absolute left-1/2 top-1/2 aspect-square w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#5528E7] to-[#2C00BB] shadow-xl before:absolute before:left-1/2 before:top-1/2 before:block before:aspect-square before:w-[550px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-normal before:rounded-full before:bg-gradient-to-b before:from-[#5528E7] before:to-[#2C00BB] before:opacity-30 before:shadow-xl after:absolute after:left-1/2 after:top-1/2 after:block after:aspect-square after:w-[700px] after:-translate-x-1/2 after:-translate-y-1/2 after:content-normal after:rounded-full after:bg-gradient-to-b after:from-[#5528E7] after:to-[#2C00BB] after:opacity-30 after:shadow-xl after:blur-3xl md:h-[100px] md:w-[100px] md:before:h-[200px] md:before:w-[200px] md:after:h-[300px] md:after:w-[300px]"></div>
          </div>
          <div className="container relative h-full">
            <div className="grid h-full grid-cols-4 items-center md:grid-cols-1 md:gap-10">
              <div className="col-span-3 md:col-span-1">
                <span className="mb-6 inline-block text-7xl font-bold text-white md:text-5xl sm:text-4xl">
                  Insha
                </span>
                <p className="text-md w-[70%] md:w-full">
                  Insha is an innovative platform developed using React Native
                  and MongoDB, designed to connect users with service providers
                  for various construction-related needs. The platform
                  facilitates seamless communication and service requests,
                  ensuring efficient and effective interactions between users
                  and providers.
                </p>
              </div>
              <div className="col-span-1">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/assets/insha/Home.webp"
                    width={780}
                    height={1688}
                    alt="Hot Wheels"
                    objectFit="cover"
                    className="h-full w-full overflow-hidden rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* <section className="bg-black pb-10">
        <div className="container h-full">
          <Image
            src="/assets/recherche/recherche-product.webp"
            width={2400}
            height={1120}
            unoptimized
            alt="diciple-dashboard"
            className="h-full w-full rounded-xl object-contain"
          />
        </div>
      </section> */}
      <section className="bg-black py-10">
        <div className="container">
          <div className="mb-10">
            <h4 className="mb-4 text-4xl font-bold text-white sm:text-2xl">
              Project Description
            </h4>
            <p className="text-lg">
              Insha is developed using React native and MongoDB, designed to
              connect users with service providers for various
              construction-related needs. The platform facilitates seamless
              communication and service requests, ensuring efficient and
              effective interactions between users and providers.
            </p>
            <strong className="mb-4 mt-5 inline-block text-white">
              Key Features : &nbsp;{" "}
            </strong>
            <ul className="list-disc pl-10">
              <li className="mb-3 text-sm">
                <strong className="text-white">Service Requests:</strong> Users
                can easily request services such as renting containers or water
                tanks.
              </li>
              <li className="mb-3 text-sm">
                <strong className="text-white">Quotes Management:</strong>{" "}
                Service providers can view requests and provide quotes, enabling
                competitive pricing and options for users.
              </li>
              <li className="mb-3 text-sm">
                <strong className="text-white">
                  User-Provider Communication:
                </strong>{" "}
                Implemented Chat features to facilitate direct communication
                between users and service providers.
              </li>
              <li className="text-sm">
                <strong className="text-white">Responsive Design:</strong>{" "}
                Ensured a smooth and intuitive user experience with responsive
                and user-friendly interfaces.
              </li>
            </ul>
          </div>
          <div className="mb-4 flex items-center gap-10 md:gap-4">
            <h2 className="sm:text-md text-xl font-semibold text-white">
              Technology Used:
            </h2>
            <ul className="flex items-center gap-4 md:gap-2">
              <li className="aspect-square md:w-7">
                <ReactNative className="w-full" />
              </li>
              <li className="aspect-square md:w-7">
                <MongoDB />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-black pb-28">
        <div className="container grid grid-cols-2 gap-4 sm:grid-cols-1">
          <Image
            src="/assets/insha/02.webp"
            width={1600}
            height={1600}
            alt="Hot Wheels"
            className="h-full w-full rounded-xl object-cover md:col-span-1"
          />
          <Image
            src="/assets/insha/03.webp"
            width={1600}
            height={1600}
            alt="Hot Wheels"
            className="h-full w-full rounded-xl object-cover md:col-span-1"
          />
          <Image
            src="/assets/insha/01.webp"
            width={1200}
            height={400}
            alt="Hot Wheels"
            unoptimized
            className="col-span-2 w-full rounded-xl object-cover md:col-span-1"
          />
        </div>
      </section>
    </div>
  );
};

export default page;
