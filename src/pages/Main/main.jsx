import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Footer from "../../components/footer";
import LoginHeader from "../../components/LoginHeader";
import LetterInfo from "../Newsletter/LetterInfo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  p {
    margin: 0;
  }

  #firstSec {
    margin-top: 7rem;
    #sec {
      display: flex;
      flex-direction: row;
      align-items: center;
      p {
        margin: 0;
      }
      #insideSec {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 7rem;
        gap: 0.19rem;
      }
      #title {
        color: #35648c;
        font-size: 48px;
        font-weight: 900;
      }
      #title2 {
        color: #35648c;
        font-size: 1.875rem;
        font-weight: 500;
      }
      #message {
        font-size: 1rem;
        font-weight: 300;
        line-height: 125.574%;
        letter-spacing: 0.08rem;
        margin-top: 0.4rem;
        text-align: left;
      }
    }
    #sec2 {
      margin-top: 8rem;
      #message2 {
        color: #35648c;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 125.131%;
        margin-top: 2.12rem;
      }
    }
  }

  #thirdSec {
    flex-direction: row;
    height: 700px;
    #imgGroup {
      position: relative;
      img {
        position: absolute;
      }
      #first {
        transform: rotate(18deg);
        top: 0;
        left: -2rem;
      }
      #second {
        transform: rotate(-50deg);
        top: 19.63rem;
        left: 10.5rem;
      }
      #third {
        transform: rotate(26deg);
        top: 12.62rem;
        left: 24rem;
      }
    }
    #sec {
      #title {
        color: #35648c;
        font-size: 48px;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
        margin-left: 70%;
      }
      #message {
        color: #000;
        font-size: 24px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        text-align: right;
        margin-right: 3rem;
        margin-top: 1rem;
        #bold {
          color: #35648c;
          font-size: 1.5rem;
          font-weight: 600;
        }
      }
    }

    #message2 {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 3rem;
      margin-top: 1.81rem;
      color: #35648c;
      font-size: 1.25rem;
      font-weight: 500;
      .bookmark {
        margin: 0 0.5rem;
      }
    }
  }

  #imgGroup2 {
    position: relative;
    height: 26rem;
    img {
      position: absolute;
    }
    #pencil {
      top: 8rem;
      left: 8rem;
    }
    #sad {
      left: 18.64rem;
      top: 6.94rem;
    }
    #draw {
      top: 7.81rem;
    }
  }

  #fourthSec {
    #sec {
      #title {
        color: #35648c;
        font-size: 48px;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
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
      }
    }

    #week {
      margin-top: 2rem;
    }
  }

  #last {
    margin-top: 19rem;
    display: flex;
    flex-direction: row;
    margin-bottom: 5rem;
    #sec {
      p {
        margin: 0;
      }
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.94rem;
      margin-right: 6rem;
      #message {
        font-size: 24px;
        font-weight: 300;
        margin-top: 1rem;
        margin-bottom: 2rem;
      }
    }
    #NavWrapper {
      display: flex;
      flex-direction: column;
    }
    #navSec {
      display: flex;
      gap: 1rem;
      flex-direction: column;
      width: 20rem;

      button {
        border: none;
        height: 4.42856rem;
        border-radius: 0.83038rem;
        background: #fff;
        box-shadow: 0px 0px 13.197px 0px rgba(53, 100, 140, 0.35),
          0px 3.543px 3.543px 0px rgba(0, 0, 0, 0.25);
        color: #35648c;
        font-size: 1.10713rem;
        font-weight: 500;
      }
      #goSignup {
        background: #35648c;
        color: white;
      }
    }
  }
