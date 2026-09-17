import { defineField, defineType } from 'sanity'

export const trustedBrands = defineType({
  name: 'trustedBrands',
  title: 'Trusted by Global Brands Section',
  type: 'object',

  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'brands',
      title: 'Brand Logos',
      type: 'array',
      validation: (Rule) => Rule.min(2),
      of: [
        {
          type: 'object',
          name: 'brand',
          title: 'Brand',

          fields: [
            defineField({
              name: 'name',
              title: 'Brand Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'logo',
              title: 'Brand Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'alt',
              title: 'Logo Alt Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],

          preview: {
            select: {
              title: 'name',
              media: 'logo',
            },
          },
        },
      ],
    }),
  ],
})