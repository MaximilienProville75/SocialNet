import React, { useState, useEffect } from "react";
import db from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";

import "./App.css";
import { ProfilPage } from "../Pages/ProfilPage/ProfilPage";
import { LoginPage } from "../Pages/LoginPage/LoginPage";
import { SettingPage } from "../Pages/SettingPage/SettingPage";
import { DashBoard } from "../Pages/DashBoard/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from "../Pages/ErrorPage/ErrorPage";
import { SignUp } from "../Pages/SignUp/SignUp";

function App() {
  const [user, setUser] = useState([]);
  //* Ajouter state pour user Post & transfer props post={} to dashBoard
  const [post, setPost] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "user"), (snapshot) =>
      setUser(snapshot.docs.map((doc) => doc.data()))
    );
    const addPost = onSnapshot(collection(db, "userPost"), (snapshot) =>
      setPost(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard user={user} post={post} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/profil">
          <Route path=":userid" element={<ProfilPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
