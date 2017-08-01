import React from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';
import { RestClient } from 'aor-firebase-client';
import { PostList, JadwalEdit, JadwalCreate } from './posts';
import { MahasiswaList, MahasiswaEdit } from './mahasiswa';
import { BeritaList, CreateBerita, EditBerita, ShowBerita } from './berita';
import { PekerjaanList, PekerjaanCreate, PekerjaanEdit } from './kompen';

import UserIcon from 'material-ui/svg-icons/social/people';
import NewsIcon from 'material-ui/svg-icons/av/library-books';
import WorkIcon from 'material-ui/svg-icons/action/work';

const firebaseConfig = {
  apiKey: "AIzaSyD9HeUKR5WJlvy5k6_u9-A9T0cRkRz22ec",
  authDomain: "sisinfo-jadwal-kompen.firebaseapp.com",
  databaseURL: "https://sisinfo-jadwal-kompen.firebaseio.com",
  projectId: "sisinfo-jadwal-kompen",
  storageBucket: "sisinfo-jadwal-kompen.appspot.com",
  messagingSenderId: "868404744748"
};

const trackedResources = ['kelas-testing2', 'kompen', 'hari', 'posts', 'pekerjaan'];

const App = () => (
    <Admin title="Admin Siskominfo Jadwal dan Kompen" restClient={RestClient(trackedResources, firebaseConfig)}>
        <Resource remove={Delete} options={{ label: 'Jadwal Kelas' }} name="kelas-testing2" list={PostList} edit={JadwalEdit} create={JadwalCreate} />
        <Resource icon={UserIcon} options={{ label: 'Mahasiswa'}} name="kompen" list={MahasiswaList} edit={MahasiswaEdit} />
        <Resource icon={NewsIcon} show={ShowBerita} options={{ label: 'Berita' }} name="posts" list={BeritaList} create={CreateBerita} edit={EditBerita} remove={Delete} />
        <Resource icon={WorkIcon} options={{ label: 'Pekerjaan Kompen' }} name="pekerjaan" list={PekerjaanList} create={PekerjaanCreate} edit={PekerjaanEdit} remove={Delete} />
    </Admin>
);

export default App;
