const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
function convertToSpeech(text, language) {

    return `Speech output for "${text}" in ${language} language`;
}
app.post('/api/text-to-speech/convert', (req, res) => {
    const { text, language } = req.body;
    const speech = convertToSpeech(text, language);
    res.send(speech);
});

const port = 3001;
app.listen(port, () => console.log(`Text-to-Speech Service listening at http://localhost:${port}`));
