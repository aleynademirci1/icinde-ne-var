window.addEventListener('DOMContentLoaded', () => {
    
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    
    // 1. GİRİŞ EKRANI MOTORU
    setTimeout(() => {
        if (splashScreen) splashScreen.style.opacity = '0'; 
        
        setTimeout(() => {
            if (splashScreen) splashScreen.style.display = 'none'; 
            if (mainContent) {
                mainContent.classList.remove('gizli');
                setTimeout(() => {
                    mainContent.style.opacity = '1';
                }, 50);
            }
            baslatAltSerit();
        }, 500); 
    }, 3000);

    // 2. ALT ŞERİT SONSUZ DÖNGÜ MOTORU
    let animationFrameId = null;
    let position = 0;
    let isPaused = false;
    const speed = 0.8;

    function baslatAltSerit() {
        const track = document.querySelector('.serit-rayi');
        const viewport = document.querySelector('.tum-urunler-seridi');
        
        if (!track || !viewport) return;
        
        function animate() {
            if (!isPaused) {
                position -= speed;
                if (Math.abs(position) >= (track.scrollWidth / 2)) {
                    position = 0;
                }
                track.style.transform = `translateX(${position}px)`;
            }
            animationFrameId = requestAnimationFrame(animate);
        }

        viewport.addEventListener('mouseenter', () => { isPaused = true; });
        viewport.addEventListener('mouseleave', () => { isPaused = false; });

        if (!animationFrameId) {
            animate();
        }
    }

 // =========================================================================
    // 3. MERKEZİ VERI TABANI (14 ÜRÜNLÜK TAM SIRALI LİSTE)
    // =========================================================================
    const tumUrunListesi = [
{
    isim: "Eti Crax", 
    dosyaAdi: "Eti Crax.png", 
    kategori: "atistirmalik",
    saglikPuani: "3.0",
    makroBesinler: ["Karbonhidrat: %72", "Yağ: %20", "Protein: %8"],
    temelIcerikler: ["Buğday Unu", "Şeker", "Tuz", "Ayçiçek Yağı", "Peynir Altı Suyu Tozu"],
    zararliMaddeler: ["Palm Yağı"],
    alternatifUrun: { isim: "Züber Nohut Cips", dosyaAdi: "Zuber Nohut Cips.png", mesaj: '"Kızartılmamış, nohut bazlı ve yüksek lifli acı krizine masum bir çözüm!"' },
    malzemeler3D: [
        // ================= SOL TARAFTAKİ MODELLER =================
        { 
            // 1. SOL ÜST: BÜYÜK BUĞDAY BAŞAĞI - Sola eğik ve paketten tamamen dışarıda
            dosya: "bugday basagi.png", 
            alt: "sol_bugday_buyuk", 
            stil: "position: absolute; z-index: 1; width: 260px; max-witdth: 260px; top: -5%; left: -8%; transform: rotate(-30deg);" 
        },
        { 
            // 2. SOL ORTA: KÜÇÜK YAĞ DAMLASI - Sola yatık ve sol kenara yakın
            dosya: "yag damlasi.png", 
            alt: "sol_yag_kucuk", 
            stil: "position: absolute; z-index: 1; width: 60px; max-width: 60px; top: 40%; left: 15%; transform: rotate(-20deg);" 
        },
        { 
            // 3. SOL ALT: KÜÇÜK BİBER - Ters dönmüş (Kuyruğu yukarıda, ucu aşağıda)
            dosya: "biberpng.png", 
            alt: "sol_biber_kucuk", 
            stil: "position: absolute; z-index: 1; width: 140px; max-width: 140px; bottom: 10%; left: 5%; transform: rotate(150deg);" 
        },

        // ================= SAĞ TARAFTAKİ MODELLER =================
        { 
            // 4. SAĞ ÜST: BÜYÜK YAĞ DAMLASI - Sağa yatık ve sağ yukarıda dışarıda
            dosya: "yag damlasi.png", 
            alt: "sag_yag_buyuk", 
            stil: "position: absolute; z-index: 1; width: 150px; max-width: 150px; top: -2%; right: 2%; transform: rotate(25deg);" 
        },
        { 
            // 5. SAĞ ORTA: BÜYÜK BİBER - Sola yatık ve paketin sağından fırlayan büyük model
            dosya: "biberpng.png", 
            alt: "sag_biber_buyuk", 
            stil: "position: absolute; z-index: 1; width: 240px; max-width: 240px; top: 30%; right: -10%; transform: rotate(-30deg);" 
        },
        { 
            // 6. SAĞ ALT: KÜÇÜK BUĞDAY BAŞAĞI - Sağa yatık ve sağ alt köşede dışarıda
            dosya: "bugday basagi.png", 
            alt: "sag_bugday_kucuk", 
            stil: "position: absolute; z-index: 1; width: 100px; max-width: 100px; bottom: 5%; right: 25%; transform: rotate(30deg);" 
        }
    ]
},
    
   { 
    isim: "Züber Lokma", 
    dosyaAdi: "Zuber Lokma.png", 
    kategori: "atistirmalik",
    saglikPuani: "8.5",
    makroBesinler: ["Karbonhidrat: %50", "Yağ: %35", "Protein: %15"],
    temelIcerikler: ["Hurma (%76)", "Badem (%15)", "Hindistan Cevizi (%5)", "Nohut Unu", "Limon (%1)"],
    zararliMaddeler: [], 
    alternatifUrun: { isim: "Züber Lokma", dosyaAdi: "Zuber Lokma.png", mesaj: '"Zaten en temiz alternatiflerden biri!"' },
    malzemeler3D: [
        // ================= SOL TARAFTAKİ MODELLER =================
        { 
            // 1. SOL ÜST: BÜYÜK HURMA - Sola eğik ve paketten dışarıda
            dosya: "hurma.png", 
            alt: "sol_hurma_buyuk", 
            stil: "position: absolute; z-index: 1; width: 260px; top: -1%; left: -20%; transform: rotate(-30deg);" 
        },
     
        { 
            // 3. SOL ALT: KÜÇÜK LİMON - Ters dönmüş (Baş aşağı duracak şekilde 140 derece)
            dosya: "nohut.png", 
            alt: "sol_nohut_kucuk", 
            stil: "position: absolute; z-index: 1; width: 140px; bottom: 20%; left: 3%; transform: rotate(140deg);" 
        },

        // ================= SAĞ TARAFTAKİ MODELLER =================
        { 
            // 4. SAĞ ÜST: BÜYÜK BADEM - Sağa yatık ve sağ yukarıda
            dosya: "badem.png", 
            alt: "sag_badem_buyuk", 
            stil: "position: absolute; z-index: 1; width: 190px; top: -5%; right: -5%; transform: rotate(35deg);" 
        },
        { 
            // 5. SAĞ ORTA: BÜYÜK LİMON - Sola yatık, paketin sağından fırlayan büyük model
            dosya: "limon.png", 
            alt: "sag_limon_buyuk", 
            stil: "position: absolute; z-index: 1; width: 290px; top: 28%; right: -22%; transform: rotate(-25deg);" 
        },
        { 
            // 6. SAĞ ALT: KÜÇÜK HURMA - Sağa yatık ve sağ alt köşede dışarıda
            dosya: "hurma.png", 
            alt: "sag_hurma_kucuk", 
            stil: "position: absolute; z-index: 1; width: 120px; bottom: 10%; right: 5%; transform: rotate(40deg);" 
        }
    ]
},
    { 
        isim: "Pepsi", 
        dosyaAdi: "Pepsi.png", 
        kategori: "icecek",
        isAsitliIcecek: true, 
        saglikPuani: "1.5",
        makroBesinler: ["Karbonhidrat: %100", "Yağ: %0", "Protein: %0"],
        temelIcerikler: ["Su", "Fruktoz-Glikoz Şurubu", "Karbondioksit", "Renklendirici (Karamel)", "Fosforik Asit", "Kafein"],
        zararliMaddeler: ["Yüksek Glikoz Şurubu", "Fosforik Asit"],
        alternatifUrun: { isim: "Uludağ Maden Suyu", dosyaAdi: "Uludag Maden Suyu.png", mesaj: '"Asitli içecek krizleri için tamamen doğal, sıfır şekerli maden sularını deneyin."' },
        malzemeler3D: [] 
    },
    { 
        isim: "Uludağ Maden Suyu", 
        dosyaAdi: "Uludag Maden Suyu.png", 
        kategori: "icecek",
        isMineralWater: true, 
        saglikPuani: "9.5",
        makroBesinler: ["Karbonhidrat: %0", "Yağ: %0", "Protein: %0"],
        temelIcerikler: ["Doğal Zengin Mineralli Su"],
        zararliMaddeler: [],
        alternatifUrun: { isim: "Uludağ Maden Suyu", dosyaAdi: "Uludag Maden Suyu.png", mesaj: '"Vücudun mineral ihtiyacını karşılayan en temiz içeceklerden biri."' },
        malzemeler3D: []
    },
    { 
    isim: "Eti Canga", 
    dosyaAdi: "Eti Canga.png", 
    kategori: "atistirmalik",
    saglikPuani: "3.8",
    makroBesinler: ["Karbonhidrat: %52", "Yağ: %36", "Protein: %12"],
    temelIcerikler: ["Yer Fıstığı (%31)", "Şeker", "Bitkisel Yağ (Palm, Tam Hidrojenize)", "Peynir Altı Suyu Tozu", "Kakao Tozu"],
    zararliMaddeler: ["Glikoz Şurubu", "Tam Hidrojenize Yağ"],
    alternatifUrun: { isim: "Züber Protein Bar", dosyaAdi: "Zuber Protein Bar.png", mesaj: '"Şeker ilavesiz, fıstık oranı yüksek protein barındıran temiz bir çikolata alternatifi."' },
    malzemeler3D: [
        // ================= SOL TARAFTAKİ MODELLER =================
        { 
            // 1. SOL ÜST: BÜYÜK YER FISTIĞI - Sola eğik ve dışarıda
            dosya: "fistik.png", 
            alt: "sol_fistik_buyuk", 
            stil: "position: absolute; z-index: 1; width: 260px; top: 10%; left: 12%; transform: rotate(-28deg);" 
        },
        { 
            // 2. SOL ORTA: KÜÇÜK KAKAO - Sola yatık duruş
            dosya: "yag damlasi.png", 
            alt: "sol_yag damlasi_kucuk", 
            stil: "position: absolute; z-index: 1; width: 120px; top: 20%; left: -2%; transform: rotate(-20deg);" 
        },
        { 
            // 3. SOL ALT: KÜÇÜK BUĞDAY - Ters dönmüş (145 derece baş aşağı)
            dosya: "bugday basagi.png", 
            alt: "sol_bugday_buyuk", 
            stil: "position: absolute; z-index: 1; width: 220px; bottom: 10%; left: -10%; transform: rotate(-35deg);" 
        },

        // ================= SAĞ TARAFTAKİ MODELLER =================
        { 
            // 4. SAĞ ÜST: BÜYÜK KAKAO - Sağa yatık ve yukarıda
            dosya: "kakao.png", 
            alt: "sag_kakao_buyuk", 
            stil: "position: absolute; z-index: 1; width: 290px; top: 6%; right: -16%; transform: rotate(30deg);" 
        },
        { 
            // 5. SAĞ ORTA: BÜYÜK BUĞDAY BAŞAĞI - Sola yatık, paketin arkasından sağa fırlayan model
            dosya: "bugday basagi.png", 
            alt: "sag_bugday_kucuk", 
            stil: "position: absolute; z-index: 1; width: 100px; top: 35%; right: -1%; transform: rotate(-35deg);" 
        },
        { 
            // 6. SAĞ ALT: KÜÇÜK YER FISTIĞI - Sağa yatık ve sağ alt köşede dışarıda
            dosya: "seker.png", 
            alt: "sag_seker_kucuk", 
            stil: "position: absolute; z-index: 1; width: 210px; bottom: 8%; right: 14%; transform: rotate(45deg);" 
        }
    ]
},
  { 
    isim: "Züber Ice Tea", 
    dosyaAdi: "Zuber Ice Tea.png", 
    kategori: "icecek",
    saglikPuani: "8.0",
    makroBesinler: ["Karbonhidrat: %90", "Yağ: %0", "Protein: %10"],
    temelIcerikler: ["Demlenmiş Siyah Çay", "Şeftali Suyu Konsantresi", "Elma Suyu Konsantresi", "Doğal Aroma Verici"],
    zararliMaddeler: [], 
    alternatifUrun: { isim: "Züber Ice Tea", dosyaAdi: "Zuber Ice Tea.png", mesaj: '"İlave şekersiz ve tatlandırıcısız, harika bir soğuk çay seçimi!"' },
    malzemeler3D: [
        // ================= SOL TARAFTAKİ MODELLER =================
        { 
            // 1. SOL ÜST: BÜYÜK ÇAY YAPRAĞI - Sola eğik, ferah ve paketten dışarıda
            dosya: "cay yapragi.png", 
            alt: "sol_cay_buyuk", 
            stil: "position: absolute; z-index: 1; width: 290px; top: 1%; left: 1%; transform: rotate(-35deg);" 
        },
        { 
            // 2. SOL ORTA: KÜÇÜK ŞEFTALİ - Sola yatık pozisyonda
            dosya: "seftaliii.png", 
            alt: "sol_seftaliii_kucuk", 
            stil: "position: absolute; z-index: 1; width: 90px; top: 60%; left: 20%; transform: rotate(-20deg);" 
        },
      

        // ================= SAĞ TARAFTAKİ MODELLER =================
        { 
            // 4. SAĞ ÜST: BÜYÜK ŞEFTALİ - Sağa yatık ve yukarıda fırlamış duruş
            dosya: "seftaliii.png", 
            alt: "sag_seftaliii_buyuk", 
            stil: "position: absolute; z-index: 1; width: 210px; top: 6%; right: -12%; transform: rotate(28deg);" 
        },
    
        { 
            // 6. SAĞ ALT: KÜÇÜK ÇAY YAPRAĞI - Sağa yatık ve sağ alt köşede zarif duruş
            dosya: "cay yapragi.png", 
            alt: "sag_cay_kucuk", 
            stil: "position: absolute; z-index: 1; width: 120px; bottom: 10%; right: 10%; transform: rotate(38deg);" 
        }
    ]
},
  { 
    isim: "Eti Çikolatalı Gofret", 
    dosyaAdi: "Eti Cikolatali Gofret.png", 
    kategori: "atistirmalik",
    saglikPuani: "2.5",
    makroBesinler: ["Karbonhidrat: %65", "Yağ: %28", "Protein: %7"],
    temelIcerikler: ["Buğday Unu", "Şeker", "Glikoz Şurubu", "Bitkisel Yağ", "Emülgatör"],
    zararliMaddeler: ["Rafine Şeker", "Palm Yağı"],
    alternatifUrun: { isim: "Züber Kurabiye", dosyaAdi: "Zuber Kurabiye.png", mesaj: '"Endüstriyel şeker bombaları yerine meyveyle tatlandırılmış kurabiyeler daha sağlıklıdır."' },
    malzemeler3D: [
        // ================= SOL TARAFTAKİ MODELLER =================
        { 
            // 1. SOL ÜST: BÜYÜK BUĞDAY BAŞAĞI - Sola eğik ve dışarıda
            dosya: "bugday basagi.png", 
            alt: "sol_bugday_buyuk", 
            stil: "position: absolute; z-index: 1; width: 280px; top: 1%; left: -15%; transform: rotate(-35deg);" 
        },
        { 
            // 2. SOL ORTA: KÜÇÜK KAKAO - Sola yatık duruş
            dosya: "kakao.png", 
            alt: "sol_kakao_kucuk", 
            stil: "position: absolute; z-index: 1; width: 110px; top: 60%; left: 30%; transform: rotate(-22deg);" 
        },
        { 
            // 3. SOL ALT: KÜÇÜK ŞEKER - Ters dönmüş açılı (135 derece baş aşağı)
            dosya: "yag damlasi.png", 
            alt: "sol_yag damlasi_buyuk", 
            stil: "position: absolute; z-index: 1; width: 150px; bottom: 8%; left: -1%; transform: rotate(-35deg);" 
        },

        // ================= SAĞ TARAFTAKİ MODELLER =================
        { 
            // 4. SAĞ ÜST: BÜYÜK KAKAO - Sağa yatık ve yukarıda fırlamış
            dosya: "kakao.png", 
            alt: "sag_kakao_buyuk", 
            stil: "position: absolute; z-index: 1; width: 290px; top: 15%; right: -1%; transform: rotate(28deg);" 
        },
      
        { 
            // 6. SAĞ ALT: KÜÇÜK BUĞDAY BAŞAĞI - Sağa yatık ve sağ alt köşede dışarıda
            dosya: "seker.png", 
            alt: "sagseker_buyuk", 
            stil: "position: absolute; z-index: 1; width: 170px; bottom: 15%; left: 50%; transform: rotate(40deg);" 
        }
    ]
},
    { 
    isim: "Saklıköy", 
    dosyaAdi: "Saklikoy.png", 
    kategori: "atistirmalik",
    saglikPuani: "3.5",
    makroBesinler: ["Karbonhidrat: %68", "Yağ: %24", "Protein: %8"],
    temelIcerikler: ["Tam Buğday Unu (%24)", "Yulaf Ezmesi (%11)", "Şeker", "Bitkisel Yağ", "Süt Tozu"],
    zararliMaddeler: ["Palm Yağı", "Rafine Şeker"],
    alternatifUrun: { isim: "Züber Kurabiye", dosyaAdi: "Zuber Kurabiye.png", mesaj: '"Yulaf ve meyve lifleriyle zenginleştirilmiş, rafine şekersiz alternatifleri deneyebilirsiniz."' },
    malzemeler3D: [
        // ================= SOL TARAFTAKİ MODELLER =================
        { 
            // 1. SOL ÜST: BÜYÜK BUĞDAY BAŞAĞI - Sola eğik ve paketten dışarıda
            dosya: "frambuaz.png", 
            alt: "sol_bugday_buyuk", 
            stil: "position: absolute; z-index: 1; width: 220px; top: 10%; left: -10%; transform: rotate(-35deg);" 
        },
        { 
            // 2. SOL ORTA: KÜÇÜK SÜT DAMLASI - Sola yatık duruş
            dosya: "frambuaz.png", 
            alt: "sol_frambuaz", 
            stil: "position: absolute; z-index: 1; width: 95px; top: 70%; left: 70%; transform: rotate(-22deg);" 
        },
        { 
            // 3. SOL ALT: KÜÇÜK YULAF - Ters dönmüş açılı (135 derece baş aşağı)
            dosya: "beyaz cikolata.png", 
            alt: "sol_beyaz cikolata", 
            stil: "position: absolute; z-index: 1; width: 210px; bottom: 8%; left: -15%; transform: rotate(-35deg);" 
        },

        // ================= SAĞ TARAFTAKİ MODELLER =================
        { 
            // 4. SAĞ ÜST: BÜYÜK SÜT DAMLASI - Sağa yatık ve yukarıda fırlamış
            dosya: "yag damlasi.png", 
            alt: "sag_yag damlasi_buyuk", 
            stil: "position: absolute; z-index: 1; width: 150px; top: 5%; left: 50%; transform: rotate(28deg);" 
        },
        { 
            // 5. SAĞ ORTA: BÜYÜK YULAF - Sola yatık, paketin arkasından fırlayan büyük lif modeli
            dosya: "yulaf.png", 
            alt: "sag_yulaf_buyuk", 
            stil: "position: absolute; z-index: 1; width: 230px; top: 28%; right: -20%; transform: rotate(-25deg);" 
        },
        { 
            // 6. SAĞ ALT: KÜÇÜK BUĞDAY BAŞAĞI - Sağa yatık ve sağ alt köşede dışarıda
            dosya: "seker.png", 
            alt: "sag_seker", 
            stil: "position: absolute; z-index: 1; width: 145px; bottom: 12%; left -1%; transform: rotate(-45deg);" 
        }
    ]
},
    { 
    isim: "Wefood Glutensiz Kraker", 
    dosyaAdi: "Wefood Glutensiz Kraker.png", 
    kategori: "atistirmalik",
    saglikPuani: "9.0",
    makroBesinler: ["Karbonhidrat: %45", "Yağ: %40", "Protein: %15"],
    temelIcerikler: ["Karabuğday Unu", "Zeytinyağı", "Kinoa", "Deniz Tuzu"],
    zararliMaddeler: [], 
    alternatifUrun: { isim: "Wefood Kraker", dosyaAdi: "Wefood Kraker.png", mesaj: '"Glutensiz ve katkısız içeriğiyle zaten en temiz kraker alternatiflerinden biri!"' },
    malzemeler3D: [
        // ================= SOL TARAFTAKİ MODELLER =================
        { 
            // 1. SOL ÜST: BÜYÜK KARABUĞDAY - Sola eğik ve paketten dışarıda
            dosya: "karabugday.png", // Projedeki ekin/buğday modelini ortak kullanıyoruz
            alt: "sol_karabugday_buyuk", 
            stil: "position: absolute; z-index: 1; width: 300px; top: 10%; left: -22%; transform: rotate(-32deg);" 
        },
        { 
            // 2. SOL ORTA: KÜÇÜK YAĞ DAMLASI - Sola yatık duruş
            dosya: "zeytinyag damlasi.png", // Varsa zeytinyağı/yağ damlası görselin
            alt: "sol_yag_kucuk", 
            stil: "position: absolute; z-index: 1; width: 85px; top: 70%; left: 75%; transform: rotate(-18deg);" 
        },
       

        // ================= SAĞ TARAFTAKİ MODELLER =================
        { 
            // 4. SAĞ ÜST: BÜYÜK YAĞ DAMLASI - Sağa yatık ve yukarıda fırlamış
            dosya: "zeytin.png", 
            alt: "sag_yag_buyuk", 
            stil: "position: absolute; z-index: 1; width: 170px; top: 6%; right: -16%; transform: rotate(30deg);" 
        },
        
        { 
            // 6. SAĞ ALT: KÜÇÜK KARABUĞDAY - Sağa yatık ve sağ alt köşede dışarıda
            dosya: "zeytin.png", 
            alt: "sag_karabugday_kucuk", 
            stil: "position: absolute; z-index: 1; width: 110px; bottom: 6%; right: 70%; transform: rotate(-42deg);" 
        }
    ]
},
{ 
    isim: "Züber Nohut Cips", 
    dosyaAdi: "Zuber Nohut Cips.png", 
    kategori: "atistirmalik",
    saglikPuani: "8.2",
    makroBesinler: ["Karbonhidrat: %55", "Yağ: %25", "Protein: %20"],
    temelIcerikler: ["Nohut Unu (%75)", "Zeytinyağı", "Yer Fıstığı (%31)", "Deniz Tuzu"],
    zararliMaddeler: [], 
    alternatifUrun: { isim: "Züber Nohut Cips", dosyaAdi: "Zuber Nohut Cips.png", mesaj: '"Fırınlanmış, yüksek proteinli ve yağ oranı düşük harika bir cips alternatifi!"' },
    malzemeler3D: [
        // ================= SOL TARAFTAKİ MODELLER =================
        { 
            // 1. SOL ÜST: BÜYÜK NOHUT - Sola eğik ve paketten dışarıda fırlamış
            dosya: "nohut.png", // Klasöründeki nohut görseli adı
            alt: "sol_nohut_buyuk", 
            stil: "position: absolute; z-index: 1; width: 220px; top: 3%; left: -5%; transform: rotate(-25deg);" 
        },
        { 
            // 2. SOL ORTA: KÜÇÜK YAĞ DAMLASI - Sola yatık duruş
            dosya: "zeytinyag damlasi.png", 
            alt: "sol_yag_kucuk", 
            stil: "position: absolute; z-index: 1; width: 85px; top: 42%; left: 10%; transform: rotate(-18deg);" 
        },
        { 
            // 6. SAĞ ALT: KÜÇÜK NOHUT - Sağa yatık ve sağ alt köşede dışarıda
            dosya: "nohut.png", 
            alt: "sag_nohut_kucuk", 
            stil: "position: absolute; z-index: 1; width: 100px; bottom: 6%; right: 30%; transform: rotate(35deg);" 
        }
    ]
},
   { 
    isim: "Eti Pop Kek", 
    dosyaAdi: "Eti Pop Kek.png", 
    kategori: "atistirmalik",
    saglikPuani: "2.0",
    makroBesinler: ["Karbonhidrat: %62", "Yağ: %33", "Protein: %5"],
    temelIcerikler: ["Buğday Unu", "Şeker", "Bitkisel Yağ (Palm, Ayçiçek)", "Glikoz Şurubu", "Yumurta", "Nem Vericiler"],
    zararliMaddeler: ["Rafine Şeker", "Glikoz Şurubu", "Palm Yağı"],
    alternatifUrun: { isim: "Züber Kurabiye", dosyaAdi: "Zuber Kurabiye.png", mesaj: '"Yüksek şekerli ve katkılı paketli kekler yerine meyve özlü atıştırmalıkları tercih edebilirsiniz."' },
    malzemeler3D: [
        // ================= SOL TARAFTAKİ MODELLER =================
        { 
            // 1. SOL ÜST: BÜYÜK LİMON/KAKAO - Sola eğik ve paketten dışarıda fırlamış
            dosya: "limon.png", // Eğer kakaolu popkek yapıyorsan burayı "kakao.png" olarak değiştirebilirsin dostum
            alt: "sol_meyve_buyuk", 
            stil: "position: absolute; z-index: 1; width: 280px; top: -7%; left: -20%; transform: rotate(-32deg);" 
        },
        { 
            // 2. SOL ORTA: KÜÇÜK SÜT DAMLASI - Sola yatık duruş
            dosya: "yag damlasi.png", 
            alt: "sol_sut_kucuk", 
            stil: "position: absolute; z-index: 1; width: 90px; top: 42%; left: -5%; transform: rotate(-20deg);" 
        },
        { 
            // 3. SOL ALT: KÜÇÜK ŞEKER - Ters dönmüş açılı (135 derece baş aşağı)
            dosya: "seker.png", 
            alt: "sol_seker_kucuk", 
            stil: "position: absolute; z-index: 1; width: 90px; bottom: 8%; left: -1%; transform: rotate(135deg);" 
        },

        // ================= SAĞ TARAFTAKİ MODELLER =================
        { 
            // 4. SAĞ ÜST: BÜYÜK SÜT DAMLASI - Sağa yatık ve yukarıda fırlamış
            dosya: "limon.png", 
            alt: "sag_sut_buyuk", 
            stil: "position: absolute; z-index: 1; width: 100px; top: 10%; right: -5%; transform: rotate(30deg);" 
        },
        { 
            // 5. SAĞ ORTA: BÜYÜK ŞEKER - Sola yatık, paketin arkasından fırlayan büyük küp
            dosya: "seker.png", 
            alt: "sag_seker_buyuk", 
            stil: "position: absolute; z-index: 1; width: 190px; top: 5%; right: 20%; transform: rotate(-30deg);" 
        },
        { 
            // 6. SAĞ ALT: KÜÇÜK LİMON/KAKAO - Sağa yatık ve sağ alt köşede dışarıda
            dosya: "bugday basagi.png", // Kakaolu ise burayı da "kakao.png" yapabilirsin
            alt: "sag_meyve_kucuk", 
            stil: "position: absolute; z-index: 1; width: 250px; bottom: -5%; right: -3%; transform: rotate(-40deg);" 
        }
    ]
},
    { 
        isim: "Lipton Ice Tea", 
        dosyaAdi: "Lipton Ice Tea.png", 
        kategori: "icecek",
        isAsitliIcecek: true, 
        saglikPuani: "3.5",
        makroBesinler: ["Karbonhidrat: %100", "Yağ: %0", "Protein: %0"],
        temelIcerikler: ["Su", "Şeker", "Asitliği Düzenleyici", "Siyah Çay Ekstratı (%0.12)", "Şeftali Konsantresi"],
        zararliMaddeler: ["Yüksek Şeker Oranı"],
        alternatifUrun: { isim: "Züber Ice Tea", dosyaAdi: "Zuber Ice Tea.png", mesaj: '"Aynı soğuk çay keyfini şeker ilavesiz ve tamamen meyve özüyle yaşamak için Züber Ice Tea seçebilirsiniz."' },
        malzemeler3D: []
    },
{ 
    isim: "Züber Protein Bar", 
    dosyaAdi: "Zuber Protein Bar.png", 
    kategori: "atistirmalik",
    saglikPuani: "9.2",
    makroBesinler: ["Karbonhidrat: %35", "Yağ: %25", "Protein: %40"],
    temelIcerikler: ["Hurma", "Yer Fıstığı (%23)", "Peynir Altı Suyu Proteini Konsantresi (%15)", "Kakao Kitlesi", "Hindistan Cevizi Lifi"],
    zararliMaddeler: [], 
    alternatifUrun: { isim: "Züber Protein Bar", dosyaAdi: "Zuber Protein Bar.png", mesaj: '"Yüksek proteinli, lifli ve rafine şekersiz içeriğiyle zaten en kaliteli sporcu alternatifi!"' },
    malzemeler3D: [
        // ================= SOL TARAFTAKİ MODELLER =================
        { 
            // 1. SOL ÜST: BÜYÜK YER FISTIĞI - Sola eğik ve paketten dışarıda fırlamış
            dosya: "fistik.png", 
            alt: "sol_fistik_buyuk", 
            stil: "position: absolute; z-index: 1; width: 190px; top: 5%; left: -5%; transform: rotate(-28deg);" 
        },
        { 
            // 2. SOL ORTA: KÜÇÜK SÜT DAMLASI - Sola yatık duruş (Protein vurgusu)
            dosya: "sut damlasi.png", 
            alt: "sol_sut_kucuk", 
            stil: "position: absolute; z-index: 1; width: 90px; top: 42%; left: -15%; transform: rotate(-20deg);" 
        },
        { 
            // 3. SOL ALT: KÜÇÜK KAKAO - Ters dönmüş açılı (140 derece baş aşağı)
            dosya: "kakao.png", 
            alt: "sol_kakao_kucuk", 
            stil: "position: absolute; z-index: 1; width: 310px; bottom: 8%; left: -14%; transform: rotate(-20deg);" 
        },

        // ================= SAĞ TARAFTAKİ MODELLER =================
        { 
            // 4. SAĞ ÜST: BÜYÜK SÜT DAMLASI - Sağa yatık ve yukarıda fırlamış
            dosya: "hurma.png", 
            alt: "sag_sut_buyuk", 
            stil: "position: absolute; z-index: 1; width: 290px; top: 6%; right: -10%; transform: rotate(30deg);" 
        },
        
        { 
            // 6. SAĞ ALT: KÜÇÜK YER FISTIĞI - Sağa yatık ve sağ alt köşede dışarıda
            dosya: "fistik.png", 
            alt: "sag_fistik_kucuk", 
            stil: "position: absolute; z-index: 1; width: 110px; bottom: 6%; right: -5%; transform: rotate(42deg);" 
        }
    ]
},
    { 
    isim: "Züber Kurabiye", 
    dosyaAdi: "Zuber Kurabiye.png", 
    kategori: "atistirmalik",
    saglikPuani: "8.8",
    makroBesinler: ["Karbonhidrat: %48", "Yağ: %38", "Protein: %14"],
    temelIcerikler: ["Hurma", "Fındık (%18)", "Yulaf Unu", "Kakao Kitlesi (%7)", "Hindistan Cevizi Lifi"],
    zararliMaddeler: [], 
    alternatifUrun: { isim: "Züber Kurabiye", dosyaAdi: "Zuber Kurabiye.png", mesaj: '"Glutensiz, katkısız ve rafine şekersiz içeriğiyle zaten en temiz kurabiye alternatifi!"' },
    malzemeler3D: [
        // ================= SOL TARAFTAKİ MODELLER =================
        { 
            // 1. SOL ÜST: BÜYÜK FINDIK - Sola eğik ve paketten dışarıda fırlamış
            dosya: "findik.png", // Klasöründeki fındık görselinin adı (Örn: findik.png veya funduk.png)
            alt: "sol_findik_buyuk", 
            stil: "position: absolute; z-index: 1; width: 200px; top: 15%; left: -10%; transform: rotate(-25deg);" 
        },
        { 
            // 2. SOL ORTA: KÜÇÜK KAKAO - Sola yatık duruş
            dosya: "kakao.png", 
            alt: "sol_kakao_kucuk", 
            stil: "position: absolute; z-index: 1; width: 110px; top: 42%; left: -2%; transform: rotate(-20deg);" 
        },
        { 
            // 3. SOL ALT: KÜÇÜK HURMA - Ters dönmüş açılı (135 derece baş aşağı)
            dosya: "yulaf.png", 
            alt: "sol_hurma_kucuk", 
            stil: "position: absolute; z-index: 1; width: 210px; bottom: 8%; left: -2%; transform: rotate(-40deg);" 
        },

        // ================= SAĞ TARAFTAKİ MODELLER =================
       
        { 
            // 5. SAĞ ORTA: BÜYÜK HURMA - Sola yatık, paketin arkasından fırlayan büyük meyve özü
            dosya: "hurma.png", 
            alt: "sag_hurma_buyuk", 
            stil: "position: absolute; z-index: 1; width: 260px; top: 26%; right: -20%; transform: rotate(-32deg);" 
        },
        { 
            // 6. SAĞ ALT: KÜÇÜK FINDIK - Sağa yatık ve sağ alt köşede dışarıda
            dosya: "kakao.png", 
            alt: "sag_findik_kucuk", 
            stil: "position: absolute; z-index: 1; width: 280px; bottom: 6%; right: -24%; transform: rotate(38deg);" 
        }
    ]
}
];

    // =========================================================================
    // 4. DOM ELEMENTLERİ
    // =========================================================================
    const urunAraInput = document.querySelector('input[placeholder="Ürün ara"]') || document.getElementById('urunAraInput');
    const aramaDropdown = document.getElementById('aramaDropdown');
    const btnAtistirmalik = document.getElementById('btnAtistirmalik');
    const btnIcecek = document.getElementById('btnIcecek');
    const btnAnasayfa = document.getElementById('btn-anasayfa');
    const logoGeriDon = document.querySelector('.logo-kapsayici img') || document.querySelector('.logo') || document.getElementById('icinde-ne-var-logo');
    
    const orijinalKartlarKonteyner = document.querySelector('.en-cok-bakilanlar-konteyner');
    const kayanSeritKonteyner = document.querySelector('.tum-urunler-seridi');
    const kategoriIzgaraAlani = document.getElementById('kategoriIzgaraAlani');
    const kategoriGrid = document.getElementById('kategoriGrid');
    const urunDetayAlani = document.getElementById('urunDetayAlani');
    
    const hakkimizdaAlani = document.getElementById('hakkimizda-alani');
    const iletisimAlani = document.getElementById('iletisim-alani');
    
    const tumAramaVeKategoriElementleri = document.querySelectorAll('.search-and-categories-zone, .search-container, .categories-container, .kategori-butonlari-alani');

    let seciliKategori = null; 

    window.herSeyiGizle = function() {
        tumAramaVeKategoriElementleri.forEach(el => {
            el.classList.add('gizli');
            el.style.setProperty('display', 'none', 'important');
        });

        if (orijinalKartlarKonteyner) orijinalKartlarKonteyner.style.setProperty('display', 'none', 'important');
        if (kayanSeritKonteyner) kayanSeritKonteyner.style.setProperty('display', 'none', 'important');
        if (kategoriIzgaraAlani) kategoriIzgaraAlani.style.setProperty('display', 'none', 'important');
        if (urunDetayAlani) urunDetayAlani.style.setProperty('display', 'none', 'important');

        if (hakkimizdaAlani) {
            hakkimizdaAlani.classList.add('gizli');
            hakkimizdaAlani.style.setProperty('display', 'none', 'important');
        }
        if (iletisimAlani) {
            iletisimAlani.classList.add('gizli');
            iletisimAlani.style.setProperty('display', 'none', 'important');
        }
        
        const analizEkranAlani = document.getElementById('analiz-ekran-alani');
        if (analizEkranAlani) {
            analizEkranAlani.classList.add('gizli');
            analizEkranAlani.style.setProperty('display', 'none', 'important');
        }
        
        if (aramaDropdown) aramaDropdown.style.setProperty('display', 'none', 'important');
    }

    window.anaSayfayiGoster = function() {
        herSeyiGizle(); 

        tumAramaVeKategoriElementleri.forEach(el => {
            el.classList.remove('gizli');
            el.style.setProperty('display', 'flex', 'important'); 
        });

        const sadeceButonlar = document.querySelector('.categories-container, .kategori-butonlari-alani');
        if (sadeceButonlar) {
            sadeceButonlar.classList.remove('gizli');
            sadeceButonlar.style.setProperty('display', 'flex', 'important');
        }

        if (orijinalKartlarKonteyner) {
            orijinalKartlarKonteyner.classList.remove('gizli');
            orijinalKartlarKonteyner.style.setProperty('display', 'flex', 'important');
        }
        if (kayanSeritKonteyner) {
            kayanSeritKonteyner.classList.remove('gizli');
            kayanSeritKonteyner.style.setProperty('display', 'flex', 'important');
        }
        
        if (urunAraInput) urunAraInput.value = '';
        seciliKategori = null;
        if(btnAtistirmalik) btnAtistirmalik.classList.remove('aktif-kategori');
        if(btnIcecek) btnIcecek.classList.remove('aktif-kategori');
    }

    // =========================================================================
    // 5. SADE LİSTE ARAMA MOTORU
    // =========================================================================
    if (urunAraInput && aramaDropdown) {
        function dropdownGuncelle(filtreMetni) {
            aramaDropdown.innerHTML = '';
            
            aramaDropdown.style.listStyleType = "none";
            aramaDropdown.style.padding = "10px 20px";
            aramaDropdown.style.margin = "0";
            aramaDropdown.style.width = "100%";
            aramaDropdown.style.boxSizing = "border-box";

            const temizle = (s) => s.toLowerCase().replace(/ü/g, 'u').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g').trim();

            const filtrelenmis = tumUrunListesi.filter(urun => 
                temizle(urun.isim).includes(temizle(filtreMetni))
            );

            if (filtrelenmis.length === 0) {
                const bosLi = document.createElement('li');
                bosLi.textContent = "Ürün bulunamadı";
                bosLi.style.padding = "8px 0";
                bosLi.style.color = "#555";
                aramaDropdown.appendChild(bosLi);
                return;
            }

            filtrelenmis.forEach(urun => {
                const li = document.createElement('li');
                li.style.padding = "8px 0";
                li.style.cursor = "pointer";
                li.style.color = "#1c3d11"; 
                li.style.fontSize = "16px";
                li.style.fontWeight = "500";
                li.style.textAlign = "left";
                li.style.borderBottom = "1px solid rgba(0,0,0,0.04)";
                
                li.innerHTML = `<span style="color:#2d5a1e; margin-right:8px;">•</span> ${urun.isim}`;

                li.addEventListener('click', () => {
                    urunAraInput.value = urun.isim;
                    aramaDropdown.classList.add('gizli');
                    aramaDropdown.style.display = 'none';
                    urunDetaySayfasiAc(urun.isim);
                });

                aramaDropdown.appendChild(li);
            });
        }

        urunAraInput.addEventListener('focus', () => {
            aramaDropdown.classList.remove('gizli');
            aramaDropdown.style.display = 'block';
            dropdownGuncelle(urunAraInput.value);
        });

        urunAraInput.addEventListener('input', (e) => {
            dropdownGuncelle(e.target.value);
        });

        document.addEventListener('click', (e) => {
            if (!urunAraInput.contains(e.target) && !aramaDropdown.contains(e.target)) {
                aramaDropdown.classList.add('gizli');
                aramaDropdown.style.display = 'none';
            }
        });
    }

    // =========================================================================
    // 6. GÖRÜNÜM VE SAYFA YÖNLENDİRME AYARLARI
    // =========================================================================
    function kategoriGridiniDoldur(kategori) {
        if (!kategoriGrid) return;
        kategoriGrid.innerHTML = "";
        const filtrelenmisUrunler = tumUrunListesi.filter(urun => urun.kategori === kategori);

        filtrelenmisUrunler.forEach(urun => {
            const kart = document.createElement('div');
            const kartIsmi = urun.isim; 
            kart.className = 'urun-karti';
            kart.style.cursor = 'pointer';
            kart.innerHTML = `<img src="${urun.dosyaAdi}" alt="${urun.isim}" class="urun-resmi">`;
            
            kart.addEventListener('click', () => urunDetaySayfasiAc(kartIsmi));
            kategoriGrid.appendChild(kart);
        });
    }

    function gorunumuAyarla(kategori) {
        seciliKategori = kategori;
        herSeyiGizle(); 

        tumAramaVeKategoriElementleri.forEach(el => {
            el.classList.remove('gizli');
            el.style.setProperty('display', 'flex', 'important');
        });

        if (kategori === null) {
            isPaused = false; 
            if(orijinalKartlarKonteyner) {
                orijinalKartlarKonteyner.classList.remove('gizli');
                orijinalKartlarKonteyner.style.setProperty('display', 'flex', 'important');
            }
            if(kayanSeritKonteyner) {
                kayanSeritKonteyner.classList.remove('gizli');
                kayanSeritKonteyner.style.setProperty('display', 'flex', 'important');
            }
            if(btnAtistirmalik) btnAtistirmalik.classList.remove('aktif-kategori');
            if(btnIcecek) btnIcecek.classList.remove('aktif-kategori');
        } else {
            if(kategoriIzgaraAlani) {
                kategoriIzgaraAlani.classList.remove('gizli');
                kategoriIzgaraAlani.style.setProperty('display', 'block', 'important');
            }
            kategoriGridiniDoldur(kategori);
            
            if (kategori === 'atistirmalik') {
                if(btnAtistirmalik) btnAtistirmalik.classList.add('aktif-kategori'); 
                if(btnIcecek) btnIcecek.classList.remove('aktif-kategori');
            } else {
                if(btnIcecek) btnIcecek.classList.add('aktif-kategori');
                if(btnAtistirmalik) btnAtistirmalik.classList.remove('aktif-kategori');
            }
        }
    }

    // =========================================================================
    // 7. AKILLI ÜRÜN DETAY / OTOMATİK 3D MOTORU
    // =========================================================================
    function urunDetaySayfasiAc(urunIsmi) {
        if (!urunIsmi) return;
        
        const normalize = (str) => {
            return str.toLowerCase()
                      .replace(/ü/g, 'u').replace(/ı/g, 'i').replace(/ö/g, 'o')
                      .replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g')
                      .replace(/cipsi/g, 'cips') 
                      .replace(/\s+/g, '')
                      .trim();
        };
    
        const arananNormal = normalize(urunIsmi);

        const urun = tumUrunListesi.find(u => {
            const vtNormal = normalize(u.isim);
            return vtNormal === arananNormal || vtNormal.includes(arananNormal) || arananNormal.includes(vtNormal);
        });
        
        if (!urun) return;

        herSeyiGizle(); 
        
        tumAramaVeKategoriElementleri.forEach(el => {
            el.classList.remove('gizli');
            el.style.setProperty('display', 'flex', 'important');
        });
        const sadeceButonlar = document.querySelector('.categories-container, .kategori-butonlari-alani');
        if (sadeceButonlar) {
            sadeceButonlar.classList.add('gizli');
            sadeceButonlar.style.setProperty('display', 'none', 'important');
        }
        
        const analizEkranAlani = document.getElementById('analiz-ekran-alani');
        if (analizEkranAlani) {
            analizEkranAlani.classList.remove('gizli');
            analizEkranAlani.style.setProperty('display', 'flex', 'important'); 
        }
        
        if (urunDetayAlani) {
            urunDetayAlani.classList.remove('gizli');
            urunDetayAlani.style.setProperty('display', 'block', 'important');
        }

        const renderSahnesi = document.querySelector('.render-sahnesi');
        if (renderSahnesi) {
            renderSahnesi.innerHTML = "";
            renderSahnesi.style.position = "relative";

            // Ana ürün resmini yerleştir
            const anaUrunImg = document.createElement('img');
            anaUrunImg.id = "analiz-urun-resmi";
            anaUrunImg.src = urun.dosyaAdi;
            anaUrunImg.alt = urun.isim;
            renderSahnesi.appendChild(anaUrunImg);

            // 🌟 A) ULUDAĞ MADEN SUYU İÇİN OTOMATİK MİNERAL KÜRELERİ 🌟
            if (urun.isMineralWater) {
                const mineraller = [
                    { ad: "Ca", renk: "linear-gradient(135deg, #ff4e50, #f9d423)", stil: "width:60px; height:60px; top:12%; left:10%;" },
                    { ad: "Mg", renk: "linear-gradient(135deg, #00b4db, #0083b0)", stil: "width:65px; height:65px; top:18%; right:8%;" },
                    { ad: "Zn", renk: "linear-gradient(135deg, #f1c40f, #f39c12)", stil: "width:55px; height:55px; bottom:25%; right:12%;" },
                    { ad: "Na", renk: "linear-gradient(135deg, #9b59b6, #8e44ad)", stil: "width:60px; height:60px; bottom:15%; left:8%;" },
                    { ad: "K", renk: "linear-gradient(135deg, #2ecc71, #27ae60)", stil: "width:50px; height:50px; top:45%; right:20%;" },
                    { ad: "Fe", renk: "linear-gradient(135deg, #e74c3c, #c0392b)", stil: "width:55px; height:55px; top:48%; left:15%;" }
                ];

                mineraller.forEach(min => {
                    const mKure = document.createElement('div');
                    mKure.style.cssText = min.stil + `
                        position: absolute;
                        background: ${min.renk};
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        font-weight: bold;
                        font-family: 'Poppins', sans-serif;
                        font-size: 16px;
                        box-shadow: inset -5px -5px 15px rgba(0,0,0,0.3), 0 8px 20px rgba(0,0,0,0.15);
                        z-index: 5;
                        animation: floatingAnimation 4s ease-in-out infinite alternate;
                    `;
                    mKure.textContent = min.ad;
                    renderSahnesi.appendChild(mKure);
                });
            } 
            // 🌟 B) PEPSİ VE ASİTLİ İÇECEKLER İÇİN OTOMATİK PARLAK KÜRE MOTORU 🌟
            else if (urun.isAsitliIcecek) {
                const asitElementleri = [
                    { ad: "CO₂", renk: "linear-gradient(135deg, #7f8c8d, #34495e)", stil: "width:65px; height:65px; top:15%; left:8%;" },
                    { ad: "Asit", renk: "linear-gradient(135deg, #ff416c, #ff4b2b)", stil: "width:70px; height:70px; top:22%; right:10%;" },
                    { ad: "Kafein", renk: "linear-gradient(135deg, #f857a6, #ff5858)", stil: "width:75px; height:75px; bottom:20%; left:12%;" },
                    { ad: "Şeker", renk: "linear-gradient(135deg, #4da0b0, #d39d38)", stil: "width:60px; height:60px; bottom:25%; right:14%;" }
                ];

                asitElementleri.forEach(asit => {
                    const aKure = document.createElement('div');
                    aKure.style.cssText = asit.stil + `
                        position: absolute;
                        background: ${asit.renk};
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        font-weight: bold;
                        font-family: 'Poppins', sans-serif;
                        font-size: 14px;
                        box-shadow: inset -5px -5px 15px rgba(0,0,0,0.3), 0 8px 20px rgba(0,0,0,0.15);
                        z-index: 5;
                        animation: floatingAnimation 4s ease-in-out infinite alternate;
                    `;
                    aKure.textContent = asit.ad;
                    renderSahnesi.appendChild(aKure);
                });
            }

            // 🌟 C) KATI MODELLER VE DİĞER TÜM ÜRÜNLER İÇİN BOYUT VE KONUM MOTORU 🌟
if (urun.malzemeler3D && urun.malzemeler3D.length > 0) {
    // Veritabanında özel stili (büyüklük/küçüklük) olmayan elemanlar için varsayılan şablon
    const konumSablonlari = [
        { top: '12%', left: '8%' },   // Sol Üst
        { top: '15%', right: '8%' },  // Sağ Üst
        { bottom: '15%', right: '12%' },// Sağ Alt
        { bottom: '12%', left: '10%' }  // Sol Alt
    ];

    urun.malzemeler3D.forEach((malzeme, index) => {
        const mImg = document.createElement('img');
        mImg.src = malzeme.dosya;
        mImg.alt = malzeme.alt;

        // 1. Adım: Veritabanındaki özel stilleri al, yoksa otomatik şablonu ata
        let aktifStil = malzeme.stil || "";
        if (!aktifStil) {
            const sbln = konumSablonlari[index] || { top: '30%', left: '10%' };
            aktifStil = `position: absolute; `;
            if (sbln.top) aktifStil += `top: ${sbln.top}; `;
            if (sbln.bottom) aktifStil += `bottom: ${sbln.bottom}; `;
            if (sbln.left) aktifStil += `left: ${sbln.left}; `;
            if (sbln.right) aktifStil += `right: ${sbln.right}; `;
            // Veritabanında özel boyut yoksa varsayılan olarak eski boyutu koru
            aktifStil += ` width: 110px; height: auto;`; 
        } else {
            // Eğer veritabanında genişlik var ama yükseklik atanmamışsa en-boy oranı bozulmasın diye ekle
            if (!aktifStil.includes('height:')) {
                aktifStil += ` height: auto;`;
            }
        }

        // 2. Adım: Stilleri "!important" ile zorlamadan, animasyon ve yumuşak geçiş özellikleriyle harmanla
        mImg.style.cssText = aktifStil;
        
        // Ortak geçiş, animasyon ve nesne sığdırma ayarları (Özel boyutları ezmeden ekliyoruz)
        mImg.style.objectFit = "contain";
        mImg.style.zIndex = "10";
        mImg.style.transition = "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        mImg.style.animation = "floatingAnimation 4s ease-in-out infinite alternate";
        mImg.style.opacity = "0";
        mImg.style.transform = (mImg.style.transform || "") + " scale(0)";

        // Sahneye ekle
        renderSahnesi.appendChild(mImg);

        // 3. Adım: Fırlama ve büyüme efektini tetikle
        setTimeout(() => {
            mImg.style.opacity = '1';
            // Mevcut transform rotasyonunu koruyarak sadece ölçeği 1'e getir
            const mevcutTransform = malzeme.stil && malzeme.stil.match(/transform:\s*([^;]+)/) ? malzeme.stil.match(/transform:\s*([^;]+)/)[1] : "";
            mImg.style.transform = `${mevcutTransform} scale(1)`.trim();
        }, 100);
    });
}
        }

        const temelIcerikListesi = document.getElementById('analiz-temel-icerikler-listesi');
        if (temelIcerikListesi) {
            temelIcerikListesi.innerHTML = "";
            urun.temelIcerikler.forEach(icerik => {
                const li = document.createElement('li');
                li.textContent = icerik;
                temelIcerikListesi.appendChild(li);
            });
        }
    
        const zararliMaddelerListesi = document.getElementById('analiz-zararli-maddeler-listesi');
        if (zararliMaddelerListesi) {
            zararliMaddelerListesi.innerHTML = "";
            if (urun.zararliMaddeler && urun.zararliMaddeler.length > 0) {
                urun.zararliMaddeler.forEach(madde => {
                    const li = document.createElement('li');
                    li.textContent = madde;
                    zararliMaddelerListesi.appendChild(li);
                });
            } else {
                const li = document.createElement('li');
                li.textContent = "Temiz İçerik";
                zararliMaddelerListesi.appendChild(li);
            }
        }

        const alternatifResim = document.getElementById('analiz-alternatif-resim');
        const alternatifMetin = document.getElementById('analiz-alternatif-metin');
        if (alternatifResim && urun.alternatifUrun) alternatifResim.src = urun.alternatifUrun.dosyaAdi;
        if (alternatifMetin && urun.alternatifUrun) alternatifMetin.textContent = urun.alternatifUrun.mesaj;

        const skorRakami = document.getElementById('analiz-skor-rakam');
        if (skorRakami) skorRakami.textContent = urun.saglikPuani;

        try {
            const veriAyikla = (str) => parseInt(str.replace(/[^0-9]/g, '')) || 0;
            const carb = urun.makroBesinler && urun.makroBesinler[0] ? veriAyikla(urun.makroBesinler[0]) : 50;
            const yag = urun.makroBesinler && urun.makroBesinler[1] ? veriAyikla(urun.makroBesinler[1]) : 30;
            const prot = urun.makroBesinler && urun.makroBesinler[2] ? veriAyikla(urun.makroBesinler[2]) : 20;

            const efsaneKonteyner = document.getElementById('makro-metin-efsanesi');
            if (efsaneKonteyner) {
                efsaneKonteyner.innerHTML = `
                    <li><span class="renk-noktasi" style="background:#72B02B; display:inline-block; width:8px; height:8px; border-radius:50%; margin-right:5px;"></span> Karbonhidrat: %${carb}</li>
                    <li><span class="renk-noktasi" style="background:#3498db; display:inline-block; width:8px; height:8px; border-radius:50%; margin-right:5px;"></span> Yağ: %${yag}</li>
                    <li><span class="renk-noktasi" style="background:#f1c40f; display:inline-block; width:8px; height:8px; border-radius:50%; margin-right:5px;"></span> Protein: %${prot}</li>
                `;
            }

            if (daireselGrafikReferansi) daireselGrafikReferansi.destroy();
            if (cubukGrafikReferansi) cubukGrafikReferansi.destroy();

            const ctxHalka = document.getElementById('chartMakroBesinler');
            const ctxYarim = document.getElementById('chartSaglikPuani');

            if (ctxHalka && typeof Chart !== 'undefined') {
                daireselGrafikReferansi = new Chart(ctxHalka, {
                    type: 'doughnut',
                    data: {
                        labels: ['Karbonhidrat', 'Yağ', 'Protein'],
                        datasets: [{
                            data: [carb, yag, prot],
                            backgroundColor: ['#72B02B', '#3498db', '#f1c40f'],
                            borderWidth: 0
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { display: false } },
                        cutout: '70%'
                    }
                });
            }

            if (ctxYarim && typeof Chart !== 'undefined') {
                const saglikSkoru = parseFloat(urun.saglikPuani) || 0;
                cubukGrafikReferansi = new Chart(ctxYarim, {
                    type: 'doughnut',
                    data: {
                        datasets: [{
                            data: [saglikSkoru, 10 - saglikSkoru],
                            backgroundColor: ['#3D6611', '#e0e0e0'],
                            borderWidth: 0
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        rotation: 270,
                        circumference: 180,
                        plugins: { legend: { display: false } },
                        cutout: '80%'
                    }
                });
            }
        } catch (e) {
            console.log("Grafik yükleme hatası kontrolü:", e);
        }
    }

    let daireselGrafikReferansi = null;
    let cubukGrafikReferansi = null;

    // =========================================================================
    // 8. ETKİLEŞİM DİNLEYİCİLERİ
    // =========================================================================
    const seritElemanlari = document.querySelectorAll('.serit-eleman');
    seritElemanlari.forEach(eleman => {
        eleman.style.cursor = 'pointer';
        eleman.addEventListener('click', () => {
            const altImg = eleman.querySelector('img');
            if(altImg) {
                const imgAlt = altImg.alt || altImg.getAttribute('data-urun') || "";
                if(imgAlt) urunDetaySayfasiAc(imgAlt);
            }
        });
    });

    const enCokBakilanlarKonteynir = document.querySelector('.en-cok-bakilanlar-konteyner');
    if (enCokBakilanlarKonteynir) {
        const altKartlar = enCokBakilanlarKonteynir.querySelectorAll('.urun-karti, div[data-urun], [class*="kart"]');
        
        altKartlar.forEach(kart => {
            kart.style.cursor = 'pointer';
            kart.addEventListener('click', function(event) {
                event.preventDefault();
                event.stopPropagation();
                
                const aktifKart = event.currentTarget;
                let tiklananUrunAdi = aktifKart.getAttribute('data-urun');
                
                if (!tiklananUrunAdi) {
                    const gorsel = aktifKart.querySelector('img');
                    if (gorsel) {
                        tiklananUrunAdi = gorsel.getAttribute('alt') || gorsel.getAttribute('data-urun');
                        if (!tiklananUrunAdi && gorsel.src) {
                            let dosyaYolu = decodeURIComponent(gorsel.src.split('/').pop());
                            tiklananUrunAdi = dosyaYolu.replace(/\.[^/.]+$/, ""); 
                        }
                    }
                }
                
                if (!tiklananUrunAdi) {
                    tiklananUrunAdi = aktifKart.innerText || aktifKart.textContent;
                }

                if (tiklananUrunAdi) {
                    urunDetaySayfasiAc(tiklananUrunAdi.trim());
                }
            });
        });
    }

    if(btnAtistirmalik) {
        btnAtistirmalik.addEventListener('click', () => {
            if (seciliKategori === 'atistirmalik') gorunumuAyarla(null);
            else gorunumuAyarla('atistirmalik');
        });
    }

    if(btnIcecek) {
        btnIcecek.addEventListener('click', () => {
            if (seciliKategori === 'icecek') gorunumuAyarla(null);
            else gorunumuAyarla('icecek');
        });
    }

    if(btnAnasayfa) {
        btnAnasayfa.addEventListener('click', () => {
            anaSayfayiGoster();
        });
    }

    if (logoGeriDon) {
        logoGeriDon.style.cursor = 'pointer';
        logoGeriDon.addEventListener('click', () => {
            anaSayfayiGoster();
        });
    }

    // ==========================================
    // 9. HTML ONCLICK BAĞLANTILARI (Footer İçin)
    // ==========================================
    window.hakkimizdaSayfasiAc = function() {
        herSeyiGizle(); 
        if (hakkimizdaAlani) {
            hakkimizdaAlani.classList.remove('gizli');
            hakkimizdaAlani.style.setProperty('display', 'block', 'important'); 
        }
    };

    window.iletisimSayfasiAc = function() {
        herSeyiGizle(); 
        if (iletisimAlani) {
            iletisimAlani.classList.remove('gizli');
            iletisimAlani.style.setProperty('display', 'block', 'important'); 
        }
    };
});