import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import classes from './App.module.scss'
import { store } from "./store/store.ts";
import { AuthProvider, ModalProvider } from "./providers";
import { Header, HomePage, LoginPage, NotFoundPage } from "./components";
import { ProtectedLoginRoute, ProtectedRoute } from "./components/shared";

export const App = () => {
  // TODO: here should be definitely separation. Layout, Router and etc.
  return (
      <>
        <BrowserRouter>
          <Provider store={store}>
            <AuthProvider>
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
                      <Route path="*" element={<Navigate to="/pageNotFound"/>}/>
                      <Route path="pageNotFound" element={<NotFoundPage/>}/>
                    </Routes>
                  </div>
                </ModalProvider>
              </main>
            </AuthProvider>
          </Provider>
        </BrowserRouter>
      </>
  )
}
