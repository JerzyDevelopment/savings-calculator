import { useEffect, useState } from "react";
import { DataWrapper, MainWrapper, SelectionsWrapper, Wrapper } from "./styles";
import Dropdown from "../../components/options/dropdown";
import Input from "../../components/options/input";
import Select from "../../components/options/select";
import Stats from "../../components/stats";
import { config, iConfigData } from "../../config";

export default function LandingPage() {
  const [type, setType] = useState("High-Yield Savings Account");
  const [savings, setSavings] = useState("");
  const [timeFrame, setTimeFrame] = useState("monthly");
  const [data, setData] = useState<iConfigData>(
    config["High-Yield Savings Account"]
  );

  useEffect(() => {
    setData(config[type]);

    //calculate yearly gain
    //calculate amount contributed 5 year
    //calculate amount gained 5 year
    //pass these to the stats
    //create component for graph and just pass the configData to it to calculate all the values
  }, [type, savings, timeFrame]);

  return (
    <Wrapper>
      <h1>Savings Calculator</h1>
      <MainWrapper>
        <SelectionsWrapper>
          <Dropdown setType={setType} />
          <Input savings={savings} setSavings={setSavings} />
          <Select timeFrame={timeFrame} setTimeFrame={setTimeFrame} />
        </SelectionsWrapper>
        <DataWrapper>
          <Stats data={data} />
          <div>graph</div>
        </DataWrapper>
      </MainWrapper>
    </Wrapper>
  );
}
