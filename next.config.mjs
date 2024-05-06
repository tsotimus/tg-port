/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@mdxeditor/editor"],
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/((?!construction).)*",
        destination: "/construction",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
