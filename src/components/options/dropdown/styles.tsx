import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* max-width: 110px; */
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 16px;
  padding: 2px;
  background: linear-gradient(to right, #ca7b03, #751ba1);
  max-width: fit-content;
  min-width: 100px;
  cursor: pointer;
  svg {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;

export const Select = styled.select`
  appearance: none;
  border: none;
  outline: none;
  height: 32px;
  padding: 0 38px 0 14px;
  border-radius: 14px;
  background: #22262b;
  cursor: pointer;
  width: 100%;
`;
