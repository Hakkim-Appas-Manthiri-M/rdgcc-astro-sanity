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
            validation: (Rule) => Rule.max(160).warning('Keep the SEO description under 160 characters.'),
        })
    ],
})