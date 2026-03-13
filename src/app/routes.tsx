import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { PropertyDetail } from "./pages/PropertyDetail";
import { TenantExperience } from "./pages/TenantExperience";
import { ESG } from "./pages/ESG";
import { News } from "./pages/News";
import { TenantPortal } from "./pages/TenantPortal";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "portfolio", Component: Portfolio },
      { path: "portfolio/:id", Component: PropertyDetail },
      { path: "tenant-experience", Component: TenantExperience },
      { path: "esg", Component: ESG },
      { path: "news", Component: News },
      { path: "tenant-portal", Component: TenantPortal },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
