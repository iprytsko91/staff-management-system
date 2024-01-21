import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import './App.scss'
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.tsx";
import HomePage from "./components/HomePage/HomePage.tsx";
import LoginPage from "./components/LoginPage/LoginPage.tsx";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>}/>
          <Route path="home" element={<HomePage/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="*" element={<Navigate to="/page-not-found"/>}/>
          <Route path="page-not-found" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
