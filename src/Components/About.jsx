import React from "react";

const About = () => {
  return (
    <section className="py-10 bg-gray-50 px-10 ">
      <div className="flex  justify-center mt-12">
        <h1 className=" text-4xl  font-bold text-gray-900 flex flex-col  items-center ">
          About Me
          <span className="h-1 w-25 mt-3  bg-gradient-to-r from-blue-500 to-purple-500"></span>
        </h1>
      </div>
      <div className="flex  mt-20 gap-60 ">
        <div className="flex flex-col gap-6 text-xl ml-10">
          <p>
            Hello! I'm Alex, a passionate full-stack developer with over 5 years
            of experience creating digital solutions that make a difference. I
            specialize in modern web technologies and have a keen eye for user
            experience and clean, maintainable code.
          </p>
          <p>
            My journey started with a Computer Science degree, and I've since
            worked with startups and established companies, helping them build
            scalable web applications that serve thousands of users daily.
          </p>
          <p>
            When I'm not coding, you'll find me contributing to open-source
            projects, mentoring junior developers, or exploring the latest web
            technologies. I believe in continuous learning and staying
            up-to-date with industry best practices. AJ
          </p>
        </div>

        <div className="mt-8">
          <div className=" bg-gradient-to-r from-blue-500 to-purple-500 h-64 w-64  text-white rounded-full flex mr-40 text-8xl  items-center font-bold  justify-center ">
            AR
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
