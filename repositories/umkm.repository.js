import Umkm from '../models/umkm.model.js'


// akan di refactor function pada bagian repository ini.
export const getTotalUmkm = async()=>{
    try {
        const totalUmkm = await Umkm.countDocuments();
        return totalUmkm;
    } catch (error) {
        console.log(error);
    }
};


// Function to get the total number of UMKM classified as "mikro"
export const getTotalUmkmMikro = async () => {
    try {
        const totalMikro = await Umkm.countDocuments({
            $or: [
                {
                    //kondisi awal
                    omset_tahunan_usaha: "Omset <= Rp.300 Juta",
                    kekayaan_bersih_usaha: "Rp.50 Juta < KBU <= Rp.500 Juta"
                },
                {
                    //kondisi kedua
                    omset_tahunan_usaha: "Omset <= Rp.300 Juta",
                    kekayaan_bersih_usaha: "KBU <= Rp.50 Juta"
                },
                {
                    //kondisi ketiga
                    omset_tahunan_usaha: "Rp.300 Juta < Omset <= Rp.2,5 Milliar",
                    kekayaan_bersih_usaha: "KBU <= Rp.50 Juta"
                }
            ]
        });
        return totalMikro;
    } catch (error) {
        console.log(error);
    }
};


// Function to get the total number of UMKM classified as "mikro"
export const getTotalUmkmKecil = async () => {
    try {
        const totalKecil = await Umkm.countDocuments({
            $or: [
                {
                    //kondisi awal ✅
                    omset_tahunan_usaha: "Rp.300 Juta < Omset <= Rp.2,5 Milliar",
                    kekayaan_bersih_usaha: "Rp.50 Juta < KBU <= Rp.500 Juta"
                },
                {
                    //kondisi kedua ✅
                    omset_tahunan_usaha: "Rp.300 Juta < Omset <= Rp.2,5 Milliar",
                    kekayaan_bersih_usaha: "Rp.500 Juta < KBU <= Rp.10 Milliar"
                },
                {
                    //kondisi ketiga ✅
                    omset_tahunan_usaha: "Rp.2,5 Milliar < Omset <= Rp.50 Milliar",
                    kekayaan_bersih_usaha: "Rp.50 Juta < KBU <= Rp.500 Juta"
                }
            ]
        });
        return totalKecil;
    } catch (error) {
        console.log(error);
    }
};




// Function to get the total number of UMKM classified as "menengah"
export const getTotalUmkmMenengah = async () => {
    try {
        const totalMenengah = await Umkm.countDocuments({
            omset_tahunan_usaha: "Rp.2,5 Milliar < Omset <= Rp.50 Milliar",
            kekayaan_bersih_usaha: "Rp.500 Juta < KBU <= Rp.10 Milliar"
        });
        return totalMenengah;
    } catch (error) {
        console.log(error);
    }
};




export const getAllUmkm = async () => {
    try {
        const umkmData = await Umkm.find().populate('nama_pemilik');
        return umkmData;
    } catch (error) {
        console.error('Error fetching UMKM data:', error);
        throw error; // Menyebarkan kembali error untuk penanganan di level yang lebih tinggi
    }
};

// Function to get all UMKM classified as "menengah"
export const getAllUmkmByMenengah = async () => {
    try {
        const getAllUmkm = await Umkm.find({
            omset_tahunan_usaha: "Rp.2,5 Milliar < Omset <= Rp.50 Milliar",
            kekayaan_bersih_usaha: "Rp.500 Juta < KBU <= Rp.10 Milliar"
        }).populate('nama_pemilik');
        return getAllUmkm;
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching menengah UMKM');
    }
};

// Function to get all UMKM classified as "kecil"
export const getAllUmkmByKecil = async () => {
    try {
        const getAllUmkm = await Umkm.find({
            $or: [
                {
                    omset_tahunan_usaha: "Rp.300 Juta < Omset <= Rp.2,5 Milliar",
                    kekayaan_bersih_usaha: "Rp.50 Juta < KBU <= Rp.500 Juta"
                },
                {
                    omset_tahunan_usaha: "Rp.300 Juta < Omset <= Rp.2,5 Milliar",
                    kekayaan_bersih_usaha: "Rp.500 Juta < KBU <= Rp.10 Milliar"
                },
                {
                    omset_tahunan_usaha: "Rp.2,5 Milliar < Omset <= Rp.50 Milliar",
                    kekayaan_bersih_usaha: "Rp.50 Juta < KBU <= Rp.500 Juta"
                }
            ]
        }).populate('nama_pemilik');
        return getAllUmkm;
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching kecil UMKM');
    }
};


