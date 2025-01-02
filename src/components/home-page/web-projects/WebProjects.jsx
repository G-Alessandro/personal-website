import { useTranslation } from "react-i18next";
import PreviewSvg from "/assets/svg/preview.svg";
import GitHubSvg from "/assets/svg/github.svg";
import style from "./WebProjects.module.css";

export default function WebProjects() {
  const { t } = useTranslation();
  const webProjectsTitle = t("web-projects-title");
  const webProject = t("web-project");
  const liveLink = t("links-string.live");
  const githubLink = t("links-string.gitHub");

  return (
    <div className={style.webProjects}>
      <h1 className={style.webProjectsTitle}>{webProjectsTitle}</h1>
      {webProject.map((project, projectIndex) => {
        return (
          <div key={projectIndex} className={style.project}>
            <div
              className={`${style.projectDataContainer} ${
                projectIndex % 2 !== 0 ? style.projectDataContainerRight : ""
              }`}
            >
              <div className={style.projectImageContainer}>
                <img src={`/assets/images/web-project/${project.image}`} />
              </div>

              <div className={style.projectDescription}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className={style.linksContainer}>
                  <a href={project.liveLink} target="_blank">
                    <img src={PreviewSvg} />
                    {liveLink}
                  </a>
                  <a href={project.gitHubLink} target="_blank">
                    <img src={GitHubSvg} />
                    {githubLink}
                  </a>
                </div>
                <h4>Features :</h4>
                <ul>
                  {project.features.map((feature, featureIndex) => {
                    return <li key={featureIndex}>{feature}</li>;
                  })}
                </ul>
              </div>
            </div>

            <div className={style.techStackContainer}>
              {project.techStack.map((tech, indexTech) => {
                return (
                  <div key={indexTech} className={style.techStack}>
                    <img src={`/assets/svg/${tech.image}.svg`} />
                    <p>{tech.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
