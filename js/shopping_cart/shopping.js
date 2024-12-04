let carts = JSON.parse(localStorage.getItem("listCart"));
const kh = JSON.parse(localStorage.getItem("khachhang"));
let VOUCHER_LIST = [];
let priceVOUCHER = 0;

async function handleVoucher() {
  try {
    // Gọi API để lấy dữ liệu khuyến mãi
    const response = await fetch(
      "http://localhost:8080/phonestore/get-promotion"
    );
    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu khuyến mãi");

    const data = await response.json();
    const khuyenmai = data.data;
    console.log("Danh sách khuyến mãi:", khuyenmai);

    // Lọc và ánh xạ danh sách mã giảm giá
    VOUCHER_LIST = khuyenmai.map((item) => ({
      code: item.maKM,
      discount: item.mucGiam,
      status: item.trangThai,
    }));
    console.log("Danh sách mã giảm giá:", VOUCHER_LIST);
  } catch (error) {
    console.error("Lỗi khi gọi API khuyến mãi:", error);
    alert("Không thể tải khuyến mãi. Vui lòng thử lại sau!");
    return;
  }

  const voucher = document.getElementById("voucher").value.trim(); // Lấy mã giảm giá từ input
  if (voucher.length === 0) {
    alert('Vui lòng nhập mã - (Ví dụ: "provip")');
    return;
  }

  // Tìm mã giảm giá trong danh sách VOUCHER_LIST
  const foundVoucher = VOUCHER_LIST.find((item) => item.code === voucher);

  if (!foundVoucher) {
    alert("Mã giảm giá không đúng");
    return;
  }

  // Kiểm tra trạng thái của voucher
  if (foundVoucher.status === "off") {
    alert("Voucher đã hết hạn");
    return;
  }

  // Áp dụng mã giảm giá
  alert(
    `Áp dụng mã thành công! Giảm giá: ${foundVoucher.discount.toLocaleString()}đ`
  );

  // Lưu thông tin voucher vào localStorage
  priceVOUCHER = foundVoucher.discount;
  localStorage.setItem(
    "voucher",
    JSON.stringify({
      maKM: foundVoucher.code,
      discount: priceVOUCHER,
    })
  );

  renderCart(); // Cập nhật giỏ hàng
}

function compare(arr, key, price) {
  //not finded
  return arr.find((item) => item.maPB === key && item.price === price);
}
function getCountItem(arr, item, price) {
  return arr.filter((x) => x.maPB === item && x.price === price).length;
}
function deleteItem(maPB, price) {
  let indexRM = carts.findIndex(
    (item) => item.maPB == maPB && item.price == price
  );
  console.log("carts: ", carts);

  if (indexRM == -1) return;
  if (getCountItem(carts, maPB, price) === 1) {
    if (confirm("Bạn chắc chắn muốn bỏ sản phẩm này")) {
      carts.splice(indexRM, 1);
    }
  } else if (indexRM === 0) {
    carts.splice(1, 1);
  } else {
    carts.splice(indexRM, 1);
  }
  localStorage.setItem("listCart", JSON.stringify(carts));
  saveCartToDatabase(carts);
  renderCart();
}

function addItem(maPB, price) {
  let arrSetUnique = [];
  console.log("arrSetUnique: ", arrSetUnique);
  let carts = JSON.parse(localStorage.getItem("listCart"));
  carts.map((item) => {
    console.log("item: ", item);
    if (!compare(arrSetUnique, item.maPB, item.price)) {
      arrSetUnique.push(item);
    }
  });
  if (arrSetUnique[0] == undefined) {
    $(".payment__tableBody").text("Chưa có sản phẩm");
    $(".sum_payment").text("Chưa có sản phẩm");
    return;
  }
  arrSetUnique.forEach((item) => {
    let count = getCountItem(carts, item.maPB, item.price);
    const data = {
      maKH: kh.maKH,
      maPB: item.maPB,
      soLuong: count,
      donGia: item.price * count,
    };
  });
  saveCartToDatabase(carts);
  let itemAdd = carts.find((item) => item.maPB == maPB && item.price == price);
  carts.push(itemAdd);
  localStorage.setItem("listCart", JSON.stringify(carts));
  renderCart();
}

