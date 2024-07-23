import { Navigate, useRoutes } from "react-router-dom";
import GuestGuard from "../guards/GuestGuard";
import MainLayout from "../layouts/MainLayout";
import AuthGuard from "../guards/AuthGuard";
// AUTHENTICATION
import Login from "../pages/login";
import RegisterPage from "../pages/register";

import ProductsPage from "../pages/products";
import ProductDetailsPage from "../pages/products/details";
import PersonalSettingPage from "../pages/settings/personal";
import CheckoutPage from "../pages/checkout";
import PurchasePage from "../pages/purchase";
import PaymentReturnPage from "../pages/payment/PaymentReturn";

export default function Router() {
  return useRoutes([
    {
      path: "login",
      element: (
        <GuestGuard>
          <Login />
        </GuestGuard>
      ),
    },
    {
      path: "register",
      exact: true,
      element: (
        <GuestGuard>
          <RegisterPage />
        </GuestGuard>
      ),
    },
    {
      path: "/",
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: "users",
          children: [
            { path: "profile", element: <PersonalSettingPage /> },
            { path: "purchase", element: <PurchasePage /> },
          ],
        },
        { path: "checkout", element: <CheckoutPage /> },
        { path: "payment-return", element: <PaymentReturnPage /> },

      ],
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Navigate to="products" /> },
        {
          path: "products",
          children: [
            { path: "", element: <ProductsPage /> },
            { path: ":id", element: <ProductDetailsPage /> },
          ],
        }
      ],
    },
  ]);
}