// Function to get all UMKM classified as "mikro"
export const getAllUmkmByMikro = async () => {
    try {
        const getAllUmkm = await Umkm.find({
            $or: [
                {
                    omset_tahunan_usaha: "Omset <= Rp.300 Juta",
                    kekayaan_bersih_usaha: "Rp.50 Juta < KBU <= Rp.500 Juta"
                },
                {
                    omset_tahunan_usaha: "Omset <= Rp.300 Juta",
                    kekayaan_bersih_usaha: "KBU <= Rp.50 Juta"
                },
                {
                    omset_tahunan_usaha: "Rp.300 Juta < Omset <= Rp.2,5 Milliar",
                    kekayaan_bersih_usaha: "KBU <= Rp.50 Juta"
                }
            ]
        }).populate('nama_pemilik');
        return getAllUmkm;
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching mikro UMKM');
    }
};




// Function to get the total number of UMKM classified as "menengah"
export const getTotalUmkmKbliMenengah = async () => {
    try {
        const totalMenengah = await Umkm.countDocuments({
            omset_tahunan_usaha: "Rp.2,5 Milliar < Omset <= Rp.50 Milliar",
            kekayaan_bersih_usaha: "Rp.500 Juta < KBU <= Rp.10 Milliar"
        });
        return totalMenengah;
    } catch (error) {
        console.log(error);
    }
};



// Controller function to get KBLI count by UMKM
// export const countKbliByUmkm = async (req, res) => {
//     try {
//         const result = await Umkm.aggregate([
//             {
//                 $group: {
//                     _id: '$kbli_Id', // Group berdasarkan kbli_Id
//                     count: { $sum: 1 } // Hitung jumlah dokumen untuk setiap kbli_Id
//                 }
//             },
//             {
//                 $lookup: {
//                     from: 'kblis', // Nama koleksi KBLI (plural dari model Kbli)
//                     localField: '_id',
//                     foreignField: '_id',
//                     as: 'kbli_data'
//                 }
//             },
//             {
//                 $project: {
//                     _id: 0, // Hilangkan field _id dari hasil akhir
//                     kbli_id: '$_id',
//                     count: 1,
//                     kbli_nomor: '$kbli_data.nomor_kbli',
//                     kbli_keterangan: '$kbli_data.keterangan'
//                 }
//             }
//         ]);

//         res.json(result);
//     } catch (error) {
//         console.error('Error in countKbliByUmkm:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };


