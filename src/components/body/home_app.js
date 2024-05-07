import React from "react"
import { HomeBanner } from "./home_banner"
import { HomeFavorites } from "./home_favorites"
import { HomeCatalog } from "./home_catalog"

export const HomeApp = () => {
    return (
        <div>
            <HomeBanner />
            <div className="container py-3">
                <HomeFavorites />
                <HomeCatalog />
            </div>
        </div>
    )
}