import React, { useState, useEffect } from "react";
import Select from "react-select";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
const style = {
  control: base => ({
    ...base,
    // This line disable the blue border
    boxShadow: "none"
  })
};
const DropDown = ({ setInfo, info, product }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
    setInfo({ ...info, info: selectedOption?.value });
  }, [selectedOption]);

  return (
    <div className="mt-1">
      <Select
        options={options}
        value={selectedOption}
        onChange={setSelectedOption}
        styles = {style}
        className="w-full focus:outline-none"
      />
    </div>
  );
};

export default DropDown;
