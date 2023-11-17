let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

// Mendapatkan elemen-elemen yang dibutuhkan
var content = document.getElementById("content"); // Elemen yang berisi teks yang lebih panjang
var btn = document.getElementById("btn"); // Elemen yang berisi tombol read more

// Membuat fungsi untuk menampilkan atau menyembunyikan teks
function toggleText() {
  // Mengecek apakah teks sedang ditampilkan atau tidak
  var displaySetting = content.style.display;

  // Jika teks sedang ditampilkan, maka sembunyikan teks dan ubah teks tombol menjadi read more
  if (displaySetting == "block") {
    content.style.display = "none";
    btn.innerHTML = "read more";
  }
  // Jika teks sedang disembunyikan, maka tampilkan teks dan ubah teks tombol menjadi read less
  else {
    content.style.display = "block";
    btn.innerHTML = "read less";
  }
}

// Menambahkan event listener untuk menjalankan fungsi ketika tombol diklik
btn.addEventListener("click", toggleText);
