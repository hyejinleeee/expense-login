import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../redux/slices/AuthSlice";
import { useDispatch } from "react-redux";

const StLoginForm = styled.form`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  p {
    font-weight: bold;
    font-size: 28px;
  }

  input {
    width: 300px;
    height: 40px;
  }

  button {
    width: 300px;
    height: 40px;
  }
`;

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notifyLoginSuccess = () => toast("로그인 성공!");
  const notifyLoginFail = () => toast("로그인 실패!");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/login",
        {
          id,
          password,
        }
      );
      const data = response.data;
      if (data.success) {
        dispatch(login(data.accessToken));
        notifyLoginSuccess();
        navigate("/");
      } else {
        notifyLoginFail();
      }
    } catch (error) {
      notifyLoginFail();
    }

    setId("");
    setPassword("");
  };

  return (
    <StLoginForm onSubmit={handleSubmit}>
      <p>로그인</p>
      <input
        type="text"
        placeholder="아이디"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">로그인</button>
      <Link to="/signup">
        <button>회원가입으로 이동</button>
      </Link>
    </StLoginForm>
  );
}

export default Login;
