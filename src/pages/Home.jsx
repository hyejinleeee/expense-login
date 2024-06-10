import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ExpenseForm from "../components/ExpenseForm";
import MonthlyBtns from "../components/MonthlyBtns";
import MonthlyList from "../components/MonthlyList";

function Home() {
  const [activeDate, setActiveDate] = useState("");
  const selectedMonth = useSelector((state) => state.btn);

  useEffect(() => {
    localStorage.setItem("selectedMonth", JSON.stringify(selectedMonth));

    const currentYear = new Date().getFullYear();
    const newActiveDate = `${currentYear}-${String(selectedMonth).padStart(
      2,
      "0"
    )}-01`;
    setActiveDate(newActiveDate);
  }, [selectedMonth]);

  return (
    <>
      <ExpenseForm activeDate={activeDate} />
      <MonthlyBtns />
      <MonthlyList />
    </>
  );
}

export default Home;
