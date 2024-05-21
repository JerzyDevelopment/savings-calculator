import React from "react";
import { SelectWrapper, Wrapper } from "./styles";

interface iProps {
  savings: string;
  setSavings: React.Dispatch<React.SetStateAction<string>>;
}

export default function Input({ savings, setSavings }: iProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const numericValue = value.replace(/[^0-9]/g, "");

    const formattedValue = new Intl.NumberFormat().format(Number(numericValue));

    if (numericValue == "0" || !numericValue) {
      setSavings("");
    } else if (!isNaN(Number(numericValue)) || value == "") {
      setSavings(formattedValue);
    }
  };

  return (
    <Wrapper>
      <label>Savings</label>
      <SelectWrapper>
        <p>£</p>
        <input
          placeholder="Enter here..."
          value={savings}
          onChange={handleChange}
          maxLength={13}
        />
      </SelectWrapper>
    </Wrapper>
  );
}
