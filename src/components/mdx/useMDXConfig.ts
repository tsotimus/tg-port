import type { MDXRemoteProps } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import owl from "shiki/themes/night-owl.mjs"
import useMDXComponents from './components/useMDXComponents'
import remarkGfm from 'remark-gfm'

interface UseMDXConfigProps {
    source: string
}

const useMDXConfig = ({source}:UseMDXConfigProps): MDXRemoteProps => {
  const components = useMDXComponents()

  const config: MDXRemoteProps = {
    source: source,
    components,
    options: {
    //   parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
            //   keepBackground: false,
            //   theme: {
            //     dark: oneDarkPro,
            //     light: owl
            //   },
            theme: owl
            //   getHighlighter: (options: HighlighterCoreOptions) =>
            //     getHighlighter({
            //       ...options,
            //       langs: ['js', 'ts', 'html', "shell", "bash", "css", "json", "lua", "yaml" , "yml" ,"svelte"],
            //       themes: [oneDarkPro],
            //     })
            }
          ],
        ]
      }
    }
  }
  return config
}

export default useMDXConfig