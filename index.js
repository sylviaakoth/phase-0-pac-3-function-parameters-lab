function introduction(name = Aki) {
    return (`Hi, my name is ${name}.`);
}

function introductionWithLanguage(name, language = Ember.js) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

function introductionWithLanguageOptional(name = "Gracie", language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

introductionWithLanguageOptional ("Gracie", "Python")
