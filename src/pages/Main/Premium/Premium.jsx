import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Footer from "../../../components/footer";
import NoLoginHeader from "../../../components/NoLoginHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;



const Premium = () => {
  
  return (
    <Container>
        <NoLoginHeader />
        <Footer />
    </Container>
  );
};

export default Premium;
