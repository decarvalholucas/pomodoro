import styled from "styled-components";

export const ClockContainer = styled.section`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Time = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.8rem;
  border: 2px solid;
  border-radius: 5px;
  width: 200px;
  padding: 25px;
  text-align: center;
  color: #7159c1;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 100px;
  margin: 20px auto;
  font-size: 1.3rem;
  svg {
    cursor: pointer;
    color: #7159c1;
    &.clicked {
      transform: scale(1.2);
    }
  }
`;

export const ClockMessage = styled.div`
  text-transform: uppercase;
  margin: 20px 0;
  text-align: center;
  color: #fff;
  font-weight: bold;
`;
