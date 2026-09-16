import { defineField, defineType } from 'sanity';

export const homePage = defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Internal Page Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'hero',
            title: 'Hero Section',
            type: 'hero',
        }),

        defineField({
            name: 'trackRecord',
            title: 'Track Record',
            type: 'trackRecord',
        }),

        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo',
        })
    ],
});