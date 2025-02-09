import { codeToHtml } from 'shiki';
import { compile, run } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'

interface ShikiMDXProps {
    source: string;
}
export const ShikiMDX = async({source}:ShikiMDXProps) => {

    console.log("Content", source)

    const code = String(
        await compile(source, { outputFormat: 'function-body' })
    )

    console.log("Code",code)

    return <></>
}