import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import classes from './App.module.scss'
import { Header } from "./shared";
import { HomePage, LoginPage, NotFoundPage } from "./components";
import { ModalProvider } from "./shared/modal/ModalProvider.tsx";

function App() {
  return (
      <>
        <BrowserRouter>
          <Header/>
          <main>
            <ModalProvider>
              <div className={classes['main-container']}>
                <Routes>
                  <Route path="/" element={<Navigate to="/home"/>}/>
                  <Route index path="home" element={<HomePage/>}/>
                  <Route path="login" element={<LoginPage/>}/>
                  <Route path="*" element={<Navigate to="/page-not-found"/>}/>
                  <Route path="page-not-found" element={<NotFoundPage/>}/>
                </Routes>
              </div>
            </ModalProvider>
          </main>
        </BrowserRouter>
      </>
  )
}

export default App
