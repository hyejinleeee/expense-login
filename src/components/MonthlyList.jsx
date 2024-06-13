import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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

  > p:nth-child(5) {
    color: #888383;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

function MonthlyList() {
  const userId = useSelector((state) => state.auth.userId);
  const selectedMonth = useSelector((state) => state.btn);
  const navigate = useNavigate();

  const fetchExpenses = async () => {
    const response = await axios.get("http://localhost:5001/expenses");
    return response.data;
  };

  const {
    data: expenses,
    isPending,
    error,
  } = useQuery({
    queryKey: ["expenses"],
    queryFn: fetchExpenses,
  });

  if (isPending) {
    return <div>로딩중입니다...</div>;
  }

  if (error) {
    console.error("데이터 조회 중 에러 발생:", error);
    return <div>데이터 조회 중 오류가 발생했습니다.</div>;
  }

  const filteredLists = expenses.filter(
    (expense) => expense.month == selectedMonth
  );

  const handleClick = (list) => {
    if (userId === list.userId) {
      navigate(`/detail/${list.id}`);
    } else {
      alert("권한이 없습니다.");
    }
  };

  return (
    <StUl>
      {filteredLists?.map((list) => (
        <StLi key={list.id} onClick={() => handleClick(list)}>
          <p>{list.date}</p>
          <p>{list.item}</p>
          <p>
            {list.description} (by {list.createdBy})
          </p>
          <p>💸 {Number(list.amount).toLocaleString()}원</p>
        </StLi>
      ))}
    </StUl>
  );
}

export default MonthlyList;
