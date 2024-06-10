import React, { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addList, delList } from "../redux/slices/expenseSlice";

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  div {
    position: relative;
  }

  label {
    position: absolute;
    transform: translateY(-50%);
    background-color: white;
  }

  input {
    width: 600px;
    height: 3rem;
    font-size: 1rem;
  }

  button {
    width: 4.5rem;
    height: 2rem;
    font-size: 1rem;
  }
`;

const StBtnDiv = styled.div`
  display: flex;
  gap: 10px;
`;

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const lists = useSelector((state) => state.expense.lists);
  const detail = lists.find((list) => list.id == id);
  const dispatch = useDispatch();

  const dateRef = useRef();
  const itemRef = useRef();
  const amountRef = useRef();
  const descriptionRef = useRef();

  const handleUpdate = (e) => {
    e.preventDefault();

    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(dateRef.current.value)) {
      alert("날짜 형식이 올바르지 않습니다. YYYY-MM-DD 형식으로 입력해주세요.");
      return;
    } else if (amountRef.current.value < 1) {
      alert("유효한 금액을 입력해주세요.");
      return;
    }

    dispatch(delList(id));

    const updatedList = {
      id,
      date: dateRef.current.value,
      item: itemRef.current.value,
      amount: amountRef.current.value,
      description: descriptionRef.current.value,
    };
    dispatch(addList(updatedList));

    navigate(`/`);
  };

  const handleDelete = () => {
    const userConfirmed = confirm("정말로 이 지출을 삭제하시겠습니까?");
    if (userConfirmed) {
      dispatch(delList(id));
      navigate(`/`);
    }
  };

  const handleGoBack = () => {
    navigate(`/`);
  };

  return (
    <>
      <StForm onSubmit={handleUpdate}>
        <div>
          <label htmlFor="date">날짜</label>
          <input
            type="text"
            defaultValue={detail.date}
            placeholder="YYYY-MM-DD"
            ref={dateRef}
          />
        </div>
        <div>
          <label htmlFor="item">지출항목</label>
          <input
            type="text"
            defaultValue={detail.item}
            placeholder="지출항목"
            ref={itemRef}
          />
        </div>
        <div>
          <label htmlFor="amount">금액</label>
          <input
            type="number"
            defaultValue={detail.amount}
            placeholder="금액"
            ref={amountRef}
          />
        </div>
        <div>
          <label htmlFor="description">지출내용</label>
          <input
            type="text"
            defaultValue={detail.description}
            placeholder="지출내용"
            ref={descriptionRef}
          />
        </div>
        <StBtnDiv>
          <button type="submit">수정</button>
          <button type="button" onClick={handleDelete}>
            삭제
          </button>
          <button type="button" onClick={handleGoBack}>
            뒤로가기
          </button>
        </StBtnDiv>
      </StForm>
    </>
  );
}

export default Detail;
