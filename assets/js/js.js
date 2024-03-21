// fetch('https://crudcrud.com/api/d75611714b5440cd97898e1e76e2ee6e/produk')
// .then((response) => response.json())
// .then((data) => console.log(data));

let endpoint = 'https://crudcrud.com/api/b3d1ae54b0194e12aafec9ea8810d270/produk';
let konten = document.getElementById('konten');

fetch(endpoint)
    .then((response) => response.json())
    .then((res) => {
        let datas = res; // Di sini kita mengambil langsung respon dari API

        datas.forEach(element => {
            konten.innerHTML += `
                <div class="card">
                    <img src="${element.gambar}" alt="Produk" class="card-image">
                    <div class="card-content">
                        <h2 class="card-title">${element.nama}</h2> <!-- Menampilkan nama produk -->
                        <p class="card-description">${element.deskripsi}</p> <!-- Menampilkan deskripsi produk -->
                        <p class="card-price">Rp ${element.harga}</p> <!-- Menampilkan harga produk -->
                        <button class="card-button">Beli</button>
                    </div>
                </div>`;
            console.log(element);
        });
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
