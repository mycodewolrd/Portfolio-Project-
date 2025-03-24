import React from "react";
import ProfileImage from "../../assets/profile-pic (17).png";
const Hero = () => {
  return (
      <section id="home" className="min-h-screen section-padding flex ">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center justify-center gap-5">
            <img
              className="rounded-full w-50 md:mt-10 mt-20"
              src={ProfileImage}
              alt="profile"
            />
            <h1 className="mt-4 w-72 md:w-xl lg:w-3xl text-3xl md:text-6xl font-extrabold md:font-bold">
              <span className="bg-gradient-to-r from-[#DA7C25] to-[#B923E1] bg-[267deg] text-transparent bg-clip-text">
                I'm Rajnandini,
              </span>{" "}
              a web developer based in India
            </h1>
            <p className="text-center text-[16px] sm:text-[18px] md:px-8 w-72 md:w-xl">
              I’m a MERN Stack Web Developer, passionate about building
              impactful applications and continuously enhancing my skills to
              create innovative digital solutions. 🚀
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <button className="connect-btn">My Latest Work</button>
              <button className="btn py-4 px-8 rounded-full w-44 border-2 border-white hover:bg-gray-400 hover:text-[#1f0016] hover:border-[#1f0016]">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
