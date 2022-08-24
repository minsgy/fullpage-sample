import {
  Route,
  Routes as ReactRouterRoutes,
  BrowserRouter,
} from "react-router-dom";

import { LandingPage } from "./LandingPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path="/" element={<LandingPage />} />
      </ReactRouterRoutes>
    </BrowserRouter>
  );
};
