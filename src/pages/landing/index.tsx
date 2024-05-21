import { useEffect, useState } from "react";
import { DataWrapper, MainWrapper, SelectionsWrapper, Wrapper } from "./styles";
import Dropdown from "../../components/dropdown";
import Input from "../../components/input";
import Select from "../../components/select";

export default function LandingPage() {
  const [type, setType] = useState("High-Yield Savings Account");
  const [savings, setSavings] = useState("");
  const [timeFrame, setTimeFrame] = useState("monthly");

  return (
    <Wrapper>
      <h1>Savings Calculator</h1>
      <MainWrapper>
        <SelectionsWrapper>
          <Dropdown setType={setType} />
          <Input savings={savings} setSavings={setSavings} />
          <Select timeFrame={timeFrame} setTimeFrame={setTimeFrame} />
        </SelectionsWrapper>
        <DataWrapper>data</DataWrapper>
      </MainWrapper>
    </Wrapper>
  );
}
