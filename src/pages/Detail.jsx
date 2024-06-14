import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

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

const fetchExpense = async ({ queryKey }) => {
  const [_, id] = queryKey;
  const { data } = await axios.get(
    `https://sprinkle-peppered-workshop.glitch.me/${id}`
  );
  return data;
};

const editExpense = async (updatedExpense) => {
  const { id, ...rest } = updatedExpense;
  const { data } = await axios.put(
    `https://sprinkle-peppered-workshop.glitch.me/${id}`,
    rest
  );
  return data;
};

const deleteExpense = async (id) => {
  const { data } = await axios.delete(
    `https://sprinkle-peppered-workshop.glitch.me/${id}`
  );
  return data;
};

function Detail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { id } = useParams();

  const {
    data: selectedExpense,
    isPending,
    error,
  } = useQuery({
    queryKey: ["expense", id],
    queryFn: fetchExpense,
  });

  const mutationEdit = useMutation({
    mutationFn: editExpense,
    onSuccess: () => {
      queryClient.invalidateQueries(["expenses"]);
      navigate("/");
    },
  });

  const mutationDelete = useMutation({
    mutationFn: deleteExpense,
    onSuccess: () => {
      queryClient.invalidateQueries(["expenses"]);
      navigate("/");
    },
  });

  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (selectedExpense) {
      setDate(selectedExpense.date);
      setItem(selectedExpense.item);
      setAmount(selectedExpense.amount.toString());
      setDescription(selectedExpense.description);
    }
  }, [selectedExpense]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(date)) {
      toast.error("날짜를 YYYY-MM-DD 형식으로 입력해주세요.");
      return;
    }
    if (!item || parseInt(amount, 10) <= 0) {
      toast.error("유효한 항목과 금액을 입력해주세요.");
      return;
    }

    const newExpense = {
      ...selectedExpense,
      date: date,
      item: item,
      amount: parseInt(amount, 10),
      description: description,
    };

    mutationEdit.mutate(newExpense);
    toast.success("수정 되었습니다.");
  };

  const handleDelete = () => {
    mutationDelete.mutate(id);
    navigate(`/`);
    toast.success("삭제 되었습니다.");
  };

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <>
      <StForm onSubmit={handleUpdate}>
        <div>
          <label htmlFor="date">날짜</label>
          <input
            type="text"
            defaultValue={date}
            placeholder="YYYY-MM-DD"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="item">지출항목</label>
          <input
            type="text"
            defaultValue={item}
            placeholder="지출항목"
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="amount">금액</label>
          <input
            type="number"
            defaultValue={amount}
            placeholder="금액"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">지출내용</label>
          <input
            type="text"
            defaultValue={description}
            placeholder="지출내용"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <StBtnDiv>
          <button type="submit">수정</button>
          <button type="button" onClick={handleDelete}>
            삭제
          </button>
          <button type="button" onClick={() => navigate(`/`)}>
            뒤로가기
          </button>
        </StBtnDiv>
      </StForm>
    </>
  );
}

export default Detail;
