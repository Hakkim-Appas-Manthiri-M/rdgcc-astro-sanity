import { defineField, defineType } from 'sanity'
import { ctaIconOptions } from './cta'

export const process = defineType({
  name: 'process',
  title: 'How We Work Section',
  type: 'object',

  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
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
      name: 'steps',
      title: 'Process Steps',
      type: 'array',
      validation: (Rule) => Rule.min(4).max(4),

      of: [
        {
          type: 'object',
          name: 'processStep',
          title: 'Process Step',

          fields: [
            defineField({
              name: 'number',
              title: 'Step Number',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'icon',
              title: 'Step Icon',
              type: 'string',
              options: {
                list: ctaIconOptions.filter(
                  (icon) => icon.value !== 'arrow-right',
                ),
                layout: 'dropdown',
              },
              initialValue: 'search',
            }),

            defineField({
              name: 'title',
              title: 'Step Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 4,
            }),
          ],

          preview: {
            select: {
              title: 'title',
              subtitle: 'number',
            },
          },
        },
      ],
    }),
  ],
})