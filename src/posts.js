import React from 'react';
import { Filter, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';
import randomID from 'random-id';

const KelasFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <SelectInput source="Hari" choices={[
        { id: 'Senin', name: 'Senin' },
        { id: 'Selasa', name: 'Selasa' },
        { id: 'Rabu', name: 'Rabu' },
        { id: 'Kamis', name: 'Kamis' },
        { id: 'Jumat', name: 'Jumat' },
        { id: 'Sabtu', name: 'Sabtu' },
        { id: 'Minggu', name: 'Minggu' }
    ]} />
  </Filter>
)

export const PostList = (props) => (
    <List {...props} title="Daftar Jadwal Kelas" filters={<KelasFilter />} >
        <Datagrid bodyOptions={{ showRowHover: true }} >
            <TextField source="Dosen" sortable={false} />
            <TextField source="Hari" sortable={false} />
            <TextField source="JamMulai" label="Jam Mulai" sortable={false} />
            <TextField source="JamSelesai" label="Jam Selesai" sortable={false} />
            <TextField source="Kelas" sortable={false} />
            <TextField source="MataKuliah" sortable={false} />
            <TextField source="Ruang" sortable={false} />
            <EditButton />
        </Datagrid>
    </List>
);

const NamaMatkul = ({ record }) => {
  return <span>Mata Kuliah {record ? `"${record.MataKuliah}"` : ''}</span> 
};

export const JadwalEdit = (props) => (
  <Edit title={<NamaMatkul />} {...props}>
    <SimpleForm>
      <TextInput source="Dosen" />
      <TextInput source="Hari" />
      <TextInput source="JamMulai" />
      <TextInput source="JamSelesai" />
      <TextInput source="Kelas" />
      <LongTextInput source="MataKuliah" />
      <TextInput source="Ruang" />
    </SimpleForm>
  </Edit>
);

export const JadwalCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput style={{display: 'none'}} source="id" defaultValue={() => randomID()} />
      <TextInput source="Dosen" />
      <TextInput source="Hari" />
      <TextInput source="JamMulai" />
      <TextInput source="JamSelesai" />
      <TextInput source="Kelas" />
      <LongTextInput source="MataKuliah" />
      <TextInput source="Ruang" />
    </SimpleForm>
  </Create>
);
