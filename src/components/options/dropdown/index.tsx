import { Select, SelectWrapper, Wrapper } from "./styles";
interface iProps {
  label: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
}

export default function Dropdown({ label, setType, options }: iProps) {
  return (
    <Wrapper>
      <label>{label}</label>
      <SelectWrapper>
        <Select
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          {options &&
            options.map((el) => {
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
