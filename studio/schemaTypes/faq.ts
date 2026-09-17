import { defineField, defineType } from 'sanity'

export const faqIconOptions = [
  {
    title: 'Chevron Down',
    value: 'chevron-down',
  },
  {
    title: 'Chevron Up',
    value: 'chevron-up',
  },
]

export const faq = defineType({
  name: 'faq',
  title: 'FAQ Section',
  type: 'object',

  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'items',
      title: 'FAQ Items',
      type: 'array',
      validation: (Rule) => Rule.min(1),

      of: [
        {
          type: 'object',
          name: 'faqItem',
          title: 'FAQ Item',

          fields: [
            defineField({
              name: 'category',
              title: 'Category',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 7,
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'ctaLabel',
              title: 'Answer CTA Label',
              type: 'string',
            }),

            defineField({
              name: 'ctaUrl',
              title: 'Answer CTA URL',
              type: 'string',
            }),

            defineField({
              name: 'triggerIcon',
              title: 'Closed Icon',
              type: 'string',
              options: {
                list: faqIconOptions,
                layout: 'dropdown',
              },
              initialValue: 'chevron-down',
            }),

            defineField({
              name: 'openIcon',
              title: 'Open Icon',
              type: 'string',
              options: {
                list: faqIconOptions,
                layout: 'dropdown',
              },
              initialValue: 'chevron-up',
            }),

            defineField({
              name: 'ctaIcon',
              title: 'Answer CTA Icon',
              type: 'string',
              options: {
                list: [
                  {
                    title: 'Arrow Right',
                    value: 'arrow-right',
                  },
                ],
                layout: 'dropdown',
              },
              initialValue: 'arrow-right',
            }),
          ],

          preview: {
            select: {
              title: 'category',
              subtitle: 'question',
            },
          },
        },
      ],
    }),

    defineField({
      name: 'exploreCta',
      title: 'Explore FAQs Button',
      type: 'object',

      fields: [
        defineField({
          name: 'label',
          title: 'Button Label',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'url',
          title: 'Button URL',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'openInNewTab',
          title: 'Open in New Tab',
          type: 'boolean',
          initialValue: false,
        }),
      ],
    }),
  ],
})