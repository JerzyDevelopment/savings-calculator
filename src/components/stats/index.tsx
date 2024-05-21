import Stat from "./stat";
import { Wrapper } from "./styles";
import { iConfigData } from "../../config";

interface iProps {
  data: iConfigData;
}

export default function Stats({ data }: iProps) {
  return (
    <Wrapper>
      <Stat
        header="Average Yearly Return"
        value={`${data?.lowerVariable}-${data?.higherVariable}%`}
      />
      <Stat header="Average Yearly Gain" value="value" />
      <Stat header="Amount Contributed" value="value" years />
      <Stat header="header" value="value" />
    </Wrapper>
  );
}
