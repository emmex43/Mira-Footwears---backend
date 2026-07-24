import { defineField, defineType } from 'sanity'

export const productType = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Shoe Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'price',
            title: 'Price (₦)',
            type: 'number',
            validation: (rule) => rule.required().positive(),
        }),
        defineField({
            name: 'sizes',
            title: 'Available Sizes',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Size 38', value: '38' },
                    { title: 'Size 39', value: '39' },
                    { title: 'Size 40', value: '40' },
                    { title: 'Size 41', value: '41' },
                    { title: 'Size 42', value: '42' },
                    { title: 'Size 43', value: '43' },
                    { title: 'Size 44', value: '44' },
                    { title: 'Size 45', value: '45' },
                    { title: 'Size 46', value: '46' }
                ],
            },
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            validation: (rule) => rule.required(),
        }),
    ],
})