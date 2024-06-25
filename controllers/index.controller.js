


//beranda
export const mainPage = async(req,res)=>{

    const title = "Beranda";

    try {
        res.render('index',{
            title
        });
    } catch (error) {
        console.log(error);
    }

};


export const petaPage = async(req,res)=>{
    const title = "Peta";
    try {
        res.render('peta',{
            title
        });
    } catch (error) {
        console.log(error);
    }
}


export const fasilitasPage = async(req,res)=>{
    const title = "Fasilitas";
    try {
        res.render('fasilitas',{
            title
        });
    } catch (error) {
        console.log(error);
    }
};


//
export const profilPage = async(req,res)=>{
    const title = "Profil Kelurahan";
    try {
        res.render('profil_kelurahan',{
            title
        });
    } catch (error) {
        console.log(error);
    }
};


export const profilUmkmPage = async(req,res)=>{
    const title = "Profil UMKM";
    try {
        res.render('profil_umkm',{
            title
        });
    } catch (error) {
        console.log(error);
    }
}

export const strukturPemPage = async(req,res)=>{
    const title = "Struktur Pemerintahan";
    try {
        res.render('struktur_pemerintahan',{
            title
        });
    } catch (error) {
        console.log(error);
    }
}

export const visiMisiPage = async(req,res)=>{
    const title = "Visi Misi";
    try {
        res.render('visi_misi',{
            title
        });
    } catch (error) {
        console.log(error);
    }
}