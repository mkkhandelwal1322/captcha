import { useEffect, useState } from "react";
import {
  Button,
  CaptchaArea,
  DisplayCaptcha,
  FormWrapper,
  Input,
  ReloadButton,
  Title,
  Wrapper,
} from "../style";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [captcha, setCaptcha] = useState("");

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const generateCaptcha = (length: number) => {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const setCaptchaValue = () => {
    const initialCaptcha = generateCaptcha(6);
    setCaptcha(initialCaptcha);
  };

  const onChange = (event: any) => {
    event.preventDefault();
    setInputCaptcha(event.target.value);
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    if (inputCaptcha === captcha) {
      alert("Successfully logged in!");
      setEmail("");
      setPassword("");
      setInputCaptcha("");
      setCaptchaValue();
    } else {
      alert("Invalid Captcha :(");
      setCaptchaValue();
      setInputCaptcha("");
    }
  };

  useEffect(() => {
    setCaptchaValue();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <FormWrapper>
        <form onSubmit={onSubmit}>
          <Title>Sign In</Title>
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <CaptchaArea>
            <DisplayCaptcha>{captcha}</DisplayCaptcha>
            <ReloadButton onClick={() => setCaptchaValue()}>
              <i className="fa fa-redo-alt"></i>
            </ReloadButton>
          </CaptchaArea>
          <Input
            type="text"
            placeholder="Enter captcha"
            value={inputCaptcha}
            onChange={onChange}
            required
          />
          <Button>Sign In</Button>
        </form>
      </FormWrapper>
    </Wrapper>
  );
};
