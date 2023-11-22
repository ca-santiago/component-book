import React from "react";

export type TopicSelectorChild = {
  id: string;
  text: string;
  selected: boolean;
  children: TopicSelectorChild[];
};

function disableChildTopicNodes(topic: TopicSelectorChild): TopicSelectorChild {
  return {
    ...topic,
    selected: false,
    children: topic.children.map(disableChildTopicNodes),
  };
}

function replaceTopicNode(
  topic: TopicSelectorChild,
  toReplace: TopicSelectorChild
): TopicSelectorChild {
  if (topic.id === toReplace.id) {
    const children = toReplace.selected
      ? toReplace.children.map(disableChildTopicNodes)
      : toReplace.children;
    return {
      ...toReplace,
      children,
    };
  }

  return {
    ...topic,
    children: topic.children.map((t) => replaceTopicNode(t, toReplace)),
  };
}

export type TopicSelectorRendererProps = {
  onSelectionChange: (data: TopicSelectorChild) => void;
  topic: TopicSelectorChild;
  disable: boolean;
};

const TopicSelectorRender = (
  props: TopicSelectorRendererProps
): JSX.Element => {
  const { topic, onSelectionChange, disable } = props;

  const onChipClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (props.disable) return;

      onSelectionChange({
        ...topic,
        selected: !topic.selected,
      });
    },
    [onSelectionChange, topic, props.disable]
  );

  const selectedStyle = topic.selected ? " bg-blue-500 text-white" : "text-slate-800";
  const disabledStyle = disable ? "bg-slate-100 text-slate-400 bg-blend-darken" : "";

  return (
    <>
      <div
        className={`mb-2 pb-0.5 px-2 border rounded-full ${selectedStyle} ${disabledStyle}`}
        onClick={onChipClick}
      >
        <p>{topic.text}</p>
      </div>
      {topic.selected &&
        topic.children.map((t) => (
          <TopicSelectorRender
            disable={props.disable}
            key={t.id}
            onSelectionChange={onSelectionChange}
            topic={t}
          />
        ))}
    </>
  );
};

export type TopicSelectorProps = {
  onSelectionChange: (data: TopicSelectorChild[]) => void;
  items: TopicSelectorChild[];
  disableSelect: boolean;
};

function TopicSelector({
  items,
  onSelectionChange,
  disableSelect,
}: TopicSelectorProps) {
  const [topics, setTopics] = React.useState(items);

  const onSelectionChangeHandler = (newNode: TopicSelectorChild) => {
    const newTopics = topics.map((t) => replaceTopicNode(t, newNode));
    onSelectionChange(newTopics);
    setTopics(newTopics);
  };

  return (
    <div className="flex gap-2 flex-wrap select-none">
      {topics.map((t) => {
        return (
          <TopicSelectorRender
            disable={disableSelect}
            onSelectionChange={onSelectionChangeHandler}
            topic={t}
          />
        );
      })}
    </div>
  );
}

export default React.memo(TopicSelector);
