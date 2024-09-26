/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "demo-alukas.myshopify.com", 
            },
        ],
    },
};

