import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface TagChipProps {
  text: string;
  onRemove: () => void;
}

const TagChip = (props: TagChipProps) => {
  return (
    <div className="p-0.5 px-1 pl-3 border border-slate-500 rounded-full flex gap-1 text-slate-600 items-center select-none">
      <p className="">{props.text}</p>
      <IoIosCloseCircleOutline
        onClick={() => props.onRemove()}
        size={22}
        className="ml-1 cursor-pointer text-slate-400"
      />
    </div>
  );
};

/**
 * @param initialTags default: empty array
 * @param tagSizeLimit default: 99
 */
export interface TagInputProps {
  initialTags?: string[];
  tagSizeLimit?: number;
}

const isSingleComa = (str: string): boolean => str[0] === ",";

const isValidTag = (str: string): boolean => {
  const validLen = str.length > 1;
  const noSingleComa = !isSingleComa(str);
  return str[str.length - 1] === "," && validLen && noSingleComa;
};

const sanitizeTag = (str: string): string => str.trim().replace(",", "");

// TODO: casantiago - Implement tagSizeLimit
const TagInput = ({ initialTags, tagSizeLimit }: TagInputProps) => {
  const [tags, setTags] = React.useState<string[]>(initialTags || []);
  const [value, setValue] = React.useState<string>("");

  const onChangeHandler = (value: string) => {
    if (isValidTag(value)) {
      setValue("");
      setTags((prev) => [...prev, sanitizeTag(value)]);
    } else if (isSingleComa(value)) return;
    else {
      setValue(value);
    }
  };

  const onRemoveHandler = (i: number) => {
    setTags((prev) => prev.filter((_, index) => index !== i));
  };

  return (
    <div className="m-2 transition duration-200 ease-in">
      <div className="border rounded p-3 flex gap-2 flex-wrap">
        {tags.map((t, i) => (
          <TagChip
            key={`${i}-${t}`}
            onRemove={() => onRemoveHandler(i)}
            text={t}
          />
        ))}
        <input
          className="border-none text-slate-600 outline-none ml-1"
          value={value}
          onChange={(e) => onChangeHandler(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TagInput;
