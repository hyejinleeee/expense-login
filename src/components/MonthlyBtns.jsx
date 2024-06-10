import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMonth } from "../redux/slices/btnSlice";

const StBtndiv = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const StBtn = styled.button`
  width: 50px;
  height: 40px;
  border: 1px solid black;
  border-radius: 3px;
  padding: 10px;
  flex: 0 1 calc(16.66% - 10px);
  max-width: calc(16.66% - 10px);
  background-color: ${(props) =>
    props.active === props.month ? "#8c9093;" : "transparent"};

  &:hover {
    background-color: ${(props) =>
      props.active === props.month ? "#8c9093;" : "#f0f0f0"};
  }
`;

function MonthlyBtns() {
  const dispatch = useDispatch();
  const selectedMonth = useSelector((state) => state.btn);

  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const handleClick = (month) => {
    dispatch(setSelectedMonth(month));
  };

  return (
    <StBtndiv>
      {months.map((month) => (
        <StBtn
          key={month}
          month={month}
          active={selectedMonth}
          onClick={() => handleClick(month)}
        >
          {month}월
        </StBtn>
      ))}
    </StBtndiv>
  );
}

export default MonthlyBtns;
