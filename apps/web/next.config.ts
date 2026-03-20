import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@ofortuna/shared-types", "@ofortuna/ui", "@ofortuna/utils"],
};

export default nextConfig;
