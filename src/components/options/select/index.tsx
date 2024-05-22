import React from "react";
import { InnerWrapper, SelectWrapper, Wrapper } from "./styles";

interface iProps {
  repeat: string;
  setRepeat: React.Dispatch<React.SetStateAction<string>>;
}

export default function Select({ repeat, setRepeat }: iProps) {
  const handleChange = () => {
    if (repeat === "monthly") {
      setRepeat("yearly");
    } else {
      setRepeat("monthly");
    }
  };

  return (
    <Wrapper>
      <label>Savings Contributed Repeat</label>
      <SelectWrapper>
        <InnerWrapper repeat={repeat} onClick={handleChange}>
          <p>Monthly</p>
          <div />
          <p>Yearly</p>
        </InnerWrapper>
      </SelectWrapper>
    </Wrapper>
  );
}
