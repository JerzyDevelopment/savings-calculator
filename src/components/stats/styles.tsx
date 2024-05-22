import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  @media (max-width: 675px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 20px 14px;
    flex-wrap: wrap;
    > div {
      width: 44%;
    }
  }
`;
