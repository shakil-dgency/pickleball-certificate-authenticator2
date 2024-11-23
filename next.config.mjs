/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'certificate.thepickleballscoreboard.com',
            // port: '',
            // pathname: '/account123/**',
          },
        ],
      },
      experimental: {
        // …
        serverComponentsExternalPackages: ['@react-pdf/renderer'],
      }

};

export default nextConfig;
