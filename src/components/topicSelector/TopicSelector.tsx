import React, { Children } from 'react';
import './styles.css';

export type TopicSelectorChild = {
    id: string;
    data: string;
    selected: boolean;
    children: TopicSelectorChild[];
};

export type TopicSelectorRendererProps = {
    onSelectionChange: (data: TopicSelectorChild) => any;
    topic: TopicSelectorChild;
    disable: boolean;
}

export type TopicSelectorProps = {
    onSelectionChange: (data: TopicSelectorChild[]) => any;
    items: TopicSelectorChild[];
    disableSelect: boolean;
}

function TopicSelectorRender (props: TopicSelectorRendererProps): JSX.Element {
    const {topic, onSelectionChange, disable} = props;

    const onClickChip = React.useCallback(() => {
        if(props.disable) {
            return;
        }
        onSelectionChange({
            ...topic,
            selected: !topic.selected
        });
    }, [onSelectionChange, topic, topic.selected, disable]);

    const children = React.useMemo(() => {
        if(topic.selected) {
            return topic.children.map(t => (
                <TopicSelectorRender
                    disable={props.disable}
                    key={t.id}
                    onSelectionChange={onSelectionChange}
                    topic={t}
                />
            ));
        } else {
            return false;
        }
    }, [topic, disable, onSelectionChange]);

    const selectedStyle = topic.selected ? 'selected' : '';
    const disabledStyle = disable ? 'disabled' : '' ;

    return (
        <>
            <div className='topic-chip-container'>
                <div
                    className={`topic-chip ${selectedStyle} ${disabledStyle}`}
                    onClick={(e) => {
                        e.preventDefault();
                        onClickChip();
                    }}
                    >
                    <p>{topic.data}</p>
                </div>
                {children}
            </div>
        </>
    );
}

function disableChildTopicNodes(topic: TopicSelectorChild): TopicSelectorChild{
    return {
        ...topic,
        selected: false,
        children: topic.children.map(disableChildTopicNodes)
    }
}

function replaceTopicNode(topic: TopicSelectorChild, toReplace: TopicSelectorChild): TopicSelectorChild {    
    if(topic.id === toReplace.id) {
        const children = toReplace.selected ? toReplace.children.map(disableChildTopicNodes) : toReplace.children;
        return {
            ...toReplace,
            children,
        }
    }
    return {
        ...topic,
        children: topic.children.map(t => replaceTopicNode(t, toReplace)),
    }
}

function TopicSelector({
    items,
    onSelectionChange,
    disableSelect
}: TopicSelectorProps){

    const [topics, setTopics] = React.useState(items);

    React.useEffect(() => {
        onSelectionChange(topics);
    }, [topics, onSelectionChange])

    return (
        <div className='topic-container'>
            {topics.map(t => (
                <TopicSelectorRender
                    disable={disableSelect}
                    key={t.id}
                    onSelectionChange={(toReplace) => {
                        setTopics(topics.map(t => replaceTopicNode(t, toReplace)));
                    }}
                    topic={t}
                />
            ))}
        </div>
    );
}

export default React.memo(TopicSelector);