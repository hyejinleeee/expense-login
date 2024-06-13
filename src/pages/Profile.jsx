import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const StForm = styled.form`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  input {
    width: 300px;
    height: 40px;
  }

  button {
    width: 300px;
    height: 40px;
  }
`;

function Profile() {
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  const updateProfile = async (formData) => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return null;

    try {
      const response = await axios.patch(
        `https://moneyfulpublicpolicy.co.kr/profile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (error) {
      console.error("Update failed:", error);
    }
    location.reload();
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("avatar", avatar);
    formData.append("nickname", nickname);

    updateProfile(formData);

    navigate("/");
    // toast.success("프로필이 변경되었습니다.");
  };

  return (
    <>
      <StForm onSubmit={handleUpdate}>
        <p>프로필 수정</p>
        <input
          type="text"
          placeholder="닉네임을 수정하세요"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <p>아바타 이미지</p>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
        <button type="submit">프로필 업데이트</button>
      </StForm>
    </>
  );
}

export default Profile;
