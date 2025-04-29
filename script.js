// Cek jika username tersimpan di localStorage saat halaman dimuat
window.onload = function () {
    const rememberedUsername = localStorage.getItem("rememberedUsername");
    if (rememberedUsername) {
      document.getElementById("username").value = rememberedUsername;
      document.getElementById("remember").checked = true;
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";

    }
  };
  
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah form dari submit default
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("remember").checked;
  
    // Daftar pengguna dan password yang benar (hardcoded untuk contoh)
    const validUsers = [
      { username: "Indah Fadilah", password: "pacarnyakurnia" },
      { username: "user2", password: "pass2" },
      { username: "user3", password: "pass3" },
    ];
  
    // Cek apakah username dan password cocok
    const user = validUsers.find(
      (u) => u.username === username && u.password === password
    );
  
    if (user) {
      // Login berhasil, simpan data username ke localStorage
      localStorage.setItem("loggedInUsername", username);
  
      // Simpan "Ingat Saya" jika dicentang
      if (remember) {
        localStorage.setItem("rememberedUsername", username);
      } else {
        localStorage.removeItem("rememberedUsername");
      }
  
      // Redirect ke halaman beranda setelah login berhasil
      window.location.href = "beranda.html";
    } else {
      // Jika login gagal, tampilkan pesan error
      document.getElementById("error-message").style.display = "block";
    }
  });
  
  