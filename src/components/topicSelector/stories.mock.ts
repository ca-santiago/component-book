import { TopicSelectorChild } from "./TopicSelector";

export const TopicSelectorNormalData: TopicSelectorChild[] = [
    {
        text: 'Software',
        id: 'Software',
        selected: false,
        children: [
            {
                text: 'PC',
                id: 'PC',
                selected: false,
                children: []
            },
            {
                text: 'Microsoft',
                id: 'Microsoft',
                selected: false,
                children: []
            },
        ]
    },
    {
        text: 'Gaming',
        id: 'Gaming',
        selected: false,
        children: [
            {
                text: 'Master Race',
                id: 'Master Race',
                selected: false,
                children: []
            },
            {
                text: 'Tencent',
                id: 'Tencent',
                selected: false,
                children: []
            },
        ]
    },
    {
        text: 'Sports',
        id: 'Sports',
        selected: false,
        children: [
            {
                text: 'Soccer',
                id: 'Soccer',
                selected: false,
                children: []
            },
            {
                text: 'Tenis',
                id: 'Tenis',
                selected: false,
                children: []
            },
            {
                text: 'Celebrities',
                id: 'Celebrities',
                selected: false,
                children: [
                    {
                        text: 'Michael Jordan',
                        id: 'Michael Jordan',
                        selected: false,
                        children: []
                    },
                    {
                        text: 'Cristiano Ronaldo',
                            id: 'Cristiano Ronaldo',
                        selected: false,
                        children: []
                    },
                ]
            }
        ]
    }
];
