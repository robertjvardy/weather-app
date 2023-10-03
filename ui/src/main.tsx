import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import setupConfig from "./setupConfig.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage.js";
import WeatherDisplay from "./scenes/WeatherDisplay/WeatherDisplay.js";

setupConfig();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { suspense: true, staleTime: 60000, cacheTime: 60000 },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <WeatherDisplay />,
        path: "/",
      },
    ],
  },
  {
    path: "login",
    element: <div>Login</div>,
  },
  {
    path: "logout",
    element: <div>Logout</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
