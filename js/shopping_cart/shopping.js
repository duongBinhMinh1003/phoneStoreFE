const VOUCHER = "provip";
let priceVOUCHER = 0;
let carts = JSON.parse(localStorage.getItem("listCart"));

carts.maSP;
function handleVoucher() {
  let voucher = document.getElementById("voucher").value;
  if (voucher.trim().length == 0) {
    alert('Vui lòng nhập mã - (Voucher: "provip")');
  } else {
    if (voucher !== VOUCHER) {
      alert("Mã giảm giá không đúng");
    } else {
      alert("Áp dụng mã thành công");
      priceVOUCHER = 1000000;
    }
  }
  localStorage.setItem("voucher", priceVOUCHER);
  renderCart();
}

function compare(arr, key, price) {
  //not finded
  return arr.find((item) => item.maSP === key && item.price === price);
}
function getCountItem(arr, item, price) {
  return arr.filter((x) => x.maSP === item && x.price === price).length;
}
function deleteItem(maSP, price) {
  let indexRM = carts.findIndex(
    (item) => item.maSP == maSP && item.price == price
  );
  console.log("carts: ", carts);

  if (indexRM == -1) return;
  if (getCountItem(carts, maSP, price) === 1) {
    if (confirm("Bạn chắc chắn muốn bỏ sản phẩm này")) {
      carts.splice(indexRM, 1);
    }
  } else if (indexRM === 0) {
    carts.splice(1, 1);
  } else {
    carts.splice(indexRM, 1);
  }
  localStorage.setItem("listCart", JSON.stringify(carts));
  renderCart();
}
function addItem(maSP, price) {
  let itemAdd = carts.find((item) => item.maSP == maSP && item.price == price);
  carts.push(itemAdd);
  localStorage.setItem("listCart", JSON.stringify(carts));
  renderCart();
}
function removeAll(maSP, price) {
  if (confirm("Bạn chắc chắn muốn bỏ sản phẩm này")) {
    console.log(carts);

    carts = carts.filter(
      (item) =>
        item.maSP !== maSP || (item.maSP === maSP && item.price !== price)
    );
    localStorage.setItem("listCart", JSON.stringify(carts));
    renderCart();
  }
}
renderCart();
function renderCart() {
  $(".payment__tableBody").empty();
  $(".sum_payment").empty();
  let arrSetUnique = [];
  carts.map((item) => {
    console.log("item: ", item);
    if (!compare(arrSetUnique, item.maSP, item.price)) {
      arrSetUnique.push(item);
    }
  });
  if (arrSetUnique[0] == undefined) {
    $(".payment__tableBody").text("Chưa có sản phẩm");
    $(".sum_payment").text("Chưa có sản phẩm");
    return;
  }
  arrSetUnique.forEach((item) => {
    let count = getCountItem(carts, item.maSP, item.price);
    console.log("count: ", count);
    $(".payment__tableBody").append(
      `
            <tr>
                <td><a onclick="removeAll('${item.maSP}',${
        item.price
      }); return false" href="#"><i class="fa fa-times" aria-hmaSPden="true"></i></a></td>
                <td><img height="100" wmaSPth="100"
                        src=${item.hinhAnh}
                        alt="">
                </td>
                <td>
                    <h4>${item.tenSP}</h4>
                    <p>
                        Mã phiên bản : ${item.memory.maPB}<br>
                        Dung lượng: ${item.memory.ROM}GB<br>
                        Tình trạng: Mới<br>
                        Màu sắc: ${item.memory.mauSac}
                    </p>
                </td>
                <td class="nav__pc"><h5>${convertMoney(item.price)}</h5></td>
                <td class="nav__pc">
                    <div class="payment__tableBody--count">
                        <i onclick="deleteItem('${item.maSP}',${
        item.price
      })" class="fa fa-minus count_minus" aria-hmaSPden="true"></i>
                        <span>${count}</span>
                        <i onclick="addItem('${item.maSP}',${
        item.price
      })" class="fa fa-plus count_plus" aria-hmaSPden="true"></i>
                    </div>
                </td>
                <td><h5>${convertMoney(item.price * count)}</h5></td>
            </tr>
            `
    );
  });
  $(".sum_payment").append(
    `<h3 class="sum_payment--title">Tổng giỏ hàng</h3>
            <div class="sum__payment--detail">
                <p>Tạm tính</p>
                <h4>${convertMoney(sumNotVoucher())}</h4>
                <p>Giảm giá</p>
                <h4>${convertMoney(priceVOUCHER)}</h4>
                <hr>
                <p>Tổng</p>
                <h3>${convertMoney(sumNotVoucher() - priceVOUCHER)}</h3>
            </div>
        <a href="/html/shopping__cart/shopping_cart_2.html" class="btn btn-danger">Thanh toán ngay</a>
    `
  );
}
function sumNotVoucher() {
  let sum = 0;
  carts.map((item) => (sum += Number(item.price)));
  return sum;
}
