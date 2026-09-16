import { defineField, defineType } from 'sanity'

export const successStories = defineType({
  name: 'successStories',
  title: 'Success Stories Section',
  type: 'object',

  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'items',
      title: 'Success Stories',
      type: 'array',
      validation: (Rule) => Rule.min(1),
      of: [
        {
          type: 'object',
          name: 'successStory',
          title: 'Success Story',

          fields: [
            defineField({
              name: 'category',
              title: 'Category',
              type: 'string',
              description: 'Example: Fintech | Singapore',
            }),

            defineField({
              name: 'company',
              title: 'Company Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'title',
              title: 'Story Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 5,
            }),

            defineField({
              name: 'image',
              title: 'Project Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),

            defineField({
              name: 'icon',
              title: 'Story Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Code', value: 'code' },
                  { title: 'Inbox', value: 'inbox' },
                  { title: 'Chart Line', value: 'chart-line' },
                  { title: 'Users', value: 'users' },
                  { title: 'Shopping Cart', value: 'shopping-cart' },
                ],
                layout: 'dropdown',
              },
            }),

            defineField({
              name: 'cta',
              title: 'Case Study CTA',
              type: 'cta',
            }),
          ],

          preview: {
            select: {
              title: 'company',
              subtitle: 'title',
              media: 'image',
            },
          },
        },
      ],
    }),

    defineField({
      name: 'moreStories',
      title: 'More Success Stories Card',
      type: 'object',

      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'string',
        }),

        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'cta',
          title: 'CTA',
          type: 'cta',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
})