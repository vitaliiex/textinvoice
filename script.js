async function processText() {
    const textInput = document.getElementById("textInput").value;
    const historyList = document.getElementById("historyList");
  
    try {
      const response = await fetch('https://api.openai.com/v1/tts/stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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' 
        },
        body: JSON.stringify({
          engine: 'tts-1', 
          text: textInput,
          format: 'mp3'
        })
      });
  
      if (!response.ok) {
        throw new Error('error');
      }
  
      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
  
      // Добавляє елемент в історію
      const li = document.createElement("li");
      li.textContent = textInput;
      historyList.appendChild(li);
  
      
      const audioPlayer = document.getElementById("audioPlayer");
      audioPlayer.src = audioUrl;
      audioPlayer.play();
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }
  