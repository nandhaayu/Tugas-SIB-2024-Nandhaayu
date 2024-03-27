let endpoint = 'https://fakestoreapi.com/products';
let konten = document.getElementById('konten');

fetch(endpoint)
    .then((response) => response.json())
    .then((res) => {
        let datas = res; // Di sini kita mengambil langsung respon dari API

        datas.forEach(element => {
            konten.innerHTML += `
                <div class="card">
                    <img src="${element.image}" alt="Produk" class="card-image">
                    <div class="card-content">
                        <h2 class="card-title">${element.title}</h2> <!-- Menampilkan nama produk -->
                        <p class="card-description">${element.description}</p> <!-- Menampilkan deskripsi produk -->
                        <p class="card-price">Rp ${element.price}</p> <!-- Menampilkan harga produk -->
                        <button class="card-button">Beli</button>
                    </div>
                </div>`;
            console.log(element);
        });
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });

    function toggleMenu() {
        var navList = document.getElementById("nav-list");
        var logo = document.querySelector("nav img"); // Menambahkan pemilihan elemen logo
    
        if (navList.style.display === "block") {
            navList.style.display = "none";
            logo.style.display = "block"; // Menampilkan kembali logo saat menu disembunyikan
            document.querySelector('.nav-toggle').innerHTML = '☰';
        } else {
            navList.style.display = "block";
            logo.style.display = "none"; // Menyembunyikan logo saat menu ditampilkan
            document.querySelector('.nav-toggle').innerHTML = '✖';
        }
    }
    
  
    
    