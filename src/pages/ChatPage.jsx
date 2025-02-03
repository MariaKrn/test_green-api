import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { processIncomingMessage, sendMessage } from "../api/api";
import { useEffect, useRef, useState } from "react";

export const ChatPage = ({ idInstanceData, apiTokenInstanceData }) => {
  const [phone, setPhone] = useState("79067384810");
  const [chat, setChat] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const isProcessing = useRef(false);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (isProcessing.current) return;

      isProcessing.current = true;
      try {
        let message = await processIncomingMessage(
          idInstanceData,
          apiTokenInstanceData,
        );

        if (message) {
          let obj = { color: "red", message: message };
          setMessages((prevMessages) => [...prevMessages, obj]);
        }
      } catch (error) {
        console.error("Error processing message:", error);
      } finally {
        isProcessing.current = false;
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log("Updated incomingMessages:", messages);
  }, [messages]);

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "5%",
        height: "90%",
      }}
    >
      <Paper
        style={{
          width: "65%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "end",
            height: "100%",
          }}
        >
          <Box
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "20px",
            }}
          >
            <Box
              style={{
                paddingBottom: "20px",
              }}
            >
              Telephone Number
            </Box>
            <TextField
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            ></TextField>
            <Button
              onClick={() => setChat(true)}
              variant={"contained"}
              color={"primary"}
            >
              Создать чат
            </Button>
          </Box>
          <Paper
            style={{
              width: "75%",
              display: "flex",
              paddingRight: "25px",
              paddingLeft: "25px",
            }}
          >
            {chat && (
              <Box width={"100%"}>
                <Box
                  height={"70%"}
                  paddingTop={"20px"}
                  overflow={"auto"}
                  display="flex"
                  flexDirection="column"
                >
                  <Paper
                    style={{
                      height: "100%",
                      color: "gray",
                      border: "solid",
                    }}
                  >
                    {messages.map((message) => {
                      debugger;

                      return (
                        <Typography color={message.color}>
                          {message.message}
                        </Typography>
                      );
                    })}
                  </Paper>
                </Box>
                <Box
                  style={{
                    width: "100%",
                    marginTop: "50px",
                    marginBottom: "50px",
                    display: "flex",
                  }}
                >
                  <TextField
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    fullWidth
                    style={{ paddingRight: "20px" }}
                  ></TextField>
                  <Button
                    onClick={() => {
                      sendMessage(
                        phone,
                        message,
                        idInstanceData,
                        apiTokenInstanceData,
                      );
                      let obj = { color: "black", message: message };
                      setMessages((prevMessages) => [...prevMessages, obj]);
                      setMessage("");
                    }}
                    variant={"contained"}
                    color={"primary"}
                  >
                    Отправить
                  </Button>
                </Box>
              </Box>
            )}
          </Paper>
        </Box>
      </Paper>
    </Box>
  );
};
