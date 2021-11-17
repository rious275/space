import React from "react";
import styled from "styled-components";

const TodoList = () => {
 return (
    <Container>
      <TodoTitle>헤더 제목 부분입니다.</TodoTitle>
      <TodoCreate>TodoCreacte 인풋박스</TodoCreate>
      <TodoListBox>TodoList 리스트 박스</TodoListBox>
    </Container>
 )
}

export default TodoList;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const TodoTitle = styled.header`
  border: 1px solid red;
`;

const TodoCreate = styled.div``;
const TodoListBox = styled.div``;