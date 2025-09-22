import { ExternalLink, Github } from "lucide-react";
import React from "react";

const Projects = () => {
  const tasks = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team collaboration, and advanced filtering.",
      image:
        "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather application with location-based forecasts, interactive maps, and detailed analytics.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Vue.js", "Python", "FastAPI", "Chart.js"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Social Media Analytics",
      description:
        "Comprehensive social media analytics dashboard with data visualization and automated reporting.",
      image:
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "D3.js", "Node.js", "Redis"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Restaurant Booking System",
      description:
        "Online reservation system with table management, customer notifications, and payment processing.",
      image:
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Angular", "Spring Boot", "MySQL", "AWS"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Fitness Tracking App",
      description:
        "Mobile-responsive fitness tracker with workout plans, progress monitoring, and social features.",
      image:
        "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
  ];
  return (
    <section id="projects" className="py-10 bg-white-200 px-10 scroll-mt-20 ">
      <div className="flex flex-col  text-center">
        <div>
          <h1 className=" text-4xl font-bold  ">
            Featured Projects
            <span className="block mx-auto   h-1 w-32  bg-gradient-to-r from-blue-500 to-purple-500 mt-3 "></span>
          </h1>
          <p className=" text-xl max-w-3xl mt-5 mx-auto ">
            A showcase of my recent work, demonstrating my skills in full-stack
            development, UI/UX design, and modern web technologies.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 py-20 gap-8">
        {tasks
          .filter((p) => p.featured)
          .map((pro, ind) => (
            <div key={ind} className=" relative  ">
              <div className=" bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 hover:scale-[1.02] transform">
                <img
                  src={pro.image}
                  alt={pro.title}
                  className=" w-200 h-60 rounded-t-2xl "
                />
                <div>
                  <h3 className="text-2xl font-bold m-5 ">{pro.title}</h3>
                  <p className="m-5">{pro.description}</p>
                </div>
                <div className=" flex flex-wrap gap-2 ml-5 ">
                  {pro.technologies.map((tech, ix) => (
                    <span
                      className=" bg-slate-200 rounded-4xl py-0.5 px-4"
                      key={ix}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex  m-5  gap-4  ">
                  <a
                    className="flex  items-center gap-1   w-30 justify-center bg-slate-400  rounded-4xl font-bold hover:bg-slate-600 "
                    href={pro.githubUrl}
                  >
                    <Github className="w-6 h-6" />
                    Code
                  </a>
                  <a
                    className="flex gap-1  rounded-4xl text-black font-bold bg-blue-400 w-60 h-8 items-center justify-center hover:bg-blue-600  "
                    href={pro.liveUrl}
                  >
                    <ExternalLink className="w-6 h-6" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Projects;
