import { Field, FieldGroup } from '@/app/lib/definitions';

export const fieldgroup: FieldGroup[] = [
    {
        title: 'Contact details',
        fields: [
            { name: 'contact_name', label: 'Name' },
            { name: 'contact_position', label: 'Position' },
            { name: 'contact_telephone', label: 'Telephone' },
            { name: 'contact_email', label: 'Email', link_type: 'mailto' },
            { name: 'website', label: 'Website', link_type: 'web' },
        ],
    },
    {
        title: 'Venue details',
        fields: [{ name: 'public_address_postcode', label: 'Postcode' }],
    },
    {
        title: 'Other details',
        fields: [
            { name: 'ecd_vacancies_immediate', label: 'Immediate vacancies' },
            { name: 'ecd_sp_wheelchairaccess', label: 'Wheelchair access' },
            { name: 'ecd_sp_cultural', label: 'Cultural provisions' },
            { name: 'services', label: 'Age Groups' },
            { name: 'ecd_sp_specialneeds', label: 'Recent experience of supporting children with additional needs' },
        ],
    },
    // Add more fieldgroups as needed...
].map((fieldgroup: FieldGroup) => ({
    title: fieldgroup.title,
    fields: fieldgroup.fields.map((field: Field) => ({
        name: field.name,
        label: field.label,
        link_type: field.link_type,
    })),
}));
