import React from 'react';
import { DateInput, ImageField, Filter, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';
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
    return <span>Post { record ? `"${record.judul}"` : '' } </span>
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
