import { defineField, defineType } from 'sanity'

export const services = defineType({
  name: 'services',
  title: 'Services Section',
  type: 'object',

  fields: [
    defineField({
      name: 'items',
      title: 'Services',
      type: 'array',
      validation: (Rule) => Rule.min(4).max(4),

      of: [
        {
          type: 'object',
          name: 'serviceItem',
          title: 'Service',

          fields: [
            defineField({
              name: 'title',
              title: 'Service Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 4,
            }),

            defineField({
              name: 'cta',
              title: 'CTA Button',
              type: 'cta',
            }),
          ],

          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
    }),
  ],
})