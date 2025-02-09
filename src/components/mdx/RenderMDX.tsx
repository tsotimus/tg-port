/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MDXRemote } from "next-mdx-remote/rsc";
import config from "./config";

interface RenderMDXProps {
  source: string;
}
 const RenderMDX = ({source}: RenderMDXProps) => {

  const getConfig = config({source})

  return (
    <MDXRemote
      {...getConfig}
    />
  );
}

export default RenderMDX;
