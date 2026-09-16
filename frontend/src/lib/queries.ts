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

  process {
    heading,
    description,
    steps[] {
      number,
      icon,
      title,
      description
    }
  },

  seo {
    title,
    description
  }
}`