import { Wrapper } from "./styles";

interface iProps {
  header: string;
  value: string;
  years?: boolean;
}

export default function Stat({ header, value, years }: iProps) {
  return (
    <Wrapper>
      <h2>
        {header}
        {years && (
          <>
            <br />
            over 5 years
          </>
        )}
      </h2>
      <h3>{value}</h3>
    </Wrapper>
  );
}
