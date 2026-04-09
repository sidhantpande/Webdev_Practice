import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
    <Routes>
      <Route path = "/home" element={<Home />}></Route>
      <Route path = "/login" element={<Login />}></Route>
      <Route path = "/chat" element={<Chat />}></Route>
      <Route path = "*" element={<NotFound />}></Route>
    </Routes>
    </>
  );
}

export default App
