import type { LayoutLoad } from "./$types";

export interface Tab {
    name: string;
    link: string;
}

const tabs: Tab[] = [
    {
        name: 'home',
        link: '/'
    },
    {
        name: 'professional',
        link: '/professional'
    },
    {
        name: 'gamedev',
        link: '/gamedev'
    },
    {
        name: 'open source',
        link: '/open-source'
    }
];

function getEndOfBrowserUrl(url: URL) {
    return url.toString().split('/').pop();
}

export const load: LayoutLoad = ({ url }) => {
    return {
        tabs,
        activeIndex: tabs.findIndex((tab) => tab.link.split("/").pop() === getEndOfBrowserUrl(url))
    }
}