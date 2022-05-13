import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import JobsList from "./components/jobslist";

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

let lang;
const getLocale = ()=>{
    const userLang = navigator.language || navigator.userLanguage;
    console.log(userLang);
    lang = userLang;
    return userLang ==="es" ? localeEsMessages : localeEnMessages;
}
getLocale();
ReactDOM.render(
<IntlProvider locale={lang} messages={getLocale()}>
<JobsList />
</IntlProvider>,
 document.getElementById("root"));
