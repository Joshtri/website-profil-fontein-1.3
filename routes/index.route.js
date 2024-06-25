import express from "express";

import * as mainController from '../controllers/index.controller.js';

const router = express.Router();



router.get('/', mainController.mainPage);
router.get('/fasilitas', mainController.fasilitasPage);
router.get('/peta', mainController.petaPage);
router.get('/profil', mainController.profilPage);
router.get('/profil_umkm', mainController.profilUmkmPage);
router.get('/struktur_pemerintahan', mainController.strukturPemPage);
router.get('/visi_misi', mainController.visiMisiPage);




// router.get('/main_stats');




export default router;