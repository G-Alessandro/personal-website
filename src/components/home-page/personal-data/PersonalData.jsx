import PersonalPhoto from "/assets/images/personal-photo.jpg";
import EmailSvg from "/assets/svg/email.svg";
import LinkedinSvg from "/assets/svg/linkedin.svg";
import GitHubSvg from "/assets/svg/github.svg";
import style from "./PersonalData.module.css";

const skills = [
  { name: "HTML", image: "html" },
  { name: "CSS", image: "css" },
  { name: "JavaScript", image: "javascript" },
  { name: "React", image: "react" },
  { name: "NodeJS", image: "node-js" },
  { name: "Express", image: "express" },
  { name: "PostgreSQL", image: "postgresql" },
  { name: "Prisma", image: "prisma" },
  { name: "Git", image: "git" },
  { name: "GitHub", image: "github" },
  { name: "npm", image: "npm" },
];

export default function PersonalData() {
  return (
    <div className={style.personalCard}>
      <div className={style.personalInfoContainer}>
        <div className={style.personalPhotoContainer}>
          <img src={PersonalPhoto} />
        </div>

        <div className={style.dataContainer}>
          <h2>Alessandro Gallo</h2>

          <a
            href="mailto:galloalessandro77@gmail.com"
            className={style.EmailContainer}
          >
            <img src={EmailSvg} />
            <p>galloalessandro77@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/alessandro-gallo-8b908028a/"
            target="_blank"
            className={style.linkContainer}
          >
            <img src={LinkedinSvg} />
            <p>Linkedin</p>
          </a>

          <a
            href="https://github.com/G-Alessandro"
            target="_blank"
            className={style.linkContainer}
          >
            <img src={GitHubSvg} />
            <p>GitHub</p>
          </a>
        </div>
      </div>

      <div className={style.skillContainer}>
        {skills.map((skill, skillIndex) => {
          return (
            <div key={skillIndex}>
              <img src={`/assets/svg/${skill.image}.svg`} />
              <p>{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
