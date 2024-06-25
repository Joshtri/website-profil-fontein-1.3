import * as umkmServices from '../services/umkm.services.js';
import * as umkmRepository from '../repositories/umkm.repository.js';



//DATA UMKM SELURUHNYA.
export const mainStatistikPage = async(req,res)=>{
    const title = "Statistik UMKM";


    
    
    const umkmData = await umkmServices.getAllUmkm();
    try {
        res.render('main_statistik',{
            title,
            umkmData
        });
    } catch (error) {
        console.log(error);
    }
};


export const menengahStatistikPage = async(req,res)=>{
    const title = "Statistik UMKM | Menengah";

    const umkmDataMenengah = await umkmServices.getAllUmkmByMenengah();

    try {
        res.render('statistik_menengah',{
            title,
            umkmDataMenengah
        });
    } catch (error) {
        console.log(error);
    }
};


export const kecilStatistikPage = async(req,res)=>{
    const title = "Statistik UMKM | Kecil";

    const umkmDataKecil = await umkmServices.getAllUmkmByKecil();

    try {
        res.render('statistik_kecil',{
            title,
            umkmDataKecil
        });
    } catch (error) {
        console.log(error);
    }
};


export const mikroStatistikPage = async(req,res)=>{
    const title = "Statistik UMKM | Kecil";

    const umkmDataMikro = await umkmServices.getAllUmkmByMikro();

    try {
        res.render('statistik_mikro',{
            title,
            umkmDataMikro
        });
    } catch (error) {
        console.log(error);
    }
};


// Existing functions...

// export const getAllUmkmByKecil = async (req, res) => {
//     try {
//         const allKecil = await umkmServices.getAllUmkmByKecil();
//         res.json({ allKecil });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };


export const getTotalUmkmMikro = async (req, res) => {
    try {
        const totalMikro = await umkmServices.getTotalMikro();
        res.json({ totalMikro });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTotalUmkmKecil = async (req, res) => {
    try {
        const totalKecil = await umkmServices.getTotalKecil();
        res.json({ totalKecil });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTotalUmkmMenengah = async (req, res) => {
    try {
        const totalMenengah = await umkmServices.getTotalMenengah();
        res.json({ totalMenengah });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// Controller to count KBLI by UMKM
export const countKbliByUmkm = async (req, res) => {
    try {
        const kbliCounts = await umkmRepository.countKbliByUmkm();
        res.send(kbliCounts);
    } catch (error) {
        console.error('Error in countKbliByUmkm controller:', error);
        res.status(500).send('Error counting KBLI by UMKM');
    }
};