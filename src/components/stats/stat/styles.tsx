import styled from "styled-components";

export const Wrapper = styled.div`
  width: 25%;
  overflow: hidden;
  h2 {
    font-size: 16px;
    font-weight: 400;
    max-width: 100%;
    @media (max-width: 1150px) {
      font-size: 12px;
    }
  }
  h3 {
    font-size: 40px;
    font-weight: 400;
    @media (max-width: 1150px) {
      font-size: 28px;
    }
  }
`;
