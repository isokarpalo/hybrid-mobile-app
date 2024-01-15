import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//antaa keltaisen varoituksen languages were undefined or empty undefined

const resources = {
    EN: {
        translation: {
            Finnish: "Finnish",
            English: "English",
            home: "Home"
        }
    },
    FI:  {
        translation: {
            Finnish: "Suomi",
            English: "Englanti",
            home: "Koti"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3', 
        resources,
        lang: "EN",
        interpolation: {
            escapeValue: false
        }
    });