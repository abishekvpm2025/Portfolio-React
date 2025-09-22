import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import React from "react";

const Contact = () => {
 const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "abishek2025@email.com",
    link: "mailto:abishekvpm2025@email.com",  
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    value: "+91975239775",
    link: "tel:+91975239775",  
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    value: "Chennai, Tamilnadu",
    link: "https://maps.google.com/?q=Chennai,Tamilnadu", 
  },
];


  const socialLInks = [
    {
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/abishekvpm2025",
      color: "hover:text-gray-950",
    },
    {
      icon: <Mail />,
      url: "abishekvpm2025@gmail.com",
      color: "hover:text-yellow-600",
    },
    {
      icon: <Twitter />,
      url: "",
      color: "hover:text-blue-800",
    },
    {
      icon: <Linkedin/>,
      url: "https://www.linkedin.com/in/abishek-r-884668267/",
      color: "hover:text-red-500",
    },
  ];
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white scroll-mt-20">
      <div>
        <div className="text-center">
          <h1 className="text-5xl font-bold  ">
            Get In Touch{" "}
            <span className="block h-1 w-30 mt-3 rounded-full mx-auto bg-gradient-to-r from-blue-500 to-purple-500"></span>
          </h1>

          <p className="text-xl  text-slate-300 mt-5 max-w-2xl mx-auto  ">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together!
          </p>
        </div>
      </div>

      <div className="  gap-12 items-start my-15 mx-10 flex   justify-between  ">
        <div>
          <h1 className="text-2xl font-bold text-white mb-8 ">
            Let's Start a Conversation
          </h1>
          <p className="text-lg max-w-2xl text-white mb-8 ">
            Whether you have a project in mind, want to discuss opportunities,
            or just want to say hello, I'd love to hear from you. I typically
            respond within 24 hours.
          </p>

          <div className="">
            {contactInfo.map((con, inx) => (
              <a href={con.link}  key={inx} className=" gap-5 flex items-center ">
                <div className="w-12 h-12 text-3xl bg-slate-800 flex rounded-xl items-center justify-center  mt-5 hover:scale-110  hover:bg-blue-500  ">
                  {con.icon}
                </div>

                <div>
                  <div className="mt-5 font-bold text-slate-400">
                    {con.title}
                  </div>

                  <div>{con.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className=" border-t border-slate-800 mt-10  ">
            <h1 className="font-bold text-xl  mb-5 mt-10">Follow Me</h1>
            <div className="flex gap-6">
              {socialLInks.map((links, lix) => (
                <a
                  key={lix}
                  href={links.url}
                  className={`flex  bg-slate-800 h-12 w-12 items-center justify-center rounded-xl hover:scale-110 ${links.color} `}
                >
                  {links.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-slate-800  rounded-2xl p-5 hover:scale-101 mr-10 ">
          <div className="flex flex-col">
            <label for="">Your Name</label>
            <input
              type="text"
              placeholder="Arun Kumar"
              className="border rounded-lg p-2  w-150 mb-5 mt-2 hover:border-blue-600  bg-slate-700 "
            />
          </div>
          <div className="flex flex-col">
            <label for="">Email</label>
            <input
              type="text"
              placeholder="arun@example.com"
              className="border rounded-lg p-2  w-150 mb-5 mt-2 hover:border-blue-600  bg-slate-700 "
            />
          </div>

          <div className="flex flex-col">
            <label for=""> Message</label>
            <textarea
              type="text"
              placeholder="Tell me about your project or just say hello..."
              className="border rounded-xl   h-60 w-150 mb-5 mt-2 hover:border-blue-600 p-2 bg-slate-700 "
            />
          </div>
          <div className="">
            <button className="flex items-center justify-center py-4 gap-1  rounded-3xl w-150 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-none ">
              <Send className=" " />
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 block ">
        <p className="text-slate-400 text-center ">
          © 2025 Abishek. Built with React, JavaScript, and Tailwind CSS.
        </p>
      </div>
    </section>
  );
};

export default Contact;
