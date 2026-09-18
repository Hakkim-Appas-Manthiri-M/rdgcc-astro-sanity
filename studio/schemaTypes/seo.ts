import { defineField, defineType } from "sanity";

export const seo = defineType({
    name: 'seo',
    title: 'SEO',
    type: 'object',

    fields: [
        defineField({
            name: 'title',
            title: 'SEO Title',
            type: 'string',
            validation: (Rule) => Rule.max(60).warning('Keep the SEO title under 60 characters.')
        }),

        defineField({
            name: 'description',
            title: 'SEO Description',
            type: 'text',
            rows: 3,
        }),

        defineField({
            name: 'logo',
            title: 'SEO Logo / Favicon',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'Logo used for the browser favicon and SEO/social metadata.',
        }),
    ],
})