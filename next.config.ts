import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    basePath: '/clock-made-of-clocks',
    output: 'export',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
