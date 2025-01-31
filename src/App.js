import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import { ChatPage } from "./pages/ChatPage";
import { useState } from "react";

function App() {
  const [idInstanceData, setIdInstanceData] = useState();
  const [apiTokenInstanceData, setApiTokenInstanceData] = useState();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage
                setIdInstanceData={setIdInstanceData}
                setApiTokenInstanceData={setApiTokenInstanceData}
              />
            }
          />
          <Route
            path="/chat"
            element={
              <ChatPage
                idInstanceData={idInstanceData}
                apiTokenInstanceData={apiTokenInstanceData}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
