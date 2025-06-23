function gantiTeks() {
  const judul = document.getElementById("judul");
  if (judul.innerText === "Halo, Selamat Datang!") {
    judul.innerText = "Selamat Mendengarkan Musik!";
  } else {
    judul.innerText = "Halo, Selamat Datang!";
  }
}