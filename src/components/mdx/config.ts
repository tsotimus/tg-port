import { getHighlighter, type HighlighterCoreOptions } from 'shiki'
import type { MDXRemoteProps } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import oneDarkPro from 'shiki/themes/one-dark-pro.mjs'
import tokyo from "shiki/themes/tokyo-night.mjs"
import owl from "shiki/themes/night-owl.mjs"
// import light from "shiki/themes/light-plus.mjs"
// import oneLight from "shiki/themes/l"
import useMDXComponents from './components/useMDXComponents'
import remarkGfm from 'remark-gfm'

interface ConfigProps{
    source: string
}

const config = ({source}:ConfigProps): MDXRemoteProps => {
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

export default config