import LanguageSelector from "../language-selector/LanguageSelector";
import PersonalData from "./personal-data/PersonalData";
import WebProjects from "./web-projects/WebProjects";
import style from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={style.homePage}>
      <LanguageSelector />
      <PersonalData />
      <WebProjects />
    </div>
  );
}
