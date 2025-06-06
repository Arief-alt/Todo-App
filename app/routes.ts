import { type RouteConfig, layout, route, index } from "@react-router/dev/routes";

export default [
    index('routes/root/welcome.tsx'),
    layout('routes/root/layout.tsx', [
        route('dashboard', 'routes/root/dashboard.tsx'),
        route('completed','routes/root/completed.tsx'),
        route('calendar','routes/root/calendar.tsx'),
    ]),
] satisfies RouteConfig;
