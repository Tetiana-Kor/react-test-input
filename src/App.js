import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { privateRoutes, publicRoutes } from './components/router/Routes';
import { AuthContext } from './contexts/context';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <BrowserRouter>
        <NavBar />
        {isAuth ? (
          <Routes>
            {privateRoutes.map(route => (
              <Route
                path={route.path}
                key={route.component}
                element={route.component}
                exact={route.exact}
              />
            ))}
            <Route path="*" element={<Navigate to="/posts" replace={true} />} />
          </Routes>
        ) : (
          <Routes>
            {publicRoutes.map(route => (
              <Route
                path={route.path}
                key={route.component}
                element={route.component}
                exact={route.exact}
              />
            ))}
            {/* <Route path="/auth" element={<Auth />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/posts/:id" element={<PostId />} />
        <Route path="/error" element={<Error />} /> */}
            <Route path="*" element={<Navigate to="/auth" replace={true} />} />
          </Routes>
        )}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
