import AppBar from "components/AppBar/AppBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { LayoutWrapper } from "./Layout.styled";


export default function Layout() {
    return (
        <LayoutWrapper>
            <AppBar />
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet/>
          </Suspense>
        </LayoutWrapper>
    )
}
