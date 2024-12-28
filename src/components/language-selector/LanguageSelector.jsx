import { useEffect, useState } from "react";
import i18next from "../../i18next";
import { useTranslation } from "react-i18next";

const languageOptions = [
  { language: "Italian", code: "it" },
  { language: "English", code: "en" },
];

export default function LanguageSelector() {
  const [language, setLanguage] = useState(i18next.language);

  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    i18next.changeLanguage(selectedLanguage);
  };

  useEffect(() => {
    document.body.dir = i18n.dir(); // Sets the body to ltr or rtl
  }, [i18n.language]);

  return (
    <select id="language" value={language} onChange={handleLanguageChange}>
      {languageOptions.map((option, index) => (
        <option value={option.code} key={index}>
          {option.language}
        </option>
      ))}
    </select>
  );
}
