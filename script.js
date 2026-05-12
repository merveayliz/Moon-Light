
const products = [
    { id: 1, name: "Pembe Lilyum Buket", category: "buket", isBestSeller: true, desc: "El emeği,Pembe buket.", price: "900TL", img: "img/1.jpg" },
    { id: 2, name: "Pembe Lale Buket", category: "buket", isBestSeller: true, desc: "İç ısıtan örgü tasarım.", price: "800 TL", img: "img/2.jpg" },
    { id: 3, name: "Mor Lale Buket", category: "buket", isBestSeller: false,  desc: "Huzurlu renklerle örüldü.", price: "900 TL", img: "img/3.jpg" },
    { id: 4, name: "Yeşil Neşe ",  category: "buket", isBestSeller: false,  desc: "Lilyum ,Lale,Papatya karışık", price: "900 TL", img: "img/4.jpg" },
    { id: 5, name: "Rapunzel Buket", category: "buket", isBestSeller: false, desc: "Işıklı çiçek buketi.", price: "900 TL", img: "img/5.jpg" },
    { id: 6, name: "Papatya Buket", category: "buket", isBestSeller: true,  desc: "Soft renklerin şöleni.", price: "1.200 TL", img: "img/6.jpg" },
    { id: 7, name: "Soft Örgü Set", category: "buket", isBestSeller: true, desc: "Uyumlu renklerin birleşimi.", price: "1200 TL", img: "img/7.jpg" },
    { id: 8, name: "Ayçiçeği Buketi", category: "buket", isBestSeller: true, desc: "Tarzınızı yansıtan detaylar.", price: "1.200 TL", img: "img/8.jpg" },
    { id: 9, name: "Renkli Lilyum Buketi", category: "buket", isBestSeller: true, desc: "Farklı dokular sevenler için.", price: "1.200 TL", img: "img/9.jpg" },
    { id:10, name: "Renkli Zambak Buketi " ,category: "buket", isBestSeller: false, desc:"Rengarenk çiçeklerin birleşimi.", price:"1.200 TL", img:"img/10.jpg"},

    { id: 11, name: "Lotus Lamba",category: "lamba", isBestSeller: false, desc: "El emeği, lamba.", price: "500 TL", img: "img/11.jpg" },
    { id: 12, name: "DenizanasI Lamba",category: "lamba", isBestSeller: true,  desc: "İç ısıtan gece lambası.", price: "500 TL", img: "img/22.jpg" },
    { id: 13, name: "Pembe Lamba",category: "lamba", isBestSeller: true, desc: "Huzurlu renklerle örüldü.", price: "850 TL", img: "img/33.jpg" },
    { id: 14, name: "Mor Lamba",category: "lamba", isBestSeller: true, desc: "Yumuşacık dokusuyla gecenizi aydınlattsın.", price: "900 TL", img: "img/44.jpg" },
    { id: 15, name: "Rapunzel Çiçeği Lamba", category: "lamba", isBestSeller: true, desc: "Rapunzel çiçeği gece lambası.", price: "500 TL", img: "img/55.jpg" },
    { id: 16, name: "Pembe Lilyum lamba",category: "lamba", isBestSeller: true, desc: "Çocuklar ve içindeki çocuk kalanlar için.", price: "650 TL", img: "img/66.jpg" },
    { id: 17, name: "Kırmızı Lilyum Lamba", category: "lamba", isBestSeller: true, desc: "Uyumlu renklerin birleşimi.", price: "800 TL", img: "img/77.jpg" },
    { id: 18, name: "3'lü Anahtarlık",category: "anahtarlık", isBestSeller: true, desc: "Tarzınızı yansıtan detaylar.", price: "550 TL", img: "img/111.jpg" },

    { id: 19, name: "2'li Anahtarlık",category: "anahtarlık", isBestSeller: true, desc: "Farklı dokular sevenler için.", price: "380 TL", img: "img/222.jpg" },
    { id: 20, name: "Mor Lilyum Anahtarlık",category: "anahtarlık", isBestSeller: true, desc:"ayıcık tatlı kulakları içinizi ısıtır.", price:"500 TL", img:"img/333.jpg"},
    { id: 21, name: "Pembe Lilyum Anahtarlık",category: "anahtarlık", isBestSeller: true, desc: "El emeği, terletmeyen yumuşak doku.", price: "350 TL", img: "img/444.jpg" },
    { id: 22, name: "Mavi Lilyum Anahtarlık",category: "anahtarlık", isBestSeller: true, desc: "Sıcak tutan örgü tasarım.", price: "400 TL", img: "img/555.jpg" },
    { id: 23, name: "2'li Çilel Anahtarlık",category: "anahtarlık", isBestSeller: true, desc: "Huzurlu renklerle örüldü.", price: "850 TL", img: "img/666.jpg" },
    { id: 24, name: "2'li Melek Tozu",category: "1,buket", isBestSeller: false, desc: "Yumuşacık dokusuyla her mevsim.", price: "900 TL", img: "img/1111.jpg" },
    { id: 25, name: "2'li Düş Baharı",category: "1,buket", isBestSeller: false , desc: "Gece şıklığı ve sıcaklık bir arada.", price: "600 TL", img: "img/2222.jpg" },
    { id: 26, name: "Kuzey Rüyası", category: "1,buket", isBestSeller: true, desc: "Çifte mutluluk ", price: "600 TL", img: "img/3333.jpg" },

    { id: 27, name: "Pembe Lale",category: "1,buket", isBestSeller: true, desc: "tekli lale buketi.", price: "380 TL", img: "img/4444.jpg" },
    { id: 28, name: "3 Adet Lale",category: "1,buket", isBestSeller: true, desc:"Sade bir buket her cebe uygun.", price:"500 TL", img:"img/5555.jpg"},
    { id: 29, name: "Sarı Fırtına",category: "1,buket", isBestSeller: true, desc: "El emeği, sarı lilyum çiçeği minik buket.", price: "350 TL", img: "img/6666.jpg" }
    
];

