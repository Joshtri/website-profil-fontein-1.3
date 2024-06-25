import Penduduk from "../models/penduduk.model.js";



export const getTotalPenduduk = async()=>{
    try {
        const totalPenduduk = await Penduduk.countDocuments();
        return totalPenduduk;
    } catch (error) {
        console.log(error);
    }
};

// Function to get the total number of penduduk who are laki-laki
export const getTotalPendudukLakiLaki = async () => {
    try {
        const totalLakiLaki = await Penduduk.countDocuments({ jenis_kelamin: 'laki-laki' });
        return totalLakiLaki;
    } catch (error) {
        console.log(error);
    }
};

// Function to get the total number of penduduk who are laki-laki
export const getTotalPendudukPerempuan = async () => {
    try {
        const totalPerempuan = await Penduduk.countDocuments({ jenis_kelamin: 'perempuan' });
        return totalPerempuan;
    } catch (error) {
        console.log(error);
    }
};