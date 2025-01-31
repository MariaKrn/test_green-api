export const testFunction = async () => {
  const url =
    "http://localhost:4000/proxy/waInstance1103183129/SendMessage/cd7343ff26424de3a9d0e8511ca00675cf967bdaf5634942a0";
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      chatId: "79067384810@c.us",
      message: "test123",
    }),

    // ...
  });
  console.log(response);
  debugger;
};
