import React from "react";
import styled from "styled-components";

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
  return (
    <>
      <StForm>
        <p>프로필 수정</p>
        <input type="text" />
        <p>아바타 이미지</p>
        <input type="file" accept="image/*" />
        <button>프로필 업데이트</button>
      </StForm>
    </>
  );
}

export default Profile;
