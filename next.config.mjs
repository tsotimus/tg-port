const generateConfig = async () => {
  const IS_UNDER_CONSTRUCTION = process.env.IS_UNDER_CONSTRUCTION === "true";

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    transpilePackages: ["@mdxeditor/editor"],
    reactStrictMode: true,
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
