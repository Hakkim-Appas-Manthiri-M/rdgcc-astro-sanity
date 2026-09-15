import { defineField, defineType } from "sanity";

export const hero = defineType({
    name: 'hero',
    title: 'Hero Section',
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
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 4,
        }),

        defineField({
            name: 'image',
            title: 'Hero Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }),
        
        defineField({
            name: 'cta',
            title: 'Primary CTA',
            type: 'cta',
        }),
    ]
})