export const homePageQuery = `*[_type == "homePage"][0]{
  _id,
  title,
  hero {
    eyebrow,
    heading,
    description,
    image,
    cta {
      label,
      url,
      openInNewTab
    }
  },
  seo {
    title,
    description
  }
}`