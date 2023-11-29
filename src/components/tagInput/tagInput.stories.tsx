import React from "react";
import TagInput from "./tagInput";

export default {
  title: "Tag input",
  component: TagInput,
};

export const Normal = () => {
  const [tags, setTags] = React.useState<string[]>([]);
  return (
    <div>
      <div>
        {tags.map((t) => (
          <p>{t}</p>
        ))}
      </div>
      <br />
      <h2>Add your tags here</h2>
      <TagInput onTagsChange={setTags} />
    </div>
  );
};

export const InitialTags = () => {
  const somePrefilledTags = ["some", "prefilled", "tags"];
  // onTagsChange will not notify back when the initialTags is set, but when a new tag is added
  const [tags, setTags] = React.useState<string[]>([]);
  return (
    <div>
      <h2>Add your tags here</h2>
      <TagInput initialTags={somePrefilledTags} onTagsChange={setTags} />
      <div>
        {tags.map((t) => (
          <p>{t}</p>
        ))}
      </div>
      <br />
    </div>
  );
};
