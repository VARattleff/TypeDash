const commonDanishWords: string[] = [
    "jeg", "en", "han", "kan", "alle", "mens",
    "næsten", "ud", "alle", "gøre", "men", "ville",
    "synes", "at", "det", "er", "sådan", "det", "skal",
    "gøres", "mange", "blive", "ældre", "fordi", "jeg",
    "troede", "at", "jeg", "ikke", "ville", "kunne", "gøre",
    "en", "to", "men", "nogen", "nogle","vi", "du", "de", "vi", "i", "de",
    "når", "hvorfor", "hvor", "hvad", "hvilken", "hvordan",
    "hvor", "meget", "lidt", "stor", "lille", "god", "dårlig",
    "smuk", "grim", "sulten", "tørstig", "glad", "trist", "træt",
    "aktiv", "doven", "hurtig", "langsom", "varm", "kold",
    "lys", "mørk", "tidlig", "sen", "næste", "sidste", "første",
    "anden", "ny", "gammel", "ung", "rig", "fattig", "lykkelig",
    "ulykkelig", "flot", "grim", "interessant", "kedelig", "let",
    "svær", "stærk", "svag", "tyk", "tynd", "sund", "syg",
    "varm", "kold", "tør", "våd", "høj", "lav", "ren", "beskidt",
    "tidligere", "senere", "der", "her", "deres", "vores", "mine",
    "dine", "hans", "hendes", "dens", "vore", "jeres", "deres",
    "mit", "dit", "sit", "vort", "jeres", "deres"
];

const getRandomWords = (count: number): string[] => {
    const words: string[] = [];
    while (words.length < count) {
        const randomIndex = Math.floor(Math.random() * commonDanishWords.length);
        const word = commonDanishWords[randomIndex];
        if (!words.includes(word)) {
            words.push(word);
        }
    }
    return words;
};


const Sentence:string[] = [
    "Når kunst kræver forklaring, er der altid noget muggent ved den",
    "Jeg siger bare, at man skal være glad for vejret, så længe man kan trække det",
    "Livet er svært, men css er sværere",
    "Har man ikke andre glæder her i livet, så har man dog selvglæden",
    "Kunst er det, man ikke kan. Hvis man kunne, var det jo ingen kunst"
]


const code:string[] = [
    "const res = words.map(word => word.length);",
    "const mixedWords = getRandomWords(20).sort(() => Math.random() > 0.5 ? 1 : -1);",
    "const { correctWords, startCounting, setTimeElapsed, timeElapsed } = props;",
    "const FallbackPage: React.FC = () => {return <>...</>};",
]

function getCloudWord(): string[] {
    const mixedWords = getRandomWords(20).sort(() => Math.random() > 0.5 ? 1 : -1);
    const cloudWords = mixedWords.slice(0, Math.floor(Math.random() * mixedWords.length));

    if (cloudWords.length < 6) {
        const additionalWords = getRandomWords(20).sort(() => Math.random() > 0.5 ? 1 : -1);
        return cloudWords.concat(additionalWords.slice(0, 6 - cloudWords.length));
    }

    return cloudWords;
}


function getCloudSentence(): string[] {
    const randomIndex = Math.floor(Math.random() * Sentence.length);
    const randomSentence = Sentence[randomIndex];
    return randomSentence.split(' ');
}

function getCloudCode(): string[] {
    const randomIndex = Math.floor(Math.random() * code.length);
    const randomCode = code[randomIndex];
    return randomCode.split(' ');
}

export { getCloudWord, getCloudSentence, getCloudCode};

