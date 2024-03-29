import fs from "fs";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import CustomLink from "@/components/CustomLink";
import MainLayout from "@/components/layouts/MainLayout";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
// import { postFilePaths, POSTS_PATH } from "@/lib/mdxUtils";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  TestComponent: dynamic(() => import("@/components/mdx/TestComponent")),
  MyTest: dynamic(() => import("@/components/mdx/TestComponent")),
  Head,
};
type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    title: string;
    description?: string;
  };
};

export default function PostPage({ source, frontMatter }: PostPageProps) {
  return (
    <MainLayout>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <header>
        <nav>
          <Link href="/" legacyBehavior>
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header>
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>
      <main>
        <MDXRemote {...source} components={components} />
      </main>

      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }

        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
    </MainLayout>
  );
}

type StaticPropsProps = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: StaticPropsProps) => {
  const { slug } = params;
  await dbConnect();
  const newProject = await Project.findOne({
    slug: slug,
  });

  const { content, data } = matter(newProject.mdxContent);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  await dbConnect();
  const allProjects = await Project.find();

  // Map the path into the static paths object required by Next.js
  const paths = allProjects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
