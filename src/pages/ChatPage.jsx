import { Box, Button, Paper, TextField } from "@mui/material";
import { receiveMessage, sendMessage } from "../api/api";
import { useEffect, useState } from "react";

export const ChatPage = ({ idInstanceData, apiTokenInstanceData }) => {
  const [phone, setPhone] = useState("");
  const [chat, setChat] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      receiveMessage(idInstanceData, apiTokenInstanceData);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
                <Box maxHeight={"300px"} paddingTop={"20px"} overflow={"auto"}>
                  // TODO: change the heigth
                  <TextField
                    id="outlined-textarea"
                    height={"200px"}
                    multiline
                    fullWidth
                  />
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
