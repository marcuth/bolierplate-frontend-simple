import { MetadataRoute } from "next"

const manifest = (): MetadataRoute.Manifest => {
    return {
        name: "Bolierplate By Marcuth",
        short_name: "Bolierplate",
        description: "Bolierplate created by Marcuth",
        start_url: "/",
        display: "standalone",
        background_color: "#fff",
        theme_color: "#fff",
        // icons: [
        //     {
        //         src: "/favicon.ico",
        //         sizes: "64x64 32x32 24x24 16x16",
        //         type: "image/x-icon"
        //     },
        //     {
        //         src: "/assets/images/logo192.png",
        //         type: "image/png",
        //         sizes: "192x192"
        //     },
        //     {
        //         src: "/assets/images/logo512.png",
        //         type: "image/png",
        //         sizes: "512x512"
        //     }
        // ]
    }
}

export default manifest
