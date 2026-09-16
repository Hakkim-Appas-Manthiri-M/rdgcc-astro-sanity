import { defineField, defineType } from 'sanity'

export const ctaIconOptions = [
  {
    title: 'Arrow Right',
    value: 'arrow-right',
  },
  {
    title: 'Search',
    value: 'search',
  },
  {
    title: 'Palette',
    value: 'palette',
  },
  {
    title: 'Rocket',
    value: 'rocket',
  },
  {
    title: 'Settings',
    value: 'settings',
  },
]

export const cta = defineType({
  name: 'cta',
  title: 'CTA Button',
  type: 'object',

  fields: [
    defineField({
      name: 'label',
      title: 'Button Label',
      type: 'string',
    }),

    defineField({
      name: 'url',
      title: 'Button URL',
      type: 'string',
    }),

    defineField({
      name: 'icon',
      title: 'Button Icon',
      type: 'string',
      options: {
        list: ctaIconOptions,
        layout: 'dropdown',
      },
      initialValue: 'arrow-right',
    }),

    defineField({
      name: 'openInNewTab',
      title: 'Open in New Tab',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})