import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import classes from './App.module.scss'
import { Header } from "./shared";
import { HomePage, LoginPage, NotFoundPage } from "./components";
import { ModalProvider } from "./shared/modal/ModalProvider.tsx";
import { store } from "./store/store.ts";
import { AuthProvider } from "./providers/AuthProvider.tsx";
import { ProtectedLoginRoute, ProtectedRoute } from "./shared/routes";

function App() {
  // TODO: here should be definitely separation. Layout, Router and etc.
  return (
      <>
        <BrowserRouter>
          <AuthProvider>
            <Provider store={store}>
              <Header/>
              <main>
                <ModalProvider>
                  <div className={classes['main-container']}>
                    <Routes>
                      <Route path="/" element={<Navigate to="/home"/>}/>
                      <Route index path="home"
                             element={
                               <ProtectedRoute>
                                 <HomePage/>
                               </ProtectedRoute>
                             }/>
                      <Route path="login" element={
                        <ProtectedLoginRoute>
                          <LoginPage/>
                        </ProtectedLoginRoute>
                      }/>
                      <Route path="*" element={<Navigate to="/page-not-found"/>}/>
                      <Route path="page-not-found" element={<NotFoundPage/>}/>
                    </Routes>
                  </div>
                </ModalProvider>
              </main>
            </Provider>
          </AuthProvider>
        </BrowserRouter>
      </>
  )
}

export default App
