async function initPhieuNhapPage() {
  try {
    // Gọi API để lấy dữ liệu nhà cung cấp
    const response = await fetch(
      "http://localhost:8080/phonestore/get-nhacungcap"
    );
    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu nhà cung cấp");

    const data = await response.json();
    const nhacungcap = data.data; // Giả sử API trả về danh sách nhà cung cấp trong `data`

    // Gắn dữ liệu vào dropdown
    const supplierSelect = document.getElementById("supplier");

    // Xóa các option hiện tại (nếu cần)
    supplierSelect.innerHTML = "";

    // Map qua danh sách nhà cung cấp và tạo các option
    nhacungcap.forEach((supplier) => {
      const option = document.createElement("option");
      option.value = supplier.maNCC; // Gán `maPN` làm value
      option.text = supplier.tenNCC; // Gán `tenNCC` làm hiển thị
      supplierSelect.appendChild(option);
    });

    console.log("Danh sách nhà cung cấp:", nhacungcap);
  } catch (error) {
    console.error("Lỗi khi gọi API nhà cung cấp:", error);
    alert("Không thể lấy dữ liệu nhà cung cấp. Vui lòng thử lại sau.");
  }

  try {
    // Gọi API để lấy dữ liệu phiếu nhập
    const response = await fetch(
      "http://localhost:8080/phonestore/get-phieunhap"
    );
    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu phiếu nhập");

    const data = await response.json();
    const nhacungcap = data.data; // Giả sử API trả về danh sách phiếu nhập trong `data`

    // Tìm mã phiếu nhập cuối cùng
    let maxMaPN = 0;

    nhacungcap.forEach((supplier) => {
      // Tách phần số từ maPN (ví dụ: "PN008" -> 8)
      const currentMaPN = parseInt(supplier.maPN.replace(/[^0-9]/g, ""), 10);
      if (currentMaPN > maxMaPN) {
        maxMaPN = currentMaPN;
      }
    });

    // Tạo mã phiếu nhập mới (ví dụ: PN014)
    const newMaPN = `PN${String(maxMaPN + 1).padStart(3, "0")}`;

    // Gán giá trị mới vào trường cần hiển thị
    const noteInput = document.getElementById("noteId");
    if (noteInput) {
      noteInput.value = newMaPN; // Gán giá trị mới vào input hoặc nơi bạn muốn hiển thị
    }

    console.log(
      "Mã phiếu nhập cuối cùng:",
      `PN${String(maxMaPN).padStart(3, "0")}`
    );
    console.log("Mã phiếu nhập mới:", newMaPN);
  } catch (error) {
    console.error("Lỗi khi gọi API phiếu nhập:", error);
    alert("Không thể lấy dữ liệu phiếu nhập. Vui lòng thử lại sau.");
  }

  // Set giá trị cho ô input
  document.getElementById("creatorId").value = kh.maNV; // Gán Creator ID mới

  // Set giá trị cho danh sách chọn (select)

  let products = []; // Mảng lưu trữ danh sách sản phẩm

  try {
    // Gọi API để lấy dữ liệu sản phẩm
    const response = await fetch(
      "http://localhost:8080/phonestore/get-phienban"
    );
    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu sản phẩm");

    const data = await response.json();
    products = data.data; // Gán dữ liệu vào mảng `products`
    console.log("products: ", products);
  } catch (error) {
    console.error("Lỗi khi gọi API sản phẩm:", error);
    alert("Không thể lấy dữ liệu sản phẩm. Vui lòng thử lại sau.");
    return; // Ngăn việc tiếp tục xử lý nếu dữ liệu không có
  }

  const productTable = document.getElementById("productTable");
  const selectedTable = document.getElementById("selectedTable");
  const quantityInput = document.getElementById("quantityInput");
  const totalPrice = document.getElementById("totalPrice");
  let selectedProductId = null; // Lưu trữ ID sản phẩm được chọn

  // Render bảng sản phẩm
  // Render bảng sản phẩm
  function renderProductTable() {
    productTable.innerHTML = ""; // Xóa nội dung bảng cũ
    products.forEach((product) => {
      product.chitietphieunhaps.forEach((chitiet) => {
        console.log("chitiet: ", chitiet);
        // Chỉ thêm dòng nếu phiếu nhập đã xử lý
        if (chitiet.maPN_phieunhap.trangThai === "da nhap") {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${product.maPB}</td>
            <td>${product.maSP_sanpham.tenSP}</td>
            <td>${product.RAM}</td>
            <td>${product.ROM}</td>
            <td>${product.mauSac}</td>        
            <td>${chitiet.soLuong}</td>
            <td>${chitiet.donGiaNhap.toLocaleString()}đ</td>
          `;

          // Khi click vào dòng, lưu ID sản phẩm vào biến `selectedProductId`
          row.addEventListener("click", () => {
            selectedProductId = product.maPB; // Lưu ID sản phẩm
            highlightSelectedRow(row); // Làm nổi bật dòng được chọn
          });

          productTable.appendChild(row); // Thêm dòng vào bảng
        }
      });
    });
  }

  // Highlight dòng đã chọn
  function highlightSelectedRow(row) {
    const rows = productTable.querySelectorAll("tr");
    rows.forEach((r) => r.classList.remove("selected"));
    row.classList.add("selected");
  }

  // Tính toán tổng giá trị
  function calculateTotal() {
    const rows = selectedTable.querySelectorAll("tr");
    let total = 0;
    rows.forEach((row) => {
      const price = parseInt(row.cells[2].textContent.replace(/\D/g, ""));
      total += price;
    });
    totalPrice.textContent = `${total.toLocaleString()}đ`;
  }

  // Xóa sản phẩm khỏi bảng selectedTable
  document.getElementById("removeProduct").addEventListener("click", () => {
    const selectedRow = selectedTable.querySelector(".selected");
    if (!selectedRow) {
      return alert("Please select a product to remove!");
    }

    selectedRow.remove(); // Xóa dòng được chọn
    calculateTotal(); // Cập nhật tổng giá trị
  });

  // Cập nhật số lượng sản phẩm trong selectedTable
  selectedTable.addEventListener("click", (event) => {
    const row = event.target.closest("tr");
    if (!row) return;

    selectedTable
      .querySelectorAll("tr")
      .forEach((r) => r.classList.remove("selected"));
    row.classList.add("selected");

    const currentQuantity = parseInt(row.cells[1].textContent);
    const newQuantity = prompt("Enter new quantity:", currentQuantity);
    if (newQuantity === null) return;

    const quantity = parseInt(newQuantity);
    if (!quantity || quantity <= 0) {
      return alert("Invalid quantity!");
    }

    const productId = row.cells[0].textContent;
    const product = products.find((p) => p.maPB === productId); // Tìm sản phẩm theo maPB

    if (!product) {
      return alert("Product not found!");
    }

    // Tìm đơn giá từ chitietphieunhaps tương ứng với số lượng mới
    const chitiet = product.chitietphieunhaps.find(
      (item) => item.soLuong >= quantity
    );
    if (!chitiet) {
      return alert(
        "No sufficient purchase price information available for the requested quantity!"
      );
    }

    const newPrice = quantity * chitiet.donGiaNhap; // Lấy đơn giá từ chitietphieunhaps

    if (quantity < chitiet.soLuong) {
      return alert("Not enough stock!");
    }

    row.cells[1].textContent = quantity; // Cập nhật số lượng mới
    row.cells[2].textContent = `${newPrice.toLocaleString()}đ`; // Cập nhật giá mới

    product.quantity += currentQuantity - quantity; // Cập nhật lại số lượng tồn kho
    renderProductTable(); // Cập nhật lại bảng sản phẩm

    calculateTotal(); // Cập nhật tổng giá trị
  });

  // Thêm sản phẩm vào bảng selectedTable
  document.getElementById("addProduct").addEventListener("click", () => {
    if (!selectedProductId) {
      return alert("Please select a product!");
    }

    const quantity = parseInt(quantityInput.value);
    if (!quantity || quantity <= 0) {
      return alert("Invalid quantity!");
    }

    // Find the product using selectedProductId
    const product = products.find((p) => p.maPB === selectedProductId);
    if (!product) {
      return alert("Product not found!");
    }

    // Check if there is enough stock
    if (quantity > product.quantity) {
      return alert("Not enough stock!");
    }

    // Look for the corresponding price from the chitietphieunhaps
    const chitiet = product.chitietphieunhaps.find(
      (item) => item.soLuong >= quantity
    );
    if (!chitiet) {
      return alert("Vượt quá số lượng!");
    }

    const price = chitiet.donGiaNhap; // Get the price from chitietphieunhaps

    // Check if the product already exists in the selectedTable
    const existingRow = Array.from(selectedTable.rows).find(
      (row) => row.cells[0].textContent === product.maPB
    );

    if (existingRow) {
      // If the product already exists, increase the quantity and update price
      const currentQuantity = parseInt(existingRow.cells[1].textContent);
      const newQuantity = currentQuantity + quantity;
      existingRow.cells[1].textContent = newQuantity;

      const newPrice = newQuantity * price; // Use the price from chitietphieunhaps
      existingRow.cells[2].textContent = `${newPrice.toLocaleString()}đ`;
    } else {
      // If it's a new product, add a new row to selectedTable
      const totalPrice = quantity * price;
      selectedTable.innerHTML += `
          <tr>
            <td>${product.maPB}</td>
            <td>${quantity}</td>
            <td>${totalPrice.toLocaleString()}đ</td>
          </tr>
        `;
    }

    // Deduct the stock
    product.quantity -= quantity;
    renderProductTable(); // Re-render the product table

    calculateTotal(); // Update the total price
  });
  //  IMPORT
  document.getElementById("import").addEventListener("click", async () => {
    // Hiển thị hộp thoại xác nhận
    const confirmResult = await Swal.fire({
      title: "Bạn có chắc chắn muốn nhập phiếu này?",
      text: "Hãy kiểm tra lại thông tin trước khi xác nhận.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Xác nhận",
      cancelButtonText: "Hủy",
    });

    // Nếu người dùng nhấn Hủy hoặc đóng hộp thoại, dừng lại
    if (!confirmResult.isConfirmed) {
      Swal.fire("Thông báo", "Hủy thêm phiếu nhập.", "info");
      return;
    }

    // Lấy dữ liệu từ các trường
    const totalPrice =
      parseInt(
        document
          .getElementById("totalPrice")
          .textContent.trim()
          .replace(/\./g, "")
          .replace("đ", "")
      ) || 0;
    const maNV = document.getElementById("creatorId").value.trim();
    const maPN = document.getElementById("noteId").value.trim();
    const maNCC = document.getElementById("supplier").value.trim();

    // Kiểm tra dữ liệu
    if (!maPN || !maNV || !maNCC) {
      Swal.fire("Lỗi", "Vui lòng điền đầy đủ thông tin phiếu nhập.", "error");
      return;
    }

    // Tạo object dữ liệu
    const data = { maPN, tongTien: totalPrice, maNV, maNCC };

    try {
      // Gửi dữ liệu thêm phiếu nhập
      const response = await fetch(
        "http://localhost:8080/phonestore/add-phieunhap",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Không thể thêm phiếu nhập. Vui lòng thử lại.");
      }

      const result = await response.json();
      console.log("Kết quả phiếu nhập:", result);

      // Gọi hàm thêm chi tiết phiếu nhập
      await addChiTietPhieuNhap(maPN);

      Swal.fire(
        "Thành công",
        "Phiếu nhập và chi tiết đã được thêm.",
        "success"
      );
    } catch (error) {
      console.error("Lỗi khi thêm phiếu nhập:", error);
      Swal.fire(
        "Lỗi",
        "Đã xảy ra lỗi khi thêm phiếu nhập. Vui lòng thử lại.",
        "error"
      );
    }
  });

  // Hàm thêm chi tiết phiếu nhập
  async function addChiTietPhieuNhap(maPN) {
    const tableBody = document.getElementById("selectedTable");
    const rows = tableBody.querySelectorAll("tr");

    const requests = Array.from(rows).map((row) => {
      const cells = row.querySelectorAll("td");

      const productData = {
        maPN,
        maPB: cells[0]?.textContent.trim() || "",
        soLuong: parseInt(cells[1]?.textContent.trim() || "0"),
        donGiaNhap: parseInt(
          (cells[2]?.textContent.trim() || "0").replace(/\./g, "")
        ),
      };

      console.log("productData:", productData);

      return fetch("http://localhost:8080/phonestore/add-chitietphieunhap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Không thể thêm chi tiết: ${productData.maPB}`);
          }
          return response.json();
        })
        .then((result) => {
          console.log(`Thêm chi tiết thành công:`, result);
        });
    });

    // Thực hiện tất cả các yêu cầu đồng thời
    try {
      await Promise.all(requests);
    } catch (error) {
      console.error("Lỗi khi thêm chi tiết phiếu nhập:", error);
      Swal.fire(
        "Lỗi",
        "Một số chi tiết phiếu nhập không được thêm. Vui lòng kiểm tra lại.",
        "error"
      );
    }
  }

  // Hàm tìm kiếm sản phẩm
  function searchProducts() {
    const searchInput = document
      .getElementById("search")
      .value.replace(/\s+/g, "")
      .toLowerCase();
    const searchType = document.getElementById("searchType").value;

    if (!searchInput) {
      renderFilteredProducts(products); // Hiển thị lại tất cả sản phẩm khi tìm kiếm trống
      return;
    }

    const filteredProducts = products.filter((product) => {
      const maPB = product.maPB.replace(/\s+/g, "").toLowerCase();
      const tenSP = product.maSP_sanpham.tenSP
        .replace(/\s+/g, "")
        .toLowerCase();

      if (searchType === "id") {
        return maPB.includes(searchInput);
      } else if (searchType === "name") {
        return tenSP.includes(searchInput);
      }
      return false;
    });

    renderFilteredProducts(filteredProducts); // Hiển thị sản phẩm đã lọc
  }

  // Hàm hiển thị danh sách sản phẩm đã lọc
  function renderFilteredProducts(filteredProducts) {
    productTable.innerHTML = "";

    filteredProducts.forEach((product) => {
      product.chitietphieunhaps.forEach((chitiet) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.maPB}</td>
            <td>${product.maSP_sanpham.tenSP}</td>
            <td>${product.RAM}</td>
            <td>${product.ROM}</td>
            <td>${product.mauSac}</td>
            <td>${chitiet.soLuong}</td>
            <td>${chitiet.donGiaNhap.toLocaleString()}đ</td>
          `;

        row.addEventListener("click", () => {
          selectedProductId = product.maPB;
          highlightSelectedRow(row);
        });

        productTable.appendChild(row);
      });
    });
  }

  // Gắn sự kiện tìm kiếm vào ô input
  document.getElementById("search").addEventListener("input", searchProducts);

  // Hiển thị danh sách ban đầu
  renderProductTable();
}
