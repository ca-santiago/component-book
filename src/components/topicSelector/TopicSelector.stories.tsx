import React from 'react';
import { TopicSelectorNormalData } from "./stories.data";
import TopicSelector from "./TopicSelector";

export default {
    title: 'Topic selector',
    component: TopicSelector
}

export const Normal = () => {
    const [isDisabled, setDisableSelect] = React.useState(false);

    const onSelectionChange = React.useCallback((data) => {
        console.log('Has change');
    }, []);

    const toggleDisable = React.useCallback((e) => {
        e.preventDefault();
        setDisableSelect(!isDisabled);
    }, [setDisableSelect, isDisabled]);

    return (
        <>
            {isDisabled && 'Cannot select more'}
            <TopicSelector
                disableSelect={isDisabled}
                onSelectionChange={onSelectionChange}
                items={TopicSelectorNormalData}
            />
            <button onClick={toggleDisable}>{isDisabled ? 'Enable' : 'Disable'}</button>
        </>
    )
}

