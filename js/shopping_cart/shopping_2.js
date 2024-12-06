$(document).ready(async function () {
  const priceVOUCHER = JSON.parse(localStorage.getItem("voucher")) || {
    discount: 0,
  };
  console.log("priceVOUCHER: ", priceVOUCHER);

  // Hàm gọi API lấy giỏ hàng
  const fetchCart = async () => {
    try {
      const kh = JSON.parse(localStorage.getItem("khachhang")); // Lấy thông tin khách hàng từ localStorage
      if (!kh) {
        alert("Không tìm thấy thông tin khách hàng. Vui lòng đăng nhập lại.");
        return [];
      }

      const response = await fetch(
        "http://localhost:8080/phonestore/get-cart",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ maKH: kh.maKH }),
        }
      );

      if (!response.ok) throw new Error("Lỗi khi gọi API get-cart");

      const result = await response.json();
      console.log("result: ", result.data);
      return result.data || []; // Trả về danh sách giỏ hàng từ server
    } catch (error) {
      console.error("Lỗi khi gọi API giỏ hàng:", error);
      alert("Không thể lấy dữ liệu giỏ hàng. Vui lòng thử lại sau.");
      return [];
    }
  };

  // Lấy danh sách giỏ hàng từ API
  let carts = await fetchCart();

  // Tính tổng tiền không áp dụng voucher
  const calculateTotal = () =>
    carts.reduce(
      (sum, item) => sum + item.soLuong * item.maPB_phienbansp.giaGiam,
      0
    );

  const total = calculateTotal();
  const finalTotal = total - priceVOUCHER.discount;

  // Hàm tạo danh sách sản phẩm
  const createProductElements = () =>
    carts
      .map(
        (item) =>
          `
              <div>
                  <h4>${item.maPB_phienbansp.maSP_sanpham.tenSP}</h4>
                  <p class="text-muted">Dung lượng: ${
                    item.maPB_phienbansp.ROM
                  }</p>
                  <p class="text-muted">Giá: ${convertMoney(
                    item.maPB_phienbansp.giaGiam
                  )}</p>
                  <p class="text-muted">Số lượng: ${item.soLuong}</p>
                  <h5 class="text-muted">${convertMoney(
                    item.soLuong * item.maPB_phienbansp.giaGiam
                  )}</h5>
              </div>
          `
      )
      .join("");

  // Cập nhật chi tiết thanh toán
  $(".sum_payment")
    .empty()
    .append(
      `
      <h3 class="sum_payment--title">Đơn hàng</h3>
          <div class="sum__payment--detail">
              ${createProductElements()}
              <hr>
              <p>Giảm giá</p>
              <h4 class="text-end">${convertMoney(priceVOUCHER.discount)}</h4>
              <p>Tổng</p>
              <h3 class="text-end">${convertMoney(finalTotal)}</h3>
              <div class="howpayment">
                  <label>
                      <input   type="radio" name="pay" checked="checked">Chuyển khoản ngân hàng</label>
                      <p>Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi. Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung thanh toán. Đơn hàng sẽ được giao sau khi tiền đã chuyển.</p>
                      <p>Vietinbank: 1929429924924 - P T C</p>    
                  <label>
                      <input type="radio" name="pay">Thanh toán khi nhận hàng</label>
              </div>
          </div>
      <a onclick="thanhToan(${finalTotal})" class="btn btn-danger">Thanh toán ngay</a>
  
      `
    );

  // Thêm chi tiết đơn hàng vào giao diện
  $(".detail").append(
    `
    <div class="sum__payment--detail">
          <p>Mã đơn: DH001</p>
          <div class="detail_list">
              ${createProductElements()}
          </div>
          <hr>
          <p>Giảm giá</p>
              <h4>${convertMoney(priceVOUCHER.discount)}</h4>
          <h4>Tổng</h4>
          <h3>${convertMoney(finalTotal)}</h3>
          <h2 class="text-danger">Đã thanh toán</h2>
          <a href="/index.html" class="btn btn-default"><b class="cart_end text-success">Tiếp tục giao dịch khác</b></a>
       </div>
    `
  );

  // Xóa giỏ hàng khi kết thúc giao dịch
  $(".cart_end").click(() => {
    const kh = JSON.parse(localStorage.getItem("khachhang"));

    if (!kh) {
      console.error("Không tìm thấy thông tin khách hàng trong localStorage");
      return; // Ngừng thực hiện nếu không có thông tin khách hàng
    }

    const maKH = kh.maKH; // Lấy mã khách hàng từ thông tin đã lưu trong localStorage

    // Hiển thị thông báo đang xử lý
    console.log("Đang xóa giỏ hàng cho mã khách hàng:", maKH);

    // Gọi API để xóa giỏ hàng
    fetch("http://localhost:8080/phonestore/delete-cartkh", {
      method: "POST", // Hoặc PUT nếu API yêu cầu
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        maKH: maKH, // Gửi mã khách hàng trong request body
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Có lỗi xảy ra khi kết nối tới API"); // Kiểm tra lỗi nếu phản hồi không hợp lệ
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Có lỗi khi gọi API:", error);
        // Thông báo cho người dùng khi gặp lỗi kết nối API
        alert("Có lỗi xảy ra. Vui lòng kiểm tra kết nối và thử lại.");
      });

    // Xóa voucher trong localStorage
    localStorage.setItem("voucher", 0);
  });

  // Xử lý khi thay đổi phương thức thanh toán
  $("input[name='pay']").change(() => {
    console.log($("input[name='pay']:checked").val());
  });
});
// Thanh toan
// async function thanhToan(price) {
//   // Lấy tất cả các radio button với name là 'pay'
//   let paymentMethods = document.getElementsByName("pay");
//   let selectedPayment = "";

