import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "Html", level: 95 },
        { name: "Css", level: 90 },
        { name: "Javascript", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "React", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Express.js", level: 88 },
        { name: "SQL", level: 90 },

        { name: "MongoDB", level: 87 },
        { name: "GraphQL", level: 82 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 95 },
        { name: "Vs Code", level: 85 },
        { name: "Git Hub", level: 80 },
        { name: "Postman", level: 88 },
        { name: "AI Tools", level: 82 },
      ],
    },
  ];

  const technologies = [
    {
      name: "React",
      icon: "⚛️",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Next.js",
      icon: "▲",
      color: "from-black to-gray-800",
    },
    {
      name: "TypeScript",
      icon: "TS",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Node.js",
      icon: "🟢",
      color: "from-green-400 to-green-600",
    },
    {
      name: "Python",
      icon: "🐍",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "PostgreSQL",
      icon: "🐘",
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "MongoDB",
      icon: "🍃",
      color: "from-green-500 to-green-700",
    },
    {
      name: "Docker",
      icon: "🐳",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "AWS",
      icon: "☁️",
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "Tailwind",
      icon: "💨",
      color: "from-teal-400 to-cyan-500",
    },
    {
      name: "GraphQL",
      icon: "◈",
      color: "from-pink-400 to-pink-600",
    },
    {
      name: "Redis",
      icon: "🔴",
      color: "from-red-400 to-red-600",
    },
  ];
  return (
    <section className="py-10  bg-gray-100 px-10 ">
      <div>
        <div className=" flex flex-col items-center justify-center  ">
          <h1 className="text-4xl font-bold  ">
            Skills & Technologies{" "}
            <span className="block bg-gradient-to-r from-blue-500 to-purple-500 w-30 h-1 rounded-full mt-2 mx-auto "></span>{" "}
          </h1>
          <p className=" text-xl mt-2 max-w-xl text-center ">
            {" "}
            A comprehensive overview of my technical expertise and the tools I
            use to build modern web applications.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-10 mt-10 ">
        {technologies.map((tech, ix) => (
          <div
            key={ix}
            className="  group  bg-white h-40 w-56 rounded-2xl flex flex-col  justify-center hover:shadow-xl transition-all duration-300 transform hover:scale-105  hover:text-blue-500  "
          >
            <div
              className={`h-18 w-18 bg-gradient-to-br ${tech.color} flex flex-col items-center text-3xl text-white font-bold justify-center mx-auto  rounded-2xl hover:scale-102  `}
            >
              {tech.icon}
            </div>
            <h1 className="  text-center mt-2 font-medium ">{tech.name}</h1>
          </div>
        ))}
      </div>

      <div className=" grid grid-cols-3 gap-8 mt-10 ">
        {skillCategories.map((cater, cx) => (
          <div
            key={cx}
            className="  bg-white rounded-2xl m-2 hover:scale-101 hover:shadow-xl  hover:text-blue-600 hover:transition transform-250 "
          >
            <h1 className="text-center mt-5 text-xl font-bold ">
              {cater.title}
            </h1>
            <div className="m-5">
              {cater.skills.map((skill, slx) => (
                <div key={slx}>
                  <div className="flex justify-between mb-1.5 mt-3  font-semibold text-gray-700">
                    <span>{skill.name}</span>

                    <span className="">{skill.level}%</span>
                  </div>
                  <div className="mb-4">
                    <div
                      className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
