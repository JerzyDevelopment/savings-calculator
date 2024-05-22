import Stat from "./stat";
import { Wrapper } from "./styles";
import { iConfigData } from "../../config";
import { useEffect, useState } from "react";

interface iProps {
  data: iConfigData;
  yearlyGain: string;
  years: string;
  perYear: string;
  totalGained: string;
}

export default function Stats({
  data,
  yearlyGain,
  years,
  perYear,
  totalGained,
}: iProps) {
  const [savingsPerYear, setSavingsPerYear] = useState("1200");

  useEffect(() => {
    if (perYear == "NaN") {
      setSavingsPerYear("0");
    } else {
      setSavingsPerYear(perYear);
    }
  }, [perYear]);

  return (
    <Wrapper>
      <Stat
        header={<>Average Yearly Return</>}
        value={`${data?.lowerVariable}-${data?.higherVariable}%`}
      />
      <Stat
        header={<>Average Yearly Gain</>}
        value={`£${
          !isNaN(Number(yearlyGain)) ? Number(yearlyGain).toFixed(2) : "0"
        }`}
      />
      <Stat
        header={
          <>
            Amount Contributed <br />
            (Over {years} year{years !== "1" ? "s" : ""})
          </>
        }
        value={`£${new Intl.NumberFormat().format(
          Number(Number(savingsPerYear) * Number(years))
        )}`}
      />
      <Stat
        header={
          <>
            Amount Gained <br />
            (Over {years} year{years !== "1" ? "s" : ""})
          </>
        }
        value={`£${new Intl.NumberFormat().format(Number(totalGained))}`}
      />
    </Wrapper>
  );
}
