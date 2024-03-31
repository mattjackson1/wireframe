interface Field {
  name: string;
  label: string;
}

export const fields: Field[] = [
  { name: "contact_name", label: "Name" },
  { name: "contact_telephone", label: "Telephone" },
  { name: "contact_email", label: "Email" },
  { name: "venue_postcode", label: "Postcode" },
  { name: "ecd_vacancies_immediate", label: "Immediate vacancies" },
  { name: "ecd_sp_wheelchairaccess", label: "Wheelchair access" },
  { name: "ecd_sp_cultural", label: "Cultural provisions" },
  {
    name: "ecd_sp_specialneeds",
    label: "Recent experience of supporting children with additional needs",
  },
  // Add more fields if needed...
].map((field: Field) => ({
  name: field.name,
  label: field.label,
}));
