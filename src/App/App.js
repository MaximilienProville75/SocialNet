import React, { useState, useEffect } from "react";
import db from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";

import "./App.css";
import { ProfilPage } from "../Pages/ProfilPage/ProfilPage";
import { LoginPage } from "../Pages/LoginPage/LoginPage";
import { SettingPage } from "../Pages/SettingPage/SettingPage";
import { DashBoard } from "../Pages/DashBoard/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "user"), (snapshot) =>
      setUser(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  console.log(user);

  user.map((use) => {
    console.log(use.firstName);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/profil">
          <Route path=":userid" element={<ProfilPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
