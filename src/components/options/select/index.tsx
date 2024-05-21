import React from "react";
import { InnerWrapper, SelectWrapper, Wrapper } from "./styles";

interface iProps {
  timeFrame: string;
  setTimeFrame: React.Dispatch<React.SetStateAction<string>>;
}

export default function Select({ timeFrame, setTimeFrame }: iProps) {
  const handleChange = () => {
    if (timeFrame === "monthly") {
      setTimeFrame("yearly");
    } else {
      setTimeFrame("monthly");
    }
  };

  return (
    <Wrapper>
      <label>Savings Time Frame</label>
      <SelectWrapper>
        <InnerWrapper timeframe={timeFrame} onClick={handleChange}>
          <p>Monthly</p>
          <div />
          <p>Yearly</p>
        </InnerWrapper>
      </SelectWrapper>
    </Wrapper>
  );
}
