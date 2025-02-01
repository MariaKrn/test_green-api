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
export const receiveMessage = async (id, token) => {
  const url = `http://localhost:4000/proxy/waInstance${id}/receiveNotification/${token}?receiveTimeout=5`;
  const response = await fetch(url, {
    method: "GET",
  });
  console.log(response);
};

//1103183129
