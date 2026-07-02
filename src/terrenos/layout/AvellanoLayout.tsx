import { Footer } from "../components/Footer"
import { MetaPixelTracker } from "../components/MetaPixelTracker"
import {NavbarAvellano} from "../components/NavbarAvellano"
import { Outlet } from "react-router"

export const AvellanoLayout = () => {  


    return (
        <>
        <MetaPixelTracker />
        <div className="min-h-screen">
            <NavbarAvellano />
            <Outlet/>
            <Footer />

        </div>
        </>
    )
}