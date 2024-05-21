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

  p {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
  }

  input {
    appearance: none;
    border: none;
    outline: none;
    height: 32px;
    padding: 0 14px 0 32px;
    border-radius: 14px;
    background: #22262b;
    width: 100%;
  }
`;
