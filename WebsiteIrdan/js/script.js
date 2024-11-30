// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan menu
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//ketika tombol hire me ditekan
document.getElementById("cta-hire-me").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// Fungsi untuk membuka modal
function openModal(img) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  var captionText = document.getElementById("caption");

  // Menampilkan modal
  modal.style.display = "block";

  // Menetapkan gambar yang diklik ke dalam modal
  modalImg.src = img.src;

  // Menetapkan caption gambar (ambil dari alt text)
  captionText.innerHTML = img.alt;
}

// Fungsi untuk menutup modal
function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// Menutup modal jika area luar gambar diklik
window.onclick = function(event) {
  var modal = document.getElementById("imageModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// mengambil tombol
let mybutton = document.getElementById("myBtn");

//ketika menscroll 20px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none ";
  }
}

//ketika menekan tombol top
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

// pop up
function validateForm(event) {
  event.preventDefault();  

  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const nomor = document.getElementById('nomor').value;

  if (nama && email && nomor) {
    alert('Pesan Anda Berhasil Dikirim');
    event.target.reset();
  } else {
    alert('Harap lengkapi semua kolom!');
  }
  return false; 
}



