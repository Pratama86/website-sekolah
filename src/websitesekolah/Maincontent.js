import Hero from "./Hero";
import Cardjurusan from "./Cardjurusan";
import Cardkegiatan from "./Cardkegiatan";
import jurusan1 from "../asset/aset7.jpg";
import jurusan2 from "../asset/aset8..jpg";
import jurusan3 from "../asset/aset1.jpg";
import kegiatan1 from "./../asset/aset4.jpg"
import kegiatan2 from "./../asset/aset5.jpg"
import kegiatan3 from "./../asset/aset6.jpg"
import kegiatan4 from "./../asset/aset9.jpg"

const Maincontent = ()=>{
    return (
        <div>
            <Hero />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Jurusan sekolah</h1>
                    </div>
                        <div className="row justify-content-space-beetwen"> 
                            <div className="col-lg-4 col-12">
                                <Cardjurusan image={jurusan1} jurusan="eskul bahasa inggris"/>
                            </div>
                            <div className="col-lg-4 col-12">
                                <Cardjurusan image={jurusan2} jurusan="eskul basket"/>
                            </div>
                            <div className="col-lg-4 col-12">
                                <Cardjurusan image={jurusan3} jurusan="kerja kelompok"/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 text-center my-5">
                                <h1>kegiatan</h1>
                            </div>
                            <div className="col-12 my-5">
                                <Cardkegiatan image={kegiatan1} description="lorem30"/>
                            </div>
                            <div className="col-12 my-5">
                                <Cardkegiatan image={kegiatan2} description="lorem30"/>
                            </div>
                            <div className="col-12 my-5">
                                <Cardkegiatan image={kegiatan3} description="lorem30"/>
                            </div>
                            <div className="col-12 my-5">
                                <Cardkegiatan image={kegiatan4} description="lorem30"/>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Maincontent;