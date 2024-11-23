let dataBrands = [];
let dataClassify = {
  vn: ["Cao cấp", "Tầm trung", "Cơ bản"],
  en: ["high", "medium", "low"],
};
let dataSlides = [];
let dataProducts = [];
let dataPopulation = [];
let openMenuBool = true;
let openMenuLv2 = true;
let openMenuLv2_ = true;
const MAX_products_page = 16;

function handleMobileNav() {
  //handle Responsive Mobile
  $(".openMenu").click(() => {
    if (openMenuBool) {
      $(".menu__Mobile").css({ left: "0%", visibility: "visible" });
    } else {
      $(".menu__Mobile").css({ left: "-100%", visibility: "hidden" });
    }
    openMenuBool = !openMenuBool;
  });
  $(".menu__Mobile--brand").click(() => {
    if (openMenuLv2_) {
      $(".nav__level2--brand").addClass("nav_level2_mobile");
      $(".nav__level2--classify").removeClass("nav_level2_mobile");
      openMenuLv2 = true;
    } else $(".nav__level2--brand").removeClass("nav_level2_mobile");
    openMenuLv2_ = !openMenuLv2_;
  });
  $(".menu__Mobile--classify").click(() => {
    if (openMenuLv2) {
      $(".nav__level2--classify").addClass("nav_level2_mobile");
      $(".nav__level2--brand").removeClass("nav_level2_mobile");
      openMenuLv2_ = true;
    } else $(".nav__level2--classify").removeClass("nav_level2_mobile");
    openMenuLv2 = !openMenuLv2;
  });
}

function scrollTopPhone() {
  $(".scrollTop").click(() => {
    $("html, body").scrollTop(0);
  });
}

//Render data
$(document).ready(function () {
  $(window).scroll(() => {
    let posScroll = $("html, body").scrollTop();
    if (posScroll > 700) {
      $(".scrollTop").css({ visibility: "visible" });
    } else {
      $(".scrollTop").css({ visibility: "hidden" });
    }
    scrollTopPhone();
  });

  //get data from dataProducts
  $.getJSON("/js/data.json").done((data) => {
    console.log("data: ", data);
    dataBrands = [...data.dataBrands];
    dataSlides = [...data.dataSlides];
    dataProducts = [...data.dataProducts];
    dataPopulation = [
      dataProducts[0],
      dataProducts[2],
      dataProducts[3],
      dataProducts[5],
    ];
    loadHeader();
    loadFooter();
    renderSlide();
    renderPopulation();
    rederPavination(dataProducts);
    loadDataProduct(dataProducts);
    sort(dataProducts);
  });

  function loadHeader() {
    $("#header").load("/html/header/header.html", () => {
      renderBrands();
      renderNavClassify();
      handleMobileNav();

      const kh = JSON.parse(localStorage.getItem("khachhang"));

      if (kh) {
        console.log("Tên đăng nhập: ", kh.hoTen);

        $("#dangnhapTK")
          .text(kh.hoTen)
          .attr("href", "/html/home/thongtinuser.html");
        $("#gioHang").show();
        $("#sideGioHang").show();
        $("#dangNhap").hide();
        $("#tenTk").show();
      } else {
        $("#dangnhapTK")
          .text("Đăng nhập")
          .attr("href", "/html/home/login.html");
        $("#gioHang").hide();
        $("#sideGioHang").hide();
        $("#tenTk").hide();
        $("#dangNhap").show();
      }

      $("#btn-search").click(() => {
        handleSerch();
      });

      $("#search").on("keypress", function (e) {
        if (e.which == 13) {
          handleSerch();
        }
      });
    });
  }

  const handleSerch = () => {
    let valueSearch = $("#search").val().toLowerCase();
    window.location.href = `/html/search/search.html?search=${valueSearch}`;
  };
  function loadFooter() {
    $("#footer").load("/html/footer/footer.html");
  }
  function renderBrands() {
    dataBrands.map((name) => {
      $(".nav__level2--brand").append(
        `
                <li class="nav__item">
                    <a href="/html/list--product/list_products.html?name=${name}">${name}</a>
                </li>
                `
      );
    });
  }
  function renderNavClassify() {
    dataClassify.vn.map((item) => {
      $(".nav__level2--classify").append(
        `
                    <li class="nav__item">
                        <a href="/html/classify-product/classify_product.html?classify=${convertEN(
                          item
                        )}">${item}</a>
                    </li>
                `
      );
    });
  }
  async function renderSlide() {
    dataSlides.map((item) => {
      $(".carousel-inner").append(
        `
                <div class="item mySlide">
                    <div class="mySlide__sub">
                        <div class="mySlide__caption">
                            <h1>${item.title}</h1>
                            <span>${item.more.join(" - ")}</span> 
                            <p>${item.memory.join(" - ")}</p>
                            <p><a 
                            class="btn btn-lg btn-primary" 
                            href="/html/product/product.html?id=${item.id}"
                            role="button">Mua Ngay</a></p>
                        </div>
                        <div class="mySlide__img">
                            <img src=${item.img} alt="">
                        </div>
                    </div>
                </div>
                
                `
      );
    });
    $(".mySlide:first-Child").addClass("active");
  }
  function renderPopulation() {
    dataPopulation.map((item) => {
      $(".menu__select--population").append(
        `
                <li ><a href="/html/product/product.html?id=${item.id}">${item.title}</a></li>
                `
      );
    });
  }
});
function getNameSort(name) {
  if (name === "priceHight") {
    return "Giá cao";
  } else if (name === "priceLow") {
    return "Giá thấp";
  } else if (name === "priceMoney") {
    return "Bán chạy";
  } else if (name === "priceGift") {
    return "Khuyến mại";
  }
}
function sort(dataSORT) {
  //sort products
  $(".list__sort--item").click((event) => {
    let page = getPageCurent() / MAX_products_page;
    if (page > 1) {
      window.location.href = window.location.href.split("?")[0];
    }
    localStorage.setItem("sort", event.target.id);
    if (event.target.id === "priceHight") {
      $(event.target).attr("id", "priceLow");
      $(event.target).text("Giá thấp");
      sortByPrice(dataSORT, "up");
    } else if (event.target.id === "priceLow") {
      $(event.target).attr("id", "priceHight");
      $(event.target).text("Giá cao");
      sortByPrice(dataSORT, "down");
    } else if (event.target.id === "priceMoney") {
      renderProduct(dataSORT);
    } else if (event.target.id === "priceGift") {
      sortByGift(dataSORT);
    }
  });
}

