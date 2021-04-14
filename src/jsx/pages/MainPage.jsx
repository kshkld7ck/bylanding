import React from "react";
import Announcement from "../components/Announcement";
import Heroes from "../components/Heroes";
import Info from "../components/Info";
import Projects from "../components/Projects";
import Promo from "../components/Promo";
import BYshop from "../components/BYshop";
import Layout from "../layouts/Layout"

function MainPage() {
    return (
        <Layout>
            <Promo />
            <Announcement />
            <Projects />
            <Info />
            <Heroes />
            <BYshop />
        </Layout>
    )
}

export default MainPage