import Loading from "@/features/misc/routes/Loading";
import { lazyImport } from "@/utils/lazyImport";
import HomePage from "@/pages/home/routes/HomePage";

export const publicRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <Loading />,
  },
];
