import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Main imports
import FindID from "./pages/Main/Login/FindID";
import FindPassword from "./pages/Main/Login/FindPassword";
import Login from "./pages/Main/Login/Login";
import SignUp from "./pages/Main/SignUp/SignUp";
import SignUpComplete from "./pages/Main/SignUp/SignUpComplete";
import RestActivity from "./pages/Newsletter/RestActivity";
import Main from "./pages/Main/main";
import NoLoginMain from "./pages/Main/NoLoginMain";
import Premium from "./pages/Main/Premium/Premium";

import RestActivityDetail from "./pages/Newsletter/RestActivityDetail";

// Profile imports
import Mypage from "./pages/Profile/Mypage";
import ProfileEdit from "./pages/Profile/ProfileEdit";
import VerifyBeforeEdit from "./pages/Profile/VerifyBeforeEdit";

// Emotion imports
import PersonalityTest from "./pages/Emotion/PersonalityTest";
import Record1 from "./pages/Emotion/Record1";
import Record2 from "./pages/Emotion/Record2";
import Record3 from "./pages/Emotion/Record3";
import NewsletterPage from "./pages/Newsletter/NewsletterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main routes */}
        <Route path="/" element={<Main />} />
        <Route path="/noLoginmain" element={<NoLoginMain />} />
        <Route path="/find-id" element={<FindID />} />
        <Route path="/find-password" element={<FindPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-up-complete" element={<SignUpComplete />} />
        <Route path="/premium" element={<Premium />} />

        {/* Newsletter routes */}
        <Route path="/rest-activity" element={<RestActivity />} />
        <Route path="/rest-activity-detail" element={<RestActivityDetail />} />
        <Route path="/newsletter-page" element={<NewsletterPage />} />

        {/* Profile routes */}
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/profile-edit" element={<ProfileEdit />} />
        <Route path="/verify-before-edit" element={<VerifyBeforeEdit />} />

        {/* Emotion routes */}
        <Route path="/personality-test" element={<PersonalityTest />} />
        <Route path="/record1" element={<Record1 />} />
        <Route path="/record2" element={<Record2 />} />
        <Route path="/record3" element={<Record3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
