import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import Preview from "./pages/Preview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/preview" element={<Preview />} />
        {/* Default route redirects to /home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
