import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { UseCasesPage } from "./components/use-cases-page";
import { UseCaseDetail } from "./components/use-case-detail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: UseCasesPage },
      { path: "use-case/:id", Component: UseCaseDetail },
    ],
  },
]);
