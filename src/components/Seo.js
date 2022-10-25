import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Helmet from "react-helmet"

export const Seo = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    keywords,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    keywords: keywords,
  }

  return (
    <>
      <Helmet htmlAttributes={{ lang: "es" }} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content="Roberto Traspalacio" />
      <meta name="Publisher" content="Roberto Traspalacio" />
      <link rel="canonical" href={seo.url} />
      {children}
    </>
  )
}