//   // Lặp qua tất cả các radio button để kiểm tra cái nào được chọn
//   for (let i = 0; i < paymentMethods.length; i++) {
//     if (paymentMethods[i].checked) {
//       selectedPayment = paymentMethods[i].parentNode.textContent.trim();
//       console.log("Phương thức thanh toán đã chọn:", selectedPayment);
//       break;
//     }
//   }

//   // Kiểm tra nếu không có phương thức thanh toán được chọn
//   if (!selectedPayment) {
//     console.log("Chưa chọn phương thức thanh toán.");
//     return;
//   }

//   const kh = JSON.parse(localStorage.getItem("khachhang"));
//   if (!kh) {
//     console.error("Không tìm thấy thông tin khách hàng.");
//     return;
//   }

//   // Dữ liệu gửi đi khi thanh toán
//   let dataDonHang = {
//     diaChiNhan: kh.diaChi,
//     tongTien: price,
//     httt: selectedPayment, // Phương thức thanh toán đã chọn
//     maKH: kh.maKH,
//   };

//   console.log("Dữ liệu thanh toán:", dataDonHang);

//   // Gọi API để thêm đơn hàng
//   try {
//     const response = await fetch(
//       "http://localhost:8080/phonestore/add-donhang",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(dataDonHang), // Gửi dữ liệu đơn hàng dưới dạng JSON
//       }
//     );

//     if (!response.ok) throw new Error("Lỗi khi gọi API add-donhang");

//     const result = await response.json();
//     console.log("Kết quả thêm đơn hàng: ", result);

//     // Xử lý kết quả từ API (ví dụ: chuyển hướng đến trang thành công)
//     if (result.success) {
//       alert("Đơn hàng đã được tạo thành công!");
//       window.location.href = "/html/shopping__cart/shopping_cart_3.html"; // Chuyển hướng đến trang sau khi thanh toán
//     } else {
//       alert("Có lỗi xảy ra khi tạo đơn hàng. Vui lòng thử lại.");
//     }
//   } catch (error) {
//     console.error("Lỗi khi gọi API add-donhang:", error);
//     alert("Không thể tạo đơn hàng. Vui lòng thử lại sau.");
//   }
//   // Gọi API để lấy giỏ hàng
//   const fetchCart = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:8080/phonestore/get-cart",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ maKH: kh.maKH }),
//         }
//       );

//       if (!response.ok) throw new Error("Lỗi khi gọi API get-cart");

//       const result = await response.json();
//       return result.data || [];
//     } catch (error) {
//       console.error("Lỗi khi gọi API giỏ hàng:", error);
//       alert("Không thể lấy dữ liệu giỏ hàng. Vui lòng thử lại sau.");
//       return [];
//     }
//   };

//   // Lấy giỏ hàng từ API
//   const carts = await fetchCart();
//   console.log("carts: ", carts);
//   if (!carts.length) {
//     console.log("Giỏ hàng trống.");
//     return;
//   }

//   // Duyệt qua từng sản phẩm trong giỏ hàng và gọi hàm addChiTietDonHang
//   carts.forEach((item) => {
//     let dataChiTietDonHang = {
//       maPB: item.maPB_phienbansp.maPB,
//       giaBan: item.maPB_phienbansp.giaGiam,
//     };

//     // Gọi hàm addChiTietDonHang để thêm chi tiết đơn hàng
//     addChiTietDonHang(dataChiTietDonHang);
//   });
// }

// function addChiTietDonHang(data) {
//   console.log("Đang thêm chi tiết đơn hàng: ", data);

//   // Gọi API để lấy chi tiết sản phẩm
//   fetch("http://localhost:8080/phonestore/get-ctspbyid", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ maPB: data.maPB }), // Đúng cấu trúc body
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Lỗi khi gọi API get-ctspbyid");
//       }
//       return response.json();
//     })
//     .then((result) => {
//       // Kiểm tra nếu dữ liệu trả về thành công và có danh sách chi tiết sản phẩm
//       if (result.success && result.data && Array.isArray(result.data)) {
//         // Sử dụng forEach để lặp qua danh sách soSeri
//         result.data.forEach((item) => {
//           console.log("Số Seri:", item.soSeri);

