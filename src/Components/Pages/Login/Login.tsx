import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { postUserLogin } from "../../Redux/Action/loginAction";

import styled from "styled-components";
import LoginBg from "../../../Assets/login.png";
import FormBg from "../../../Assets/signuo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { constraintValidation } from "../../../Utils/Validation/Validation";
import { useNavigate } from "react-router-dom";
import { saveToSession } from "../../../Utils/SessionStorage/sessionStorage";

function LoginForm(props: any) {
  const dispatch: any = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [submit, setSubmit] = useState(false);
  let loginData = useSelector(
    (state: any) => state.LoginReducer?.loginResponse
  );

  useEffect(() => {
    console.log("useeffect", loginData);
    if (loginData?.token && loginData?.success) {
      props.handleLogin(loginData);
    }
    setError(loginData);
  }, [loginData]);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmit(true);
    if (!constraintValidation(data.email) && data.password) {
      dispatch(postUserLogin(data));
    }
  };
  console.log("erroerrrr", error);
  return (
    <StyledLogin>
      <Container>
        <Row>
          <Col md={6}>
            <div className="form">
              <StyledForm onSubmit={handleSubmit}>
                <StyledInput
                  name="email"
                  type="email"
                  className="user"
                  placeholder="Email"
                  value={data.email}
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                />

                <StyledInput
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                />
                <div className="text-danger">
                  {!loginData?.token && loginData?.message}
                </div>
                <div>
                  <StyledButton type="submit" id="submit" className="loginbtn">
                    LOGIN
                  </StyledButton>
                </div>
              </StyledForm>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledLogin>
  );
}

// Styled Components
const StyledLogin = styled.div`
  min-height: 100vh;
  display: flex;
  background-size: cover;
  align-items: center;
  background-image: url(${LoginBg});

  .form h4,
  p {
    text-align: left;
    color: #ffffff;
  }
  .label {
    font-size: 12px;
  }
`;

const StyledForm = styled.form`
  background-image: url(${FormBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 70px 0 60px 0px;
  border-radius: 20px;
`;
const StyledInput = styled.input`
  width: 60%;
  padding: 5px 20px;
  margin: 20px 0 30px 0;
  box-sizing: border-box;
  background-color: transparent;
  border: transparent;
  border-bottom: 1px solid #ccc;
  color: aliceblue;
`;

const StyledButton = styled.button`
  padding: 12px 30px;
  font-size: 18px;
  background: linear-gradient(45deg, transparent 5%, #ffffff 5%);
  border: 0;
  color: #000000;
  letter-spacing: 3px;
  line-height: 1;
  box-shadow: 6px 0px 0px #00e6f6;
  outline: transparent;
  position: relative;

  &::after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);
    content: "LOGIN";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 3%,
      #00e6f6 3%,
      #00e6f6 5%,
      #ffffff 5%
    );
    text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
    clip-path: var(--slice-0);
  }

  &:hover::after {
    animation: 1s glitch;
    animation-timing-function: steps(2, end);
  }

  @keyframes glitch {
    0% {
      clip-path: var(--slice-1);
      transform: translate(-20px, -10px);
    }

    10% {
      clip-path: var(--slice-3);
      transform: translate(10px, 10px);
    }

    20% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 10px);
    }

    30% {
      clip-path: var(--slice-3);
      transform: translate(0px, 5px);
    }

    40% {
      clip-path: var(--slice-2);
      transform: translate(-5px, 0px);
    }

    50% {
      clip-path: var(--slice-3);
      transform: translate(5px, 0px);
    }

    60% {
      clip-path: var(--slice-4);
      transform: translate(5px, 10px);
    }

    70% {
      clip-path: var(--slice-2);
      transform: translate(-10px, 10px);
    }

    80% {
      clip-path: var(--slice-5);
      transform: translate(20px, -10px);
    }

    90% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 0px);
    }

    100% {
      clip-path: var(--slice-1);
      transform: translate(0);
    }
  }
`;

export default LoginForm;
