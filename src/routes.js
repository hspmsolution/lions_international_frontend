// import { useState, useEffect } from 'react';
// import { Navigate, useRoutes } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// // layouts
// import DashboardLayout from './admin/layouts/dashboard';
// //
// import UserPage from "./admin/pages/UserPage";
// import Login from "./admin/pages/login";
// import Register from "./admin/pages/register";
// import Page404 from "./admin/pages/Page404";
import NewActivity from "./admin/pages/NewActivity";
import NewsReport from "./admin/pages/NewsReport";
import DashboardAppPage from "./admin/pages/DashboardAppPage";
import AdminReport from "./admin/pages/AdminReport";
import AddActivity from "./admin/pages/AddActivity";
// ----------------------------------------------------------------------

// export default function Router() {
//   const isAdmin = useSelector((state) => state.auth.admin);
//   const [routes, setRoutes] = useState([]);

//   useEffect(() => {
//     setRoutes([
//       {
//         path: '/',
//         element: <Register />,
//       },
//       {
//         path: '/login',
//         element: <Login />,
//       },
//       {
//         path: '/register',
//         element: <Register />,
//       },
//       {
//         path: '/404',
//         element: <Page404 />,
//       },
//       {
//         path: '*',
//         element: <Navigate to="/404" replace />,
//       },
//       ...(isAdmin
//         ? [
//           {
//             path: '/dashboard',
//             element: <DashboardLayout />,
//             children: [
//               { path: 'app', element: <DashboardAppPage /> },
//               { path: 'user', element: <UserPage /> },
//               { path: 'products', element: <ProductsPage /> },
//               { path: 'blog', element: <BlogPage /> },
//               { path: 'manage-admin', element: <ManageAdmin /> },
//               { path: 'addproduct', element: <AddProduct /> },
//               { path: 'updateproduct', element: <UpdateProduct /> },
//               {
//                 path: 'chart',
//                 element: <LineChart />,
//               },
//             ],
//           },
//         ]
//         : []),
//     ]);
//   }, [isAdmin]);

//   return useRoutes(routes);
// }
import DashboardLayout from "./admin/layouts/dashboard";
import { useRoutes } from "react-router-dom";

import React from "react";

export default function Router() {
  const route = [
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { path: "app", element: <DashboardAppPage /> },
        { path: "activity", element: <NewActivity /> },
        { path: "news", element: <NewsReport /> },
        { path: "admin", element: <AdminReport /> },
        { path: "pastactivity", element: <AddActivity /> },
      ],
    },
  ];
  return useRoutes(route);
}
