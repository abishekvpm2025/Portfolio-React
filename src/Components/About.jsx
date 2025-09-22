import React from "react";
import {
  MapPin,
  Mail,
  Calendar,
  GraduationCap,
  Heart,
  Coffee,
  BookOpen,
  Target,
  Award,
  Users,
} from "lucide-react";

const About = () => {
  const personalStats = [
    {
      icon: GraduationCap,
      label: "Education",
      value: "B.E MECH",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Calendar,
      label: "Age",
      value: "23 Years",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Award,
      label: "CGPA",
      value: "7.2/10",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Users,
      label: "Projects",
      value: "4+",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const interests = [
    {
      icon: Coffee,
      title: "Problem Solving",
      desc: "Love tackling coding challenges and finding elegant solutions",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      desc: "Always exploring new technologies and frameworks",
    },
    {
      icon: Heart,
      title: "UI/UX Design",
      desc: "Passionate about creating beautiful, user-friendly interfaces",
    },
    {
      icon: Target,
      title: "Career Goals",
      desc: "Aspiring to become a skilled full-stack developer",
    },
  ];

  return (
    <section id="About" className="py-16 bg-gray-50 scroll-mt-20 ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <span className="block w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Hello! I'm{" "}
                <span className="font-semibold text-gray-900">Abishek </span>,
                a passionate Computer Science graduate with a love for creating
                digital solutions. I recently completed my B.Tech and I'm
                excited to start my journey as a developer.
              </p>
              <p>
                During my studies, I discovered my passion for web development
                and have been building projects that combine functionality with
                great user experience. I believe in writing clean, efficient
                code and creating applications that make a difference.
              </p>
              <p>
                As a fresh graduate, I bring enthusiasm, fresh perspectives, and
                a strong foundation in programming. I'm eager to learn from
                experienced developers and contribute to innovative projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>Chennai,TamilNadu</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>abishekvpm2025@email.com</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-800">
                AR
              </div>
              <div className="absolute -top-4 -right-4 bg-green-400 text-green-900 px-4 py-2 rounded-full text-sm font-bold rotate-12 shadow-lg">
                Available for Work!
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {personalStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 bg-gradient-to-r ${stat.color} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What I'm Passionate About
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group text-center"
              >
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <interest.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {interest.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {interest.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
