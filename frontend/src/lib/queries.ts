export const homePageQuery = `*[_type == "homePage"][0]{
  _id,
  title,

  navbar {
    logo,
    logoAlt,
    links[] {
      label,
      url,
      hasDropdown,
      dropdownItems[] {
        label,
        url
      }
    },
    cta {
      label,
      url,
      icon,
      openInNewTab
    }
  },

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

  howToWork {
    heading,
    description,
    steps[] {
      number,
      icon,
      title,
      description
    }
  },

  successStories {
    heading,
    description,

    items[] {
      category,
      company,
      title,
      description,
      image,
      icon,
      
      cta {
        label,
        url,
        icon,
        openInNewTab
      }
    },

    moreStories {
      eyebrow,
      heading,

      cta {
        label,
        url,
        icon,
        openInNewTab
      }
    }
  },

  trustedBrands {
    heading,
    brands[] {
     name,
     alt,
     logo
    }
  },

  clientAppreciation {
    heading,
    testimonials[] {
      company,
      location,
      quote,
      personName,
      personRole,
      photo
    }
  },

  seamlessCollaboration {
    heading,
    description,
    items[] {
      title,
      description,
      image,
      alt
    }
  },

  faq {
    heading,
    items[] {
      category,
      question,
      answer,
      ctaLabel,
      ctaUrl,
      triggerIcon,
      openIcon,
      ctaIcon,
    },
    exploreCta {
      label,
      url,
      openInNewTab
    }
  },

  finalCta {
    heading,
    description,
    backgroundImage,
    cta {
      label,
      url,
      icon,
      openInNewTab
    }
  },

  seo {
    title,
    description
  }
}`