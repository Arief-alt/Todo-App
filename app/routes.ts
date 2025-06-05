import { type RouteConfig, layout, route, index } from "@react-router/dev/routes";

export default [
    layout('routes/root/layout.tsx', [
        index('routes/root/dashboard.tsx'),
        route('completed','routes/root/completed.tsx'),
        route('calendar','routes/root/calendar.tsx'),
    ]),
] satisfies RouteConfig;
