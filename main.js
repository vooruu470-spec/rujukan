
document.addEventListener("DOMContentLoaded", function() {
  

  document.getElementById("laporanForm").addEventListener("submit", function(event) {

    event.preventDefault();
    

    const nomorWA = "628988669000"; 
    
    const judul = document.getElementById("judul").value;
    
    const hariTanggal = document.getElementById("hariTanggal").value;
    const pukul = document.getElementById("pukul").value;
    const selesai = document.getElementById("selesai").value;
    const tujuan = document.getElementById("tujuan").value;
    
    const nama = document.getElementById("nama").value;
    const umur = document.getElementById("umur").value;
    const alamat = document.getElementById("alamat").value;
    const jenisKelamin = document.getElementById("jenisKelamin").value;
    
    const status = document.getElementById("status").value;
    const kondisiPasien = document.getElementById("kondisiPasien").value;
    const keluhanPasien = document.getElementById("keluhanPasien").value;
    const riwayatPenyakit = document.getElementById("riwayatPenyakit").value;
    
    const tindakan = document.getElementById("tindakan").value;
    const alatDigunakan = document.getElementById("alatDigunakan").value;
    
    const driver = document.getElementById("driver").value;
    const crew = document.getElementById("crew").value;
    const posko = document.getElementById("posko").value;
    

    const templatePesan = `${judul}

- *Hari/Tanggal* : ${hariTanggal}
- *Pukul* : ${pukul}
- *Selesai* : ${selesai}
- *Tujuan* : ${tujuan}

- *Dengan Rincian Sebagai Berikut* :

- *Nama* : ${nama}
- *Usia* : ${umur}
- *Alamat* : ${alamat}
- *Jenis Kelamin* : ${jenisKelamin}

- *Status* : ${status}
- *Kondisi Pasien* : ${kondisiPasien}
- *Keluhan Pasien* : ${keluhanPasien}
- *Riwayat Penyakit* : ${riwayatPenyakit}

- *Tindakan* :
${tindakan}

- *Alat Yang Digunakan* :
${alatDigunakan}

*Demikian Yang Dilaporkan*
- *Driver* : ${driver}
- *Crew* : ${crew}
- *Posko* : ${posko}

Call Center :
PMI Kota Jakarta Utara
Telp. 089-8866-9000
#Terus Kobarkan Kebaikan`;
    

    const pesanWA = encodeURIComponent(templatePesan);
    

    const urlWA = `https://wa.me/${nomorWA}?text=${pesanWA}`;
    

    window.open(urlWA, "_blank");
  });
  
});