// Filtreleme Fonksiyonu
function filterProducts(category) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ""; // Önce ekranı temizle

    // Butonların aktiflik durumunu güncelle
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase().includes(category.replace('-', ' '))) {
            btn.classList.add('active');
        }
    });

    // Filtrele ve ekrana bas
    products.forEach(product => {
        let show = false;
        if (category === 'tümü') show = true;
        else if (category === 'en-cok-satanlar' && product.isBestSeller) show = true;
        else if (product.category === category) show = true;

        if (show) {
            const card = document.createElement('div');
            card.className = 'product-card';
           // script.js içindeki innerHTML kısmını bununla güncelle:
card.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <div style="text-align:center; margin-top:5px; margin-bottom:15px;"> 
        <h3>${product.name}</h3>
        <p style="font-weight:700; color:var(--shonil-red)">${product.price}</p>
    </div>
`;
            card.onclick = () => openModal(product);
            productList.appendChild(card);
        }
    });
}

// Sayfa ilk açıldığında tümünü göster
window.onload = () => filterProducts('tümü');


const productList = document.getElementById('product-list');
const modal = document.getElementById('productModal');
const modalImg = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const modalWA = document.getElementById('modalWhatsApp');
const closeModal = document.querySelector('.close-modal');


function loadProducts() {
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div style="text-align:center; margin-top:10px;">
                <h3 style="color:var(--soft-purple)">${product.name}</h3>
                <p style="font-weight:700">${product.price}</p>
            </div>
        `;
        card.onclick = () => openModal(product);
        productList.appendChild(card);
    });
}


function openModal(product) {
    modalImg.src = product.img;
    modalName.innerText = product.name;
    modalDesc.innerText = product.desc;
    modalPrice.innerText = product.price;

    const message = `Merhaba Ayliz! Moonlight sitemden "${product.name}" ürününü gördüm ve sipariş vermek istiyorum.`;
    modalWA.href = `https://wa.me/905439676661?text=${encodeURIComponent(message)}`;

    modal.style.display = "block";
    document.body.style.overflow = "hidden"; 
}

closeModal.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = (e) => {
    if (e.target == modal) closeModal.onclick();
}

window.onload = loadProducts;