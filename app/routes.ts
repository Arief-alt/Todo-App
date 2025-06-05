import { type RouteConfig, layout, route, index } from "@react-router/dev/routes";

export default [
    layout('routes/root/layout.tsx', [
        route('dashboard','routes/root/dashboard.tsx'),
        route('completed','routes/root/completed.tsx'),
        route('calendar','routes/root/calendar.tsx'),
        route('settings','routes/root/settings.tsx'),
    ]),
] satisfies RouteConfig;
