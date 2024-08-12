document.addEventListener('DOMContentLoaded', function() {
  let username = document.getElementById("username");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let btnLogin = document.querySelector(".btn-login");

  // Thêm thông tin tài khoản cố định cho người quản lý
  const adminAccount = {
      username: 'admin123',
      email: 'admin123@gmail.com',
      password: '1234'
  };

  btnLogin.addEventListener("click", (e) => {
      e.preventDefault();

      // Lấy thông tin người dùng nhập vào
      let user = {
          username: username.value,
          email: email.value,
          password: password.value,
      };

      // Kiểm tra xem người dùng đã nhập đầy đủ thông tin hay không
      if (!username.value || !email.value || !password.value) {
          alert("Vui lòng nhập đầy đủ thông tin");
          return;
      }

      // Kiểm tra xem thông tin đăng nhập có trùng khớp với tài khoản quản lý không
      if (user.username === adminAccount.username && user.email === adminAccount.email && user.password === adminAccount.password) {
          alert("Đăng nhập thành công!");
          window.location.href = "/HTML/admin.html"; // Chuyển hướng đến trang quản lý
      } else {
          alert("Đăng nhập thất bại");
      }
  });
});
