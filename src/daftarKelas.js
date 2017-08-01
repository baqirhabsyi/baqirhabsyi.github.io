import React from 'react';
import { DateField, SimpleShowLayout, Show, DateInput, ImageField, Filter, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';
import randomID from 'random-id';

export const BeritaList = (props) => (
    <List {...props} title="Daftar Berita">
        <Datagrid bodyOptions={{ showRowHover: true }}>
            <TextField source="judul" title="Judul" />
            <TextField source="teaser" title="Teaser" />
            <TextField source="published_at" title="Tanggal Publikasi" />
            <EditButton />
        </Datagrid>
    </List>
);

export const KelasList = (props) => (
  <List {...props} title="Daftar Kelas">
    <Datagrid bodyOptions={{ showRowHover: true }} >
      <TextField source="namaKelas" label="Kelas" />
      <EditButton />
    </Datagrid>
  </List>
)

export const KelasCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput style={{ display: 'none' }} source="id" defaultValue={() => randomID()} />
      <TextInput source="namaKelas" label="Kelas" />
    </SimpleForm>
  </Create>
)

export const CreateBerita = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput style={{ display: 'none' }} source="id" defaultValue={() => randomID()} />
            <DateInput source="published_at" title="Tanggal Publikasi" options={{
                mode: 'landscape',
                minDate: new Date(),
                hintText: 'Pilih tanggal publikasi',
                okLabel: 'OK',
                cancelLabel: 'Cancel'
            }} />
            <TextInput source="judul" title="judul" />
            <TextInput source="teaser" title="Teaser" />
            <TextInput source="isi" title="Isi" />
        </SimpleForm>
    </Create>
)

const NamaBerita = ({ record }) => {
    return <span>Berita { record ? `"${record.judul}"` : '' } </span>
;}

export const EditBerita = (props) => (
    <Edit title={<NamaBerita />} {...props}>
        <SimpleForm>
            <DateInput source="published_at" title="Tanggal Publikasi" options={{
                mode: 'landscape',
                minDate: new Date(),
                hintText: 'Pilih tanggal publikasi',
                okLabel: 'OK',
                cancelLabel: 'Cancel'
            }} />
            <TextInput source="judul" title="judul" />
            <TextInput source="teaser" title="Teaser" />
            <TextInput source="isi" title="Isi" />
        </SimpleForm>
    </Edit>
);

export const ShowBerita = (props) => (
    <Show title={<NamaBerita />} {...props}>
        <SimpleShowLayout>
            <TextField source="judul" label="judul" />
            <TextField source="teaser" label="Teaser" />
            <TextField source="isi" label="Isi" />
            <DateField source="created_at" label="Tanggal Publikasi" />
        </SimpleShowLayout>
    </Show>
);
