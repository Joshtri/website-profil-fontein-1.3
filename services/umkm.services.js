// services/umkmService.js

import * as umkmRepository from '../repositories/umkm.repository.js';

export const getTotalKecil = async () => {
    try {
        const totalKecil = await umkmRepository.getTotalUmkmKecil();
        return totalKecil;
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching kecil UMKM');
    }
};


export const getTotalMikro = async () => {
    try {
        const totalMikro = await umkmRepository.getTotalUmkmMikro();
        return totalMikro;
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching Mikro UMKM');
    }
};

export const getTotalMenengah = async () => {
    try {
        const totalMenengah = await umkmRepository.getTotalUmkmMenengah();
        return totalMenengah;
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching Menengah UMKM');
    }
};



export const getAllUmkm = async()=>{
    try {
        const getAllUmkm = await umkmRepository.getAllUmkm();
        return getAllUmkm;
    } catch (error) {
        console.log(error);
    }
};

export const getAllUmkmByMenengah = async () => {
    try {
        const allMenengah = await umkmRepository.getAllUmkmByMenengah();
        if(allMenengah.length === 0) console.log('data menengah is empty');
        return allMenengah;
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching menengah UMKM');
    }
};

export const getAllUmkmByKecil = async () => {
    try {
        const allKecil = await umkmRepository.getAllUmkmByKecil();
        return allKecil;
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching kecil UMKM');
    }
};

export const getAllUmkmByMikro = async () => {
    try {
        const allMikro = await umkmRepository.getAllUmkmByMikro();
        return allMikro;
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching mikro UMKM');
    }
};