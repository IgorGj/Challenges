import React, { SetStateAction, useEffect, useState } from "react";
import "./Slider.css";
type Props = {
  min: number;
  max: number;
  value: {
    max: number;
  };
  step: number;
  // onChange: React.Dispatch<SetStateAction<{ max: number }>>;
  sliderChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RangeSlider = ({
  min,
  max,
  value,
  step,
  // onChange,
  sliderChange,
}: Props) => {

  const [maxValue, setMaxValue] = useState(value ? value.max : max);

  useEffect(() => {
    if (value) {
      setMaxValue(value.max);
    }
  }, [value]);


  return (
    <div>
      <div>
        <input
          style={{ width: "100%", backgroundSize: `${maxValue}% 100%` }}
          type="range"
          value={maxValue}
          min={min}
          max={max}
          step={step}
          onChange={(e) => {
            sliderChange(e);
          }}
        />
      </div>
    </div>
  );
};
