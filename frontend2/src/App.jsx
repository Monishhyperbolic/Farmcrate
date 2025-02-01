import { createContext, useState, useEffect } from "react";
import UserAuthForm from "./pages/userAuthForm.page";
import { Route, Routes } from "react-router-dom";
import EntryPage from "./pages/entryPage";
import { lookInSession } from "./common/session";

export const UserContext = createContext({});

function App() {
  const [userAuth, setUserAuth] = useState({});

  useEffect(() => {
    let userInSession = lookInSession("user");

    userInSession
      ? setUserAuth(JSON.parse(userInSession))
      : setUserAuth({ access_token: null });
  }, []);

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="signin" element={<UserAuthForm type="sign-in" />} />
        <Route path="signup" element={<UserAuthForm type="sign-up" />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
