import { Box, Button, Paper, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/chat");
  };

  return (
    <Box
      style={{ display: "flex", justifyContent: "center", paddingTop: "10%" }}
    >
      <Paper
        style={{
          width: "40%",
          height: "50%",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "25px",
          paddingRight: "25px",
        }}
      >
        <TextField
          id="outlined-basic"
          label="idInstance"
          variant="outlined"
          fullWidth
          style={{
            marginTop: "50px",
            marginBottom: "50px",
            display: "flex",
            alignItems: "center",
          }}
        />
        <TextField
          id="outlined-basic"
          label="apiTokenInstance"
          variant="outlined"
          fullWidth
          style={{
            marginTop: "50px",
            marginBottom: "50px",
            display: "flex",
            alignItems: "center",
          }}
        />
        <Box
          style={{
            marginTop: "50px",
            marginBottom: "50px",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button
            onClick={handleNavigate}
            variant={"contained"}
            color={"primary"}
          >
            Применить
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
