import Kegiatan from '../models/kegiatan.model.js';


export const getAllKegiatan = async()=>{
    try {
        const kegiatanData = await Kegiatan.find();
        return kegiatanData;
    } catch (error) {
        throw error;
    }
};

