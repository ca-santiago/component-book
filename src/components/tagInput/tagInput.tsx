import React from "react";

export interface TagInputProps {
  initialValue?: string;
}

const TagInput = ({ initialValue }: TagInputProps) => {
  const [value, setValue] = React.useState(initialValue || "");

  return (
    <div className="bg-red-100 m-2">
      {value}
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default TagInput;
