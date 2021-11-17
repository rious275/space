import React from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router';

const Space = () => {
  const history = useHistory();
  const featureList = [
    'todo-list',
    'filter',
  ]

  const handlePage = (e) => {
    const feature = e.target.innerText;
    history.push(`/space/${feature}`);
  }

  return (
    <ContentWrap>
      {featureList.map((text, id) =>
      <Card key={id} onClick={handlePage}>
        <p>{text}</p>
      </Card>)}
    </ContentWrap>
  );
}

export default Space;

const ContentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 8px;
  width: 160px;
  height: 100px;
  border-radius: 20px;
  background-color: #44ceae;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  transition: .3s;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  p {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }
`;