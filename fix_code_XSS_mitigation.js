//We can use validator.js, which has validation functions for many common data types.

import escape from 'lodash.escape';
import isEmail from 'validator/lib/isEmail.js';
import isUUId from 'validator/lib/isUUID.js';

function handleMessageSend(messageId, senderEmail, messageContent)  {
  if (!isUUId(messageId)) {
    throw new Error("validation of messageId parameter failed");
  }

  if (!isEmail(senderEmail)) {
    throw new Error("validation of email parameter failed");
  }

  database.save(messageId, senderEmail, messageContent);
}

function generateSenderHTML(messageId) {
  let messageSender = database.loadSender(messageId);
  let escapedSender = escape(messageSender);
  return `<div class="messageSender">${escapedSender}</div>`;
}