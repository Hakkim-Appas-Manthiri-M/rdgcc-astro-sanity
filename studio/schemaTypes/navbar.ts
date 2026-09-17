import { defineField, defineType } from 'sanity'

export const navbar = defineType({
  name: 'navbar',
  title: 'Navbar',
  type: 'object',

  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'logoAlt',
      title: 'Logo Alt Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'links',
      title: 'Navigation Links',
      type: 'array',
      validation: (Rule) => Rule.min(1),
      of: [
        {
          type: 'object',
          name: 'navbarLink',
          title: 'Navigation Link',

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
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'hasDropdown',
              title: 'Show Dropdown Icon',
              type: 'boolean',
              initialValue: false,
            }),

            defineField({
              name: 'dropdownItems',
              title: 'Dropdown Items',
              type: 'array',
              hidden: ({ parent }) => !parent?.hasDropdown,
              of: [
                {
                  type: 'object',
                  name: 'dropdownItem',
                  title: 'Dropdown Item',

                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                      validation: (Rule) =>
                        Rule.required(),
                    }),

                    defineField({
                      name: 'url',
                      title: 'URL',
                      type: 'string',
                      validation: (Rule) =>
                        Rule.required(),
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
          ],

          preview: {
            select: {
              title: 'label',
              subtitle: 'url',
            },
          },
        },
      ],
    }),

    defineField({
      name: 'cta',
      title: 'Get Started Button',
      type: 'cta',
      validation: (Rule) => Rule.required(),
    }),
  ],
})