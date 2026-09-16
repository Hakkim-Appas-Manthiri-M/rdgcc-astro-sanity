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

  trackRecord {
    eyebrow,
    heading,
    stats[] {
      value,
      label
    }
  },

  services {
    items[] {
      title,
      description,
      cta {
        label,
        url,
        icon,
        openInNewTab
      }
    }
  },

  seo {
    title,
    description
  }
}`