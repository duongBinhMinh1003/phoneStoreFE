let arrSetUnique = [];

const getChiTietByMaPB = async (maPB) => {
  try {
    const response = await fetch(
      `http://localhost:8080/phonestore/get-ctbymapb/${maPB}`
    );
    const data = await response.json();
    return data.data.soSeri; // Trả về dữ liệu chi tiết sản phẩm
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    return "Lỗi API"; // Xử lý khi có lỗi
  }
};

$(document).ready(async function () {
  let hinhThucThanhToan = $("input[name='pay']:checked").val(); // Lấy giá trị mặc định ban đầu

  $("input[name='pay']").change(function () {
    // Cập nhật giá trị hình thức thanh toán khi có thay đổi
    hinhThucThanhToan = $("input[name='pay']:checked").val();
    console.log("Hình thức thanh toán đã chọn: " + hinhThucThanhToan);
  });
  const priceVOUCHER = localStorage.getItem("voucher");

  const totalAmount = sumNotVoucher() - priceVOUCHER;
  console.log("totalAmount: ", totalAmount);

  // Lưu tổng tiền vào localStorage
  localStorage.setItem("totalAmount", totalAmount);
  const kh = JSON.parse(localStorage.getItem("khachhang"));
  console.log("kh: ", kh);
  let diaChiNhan = kh.diaChi;
  let tongTien = totalAmount;
  let maKH = kh.maKH;

  const data = {
    diaChiNhan,
    tongTien,
    maKH,
    hinhThucThanhToan, // Gắn hình thức thanh toán vào dữ liệu
  };

  carts.map((item) => {
    if (!compare(arrSetUnique, item.maSP, item.price)) {
      arrSetUnique.push(item);
    }
  });

  let elements = async () => {
    let elementsHTML = "";
    for (let item of arrSetUnique) {
      const chiTiet = await getChiTietByMaPB(item.memory.maPB);
      const serialNumber = chiTiet || "Chưa có số Seri"; // Kiểm tra giá trị trả về từ API

      elementsHTML += `
        <div>
          <h4>${item.tenSP}</h4>
          <p class="text-muted">Mã phiên bản: ${item.memory.maPB} </p>
          <p class="text-muted">Số Seri: ${serialNumber}</p>
          <p class="text-muted">Dung lượng: ${item.memory.ROM} GB</p>
          <p class="text-muted">Giá: ${convertMoney(item.price)}</p>
          <p class="text-muted">Số lượng: ${getCountItem(
            carts,
            item.maSP,
            item.price
          )}</p>
          <h5 class="text-muted">${convertMoney(
            item.price * getCountItem(carts, item.maSP, item.price)
          )}</h5>
        </div>
      `;
    }
    return elementsHTML;
  };

  const cartSummary = await elements(); // Chờ cho phần tử HTML được tạo ra

  $(".sum_payment").empty().append(`
      <h3 class="sum_payment--title">Đơn hàng</h3>
      <div class="sum__payment--detail">
        ${cartSummary}
        <hr>
        <p>Giảm giá</p>
        <h4 class="text-end">${convertMoney(Number(priceVOUCHER))}</h4>
        <p>Tổng</p>
        <h3 class="text-end">${convertMoney(totalAmount)}</h3>
        <div class="howpayment">
          <label><input type="radio" name="pay" value="bank" checked="checked">Chuyển khoản ngân hàng</label>
          <p>Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi. Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung thanh toán. Đơn hàng sẽ đươc giao sau khi tiền đã chuyển.</p>
          <p>MB bank: 0355578938 - DUONG BINH MINH</p>    

          <label><input type="radio" name="pay" value="cod">Trả tiền mặt khi nhận hàng</label>
        </div>
      </div>
      <a onclick="thanhToan()" class="btn btn-danger">Thanh toán ngay</a>
      <a href="/html/shopping__cart/shopping_cart_3.html" class="btn btn-danger btn-sm">Bỏ qua nếu test</a>
    `);

  getRandom = () => "A194" + Math.ceil(Math.random() * 100);

  $(".detail").append(`
    <div class="sum__payment--detail">
      <p>Mã đơn: ${getRandom()}</p>
      <div class="detail_list">
        ${cartSummary}
      </div>
      <hr>
      <p>Giảm giá</p>
      <h4>${convertMoney(Number(priceVOUCHER))}</h4>
      <h4>Tổng</h4>
      <h3>${convertMoney(totalAmount)}</h3>
      <h2 class="text-danger">Đã thanh toán</h2>
      <a href="/index.html" class="btn btn-default "><b class="cart_end text-success">Tiếp tục giao dịch khác</b></a>
    </div>
  `);

  $(".cart_end").click(() => {
    carts = [];
    localStorage.setItem("listCart", JSON.stringify(carts));
    localStorage.setItem("voucher", 0);
  });
});
// Hàm xử lý khi nhấn nút Thanh toán
async function thanhToan() {
  const kh = JSON.parse(localStorage.getItem("khachhang"));
  const priceVOUCHER = localStorage.getItem("voucher");
  const totalAmount = sumNotVoucher() - priceVOUCHER;
  const diaChiNhan = kh.diaChi;
  const tongTien = totalAmount;
  const maKH = kh.maKH;
  const hinhThucThanhToan = $("input[name='pay']:checked").val(); // Lấy hình thức thanh toán hiện tại

  // Danh sách sản phẩm kèm số Seri và mã phiên bản
  let danhSachSanPham = [];

  // Duyệt qua các sản phẩm trong arrSetUnique và lấy chi tiết
  for (let item of arrSetUnique) {
    const serialNumber = await getChiTietByMaPB(item.memory.maPB); // Lấy số Seri từ API
    danhSachSanPham.push({
      tenSP: item.tenSP,
      maPB: item.memory.maPB, // Mã phiên bản
      serialNumber: serialNumber || "Chưa có số Seri", // Nếu không có dữ liệu trả về
      price: item.price,
      soLuong: getCountItem(carts, item.maSP, item.price), // Số lượng sản phẩm
    });
  }

  // Tạo đối tượng data chứa toàn bộ thông tin
  const data = {
    diaChiNhan,
    tongTien,
    maKH,
    hinhThucThanhToan,
    danhSachSanPham, // Thêm danh sách sản phẩm vào data
  };

  // Log dữ liệu ra console
  console.log("Dữ liệu thanh toán:", data);

  // Gửi dữ liệu tới API (nếu cần)
  // fetch("API_URL", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // }).then(response => response.json())
  //   .then(responseData => {
  //     console.log("Phản hồi từ server:", responseData);
  //   }).catch(error => {
  //     console.error("Lỗi khi gửi dữ liệu:", error);
  //   });
}