async function saveCartToDatabase(carts) {
  // Loại bỏ sản phẩm trùng lặp
  const arrSetUnique = [];
  carts.forEach((item) => {
    if (!compare(arrSetUnique, item.maPB, item.price)) {
      arrSetUnique.push(item);
    }
  });

  // Lấy thông tin khách hàng
  const kh = JSON.parse(localStorage.getItem("khachhang"));
  if (!kh) {
    alert("Không tìm thấy thông tin khách hàng. Vui lòng đăng nhập lại.");
    return;
  }

  // Chuẩn bị và gửi dữ liệu từng sản phẩm
  for (const item of arrSetUnique) {
    const count = getCountItem(carts, item.maPB, item.price);
    const data = {
      maKH: kh.maKH,
      maPB: item.maPB,
      soLuong: count,
      donGia: item.price * count,
    };
    console.log("data: ", data);

    try {
      // Gọi API để kiểm tra giỏ hàng có tồn tại sản phẩm chưa
      const checkResponse = await fetch(
        "http://localhost:8080/phonestore/check-cart",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ maKH: kh.maKH, maPB: item.maPB }),
        }
      );

      if (!checkResponse.ok) throw new Error("Lỗi khi kiểm tra giỏ hàng");

      const checkResult = await checkResponse.json();

      if (checkResult.exists) {
        // Nếu sản phẩm đã tồn tại, gọi API để cập nhật giỏ hàng
        const updateResponse = await fetch(
          "http://localhost:8080/phonestore/update-cart",
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          }
        );

        if (!updateResponse.ok) throw new Error("Lỗi khi cập nhật giỏ hàng");

        const updateResult = await updateResponse.json();
        console.log("Giỏ hàng đã được cập nhật:", updateResult);
      } else {
        // Nếu sản phẩm chưa tồn tại, gọi API để lưu giỏ hàng
        const saveResponse = await fetch(
          "http://localhost:8080/phonestore/save-cart",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          }
        );

        if (!saveResponse.ok)
          throw new Error("Lỗi khi lưu giỏ hàng vào cơ sở dữ liệu");

        const saveResult = await saveResponse.json();
        console.log("Dữ liệu giỏ hàng đã được lưu:", saveResult);
      }
    } catch (error) {
      console.error("Có lỗi khi xử lý giỏ hàng:", error);
      alert("Không thể lưu giỏ hàng. Vui lòng thử lại sau.");
    }
  }
  renderCart();
}

async function removeAll(maPB, price) {
  if (confirm("Bạn chắc chắn muốn bỏ tất cả sản phẩm này khỏi giỏ hàng?")) {
    // Lấy thông tin khách hàng từ localStorage
    const kh = JSON.parse(localStorage.getItem("khachhang"));
    if (!kh) {
      alert("Không tìm thấy thông tin khách hàng. Vui lòng đăng nhập lại.");
      return;
    }

    try {
      // Gọi API để xóa sản phẩm khỏi giỏ hàng
      const response = await fetch(
        "http://localhost:8080/phonestore/delete-cart",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ maPB, maKH: kh.maKH }),
        }
      );

      if (!response.ok) {
        throw new Error("Lỗi khi xóa sản phẩm khỏi giỏ hàng");
      }

      const result = await response.json();
      console.log("Sản phẩm đã được xóa khỏi giỏ hàng:", result);

      // Sau khi xóa thành công, gọi lại API để lấy danh sách giỏ hàng mới
      const cartResponse = await fetch(
        "http://localhost:8080/phonestore/get-cart",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ maKH: kh.maKH }),
        }
      );

      if (!cartResponse.ok) {
        throw new Error("Lỗi khi lấy giỏ hàng sau khi xóa sản phẩm.");
      }

      const cartResult = await cartResponse.json();
      console.log("Giỏ hàng mới: ", cartResult);

      // Cập nhật `localStorage` với giỏ hàng mới
      localStorage.setItem("listCart", JSON.stringify(cartResult.data));

      // Hiển thị lại giao diện giỏ hàng
      renderCart(cartResult.data);
    } catch (error) {
      console.error("Có lỗi khi xóa sản phẩm:", error);
      alert("Không thể xóa sản phẩm. Vui lòng thử lại sau.");
    }
  }
}

