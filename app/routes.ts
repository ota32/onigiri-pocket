import { type RouteConfig, route, layout } from "@react-router/dev/routes";

export default [
  layout("routes/admin/admin-layout.tsx", [
    route("dashboard", "routes/admin/dashboard.tsx"),
    route("okeyan", "routes/admin/okeyan.tsx"),
    route("kaneyan", "routes/admin/kaneyan.tsx"),
    route("hanesan", "routes/admin/hanesan.tsx"),
  ]),
] satisfies RouteConfig;
