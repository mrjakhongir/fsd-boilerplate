import UserPage from "@/pages/user/ui/user-page";
import UsersPage from "@/pages/users/ui/users-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "../layout/app-layout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <UsersPage /> },
      { path: "/user/:id", element: <UserPage /> },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
