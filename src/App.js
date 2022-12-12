import NavBar from "./components/NavBar";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UsersList from "./components/UsersList";
import Profile from "./components/Profile";
export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/myhome" element={<Home />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/profile/:idUSER" element={<Profile />} />
      </Routes>
    </div>
  );
}
