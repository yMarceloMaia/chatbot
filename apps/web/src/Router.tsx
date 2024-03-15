import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

export function Router() {

    return (
        <BrowserRouter>
            <Routes location={location} key={location.pathname}>
            </Routes>
        </BrowserRouter>
    )
}