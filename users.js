const TextToVoice = require('./textToVoice');

class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.textToVoice = new TextToVoice('English'); 
    }

    setTextToVoiceLanguage(language) {
        this.textToVoice = new TextToVoice(language);
    }

    convertTextToSpeech(text) {
        return this.textToVoice.convertToSpeech(text);
    }
}

module.exports = User;
