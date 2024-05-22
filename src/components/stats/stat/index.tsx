import { Wrapper } from "./styles";

interface iProps {
  header: JSX.Element;
  value: string;
}

export default function Stat({ header, value }: iProps) {
  return (
    <Wrapper>
      <h2>{header}</h2>
      <h3>{value}</h3>
    </Wrapper>
  );
}
