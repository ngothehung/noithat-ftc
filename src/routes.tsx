import { createBrowserRouter, Navigate } from "react-router-dom";
import WebsiteLayout from "./Layout/WebsiteLayout";
import HomePage from "./pages/HomePage";
export const routers = createBrowserRouter([
    {
        path: "/", element: <WebsiteLayout />,
        children :[
            {
              path: "homepage",
                
                element: <HomePage />,
            },
            
        ]
    },
    
]);
