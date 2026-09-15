import { defineField, defineType } from 'sanity';

export const cta = defineType({
    name: 'cta',
    title: 'CTA Button',
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
            name: 'icon',
            title: 'Button Icon',
            type: 'string',
            options: {
                list: [
                    {title: 'Arrow Right', value: 'arrow-right'},
                ],
                layout: 'dropdown',
            },
            initialValue: 'arrow-right',
        }),

        defineField({
            name: 'openInNewTab',
            title: 'Open in New Tab',
            type: 'boolean',
            initialValue: false,
        }),
    ],
})