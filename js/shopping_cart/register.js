let showEye = false;

let email = false;
let pass = false;
let ho = false;
let ten = false;
$(document).ready(function () {
  $(".btn-submit").click(function () {
    console.log("OK");
    // Lấy dữ liệu từ các trường
    let taiKhoanEl = document.getElementById("taikhoan").value;
    let matKhauEl = document.getElementById("password").value;
    let quyenEl = "kh";
    let trangThaiEl = "on";
    let nameEl = document.getElementById("name").value;
    let ngaySinhEl = document.getElementById("ngaySinh").value;
    let gioiTinhEl = document.querySelector('input[name="gioitinh"]:checked');
    gioiTinhEl = gioiTinhEl ? gioiTinhEl.value : null;
    let diaChiEl = document.getElementById("diaChi").value;
    let phoneEl = document.getElementById("phone").value;
    let emailEl = document.getElementById("email1").value;
    if (!taiKhoanEl) {
      alert("Vui lòng nhập tài khoản");
      return false;
    }
    if (!matKhauEl) {
      alert("Vui lòng nhập mật khẩu");
      return false;
    }
    if (!nameEl) {
      alert("Vui lòng nhập tên");
      return false;
    }
    if (!ngaySinhEl) {
      alert("Vui lòng nhập ngày sinh");
      return false;
    }
    if (!gioiTinhEl) {
      alert("Vui lòng chọn giới tính");
      return false;
    }
    if (!diaChiEl) {
      alert("Vui lòng nhập địa chỉ");
      return false;
    }
    if (!phoneEl) {
      alert("Vui lòng nhập số điện thoại");
      return false;
    }
    if (!emailEl) {
      alert("Vui lòng nhập email");
      return false;
    }
    let data = {
      tenDangNhap: taiKhoanEl,
      matKhau: matKhauEl,
      quyen: quyenEl,
      trangThai: trangThaiEl,
      email: emailEl,
    };

    // Gửi yêu cầu POST để tạo tài khoản
    $.ajax({
      url: "http://localhost:8080/user/signup",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(data),
      success: function (response) {
        console.log("Success in signup: ", response);
        alert("Đăng kí tài khoản thành công!"); // Thông báo thành công cho đăng ký tài khoản
        alert("Kiểm tra email của bạn để nhận mã khuyến mãi !");
        // Lấy tkId từ phản hồi và sử dụng cho yêu cầu tạo người dùng
        let dataUser = {
          hoTen: nameEl,
          ngaySinh: ngaySinhEl,
          gioiTinh: gioiTinhEl,
          diaChi: diaChiEl,
          sdt: phoneEl,
          email: emailEl,
          trangThai: trangThaiEl,
          maTk: response.account.tkId,
        };

        // Gửi yêu cầu POST để tạo người dùng
        $.ajax({
          url: "http://localhost:8080/user/post-user",
          type: "POST",
          contentType: "application/json",
          data: JSON.stringify(dataUser),
          success: function (response) {
            console.log("Success in post-user: ", response);
            window.location.href = "/html/home/login.html";
          },
          error: function (xhr, status, error) {
            console.error("Error in post-user: ", error);
            if (xhr.status === 400) {
              alert("Kiểm tra email của bạn để nhận mã khuyến mãi !");
            } else {
              alert("Đã xảy ra lỗi, vui lòng thử lại sau.");
            }
          },
        });
      },
      error: function (xhr, status, error) {
        console.error("Error in signup: ", error);
        if (xhr.status === 400) {
          alert(xhr.responseJSON.message);
        } else {
          alert("Đã xảy ra lỗi, vui lòng thử lại sau.");
        }
      },
    });
  });

  $("#email1")
    .focus(() => {
      $(".name-email1 span").addClass("spanEmail1");
    })
    .blur(() => {
      if ($("#email1").val().trim().length === 0) {
        $(".name-email1 span").removeClass("spanEmail1");
      }
    });

  $(".email-focus")
    .focus(() => {
      $(".name-email span").addClass("spanEmail");
    })
    .blur(() => {
      if ($("#taikhoan").val().trim().length === 0) {
        $(".name-email span").removeClass("spanEmail");
      }
    });

  $("#diaChi")
    .focus(() => {
      $(".name-diachi span").addClass("spandiachi");
    })
    .blur(() => {
      if ($("#diaChi").val().trim().length === 0) {
        $(".name-diachi span").removeClass("spandiachi");
      }
    });

  $("#phone")
    .focus(() => {
      $(".name-phone span").addClass("spanPhone");
    })
    .blur(() => {
      if ($("#phone").val().trim().length === 0) {
        $(".name-phone span").removeClass("spanPhone");
      }
    });

  $(".password")
    .focus(() => {
      $(".name-pass span").addClass("spanPassword");
    })
    .blur(() => {
      if ($("#password").val().trim().length === 0) {
        $(".name-pass span").removeClass("spanPassword");
      }
    });
  $(".showPass").click(() => {
    showEye = !showEye;
    if (showEye) {
      $(".password").attr("type", "text");
      $(".showPass").html(
        '<i class="fa fa-eye-slash" aria-hidden="true"></i> ẩn'
      );
    } else {
      $(".password").attr("type", "password");
      $(".showPass").html('<i class="fa fa-eye" aria-hidden="true"></i> hiện');
    }
  });
  $("#name")
    .focus(() => {
      $(".name-Name span").addClass("spanName");
    })
    .blur(() => {
      if ($("#name").val().trim().length === 0) {
        $(".name-Name span").removeClass("spanName");
      }
    });

  $("#lastName")
    .focus(() => {
      $(".name-firstName span").addClass("spanFirstName");
    })
    .blur(() => {
      if ($("#lastName").val().trim().length === 0) {
        $(".name-firstName span").removeClass("spanFirstName");
      }
    });
});

function falseRegex(id) {
  document.getElementById(id).style.borderBottom = "5px solid red";
}
function trueRegex(id) {
  document.getElementById(id).style.borderBottom = "5px solid green";
}