`;

const Main = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Container>
      <LoginHeader />
      <div>
        <div id="firstSec">
          <div id="sec">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.3 },
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/logo/LogoGra.png`}
                width={"279px"}
                height={"314px"}
                id="logoGra"
              />
            </motion.div>
            <div id="insideSec">
              <motion.p
                id="title"
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                쉴 휴
              </motion.p>
              <motion.p
                id="title2"
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{ duration: 0.5, delay: 1 }}
              >
                쉴 때...뭐하세요?
              </motion.p>
              <motion.p
                id="message"
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                갓생, 일, 자기계발로 바쁜 현대 사회를 사는 현대인들,
                <br /> 쉴 때 무엇을 해야하는지 까먹은 사람들에게
              </motion.p>
            </div>
          </div>
          <div id="sec2">
            <motion.img
              src={`${process.env.PUBLIC_URL}/assets/logo/FaceLogoBlue.png`}
              width={"101px"}
              height={"101px"}
              id="logoFace"
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{ duration: 1, delay: 2 }}
            />
            <motion.p
              id="message2"
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{ duration: 1, delay: 2.5 }}
            >
              휴~ 한숨 돌릴 수 있는 진정한 쉼을 위한 쉼 활동을 추천해드립니다.
            </motion.p>
          </div>
        </div>
        <LetterInfo />
        <div id="thirdSec">
          <div id="imgGroup">
            <img
              src={`${process.env.PUBLIC_URL}/assets/main/1.png`}
              width={"294.725px"}
              height={"269.463px"}
              id="first"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/main/2.png`}
              width={"151.339px"}
              height={"138.367px"}
              id="second"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/main/3.png`}
              width={"241.248px"}
              height={"220.569px"}
              id="third"
            />
          </div>
          <div id="sec">
            <motion.p
              id="title"
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{ duration: 0.5, delay: 4 }}
            >
              맞춤형 쉼
            </motion.p>
            <motion.p
              id="message"
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{ duration: 0.5, delay: 4.5 }}
            >
              맞춤형 쉼은{" "}
              <span id="bold">성격 검사 결과를 통해 파악된 맞춤 쉼 활동을</span>
              <br /> AI가 카테고리 별, 가까운 장소로 정리해서 보여줍니다.
            </motion.p>
          </div>

          <div id="message2">
            <img
              src={`${process.env.PUBLIC_URL}/assets/main/bookmark.png`}
              width={"24px"}
              height={"24px"}
              className="bookmark"
            />
            저장해서 나만의 쉼 모음집 만들기
            <img
              src={`${process.env.PUBLIC_URL}/assets/main/bookmark.png`}
              width={"24px"}
              height={"24px"}
              className="bookmark"
            />
          </div>
        </div>
        <div id="imgGroup2">
          <img
            src={`${process.env.PUBLIC_URL}/assets/main/pencil.png`}
            width={"184.942px"}
            height={"92.471px"}
            id="pencil"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/main/sad.png`}
            width={"155.187px"}
            height={"192.555px"}
            id="sad"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/main/draw.png`}
            width={"529px"}
            height={"260.126px"}
            id="draw"
          />
        </div>
        <div id="fourthSec">
          <div id="sec">
            <p id="title">감정 기록</p>
            <p id="message">
              <span id="bold">하루 하루 느낀 감정들을 기록</span>하면서 한
              주동안 느낀 감정들을 되돌아보고
              <br /> 이번 휴일은 어떻게 쉴지 생각해 봐요
            </p>
          </div>

          <img
            src={`${process.env.PUBLIC_URL}/assets/main/week.png`}
            width={"957px"}
            height={"150.57692px"}
            id="week"
          />
        </div>
        <div id="last">
          <div id="NavWrapper">
            <div id="sec">
              <img
                src={`${process.env.PUBLIC_URL}/assets/logo/FaceLogoBlue.png`}
                width={"100px"}
                height={"100px"}
                id="FaceLogoBlue"
              />
              <p id="message">휴에서 이제 휴~하고 한숨 돌리러 가볼까요?</p>
            </div>

            <div id="navSec">
              <button id="goLogin" onClick={() => navigateTo("/login")}>
                로그인 하러 가기
              </button>
              <button id="goSignup" onClick={() => navigateTo("/sign-up")}>
                회원가입 하러 가기
              </button>
            </div>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo/LogoGra.png`}
            width={"441px"}
            height={"497px"}
            id="LogoGra"
          />
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Main;
