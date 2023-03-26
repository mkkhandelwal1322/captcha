import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 30%;
  height: auto;
  padding: 10px 25px;
  margin: 8vh auto;
  background: #ffffff;
  border-radius: 8px;
  @media only screen and (min-width: 280px) {
    .content {
      width: 90%;
    }
  }
  @media only screen and (min-width: 480px) {
    .content {
      width: 60%;
    }
  }
  @media only screen and (min-width: 768px) {
    .content {
      width: 40%;
    }
  }
  @media only screen and (min-width: 992px) {
    .content {
      width: 30%;
    }
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  color: #606060;
  font-size: 36px;
  margin: 30px auto;
  text-align: center;
  display: block;
`;

export const Button = styled.button`
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  margin: 10px auto 30px;
  color: #ffffff;
  cursor: pointer;
  background: #252525;
  transition: background 0.4s ease;
  &:hover {
    background: #ffffff;
    color: #252525;
    border: 1px solid #252525;
    outline: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: lighter;
  padding: 5px 10px;
  margin-bottom: 25px;
  background: #ecf0f1;
`;

export const ReloadButton = styled(Button)`
  width: 45px;
  height: 45px;
  margin: 0 !important;
`;

export const CaptchaArea = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const DisplayCaptcha = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45px;
  border: 1px solid #252525;
  margin-right: 5px;
  border-radius: 5px;
  letter-spacing: 5px;
`;
