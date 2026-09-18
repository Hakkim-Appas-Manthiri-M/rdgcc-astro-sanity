import { defineField, defineType } from 'sanity'

export const footer = defineType({
  name: 'footer',
  title: 'Footer Section',
  type: 'object',

  fields: [
    defineField({
     name: 'logo',
     title: 'Footer Logo',
     type: 'image',
     options: {
        hotspot: true,
     },
     validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Company Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'partnerBadge',
      title: 'Partner Badge',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'footerService',
          title: 'Service',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'label',
            },
          },
        },
      ],
    }),

    defineField({
      name: 'companyLinks',
      title: 'Company Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'companyLink',
          title: 'Company Link',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'label',
            },
          },
        },
      ],
    }),

    defineField({
      name: 'successStories',
      title: 'Success Stories',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'footerSuccessStory',
          title: 'Success Story',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'label',
            },
          },
        },
      ],
    }),

    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
        }),

        defineField({
          name: 'phone',
          title: 'Phone',
          type: 'string',
        }),

        defineField({
          name: 'address',
          title: 'Address',
          type: 'text',
          rows: 5,
        }),
      ],
    }),

    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialLink',
          title: 'Social Link',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'WhatsApp', value: 'whatsapp' },
                ],
                layout: 'dropdown',
              },
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'platform',
            },
          },
        },
      ],
    }),

    defineField({
      name: 'privacyUrl',
      title: 'Privacy Policy URL',
      type: 'string',
    }),

    defineField({
      name: 'termsUrl',
      title: 'Terms & Conditions URL',
      type: 'string',
    }),

    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})  