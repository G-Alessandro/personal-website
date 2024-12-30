import PersonalPhoto from "/assets/images/personal-photo.jpg";
import EmailSvg from "/assets/svg/email.svg";
import LinkedinSvg from "/assets/svg/linkedin.svg";
import GitHubSvg from "/assets/svg/github.svg";
import JavaScript from "/assets/svg/javascript.svg";
import HtmlSvg from "/assets/svg/html.svg";
import CssSvg from "/assets/svg/css.svg";
import ReactSvg from "/assets/svg/react.svg";
import NodeJsSvg from "/assets/svg/node-js.svg";
import ExpressSvg from "/assets/svg/express.svg";
import PostgreSqlSvg from "/assets/svg/postgresql.svg";
import PrismaSvg from "/assets/svg/prisma.svg";
import NpmSvg from "/assets/svg/npm.svg";
import style from "./PersonalData.module.css";

const programmingLanguage = [{ name: "JavaScript", image: JavaScript }];

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", image: HtmlSvg },
      { name: "CSS", image: CssSvg },
      { name: "React", image: ReactSvg },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "NodeJS", image: NodeJsSvg },
      { name: "Express", image: ExpressSvg },
      { name: "PostgreSQL", image: PostgreSqlSvg },
      { name: "Prisma", image: PrismaSvg },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "GitHub", image: GitHubSvg },
      { name: "npm", image: NpmSvg },
    ],
  },
];

export default function PersonalData() {
  return (
    <div className={style.personalCard}>
      <div className={style.personalPhotoContainer}>
        <img src={PersonalPhoto} />
      </div>

      <div className={style.dataContainer}>
        <h2>Alessandro Gallo</h2>

        <div className={style.EmailContainer}>
          <img src={EmailSvg} />
          <p>galloalessandro77@gmail.com</p>
        </div>

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

      <div className={style.skills}>
        <h3>Programming Language</h3>
        <div className={style.languages}>
          {programmingLanguage.map((language, languageIndex) => {
            return (
              <div key={languageIndex} className={style.languageContainer}>
                <img src={language.image} />
                <p>{language.name}</p>
              </div>
            );
          })}
        </div>

        <div className={style.categories}>
          {skills.map((skill, categoryIndex) => {
            return (
              <div key={categoryIndex} className={style.categoryContainer}>
                <h3>{skill.category}</h3>
                {skill.items.map((item, itemIndex) => {
                  return (
                    <div key={itemIndex} className={style.skillContainer}>
                      <img src={item.image} />
                      <p>{item.name}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
