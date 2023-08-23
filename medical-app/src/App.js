import React, { useEffect } from "react";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Signin from "./components/Signin";
import Chatroom from "./components/Chatroom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LOGOUT } from "./actions/types";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

function App() {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }

    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/chatroom" element={<Chatroom />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
