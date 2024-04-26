class TextToVoice {
    constructor(language) {
        this.language = language;
    }

    convertToSpeech(text) {
        
        return `Speech output for "${text}" in ${this.language} language`;
    }
}

module.exports = TextToVoice;