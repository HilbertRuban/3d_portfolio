import { skills } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Hilbert
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          With over 2 years of software development experience, I specialize in
          designing and developing web-based and client-server applications
          using NextJS, NodeJS, ExpressJS, and Laravel. I'm proficient in Agile
          methodology, database management (MySQL, MongoDB), and have experience
          with AWS services and various integrations. My journey in software
          development has enriched my problem-solving skills and decision-making
          capabilities, driving my passion for innovation and excellence. Let's
          connect to explore collaboration opportunities and share insights.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim autem
            eaque laboriosam, repellendus, adipisci similique maiores animi,
            veniam saepe nihil libero quibusdam exercitationem! Quis nostrum
            tenetur veniam ab iste labore.
          </p>
        </div>
        <div className="mt-12 flex"></div>
      </div>
    </section>
  );
};
export default About;
