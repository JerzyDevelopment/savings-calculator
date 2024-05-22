import { useEffect, useState } from "react";
import {
  BottomText,
  DataWrapper,
  MainWrapper,
  SelectionsWrapper,
  Top,
  Wrapper,
} from "./styles";
import Dropdown from "../../components/options/dropdown";
import Input from "../../components/options/input";
import Select from "../../components/options/select";
import Stats from "../../components/stats";
import { config, iConfigData } from "../../config";
import Graph from "../../components/graph";
import { img } from "../../assets";

interface iFinalObj {
  year: number;
  lowerVariable: number;
  higherVariable: number;
}

const years: string[] = [];

for (let i = 1; i < 101; i++) {
  years.push(i.toString());
}

export default function LandingPage() {
  const [type, setType] = useState("High-Yield Savings Account");
  const [savings, setSavings] = useState("100");
  const [timeFrame, setTimeFrame] = useState("1");
  const [repeat, setRepeat] = useState("monthly");
  const [perYear, setPerYear] = useState("1200");
  const [totalGained, setTotalGained] = useState("0");
  const [finalData, setFinalData] = useState<null | iFinalObj[]>(null);

  const [data, setData] = useState<iConfigData>(
    config["High-Yield Savings Account"]
  );
  const [yearlyGain, setYearlyGain] = useState("");
  const allOptions = Object.keys(config);

  useEffect(() => {
    const configData = config[type];
    setData(configData);

    //calculate yearly gain
    //calculate amount contributed 5 year
    //calculate amount gained 5 year
    //pass these to the stats
    //create component for graph and just pass the configData to it to calculate all the values
    const sanitizedSavings = parseInt(savings.replace(/,/g, ""), 10);

    const savingPerYear =
      repeat === "monthly" ? sanitizedSavings * 12 : sanitizedSavings;

    const averageVariable =
      (configData.lowerVariable + configData.higherVariable) / 2;

    const percentageMultiplier = 1 + averageVariable / 100;
    const lowerMultiplier = 1 + configData.lowerVariable / 100;
    const higherMultiplier = 1 + configData.higherVariable / 100;

    setPerYear(savingPerYear.toString());

    const yearsSavings = parseInt(timeFrame);

    let totalMoney = savingPerYear;

    const increases = [];

    const values = [];

    for (let i = 0; i < yearsSavings; i++) {
      const newSum = totalMoney * percentageMultiplier;

      const increase = newSum - totalMoney;

      increases.push(increase);

      totalMoney = newSum + savingPerYear;

      const dataObj = {
        year: i + 1,
        lowerVariable: parseFloat((totalMoney * lowerMultiplier).toFixed(2)),
        higherVariable: parseFloat((totalMoney * higherMultiplier).toFixed(2)),
      };

      values.push(dataObj);
    }

    let totalSum = 0;

    // Calculate the total sum of array elements
    for (const num of increases) {
      totalSum += num;
    }

    // Calculate the average
    const average = totalSum / increases.length;

    setFinalData(values);
    setYearlyGain(average.toFixed(2));
    setTotalGained(totalSum.toFixed(2));
  }, [type, savings, timeFrame, repeat]);

  return (
    <Wrapper>
      <Top>
        <img src={img.logo} />
        <h1>Savings Calculator</h1>
      </Top>
      <MainWrapper>
        <SelectionsWrapper>
          <Dropdown
            label="Type of Savings"
            setType={setType}
            options={allOptions}
          />
          <Input savings={savings} setSavings={setSavings} />
          <Select repeat={repeat} setRepeat={setRepeat} />
          <Dropdown
            label="Savings Time Frame (Years)"
            setType={setTimeFrame}
            options={years}
          />
        </SelectionsWrapper>
        <DataWrapper>
          <Stats
            data={data}
            yearlyGain={yearlyGain}
            years={timeFrame}
            perYear={perYear}
            totalGained={totalGained}
          />
          <Graph data={finalData} />
        </DataWrapper>
      </MainWrapper>
      <BottomText>
        <p>
          Created by <b>Jerzy Bogucki</b>
        </p>
        <p>*Data based on average uk data as of May 2024</p>
      </BottomText>
    </Wrapper>
  );
}