function returnSort(dataSORT, sort) {
  //sort products
  if (sort !== null) {
    let title = $(`#titleChange`).text().split("theo")[0];
    $(`#titleChange`).text(title + " theo " + getNameSort(sort));
  }
  if (sort === "priceHight") {
    dataSORT.sort((a, b) => b.price.low.New - a.price.low.New);
  } else if (sort === "priceLow") {
    dataSORT.sort((a, b) => a.price.low.New - b.price.low.New);
  } else if (sort === "priceMoney") {
    dataSORT;
  } else if (sort === "priceGift") {
    dataSORT.sort(
      (a, b) =>
        b.price.low.Old - b.price.low.New - (a.price.low.Old - a.price.low.New)
    );
  }

  return dataSORT;
}
//high - medium - low == phan loai
function convertEN(string) {
  return dataClassify.en[dataClassify.vn.indexOf(string)];
}
//cao cap - tam trung - co ban ==
function convertVN(string) {
  return dataClassify.vn[dataClassify.en.indexOf(string)];
}

function convertMoney(money) {
  return money.toLocaleString("vi", { style: "currency", currency: "vnd" });
}
function sortByPrice(dataPr, tt) {
  let arrData = [...dataPr];
  if (tt === "up") arrData.sort((a, b) => b.price.low.New - a.price.low.New);
  else arrData.sort((a, b) => a.price.low.New - b.price.low.New);
  renderSortProduct(arrData);
}
function sortByGift(dataPr) {
  let arrData = [...dataPr];
  arrData = arrData.sort((a, b) => {
    return (
      b.price.low.Old - b.price.low.New - (a.price.low.Old - a.price.low.New)
    );
  });
  renderBestProduct(arrData);
}

