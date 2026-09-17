import { defineField, defineType } from 'sanity'

export const seamlessCollaboration = defineType({
  name: 'seamlessCollaboration',
  title: 'Seamless Collaboration Section',
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
      rows: 4,
    }),

    defineField({
      name: 'items',
      title: 'Who We Work With',
      type: 'array',
      validation: (Rule) => Rule.min(1),
      of: [
        {
          type: 'object',
          name: 'collaborationItem',
          title: 'Collaboration Item',

          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 6,
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'alt',
              title: 'Image Alt Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],

          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        },
      ],
    }),
  ],
})