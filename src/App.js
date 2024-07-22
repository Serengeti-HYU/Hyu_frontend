import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Main imports
import FindID from "./pages/Main/Login/FindID";
import FindPassword from "./pages/Main/Login/FindPassword";
import Login from "./pages/Main/Login/Login";
import SignUp from "./pages/Main/SignUp/SignUp";
import SignUpComplete from "./pages/Main/SignUp/SignUpComplete";
import RestActivity from "./pages/Newsletter/RestActivity";

// Profile imports
import Mypage from "./pages/Profile/Mypage";
import UpdateProfile from "./pages/Profile/UpdateProfile";

// Emotion imports
import PersonalityTest from "./pages/Emotion/PersonalityTest";
import Record1 from "./pages/Emotion/Record1";
import Record2 from "./pages/Emotion/Record2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main routes */}
        <Route path="/" element={<Login />} />
        <Route path="/find-id" element={<FindID />} />
        <Route path="/find-password" element={<FindPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-up-complete" element={<SignUpComplete />} />

        {/* Newsletter routes */}
        <Route path="/rest-activity" element={<RestActivity />} />

        {/* Profile routes */}
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/update-profile" element={<UpdateProfile />} />

        {/* Emotion routes */}
        <Route path="/personality-test" element={<PersonalityTest />} />
        <Route path="/record1" element={<Record1 />} />
        <Route path="/record2" element={<Record2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
