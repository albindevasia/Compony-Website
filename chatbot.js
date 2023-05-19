document.addEventListener('DOMContentLoaded', function() {
    var sendBtn = document.getElementById('send-btn');
    var userInput = document.getElementById('user-input');
    var messageContainer = document.getElementById('message-container');
  
    sendBtn.addEventListener('click', function() {
      sendMessage();
    });
  
    userInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        sendMessage();
      }
    });
  
    function sendMessage() {
      var userMessage = userInput.value;
      if (userMessage.trim() !== '') {
        displayMessage(userMessage, 'user');
        generateResponse(userMessage);
        userInput.value = '';
      }
    }
  
    function displayMessage(message, sender) {
      var messageElement = document.createElement('div');
      messageElement.innerText = message;
      messageElement.classList.add('message');
      if (sender === 'user') {
        messageElement.classList.add('user-message');
      }
      messageContainer.appendChild(messageElement);
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  
    function generateResponse(userMessage) {

      var response = "Thank you for your message: '" + userMessage + "'.";
      displayMessage(response, 'bot');
   
    }
   
  });
