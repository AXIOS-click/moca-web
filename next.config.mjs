
import path from "path";
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
     sassOptions: {
        includePaths: [path.join(process.cwd(), "css")],
    },
    trailingSlash: true,
    devIndicators: {
        buildActivity: false,
    },
    eslint: {
        ignoreDuringBuilds: false,
    },
};

export default nextConfig;
