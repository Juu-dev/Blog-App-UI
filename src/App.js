import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar/TopBar";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";

function App() {
    const currentUser = false;

    return (
        <Router>
            <TopBar />
            <Routes>
                <Route exact path="/" element={<HomePage />}></Route>
                <Route path="/posts" element={<HomePage />}></Route>
                <Route
                    path="/register"
                    element={currentUser ? <HomePage /> : <Register />}
                ></Route>
                <Route
                    path="/login"
                    element={currentUser ? <HomePage /> : <Login />}
                ></Route>
                <Route path="/post/:id" element={<Single />}></Route>
                <Route
                    path="/write"
                    element={currentUser ? <Write /> : <Login />}
                ></Route>
                <Route
                    path="/settings"
                    element={currentUser ? <Settings /> : <Login />}
                ></Route>
            </Routes>
        </Router>
    );
}

export default App;
