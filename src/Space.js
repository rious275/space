import styled from "styled-components";

function Space() {
  return (
    <MainSpace>
      <div></div>
      <div>
        <Contents>
          <div>
            Space
          </div>
        </Contents>
      </div>
      <div></div>
    </MainSpace>
  );
}

export default Space;

const MainSpace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const Contents = styled.div`
  margin-top: 20px;
  padding: 30px 50px;

  border-radius: 20px;

  color: #fff;
  background-color: #f50057;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 20px;
  font-weight: 600;
`;