//           // Chuẩn bị dữ liệu cho API add-chitietdonhang
//           let dataChiTietDonHang = {
//             soSeri: item.soSeri,
//             giaBan: data.giaBan,
//             maPB: data.maPB,
//           };

//           console.log("dataChiTietDonHang: ", dataChiTietDonHang);

//           // Gọi API để thêm chi tiết đơn hàng
//           fetch("http://localhost:8080/phonestore/add-chitietdonhang", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(dataChiTietDonHang),
//           })
//             .then((response) => {
//               if (!response.ok) {
//                 throw new Error("Lỗi khi gọi API add-chitietdonhang");
//               }
//               return response.json();
//             })
//             .then((addResult) => {
//               console.log(
//                 `Chi tiết đơn hàng với số seri ${item.soSeri} đã được thêm thành công: `,
//                 addResult
//               );
//             })
//             .catch((error) => {
//               console.error(
//                 `Lỗi khi thêm chi tiết đơn hàng với số seri ${item.soSeri}: `,
//                 error
//               );
//             });
//         });
//       } else {
//         console.error("Dữ liệu không hợp lệ hoặc không có chi tiết sản phẩm.");
//       }
//     })
//     .catch((error) => {
//       console.error("Lỗi khi lấy chi tiết sản phẩm:", error);
//     });
// }
async function thanhToan(price) {
  try {
    // 1. Lấy phương thức thanh toán
    let paymentMethods = document.getElementsByName("pay");
    let selectedPayment = Array.from(paymentMethods)
      .find((method) => method.checked)
      ?.parentNode.textContent.trim();
    if (!selectedPayment) {
      alert("Vui lòng chọn phương thức thanh toán!");
      return;
    }

    // 2. Kiểm tra thông tin khách hàng
    const kh = JSON.parse(localStorage.getItem("khachhang"));
    if (!kh) {
      alert("Không tìm thấy thông tin khách hàng. Vui lòng đăng nhập lại.");
      return;
    }
    const priceVOUCHER = JSON.parse(localStorage.getItem("voucher"));
    // 3. Gửi đơn hàng lên API
    let dataDonHang = {
      diaChiNhan: kh.diaChi,
      tongTien: price,
      httt: selectedPayment,
      maKH: kh.maKH,
      maKM: priceVOUCHER.maKM,
    };
    const donHangResponse = await fetch(
      "http://localhost:8080/phonestore/add-donhang",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataDonHang),
      }
    );
    if (!donHangResponse.ok) throw new Error("Không thể thêm đơn hàng.");
    const donHangResult = await donHangResponse.json();
    if (!donHangResult.success) throw new Error("Thêm đơn hàng thất bại.");

    alert("Đơn hàng đã được tạo thành công!");

    // 4. Lấy giỏ hàng từ API
    const cartResponse = await fetch(
      "http://localhost:8080/phonestore/get-cart",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ maKH: kh.maKH }),
      }
    );
    if (!cartResponse.ok) throw new Error("Không thể lấy giỏ hàng.");
    const cartResult = await cartResponse.json();
    const carts = cartResult.data || [];
    if (!carts.length) {
      alert("Giỏ hàng trống. Không thể tạo chi tiết đơn hàng.");
      return;
    }

    // 5. Duyệt qua giỏ hàng và thêm chi tiết đơn hàng
    for (let item of carts) {
      const chiTietResponse = await fetch(
        "http://localhost:8080/phonestore/get-ctspbyid",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ maPB: item.maPB_phienbansp.maPB }),
        }
      );
      if (!chiTietResponse.ok)
        throw new Error("Không thể lấy chi tiết sản phẩm.");
      const chiTietResult = await chiTietResponse.json();

      if (
        chiTietResult.success &&
        chiTietResult.data &&
        Array.isArray(chiTietResult.data)
      ) {
        for (let soSeriItem of chiTietResult.data) {
          let dataChiTietDonHang = {
            soSeri: soSeriItem.soSeri,
            giaBan: item.maPB_phienbansp.giaGiam,
            maPB: item.maPB_phienbansp.maPB,
          };

          const addChiTietResponse = await fetch(
            "http://localhost:8080/phonestore/add-chitietdonhang",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(dataChiTietDonHang),
            }
          );
          if (!addChiTietResponse.ok) {
            console.error(
              `Thêm chi tiết đơn hàng thất bại với số seri ${soSeriItem.soSeri}`
            );
            continue;
          }
          console.log(
            `Chi tiết đơn hàng với số seri ${soSeriItem.soSeri} đã được thêm.`
          );
        }
      } else {
        console.error("Không có chi tiết sản phẩm hợp lệ.");
      }
    }

    // 6. Chuyển hướng sau khi hoàn tất
    window.location.href = "/html/shopping__cart/shopping_cart_3.html";
  } catch (error) {
    console.error("Lỗi khi thanh toán:", error);
    alert("Có lỗi xảy ra khi thanh toán. Vui lòng thử lại sau.");
  }
}
