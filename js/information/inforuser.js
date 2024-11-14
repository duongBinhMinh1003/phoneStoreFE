const user = JSON.parse(localStorage.getItem('user')); 
async function fetchUserData() {
    try {
        const response = await fetch(`http://localhost:8080/user/get-user?id=${user.tkId}`);
        
        if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu sản phẩm");
        
        const data = await response.json(); 
        console.log('data: ', data);
        localStorage.setItem('khachhang', JSON.stringify(data.data));
        const {maKH, hoTen, ngaySinh, gioiTinh, sdt, diaChi, email } = data.data;

        document.getElementById("full-name").value = hoTen;
        document.getElementById("birth-date").value = ngaySinh;
        
        // Handle gender selection
        if (gioiTinh) {
            const genderRadioButton = document.querySelector(`input[name="gender"][value="${gioiTinh}"]`);
            if (genderRadioButton) {
                genderRadioButton.checked = true;
            }
        }
        document.getElementById("taiKhoan").value = user.tenDangNhap;
        document.getElementById("matKhau").value = user.matKhau
        document.getElementById("phone-number").value = sdt;
        document.getElementById("address").value = diaChi;
        document.getElementById("email").value = email;
        
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}


fetchUserData();


async function updateCustomerInfo() {
    try {
        const user = JSON.parse(localStorage.getItem('user')); // Lấy user từ localStorage
        const response = await fetch(`http://localhost:8080/user/get-user?id=${user.tkId}`);
        const data = await response.json();

        if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu sản phẩm");

        console.log('data: ', data);

        const { maKH } = data.data;
        console.log(maKH);
        console.log(user.tkId);

        const matKhau = document.getElementById("matKhau").value;
        const fullName = document.getElementById("full-name").value;
        const birthDate = document.getElementById("birth-date").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const phoneNumber = document.getElementById("phone-number").value;
        const address = document.getElementById("address").value;
        const email = document.getElementById("email").value;

        // Cập nhật thông tin tài khoản
        let dataTaiKhoan = {
            tkId: user.tkId,
            matKhau: matKhau
        };

        const updateTaiKhoanResponse = await fetch('http://localhost:8080/user/update-taikhoan', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataTaiKhoan)
        });

        if (!updateTaiKhoanResponse.ok) {
            throw new Error('Lỗi khi cập nhật tài khoản');
        }

        const updateTaiKhoanData = await updateTaiKhoanResponse.json();
        

        // Cập nhật thông tin khách hàng
        let dataKhachHang = {
            maKH: maKH,
            hoTen: fullName,
            ngaySinh: birthDate,
            gioiTinh: gender,
            diaChi: address,
            sdt: phoneNumber,
            email: email
        };

        const updateKhachHangResponse = await fetch('http://localhost:8080/user/update-khachhang', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataKhachHang)
        });

        if (!updateKhachHangResponse.ok) {
            throw new Error('Lỗi khi cập nhật thông tin khách hàng');
        }

        const updateKhachHangData = await updateKhachHangResponse.json();
        alert("Cập nhật thành công"); // Thông báo thành công cho tạo người dùng

    } catch (error) {
        console.error("Error updating customer info:", error);
        alert('Đã xảy ra lỗi, vui lòng thử lại sau.');
    }
}








// $('.btn-submit').click(function () {
//     console.log("OK");
//     // Lấy dữ liệu từ các trường
//     let taiKhoanEl = document.getElementById("taikhoan").value;
//     let matKhauEl = document.getElementById("password").value;
//     let quyenEl = "kh";
//     let trangThaiEl = "on";
//     let nameEl = document.getElementById("name").value;
//     let ngaySinhEl = document.getElementById("ngaySinh").value;
//     let gioiTinhEl = document.querySelector('input[name="gioitinh"]:checked');
//     gioiTinhEl = gioiTinhEl ? gioiTinhEl.value : null;
//     let diaChiEl = document.getElementById("diaChi").value;
//     let phoneEl = document.getElementById("phone").value;
//     let emailEl = document.getElementById("email1").value;

//     // Chuẩn bị dữ liệu tài khoản
//     let data = {
//         tenDangNhap: taiKhoanEl,
//         matKhau: matKhauEl,
//         quyen: quyenEl,
//         trangThai: trangThaiEl,
//         email: emailEl,
//     };

//     // Gửi yêu cầu POST để tạo tài khoản
//     $.ajax({
//         url: 'http://localhost:8080/user/signup',
//         type: 'POST',
//         contentType: 'application/json',
//         data: JSON.stringify(data),
//         success: function (response) {
//             console.log('Success in signup: ', response);
//             alert(response.message); // Thông báo thành công cho đăng ký tài khoản

//             // Lấy tkId từ phản hồi và sử dụng cho yêu cầu tạo người dùng
//             let dataUser = {
//                 hoTen: nameEl,
//                 ngaySinh: ngaySinhEl,
//                 gioiTinh: gioiTinhEl,
//                 diaChi: diaChiEl,
//                 sdt: phoneEl,
//                 email: emailEl,
//                 trangThai: trangThaiEl,
//                 maTk: response.account.tkId ,
             
//             };

//             // Gửi yêu cầu POST để tạo người dùng
//             $.ajax({
//                 url: 'http://localhost:8080/user/post-user',
//                 type: 'POST',
//                 contentType: 'application/json',
//                 data: JSON.stringify(dataUser),
//                 success: function (response) {
//                     console.log('Success in post-user: ', response);
//                     alert(response.message); // Thông báo thành công cho tạo người dùng
//                 },
//                 error: function (xhr, status, error) {
//                     console.error('Error in post-user: ', error);
//                     if (xhr.status === 400) {
//                         alert(xhr.responseJSON.message);
//                     } else {
//                         alert('Đã xảy ra lỗi, vui lòng thử lại sau.');
//                     }
//                 }
//             });
//         },
//         error: function (xhr, status, error) {
//             console.error('Error in signup: ', error);
//             if (xhr.status === 400) {
//                 alert(xhr.responseJSON.message);
//             } else {
//                 alert('Đã xảy ra lỗi, vui lòng thử lại sau.');
//             }
//         }
//     });
// });