renderCart();
async function renderCart() {
  // Xóa dữ liệu hiện tại trong giao diện
  $(".payment__tableBody").empty();
  $(".sum_payment").empty();

  // Lấy thông tin khách hàng từ `localStorage`
  const kh = JSON.parse(localStorage.getItem("khachhang"));
  if (!kh) {
    $(".payment__tableBody").text("Chưa có sản phẩm");
    $(".sum_payment").text("Chưa có sản phẩm");
    alert("Không tìm thấy thông tin khách hàng. Vui lòng đăng nhập lại.");
    return;
  }

  try {
    // Gọi API lấy giỏ hàng
    const response = await fetch("http://localhost:8080/phonestore/get-cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ maKH: kh.maKH }),
    });

    if (!response.ok) throw new Error("Lỗi khi lấy giỏ hàng.");

    const result = await response.json();

    // Kiểm tra nếu giỏ hàng trống
    if (result.data.length === 0) {
      $(".payment__tableBody").text("Chưa có sản phẩm");
      $(".sum_payment").text("Chưa có sản phẩm");
      return;
    }

    let arrSetUnique = result.data;

    let totalAmount = 0; // Tổng tiền chưa trừ voucher

    // Hiển thị dữ liệu giỏ hàng
    arrSetUnique.forEach((item) => {
      let count = item.soLuong; // Số lượng sản phẩm từ API
      let price = item.maPB_phienbansp.giaGiam; // Giá sau giảm
      let subtotal = price * count; // Tổng tiền cho sản phẩm này

      totalAmount += subtotal; // Cộng dồn vào tổng tiền toàn giỏ hàng

      $(".payment__tableBody").append(
        `
            <tr>
                <td><a onclick="removeAll('${item.maPB}', ${
          item.donGia
        }); return false" href="#"><i class="fa fa-times" aria-hidden="true"></i></a></td>
                <td><img height="100" width="100"
                        src=${item.maPB_phienbansp.maSP_sanpham.hinhAnh}
                        alt="">
                </td>
                <td>
                    <h4>${item.maPB_phienbansp.maSP_sanpham.tenSP}</h4>
                    <p>
                        Mã phiên bản : ${item.maPB}<br>
                        Dung lượng: ${item.maPB_phienbansp?.ROM || "N/A"}GB<br>
                        Tình trạng: Mới<br>
                        Màu sắc: ${item.maPB_phienbansp?.mauSac || "N/A"}
                    </p>
                </td>
                <td class="nav__pc"><h5>${convertMoney(price)}</h5></td>
                <td class="nav__pc">
                    <div class="payment__tableBody--count">
                    <span>${count}</span>
                    </div>
                </td>
                <td><h5>${convertMoney(subtotal)}</h5></td>
            </tr>
            `
      );
    });

    // Áp dụng giảm giá từ voucher
    const finalAmount = totalAmount - priceVOUCHER;

    // Hiển thị tổng giỏ hàng
    $(".sum_payment").append(
      `<h3 class="sum_payment--title">Tổng giỏ hàng</h3>
            <div class="sum__payment--detail">
                <p>Tạm tính</p>
                <h4>${convertMoney(totalAmount)}</h4>
                <p>Giảm giá</p>
                <h4>${convertMoney(priceVOUCHER)}</h4>
                <hr>
                <p>Tổng</p>
                <h3>${convertMoney(finalAmount)}</h3>
            </div>
        <a href="/html/shopping__cart/shopping_cart_2.html" class="btn btn-danger">Thanh toán ngay</a>`
    );
  } catch (error) {
    console.error("Có lỗi khi tải giỏ hàng:", error);
    alert("Không thể lấy dữ liệu giỏ hàng. Vui lòng thử lại sau.");
    $(".payment__tableBody").text("Chưa có sản phẩm");
    $(".sum_payment").text("Chưa có sản phẩm");
  }
}

// Hàm tính tổng giỏ hàng từ API
async function sumNotVoucher(cartItems) {
  let sum = 0;
  cartItems.forEach((item) => {
    sum += item.donGia * item.soLuong; // Cộng dồn giá trị các sản phẩm trong giỏ hàng
  });
  return sum;
}
