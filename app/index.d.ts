declare interface StatsCard {
    id: number;
    name: string;
    total: number;
    color: string;
    icon: string;
}

declare interface CreateTaskProps {
    onClose: () => void;
}
