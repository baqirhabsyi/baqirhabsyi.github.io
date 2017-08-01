import React from 'react';
import { Filter, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';
import randomID from 'random-id';

const PekerjaanFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="Nama Pekerjaan" source="namaPekerjaan" reference="pekerjaan" allowEmpty >
      <SelectInput optionText="namaPekerjaan" />
    </ReferenceInput>
  </Filter>
)

const PekerjaanTitle = ({ record }) => {
  return <span>Pekerjaan {record ? `"${record.namaPekerjaan}"` : '' }</span>
};

export const PekerjaanList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="namaPekerjaan" label="Nama Pekerjaan" />
      <TextField source="nilai" label="Jumlah Jam" />
      <EditButton />
    </Datagrid>
  </List>
);

export const PekerjaanEdit = (props) => (
  <Edit title={<PekerjaanList />} {...props}>
    <SimpleForm>
      <TextInput source="namaPekerjaan" label="Nama Pekerjaan" />
      <TextInput source="nilai" label="Jumlah Jam" />
    </SimpleForm>
  </Edit>
);

export const PekerjaanCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput style={{display: 'none'}} source="id" defaultValue={() => randomID()} />
      <TextInput source="namaPekerjaan" label="Nama Pekerjaan" />
      <TextInput source="nilai" label="Jumlah Jam" />
    </SimpleForm>
  </Create>
);
