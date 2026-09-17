import { defineField, defineType } from 'sanity'

export const clientAppreciation = defineType({
  name: 'clientAppreciation',
  title: 'Client Appreciation Section',
  type: 'object',

  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      validation: (Rule) => Rule.min(2),

      of: [
        {
          type: 'object',
          name: 'testimonial',
          title: 'Testimonial',

          fields: [
            defineField({
              name: 'company',
              title: 'Company',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'location',
              title: 'Location',
              type: 'string',
            }),

            defineField({
              name: 'quote',
              title: 'Testimonial',
              type: 'text',
              rows: 6,
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'personName',
              title: 'Person Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'personRole',
              title: 'Person Role',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'photo',
              title: 'Client Photo',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],

          preview: {
            select: {
              title: 'personName',
              subtitle: 'company',
              media: 'photo',
            },
          },
        },
      ],
    }),
  ],
})