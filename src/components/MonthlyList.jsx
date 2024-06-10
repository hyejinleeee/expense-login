import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StUl = styled.ul`
  width: 750px;
  margin-top: 20px;
  margin-bottom: 50px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const StLi = styled.li`
  margin-top: 20px;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-gap: 8px;
  cursor: pointer;
  position: relative;

  > p:nth-child(1) {
    position: absolute;
    transform: translateY(-10);
    background-color: white;
    color: #888383;
  }

  > p:nth-child(3) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.2;
  }

  > p:nth-child(4) {
    color: #063f06;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

function MonthlyList() {
  const selectedMonth = useSelector((state) => state.btn);
  const lists = useSelector((state) => state.expense.lists);

  const filteredLists = lists.filter(
    (list) => parseInt(list.date.split("-")[1]) == selectedMonth
  );

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <StUl>
      {filteredLists.map((list) => (
        <StLi key={list.id} onClick={() => handleClick(list.id)}>
          <p>{list.date}</p>
          <p>{list.item}</p>
          <p>{list.description}</p>
          <p>💸 {Number(list.amount).toLocaleString()}원</p>
        </StLi>
      ))}
    </StUl>
  );
}

export default MonthlyList;
