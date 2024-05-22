import styled from "styled-components";

export const Wrapper = styled.div`
  /* max-width: 1500px;
  margin: 0 auto; */
  padding: 16px 24px;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  img {
    /* position: absolute;
    top: 0;
    left: 0; */
    width: 70px;
  }
  h1 {
    font-weight: 500;
    @media (max-width: 550px) {
      font-size: 24px;
    }
  }
  @media (max-width: 550px) {
    padding: 0 14px 24px;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
`;

export const MainWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 40px;
  flex-grow: 1;
  @media (max-width: 975px) {
    flex-direction: column;
    gap: 20px;
  }
  @media (max-width: 500px) {
    margin-top: 20px;
  }
`;

export const SelectionsWrapper = styled.div`
  min-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 975px) {
    flex-direction: row;
    /* align-items: cetner */
    justify-content: space-between;
    gap: 20px 14px;
    flex-wrap: wrap;
    > div {
      width: 44%;
    }
  }
  @media (max-width: 550px) {
    flex-direction: row;
    /* align-items: cetner */
    justify-content: space-between;
    gap: 20px 14px;
    max-width: 100%;
    min-width: 0;
    > div {
      width: 100%;
    }
  }
`;

export const DataWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const BottomText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  p {
    font-weight: 300;
    text-align: center;
    font-size: 14px;

    @media (max-width: 450px) {
      font-size: 12px;
    }

    b {
      font-weight: 500;
    }
  }
  @media (max-width: 1250px) {
    margin-top: 20px;
  }
`;
