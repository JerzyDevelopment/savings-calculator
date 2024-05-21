import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 16px;
  padding: 2px;
  background: linear-gradient(to right, #ca7b03, #751ba1);
  max-width: 200px;
`;

interface iProps {
  timeframe: string;
}

export const InnerWrapper = styled.div<iProps>`
  display: flex;
  justify-content: space-between;
  background: #22262b;
  border-radius: 14px;
  position: relative;
  overflow: hidden;

  p {
    position: relative;
    z-index: 1;
    padding: 4px 0;
  }

  p:first-child {
    padding-left: 10px;
  }

  p:last-child {
    padding-right: 10px;
  }

  div {
    min-width: 50%;
    min-height: 100%;
    background: #656565;
    position: absolute;
    opacity: 0.3;
    z-index: 0;
    border-radius: 14px;
    top: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ timeframe }) =>
      timeframe === "monthly" ? "translateX(0)" : "translateX(100%)"};
  }
`;
