import { TopicSelectorChild } from "./TopicSelector";

export const TopicSelectorNormalData: TopicSelectorChild[] = [
    {
        data: 'Software',
        id: 'Software',
        selected: false,
        children: [
            {
                data: 'PC',
                id: 'PC',
                selected: false,
                children: []
            },
            {
                data: 'Microsoft',
                id: 'Microsoft',
                selected: false,
                children: []
            },
        ]
    },
    {
        data: 'Gaming',
        id: 'Gaming',
        selected: false,
        children: [
            {
                data: 'Master Race',
                id: 'Master Race',
                selected: false,
                children: []
            },
            {
                data: 'Tencent',
                id: 'Tencent',
                selected: false,
                children: []
            },
        ]
    },
    {
        data: 'Sports',
        id: 'Sports',
        selected: false,
        children: [
            {
                data: 'Soccer',
                id: 'Soccer',
                selected: false,
                children: []
            },
            {
                data: 'Tenis',
                id: 'Tenis',
                selected: false,
                children: []
            },
            {
                data: 'Celebrities',
                id: 'Celebrities',
                selected: false,
                children: [
                    {
                        data: 'Michael Jordan',
                        id: 'Michael Jordan',
                        selected: false,
                        children: []
                    },
                    {
                        data: 'Cristiano Ronaldo',
                            id: 'Cristiano Ronaldo',
                        selected: false,
                        children: []
                    },
                ]
            }
        ]
    }
];
