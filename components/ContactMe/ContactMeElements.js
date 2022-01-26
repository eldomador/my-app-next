import styled from "styled-components";

export const Container = styled.div`
  background: #01bf71;
  height: 100vh;

  @media screen and (max-height: 768px) {
    height: 800px;
  }
`;

export const Icon = styled.a`
  margin-left: 8px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  cursor: pointer;
`;

export const FormWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;

  @media screen and (max-height: 768px) {
    height: 580px;
    margin-top: 50px;
  }
`;

export const FormContent = styled.div`
  padding: 30px;
  height: 100%;
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 550px;
  background: #010101;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  border-radius: 4px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #010101;
`;

export const FormH1 = styled.h1`
  color: #fff;
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: "center";
`;

export const FormLabel = styled.label`
  color: #fff;
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  padding: 16px 16px;
  resize: none;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
export const Text = styled.span`
  color: #fff;
  text-align: center;
  margin-top: 36px;
  color: #fff;
  font-size: 14px;
`;

export const SocialIcons = styled.div`
  text-align: center;
  margin-top: 10px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 35px;
  padding: 5px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;
