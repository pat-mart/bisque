/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/screens/home",
                permanent: true
            }
        ]
    }
};

export default nextConfig;
