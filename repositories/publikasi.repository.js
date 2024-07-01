import Publikasi from "../models/publikasi.model.js";




export const getAllPublikasi = async()=>{
    try {
        const publikasiData = await Publikasi.find();
        return publikasiData;
    } catch (error) {
        throw error;
    }
}