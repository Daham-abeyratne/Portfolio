/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 This enables static export
  basePath: '/Portfolio', // 👈 Replace with your GitHub repo name
  images: { unoptimized: true }, // 👈 Optional: disables Image Optimization (since GH Pages is static)
};

export default nextConfig;
