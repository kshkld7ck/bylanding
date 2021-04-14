import React from "react";
import { Route } from "wouter";
import MainPage from "../pages/MainPage"
import CompanyPage from "../pages/CompanyPage"

function Router() {
    return (
        <>
            <Route path="/">
                <MainPage />
            </Route>
            <Route path="/company">
                <CompanyPage />
            </Route>
        </>
    )
}

export default Router