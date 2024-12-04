let showEye = false;
let email = false;
const user = JSON.parse(localStorage.getItem("user"));
/* localStorage.getItem('account')| */
// document.getElementById('email').onkeyup = () => {
//     let patMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
//     let resMail = patMail.test(document.getElementById('email').value.trim())
//     if(resMail) {
//         trueRegex('email')
//         email = true
//     }
//     else {
//         falseRegex('email')
//         email = false
//     }
//     if(!email) {
//         $('.error').text('Vui lòng nhập đúng email')
//     } else {
//         $('.error').text('')
//     }
// }
// function falseRegex(id) {
//     document.getElementById(id).style.borderBottom =  '5px solid red'
// }
// function trueRegex(id) {
//     document.getElementById(id).style.borderBottom =  '5px solid green'
// }

if (!user) {
  $(document).ready(function () {
    $(".btn-submit").click(function () {
      // Lấy giá trị từ các ô input
      const emailEl = document.getElementById("email").value;
      const passwordEl = document.getElementById("password").value;

      // Kiểm tra nếu các trường còn trống
      if (!emailEl || !passwordEl) {
        alert("Vui lòng điền đầy đủ các thông tin.");
        return;
      }

      // Chuẩn bị dữ liệu để gửi
      const data = {
        tenDangNhap: emailEl, // Tên đăng nhập
        matKhau: passwordEl, // Mật khẩu
      };

      // Gọi API đăng nhập
      $.ajax({
        url: "http://localhost:8080/user/login",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (response) {
          // Kiểm tra đăng nhập thành công

          localStorage.setItem("user", JSON.stringify(response)); // Lưu thông tin người dùng vào localStorage

          // Gọi API để lấy thông tin người dùng trước khi chuyển trang
          const user = JSON.parse(localStorage.getItem("user"));
          $.ajax({
            url: `http://localhost:8080/user/get-user?id=${user.tkId}`,
            type: "GET",
            success: function (userInfo) {
              // Lưu thông tin khách hàng vào localStorage
              console.log("Thông tin khách hàng: ", userInfo);
              localStorage.setItem("khachhang", JSON.stringify(userInfo.data));

              // Sau khi lưu thông tin khách hàng, chuyển hướng dựa trên quyền
              if (response.trangThai == "on") {
                // Kiểm tra trạng thái tài khoản trước
                if (response.quyen == "ql") {
                  window.location.href = "/admin.html"; // Chuyển đến trang quản lý
                } else if (response.quyen == "nv") {
                  window.location.href = "/nhanvien.html"; // Chuyển đến trang nhân viên
                } else {
                  window.location.href = "/index.html"; // Trang chủ người dùng
                }
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Tài khoản của bạn đã bị khoá !",
                  footer: '<a href="#">Why do I have this issue?</a>',
                });
              }
            },
            error: function (xhr, status, error) {
              console.error("Error getting user info: ", error);
              alert("Không thể lấy thông tin người dùng.");
            },
          });
        },
        error: function (xhr, status, error) {
          console.error("Error: ", error);
          alert("Tài khoản hoặc mật khẩu không chính xác");
        },
      });
    });

    $(".text-Email-name")
      .focus(() => {
        $(".before-email span").addClass("spanEmail");
      })
      .blur(() => {
        if ($("#email").val().trim().length === 0) {
          $(".before-email span").removeClass("spanEmail");
        }
      });

    $(".text-password-name")
      .focus(() => {
        $(".before-password span").addClass("spanPassword");
      })
      .blur(() => {
        if ($("#password").val().trim().length === 0) {
          $(".before-password span").removeClass("spanPassword");
        }
      });

    let showEye = false;
    $(".showPass").click(() => {
      showEye = !showEye;
      if (showEye) {
        $(".text-password-name").attr("type", "text");
        $(".showPass").html(
          '<i class="fa fa-eye-slash" aria-hidden="true"></i> ẩn'
        );
      } else {
        $(".text-password-name").attr("type", "password");
        $(".showPass").html(
          '<i class="fa fa-eye" aria-hidden="true"></i> hiện'
        );
      }
    });
  });
} else {
  window.location.href = "/index.html";
}
// const login = () => {
// emailEl = document.getElementById("email").value;
// console.log('emailEl: ', emailEl);
// passwordEl = document.getElementById("password").value;
// console.log('passwordEl: ', passwordEl);
// if(emailEl == "duongbinhminh" && passwordEl == "duongbinhminh"){
// window.location.href = '/admin.html'
// }
// }
