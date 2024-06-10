import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../redux/slices/expenseSlice";
import { setSelectedMonth } from "../redux/slices/btnSlice";
import {v4 as uuidv4} from "uuid";

const StForm = styled.form`
  display: flex;
  gap: 10px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;

  input {
    width: 9rem;
    height: 2rem;
  }

  button {
    width: 30px;
    height: 2.5rem;
    border: 1px solid white;
    border-radius: 3px;
    background-color: white;
  }
`;

function ExpenseForm({ activeDate }) {
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const date = formData.get("date");
    const item = formData.get("item");
    const amount = formData.get("amount");
    const description = formData.get("description");

    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(date)) {
      alert("날짜 형식이 올바르지 않습니다. YYYY-MM-DD 형식으로 입력해주세요.");
      return;
    } else if (amount < 1) {
      alert("유효한 금액을 입력해주세요.");
      return;
    }

    const nextList = {
      id: uuidv4(),
      date,
      item,
      amount,
      description,
    };

    dispatch(addList(nextList));

    //폼에 입력한 월 기준으로 리렌더링
    dispatch(setSelectedMonth(parseInt(nextList.date.split("-")[1])));

    e.target.reset();
  };

  return (
    <>
      <StForm onSubmit={onSubmit}>
        <input
          type="text"
          name="date"
          defaultValue={activeDate}
          placeholder="YYYY-MM-DD"
          required
        />
        <input type="text" name="item" placeholder="지출항목" required />
        <input type="number" name="amount" placeholder="금액" required />
        <input type="text" name="description" placeholder="지출내용" required />
        <button type="submit">✚</button>
      </StForm>
    </>
  );
}

export default ExpenseForm;
