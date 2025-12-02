import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import { Projects } from "./Data/Projects";
import SkillsContainer from "./components/SkillsContainer";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const pinContainer = useRef<HTMLDivElement>(null);
  const heroContainer = useRef<HTMLDivElement>(null);
  const ParentContainer = useRef<HTMLDivElement>(null);
  const AboutParaRef = useRef<HTMLDivElement>(null);
  const projectsContainer = useRef<HTMLDivElement>(null);
  const skillsContainer = useRef<HTMLDivElement>(null);
  const ContactRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (
      heroContainer.current &&
      ParentContainer.current &&
      pinContainer.current
    ) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinContainer.current,
          start: "top top",
          end: "top -100%",
          scrub: 2,
          pin: true,
        },
      });

      tl.to(heroContainer.current, {
        xPercent: 50,
        ease: "power1.inOut",
      });
      tl.to(
        ParentContainer.current,
        {
          xPercent: 100,
          ease: "power1.inOut",
        },
        "<"
      );
    }
    if (AboutParaRef.current) {
      const split = new SplitText(AboutParaRef.current, {
        type: "words,chars",
      });
      gsap.from(split.chars, {
        color: "#ffffff55",
        stagger: 0.1,
        scrollTrigger: {
          trigger: AboutParaRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
      });
    }
    if (projectsContainer.current) {
      let ProjectTiles = gsap.utils.toArray("#projectsContainer > div");
      ProjectTiles = ProjectTiles.splice(1);
      console.log(ProjectTiles);
      const projTl = gsap.timeline({
        scrollTrigger: {
          trigger: projectsContainer.current,
          start: "top top",
          end: `top -350%`,
          scrub: 1,
          pin: true,
        },
      });
      projTl.fromTo(
        ProjectTiles,
        {
          y: "150%",
        },
        {
          y: "0%",
          stagger: 1,
          duration: 1,
        }
      );
    }
    if (skillsContainer.current) {
      const skills = gsap.utils.toArray("#Skills-Container>div");
      const tl = gsap.timeline();
      tl.to(skills, {
        xPercent: -100,
        ease: "none",
        duration: 20,
        repeat: -1,
      });
      skillsContainer.current.addEventListener("mouseenter", () => {
        tl.pause();
      });
      skillsContainer.current.addEventListener("mouseleave", () => {
        tl.play();
      });
    }
    if (ContactRef.current) {
      const contactCard = ContactRef.current.querySelector("#ContactCard");
      gsap.to(contactCard, {
        scale: 0.6,
        borderRadius: "50px",
        backgroundColor: "#ffffff22",
        color: "#000000cc",
        scrollTrigger: {
          trigger: ContactRef.current,
          start: "top 40%",
          end: "bottom bottom",
          scrub: 1,
        },
        ease: "power1.inOut",
        })
      };
  });

  return (
    <>
      <main className="bg-[#111] min-h-screen min-w-full">
        <div ref={pinContainer} className=" h-screen w-full relative">
          <div className="w-full h-full absolute top-0 left-0">
            <video
              src="video/Abstaract.mp4"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
            ></video>
            <div
              ref={skillsContainer}
              id="Skills-Container"
              className="w-full h-[10vh] flex justify-between overflow-hidden items-center bg-black/10 backdrop-blur-xl absolute bottom-20 left-0 "
            >
              <div className="min-w-screen w-fit flex justify-between p-10 items-center ">
                <SkillsContainer />
              </div>
              <div className="min-w-screen w-fit flex justify-between p-10 items-center ">
                <SkillsContainer />
              </div>
            </div>
          </div>
          <div
            ref={ParentContainer}
            className=" h-full w-1/2 overflow-hidden flex flex-row justify-end items-center relative "
          >
            <div
              ref={heroContainer}
              className=" h-full min-w-screen flex flex-row-reverse"
            >
              <div className="h-full w-1/2 bg-white/30 backdrop-blur-md flex flex-col justify-center items-center text-center gap-10 p-10">
                <h1 className="text-7xl" style={{ fontFamily: "'Dancing Script', cursive" }}>
                  Welcome To My Portfolio
                </h1>
                <p className=" text-xl ">
                  Hi, I’m{" "}
                  <span className="text-[#5e3a00] font-bold">Dua Fatima,</span>{" "}
                  <br /> an aspiring Front-End Web Developer passionate about
                  creativity, clean design, and modern web experiences. Explore
                  my work, learn more about me, and see how I’m growing on my
                  journey into web development.
                </p>
              </div>
              <div className="h-full w-1/2 bg-black/30 backdrop-blur-md flex flex-col justify-center items-center text-center gap-10 p-10 text-white">
                <h2 className="font-thin text-2xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Front-End Web Developer (In Progress) | CIT & CBT Certified
                </h2>
                <p className="text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  I’m currently learning JavaScript and building responsive,
                  user-friendly digital experiences. I love designing simple,
                  meaningful interfaces and turning creative ideas into
                  functional web projects.
                  <br />
                  My focus is on continuous learning, improving my skills, and
                  growing into a confident modern web developer.
                  <br />
                  I’m open to internships, training-based roles, and entry-level
                  opportunities where I can apply my skills and keep learning.
                  <br />
                  Let’s connect and create something great together!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-white p-32 w-full h-fit flex flex-col gap-10 ">
          <h2 className="text-7xl" style={{ fontFamily: "'Dancing Script', cursive" }}>Get to Know Me</h2>
          <h3 className="text-4xl text-white/80" style={{ fontFamily: "'Dancing Script', cursive" }}>
            A little bit about myself
          </h3>
          <p
            ref={AboutParaRef}
            className="font-regular max-w-11/12 md:max-w-4/5 text-2xl md:text-3xl"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            I didn’t start with coding, I started with a love for creating
            things. Through my CIT and CBT courses, I discovered how much I
            enjoy working with digital tools and turning small ideas into
            something visual. That curiosity eventually led me to web
            development, where creativity meets logic in the best way. As I
            continue learning at SMIT, I’m building projects that help me
            understand how real digital experiences are made. Each step
            motivates me to grow, improve, and explore where this journey in
            modern web development can take me.
          </p>
        </div>
        <div
          ref={projectsContainer}
          className=" text-white p-32 w-full min-h-screen flex flex-col gap-10 "
        >
          <h2 className="text-5xl lg:text-7xl" style={{ fontFamily: "'Dancing Script', cursive" }}>
            Explore My Projects
          </h2>
          <h3 className="text-2xl md:text-4xl text-white/80" style={{ fontFamily: "'Dancing Script', cursive" }}>
            A collection of beginner-friendly yet functional projects created
            using HTML, CSS, JavaScript (in progress), and UI design principles.
          </h3>
          <div
            id="projectsContainer"
            className=" h-fit grid grid-cols-1 relative w-full bg-amber-300"
          >
            {Projects.map((project) => {
              return (
                <div className="w-full h-[60vh] border-black border-2 flex flex-col  lg:flex-row justify-center items-center rounded-2xl overflow-hidden absolute bg-white/50 text-black backdrop-blur-2xl top-0">
                  <div className=" h-full w-full lg:w-4/5 relative flex justify-center items-center p-2 md:p-10 rounded-2xl">
                    <img
                      src={project.ImageLink}
                      alt={project.title}
                      className=" object-cover rounded-2xl"
                    />
                  </div>
                  <div className=" h-full w-full lg:w-2/5 relative flex flex-col justify-center items-center p-2 gap-5 lg:gap-10 text-center">
                    <h3 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Dancing Script', cursive" }}>
                      {project.title}
                    </h3>
                    <p className="text-xl md:text-xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {" "}
                      {project.description}{" "}
                    </p>
                    <div className="buttons flex flex-row gap-10 text-md md:text-2xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      <a
                        href={project.githubLink}
                        className=" border-black border-2 px-4 py-2 rounded-full hover:bg-white transition-color duration-300  "
                      >
                        GitHub
                      </a>
                      <a
                        href={project.netlifyLink}
                        className=" border-black border-2 px-4 py-2 rounded-full hover:bg-white transition-color duration-300  "
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          id="Certificates"
          className=" text-white  w-full h-fit flex flex-col justify-between items-center gap-10"
        >
          <h2 className="p-32 text-5xl lg:text-7xl" style={{ fontFamily: "'Dancing Script', cursive" }}>
            Certificates
          </h2>
          <div className="grid grid-cols-1 p-10 md:grid-cols-2 max-w-[1140px] gap-10  ">
            <div className=" bg-white/40 backdrop-blur-2xl rounded-2xl p-10 flex flex-col gap-10">
              <h3 className="text-2xl" style={{ fontFamily: "'Dancing Script', cursive" }}>
                CIT - Certificate in Information Technology
              </h3>
              <p className="text-xl font-thin" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Completed foundational IT training focused on MS Office,
                documentation, basic Canva design, file organization, and
                essential computer concepts. This program strengthened my
                digital basics and gave me confidence with everyday tech tools.
              </p>
            </div>
            <div className=" bg-white/40 backdrop-blur-2xl rounded-2xl p-10 flex flex-col gap-10">
              <h3 className="text-2xl" style={{ fontFamily: "'Dancing Script', cursive" }}>
                CIT - Certificate in Information Technology
              </h3>
              <p className="text-xl font-thin" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Completed foundational IT training focused on MS Office,
                documentation, basic Canva design, file organization, and
                essential computer concepts. This program strengthened my
                digital basics and gave me confidence with everyday tech tools.
              </p>
            </div>
          </div>
        </div>
        <div ref={ContactRef} className=" h-screen w-full relative">
          <div className="w-full h-full absolute top-0 left-0">
            <video
              src="video/Abstaract.mp4"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
            ></video>
          </div>
          <div id="ContactCard" className=" h-full w-full overflow-hidden text-white bg-[#111111] backdrop-blur-2xl flex flex-col md:flex-row justify-end items-center relative ">
            <div className="w-full  md:h-full p-10 md:p-20 h-1/2 md:w-full flex flex-col justify-center items-center ">
              <img
                src="images/Dua.jpg"
                className=" rounded-[50px] w-full h-full  object-cover "
              />
            </div>
            <div className="w-full h-full  flex flex-col justify-center p-20 gap-10 items-center ">
              <h2 className="text-5xl lg:text-7xl" style={{ fontFamily: "'Dancing Script', cursive" }}>
                Get In touch
              </h2>
              <h3 className="text-center text-4xl" style={{ fontFamily: "'Dancing Script', cursive" }}>
                Wow, you made it all the way here! If you'd like to connect or
                get in touch, feel free to reach out to me at:
              </h3>
              <p className="text-2xl font-regular" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <span className=" font-bold">LinkedIn:</span> linkedin.com/in/dua-fatima-sayani210209
                <br />
                <span className=" font-bold">Email:</span> duaf210209@gmail.com
                <br />
                <span className=" font-bold">Location:</span> Karachi, Pakistan
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
