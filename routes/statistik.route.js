import express from "express";

import * as statistikController from '../controllers/statistik.controller.js';
import { countKbliKecil, countKbliMenengah, countKbliMikro, getTotalUmkmKbliMenengah } from "../repositories/umkm.repository.js";
// import {  } from'../repositories/umkm.repository.js'; // Adjust the import as needed

const router = express.Router();



router.get('/main_stats', statistikController.mainStatistikPage);


// Route to get the total number of UMKM "mikro"
router.get('/umkm-mikro', statistikController.getTotalUmkmMikro);

// Route to get the total number of UMKM "kecil"
router.get('/umkm-kecil', statistikController.getTotalUmkmKecil);

// Route to get the total number of UMKM "menengah"
router.get('/umkm-menengah', statistikController.getTotalUmkmMenengah);


router.get('/menengah_stats', statistikController.menengahStatistikPage);
router.get('/kecil_stats', statistikController.kecilStatistikPage);
router.get('/mikro_stats', statistikController.mikroStatistikPage);


router.get('/count_kbli', statistikController.countKbliByUmkm);


router.get('/count_umkm_menengah', async (req, res) => {
    try {
        const totalMenengah = await getTotalUmkmKbliMenengah();
        res.json({ totalMenengah });
    } catch (error) {
        console.error('Error in /umkm-menengah route:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route untuk menghitung KBLI berdasarkan UMKM
router.get('/count_kbli_by_umkm', countKbliMenengah);
router.get('/count_kbli_by_umkm_kecil', countKbliKecil);
router.get('/count_kbli_by_umkm_mikro', countKbliMikro);

export default router;