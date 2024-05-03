import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';




function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("es-ES");

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setLang(lang);
  };
  


  return (
    <>
      <div className="container">
        {lang == "es-ES" ? (
          <>
            {" "}
            <button onClick={() => changeLang("en-US")}>{t("lang.en")}</button>
            <h1>{t("home.title")}</h1>
            <h3>{t("home.subtitle")}</h3>
            <p>{t("home.meh.1")}</p>
          </>
        ) : (
          <>
            {" "}
            <button onClick={() => changeLang("es-ES")}>{t("lang.es")}</button>
            <h1>{t("home.title")}</h1>
            <h3>{t("home.subtitle")}</h3>
            <p>{t("home.meh.1")}</p>
          </>
        )}
      </div>
    </>
  );
}


export default App
