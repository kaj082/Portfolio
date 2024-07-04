import Animator from "@/components/Animator";
import Logo from "@/components/Logo";
import MagneticButton from "@/components/MagneticButton";
import Progress from "@/components/Progress";
import Work from "@/components/Work";
import Header from "@/components/ui/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Progress Data
  const ProgressData = [
    {
      title: "React/Next Js",
      color: "#6900af",
      percentage: 80,
    },
    {
      title: "HTML/CSS",
      color: "#59c378",
      percentage: 98,
    },
    {
      title: "NodeJs",
      color: "#dd584f",
      percentage: 50,
    },
    {
      title: "MongoDB",
      color: "#ff9a00",
      percentage: 50,
    },
    {
      title: "React Native",
      color: "#00a9ff",
      percentage: 50,
    },
    {
      title: "ExpressJs",
      color: "#6900af",
      percentage: 50,
    },
  ];

  // Experiance Data
  const ExperianceData = [
    {
      year: "jan 23 - Jun 24",
      image: "/assets/dizayn.png",
      designation: "Frontend Developer",
      address: "Dizayn Creative Studio",
      link: "https://dizayn.io/",
    },
  ];

  // Works Data
  const WorksData = [
    {
      link: "/insha",
      image: "/assets/projects/insha.webp",
    },
    // {
    //   link: "/recherche",
    //   image: "/assets/projects/recherche.webp",
    // },
    // {
    //   link: "https://lithoreact.themezaa.com",
    //   image: "/assets/projects/ysdev-litho.jpg",
    // },
    // {
    //   link: "https://ysdeveloper-movie.netlify.app",
    //   image: "/assets/projects/ysdev-movie.jpg",
    // },
  ];

  return (
    <>
      <div id="sticky-wrapper">
        <Header />
        {/* Banner Section Start */}
        <section
          id="home"
          className="hero-banner relative h-screen overflow-hidden bg-black"
        >
          <div className="absolute -left-52 -top-14 z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-purple-400 to-blue-500 opacity-20 blur-3xl lg:-left-20 lg:h-[400px] lg:w-[400px] sm:h-72 sm:w-72"></div>
          <div className="absolute -right-96 -top-14 z-10 h-[600px] w-[600px] rounded-full bg-blue-900 opacity-20 blur-3xl lg:-right-40 lg:h-[400px] lg:w-[400px] sm:h-72 sm:w-72"></div>
          <div className="absolute left-0 top-0 z-30 w-full py-24">
            <div className="container mx-auto text-center">
              <Animator
                as="h1"
                to={{ y: 0, opacity: 1, duration: 1 }}
                innerClassName="opacity-0 translate-y-4"
                className="mb-4 font-jakarta text-7xl font-bold leading-tight text-white lg:text-5xl lg:leading-snug sm:text-3xl sm:leading-normal"
              >
                👋 Hey There, <br />{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
                  I&apos;m Kajal Dafada.
                </span>
              </Animator>
              <Animator
                as="span"
                innerClassName="opacity-0 translate-y-4"
                to={{ y: 0, opacity: 1, delay: 0.1, duration: 1 }}
                className="mb-4 block text-xl font-semibold text-white sm:text-lg"
              >
                React & React Native Developer.
              </Animator>
              <Animator
                as="p"
                to={{ y: 0, opacity: 1, delay: 0.2, duration: 1 }}
                className="mx-auto w-[400px] text-center sm:w-full"
                innerClassName="opacity-0 translate-y-4"
              >
                Love to unleashing the power of React & NextJs and creating the
                dynamic and scalable web solutions.
              </Animator>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 z-50 -translate-x-1/2">
            <div className="relative w-[400px] rounded-full rounded-b-none bg-transparent xs:w-[350px] hmd:w-[350px]">
              <div className="absolute -bottom-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 xs:-bottom-28 xs:h-[500px] xs:w-[500px] hmd:h-[500px] hmd:w-[500px]">
                <div className="absolute h-[600px] w-[600px] rounded-full bg-gradient-to-r from-purple-500 to-blue-900 xs:h-[500px] xs:w-[500px] hmd:h-[500px] hmd:w-[500px]"></div>
                <span className="absolute left-1/2 top-1/2 inline-block h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-purple-800 bg-transparent opacity-70 xs:h-[600px] xs:w-[600px] hmd:h-[600px] hmd:w-[600px]"></span>
                <span className="absolute left-1/2 top-1/2 inline-block h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-purple-800 bg-transparent opacity-30 xs:h-[800px] xs:w-[800px] hmd:h-[800px] hmd:w-[800px]"></span>
              </div>
              <Image
                src="/assets/kajal_profile.jpg"
                width={400}
                height={400}
                className="relative -bottom-10 z-10 aspect-square w-full rounded-full bg-darkgray object-cover shadow-lg brightness-90 hmd:-bottom-14"
                alt="robert downey"
              />
            </div>
          </div>
        </section>
        {/* Banner Section End */}

        {/* Advantage Section Start */}
        <section
          id="advantage"
          className="relative -mt-1 overflow-hidden bg-black py-40 lg:py-28 xs:py-20"
        >
          <div className="absolute bottom-14 left-14 h-[500px] w-[500px] md:-left-20 md:top-20 md:h-[300px] md:w-[300px]">
            <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-purple-400 to-blue-600 shadow-xl before:absolute before:left-1/2 before:top-1/2 before:block before:h-[350px] before:w-[350px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-normal before:rounded-full before:bg-gradient-to-b before:from-purple-400 before:to-blue-600 before:opacity-30 before:shadow-xl after:absolute after:left-1/2 after:top-1/2 after:block after:h-[500px] after:w-[500px] after:-translate-x-1/2 after:-translate-y-1/2 after:content-normal after:rounded-full after:bg-gradient-to-b after:from-purple-400 after:to-blue-600 after:opacity-30 after:shadow-xl after:blur-3xl md:h-[100px] md:w-[100px] md:before:h-[200px] md:before:w-[200px] md:after:h-[300px] md:after:w-[300px]"></div>
          </div>

          <div className="container grid grid-cols-12 gap-10 xl:gap-5 md:gap-10 xs:gap-x-0">
            <div className="col-span-5 col-start-2 xl:col-span-4 xl:col-start-1 md:col-span-6 md:col-start-4 xs:col-span-8 xs:col-start-3">
              <Animator
                as="div"
                speed={2}
                to={{
                  clipPath: "inset(0% -25% 0% 0%)",
                  duration: 1,
                  ease: "power4.out",
                }}
                innerClassName="[clip-path:inset(0%_100%_0%_0%)] relative h-[27rem] w-96 rounded-xl bg-[linear-gradient(180deg,#251f2e,#1b1b19)] py-10 text-center xl:w-full xs:h-80"
              >
                <h2 className="mb-5 bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text font-jakarta text-9xl font-black text-transparent xs:mb-2 xs:text-7xl">
                  1.6
                </h2>
                <span className="text-white">Years of Experiance</span>
                <Animator
                  as="div"
                  to={{
                    clipPath: "inset(0% 0% 0% 0%)",
                    duration: 0.7,
                    delay: 0.5,
                    ease: "power4.out",
                  }}
                  className="absolute -right-20 bottom-10 sm:-right-10"
                  innerClassName="[clip-path:inset(0%_100%_0%_0%)] flex items-center gap-4 rounded-xl bg-[linear-gradient(90deg,#1f2e22,#1b1b19)] p-5 text-left shadow-2xl"
                >
                  <h3 className="bg-gradient-to-r from-green-400 to-green-900 bg-clip-text font-jakarta text-3xl font-extrabold text-transparent">
                    100%
                  </h3>
                  <span className="flex-1 text-white">
                    Clients <br /> Satisfaction
                  </span>
                </Animator>
              </Animator>
            </div>
            <div className="col-span-5 xl:col-span-6 xl:col-start-7 md:col-span-12">
              <Animator
                as="h4"
                to={{ opacity: 1, delay: 1 }}
                innerClassName="opacity-0"
                className="mb-10 font-jakarta text-5xl font-bold text-white lg:mb-6 lg:text-3xl"
              >
                My Advantage
              </Animator>
              <Animator
                as="p"
                innerClassName="opacity-0"
                className="mb-20 lg:mb-10"
                to={{ opacity: 1, delay: 1.3 }}
              >
                As a developer, i possess a unique blend of technical skills and
                creativity. my attention to detail and problem-solving skills
                make me a valuable asset to any team. i enjoy tackling complex
                challenges and learning new technologies to stay ahead of the
                curve.
              </Animator>
              <div className="relative z-10 grid grid-cols-12 gap-6">
                {ProgressData?.map((item, i) => {
                  return (
                    <Animator
                      key={i}
                      as="div"
                      className="col-span-4 xs:col-span-12"
                      innerClassName="opacity-0 w-full"
                      to={{ opacity: 1, delay: 0.1 * i + 1.5, duration: 1.5 }}
                    >
                      <Progress
                        themeStyle="1"
                        thickness={3}
                        color={item.color}
                        percentage={item.percentage}
                        className="rounded-xl"
                        title={item.title}
                      />
                    </Animator>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        {/* Advantage Section End */}

        {/* Experiance Section Start */}
        <section
          id="experiance"
          className="relative -mt-1 overflow-hidden bg-black py-40 lg:py-28 xs:py-20"
        >
          <div
            className="absolute bottom-14 right-14 h-[500px] w-[500px] md:-right-20 md:bottom-20 md:h-[300px] md:w-[300px]"
            data-scroll
            data-scroll-speed={3}
          >
            <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-yellow-300 to-orange-400 shadow-xl before:absolute before:left-1/2 before:top-1/2 before:block before:h-[350px] before:w-[350px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-normal before:rounded-full before:bg-gradient-to-b before:from-yellow-300 before:to-orange-400 before:opacity-30 before:shadow-xl after:absolute after:left-1/2 after:top-1/2 after:block after:h-[500px] after:w-[500px] after:-translate-x-1/2 after:-translate-y-1/2 after:content-normal after:rounded-full after:bg-gradient-to-b after:from-yellow-300 after:to-orange-400 after:opacity-30 after:shadow-xl after:blur-3xl md:h-[100px] md:w-[100px] md:before:h-[200px] md:before:w-[200px] md:after:h-[300px] md:after:w-[300px]"></div>
          </div>
          <div className="container text-center">
            <Animator
              as="h4"
              to={{ opacity: 1, y: 0, duration: 1, ease: "power4.out" }}
              innerClassName="opacity-0 translate-y-8 text-transparent bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text"
              className="mb-10 font-jakarta text-5xl font-bold leading-snug lg:mb-5"
            >
              Experiance
            </Animator>
            <Animator
              as="p"
              innerClassName="opacity-0 text-center translate-y-8"
              className="mx-auto mb-20 w-[650px] sm:mb-10 sm:w-full"
              to={{
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power4.out",
                delay: 0.3,
              }}
            >
              As a developer, collaborated with cross-functional teams to create
              and launch several responsive, high-performance web applications
              within tight deadlines.
            </Animator>

            <div className="grid grid-cols-12 gap-4">
              {ExperianceData?.map((item, i) => {
                return (
                  <Animator
                    key={i}
                    as="div"
                    to={{
                      scale: 1,
                      y: 0,
                      opacity: 1,
                      duration: 1,
                      delay: i * 0.1,
                      ease: "power4.out",
                    }}
                    innerClassName="flex translate-y-8 scale-90 items-center gap-6 rounded-xl bg-darkgray p-5 opacity-0 shadow-xl xs:flex-wrap xs:justify-center xs:gap-1 xs:text-center"
                    className="col-span-8 col-start-3 lg:col-span-10 lg:col-start-2 sm:col-span-12"
                  >
                    <h5 className="text-md w-40 font-bold text-white sm:text-lg xs:order-2 xs:w-full">
                      {item.year}
                    </h5>
                    <Image
                      src={item.image}
                      width="80"
                      height="80"
                      className="h-20 w-20 overflow-hidden rounded-full bg-darkgray object-cover shadow-xl sm:h-16 sm:w-16 xs:order-1 xs:mx-auto xs:mb-5 xs:flex-shrink-0"
                      alt="company logo"
                    />
                    <div className="w-72 text-left xs:order-3 xs:w-full xs:text-center">
                      <h5 className="text-xl font-bold text-white sm:text-lg">
                        {item.designation}
                      </h5>
                      <span className="inline-block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                        {item.address}
                      </span>
                    </div>
                    <a
                      href={item.link}
                      target="_blank"
                      className="group flex items-center gap-4 text-white transition-colors duration-700 hover:text-gray-300 xs:order-4"
                    >
                      <span className="text-sm md:hidden">Go to website</span>{" "}
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6 transition-all duration-700 group-hover:translate-x-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </a>
                  </Animator>
                );
              })}
            </div>
          </div>
        </section>
        {/* Experiance Section End */}

        {/* Recent Work Section Start */}
        <section
          id="work"
          className="relative -mt-1 overflow-hidden bg-black py-40 lg:py-28 xs:py-20"
        >
          <div
            className="absolute bottom-14 left-14 h-[500px] w-[500px] md:-left-20 md:bottom-20 md:h-[300px] md:w-[300px]"
            data-scroll
            data-scroll-speed={3}
          >
            <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-green-300 to-green-600 shadow-xl before:absolute before:left-1/2 before:top-1/2 before:block before:h-[350px] before:w-[350px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-normal before:rounded-full before:bg-gradient-to-b before:from-green-300 before:to-green-600 before:opacity-30 before:shadow-xl after:absolute after:left-1/2 after:top-1/2 after:block after:h-[500px] after:w-[500px] after:-translate-x-1/2 after:-translate-y-1/2 after:content-normal after:rounded-full after:bg-gradient-to-b after:from-green-300 after:to-green-600 after:opacity-30 after:shadow-xl after:blur-3xl md:h-[100px] md:w-[100px] md:before:h-[200px] md:before:w-[200px] md:after:h-[300px] md:after:w-[300px]"></div>
          </div>
          <div className="container text-center">
            <Animator
              as="h4"
              to={{ opacity: 1, y: 0, duration: 1, ease: "power4.out" }}
              innerClassName="opacity-0 translate-y-8 text-transparent bg-gradient-to-r from-green-300 to-green-600 bg-clip-text"
              className="mb-10 font-jakarta text-5xl font-bold leading-snug lg:mb-5"
            >
              Recent Work
            </Animator>
            <Animator
              as="p"
              innerClassName="opacity-0 text-center translate-y-8"
              className="mx-auto mb-20 w-[650px] sm:mb-10 sm:w-full"
              to={{
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power4.out",
                delay: 0.3,
              }}
            >
              These are my collection of captivating projects with interactive
              features.
            </Animator>

            <div className="relative z-30 grid grid-cols-12 grid-rows-none gap-4">
              {WorksData?.map((item, i) => {
                switch (i) {
                  case 0:
                    return (
                      <Work
                        key={i}
                        link={item.link}
                        image={item.image}
                        className="group col-span-6 row-span-6 overflow-hidden rounded-xl bg-darkgray xs:col-span-12 xs:row-span-12"
                      />
                    );
                  case 9:
                    return (
                      <Work
                        key={i}
                        link={item.link}
                        image={item.image}
                        className="group col-span-6 row-span-6 overflow-hidden rounded-xl bg-darkgray xs:col-span-12 xs:row-span-12"
                      />
                    );
                  default:
                    return (
                      <Work
                        key={i}
                        link={item.link}
                        image={item.image}
                        className="group col-span-3 row-span-3 overflow-hidden rounded-xl bg-darkgray sm:col-span-6 sm:row-span-6 xs:col-span-12 xs:row-span-12"
                      />
                    );
                }
              })}
            </div>
          </div>
        </section>
        {/* Recent Work Section End */}

        {/* Contact Section Start */}
        <section
          id="contact"
          className="relative -mt-1 overflow-hidden bg-black py-60 xl:pt-48 sm:pt-28"
        >
          <div className="container text-center">
            <Animator
              as="div"
              className="mb-5 inline-block font-jakarta text-5xl font-bold leading-snug"
              innerClassName="rotate-12"
              to={{ rotate: 60, yoyo: true, repeat: -1, duration: 1 }}
            >
              👋
            </Animator>
            <Animator
              as="h4"
              speed={2}
              to={{ opacity: 1, y: 0, duration: 1, ease: "power4.out" }}
              innerClassName="opacity-0 translate-y-8 text-white"
              className="mb-20 font-jakarta text-5xl font-bold leading-snug sm:mb-10 sm:text-4xl xs:text-2xl"
            >
              Want to hire me?
            </Animator>
            <MagneticButton buttonClass="bg-gradient-to-r from-purple-700 to-blue-900 py-4 px-[55px] rounded-[35px] mb-20 sm:py-2 sm:px-10">
              <Link href="/" className="text font-jakarta">
                Contact Me
              </Link>
            </MagneticButton>
            <ul className="flex items-center justify-center gap-4">
              <li>
                <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://x.com/Kajal_082"
                  className="transition-all duration-500 hover:opacity-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    className="h-7 w-7"
                  >
                    <path
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                      fill="#fff"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.linkedin.com/in/kajal-d-1134601b5/"
                  className="transition-all duration-500 hover:opacity-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    className="h-7 w-7"
                  >
                    <path
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      fill="#fff"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </section>
        {/* Contact Section End */}
      </div>
    </>
  );
}
