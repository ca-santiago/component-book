import React from "react";
import { TopicSelectorNormalData } from "./stories.mock";
import TopicSelector from "./TopicSelector";

export default {
  title: "Topic selector",
  component: TopicSelector,
};

export const Normal = () => {
  const [isDisabled, setDisableSelect] = React.useState<boolean>(false);

  const onSelectionChange = React.useCallback((data) => {
    console.log("Has change");
  }, []);

  const toggleDisable = React.useCallback(
    (e) => {
      e.preventDefault();
      setDisableSelect(!isDisabled);
    },
    [setDisableSelect, isDisabled]
  );

  return (
    <div>
      <TopicSelector
        disableSelect={isDisabled}
        onSelectionChange={onSelectionChange}
        items={TopicSelectorNormalData}
      />
      <button className="p-1 px-2 rounded-sm bg-blue-400 text-white" onClick={toggleDisable}>
        {isDisabled ? "Enable" : "Disable"}
      </button>
    </div>
  );
};
