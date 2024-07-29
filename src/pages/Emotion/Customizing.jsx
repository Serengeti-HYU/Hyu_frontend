import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import LoginHeader from "../../components/LoginHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #35648c;
  margin-bottom: 2rem;
`;

const FaceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const Face = styled.div`
  width: 10rem;
  height: 10rem;
  border: 0.25rem solid #35648c;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Eye = styled.img`
  position: absolute;
  top: 30%;
  width: 4rem;  
  height: auto;
`;

const Mouth = styled.img`
  position: absolute;
  bottom: 20%;  
  width: ${props => 
    props.isSmall ? '2rem' : 
    props.isLarge ? '4rem' : 
    props.isSmaller ? '1.5rem' : 
    '3rem'}; 
  height: auto;
`;

const Etc = styled.img`
  position: absolute;
  width: 1rem; 
  height: auto;
`;

const CustomizationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const CustomizationSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  height: 15rem;
  border: 0.125rem solid #35648c;
  border-radius: 1rem;
  overflow-y: auto;
  padding: 1rem;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #35648c, #f2e8c9);
    border-radius: 4px;
  }
`;

const SectionTitle = styled.h3`
  margin-bottom: 1rem;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

const Option = styled.div`
  flex: 0 0 45%;
  height: 0;
  padding-bottom: 45%;
  border: 0.125rem solid #35648c;
  border-radius: 50%;
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;
`;

const OptionImage = styled.img`
  position: absolute;
  width: ${props => props.type === 'eye' ? '2.5rem' : 'auto'}; /* 눈 사이즈 키움 */
  height: ${props => props.type === 'eye' ? 'auto' : '1rem'}; /* 입 사이즈 조정 */
  top: ${props => props.type === 'eye' ? '30%' : 'auto'};
  bottom: ${props => props.type === 'mouth' ? '20%' : 'auto'};
`;

const SaveButton = styled.button`
  background-color: #35648c;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: #2f5579;
  }
`;

const Customizing = () => {
  const [selectedEye, setSelectedEye] = useState(null);
  const [selectedMouth, setSelectedMouth] = useState(null);
  const [selectedEtc, setSelectedEtc] = useState(null);

  const eyes = [
    "../../../assets/eyes/eye1.png",
    "../../../assets/eyes/eye2.png",
    "../../../assets/eyes/eye3.png",
    "../../../assets/eyes/eye4.png"
  ];
  const mouths = [
    "../../../assets/mouths/mouth1.png",
    "../../../assets/mouths/mouth2.png",
    "../../../assets/mouths/mouth3.png",
    "../../../assets/mouths/mouth4.png"
  ];
  const etcs = [
    "../../../assets/face_etc/etc1.png",
    "../../../assets/face_etc/etc2.png",
    "../../../assets/face_etc/etc3.png",
    "../../../assets/face_etc/etc4.png"
  ];

  const navigate = useNavigate();

  const getEtcStyle = (index) => {
    switch (index) {
      case 1:  
        return { 
          top: '40%', 
          left: '60%', 
          transform: 'translate(-50%, 0)', 
          width: '0.7rem'
        };
      default: 
        return { 
          top: '20%', 
          left: '70%', 
          transform: 'translate(-50%, -50%)' 
        };
    }
  };

  return (
    <Container>
      <LoginHeader />
      <Content>
        <Title>새로운 감정 커스텀</Title>
        <FaceContainer>
          <Face>
            {selectedEye && <Eye src={selectedEye} alt="Eye" />}
            {selectedMouth && (
              <Mouth 
                src={selectedMouth} 
                alt="Mouth" 
                isSmall={selectedMouth === "../../../assets/mouths/mouth4.png"} 
                isLarge={selectedMouth === "../../../assets/mouths/mouth1.png"}
                isSmaller={selectedMouth === "../../../assets/mouths/mouth3.png"}
              />
            )}
            {selectedEtc && <Etc src={selectedEtc} alt="Etc" style={getEtcStyle(etcs.indexOf(selectedEtc))} />}
          </Face>
        </FaceContainer>
        <CustomizationContainer>
          <CustomizationSection>
            <SectionTitle>눈</SectionTitle>
            <OptionsContainer>
              {eyes.map((eye, index) => (
                <Option key={index} onClick={() => setSelectedEye(eye)}>
                  <OptionImage src={eye} alt={`Eye ${index + 1}`} type="eye" />
                </Option>
              ))}
            </OptionsContainer>
          </CustomizationSection>
          <CustomizationSection>
            <SectionTitle>입</SectionTitle>
            <OptionsContainer>
              {mouths.map((mouth, index) => (
                <Option key={index} onClick={() => setSelectedMouth(mouth)}>
                  <OptionImage 
                    src={mouth} 
                    alt={`Mouth ${index + 1}`} 
                    type="mouth" 
                    isSmall={mouth === "../../../assets/mouths/mouth4.png"} 
                    isLarge={mouth === "../../../assets/mouths/mouth1.png"}
                    isSmaller={mouth === "../../../assets/mouths/mouth3.png"}
                  />
                </Option>
              ))}
            </OptionsContainer>
          </CustomizationSection>
          <CustomizationSection>
            <SectionTitle>꾸미기</SectionTitle>
            <OptionsContainer>
              {etcs.map((etc, index) => (
                <Option key={index} onClick={() => setSelectedEtc(etc)}>
                  <OptionImage src={etc} alt={`Etc ${index + 1}`} style={getEtcStyle(index)} />
                </Option>
              ))}
            </OptionsContainer>
          </CustomizationSection>
        </CustomizationContainer>
        <div>
          <SaveButton onClick={() => navigate(-1)}>이전으로</SaveButton>
          <SaveButton>저장하기</SaveButton>
        </div>
      </Content>
      <Footer />
    </Container>
  );
};

export default Customizing;