async function fetchProducts() {
  try {
    const response = await fetch("http://localhost:8080/phonestore/get-phone");
    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu sản phẩm");

    const data = await response.json();
    console.log("Data from API:", data); // Log dữ liệu trả về từ API
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

fetchProducts();

async function renderSearchProduct() {
  // Lấy giá trị tìm kiếm từ URL (dễ dàng truyền giá trị từ ô tìm kiếm)
  const urlParams = new URLSearchParams(window.location.search);
  const keyword = urlParams.get("search")?.toLowerCase();

  // Kiểm tra nếu không có giá trị tìm kiếm, không thực hiện gì
  if (!keyword) {
    alert("Vui lòng nhập từ khóa tìm kiếm.");
    return;
  }

  try {
    // Gọi API tìm kiếm với từ khóa
    const response = await fetch(
      `http://localhost:8080/phonestore/search?keyword=${keyword}`
    );

    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu sản phẩm");

    // Nhận dữ liệu trả về
    const productsEl = await response.json();
    const products = productsEl.data; // Giả sử API trả về dữ liệu trong trường 'data'
    console.log("products: ", products);

    // Kiểm tra nếu không có sản phẩm nào
    if (products.length === 0) {
      $(".products").html("<p>Không có sản phẩm nào phù hợp với tìm kiếm.</p>");
      return;
    }

    // Làm sạch container trước khi thêm các sản phẩm mới
    $(".products").empty();

    products.forEach((item) => {
      // Tạo các nút bộ nhớ (memory) cho mỗi sản phẩm
      const memoryButtons = (item.memory || [])
        .map((mmr) => `<b class="btn btn-default btn-sm">${mmr}</b>`)
        .join(" ");

      // Tạo nút ROM từ phienbansps
      const romButtons = item.phienbansps
        .map((pb) => `<b class="btn btn-default btn-sm">${pb.ROM}GB</b>`)
        .join(" ");

      // Lấy giá cũ và giá bán từ phiên bản sản phẩm đầu tiên (giả sử)
      const oldPrice =
        convertToVND(item.phienbansps[0].giaBan) || "Giá cũ không có";
      const newPrice =
        convertToVND(item.phienbansps[0].giaGiam) || "Giá bán không có";

      // Thêm sản phẩm vào trang
      $(".products").append(
        `<div id="${item.maSP}" class="card product__item none__tedec col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="product__item2">
                        <a href="/html/product/product.html?id=${item.maSP}">
                            <div class="product__item--img">
                                <img class="img-responsive" src="${item.hinhAnh}" alt="${item.tenSP}">
                            </div>
                            <div class="product__item--infor">
                                <h4>${item.tenSP}</h4>
                                <div class="product__item--memory">
                                    ${memoryButtons}
                                </div>
                                <div class="product__item--rom">
                                    ${romButtons}
                                </div>
                                <div class="product__item--priceOld">
                                    ${oldPrice}
                                </div>
                                <div class="product__item--price">
                                    ${newPrice}
                                </div>
                            </div>
                        </a>
                    </div>
                </div>`
      );
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    alert("Có lỗi xảy ra khi tìm kiếm sản phẩm.");
  }
}

async function renderProduct() {
  try {
    const response = await fetch("http://localhost:8080/phonestore/get-phone");

    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu sản phẩm");

    const productsEl = await response.json();
    const products = productsEl.data;
    console.log("products: ", products);

    // Empty the container before appending new items
    $(".products").empty();

    products
      .slice()
      .reverse()
      .forEach((item) => {
        // Lọc các phiên bản có trạng thái "on"
        const activePhienBans = (item.phienbansps || []).filter(
          (pb) => pb.trangThai === "on"
        );

        // Kiểm tra nếu sản phẩm không có phiên bản hoặc không có phiên bản nào "on"
        const hasActivePhienBan = activePhienBans.length > 0;

        // Tạo các nút bộ nhớ (memory)
        const memoryButtons = (item.memory || [])
          .map((mmr) => `<b class="btn btn-default btn-sm">${mmr}</b>`)
          .join(" ");

        // Tạo nút riêng cho mỗi ROM từ các phiên bản có trạng thái "on"
        const romButtons = hasActivePhienBan
          ? activePhienBans
              .map((pb) => `<b class="btn btn-default btn-sm">${pb.ROM}GB</b>`)
              .join(" ")
          : "Không có ROM";

        // Lấy giá cũ và giá bán từ phiên bản đầu tiên có trạng thái "on"
        const oldPrice = hasActivePhienBan
          ? convertToVND(activePhienBans[0].giaBan)
          : "Đang cập nhật";

        const newPrice = hasActivePhienBan
          ? convertToVND(activePhienBans[0].giaGiam)
          : "Đang bảo trì";

        // Thêm sản phẩm vào trang
        if (item.trangThai === "on" && hasActivePhienBan) {
          $(".products").append(
            `
            <div id="${item.maSP}" class="product__item none__tedec col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card" >
                  <div class="product__item2">
                      <a href="/html/product/product.html?id=${item.maSP}">
                          <div class="product__item--img">
                              <img class="img-responsive" src="${item.hinhAnh}" alt="${item.tenSP}">
                          </div>
                          <div class="product__item--infor">
                              <h4>${item.tenSP}</h4>
                              <div class="product__item--memory">
                                  ${memoryButtons}
                              </div>
                              <div class="product__item--rom">
                                  ${romButtons}
                              </div>
                              <div class="product__item--priceOld">
                                  ${oldPrice}
                              </div>
                              <div class="product__item--price">
                                  ${newPrice}
                              </div>
                          </div>
                      </a>
                  </div>
                  </div>
              </div>`
          );
        }
      });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

async function renderSortProduct() {
  try {
    const response = await fetch(
      "http://localhost:8080/phonestore/get-sortphone"
    );

    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu sản phẩm");

    const productsEl = await response.json();
    const products = productsEl.data;
    console.log("products: ", products);

    // Empty the container before appending new items
    $(".products").empty();

    products.forEach((item) => {
      // Tạo các nút bộ nhớ (memory)
      const memoryButtons = (item.memory || [])
        .map((mmr) => `<b class="btn btn-default btn-sm">${mmr}</b>`)
        .join(" ");

      // Tạo nút riêng cho mỗi ROM từ phienbansps
      const romButtons = item.phienbansps
        .map((pb) => `<b class="btn btn-default btn-sm">${pb.ROM}GB</b>`)
        .join(" ");

      // Lấy giá cũ và giá bán từ phiên bản sản phẩm đầu tiên (giả sử)
      const oldPrice =
        convertToVND(item.phienbansps[0].giaBan) || "Giá cũ không có";
      const newPrice =
        convertToVND(item.phienbansps[0].giaGiam) || "Giá bán không có";

      // Thêm sản phẩm vào trang
      $(".products").append(
        `<div id="${item.maSP}" class=" product__item none__tedec col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card" >
        <div class="product__item2">
                        <a href="/html/product/product.html?id=${item.maSP}">
                            <div class="product__item--img">
                                <img class="img-responsive" src="${item.hinhAnh}" alt="${item.tenSP}">
                            </div>
                            <div class="product__item--infor">
                                <h4>${item.tenSP}</h4>
                                <div class="product__item--memory">
                                    ${memoryButtons}
                                </div>
                                <div class="product__item--rom">
                                    ${romButtons}
                                </div>
                                <div class="product__item--priceOld">
                                    ${oldPrice}
                                </div>
                                <div class="product__item--price">
                                    ${newPrice}
                                </div>
                            </div>
                        </a>
                    </div>
                    </div>
                </div>`
      );
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

async function renderBestProduct() {
  try {
    const response = await fetch(
      "http://localhost:8080/phonestore/get-randomphone"
    );

    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu sản phẩm");

    const productsEl = await response.json();
    const products = productsEl.data;
    console.log("products: ", products);

    // Empty the container before appending new items
    $(".products").empty();

    products.forEach((item) => {
      // Tạo các nút bộ nhớ (memory)
      const memoryButtons = (item.memory || [])
        .map((mmr) => `<b class="btn btn-default btn-sm">${mmr}</b>`)
        .join(" ");

      // Tạo nút riêng cho mỗi ROM từ phienbansps
      const romButtons = item.phienbansps
        .map((pb) => `<b class="btn btn-default btn-sm">${pb.ROM}GB</b>`)
        .join(" ");

      // Lấy giá cũ và giá bán từ phiên bản sản phẩm đầu tiên (giả sử)
      const oldPrice =
        convertToVND(item.phienbansps[0].giaBan) || "Giá cũ không có";
      const newPrice =
        convertToVND(item.phienbansps[0].giaGiam) || "Giá bán không có";

      // Thêm sản phẩm vào trang
      $(".products").append(
        `<div id="${item.maSP}" class="product__item none__tedec col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card">
                    <div class="product__item2">
                        <a href="/html/product/product.html?id=${item.maSP}">
                            <div class="product__item--img">
                                <img class="img-responsive" src="${item.hinhAnh}" alt="${item.tenSP}">
                            </div>
                            <div class="product__item--infor">
                                <h4>${item.tenSP}</h4>
                                <div class="product__item--memory">
                                    ${memoryButtons}
                                </div>
                                <div class="product__item--rom">
                                    ${romButtons}
                                </div>
                                <div class="product__item--priceOld">
                                    ${oldPrice}
                                </div>
                                <div class="product__item--price">
                                    ${newPrice}
                                </div>
                            </div>
                        </a>
                    </div>
                    </div>
                </div>`
      );
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function convertToVND(amount) {
  // Kiểm tra xem amount có phải là số không
  if (isNaN(amount)) {
    return "Invalid amount";
  }

  // Định dạng số tiền với dấu phẩy phân cách hàng nghìn và ký hiệu VND
  return amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}

{
  /* <div class="product__item--memory">
                                    <b class="btn btn-default btn-sm">${roms}GB</b>  <!-- Hiển thị dữ liệu ROM -->
                                </div> */
}

// Call the function to render products
// renderProduct();

{
  /* <div class="product__item--memory">
${(item.memory.map(mmr => `<b class="btn btn-default btn-sm">${mmr}</b>`)).join(' ')}
</div> 

const roms = item.phienbansps.map(pb => pb.ROM).join(', '); 


*/
}

// <div class="product__item--priceOld">
//                                     ${convertMoney(item.price.low.Old)}
//                                 </div>

function convertToVND(amount) {
  // Kiểm tra xem amount có phải là số không
  if (isNaN(amount)) {
    return "Invalid amount";
  }

  // Định dạng số tiền với dấu phẩy phân cách hàng nghìn
  return amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}

function getPageCurent() {
  let href = window.location.href;
  let url = new URL(href);
  let page = (url.searchParams.get("page") || 1) * MAX_products_page;
  return page;
}

function loadDataSearchProduct(dataProducts) {
  let productsSub = [...dataProducts];

  if (localStorage.getItem("sort") !== null) {
    productsSub = returnSort(productsSub, localStorage.getItem("sort"));
  }
  let page = getPageCurent();
  let start = page - MAX_products_page;
  let dataLoad = [...productsSub].splice(start, MAX_products_page);
  renderSearchProduct(dataLoad);
}

function loadDataProduct(dataProducts) {
  let productsSub = [...dataProducts];

  if (localStorage.getItem("sort") !== null) {
    productsSub = returnSort(productsSub, localStorage.getItem("sort"));
  }
  let page = getPageCurent();
  let start = page - MAX_products_page;
  let dataLoad = [...productsSub].splice(start, MAX_products_page);
  renderProduct(dataLoad);
}

function rederPavination(dataProducts) {
  let countPage = Math.ceil(dataProducts.length / 16);
  let href = window.location.href;
  let url = new URL(href);
  let page = Number(url.searchParams.get("page") || 1);
  $(".pagination").append(`<li class="page-item ${page - 1 || "disabled"}">
                                <a class="page-link" href="${
                                  url.pathname
                                }?page=${page - 1 || 1}"  aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                                </a>
                            </li>`);
  for (let i = 1; i <= countPage; i++) {
    $(".pagination").append(
      `<li class="page-item ${
        i == page ? "active" : ""
      }"><a class="page-link" href="${url.pathname}?page=${i}">${i}</a></li>`
    );
  }
  $(".pagination").append(`<li class="page-item ${
    page + 1 <= countPage || "disabled"
  }">
                                <a class="page-link" href="${
                                  url.pathname
                                }?page=${
    page + 1 > countPage ? countPage : page + 1
  }" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                                </a>
                            </li>`);
}
