import { defineField, defineType } from "sanity";

export const trackRecord = defineType({
    name: 'trackRecord',
    title: 'Track Record',
    type: 'object',

    fields: [
        defineField({
            name: 'eyebrow',
            title: 'Eyebrow',
            type: 'string',
            initialValue: 'The track record',
        }),

        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'stats',
            title: 'Statistics',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({
                        name: 'value',
                        title: 'Value',
                        type: 'string',
                        validation: (Rule) => Rule.required(),
                    }),

                    defineField({
                        name: 'label',
                        title: 'Label',
                        type: 'string',
                        validation: (Rule) => Rule.required(), 
                    }),
                ],
            }],
            validation: (Rule) => Rule.min(1).max(4).error('Add between 1 and 4 statistics.'),
        }),
    ],
})