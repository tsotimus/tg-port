const generateConfig = async () => {
  const IS_UNDER_CONSTRUCTION = process.env.IS_UNDER_CONSTRUCTION === "true";


  const REDIRECTS = [
    {
      source: "/admin/tags",
      destination: "/admin/tags/0",
      permanent: true,
    }
  ]

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    transpilePackages: ["@mdxeditor/editor", "geist"],
    reactStrictMode: true,
    experimental: {
      optimizePackageImports: ["shiki", "@icons-pack/react-simple-icons"],
    },
    linting: {
      ignoreDuringBuilds: true,
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
        : [...REDIRECTS];
    },
  };
  return nextConfig;
};

export default generateConfig;
