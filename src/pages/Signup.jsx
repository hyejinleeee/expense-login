import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StSignupForm = styled.form`
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

function Signup() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const notifySignupSuccess = () => toast("회원가입 성공!");
  const notifySignupFail = () => toast("회원가입 실패!");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/register",
        {
          id,
          password,
          nickname,
        }
      );
      const data = response.data;
      if (data.success) {
        notifySignupSuccess();
        navigate("/login");
      } else {
        notifySignupFail();
      }
    } catch (error) {
      notifySignupFail();
    }

    setId("");
    setPassword("");
    setNickname("");
  };

  return (
    <StSignupForm onSubmit={handleSubmit}>
      <p>회원가입</p>
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
      <input
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />

      <button type="submit">회원가입</button>
      <Link to="/login">
        <button>로그인으로 이동</button>
      </Link>
    </StSignupForm>
  );
}

export default Signup;
