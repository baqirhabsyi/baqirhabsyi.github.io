import React from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';
import { RestClient } from 'aor-firebase-client';
import { PostList, JadwalEdit, JadwalCreate } from './posts';
import { MahasiswaList, MahasiswaEdit } from './mahasiswa';
import { BeritaList, CreateBerita } from './berita';

const firebaseConfig = {
  apiKey: "AIzaSyD9HeUKR5WJlvy5k6_u9-A9T0cRkRz22ec",
  authDomain: "sisinfo-jadwal-kompen.firebaseapp.com",
  databaseURL: "https://sisinfo-jadwal-kompen.firebaseio.com",
  projectId: "sisinfo-jadwal-kompen",
  storageBucket: "sisinfo-jadwal-kompen.appspot.com",
  messagingSenderId: "868404744748"
};

const trackedResources = ['kelas-testing2', 'kompen', 'hari', 'posts'];

const App = () => (
    <Admin title="Admin Siskominfo Jadwal dan Kompen" restClient={RestClient(trackedResources, firebaseConfig)}>
        <Resource remove={Delete} options={{ label: 'Jadwal Kelas' }} name="kelas-testing2" list={PostList} edit={JadwalEdit} create={JadwalCreate} />
        <Resource options={{ label: 'Daftar Kompen'}} name="kompen" list={MahasiswaList} edit={MahasiswaEdit} />
        <Resource options={{ labelL: 'Daftar Berita' }} name="posts" list={BeritaList} create={CreateBerita} />
    </Admin>
);

export default App;