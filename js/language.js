var locale = "en";
const translations = {
    "ru": {
        "title": "СЧАСТЛИВАЯ МОНЕТКА",
        "heads": "ОРЁЛ",
        "tails": "РЕШКА",
        "statsCountAllLabel": "ВСЕГО:",
        "statsCountHeadsLabel": "ОРЛОВ:",
        "statsCountTailsLabel": "РЕШЕК:",
    },
    "en": {
        "title": "LUCKY COIN",
        "heads": "HEADS",
        "tails": "TAILS",
        "statsCountAllLabel": "ALL:",
        "statsCountHeadsLabel": "HEADS:",
        "statsCountTailsLabel": "TAILS:",
    }
};

for (let lang of navigator.languages) {
    if (Object.keys(translations).includes(lang)) {
        locale = lang;
        break;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document
    .querySelectorAll("[data-i18n-key]")
    .forEach(translateElement);
});

function translateElement(element) {
    const key = element.getAttribute("data-i18n-key");
    element.innerText = translateString(key);
}

function translateString(key) {
    return translations[locale][key];
}