// Controller function to get KBLI count by UMKM based on specific fields
export const countKbliMenengah = async (req, res) => {
    try {
        const result = await Umkm.aggregate([
            {
                $match: {
                    omset_tahunan_usaha: "Rp.2,5 Milliar < Omset <= Rp.50 Milliar",
                    kekayaan_bersih_usaha: "Rp.500 Juta < KBU <= Rp.10 Milliar"
                }
            },
            {
                $group: {
                    _id: '$kbli_Id', // Group by kbli_Id
                    count: { $sum: 1 } // Count the number of documents for each kbli_Id
                }
            },
            {
                $lookup: {
                    from: 'kblis', // Name of the KBLI collection
                    localField: '_id',
                    foreignField: '_id',
                    as: 'kbli_data'
                }
            },
            {
                $unwind: '$kbli_data' // Unwind the kbli_data array to get object data
            },
            {
                $project: {
                    _id: 0, // Remove _id from the final output
                    kbli_id: '$_id',
                    count: 1,
                    kbli_nomor: '$kbli_data.nomor_kbli',
                    kbli_keterangan: '$kbli_data.keterangan'
                }
            }
        ]);

        res.json(result);
    } catch (error) {
        console.error('Error in countKbliByOmsetAndKekayaan:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


// Controller function to get KBLI count by UMKM based on specific fields
export const countKbliKecil = async (req, res) => {
    try {
        const result = await Umkm.aggregate([
            {
                $match: {
                    $or: [
                        {
                            omset_tahunan_usaha: "Rp.300 Juta < Omset <= Rp.2,5 Milliar",
                            kekayaan_bersih_usaha: "Rp.50 Juta < KBU <= Rp.500 Juta"
                        },
                        {
                            omset_tahunan_usaha: "Rp.300 Juta < Omset <= Rp.2,5 Milliar",
                            kekayaan_bersih_usaha: "Rp.500 Juta < KBU <= Rp.10 Milliar"
                        },
                        {
                            omset_tahunan_usaha: "Rp.2,5 Milliar < Omset <= Rp.50 Milliar",
                            kekayaan_bersih_usaha: "Rp.50 Juta < KBU <= Rp.500 Juta"
                        }
                    ]
                }
            },
            {
                $group: {
                    _id: '$kbli_Id', // Group by kbli_Id
                    count: { $sum: 1 } // Count the number of documents for each kbli_Id
                }
            },
            {
                $lookup: {
                    from: 'kblis', // Name of the KBLI collection
                    localField: '_id',
                    foreignField: '_id',
                    as: 'kbli_data'
                }
            },
            {
                $unwind: '$kbli_data' // Unwind the kbli_data array to get object data
            },
            {
                $project: {
                    _id: 0, // Remove _id from the final output
                    kbli_id: '$_id',
                    count: 1,
                    kbli_nomor: '$kbli_data.nomor_kbli',
                    kbli_keterangan: '$kbli_data.keterangan'
                }
            }
        ]);

        res.json(result);
    } catch (error) {
        console.error('Error in countKbliByOmsetAndKekayaan:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


// Controller function to get KBLI count by UMKM based on specific fields
// export const countKbliMikro = async (req, res) => {
//     try {
//         const result = await Umkm.aggregate([
//             {
//                 $match: {
//                     $or: [
//                         {
//                             omset_tahunan_usaha: "Rp.300 Juta < Omset <= Rp.2,5 Milliar",
//                             kekayaan_bersih_usaha: "Rp.50 Juta < KBU <= Rp.500 Juta"
//                         },
//                         {
//                             omset_tahunan_usaha: "Rp.300 Juta < Omset <= Rp.2,5 Milliar",
//                             kekayaan_bersih_usaha: "Rp.500 Juta < KBU <= Rp.10 Milliar"
//                         },
//                         {
//                             omset_tahunan_usaha: "Rp.2,5 Milliar < Omset <= Rp.50 Milliar",
//                             kekayaan_bersih_usaha: "Rp.50 Juta < KBU <= Rp.500 Juta"
//                         }
//                     ]
//                 }
//             },
//             {
//                 $group: {
//                     _id: '$kbli_Id', // Group by kbli_Id
//                     count: { $sum: 1 } // Count the number of documents for each kbli_Id
//                 }
//             },
//             {
//                 $lookup: {
//                     from: 'kblis', // Name of the KBLI collection
//                     localField: '_id',
//                     foreignField: '_id',
//                     as: 'kbli_data'
//                 }
//             },
//             {
//                 $unwind: '$kbli_data' // Unwind the kbli_data array to get object data
//             },
//             {
//                 $project: {
//                     _id: 0, // Remove _id from the final output
//                     kbli_id: '$_id',
//                     count: 1,
//                     kbli_nomor: '$kbli_data.nomor_kbli',
//                     kbli_keterangan: '$kbli_data.keterangan'
//                 }
//             }
//         ]);

//         res.json(result);
//     } catch (error) {
//         console.error('Error in countKbliByOmsetAndKekayaan:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };


// Controller function to get KBLI count by UMKM based on specific fields
export const countKbliMikro = async (req, res) => {
    try {
        const result = await Umkm.aggregate([
            {
                $match: {
                    $or: [
                        {
                            omset_tahunan_usaha: "Omset <= Rp.300 Juta",
                            kekayaan_bersih_usaha: "Rp.50 Juta < KBU <= Rp.500 Juta"
                        },
                        {
                            omset_tahunan_usaha: "Omset <= Rp.300 Juta",
                            kekayaan_bersih_usaha: "KBU <= Rp.50 Juta"
                        },
                        {
                            omset_tahunan_usaha: "Rp.300 Juta < Omset <= Rp.2,5 Milliar",
                            kekayaan_bersih_usaha: "KBU <= Rp.50 Juta"
                        }
                    ]
                }
            },
            {
                $group: {
                    _id: '$kbli_Id', // Group by kbli_Id
                    count: { $sum: 1 } // Count the number of documents for each kbli_Id
                }
            },
            {
                $lookup: {
                    from: 'kblis', // Name of the KBLI collection
                    localField: '_id',
                    foreignField: '_id',
                    as: 'kbli_data'
                }
            },
            {
                $unwind: '$kbli_data' // Unwind the kbli_data array to get object data
            },
            {
                $project: {
                    _id: 0, // Remove _id from the final output
                    kbli_id: '$_id',
                    count: 1,
                    kbli_nomor: '$kbli_data.nomor_kbli',
                    kbli_keterangan: '$kbli_data.keterangan'
                }
            }
        ]);

        res.json(result);
    } catch (error) {
        console.error('Error in countKbliByOmsetAndKekayaan:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
