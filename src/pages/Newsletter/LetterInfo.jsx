import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const LetterInfo = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const img1 = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const img2 = {
    hidden: { x: -100, y: 100, opacity: 0 },
    visible: { x: 0, y: 0, opacity: 1 },
  };
  const img3 = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <Container>
      <motion.div
        id="title"
        initial="hidden"
        whileInView="visible"
        variants={variants}
        transition={{ duration: 0.5, delay: 3 }}
      >
        휴~ 레터
      </motion.div>
      <motion.div
        id="message"
        initial="hidden"
        whileInView="visible"
        variants={variants}
        transition={{ duration: 0.5, delay: 3.5 }}
      >
        매주 쉬는 날 뭐하지? 하는 고민을 덜어주기 위해서 <br />한 주에 한 번{" "}
        <span id="hyu">휴~레터</span>가 쉼 활동을 추천해 줍니다.
      </motion.div>
      <LetterPic>
        <motion.img
          src={`${process.env.PUBLIC_URL}/assets/newsletter/letter1.png`}
          width="119.917px"
          height="88.904px"
          id="letter1"
          initial="hidden"
          whileInView="visible"
          variants={img1}
          transition={{ type: "spring", duration: 1.5, delay: 3.5 }}
        />
        <motion.img
          src={`${process.env.PUBLIC_URL}/assets/newsletter/letter2.png`}
          width="237.553px"
          height="211px"
          id="letter2"
          initial="hidden"
          whileInView="visible"
          variants={img2}
          transition={{ type: "spring", duration: 1.5, delay: 3.5 }}
        />
        <motion.img
          src={`${process.env.PUBLIC_URL}/assets/newsletter/letter3.png`}
          width="416.289px"
          height="444.92px"
          id="letter3"
          initial="hidden"
          whileInView="visible"
          variants={img3}
          transition={{ type: "spring", duration: 1.5, delay: 3.5 }}
        />
      </LetterPic>
    </Container>
  );
};

export default LetterInfo;

const Container = styled.div`
  width: 90%;
  height: 811px;
  #title {
    color: #35648c;
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-top: 9rem;
    margin-right: 70%;
  }
  #message {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-align: left;
    margin-left: 3rem;
    margin-top: 1rem;
    #hyu {
      color: #35648c;
      font-weight: 600;
    }
  }
`;
const LetterPic = styled.div`
  margin-top: -4rem;
  position: relative;
  img{
  position: absolute;
  }
  #letter1 {
    transform: rotate(-6.674deg);
    filter: drop-shadow(0px 2.944px 2.944px rgba(0, 0, 0, 0.25));
    top: 12rem;
    left: 15rem;
    
  }
  #letter2 {
    transform: rotate(-10deg);
    filter: drop-shadow(0px 2.944px 2.944px rgba(0, 0, 0, 0.25));
    top: 14.5rem;
    left: 24rem;
}
  }
  #letter3 {
    transform: rotate(-5deg);
    top: -3rem;
    left: 37rem;
  }
`;
