import { Box, Button, Paper, TextField } from "@mui/material";

export const ChatPage = () => {
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
            <TextField></TextField>
          </Box>
          <Paper
            style={{
              width: "75%",
              display: "flex",
              paddingRight: "25px",
              paddingLeft: "25px",
            }}
          >
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
                  fullWidth
                  style={{ paddingRight: "20px" }}
                ></TextField>
                <Button variant={"contained"} color={"primary"}>
                  Отправить
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Paper>
    </Box>
  );
};
