export const sendMessage = async (phone, message, id, token) => {
  const url = `http://localhost:4000/proxy/waInstance${id}/SendMessage/${token}`;
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      chatId: `${phone}@c.us`,
      message: `${message}`,
    }),
  });
};

export const processIncomingMessage = async (
  idInstanceData,
  apiTokenInstanceData,
) => {
  let parsedResult = await receiveMessage(idInstanceData, apiTokenInstanceData);
  if (!parsedResult) {
    return null;
  }
  let receiptId = parsedResult.receiptId;
  let result = parsedResult.body.messageData.textMessageData.textMessage;
  deleteMessage(idInstanceData, apiTokenInstanceData, receiptId);
  return result;
};

export const receiveMessage = async (id, token) => {
  const url = `http://localhost:4000/proxy/waInstance${id}/receiveNotification/${token}?receiveTimeout=5`;
  const response = await fetch(url, {
    method: "GET",
  });
  return _readStream(response.body);
};

export const deleteMessage = async (id, token, receiptId) => {
  const url = `http://localhost:4000/proxy/waInstance${id}/deleteNotification/${token}/${receiptId}`;
  await fetch(url, {
    method: "DELETE",
  });
};

async function _readStream(stream) {
  const reader = stream.getReader();
  const decoder = new TextDecoder();

  let done = false;
  while (!done) {
    const { value, done: isDone } = await reader.read();
    if (value) {
      return JSON.parse(decoder.decode(value));
    }
    done = isDone;
  }

  console.log("Stream complete.");
}
