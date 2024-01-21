import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import './App.module.scss'
import { Header } from "./shared/components";
import { HomePage, LoginPage, NotFoundPage } from "./components";

function App() {
  return (
      <>
        <BrowserRouter>
          <Header/>
          <main>
            <Routes>
              <Route path="/" element={<Navigate to="/home"/>}/>
              <Route index path="home" element={<HomePage/>}/>
              <Route path="login" element={<LoginPage/>}/>
              <Route path="*" element={<Navigate to="/page-not-found"/>}/>
              <Route path="page-not-found" element={<NotFoundPage/>}/>
            </Routes>
          </main>
        </BrowserRouter>
      </>
  )
}

export default App
