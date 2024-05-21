import { Select, SelectWrapper, Wrapper } from "./styles";
import { config } from "../../../config";

interface iProps {
  setType: React.Dispatch<React.SetStateAction<string>>;
}

export default function Dropdown({ setType }: iProps) {
  const allOptions = Object.keys(config);

  return (
    <Wrapper>
      <label>Type of Savings</label>
      <SelectWrapper>
        <Select
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          {allOptions &&
            allOptions.map((el) => {
              return <option key={el}>{el}</option>;
            })}
        </Select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </SelectWrapper>
    </Wrapper>
  );
}
