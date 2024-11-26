/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        deviceSizes: [320, 420, 768, 1024, 1200],
        imageSizes: [16, 32, 48, 64, 96],
        domains: ['qcwtvtdimikevcdtosdq.supabase.co'],
        formats: ['image/avif', 'image/webp'],
        path: '/_next/image',
        loader: 'default',
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'qcwtvtdimikevcdtosdq.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/article-media/**',
            },
        ],
    },
};

export default nextConfig;