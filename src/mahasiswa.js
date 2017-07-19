import React from 'react';
import { Filter, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';

const MahasiswaFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="NIM" source="nim" reference="kompen" allowEmpty >
      <SelectInput optionText="nim" />
    </ReferenceInput>
  </Filter>
)

export const MahasiswaList = (props) => (
  <List title="Daftar Mahasiswa" {...props} filters={<MahasiswaFilter />}>
    <Datagrid bodyOptions={{ showRowHover: true }}>
      <TextField source="nim" />
      <TextField source="nama" />
      <TextField source="totalKompen" />
      <EditButton />
    </Datagrid>
  </List>
)

const MahasiswaTitle = ({ record }) => {
  return <span>Post {record ? `"${record.nama}"` : ''}</span>
};

export const MahasiswaEdit = (props) => (
  <Edit title={<MahasiswaTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="nim" />
      <DisabledInput source="nama" />
      <TextInput source="totalKompen" />
    </SimpleForm>
  </Edit>
);