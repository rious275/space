import React from "react";
import styled from "styled-components";

const TodoList = () => {
 return (
    <Container>
      <TodoTitle>
        <h1>todo list</h1>
      </TodoTitle>
      <TodoCreate>
        <input type='text' />
        <button>생성</button>
      </TodoCreate>
      <TodoListBox>
        <ul>
          <li>할일 목록 1</li>
          <li>할일 목록 2</li>
        </ul>
      </TodoListBox>
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
  margin-bottom: 40px;
  font-size: 50px;
`;

const TodoCreate = styled.div`
  margin-bottom: 20px;
`;
const TodoListBox = styled.div`
  width: 500px;
  height: 300px;
  padding: 20px 20px;
  
  border: 1px solid #000;

  li {
    margin-bottom: 14px;
  }
`;