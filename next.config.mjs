const generateConfig = async () => {
  const IS_UNDER_CONSTRUCTION = process.env.IS_UNDER_CONSTRUCTION === "true";

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    transpilePackages: ["@mdxeditor/editor", "geist"],
    reactStrictMode: true,
    experimental: {
      optimizePackageImports: ["shiki", "@icons-pack/react-simple-icons"],
    },
    poweredByHeader: false,
    redirects: async () => {
      return IS_UNDER_CONSTRUCTION
        ? [
            {
              source: "/((?!construction).)*",
              destination: "/construction",
              permanent: false,
            },
          ]
        : [];
    },
  };
  return nextConfig;
};

export default generateConfig;
