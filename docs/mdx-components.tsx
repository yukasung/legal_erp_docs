import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import type { UseMDXComponents } from 'nextra/mdx-components'
import type { HTMLAttributes } from 'react'

const { img: Image, ...docsComponents } = getDocsMDXComponents({
  figure: (props: HTMLAttributes<HTMLElement>) => <figure className="mt-[1.25em]" {...props} />,
  figcaption: (props: HTMLAttributes<HTMLElement>) => <figcaption className="mt-2 text-center text-sm" {...props} />
})

export const useMDXComponents: UseMDXComponents<typeof docsComponents> = <T,>(components?: T) => ({
  ...docsComponents,
  // @ts-expect-error -- Nextra's image component requires runtime MDX image props.
  img: (props: HTMLAttributes<HTMLImageElement>) => <Image {...props} className="nextra-border rounded-xl border drop-shadow-sm" />,
  ...components
})
