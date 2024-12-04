const usernameLabel = $(".info__name");
const contentContainer = $("#content");
const listControlItems = $$(".nav-links__item");
const user = JSON.parse(localStorage.getItem("user"));
const kh = JSON.parse(localStorage.getItem("khachhang"));
console.log("kh: ", kh);
function loadForm() {
  usernameLabel.innerText = user.tenDangNhap;
}

loadForm();
const thempn = () => {
  window.location.href = "./PADung/themPhieuNhap.html";
};
const xemChiTiet = () => {
  window.location.href = "./PADung/chiTietPhieuNhap.html";
};
const xemPB = () => {
  window.location.href = "./PADung/xemPhienBan.html";
};
if (user.quyen == "ql" || user.quyen == "nv") {
  Array.from(listControlItems).forEach((item) => {
    item.addEventListener("click", () => {
      const activeItem = $(".nav-links__item.active");
      if (activeItem) {
        activeItem.classList.remove("active");
      }
      if (item.getAttribute("data-value") === "trang-chu") {
        item.classList.add("active");
        contentContainer.innerHTML = `
            <div class="top-line">
            <h1 class="top-line__heading">THỐNG KÊ</h1>
        </div>
        <div class="filter">
            <div class="filter__container">
                <label for="" class="filter__label">Chọn tháng cần xem</label>
                <select name="filter__select" id="filter__select" class="filter__control">
                    <option value="">--Chọn tháng--</option>
                    <option value="customer">Khách hàng</option>
                    <option value="admin">Admin</option>

                </select>
                <div class="filter__button">Lọc</div>
            </div>


        </div>



        <div class="box-analysis__container">
            <div class="box-analysis__item" data-value="total-customer">
                <div class="box-analysis__heading">
                    <div class="box-analysis__icon">
                        <i class="fa-solid fa-money-bill"></i>
                    </div>
                    <div class="box-analysis__label">Khách hàng</div>
                </div>
                <div class="box-analysis__number">100000</div>


            </div>
            <div class="box-analysis__item" data-value="total-invoice">
                <div class="box-analysis__heading">
                    <div class="box-analysis__icon">
                        <i class="fa-solid fa-money-bill"></i>
                    </div>
                    <div class="box-analysis__label">Tổng hóa đơn</div>
                </div>
                <div class="box-analysis__number">100000</div>
            </div>
            <div class="box-analysis__item" data-value="total-price">
                <div class="box-analysis__heading">
                    <div class="box-analysis__icon">
                        <i class="fa-solid fa-money-bill"></i>
                    </div>
                    <div class="box-analysis__label">Tổng doanh thu</div>
                </div>
                <div class="box-analysis__number">100000</div>
            </div>
            <div class="box-analysis__item" data-value="total-product">
                <div class="box-analysis__heading">
                    <div class="box-analysis__icon">
                        <i class="fa-solid fa-money-bill"></i>
                    </div>
                    <div class="box-analysis__label">Tổng sản phẩm bán ra</div>
                </div>
                <div class="box-analysis__number">100000</div>
            </div>
        </div>
        <div id="table_wrapper">

            <div class="table__container" data-value="1">
                <div class="table__title">
                    TỔNG SẢN PHẨM BÁN RA THEO THƯƠNG HIỆU
                </div>
                <table class="analysis-table">
                    <thead>
                        <tr class="analysis-table__heading">
                            <th>Tên thương hiệu</th>
                            <th>Số lượng</th>
                        </tr>
                    </thead>
                    <tbody class="analysis-table__list">
                        <tr class="analysis-table__row">
                            <td>Samsung</td>
                            <td>2</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div class="table__container" data-value="2">
                <div class="table__title">
                    TỔNG DOANH THU BÁN RA THEO THƯƠNG HIỆU
                </div>
                <table class="analysis-table">
                    <thead>
                        <tr class="analysis-table__heading">
                            <th>Tên thương hiệu</th>
                            <th>Số lượng</th>
                        </tr>
                    </thead>
                    <tbody class="analysis-table__list">
                        <tr class="analysis-table__row">
                            <td>Samsung</td>
                            <td>2</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
        `;
        initDashboardPage();
      }
      if (item.getAttribute("data-value") === "ql-nguoidung") {
        item.classList.add("active");
        contentContainer.innerHTML = `
                    <div class="top-line">
                    <h1 class="top-line__heading">QUẢN LÝ TÀI KHOẢN</h1>
                </div>
                <div class="content__container">
                    <ul class="function__list">
                        <li class="function__item active" data-value="add">
                            <span class="function__item-title">
                                Thêm mới
                            </span>
                        </li>
                        <li class="function__item" data-value="update">
                            <span class="function__item-title">
                                Chỉnh sửa
                            </span>
                        </li>
                        <li class="function__item" data-value="delete">
                            <span class="function__item-title">
                                Xóa
                            </span>
                        </li>
    
    
                    </ul>
                    <form id="form-admin">
                        <div class="form-container">
    
                            <div class="form-group">
                                <label for="user-id" class="form-label">Mã tài khoản</label>
    
                                <input id="maTk" name="user-id" type="text" class="form-control" disabled="true">
    
                                <span class="form-message"></span>
                            </div>
                         
    
                            <div class="form-group">
                                <label for="user-username" class="form-label">Tên đăng nhập</label>
    
                                <input disabled="true" id="tenDangNhap" name="user-username" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="user-password" class="form-label">Mật khẩu</label>
    
                                <input id="password" name="user-password" type="password" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                          
                         
                             
                            <div class="form-group">
                                <label for="user-permission" class="form-label">Quyền</label>
                                <select name="user-permission" id="user-permission" class="form-control">
                                    <option value="">--Chọn quyền--</option>
                                    <option value="kh">Khách hàng</option>
                                    <option value="ql">Quản lí</option>
                                    <option value="nv">Nhân viên</option>
    
                                </select>
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="user-status" class="form-label">Trạng thái</label>
                                <select name="user-status" id="user-status" class="form-control">
                                    <option value="">--Chọn trạng thái--</option>
                                    <option value="on">Hoạt động</option>
                                    <option value="off">Không hoạt động</option>
                                </select>
                                <span class="form-message"></span>
                            </div>
    
                        
    
                        </div>
                        <div class="form-controls">
                        <button type="button"  class="btn-control" id="btn-save">Cập nhật</button>
                        <button type="button" onclick="huyTaiKhoan()"  class="btn-control" id="btn-cancel">Hủy</button>
                        </div>
                        <div class="group">
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="search-icon">
                            <g>
                                <path
                                    d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                                </path>
                            </g>
                        </svg>
                
                        <input id="query" class="input" type="search" placeholder="Search..." name="searchbar" />
                    </div>
                    </form>
                    <table id="product-table">
                        <thead>
                            <tr class="product-table__heading">
                                <th>Mã tài khoản</th>
                                <th>Tên đăng nhập</th>
                                <th>Mật khẩu</th>
                               
                                <th>Quyền</th>
                                <th>Trạng thái</th>
                                <th>Hành động</th>
                                <!-- <th></th> -->
    
                            </tr>
                        </thead>
                        <tbody class="product-table__list">
                            <tr class="product-table__row product-table__row--clicked">
                                <td>1</td>
                                <td>admin</td>
                                <td>123</td>
                                <td>Sài GÒn VN</td>
                                <td>Hoàn thành</td>
                                <td>Đã xử lý</td>
                                <td>
                                    <button class="product-table__update-btn product-table-btn">Sửa</button>
                                   
                                </td>
                            </tr>
    
                        </tbody>
                    </table>
    
                </div>
                `;
        initUserPage();
      }
      if (item.getAttribute("data-value") === "ql-nhanvien") {
        item.classList.add("active");
        contentContainer.innerHTML = `
                    <div class="top-line">
                    <h1 class="top-line__heading">QUẢN LÝ NHÂN VIÊN</h1>
                </div>
    
    
                <div class="content__container">
                    <ul class="function__list">
                        <li class="function__item active" data-value="add">
                            <span class="function__item-title">
                                Thêm mới
                            </span>
                        </li>
                        <li class="function__item" data-value="update">
                            <span class="function__item-title">
                                Chỉnh sửa
                            </span>
                        </li>
                        <li class="function__item" data-value="delete">
                            <span class="function__item-title">
                                Xóa
                            </span>
                        </li>
    
    
                    </ul>
                    <form id="form-admin">
                        <div class="form-container">
    
                            <div class="form-group">
                                <label for="user-id" class="form-label">Mã nhân viên</label>
    
                                <input id="maNv" name="user-id" type="text" class="form-control" disabled="true">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="user-full_name" class="form-label">Họ tên nhân viên</label>
    
                                <input id="tenNv" name="user-full_name" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="user-email" class="form-label">Email</label>
    
                                <input id="email" name="user-email" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="user-phone" class="form-label">Số điện thoại</label>
    
                                <input id="phone" name="user-phone" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="user-phone" class="form-label">Ngày sinh</label>
    
                                <input id="date" name="user-phone" type="date" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                            <label for="gioiTinh" class="form-label">Giới tính</label>
                        
                            <select id="gioiTinh" name="gioiTinh" class="form-control">
                                <option value="">Chọn giới tính</option>
                                <option value="Nam">Nam</option>
                                <option value="Nu">Nữ</option>
                            </select>
                        
                            <span class="form-message"></span>
                        </div>
                        
                            <div class="form-group form-group">
                                <label for="user-address" class="form-label">Địa chỉ</label>
    
                                <input id="diaChi" name="user-address" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="user-permission" class="form-label">Loại nhân viên</label>
                                <select name="user-permission" id="user-permission" class="form-control">
                                    <option value="">--Chọn loại--</option>
                                    <option value="ql">Quản lí</option>
                                    <option value="nv">Nhân viên</option>
    
                                </select>
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="user-status" class="form-label">Trạng thái</label>
                                <select name="user-status" id="user-status" class="form-control">
                                    <option value="">--Chọn trạng thái--</option>
    
                                    <option value="on">Hoạt động</option>
                                    <option value="off">Không hoạt động</option>
    
                                </select>
                                <span class="form-message"></span>
                            </div>
    
                            <div class="form-group">
                            <label for="user-id" class="form-label">Tài khoản</label>

                            <input id="taiKhoan" name="user-id" type="text" class="form-control" >

                            <span class="form-message"></span>
                        </div>
                        <div class="form-group">
                        <label for="user-id" class="form-label">Mật khẩu</label>

                        <input id="matKhau" name="user-id" type="password" class="form-control" >

                        <span class="form-message"></span>
                    </div>
    
                        </div>
                        <div class="form-controls">
                        <button type="button"  class="btn-control" id="btn-save">Cập nhật</button>
                        <button type="button"  class="btn-control" id="btn-add">Thêm</button>
                        <button type="button" onclick="huyNhanVien()"  class="btn-control" id="btn-cancel">Hủy</button>
                        </div>
                        <div class="group">
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="search-icon">
                            <g>
                                <path
                                    d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                                </path>
                            </g>
                        </svg>
                
                        <input id="query" class="input" type="search" placeholder="Search..." name="searchbar" />
                    </div>
                    </form>
                    <table id="product-table">
                        <thead>
                            <tr class="product-table__heading">
                                <th>Mã nhân viên</th>
                                <th>Mã tài khoản</th>
                                <th>Họ tên</th>
                                <th>Ngày sinh</th>
                                <th>Giới tính</th>
                                <th  style ="width: 250px;">Địa chỉ</th>
                                <th>Số ĐT</th>
                                <th>Email</th>
                                <th>Vai trò</th>
                                <th>Trạng thái</th>
                                <th>Tài khoản</th>
                                <th>Mật khẩu</th>
                                <th >Hành động</th>
                                <!-- <th></th> -->
    
                            </tr>
                        </thead>
                        <tbody class="product-table__list">
                            <tr class="product-table__row product-table__row--clicked">
                                <td>1</td>
                                <td>Samsung Galaxy S23 Ultra 256GB</td>
                                <td>10000000</td>
                                <td>9000000</td>
                                <td>Đã xử lý</td>
                                <td>
                        
                                </td>
                            </tr>
    
                        </tbody>
                    </table>
    
                </div>
                `;
        initNhanVienPage();
      }

      if (item.getAttribute("data-value") === "ql-sanpham") {
        item.classList.add("active");
        contentContainer.innerHTML = `
                    <div class="top-line">
                    <h1 class="top-line__heading">QUẢN LÝ KHUYẾN MÃI</h1>
                </div>
    
    
                <div class="content__container">
                    <ul class="function__list">
                        <li class="function__item active" data-value="add">
                            <span class="function__item-title">
                                Thêm mới
                            </span>
                        </li>
                        <li class="function__item " data-value="update">
                            <span class="function__item-title">
                                Chỉnh sửa
                            </span>
                        </li>
                        <li class="function__item" data-value="delete">
                            <span class="function__item-title">
                                Xóa
                            </span>
                        </li>
    
    
                    </ul>
                    <form id="form-admin">
                        <div class="form-container">
    
                            <div class="form-group">
                                <label for="product-id" class="form-label">Mã SP</label>
    
                                <input id="maSP" name="product-id" type="text" 
                                    class="form-control" disabled="true">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="product-name" class="form-label">Tên SP</label>
    
                                <input id="tenSP" name="product-name" type="text"
                                    class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                            <label for="product-brand" class="form-label">Brand</label>
                            <select name="product-brand" id="thuongHieu" class="form-control">
                               <option >--Chọn thương hiệu--</option>
                                <option value="Apple">Apple</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Oppo">Oppo</option>
                                <option value="Xiaomi">Xiaomi</option>
                                <option value="Vivo">Vivo</option>
                                <option value="Realme">Realme</option>
                                <option value="Nokia">Nokia</option>
                                <option value="Masstel">Masstel</option>
                                <option value="Itel">Itel</option>
                                <option value="Mobell">Mobell</option>
                            </select>
                            <span class="form-message"></span>
                        </div>

                          
                            <div class="form-group">
                            <label for="product-brand" class="form-label">Xuất sứ</label>
                            <select name="product-brand" id="xuatSu" class="form-control">
                              <option value="">--Chọn xuất sứ--</option>
                                <option value="South Korea">South Korea</option>
                                <option value="USA">USA</option>
                                <option value="China">China</option>
                                <option value="Japan">Japan</option>
                                <option value="Finland">Finland</option>
                              
                            </select>
                            <span class="form-message"></span>
                        </div>
                      
                        <div class="form-group">
                        <label for="product-id" class="form-label">Cam sau</label>

                        <input id="camSau" name="product-id" type="text" 
                            class="form-control"

                        <span class="form-message"></span>
                    </div>
                    
                    <div class="form-group">
                    <label for="product-id" class="form-label">Cam trước</label>

                    <input id="camTruoc" name="product-id" type="text" 
                        class="form-control" 

                    <span class="form-message"></span>
                </div>
                    <div class="form-group">
                    <label for="product-brand" class="form-label">Pin</label>
                    <select name="product-brand" id="pin" class="form-control">
                    <option >--Chọn Pin--</option>
                        <option value="3200mAh">3200mAh</option>
                        <option value="4000mAh">4000mAh</option>
                        <option value="4500mAh">4500mAh</option>
                        <option value="4800mAh">4800mAh</option>
                        <option value="4600mAh">4600mAh</option>
                        <option value="5000mAh">5000mAh</option>
                        <option value="4300mAh">4300mAh</option>
                        <option value="4200mAh">4200mAh</option>
                    </select>
                    <span class="form-message"></span>
                </div>
             
                <div class="form-group">
                <label for="product-id" class="form-label">Thời gian bảo hành</label>

                <input id="baoHanh" name="product-id" type="text" 
                    class="form-control"

                <span class="form-message"></span>
            </div>
       
    <div class="form-group">
        <label for="product-brand" class="form-label">Trạng thái</label>
        <select name="product-brand" id="trangThai" class="form-control">
        <option >--Chọn trạng thái--</option>
            <option value="on">on</option>
            <option value="off">off</option>

      
        </select>
        <span class="form-message"></span>
    </div>
                  
                        <div class="form-group">
                        <label for="product-name" class="form-label">Hệ điều hành</label>

                        <input id="heDieuHanh" name="product-name" type="text"
                            class="form-control">

                        <span class="form-message"></span>
                    </div>
                         
                            
                            <div class="form-group form-group--full">
                                <label for="product-img" class="form-label">Ảnh (Nhập đường dẫn)</label>
    
                                <input id="hinhAnh" name="product-img" type="text"
                                    placeholder="VD: https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s23-ultra.png"
                                    class="form-control">
                                <span class="form-message"></span>
                            </div>
    
    
                        </div>
                        <div class="form-controls">
                            <button type="button"  class="btn-control" id="btn-save">Lưu</button>
                            <button type="button"  class="btn-control" id="btn-add">Thêm</button>
                            <button type="button" onclick = "huyProduct()"  class="btn-control" id="btn-cancel">Hủy</button>
                        </div>
                    </form>
                    <div class="group">
                    <svg viewBox="0 0 24 24" aria-hidden="true" class="search-icon">
                        <g>
                            <path
                                d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                            </path>
                        </g>
                    </svg>
            
                    <input id="query" class="input" type="search" placeholder="Search..." name="searchbar" />
                </div>
                </div>
                <table id="product-table">
                    <thead>
                        <tr class="product-table__heading">
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Brand</th>
                            <th>Pin</th>
                            <th>Cam trước</th>
                            <th>Cam sau</th>
                            <th>Hệ điều hành</th>
                            <th>Xuất xứ</th>
                            <th>Thời gian bảo hành</th>
                            <th>Hình ảnh</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody class="product-table__list">
                            <tr class="product-table__row product-table__row--clicked">
                                <td>1</td>
                                <td>admin</td>
                                <td>123</td>
                                <td>Sài GÒn VN</td>
                                <td>Hoàn thành</td>
                                <td>Đã xử lý</td>
                                <td>
                                    <button class="product-table__update-btn product-table-btn">Sửa</button>
                                   
                                </td>
                            </tr>
    
                        </tbody>
                </table>
                8`;

        initProductPage();
      }
      if (item.getAttribute("data-value") === "ql-khuyenmai") {
        item.classList.add("active");
        contentContainer.innerHTML = `
                    <div class="top-line">
                    <h1 class="top-line__heading">QUẢN LÝ KHUYẾN MÃI</h1>
                </div>
    
    
                <div class="content__container">
                    <ul class="function__list">
                        <li class="function__item active" data-value="add">
                            <span class="function__item-title">
                                Thêm mới
                            </span>
                        </li>
                        <li class="function__item " data-value="update">
                            <span class="function__item-title">
                                Chỉnh sửa
                            </span>
                        </li>
                        <li class="function__item" data-value="delete">
                            <span class="function__item-title">
                                Xóa
                            </span>
                        </li>
    
    
                    </ul>
                    <form id="form-admin">
                        <div class="form-container">
    
                            <div class="form-group">
                                <label for="user-id" class="form-label">Mã khuyến mãi</label>
    
                                <input id="maKhuyenMai" name="user-id" type="text" class="form-control" disabled="true">
    
                                <span class="form-message"></span>
                            </div>
                              <div class="form-group">
                            <label for="user-email" class="form-label">Mã nhân viên</label>

                            <input id="maNv" name="user-email" type="text" class="form-control" disabled="true">

                            <span class="form-message"></span>
                        </div>
                            <div class="form-group">
                                <label for="user-full_name" class="form-label">Mô tả</label>
    
                                <input id="moTa" name="user-full_name" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
    
                          
                            <div class="form-group">
                                <label for="user-password" class="form-label">Mức giảm</label>
    
                                <input id="mucGiam" name="user-password" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="user-email" class="form-label">Trạng thái</label>
    
                                <select id="trangThai" style="height: 100%;">
                                <option value="on">on</option>
                                <option value="off">off</option>                             
                            </select>
    
                                <span class="form-message"></span>
                            </div>
                           
                           
    
    
                        </div>
                        <div class="form-controls">
                            <button type="button" onclick="updateKM()"  class="btn-control" id="btn-save">Cập nhật</button>
                             <button type="button" onclick="addKM()"  class="btn-control" id="btn-add">Thêm</button>
                            <button type="button" onclick="huyPromotion()"  class="btn-control" id="btn-cancel">Hủy</button>
                        </div>
                        <div class="group">
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="search-icon">
                            <g>
                                <path
                                    d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                                </path>
                            </g>
                        </svg>
                
                        <input id="query" class="input" type="search" placeholder="Search..." name="searchbar" />
                    </div>
                    </form>
                    <table id="product-table">
                        <thead>
                            <tr class="product-table__heading">
                                <th>Mã khuyến mãi</th>
                                <th>Mã nhân viên</th>
                                <th>Mô tả</th>
                                <th>Mức giảm</th>
                                <th>Trạng thái</th>  
                                <th>Hành động</th>                        
                                <!-- <th></th> -->
    
                            </tr>
                        </thead>
                        <tbody class="product-table__list">
                            <tr class="product-table__row product-table__row--clicked">
                                <td>1</td>
                                <td>Samsung Galaxy S23 Ultra 256GB</td>
                                <td>10000000</td>
                                <td>9000000</td>
                                <td>Đã xử lý</td>
                                <td>
                                    <button class="product-table__update-btn product-table-btn">Sửa</button>
                                    <button class="product-table__delete-btn product-table-btn">Xóa</button>
                                </td>
                            </tr>
    
                        </tbody>
                    </table>
    
                </div>
                `;
        initPromotionPage();
      }
      if (item.getAttribute("data-value") === "ql-baohanh") {
        item.classList.add("active");
        contentContainer.innerHTML = `
                    <div class="top-line">
                    <h1 class="top-line__heading">QUẢN LÝ BẢO HÀNH</h1>
                </div>
    
    
                <div class="content__container">
                    <ul class="function__list">
                        <li class="function__item active" data-value="add">
                            <span class="function__item-title">
                                Thêm mới
                            </span>
                        </li>
                        <li class="function__item " data-value="update">
                            <span class="function__item-title">
                                Chỉnh sửa
                            </span>
                        </li>
                        <li class="function__item" data-value="delete">
                            <span class="function__item-title">
                                Xóa
                            </span>
                        </li>
    
    
                    </ul>
                    <form id="form-admin">
                        <div class="form-container">
    
                            <div class="form-group">
                                <label for="user-id" class="form-label">Mã phiếu bảo hành</label>
    
                                <input id="maBaoHanh" name="user-id" type="text" class="form-control" disabled="true">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                            <label for="user-email" class="form-label">Mã nhân viên</label>

                            <input id="maNv" name="user-email" type="text" class="form-control" disabled="true">

                            <span class="form-message"></span>
                        </div>
                            <div class="form-group">
                                <label for="user-full_name" class="form-label">Thời gian tạo</label>
    
                                <input id="thoiGian" name="user-full_name" type="date" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
    
                            <div class="form-group">
                                <label for="user-username" class="form-label">Tổng tiền</label>
    
                                <input id="tongTien" name="user-username" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="user-password" class="form-label">Trạng Thái</label>
    
                                <input id="trangThai" name="user-password" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                          
                            <div class="form-group">
                                <label for="user-email" class="form-label">Số seri</label>
    
                                <input id="soSeri" name="user-email" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="user-email" class="form-label">Nội dung</label>
    
                                <input id="noiDung" name="user-email" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                           
                           
    
    
                        </div>
                        <div class="form-controls">
                            <button type="button"  class="btn-control" id="btn-save">Cập nhật</button>
                            <button type="button"  class="btn-control" id="btn-add">Thêm</button>
                            <button type="button" onclick="huyBaoHanh()"  class="btn-control" id="btn-cancel">Hủy</button>
                        </div>
                        <div class="group">
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="search-icon">
                            <g>
                                <path
                                    d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                                </path>
                            </g>
                        </svg>
                
                        <input id="query" class="input" type="search" placeholder="Search..." name="searchbar" />
                    </div>
                    </form>
                    <table id="product-table">
                        <thead>
                            <tr class="product-table__heading">
                                <th>Mã phiếu bảo hành</th>
                                <th>Thời gian tạo</th>
                                <th>Tổng tiền</th>
                                <th>Trạng thái</th>
                                <th>Mã nhân viên</th>  
                                <th>Số seri</th>       
                                <th>Nội dung</th> 
                                <th>Hành động</th>            
                                <!-- <th></th> -->
    
                            </tr>
                        </thead>
                        <tbody class="product-table__list">
                            <tr class="product-table__row product-table__row--clicked">
                                <td>1</td>
                                <td>Samsung Galaxy S23 Ultra 256GB</td>
                                <td>10000000</td>
                                <td>9000000</td>
                                <td>Đã xử lý</td>
                                <td>
                                    <button class="product-table__update-btn product-table-btn">Sửa</button>
                                    <button class="product-table__delete-btn product-table-btn">Xóa</button>
                                </td>
                                
                            </tr>
    
                        </tbody>
                    </table>
    
                </div>
                `;
        initBaoHanhPage();
      }

      if (item.getAttribute("data-value") === "ql-nhap") {
        item.classList.add("active");
        contentContainer.innerHTML = `
                    <div class="top-line">
                    <h1 class="top-line__heading">QUẢN LÝ NHẬP</h1>
                </div>
    
    
                <div class="content__container">
               
                <div class="container">
                <!-- Searching Section -->
                <div class="search-section">
                    <label for="search">Searching</label>
                    <div class="search-bar">
                        <input type="text" id="search" placeholder="Enter keyword">
                        <select id="searchType">
                            <option value="id">ID</option>
                            <option value="name">Name</option>
                        </select>
                    </div>
                </div>
        
                <!-- Product List Section -->
                <div class="product-list">
                    <h3>Product List</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Mã phiên bản</th>
                                <th>Tên sản phẩm</th>
                                <th>RAM</th>
                                <th>ROM</th>
                                <th>Màu</th>
                                <th>Số lượng</th>
                                <th>Đơn giá nhập</th>
                            </tr>
                        </thead>
                        <tbody id="productTable">
                            <!-- Data populated dynamically -->
                        </tbody>
                    </table>
                </div>
        
                <!-- Information Section -->
                <div class="info-section">
                    <h3>Information</h3>
                    <form style="width:53%">
                        <div class="form-group">
                            <label for="noteId">Note ID:</label>
                            <input type="text" id="noteId" value="PN011">
                        </div>
                        <div class="form-group">
                            <label for="creatorId">Creator ID:</label>
                            <input type="text" id="creatorId" value="NV001">
                        </div>
                        <div class="form-group">
                            <label for="supplier">Supplier:</label>
                            <select  id="supplier">
                                <option value="1">Công ty A</option>
                                <option value="2">Công ty B</option>
                                <option value="3">Công ty C</option>
                            </select>
                        </div>
                    </form>
                </div>
        
                <!-- Selected Products Section -->
                <div class="selected-products">
                    <h3>Selected Products</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody id="selectedTable">
                            <!-- Selected products populated dynamically -->
                        </tbody>
                    </table>
                    <p>Total: <span id="totalPrice">0đ</span></p>
                </div>
        
                <!-- Action Buttons -->
                <div class="actions">
                    <input type="number" id="quantityInput" placeholder="Enter quantity">
                    <button id="addProduct">OK</button>
                    <button id="removeProduct">Remove product</button>
                    <button id="import">Import</button>
                </div>
            </div>
                 
    
                </div>
                `;
        initPhieuNhapPage();
      }
      if (item.getAttribute("data-value") === "ql-phienBan") {
        item.classList.add("active");
        contentContainer.innerHTML = `
                    <div class="top-line">
                    <h1 class="top-line__heading">QUẢN LÝ PHIÊN BẢN</h1>
                </div>
    
    
                <div class="content__container">
                    <ul class="function__list">
                        <li class="function__item active" data-value="add">
                            <span class="function__item-title">
                                Thêm mới
                            </span>
                        </li>
                        <li class="function__item " data-value="update">
                            <span class="function__item-title">
                                Chỉnh sửa
                            </span>
                        </li>
                        <li class="function__item" data-value="delete">
                            <span class="function__item-title">
                                Xóa
                            </span>
                        </li>
    
    
                    </ul>
                    <form id="form-admin">
                        <div class="form-container">
    
                            <div class="form-group">
                                <label for="product-id" class="form-label">Mã Phiên bản</label>
    
                                <input id="maPB" name="product-id" type="text" "
                                    class="form-control" disabled="true">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="product-name" class="form-label">Mã sản phẩm</label>
    
                                <input disabled="true" id="maSP" name="product-name" type="text" "
                                    class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="product-price-old" class="form-label">Màu sắc</label>
    
                                <input id="mauSac" name="product-price-old" type="text"
                                    class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="product-price-current" class="form-label">RAM</label>
    
                                <input id="ram" name="product-price-current" type="text"
                                    class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                           
                            <div class="form-group">
                                <label for="product-sale" class="form-label">ROM</label>
    
                                <input id="rom" name="product-sale" type="text" 
                                    class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                          
                           
                            <div class="form-group">
                            <label for="product-brand" class="form-label">Trạng thái</label>
                            <select name="product-brand" id="trangThai" class="form-control">
                            <option >--Chọn trạng thái--</option>
                                <option value="on">on</option>
                                <option value="off">off</option>
                    
                          
                            </select>
                            <span class="form-message"></span>
                        </div>
                    <div class="form-group">
                    <label for="product-sale" class="form-label">Số lượng</label>

                    <input id="soLuong" name="product-sale" type="text" 
                        class="form-control">

                    <span class="form-message"></span>
                </div>
                <div class="form-group">
                <label for="product-sale" class="form-label">Giá giảm</label>

                <input id="giaGiam" name="product-sale" type="text" 
                    class="form-control">

                <span class="form-message"></span>
            </div>
            <div class="form-group">
            <label for="product-sale" class="form-label">Giá bán</label>

            <input id="giaBan" name="product-sale" type="text" 
                class="form-control">

            <span class="form-message"></span>
        </div>
    
                        </div>
                        <div class="form-controls">
                            <button type="button" class="btn-control" id="btn-save">Lưu</button>
                            <button type="button"  class="btn-control" id="btn-add">Thêm</button>
                            <button type="button" onclick="huyPhienBan()" class="btn-control" id="btn-cancel">Hủy</button>
                        </div>
                    </form>
     <div class="group">
        <svg viewBox="0 0 24 24" aria-hidden="true" class="search-icon">
            <g>
                <path
                    d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                </path>
            </g>
        </svg>

        <input id="query" class="input" type="search" placeholder="Search..." name="searchbar" />
    </div>
                </div>
                <table id="product-table">
                    <thead>
                        <tr class="product-table__heading">
                            <th>Mã Phiên bản</th>                           
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Màu sắc</th>
                            <th>RAM</th>
                            <th>ROM</th>
                            <th>Số lượng</th>
                            <th>Giá giảm</th>
                            <th>Giá bán</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody class="product-table__list">
                            <tr class="product-table__row product-table__row--clicked">
                                <td>1</td>
                                <td>Samsung Galaxy S23 Ultra 256GB</td>
                                <td>10000000</td>
                                <td>9000000</td>
                                <td>Đã xử lý</td>
                                <td>
                                    <button class="product-table__update-btn product-table-btn">Sửa</button>
                                    <button class="product-table__delete-btn product-table-btn">Xóa</button>
                                </td>
                            </tr>
    
                        </tbody>
                </table>
                `;
        initPhienBanPage();
      }

      if (item.getAttribute("data-value") === "ql-nhacungcap") {
        item.classList.add("active");
        contentContainer.innerHTML = `
                    <div class="top-line">
                    <h1 class="top-line__heading">QUẢN LÝ NHÀ CUNG CẤP</h1>
                </div>
    
    
                <div class="content__container">
                    <ul class="function__list">
                        <li class="function__item active" data-value="add">
                            <span class="function__item-title">
                                Thêm mới
                            </span>
                        </li>
                        <li class="function__item " data-value="update">
                            <span class="function__item-title">
                                Chỉnh sửa
                            </span>
                        </li>
                        <li class="function__item" data-value="delete">
                            <span class="function__item-title">
                                Xóa
                            </span>
                        </li>
    
    
                    </ul>
                    <form id="form-admin">
                        <div class="form-container">
    
                            <div class="form-group">
                                <label for="user-id" class="form-label">Mã nhà cung cấp</label>
    
                                <input id="maNCC" name="user-id" type="text" class="form-control" disabled="true">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="user-full_name" class="form-label">Tên nhà cung cấp</label>
    
                                <input id="tenNCC" name="user-full_name" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
    
                            <div class="form-group">
                                <label for="user-username" class="form-label">Điạ chỉ</label>
    
                                <input id="diaChi" name="user-username" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="user-password" class="form-label">Số điện thoại</label>
    
                                <input id="sdt" name="user-password" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                            <label for="user-email" class="form-label">Trạng thái</label>

                            <select id="trangThai" style="height: 100%;">
                            <option value="on">On</option>
                            <option value="off">Off</option>                             
                        </select>

                            <span class="form-message"></span>
                        </div>
                            <div class="form-group">
                                <label for="user-password" class="form-label">Email</label>
    
                                <input id="email" name="user-password" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                           
                           
                           
    
    
                        </div>
                        <div class="form-controls">
                            <button type="button"  class="btn-control" id="btn-save">Cập nhật</button>
                             <button type="button"  class="btn-control" id="btn-add">Thêm</button>
                            <button type="button" onclick="huyNhaCungCap()"  class="btn-control" id="btn-cancel">Hủy</button>
                        </div>
                        <div class="group">
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="search-icon">
                            <g>
                                <path
                                    d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                                </path>
                            </g>
                        </svg>
                
                        <input id="query" class="input" type="search" placeholder="Search..." name="searchbar" />
                    </div>
                    </form>
                    <table id="product-table">
                        <thead>
                            <tr class="product-table__heading">
                                <th>Mã nhà cung cấp</th>
                                <th>Tên nhà cung cấp</th>
                                <th>Địa chỉ</th>
                                <th>Số điện thoại</th>
                                <th>Email</th>
                                <th>Trạng thái</th>  
                                <th>Hành động</th>                        
                                <!-- <th></th> -->
    
                            </tr>
                        </thead>
                        <tbody class="product-table__list">
                            <tr class="product-table__row product-table__row--clicked">
                                <td>1</td>
                                <td>Samsung Galaxy S23 Ultra 256GB</td>
                                <td>10000000</td>
                                <td>9000000</td>
                                <td>Đã xử lý</td>
                                <td>
                                    <button class="product-table__update-btn product-table-btn">Sửa</button>
                                    <button class="product-table__delete-btn product-table-btn">Xóa</button>
                                </td>
                            </tr>
    
                        </tbody>
                    </table>
    
                </div>
                `;
        initNhaCungCapPage();
      }
      if (item.getAttribute("data-value") === "ql-phieunhap") {
        item.classList.add("active");
        contentContainer.innerHTML = `
                    <div class="top-line">
                    <h1 class="top-line__heading">QUẢN LÝ PHIẾU NHẬP</h1>
                </div>
    
    
                <div class="content__container">
                <div class="inventory-container">
        <!-- Search and Table Section -->
        <div class="inventory-left-panel">
            <div class="inventory-search-bar">
                <label for="inventory-search">Searching</label>
                <input type="text" id="inventory-search"  placeholder="Enter search term"   >
            </div>
            <div class="inventory-table-wrapper">
                <table class="inventory-data-table">
                    <thead>
                        <tr>
                            <th>Mẫ PN</th>
                            <th>Mã NV</th>
                            <th>Nhà cung cấp</th>
                            <th>Trạng thái</th>
                            <th>Ngày nhập</th>
                            <th>Tổng tiền</th>
                        </tr>
                    </thead>
                    <tbody id="inventory-data-body">
                        <!-- Rows will be dynamically added -->
                    </tbody>
                </table>
            </div>

            <div class="inventory-button-bar">
                <button id="inventory-delete-btn">Delete</button>
                <button id="inventory-accept-btn" >Xác nhận</button>
            </div>
        </div>

        <!-- Right Panel -->
        <div class="inventory-right-panel">
            <div class="inventory-search-bar">
              
            
               
            </div>
            <table class="inventory-data-table right_panel_product">
                <thead>
                    <tr>

                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá nhập</th>
                    </tr>
                </thead>
                <tbody id="inventory-product-body">
                    <!-- Add rows dynamically -->
                </tbody>
            </table>
        </div>
    </div>
                </div>
                `;
        initNhapPage();
      }
      if (item.getAttribute("data-value") === "ql-hoadon") {
        item.classList.add("active");
        contentContainer.innerHTML = `
                    <div class="top-line">
                    <h1 class="top-line__heading">QUẢN LÝ ĐƠN HÀNG</h1>
                </div>
    
    
                <div class="content__container">
                <div class="inventory-container">
        <!-- Search and Table Section -->
        <div class="inventory-left-panel">
            <div class="inventory-search-bar">
                <label for="inventory-search">Searching</label>
                <input type="text" id="inventory-search"  placeholder="Enter search term"   >
            </div>
            <div class="inventory-table-wrapper">
                <table class="inventory-data-table">
                    <thead>
                        <tr>
                            <th>Mã ĐH</th>
                            <th>Mã NV</th>
                            <th>Mã KH</th>
                            <th>Mã KM</th>
                            <th>Ngày đặt</th>
                            <th>Trạng thái</th>
                            <th>HTTT</th>
                            <th>Tổng tiền</th>
                        </tr>
                    </thead>
                    <tbody id="inventory-data-body">
                        <!-- Rows will be dynamically added -->
                    </tbody>
                </table>
            </div>

            <div class="inventory-button-bar">
                <button id="inventory-danggiao-btn">Đang giao</button>
                <button id="inventory-accept-btn" >Xác nhận</button>
            </div>
        </div>

        <!-- Right Panel -->
        <div class="inventory-right-panel">
            <div class="inventory-search-bar">
              
            
               
            </div>
            <table class="inventory-data-table right_panel_product">
                <thead>
                    <tr>

                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Số seri</th>
                        <th>Giá bán</th>
                    </tr>
                </thead>
                <tbody id="inventory-product-body">
                    <!-- Add rows dynamically -->
                </tbody>
            </table>
        </div>
    </div>
                </div>
                `;
        initDonHangPage();
      }

      if (item.getAttribute("data-value") === "product-page") {
        redirectToProductPage();
      }

      const logOutBtn = $("#log-out-btn");
      logOutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        User.logOut();
        // redirectToProductPage()
      });
    });
  });
} else {
  window.location.href = "/index.html";
}

// Các hàm validate
const validate = {
  validateProductName: function (name) {
    let value = true;
    let message = "Hợp lệ";
    if (name.trim() === "") {
      value = false;
      message = "Tên sản phẩm không được để trống";
      return { value, message };
    }
    if (name.length < 7) {
      value = false;
      message = "Tên sản phẩm phải ít nhất 7 ký tự";
      return { value, message };
    }
    if (/^\d+$/.test(name)) {
      value = false;
      message = "Tên sản phẩm không được chứa toàn bộ là số";
      return { value, message };
    }
    return { value, message };
  },

  showErrMessage: function (errorLabel, message) {
    errorLabel.innerText = message;
    errorLabel.classList.add("active");
  },
  validateProductInt: function (input) {
    let value = true;
    let message = "Hợp lệ";
    if (input.toString().trim() === "") {
      value = false;
      message = "Không được để trống";
      return { value, message };
    }
    if (/\D/.test(input)) {
      value = false;
      message = "Không được chứa ký tự chữ";
    }
    return { value, message };
  },
  hideErrMessage: function (errorLabel) {
    errorLabel.innerText = "";
    errorLabel.classList.remove("active");
  },
  hideAllErrMessage: function (listErrorMessage) {
    listErrorMessage.forEach((mess) => {
      mess.innerText = "";
      mess.classList.remove("active");
    });
  },
  validateProductList: function (list) {
    let value = true;
    let message = "Hợp lệ";
    if (!list || list.length === 0) {
      value = false;
      message = "Phải chọn ít nhất 1 giá trị";
    }
    return { value, message };
  },
  validateValue: function (input) {
    let value = true;
    let message = "Hợp lệ";
    if (input.trim() === "") {
      value = false;
      message = "Phải chọn ít nhất 1 giá trị";
    }
    return { value, message };
  },
  validateUserFullName: function (fullName) {
    let value = true;
    let message = "Hợp lệ";
    if (fullName.trim() === "") {
      value = false;
      message = "Họ tên không được để trống";
      return { value, message };
    }

    if (/^\d+$/.test(fullName)) {
      value = false;
      message = "Họ tên không được chứa toàn bộ là số";
      return { value, message };
    }
    return { value, message };
  },
  validateUserUsername: function (username) {
    let value = true;
    let message = "Hợp lệ";
    if (username.trim() === "") {
      value = false;
      message = "Tên đăng nhập không được để trống";
      return { value, message };
    }
    if (username.length < 6) {
      value = false;
      message = "Tên đăng nhập tối thiểu 6 ký tự";
      return { value, message };
    }

    if (/^\d+$/.test(username)) {
      value = false;
      message = "Tên đăng nhập không được chứa toàn bộ là số";
      return { value, message };
    }
    return { value, message };
  },
  validateUserPassword: function (password) {
    let value = true;
    let message = "Hợp lệ";
    if (password.trim() === "") {
      value = false;
      message = "Mật khẩu không được để trống";
      return { value, message };
    }
    if (password.length < 6) {
      value = false;
      message = "Mật khẩu tối thiểu 6 ký tự";
      return { value, message };
    }
    return { value, message };
  },
  validateUserEmail: function (email) {
    let value = true;
    let message = "Hợp lệ";
    if (email.trim() === "") {
      value = false;
      message = "Email không được để trống";
      return { value, message };
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      value = false;
      message = "Email phải đúng định dạng. VD: wizardsc1111@gmail.com";
      return { value, message };
    }
    return { value, message };
  },
  validateUserPhone: function (phone) {
    let value = true;
    let message = "Hợp lệ";
    if (/\D/.test(phone)) {
      value = false;
      message = "SĐT không được chứa ký tự chữ";
    }
    return { value, message };
  },
};
// SAN PHAM
async function initProductPage() {
  const searchInput = document.getElementById("query");

  // Khai báo biến sanpham ở phạm vi toàn cục trong hàm
  let sanpham = [];

  // Lắng nghe sự kiện input để tìm kiếm
  searchInput.addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase(); // Lấy giá trị nhập vào và chuyển thành chữ thường
    console.log("Giá trị nhập:", searchTerm);

    // Lọc sản phẩm dựa trên từ khóa tìm kiếm
    const filteredProducts = sanpham.filter((sp) => {
      return (
        sp.tenSP.toLowerCase().includes(searchTerm) || // Tìm theo tên sản phẩm
        sp.thuongHieu.toLowerCase().includes(searchTerm) || // Tìm theo thương hiệu
        sp.maSP.toLowerCase().includes(searchTerm) // Tìm theo mã sản phẩm
      );
    });

    // Hiển thị lại danh sách sản phẩm sau khi lọc
    renderProducts(filteredProducts);
  });

  try {
    const response = await fetch("http://localhost:8080/phonestore/get-phone");
    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu khuyến mãi");

    const data = await response.json();
    sanpham = data.data; // Gán giá trị cho biến sanpham đã khai báo ở trên
    console.log("sanpham: ", sanpham);

    // Hiển thị sản phẩm ban đầu (khi chưa tìm kiếm)
    renderProducts(sanpham);
  } catch (error) {
    console.error("Lỗi khi gọi API khuyến mãi:", error);
  }

  // Hàm để render sản phẩm lên bảng
  function renderProducts(products) {
    let html = "";
    products
      .slice()
      .reverse()
      .forEach((sp) => {
        html += `
          <tr class="product-table__row" data-value="${sp.maSP}">
              <td>${sp.maSP}</td>
              <td>${sp.tenSP}</td>
              <td>${sp.thuongHieu}</td>
              <td>${sp.pin}</td>
              <td>${sp.camTruoc}</td>
              <td>${sp.camSau}</td>
              <td>${sp.heDieuHanh}</td>
              <td>${sp.xuatXu}</td>
              <td>${sp.thoiGianBaoHanh}</td>
              <td><img class="product-table__img" src="${sp.hinhAnh}" alt=""></td>
              <td>${sp.trangThai}</td>
              <td>
                  <button id="btn-edit" onclick="editProduct('${sp.maSP}')" class="product-table__update-btn product-table-btn">Sửa</button>              
              </td>
          </tr>
        `;
      });

    document.querySelector(".product-table__list").innerHTML = html;
  }
  const btnUpdate = $("#btn-save");
  const btnAdd = $("#btn-add");
  btnUpdate.addEventListener("click", async (e) => {
    // Lấy giá trị từ các trường nhập liệu
    let maSanPham = document.getElementById("maSP").value;
    let tenSP = document.getElementById("tenSP").value;
    let thuongHieu = document.getElementById("thuongHieu").value;
    let pin = document.getElementById("pin").value;
    let camTruoc = document.getElementById("camTruoc").value;
    let camSau = document.getElementById("camSau").value;
    let heDieuHanh = document.getElementById("heDieuHanh").value;
    let xuatXu = document.getElementById("xuatSu").value;
    let thoiGianBaoHanh = document.getElementById("baoHanh").value;
    let hinhAnh = document.getElementById("hinhAnh").value;
    let trangThai = document.getElementById("trangThai").value;

    // Kiểm tra dữ liệu trước khi gửi đi
    if (
      !maSanPham ||
      !tenSP ||
      !thuongHieu ||
      !camTruoc ||
      !camSau ||
      !heDieuHanh ||
      !xuatXu ||
      !thoiGianBaoHanh ||
      !hinhAnh ||
      !trangThai
    ) {
      alert("Vui lòng điền đầy đủ các thông tin.");
      return;
    }

    // Tạo đối tượng dữ liệu
    const data = {
      maSP: maSanPham,
      tenSP: tenSP,
      hinhAnh: hinhAnh,
      thuongHieu: thuongHieu,
      pin: pin,
      camTruoc: camTruoc,
      camSau: camSau,
      heDieuHanh: heDieuHanh,
      xuatXu: xuatXu,
      thoiGianBaoHanh: thoiGianBaoHanh,
      trangThai: trangThai,
    };

    console.log("data: ", data);

    // Gọi API để cập nhật khuyến mãi
    try {
      const response = await fetch(
        "http://localhost:8080/phonestore/update-sanpham",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // Chuyển đối tượng data thành chuỗi JSON
        }
      );

      if (!response.ok) {
        throw new Error("Có lỗi xảy ra khi cập nhật khuyến mãi");
      }

      // Xử lý phản hồi từ API (nếu cần)
      const result = await response.json();
      console.log("Cập nhật thành công:", result);

      // Thông báo cập nhật thành công
      alert("Cập nhật sản phẩm thành công!");

      // Reload lại trang
    } catch (error) {
      console.error("Cập nhật thất bại:", error);
      alert("Có lỗi xảy ra khi cập nhật khuyến mãi!");
    }
  });
  btnAdd.addEventListener("click", async (e) => {
    e.preventDefault();

    // Lấy giá trị từ các trường nhập liệu
    let tenSP = document.getElementById("tenSP").value;
    let thuongHieu = document.getElementById("thuongHieu").value;
    let pin = document.getElementById("pin").value;
    let camTruoc = document.getElementById("camTruoc").value;
    let camSau = document.getElementById("camSau").value;
    let heDieuHanh = document.getElementById("heDieuHanh").value;
    let xuatXu = document.getElementById("xuatSu").value;
    let thoiGianBaoHanh = document.getElementById("baoHanh").value;
    let hinhAnh = document.getElementById("hinhAnh").value;
    let trangThai = document.getElementById("trangThai").value;

    // Kiểm tra dữ liệu trước khi gửi đi
    if (
      !tenSP ||
      !thuongHieu ||
      !pin ||
      !camTruoc ||
      !camSau ||
      !heDieuHanh ||
      !xuatXu ||
      !thoiGianBaoHanh ||
      !hinhAnh ||
      !trangThai
    ) {
      alert("Vui lòng điền đầy đủ các thông tin.");
      return;
    }

    // Tạo đối tượng dữ liệu
    const data = {
      tenSP,
      thuongHieu,
      pin,
      camTruoc,
      camSau,
      heDieuHanh,
      xuatXu,
      thoiGianBaoHanh,
      hinhAnh,
      trangThai,
    };

    console.log("data: ", data);

    // Gọi API để thêm sản phẩm
    try {
      const response = await fetch(
        "http://localhost:8080/phonestore/add-phone",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Có lỗi xảy ra khi thêm sản phẩm");
      }

      // Xử lý phản hồi từ API
      const result = await response.json();
      console.log("Thêm thành công:", result);

      // Kiểm tra nếu dữ liệu trả về hợp lệ
      if (result && result.product) {
        // Thêm sản phẩm mới vào bảng
        const table = document.getElementById("product-table");
        const newRow = table.insertRow();

        // Thêm các ô (td) vào hàng mới
        newRow.innerHTML = `
          <tr>
            <td>${result.product.maSP}</td>
            <td>${result.product.tenSP}</td>
            <td>${result.product.thuongHieu}</td>
            <td>${result.product.pin}</td>
            <td>${result.product.camTruoc}</td>
            <td>${result.product.camSau}</td>
            <td>${result.product.heDieuHanh}</td>
            <td>${result.product.xuatXu}</td>
            <td>${result.product.thoiGianBaoHanh}</td>
            <td>${result.product.hinhAnh}</td>
            <td>${result.product.trangThai}</td>
            <td>
              <button
                id="btn-edit"
                onclick="editSanPham('${result.product.maSP}')"
                class="product-table__update-btn product-table-btn"
              >
                Sửa
              </button>
            </td>
          </tr>
        `;
      }

      // Thông báo thành công
      alert("Thêm sản phẩm thành công!");
    } catch (error) {
      console.error("Có lỗi xảy ra:", error);
      alert("Có lỗi xảy ra khi thêm sản phẩm!");
    }
  });
}

const editProduct = async (maSP) => {
  console.log("maSP: ", maSP);
  let row = document.querySelector(`tr[data-value='${maSP}']`);
  // Lấy các giá trị từ các ô trong dòng
  let maSanPham = row.querySelector("td:nth-child(1)").textContent;
  let tenSP = row.querySelector("td:nth-child(2)").textContent;
  let thuongHieu = row.querySelector("td:nth-child(3)").textContent;
  let pin = row.querySelector("td:nth-child(4)").textContent;
  let camTruoc = row.querySelector("td:nth-child(5)").textContent;
  let camSau = row.querySelector("td:nth-child(6)").textContent;
  let heDieuHanh = row.querySelector("td:nth-child(7)").textContent;
  let xuatSu = row.querySelector("td:nth-child(8)").textContent;

  let thoiGianBaoHanh = row.querySelector("td:nth-child(9)").textContent;

  let hinhAnh = row.querySelector("td:nth-child(10) img").getAttribute("src");

  let trangThai = row.querySelector("td:nth-child(11)").textContent;
  // Điền các giá trị vào các ô nhập liệu
  document.getElementById("maSP").value = maSanPham;
  document.getElementById("tenSP").value = tenSP;
  document.getElementById("thuongHieu").value = thuongHieu;
  document.getElementById("pin").value = pin;
  document.getElementById("camTruoc").value = camTruoc;
  document.getElementById("camSau").value = camSau;
  document.getElementById("heDieuHanh").value = heDieuHanh;
  document.getElementById("xuatSu").value = xuatSu;
  document.getElementById("baoHanh").value = thoiGianBaoHanh;
  document.getElementById("hinhAnh").value = hinhAnh;
  document.getElementById("trangThai").value = trangThai;

  // Chuyển trạng thái active sang "Chỉnh sửa"
  // Lấy tất cả các phần tử <li> có lớp "function__item"
  let items = document.querySelectorAll(".function__item");

  // Xóa lớp active khỏi tất cả các phần tử
  items.forEach((item) => {
    item.classList.remove("active");
  });

  // Thêm lớp active vào phần tử "Chỉnh sửa"
  let updateItem = document.querySelector('li[data-value="update"]');
  if (updateItem) {
    updateItem.classList.add("active");
  }
};
const huyProduct = () => {
  document.getElementById("maSP").value = "";
  document.getElementById("tenSP").value = "";
  document.getElementById("thuongHieu").value = "";
  document.getElementById("pin").value = "";
  document.getElementById("camTruoc").value = "";
  document.getElementById("camSau").value = "";
  document.getElementById("heDieuHanh").value = "";
  document.getElementById("xuatSu").value = "";
  document.getElementById("baoHanh").value = "";
  document.getElementById("hinhAnh").value = "";
  document.getElementById("trangThai").value = "";

  // Chuyển trạng thái active sang "Chỉnh sửa"
  // Lấy tất cả các phần tử <li> có lớp "function__item"
  let items = document.querySelectorAll(".function__item");

  // Xóa lớp active khỏi tất cả các phần tử
  items.forEach((item) => {
    item.classList.remove("active");
  });

  // Thêm lớp active vào phần tử "Chỉnh sửa"
  let updateItem = document.querySelector('li[data-value="add"]');
  if (updateItem) {
    updateItem.classList.add("active");
  }
};

// PHIEN BAN
async function initPhienBanPage() {
  const searchInput = document.getElementById("query");

  // Khai báo biến sanpham ở phạm vi toàn cục trong hàm
  let sanpham = [];

  // Lắng nghe sự kiện input để tìm kiếm
  searchInput.addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase(); // Lấy giá trị nhập vào và chuyển thành chữ thường
    console.log("Giá trị nhập:", searchTerm);

    // Lọc sản phẩm và phiên bản chỉ dựa trên maPB
    const filteredProducts = sanpham.filter((sp) => {
      // Kiểm tra nếu có bất kỳ phiên bản nào khớp với maPB
      const matchesPhienBan =
        sp.phienbansps &&
        sp.phienbansps.some((pb) => pb.maPB.toLowerCase().includes(searchTerm));

      console.log("matchesPhienBan: ", matchesPhienBan);
      return matchesPhienBan; // Chỉ trả về sản phẩm có phiên bản phù hợp
    });

    // Hiển thị lại danh sách sản phẩm sau khi lọc
    renderProducts(filteredProducts, searchTerm);
  });

  try {
    const response = await fetch("http://localhost:8080/phonestore/get-phone");
    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu sản phẩm");

    const data = await response.json();
    sanpham = data.data; // Gán dữ liệu vào biến sanpham toàn cục
    console.log("sanpham: ", sanpham);

    // Hiển thị danh sách sản phẩm ban đầu
    renderProducts(sanpham);
  } catch (error) {
    console.error("Lỗi khi gọi API sản phẩm:", error);
  }
}

async function initPhienBanPage() {
  const searchInput = document.getElementById("query");

  // Khai báo biến sanpham ở phạm vi toàn cục trong hàm
  let sanpham = [];

  // Lắng nghe sự kiện input để tìm kiếm
  searchInput.addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase(); // Lấy giá trị nhập vào và chuyển thành chữ thường
    console.log("Giá trị nhập:", searchTerm);

    // Lọc sản phẩm và phiên bản chỉ dựa trên maPB
    const filteredProducts = sanpham.filter((sp) => {
      // Kiểm tra nếu có bất kỳ phiên bản nào khớp với maPB
      const matchesPhienBan =
        sp.phienbansps &&
        sp.phienbansps.some((pb) => pb.maPB.toLowerCase().includes(searchTerm));

      console.log("matchesPhienBan: ", matchesPhienBan);
      return matchesPhienBan; // Chỉ trả về sản phẩm có phiên bản phù hợp
    });

    // Hiển thị lại danh sách sản phẩm sau khi lọc
    renderProducts(filteredProducts, searchTerm);
  });

  try {
    const response = await fetch("http://localhost:8080/phonestore/get-phone");
    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu sản phẩm");

    const data = await response.json();
    sanpham = data.data; // Gán dữ liệu vào biến sanpham toàn cục
    console.log("sanpham: ", sanpham);

    // Hiển thị danh sách sản phẩm ban đầu
    renderProducts(sanpham);
  } catch (error) {
    console.error("Lỗi khi gọi API sản phẩm:", error);
  }
}

// Hàm renderProducts hiển thị danh sách sản phẩm
function renderProducts(sanpham, searchTerm = "") {
  let html = "";

  sanpham
    .slice()
    .reverse()
    .forEach((sp) => {
      if (sp.phienbansps && sp.phienbansps.length > 0) {
        sp.phienbansps
          .slice()
          .reverse()
          .forEach((pb) => {
            if (!searchTerm || pb.maPB.toLowerCase().includes(searchTerm)) {
              html += `
              <tr class="product-table__row" data-value="${pb.maPB}">
                <td>${pb.maPB}</td>
                <td>${sp.maSP}</td>
                <td>${sp.tenSP}</td>
                <td><img class="product-table__img" src="${sp.hinhAnh}" alt=""></td>
                <td>${pb.mauSac}</td>
                <td>${pb.RAM}</td>
                <td>${pb.ROM}</td>
                <td>${pb.soLuong}</td>
                <td>${pb.giaGiam}</td>
                <td>${pb.giaBan}</td>
                <td>${pb.trangThai}</td>
                <td>
                  <button id="btn-edit" onclick="addPhienBan('${sp.maSP}')" class="product-table__update-btn product-table-btn">Thêm phiên bản</button>
                  <button id="btn-edit" onclick="editPhienBan('${pb.maPB}')" class="product-table__update-btn product-table-btn">Sửa</button>
                </td>
              </tr>
            `;
            }
          });
      }
    });

  document.querySelector(".product-table__list").innerHTML = html;

  const btnUpdate = $("#btn-save");
  const btnAdd = $("#btn-add");
  btnUpdate.addEventListener("click", async (e) => {
    let maPB = document.getElementById("maPB").value;
    let mauSac = document.getElementById("mauSac").value;
    let ram = document.getElementById("ram").value;
    let rom = document.getElementById("rom").value;
    let soLuong = document.getElementById("soLuong").value;
    let giaGiam = document.getElementById("giaBan").value;
    let giaBan = document.getElementById("giaGiam").value;
    let trangThai = document.getElementById("trangThai").value;
    if (
      !maPB ||
      !mauSac ||
      !ram ||
      !rom ||
      !soLuong ||
      !giaGiam ||
      !giaBan ||
      !trangThai
    ) {
      alert("Vui lòng điền đầy đủ các thông tin.");
      return;
    }

    // Tạo đối tượng dữ liệu
    const data = {
      maPB: maPB,
      mauSac: mauSac,
      RAM: ram,
      ROM: rom,
      soLuong: soLuong,
      giaGiam: giaGiam,
      giaBan: giaBan,
      trangThai: trangThai,
    };

    console.log("data: ", data);

    // Gọi API để cập nhật khuyến mãi
    try {
      const response = await fetch(
        "http://localhost:8080/phonestore/update-phienban",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // Chuyển đối tượng data thành chuỗi JSON
        }
      );

      if (!response.ok) {
        throw new Error("Có lỗi xảy ra khi cập nhật khuyến mãi");
      }

      // Xử lý phản hồi từ API (nếu cần)
      const result = await response.json();
      console.log("Cập nhật thành công:", result);

      // Thông báo cập nhật thành công
      alert("Cập nhật phiên bản thành công!");
    } catch (error) {
      console.error("Cập nhật thất bại:", error);
      alert("Có lỗi xảy ra khi cập nhật phiên bản!");
    }
  });
  btnAdd.addEventListener("click", async (e) => {
    e.preventDefault(); // Ngăn chặn reload trang mặc định
    let maPB = document.getElementById("maPB").value;
    let maSP = document.getElementById("maSP").value;
    let mauSac = document.getElementById("mauSac").value;
    let ram = document.getElementById("ram").value;
    let rom = document.getElementById("rom").value;
    let soLuong = document.getElementById("soLuong").value;
    let giaGiam = document.getElementById("giaBan").value;
    let giaBan = document.getElementById("giaGiam").value;
    let trangThai = document.getElementById("trangThai").value;
    // Kiểm tra dữ liệu trước khi gửi đi
    if (
      !maSP ||
      !mauSac ||
      !ram ||
      !rom ||
      !soLuong ||
      !giaGiam ||
      !giaBan ||
      !trangThai
    ) {
      alert("Vui lòng điền đầy đủ các thông tin.");
      return;
    }

    // Tạo đối tượng dữ liệu
    const data = {
      maSP: maSP,
      mauSac: mauSac,
      RAM: ram,
      ROM: rom,
      soLuong: soLuong,
      giaGiam: giaGiam,
      giaBan: giaBan,
      trangThai: trangThai,
      maPB: maPB,
    };

    console.log("data: ", data);

    // Gọi API để thêm nhân viên
    try {
      const response = await fetch(
        "http://localhost:8080/phonestore/add-phienban",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        // Hiển thị lỗi cụ thể từ API
        if (result.message) {
          alert("Phiên bản đã tồn tại!!!"); // Hiển thị thông báo lỗi từ server
        } else {
          throw new Error("Có lỗi xảy ra khi thêm nhân viên");
        }
        return;
      }
      // Xử lý phản hồi từ API (nếu cần)

      console.log("Thêm thành công:", result);

      // Kiểm tra nếu dữ liệu trả về đúng cấu trúc
      if (result && result.data) {
        // Thêm hàng mới vào bảng
        const table = document.getElementById("product-table"); // Lấy bảng bằng ID
        const newRow = table.insertRow(); // Thêm một hàng mới vào cuối bảng

        // Thêm các ô (td) vào hàng mới
        newRow.innerHTML = `
        <td>${result.data.maPB}</td>
        <td></td>
                     <td></td>
                     <td></td>
                     <td>${result.data.mauSac}</td>
                     <td>${result.data.RAM}</td>
                     <td>${result.data.ROM}</td>
                     <td>${result.data.soLuong}</td>
                     <td>${result.data.giaGiam}</td>
                     <td>${result.data.giaBan}</td>
                     <td>${result.data.trangThai}</td>
                     `;
      }

      console.log("Thêm thành công:", result);

      // Cập nhật bảng (nếu cần)
      alert("Thêm phiên bản thành công!");
    } catch (error) {
      console.error("Có lỗi xảy ra:", error);
      alert("Đã xảy ra lỗi trong quá trình xử lý!");
    }
  });
}

const addPhienBan = async (maSP) => {
  console.log("maSP: ", maSP);
  document.getElementById("maPB").value = "";

  // Điền các giá trị vào các ô nhập liệu
  document.getElementById("maSP").value = maSP;

  // Chuyển trạng thái active sang "Chỉnh sửa"
  // Lấy tất cả các phần tử <li> có lớp "function__item"
  let items = document.querySelectorAll(".function__item");

  // Xóa lớp active khỏi tất cả các phần tử
  items.forEach((item) => {
    item.classList.remove("active");
  });

  // Thêm lớp active vào phần tử "Chỉnh sửa"
  let updateItem = document.querySelector('li[data-value="update"]');
  if (updateItem) {
    updateItem.classList.add("active");
  }
};
const editPhienBan = async (maPB) => {
  console.log("maPB: ", maPB);
  document.getElementById("maSP").value = "";
  let row = document.querySelector(`tr[data-value='${maPB}']`);
  // Lấy các giá trị từ các ô trong dòng
  let maPhienBan = row.querySelector("td:nth-child(1)").textContent;
  let maSanPham = row.querySelector("td:nth-child(2)").textContent;
  let mauSac = row.querySelector("td:nth-child(5)").textContent;
  let ram = row.querySelector("td:nth-child(6)").textContent;
  let rom = row.querySelector("td:nth-child(7)").textContent;
  let soLuong = row.querySelector("td:nth-child(8)").textContent;
  let giaGiam = row.querySelector("td:nth-child(9)").textContent;
  let giaBan = row.querySelector("td:nth-child(10)").textContent;
  let trangThai = row.querySelector("td:nth-child(11)").textContent;
  // Điền các giá trị vào các ô nhập liệu
  document.getElementById("maPB").value = maPhienBan;
  document.getElementById("maSP").value = maSanPham;
  document.getElementById("mauSac").value = mauSac;
  document.getElementById("ram").value = ram;
  document.getElementById("rom").value = rom;
  document.getElementById("soLuong").value = soLuong;
  document.getElementById("giaBan").value = giaGiam;
  document.getElementById("giaGiam").value = giaBan;
  document.getElementById("trangThai").value = trangThai;
  // Chuyển trạng thái active sang "Chỉnh sửa"
  // Lấy tất cả các phần tử <li> có lớp "function__item"
  let items = document.querySelectorAll(".function__item");
  console.log("items: ", items);

  // Xóa lớp active khỏi tất cả các phần tử
  items.forEach((item) => {
    item.classList.remove("active");
  });

  // Thêm lớp active vào phần tử "Chỉnh sửa"
  let updateItem = document.querySelector('li[data-value="update"]');
  console.log("updateItem: ", updateItem);
  if (updateItem) {
    updateItem.classList.add("active");
  }
};

function huyPhienBan() {
  document.getElementById("maPB").value = "";
  document.getElementById("maSP").value = "";
  document.getElementById("mauSac").value = "";
  document.getElementById("ram").value = "";
  document.getElementById("rom").value = "";
  document.getElementById("soLuong").value = "";
  document.getElementById("giaBan").value = "";
  document.getElementById("giaGiam").value = "";
  document.getElementById("trangThai").value = "";
  // Chuyển trạng thái active sang "Chỉnh sửa"
  // Lấy tất cả các phần tử <li> có lớp "function__item"
  let items = document.querySelectorAll(".function__item");

  // Xóa lớp active khỏi tất cả các phần tử
  items.forEach((item) => {
    item.classList.remove("active");
  });

  // Thêm lớp active vào phần tử "Chỉnh sửa"
  let updateItem = document.querySelector('li[data-value="add"]');
  if (updateItem) {
    updateItem.classList.add("active");
  }
}

// ACCOUNT

async function initUserPage() {
  const searchInput = document.getElementById("query");
  const btnUpdate = document.getElementById("btn-save");
  const btnAdd = document.getElementById("btn-add");
  const table = document.querySelector(".product-table__list");

  let taiKhoan = []; // Khai báo biến toàn cục

  // Hàm render danh sách tài khoản
  function renderProducts(data) {
    let html = "";
    data.forEach((tk) => {
      html += `
        <tr class="product-table__row" data-value="${tk.tkId}">
          <td>${tk.tkId}</td>
          <td>${tk.tenDangNhap}</td>
          <td>${tk.matKhau}</td>
          <td>${tk.quyen}</td>
          <td>${tk.trangThai}</td>
          <td>
            <button id="btn-edit" onclick="editTaiKhoan('${tk.tkId}')" class="product-table__update-btn product-table-btn">Sửa</button>              
          </td>
        </tr>`;
    });
    table.innerHTML = html;
  }

  // Lọc tài khoản khi tìm kiếm
  searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredAccounts = taiKhoan.filter(
      (tk) =>
        tk.tenDangNhap.toLowerCase().includes(searchTerm) ||
        tk.tkId.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredAccounts);
  });

  // Lấy danh sách tài khoản từ API
  try {
    const response = await fetch("http://localhost:8080/user/get-taikhoan");
    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu tài khoản");
    const data = await response.json();
    taiKhoan = data.data || [];
    renderProducts(taiKhoan);
  } catch (error) {
    console.error("Lỗi khi gọi API tài khoản:", error);
  }

  // Xử lý cập nhật tài khoản
  btnUpdate.addEventListener("click", async () => {
    const data = {
      tkId: document.getElementById("maTk").value,
      tenDangNhap: document.getElementById("tenDangNhap").value,
      matKhau: document.getElementById("password").value,
      quyen: document.getElementById("user-permission").value,
      trangThai: document.getElementById("user-status").value,
    };

    if (Object.values(data).some((val) => !val)) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8080/user/update-taikhoanadmin",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) throw new Error("Lỗi khi cập nhật tài khoản");
      alert("Cập nhật tài khoản thành công!");
      window.location.reload();
    } catch (error) {
      console.error("Cập nhật thất bại:", error);
      alert("Có lỗi xảy ra khi cập nhật tài khoản.");
    }
  });

  // Xử lý thêm tài khoản mới
  btnAdd.addEventListener("click", async () => {
    const data = {
      tenDangNhap: document.getElementById("tenDangNhap").value,
      matKhau: document.getElementById("password").value,
      quyen: document.getElementById("user-permission").value,
      trangThai: document.getElementById("user-status").value,
    };

    if (
      document.getElementById("maTk").value ||
      Object.values(data).some((val) => !val)
    ) {
      alert("Mã tài khoản không được nhập hoặc thiếu thông tin!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/user/add-taikhoan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Lỗi khi thêm tài khoản");
      const result = await response.json();
      taiKhoan.push(result.account); // Cập nhật danh sách
      renderProducts(taiKhoan); // Hiển thị lại danh sách
      alert("Thêm tài khoản thành công!");
    } catch (error) {
      console.error("Thêm tài khoản thất bại:", error);
      alert("Có lỗi xảy ra khi thêm tài khoản.");
    }
  });
}

const editTaiKhoan = async (tkId) => {
  console.log("tkId: ", tkId);
  let row = document.querySelector(`tr[data-value='${tkId}']`);
  // Lấy các giá trị từ các ô trong dòng
  let maTaiKhoan = row.querySelector("td:nth-child(1)").textContent;
  let taiKhoan = row.querySelector("td:nth-child(2)").textContent;
  console.log("taiKhoan: ", taiKhoan);
  let matKhau = row.querySelector("td:nth-child(3)").textContent;
  let quyen = row.querySelector("td:nth-child(4)").textContent;
  let trangThai = row.querySelector("td:nth-child(5)").textContent;

  // Điền các giá trị vào các ô nhập liệu
  document.getElementById("maTk").value = maTaiKhoan;
  document.getElementById("tenDangNhap").value = taiKhoan;
  document.getElementById("password").value = matKhau;
  document.getElementById("user-permission").value = quyen;
  document.getElementById("user-status").value = trangThai;

  // Chuyển trạng thái active sang "Chỉnh sửa"
  // Lấy tất cả các phần tử <li> có lớp "function__item"
  let items = document.querySelectorAll(".function__item");

  // Xóa lớp active khỏi tất cả các phần tử
  items.forEach((item) => {
    item.classList.remove("active");
  });

  // Thêm lớp active vào phần tử "Chỉnh sửa"
  let updateItem = document.querySelector('li[data-value="update"]');
  if (updateItem) {
    updateItem.classList.add("active");
  }
};
const huyTaiKhoan = () => {
  document.getElementById("maTk").value = "";
  document.getElementById("tenDangNhap").value = "";
  document.getElementById("password").value = "";
  document.getElementById("user-permission").value = "";
  document.getElementById("user-status").value = "";

  // Chuyển trạng thái active sang "Chỉnh sửa"
  // Lấy tất cả các phần tử <li> có lớp "function__item"
  let items = document.querySelectorAll(".function__item");

  // Xóa lớp active khỏi tất cả các phần tử
  items.forEach((item) => {
    item.classList.remove("active");
  });

  // Thêm lớp active vào phần tử "Chỉnh sửa"
  let updateItem = document.querySelector('li[data-value="add"]');
  if (updateItem) {
    updateItem.classList.add("active");
  }
};

// NHA CUNG CAP

async function initNhaCungCapPage() {
  const searchInput = document.getElementById("query");

  // Khai báo biến taiKhoan ở phạm vi toàn cục trong hàm
  let taiKhoan = [];

  // Lắng nghe sự kiện input để tìm kiếm
  searchInput.addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase(); // Lấy giá trị nhập vào và chuyển thành chữ thường
    console.log("Giá trị nhập:", searchTerm);

    // Lọc nhà cung cấp dựa trên các trường: maNCC, tenNCC, diaChi, sdt, email, trangThai
    const filteredNhaCungCap = taiKhoan.filter((tk) => {
      const { maNCC, tenNCC, diaChi, sdt, email, trangThai } = tk;
      // Kiểm tra nếu bất kỳ trường nào có chứa giá trị tìm kiếm
      return (
        maNCC.toLowerCase().includes(searchTerm) ||
        tenNCC.toLowerCase().includes(searchTerm) ||
        diaChi.toLowerCase().includes(searchTerm) ||
        sdt.toLowerCase().includes(searchTerm) ||
        email.toLowerCase().includes(searchTerm) ||
        trangThai.toLowerCase().includes(searchTerm)
      );
    });

    // Hiển thị lại danh sách nhà cung cấp sau khi lọc
    renderNhaCungCap(filteredNhaCungCap, searchTerm);
  });

  try {
    const response = await fetch(
      "http://localhost:8080/phonestore/get-nhacungcap"
    );
    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu nhà cung cấp");

    const data = await response.json();
    taiKhoan = data.data;
    console.log("taiKhoan: ", taiKhoan);

    renderNhaCungCap(taiKhoan); // Hiển thị tất cả nhà cung cấp ban đầu
  } catch (error) {
    console.error("Lỗi khi gọi API nhà cung cấp:", error);
  }

  // Hàm hiển thị nhà cung cấp vào bảng
  function renderNhaCungCap(taiKhoan, searchTerm = "") {
    let html = "";
    taiKhoan.forEach((tk) => {
      html += `
        <tr class="product-table__row" data-value="${tk.maNCC}">
          <td>${tk.maNCC}</td>
          <td>${tk.tenNCC}</td>
          <td>${tk.diaChi}</td>
          <td>${tk.sdt}</td>
          <td>${tk.email}</td>
          <td>${tk.trangThai}</td>
          <td>                  
            <button id="btn-edit" onclick="editNhaCungCap('${tk.maNCC}')" class="product-table__update-btn product-table-btn">Sửa</button>   
           
          </td>
        </tr>
      `;
    });

    document.querySelector(".product-table__list").innerHTML = html;
  }

  // Xử lý sự kiện update và add (giống như trước)
  const btnUpdate = document.getElementById("btn-save");
  const btnAdd = document.getElementById("btn-add");

  btnUpdate.addEventListener("click", async (e) => {
    // Lấy dữ liệu từ các trường nhập liệu
    let maNCC = document.getElementById("maNCC").value;
    let tenNCC = document.getElementById("tenNCC").value;
    let diaChi = document.getElementById("diaChi").value;
    let sdt = document.getElementById("sdt").value;
    let email = document.getElementById("email").value;
    let trangThai = document.getElementById("trangThai").value;

    // Kiểm tra dữ liệu nhập
    if (!maNCC || !tenNCC || !diaChi || !sdt || !email || !trangThai) {
      Swal.fire("Lỗi", "Vui lòng điền đầy đủ các thông tin.", "error");
      return;
    }

    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire("Lỗi", "Email không hợp lệ.", "error");
      return;
    }

    // Kiểm tra định dạng số điện thoại
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(sdt)) {
      Swal.fire("Lỗi", "Số điện thoại phải có 10 chữ số.", "error");
      return;
    }

    const data = {
      maNCC,
      tenNCC,
      diaChi,
      sdt,
      email,
      trangThai,
    };

    try {
      const response = await fetch(
        "http://localhost:8080/phonestore/update-nhacungcap",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Có lỗi xảy ra khi cập nhật nhà cung cấp");
      }

      const result = await response.json();
      console.log("Cập nhật thành công:", result);

      // Thông báo thành công
      Swal.fire("Thành công", "Nhà cung cấp đã được cập nhật!", "success");

      // Cập nhật giao diện mà không cần tải lại
      updateTableRow(maNCC, data);
    } catch (error) {
      console.error("Cập nhật thất bại:", error);
      Swal.fire(
        "Lỗi",
        `Không thể cập nhật nhà cung cấp: ${error.message}`,
        "error"
      );
    }
  });

  // Hàm cập nhật giao diện
  function updateTableRow(maNCC, data) {
    const row = document.querySelector(`tr[data-value='${maNCC}']`);
    if (row) {
      row.querySelector("td:nth-child(2)").textContent = data.tenNCC;
      row.querySelector("td:nth-child(3)").textContent = data.diaChi;
      row.querySelector("td:nth-child(4)").textContent = data.sdt;
      row.querySelector("td:nth-child(5)").textContent = data.email;
      row.querySelector("td:nth-child(6)").textContent = data.trangThai;
    }
  }

  btnAdd.addEventListener("click", async (e) => {
    // Lấy dữ liệu từ các trường nhập liệu
    let tenNCC = document.getElementById("tenNCC").value;
    let diaChi = document.getElementById("diaChi").value;
    let sdt = document.getElementById("sdt").value;
    let email = document.getElementById("email").value;
    let trangThai = document.getElementById("trangThai").value;

    // Kiểm tra dữ liệu nhập
    if (!tenNCC || !diaChi || !sdt || !email || !trangThai) {
      Swal.fire("Lỗi", "Vui lòng điền đầy đủ các thông tin.", "error");
      return;
    }

    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire("Lỗi", "Email không hợp lệ.", "error");
      return;
    }

    // Kiểm tra định dạng số điện thoại
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(sdt)) {
      Swal.fire("Lỗi", "Số điện thoại phải có 10 chữ số.", "error");
      return;
    }

    const data = {
      tenNCC,
      diaChi,
      sdt,
      email,
      trangThai,
    };

    try {
      const response = await fetch(
        "http://localhost:8080/phonestore/add-nhacungcap",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Có lỗi xảy ra khi thêm nhà cung cấp");
      }

      const result = await response.json();
      console.log("Thêm thành công:", result);

      // Hiển thị thông báo thành công
      Swal.fire("Thành công", "Nhà cung cấp đã được thêm!", "success");

      // Cập nhật giao diện (thêm dòng mới vào bảng)
      addTableRow(result);

      // Xóa dữ liệu nhập trong form
      clearInputFields();
    } catch (error) {
      console.error("Có lỗi xảy ra:", error);
      Swal.fire(
        "Lỗi",
        `Không thể thêm nhà cung cấp: ${error.message}`,
        "error"
      );
    }
  });

  // Hàm cập nhật giao diện
  function addTableRow(ncc) {
    const table = document.getElementById("supplierTable"); // Giả sử bảng có id là supplierTable
    const newRow = table.insertRow();

    newRow.innerHTML = `
      <td>${ncc.maNCC}</td>
      <td>${ncc.tenNCC}</td>
      <td>${ncc.diaChi}</td>
      <td>${ncc.sdt}</td>
      <td>${ncc.email}</td>
      <td>${ncc.trangThai}</td>
      <td>
        <button class="btn btn-primary btn-edit" data-id="${ncc.maNCC}">Sửa</button>
        <button class="btn btn-danger btn-delete" data-id="${ncc.maNCC}">Xoá</button>
      </td>
    `;
  }

  // Hàm xóa dữ liệu nhập trong form
  function clearInputFields() {
    document.getElementById("tenNCC").value = "";
    document.getElementById("diaChi").value = "";
    document.getElementById("sdt").value = "";
    document.getElementById("email").value = "";
    document.getElementById("trangThai").value = "";
  }
}

const editNhaCungCap = async (maNCC) => {
  console.log("maNCC: ", maNCC);
  let row = document.querySelector(`tr[data-value='${maNCC}']`);
  // Lấy các giá trị từ các ô trong dòng
  let maNhaCungCap = row.querySelector("td:nth-child(1)").textContent;
  let tenNCC = row.querySelector("td:nth-child(2)").textContent;
  let diaChi = row.querySelector("td:nth-child(3)").textContent;
  let sdt = row.querySelector("td:nth-child(4)").textContent;
  let email = row.querySelector("td:nth-child(5)").textContent;
  let trangThai = row.querySelector("td:nth-child(6)").textContent;

  // Điền các giá trị vào các ô nhập liệu
  document.getElementById("maNCC").value = maNhaCungCap;
  document.getElementById("tenNCC").value = tenNCC;
  document.getElementById("diaChi").value = diaChi;
  document.getElementById("sdt").value = sdt;
  document.getElementById("email").value = email;
  document.getElementById("trangThai").value = trangThai;
  // Chuyển trạng thái active sang "Chỉnh sửa"
  // Lấy tất cả các phần tử <li> có lớp "function__item"
  let items = document.querySelectorAll(".function__item");

  // Xóa lớp active khỏi tất cả các phần tử
  items.forEach((item) => {
    item.classList.remove("active");
  });

  // Thêm lớp active vào phần tử "Chỉnh sửa"
  let updateItem = document.querySelector('li[data-value="update"]');
  if (updateItem) {
    updateItem.classList.add("active");
  }
};
const huyNhaCungCap = () => {
  document.getElementById("maNCC").value = "";
  document.getElementById("tenNCC").value = "";
  document.getElementById("diaChi").value = "";
  document.getElementById("sdt").value = "";
  document.getElementById("email").value = "";
  document.getElementById("trangThai").value = "";

  // Chuyển trạng thái active sang "Chỉnh sửa"
  // Lấy tất cả các phần tử <li> có lớp "function__item"
  let items = document.querySelectorAll(".function__item");

  // Xóa lớp active khỏi tất cả các phần tử
  items.forEach((item) => {
    item.classList.remove("active");
  });

  // Thêm lớp active vào phần tử "Chỉnh sửa"
  let updateItem = document.querySelector('li[data-value="add"]');
  if (updateItem) {
    updateItem.classList.add("active");
  }
};

// NHAN VIEN

async function initNhanVienPage() {
  const searchInput = document.getElementById("query");

  // Khai báo biến taiKhoan ở phạm vi toàn cục
  let taiKhoan = [];

  // Lắng nghe sự kiện input để tìm kiếm
  searchInput.addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase(); // Lấy giá trị nhập vào và chuyển thành chữ thường
    console.log("Giá trị nhập:", searchTerm);

    // Lọc nhân viên dựa trên các trường như: maNV, maTK, hoTen, sdt, email, vaiTro, trangThai
    const filteredNhanVien = taiKhoan.filter((nv) => {
      const { maNV, maTK, hoTen, sdt, email, vaiTro, trangThai } = nv;
      // Kiểm tra nếu bất kỳ trường nào có chứa giá trị tìm kiếm
      return (
        maNV.toLowerCase().includes(searchTerm) ||
        maTK.toLowerCase().includes(searchTerm) ||
        hoTen.toLowerCase().includes(searchTerm) ||
        sdt.toLowerCase().includes(searchTerm) ||
        email.toLowerCase().includes(searchTerm) ||
        vaiTro.toLowerCase().includes(searchTerm) ||
        trangThai.toLowerCase().includes(searchTerm)
      );
    });

    // Hiển thị lại danh sách nhân viên sau khi lọc
    renderNhanVien(filteredNhanVien);
  });

  try {
    const response = await fetch("http://localhost:8080/user/get-nhanvien");
    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu nhân viên");

    const data = await response.json();
    taiKhoan = data.data; // Lưu dữ liệu nhân viên vào biến taiKhoan
    console.log("Danh sách nhân viên: ", taiKhoan);

    // Gọi hàm render để hiển thị danh sách nhân viên ban đầu
    renderNhanVien(taiKhoan);
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }

  const btnUpdate = $("#btn-save");
  const btnAdd = $("#btn-add");

  // Thêm các sự kiện xử lý cập nhật và thêm nhân viên như đã có trong mã của bạn...
  // (Đoạn mã xử lý nút cập nhật và thêm nhân viên sẽ không thay đổi)
}

// Hàm render lại danh sách nhân viên sau khi lọc
function renderNhanVien(nhanViens) {
  let html = "";
  nhanViens.forEach((nv) => {
    html += `
      <tr class="product-table__row" data-value="${nv.maNV}">
        <td>${nv.maNV}</td>
        <td>${nv.maTK}</td>
        <td>${nv.hoTen}</td>
        <td>${nv.ngaySinh}</td>
        <td>${nv.gioiTinh}</td>
        <td>${nv.diaChi}</td>
        <td>${nv.sdt}</td>
        <td>${nv.email}</td>
        <td>${nv.vaiTro}</td>
        <td>${nv.trangThai}</td>
        <td>${nv.maTK_taikhoan.tenDangNhap}</td>
        <td>${nv.maTK_taikhoan.matKhau}</td>
        <td>
          <button id="btn-edit" onclick="editNhanVien('${nv.maNV}')" class="product-table__update-btn product-table-btn">Sửa</button>
        </td>
      </tr>
    `;
  });

  document.querySelector(".product-table__list").innerHTML = html;
}

const editNhanVien = async (maNV) => {
  console.log("maNV: ", maNV);
  let row = document.querySelector(`tr[data-value='${maNV}']`);
  const inputTaiKhoan = document.getElementById("taiKhoan");

  // Thêm thuộc tính disabled để vô hiệu hóa input
  inputTaiKhoan.disabled = true;

  // let inputmatKhau = document.getElementById("matKhau");
  // inputmatKhau.disabled = true;
  // Lấy các giá trị từ các ô trong dòng
  let maNv = row.querySelector("td:nth-child(1)").textContent;
  let hoTen = row.querySelector("td:nth-child(3)").textContent;
  let ngaySinh = row.querySelector("td:nth-child(4)").textContent;
  let gioiTinh = row.querySelector("td:nth-child(5)").textContent;
  let diaChi = row.querySelector("td:nth-child(6)").textContent;
  let sdt = row.querySelector("td:nth-child(7)").textContent;
  let email = row.querySelector("td:nth-child(8)").textContent;
  let vaiTro = row.querySelector("td:nth-child(9)").textContent;
  let trangThai = row.querySelector("td:nth-child(10)").textContent;
  let taiKhoan = row.querySelector("td:nth-child(11)").textContent;
  let matKhau = row.querySelector("td:nth-child(12)").textContent;
  // Điền các giá trị vào các ô nhập liệu
  document.getElementById("maNv").value = maNv;
  document.getElementById("tenNv").value = hoTen;
  document.getElementById("email").value = email;
  document.getElementById("phone").value = sdt;
  document.getElementById("date").value = ngaySinh;
  document.getElementById("user-permission").value = vaiTro;
  document.getElementById("user-status").value = trangThai;
  document.getElementById("gioiTinh").value = gioiTinh;
  document.getElementById("diaChi").value = diaChi;
  document.getElementById("taiKhoan").value = taiKhoan;
  document.getElementById("matKhau").value = matKhau;
  // Chuyển trạng thái active sang "Chỉnh sửa"
  // Lấy tất cả các phần tử <li> có lớp "function__item"
  let items = document.querySelectorAll(".function__item");

  // Xóa lớp active khỏi tất cả các phần tử
  items.forEach((item) => {
    item.classList.remove("active");
  });

  // Thêm lớp active vào phần tử "Chỉnh sửa"
  let updateItem = document.querySelector('li[data-value="update"]');
  if (updateItem) {
    updateItem.classList.add("active");
  }
};
const huyNhanVien = () => {
  let inputTaiKhoan = document.getElementById("taiKhoan");

  inputTaiKhoan.disabled = false;

  document.getElementById("maNv").value = "";
  document.getElementById("tenNv").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("date").value = "";
  document.getElementById("user-permission").value = "";
  document.getElementById("user-status").value = "";
  document.getElementById("gioiTinh").value = "";
  document.getElementById("diaChi").value = "";
  document.getElementById("taiKhoan").value = "";
  document.getElementById("matKhau").value = "";
  // Chuyển trạng thái active sang "Chỉnh sửa"
  // Lấy tất cả các phần tử <li> có lớp "function__item"
  let items = document.querySelectorAll(".function__item");

  // Xóa lớp active khỏi tất cả các phần tử
  items.forEach((item) => {
    item.classList.remove("active");
  });

  // Thêm lớp active vào phần tử "Chỉnh sửa"
  let updateItem = document.querySelector('li[data-value="add"]');
  if (updateItem) {
    updateItem.classList.add("active");
  }
};

// DASHBOARD

async function initDashboardPage() {
  const boxItem = $$(".box-analysis__item");
  const filterSelect = document.getElementById("filter__select");
  const filterButton = $(".filter__button");
  const defaultMonth = 11;
  let brandValues = ["Samsung", "Apple", "Xiaomi"]; // Example list of brands
  try {
    const response = await fetch("http://localhost:8080/phonestore/get-phone");
    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu sản phẩm");

    const data = await response.json();
    brandValues = data.data; // Cập nhật lại danh sách sản phẩm từ API
    console.log("Sản phẩm: ", brandValues);
  } catch (error) {
    console.error("Lỗi khi gọi API sản phẩm:", error);
  }

  loadBoxAnalysis();
  loadOptionMonth();
  filterMonth();

  function loadBoxAnalysis(month = 11) {
    boxItem.forEach((item) => {
      if (item.dataset.value === "total-customer") {
        const a = Invoice.getTotalCustomerByMonth(month);
        item.querySelector(".box-analysis__number").innerText = a;
      }
      if (item.dataset.value === "total-price") {
        const a = Invoice.calculateRevenueByMonth(month);
        item.querySelector(".box-analysis__number").innerText = a;
      }
      if (item.dataset.value === "total-invoice") {
        const a = Invoice.getTotalInvoiceByMonth(month);
        item.querySelector(".box-analysis__number").innerText = a;
      }
      if (item.dataset.value === "total-product") {
        const a = Invoice.getTotalSoldProductsInMonth(month);
        item.querySelector(".box-analysis__number").innerText = a;
      }
    });
  }

  function loadOptionMonth() {
    filterSelect.innerHTML = "";
    for (let i = 1; i <= 12; i++) {
      const option = document.createElement("option");
      option.value = i.toString();
      option.textContent = `Tháng ${i}`;
      if (i === defaultMonth) {
        option.selected = true;
      }
      filterSelect.appendChild(option);
    }
  }

  function filterMonth() {
    filterButton.addEventListener("click", () => {
      loadBoxAnalysis(parseInt(filterSelect.value));
      renderTable(parseInt(filterSelect.value));
    });
  }

  function renderTable(month = defaultMonth) {
    const table = $$(".table__container");
    table.forEach((tb) => {
      const tableBody = tb.querySelector(".analysis-table__list");
      tableBody.innerHTML = ""; // Clear previous content

      if (parseInt(tb.dataset.value) === 1) {
        renderTable1(tableBody, month);
      }
      if (parseInt(tb.dataset.value) === 2) {
        renderTable2(tableBody, month);
      }
    });
  }

  function renderTable1(tableBody, month) {
    brandValues.forEach((item) => {
      // Kiểm tra xem item có thuộc tính 'thuongHieu' không
      const brandName = item.thuongHieu || "Chưa có tên thương hiệu"; // Đảm bảo item có thuộc tính thuongHieu

      console.log("item: ", brandName);

      const row = document.createElement("tr");
      row.classList.add("analysis-table__row");

      const brandCell = document.createElement("td");
      brandCell.textContent = brandName; // Gán tên thương hiệu vào ô của bảng

      const quantityCell = document.createElement("td");
      const soldQuantity = Invoice.getTotalSoldProductsInMonthByBrand(
        brandName.toLowerCase(),
        month
      );
      quantityCell.textContent = soldQuantity;

      row.appendChild(brandCell);
      row.appendChild(quantityCell);
      tableBody.appendChild(row);
    });
  }

  function renderTable2(tableBody, month) {
    brandValues.forEach((item) => {
      const row = document.createElement("tr");
      row.classList.add("analysis-table__row");

      const brandCell = document.createElement("td");
      brandCell.textContent = item;

      const quantityCell = document.createElement("td");
      const revenue = Invoice.calculateRevenueByCategoryAndMonth(
        item.toLowerCase(),
        month
      );
      quantityCell.textContent = revenue;

      row.appendChild(brandCell);
      row.appendChild(quantityCell);
      tableBody.appendChild(row);
    });
  }

  renderTable(); // Initial render of the tables
}

// PROMOTION

async function initPromotionPage() {
  const searchInput = document.getElementById("query");

  // Khai báo biến promotions ở phạm vi toàn cục
  let promotions = [];

  // Lắng nghe sự kiện input để tìm kiếm
  searchInput.addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase(); // Lấy giá trị nhập vào và chuyển thành chữ thường
    console.log("Giá trị nhập:", searchTerm);

    // Lọc khuyến mãi dựa trên các trường: maKM, moTa, dieuKien, mucGiam, trangThai
    // Lọc khuyến mãi dựa trên các trường: maKM, moTa, dieuKien, mucGiam, trangThai
    const filteredPromotions = promotions.filter((promo) => {
      const { maKM, moTa, dieuKien, mucGiam, trangThai } = promo;
      // Kiểm tra nếu bất kỳ trường nào có chứa giá trị tìm kiếm
      return (
        maKM.toLowerCase().includes(searchTerm) ||
        moTa.toLowerCase().includes(searchTerm) ||
        String(mucGiam).toLowerCase().includes(searchTerm) || // Chuyển mucGiam thành chuỗi
        trangThai.toLowerCase().includes(searchTerm)
      );
    });

    // Hiển thị lại danh sách khuyến mãi sau khi lọc
    renderPromotion(filteredPromotions);
  });

  try {
    const response = await fetch(
      "http://localhost:8080/phonestore/get-promotion"
    );
    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu khuyến mãi");

    const data = await response.json();
    promotions = data.data; // Cập nhật lại danh sách khuyến mãi
    console.log("promotions: ", promotions);

    // Gọi hàm renderPromotion để hiển thị tất cả các khuyến mãi
    renderPromotion(promotions);
  } catch (error) {
    console.error("Lỗi khi gọi API khuyến mãi:", error);
  }

  // Các phần còn lại của mã như thêm, sửa khuyến mãi...
}

// Hàm renderPromotion để hiển thị khuyến mãi đã lọc
function renderPromotion(filteredPromotions) {
  const promotionList = document.querySelector(".product-table__list");
  document.getElementById("maNv").value = kh.maNV;
  // Kiểm tra nếu không có khuyến mãi nào được lọc, hiển thị thông báo "Không tìm thấy"
  if (filteredPromotions.length === 0) {
    promotionList.innerHTML = `<tr><td colspan="6" style="text-align: center;">Không tìm thấy khuyến mãi nào.</td></tr>`;
    return;
  }

  // Duyệt qua danh sách khuyến mãi và tạo nội dung HTML cho bảng
  let html = "";
  filteredPromotions.forEach((promo) => {
    html += `
      <tr class="product-table__row" data-value="${promo.maKM}">
        <td>${promo.maKM}</td>
        <td>${promo.maNV}</td>
        <td>${promo.moTa}</td>
        <td>${promo.mucGiam}</td>
        <td>${promo.trangThai}</td>
        <td>
          <button id="btn-edit" onclick="editBtn('${promo.maKM}')" class="product-table__update-btn product-table-btn">Sửa</button>
        </td>
      </tr>
    `;
  });

  // Cập nhật nội dung bảng với dữ liệu đã lọc
  promotionList.innerHTML = html;
}
const updateKM = async () => {
  // Lấy dữ liệu từ các trường
  let maKM = document.getElementById("maKhuyenMai").value;
  let moTa = document.getElementById("moTa").value;
  let mucGiam = document.getElementById("mucGiam").value;
  let trangThai = document.getElementById("trangThai").value;
  let maNV = document.getElementById("maNv").value; // Bổ sung nếu mã nhân viên được nhập từ form

  // Kiểm tra dữ liệu đầu vào
  if (!maKM || !moTa || !mucGiam || !trangThai || !maNV) {
    Swal.fire("Lỗi", "Vui lòng điền đầy đủ thông tin.", "error");
    return;
  }

  // Chuẩn bị object dữ liệu
  const data = {
    maKM,
    moTa,
    mucGiam,
    trangThai,
    maNV,
  };

  console.log("Dữ liệu gửi đi:", data);

  try {
    // Gửi yêu cầu cập nhật
    const response = await fetch(
      "http://localhost:8080/phonestore/update-khuyenmai", // Thay URL bằng endpoint thực tế
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Không thể cập nhật khuyến mãi. Vui lòng thử lại.");
    }

    const result = await response.json();
    console.log("Kết quả cập nhật:", result);

    // Hiển thị thông báo thành công
    Swal.fire("Thành công", "Khuyến mãi đã được cập nhật.", "success");

    // Tải lại trang hoặc cập nhật bảng nếu cần
    window.location.reload();
  } catch (error) {
    console.error("Lỗi khi cập nhật khuyến mãi:", error);
    Swal.fire(
      "Lỗi",
      "Đã xảy ra lỗi khi cập nhật khuyến mãi. Vui lòng thử lại.",
      "error"
    );
  }
};

const addKM = async () => {
  let moTa = document.getElementById("moTa").value.trim();
  let mucGiam =
    parseFloat(document.getElementById("mucGiam").value.trim()) || 0;
  let trangThai = document.getElementById("trangThai").value.trim();
  let maNV = document.getElementById("maNv").value.trim();

  // Kiểm tra dữ liệu đầu vào
  if (!moTa || !mucGiam || !trangThai || !maNV) {
    Swal.fire("Lỗi", "Vui lòng điền đầy đủ thông tin.", "error");
    return;
  }

  // Chuẩn bị object dữ liệu
  const data = {
    moTa,
    mucGiam,
    trangThai,
    maNV,
  };

  console.log("Dữ liệu gửi đi:", data);

  try {
    // Gửi yêu cầu thêm khuyến mãi
    const response = await fetch(
      "http://localhost:8080/phonestore/add-khuyenmai", // Thay URL bằng endpoint thực tế
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Không thể thêm khuyến mãi. Vui lòng thử lại.");
    }

    const result = await response.json();
    console.log("Kết quả thêm khuyến mãi:", result);

    // Hiển thị thông báo thành công
    Swal.fire("Thành công", "Khuyến mãi đã được thêm.", "success");

    // Tải lại trang hoặc cập nhật bảng nếu cần
    window.location.reload();
  } catch (error) {
    console.error("Lỗi khi thêm khuyến mãi:", error);
    Swal.fire(
      "Lỗi",
      "Đã xảy ra lỗi khi thêm khuyến mãi. Vui lòng thử lại.",
      "error"
    );
  }
};

const editBtn = async (promotionID) => {
  // Lấy dòng tương ứng với promotionID
  let row = document.querySelector(`tr[data-value='${promotionID}']`);

  // Lấy các giá trị từ các ô trong dòng
  let maKM = row.querySelector("td:nth-child(1)").textContent;
  let moTa = row.querySelector("td:nth-child(3)").textContent;
  let mucGiam = row.querySelector("td:nth-child(4)").textContent;
  let trangThai = row.querySelector("td:nth-child(5)").textContent;

  // Điền các giá trị vào các ô nhập liệu
  document.getElementById("maKhuyenMai").value = maKM;
  document.getElementById("moTa").value = moTa;
  document.getElementById("maNv").value = kh.maNV;
  document.getElementById("mucGiam").value = mucGiam;
  document.getElementById("trangThai").value = trangThai;

  // Chuyển trạng thái active sang "Chỉnh sửa"
  // Lấy tất cả các phần tử <li> có lớp "function__item"
  let items = document.querySelectorAll(".function__item");

  // Xóa lớp active khỏi tất cả các phần tử
  items.forEach((item) => {
    item.classList.remove("active");
  });

  // Thêm lớp active vào phần tử "Chỉnh sửa"
  let updateItem = document.querySelector('li[data-value="update"]');

  if (updateItem) {
    updateItem.classList.add("active");
  }
};
const huyPromotion = () => {
  document.getElementById("maKhuyenMai").value = "";
  document.getElementById("moTa").value = "";
  document.getElementById("mucGiam").value = "";
  document.getElementById("trangThai").value = "";

  // Chuyển trạng thái active sang "Chỉnh sửa"
  // Lấy tất cả các phần tử <li> có lớp "function__item"
  let items = document.querySelectorAll(".function__item");

  // Xóa lớp active khỏi tất cả các phần tử
  items.forEach((item) => {
    item.classList.remove("active");
  });

  // Thêm lớp active vào phần tử "Chỉnh sửa"
  let updateItem = document.querySelector('li[data-value="add"]');
  if (updateItem) {
    updateItem.classList.add("active");
  }
};

//  phieuBaoHanh

async function initBaoHanhPage() {
  const searchInput = document.getElementById("query");

  // Khai báo biến toàn cục để lưu dữ liệu từ API
  let res = [];

  // Lắng nghe sự kiện input để tìm kiếm
  searchInput.addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase(); // Lấy giá trị nhập vào và chuyển thành chữ thường
    console.log("Giá trị nhập:", searchTerm);

    // Lọc khuyến mãi dựa trên các trường: maPBH, thoiGianTao, trangThai, maNV, soSeri, noiDung
    const filteredPromotions = res.filter((promo) => {
      const { maPBH, thoiGianTao, trangThai, maNV, soSeri, noiDung } = promo;
      return (
        maPBH.toLowerCase().includes(searchTerm) ||
        thoiGianTao.toLowerCase().includes(searchTerm) ||
        trangThai.toLowerCase().includes(searchTerm) ||
        maNV.toLowerCase().includes(searchTerm) ||
        soSeri.toLowerCase().includes(searchTerm) ||
        noiDung.toLowerCase().includes(searchTerm)
      );
    });

    // Hiển thị lại danh sách bảo hành sau khi lọc
    renderBaoHanh(filteredPromotions);
  });

  try {
    // Gọi API để lấy danh sách bảo hành
    const response = await fetch(
      "http://localhost:8080/phonestore/get-phieubaohanh"
    );
    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu bảo hành");

    const data = await response.json();
    res = data.data; // Lưu dữ liệu vào biến toàn cục
    console.log("Dữ liệu bảo hành:", res);

    // Hiển thị danh sách bảo hành ban đầu
    renderBaoHanh(res);
  } catch (error) {
    console.error("Lỗi khi gọi API bảo hành:", error);
  }
}

// Hàm hiển thị danh sách bảo hành
function renderBaoHanh(data) {
  document.getElementById("maNv").value = kh.maNV;
  let html = "";
  data.forEach((item) => {
    html += `
        <tr class="product-table__row" data-value="${item.maPBH}">
            <td>${item.maPBH}</td>
            <td>${item.thoiGianTao}</td>
            <td>${item.tongTien}</td>
            <td>${item.trangThai}</td>
            <td>${item.maNV}</td>
            <td>${item.soSeri}</td>
            <td>${item.noiDung}</td>
            <td>
                <button onclick="editBaoHanh('${item.maPBH}')"  class="product-table__update-btn product-table-btn">Sửa</button> 
                <button onclick="deleteBaoHanh('${item.maPBH}')" class="product-table__delete-btn product-table-btn">Xóa</button>             
            </td>
        </tr>
    `;
  });
  document.querySelector(".product-table__list").innerHTML = html;
  const btnUpdate = $("#btn-save");
  const btnAdd = $("#btn-add");
  btnUpdate.addEventListener("click", async (e) => {
    // Lấy giá trị từ các trường nhập liệu
    let maPBHEl = document.getElementById("maBaoHanh").value;
    let thoiGianTaoEl = document.getElementById("thoiGian").value;
    let tongTienEl = document.getElementById("tongTien").value;
    let MaNVEl = document.getElementById("maNv").value;
    let soSeriEl = document.getElementById("soSeri").value;
    let trangThaiEl = document.getElementById("trangThai").value;
    let noiDungEl = document.getElementById("noiDung").value;

    // Kiểm tra dữ liệu trước khi tiếp tục
    if (
      !maPBHEl ||
      !thoiGianTaoEl ||
      !tongTienEl ||
      !MaNVEl ||
      !soSeriEl ||
      !trangThaiEl ||
      !noiDungEl
    ) {
      Swal.fire("Lỗi", "Vui lòng điền đầy đủ thông tin.", "error");
      return;
    }

    // Hiển thị hộp thoại xác nhận
    Swal.fire({
      title: "Bạn có chắc chắn?",
      text: "Thao tác này sẽ cập nhật bảo hành!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Có, cập nhật!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Tạo đối tượng dữ liệu
        const data = {
          maPBH: maPBHEl,
          thoiGianTao: thoiGianTaoEl,
          tongTien: tongTienEl,
          trangThai: trangThaiEl,
          maNV: MaNVEl,
          soSeri: soSeriEl,
          noiDung: noiDungEl,
        };

        console.log("Dữ liệu gửi đi:", data);

        try {
          const response = await fetch(
            "http://localhost:8080/phonestore/update-baohanh",
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );

          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || "Có lỗi xảy ra khi cập nhật bảo hành");
          }

          const result = await response.json();
          console.log("Cập nhật thành công:", result);

          // Hiển thị thông báo thành công
          Swal.fire("Thành công", "Bảo hành đã được cập nhật!", "success");

          // Cập nhật giao diện mà không cần tải lại
          updateRowInTable(maPBHEl, data);
        } catch (error) {
          console.error("Lỗi khi cập nhật bảo hành:", error);
          Swal.fire(
            "Lỗi",
            `Không thể cập nhật bảo hành: ${error.message}`,
            "error"
          );
        }
      }
    });
  });

  // Hàm cập nhật giao diện
  function updateRowInTable(maPBH, data) {
    const row = document.querySelector(`tr[data-value='${maPBH}']`);
    if (row) {
      row.querySelector("td:nth-child(2)").textContent = data.thoiGianTao;
      row.querySelector("td:nth-child(3)").textContent = data.tongTien;
      row.querySelector("td:nth-child(4)").textContent = data.trangThai;
      row.querySelector("td:nth-child(5)").textContent = data.maNV;
      row.querySelector("td:nth-child(6)").textContent = data.soSeri;
      row.querySelector("td:nth-child(7)").textContent = data.noiDung;
    }
  }

  btnAdd.addEventListener("click", async (e) => {
    // Lấy giá trị từ các trường nhập liệu
    const thoiGianTaoEl = document.getElementById("thoiGian").value;
    const tongTienEl = document.getElementById("tongTien").value;
    const MaNVEl = document.getElementById("maNv").value;
    const soSeriEl = document.getElementById("soSeri").value;
    const trangThaiEl = document.getElementById("trangThai").value;
    const noiDungEl = document.getElementById("noiDung").value;

    // Kiểm tra dữ liệu trước khi gửi đi
    if (
      !thoiGianTaoEl ||
      !tongTienEl ||
      !MaNVEl ||
      !soSeriEl ||
      !trangThaiEl ||
      !noiDungEl
    ) {
      Swal.fire("Lỗi", "Vui lòng điền đầy đủ các thông tin.", "error");
      return;
    }

    // Tạo đối tượng dữ liệu
    const data = {
      thoiGianTao: thoiGianTaoEl,
      tongTien: tongTienEl,
      trangThai: trangThaiEl,
      maNV: MaNVEl,
      soSeri: soSeriEl,
      noiDung: noiDungEl,
    };

    try {
      const response = await fetch(
        "http://localhost:8080/phonestore/add-baohanh",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Có lỗi xảy ra khi thêm bảo hành");
      }

      const result = await response.json();
      console.log("Thêm thành công:", result);

      // Hiển thị thông báo thành công
      Swal.fire("Thành công", "Thêm bảo hành thành công!", "success");

      // Cập nhật bảng bằng cách thêm một hàng mới
      const table = document.getElementById("product-table"); // Lấy bảng bằng ID
      const newRow = table.insertRow(); // Thêm một hàng mới vào cuối bảng

      // Thêm các ô (td) vào hàng mới
      newRow.innerHTML = `
        <td>${result.data.maPBH}</td>
        <td>${result.data.thoiGianTao}</td>
        <td>${result.data.tongTien}</td>
        <td>${result.data.trangThai}</td>
        <td>${result.data.maNV}</td>
        <td>${result.data.soSeri}</td>
        <td>${result.data.noiDung}</td>
        <td>
          <button onclick="editBaoHanh('${result.data.maPBH}')" class="product-table__update-btn product-table-btn">Sửa</button> 
          <button onclick="deleteBaoHanh('${result.data.maPBH}')" class="product-table__delete-btn product-table-btn">Xóa</button>             
        </td>
      `;

      // Xóa dữ liệu trong form sau khi thêm thành công
      clearInputFields();
    } catch (error) {
      console.error("Lỗi khi thêm bảo hành:", error);
      Swal.fire("Lỗi", `Không thể thêm bảo hành: ${error.message}`, "error");
    }
  });

  // Hàm xóa dữ liệu nhập trong form
  function clearInputFields() {
    document.getElementById("thoiGian").value = "";
    document.getElementById("tongTien").value = "";
    document.getElementById("maNv").value = "";
    document.getElementById("soSeri").value = "";
    document.getElementById("trangThai").value = "";
    document.getElementById("noiDung").value = "";
  }
}

const editBaoHanh = async (idBaoHanh) => {
  // Lấy dòng tương ứng với idBaoHanh
  let row = document.querySelector(`tr[data-value='${idBaoHanh}']`);

  // Lấy các giá trị từ các ô trong dòng
  let maPBH = row.querySelector("td:nth-child(1)").textContent;
  let thoiGianTao = row.querySelector("td:nth-child(2)").textContent;
  let tongTien = row.querySelector("td:nth-child(3)").textContent;
  let trangThai = row.querySelector("td:nth-child(4)").textContent;
  let maNV = row.querySelector("td:nth-child(5)").textContent;
  let soSeri = row.querySelector("td:nth-child(6)").textContent;
  let noiDung = row.querySelector("td:nth-child(7)").textContent;

  // Điền các giá trị vào các ô nhập liệu
  document.getElementById("maBaoHanh").value = maPBH;
  document.getElementById("thoiGian").value = thoiGianTao;
  document.getElementById("tongTien").value = tongTien;
  document.getElementById("maNv").value = kh.maNV;
  document.getElementById("soSeri").value = soSeri;
  document.getElementById("trangThai").value = trangThai;
  document.getElementById("noiDung").value = noiDung;

  // Chuyển trạng thái active sang "Chỉnh sửa"
  // Lấy tất cả các phần tử <li> có lớp "function__item"
  let items = document.querySelectorAll(".function__item");

  // Xóa lớp active khỏi tất cả các phần tử
  items.forEach((item) => {
    item.classList.remove("active");
  });

  // Thêm lớp active vào phần tử "Chỉnh sửa"
  let updateItem = document.querySelector('li[data-value="update"]');
  if (updateItem) {
    updateItem.classList.add("active");
  }
};
const huyBaoHanh = () => {
  document.getElementById("maBaoHanh").value = "";
  document.getElementById("thoiGian").value = "";
  document.getElementById("tongTien").value = "";
  document.getElementById("maNv").value = "";
  document.getElementById("soSeri").value = "";
  document.getElementById("trangThai").value = "";
  document.getElementById("noiDung").value = "";

  // Chuyển trạng thái active sang "Chỉnh sửa"
  // Lấy tất cả các phần tử <li> có lớp "function__item"
  let items = document.querySelectorAll(".function__item");

  // Xóa lớp active khỏi tất cả các phần tử
  items.forEach((item) => {
    item.classList.remove("active");
  });

  // Thêm lớp active vào phần tử "Chỉnh sửa"
  let updateItem = document.querySelector('li[data-value="add"]');
  if (updateItem) {
    updateItem.classList.add("active");
  }
};
const deleteBaoHanh = async (idBaoHanh) => {
  // Hiển thị hộp thoại xác nhận xóa
  Swal.fire({
    title: "Bạn có chắc chắn?",
    text: "Bạn sẽ không thể hoàn tác hành động này!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Có, xóa nó!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      // Lấy dòng tương ứng với idBaoHanh
      const row = document.querySelector(`tr[data-value='${idBaoHanh}']`);
      if (!row) {
        Swal.fire("Lỗi", "Không tìm thấy dòng bảo hành để xóa.", "error");
        return;
      }

      const maPBH = row.querySelector("td:nth-child(1)").textContent;
      console.log("maPBH: ", maPBH);

      const data = { idBaoHanh: maPBH };

      try {
        // Gửi yêu cầu xóa tới server
        const response = await fetch(
          "http://localhost:8080/phonestore/delete-baohanh",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || "Có lỗi xảy ra khi xóa bảo hành");
        }

        const result = await response.json();
        console.log("Xoá thành công:", result);

        // Hiển thị thông báo thành công
        Swal.fire("Đã xóa!", "Bảo hành đã được xóa thành công.", "success");

        // Xóa dòng khỏi bảng
        row.remove();
      } catch (error) {
        console.error("Có lỗi khi xóa bảo hành:", error);
        Swal.fire("Lỗi", `Không thể xóa bảo hành: ${error.message}`, "error");
      }
    }
  });
};

// PHIEU NHAP

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

      // Thêm chi tiết phiếu nhập nếu phiếu nhập thành công
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

const editPhieuNhap = async (idPhieuNhap) => {
  // Lấy dòng tương ứng với idBaoHanh
  let row = document.querySelector(`tr[data-value='${idPhieuNhap}']`);
  const nhanvien = JSON.parse(localStorage.getItem("khachhang"));
  console.log(nhanvien.maNV);
  // Lấy các giá trị từ các ô trong dòng
  let maPN = row.querySelector("td:nth-child(1)").textContent;
  let thoiGianTao = row.querySelector("td:nth-child(2)").textContent;
  let tongTien = row.querySelector("td:nth-child(3)").textContent;
  let trangThai = row.querySelector("td:nth-child(4)").textContent;
  let maNV = row.querySelector("td:nth-child(5)").textContent;
  let nhaCC = row.querySelector("td:nth-child(6)").textContent;

  // Điền các giá trị vào các ô nhập liệu
  document.getElementById("maPhieuNhap").value = maPN;
  document.getElementById("thoiGianTao").value = thoiGianTao;
  document.getElementById("tongTien").value = tongTien;
  document.getElementById("maNv").value = maNV;
  document.getElementById("trangThai").value = trangThai;
  document.getElementById("maNCC").value = nhaCC;

  // Chuyển trạng thái active sang "Chỉnh sửa"
  // Lấy tất cả các phần tử <li> có lớp "function__item"
  let items = document.querySelectorAll(".function__item");

  // Xóa lớp active khỏi tất cả các phần tử
  items.forEach((item) => {
    item.classList.remove("active");
  });

  // Thêm lớp active vào phần tử "Chỉnh sửa"
  let updateItem = document.querySelector('li[data-value="update"]');
  if (updateItem) {
    updateItem.classList.add("active");
  }
};
const huyPhieuNhap = () => {
  const nhanvien = JSON.parse(localStorage.getItem("khachhang"));
  console.log(nhanvien.maNV);
  document.getElementById("maPhieuNhap").value = "";
  document.getElementById("thoiGianTao").value = "";
  document.getElementById("tongTien").value = "";
  document.getElementById("maNv").value = nhanvien.maNV;
  document.getElementById("trangThai").value = "";
  document.getElementById("maNCC").value = "";

  // Chuyển trạng thái active sang "Chỉnh sửa"
  // Lấy tất cả các phần tử <li> có lớp "function__item"
  let items = document.querySelectorAll(".function__item");

  // Xóa lớp active khỏi tất cả các phần tử
  items.forEach((item) => {
    item.classList.remove("active");
  });

  // Thêm lớp active vào phần tử "Chỉnh sửa"
  let updateItem = document.querySelector('li[data-value="add"]');
  if (updateItem) {
    updateItem.classList.add("active");
  }
};
const xacNhanPhieuNhap = async (idPhieuNhap) => {
  // Lấy dòng tương ứng với idBaoHanh
  let row = document.querySelector(`tr[data-value='${idPhieuNhap}']`);
  const nhanvien = JSON.parse(localStorage.getItem("khachhang"));
  console.log(nhanvien.maNV);
  // Lấy các giá trị từ các ô trong dòng
  let maPN = row.querySelector("td:nth-child(1)").textContent;
  let thoiGianTao = row.querySelector("td:nth-child(2)").textContent;
  let tongTien = row.querySelector("td:nth-child(3)").textContent;
  let trangThai = row.querySelector("td:nth-child(4)").textContent;
  let maNV = nhanvien.maNV;
  let nhaCC = row.querySelector("td:nth-child(6)").textContent;

  // Điền các giá trị vào các ô nhập liệu
  document.getElementById("maPhieuNhap").value = maPN;
  document.getElementById("thoiGianTao").value = thoiGianTao;
  document.getElementById("tongTien").value = tongTien;
  document.getElementById("maNv").value = maNV;
  document.getElementById("trangThai").value = trangThai;
  document.getElementById("maNCC").value = nhaCC;

  // Chuyển trạng thái active sang "Chỉnh sửa"
  // Lấy tất cả các phần tử <li> có lớp "function__item"
  let items = document.querySelectorAll(".function__item");

  // Xóa lớp active khỏi tất cả các phần tử
  items.forEach((item) => {
    item.classList.remove("active");
  });

  // Thêm lớp active vào phần tử "Chỉnh sửa"
  let updateItem = document.querySelector('li[data-value="update"]');
  if (updateItem) {
    updateItem.classList.add("active");
  }
};

// QUAN LI PHIEU NHAP
async function initNhapPage() {
  let leftPanelData = [];
  let rightPanelData = [];
  let btnacp = document.getElementById("inventory-accept-btn");
  let btndlt = document.getElementById("inventory-delete-btn");
  let selectedMaPN = null; // Biến lưu maPN của dòng được chọn

  try {
    const response = await fetch(
      "http://localhost:8080/phonestore/get-phieunhap"
    );
    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu sản phẩm");

    const data = await response.json();
    leftPanelData = data.data;
    console.log("leftPanelData: ", leftPanelData);
  } catch (error) {
    console.error("Lỗi khi gọi API sản phẩm:", error);
    alert("Không thể lấy dữ liệu sản phẩm. Vui lòng thử lại sau.");
    return;
  }

  try {
    const response = await fetch(
      "http://localhost:8080/phonestore/get-phieunhap"
    );
    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu sản phẩm");

    const data = await response.json();
    rightPanelData = data.data;
    console.log("rightPanelData: ", rightPanelData);
  } catch (error) {
    console.error("Lỗi khi gọi API sản phẩm:", error);
    alert("Không thể lấy dữ liệu sản phẩm. Vui lòng thử lại sau.");
    return;
  }

  function renderLeftPanel(data) {
    const tableBody = document.getElementById("inventory-data-body");
    tableBody.innerHTML = "";

    if (data.length === 0) {
      tableBody.innerHTML =
        '<tr><td colspan="6" style="text-align: center; color: #999;">Không có dữ liệu</td></tr>';
      return;
    }

    data.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.maPN}</td>
        <td>${item.maNV}</td>
        <td>${item.maNCC}</td>
        <td>${item.trangThai}</td>
        <td>${item.ngayTao}</td>
        <td>${item.tongTien.toLocaleString()}đ</td>
      `;
      row.dataset.noteId = item.maPN; // Lưu maPN trong data attribute của row
      row.addEventListener("click", () => handleRowClick(item.maPN)); // Lắng nghe sự kiện click
      tableBody.appendChild(row);
    });
  }

  function handleRowClick(noteId) {
    selectedMaPN = noteId; // Lưu maPN khi click vào dòng
    const filteredData = rightPanelData.filter(
      (product) => product.maPN === noteId
    );
    renderRightPanel(filteredData);

    // Cập nhật nút xác nhận để sử dụng maPN đã chọn
    if (btnacp) {
      btnacp.disabled = false; // Kích hoạt nút khi có dòng được chọn
    }
  }

  function renderRightPanel(data) {
    const tableBody = document.getElementById("inventory-product-body");
    tableBody.innerHTML = "";

    if (data.length === 0) {
      tableBody.innerHTML =
        '<tr><td colspan="5" style="text-align: center; color: #999;">Không có dữ liệu</td></tr>';
      return;
    }

    data.forEach((item) => {
      (item.chitietphieunhaps || []).forEach((chitiet) => {
        const maSP =
          chitiet.maPB_phienbansp?.maSP_sanpham?.maSP || "Không xác định";
        const tenSP =
          chitiet.maPB_phienbansp?.maSP_sanpham?.tenSP || "Tên sản phẩm";
        const soLuong = chitiet.soLuong || 0;
        const donGiaNhap = chitiet.donGiaNhap || 0;

        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${maSP}</td>
          <td>${tenSP}</td>
          <td>${soLuong}</td>
          <td>${donGiaNhap.toLocaleString()}đ</td>
        `;
        tableBody.appendChild(row);
      });
    });
  }

  // Xử lý sự kiện click nút xác nhận
  // Xử lý sự kiện click nút xác nhận
  btnacp.addEventListener("click", async () => {
    if (selectedMaPN) {
      Swal.fire({
        title: "Xác nhận cập nhật?",
        text: `Bạn có chắc muốn xác nhận phiếu nhập có mã: ${selectedMaPN}?`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Xác nhận",
        cancelButtonText: "Hủy",
      }).then(async (result) => {
        if (result.isConfirmed) {
          // Dữ liệu gửi đi
          const data = {
            maPN: selectedMaPN,
            trangThai: "da nhap",
          };

          try {
            const response = await updatePhieuNhap(data);

            if (response.success) {
              Swal.fire(
                "Thành công!",
                "Phiếu nhập đã được cập nhật.",
                "success"
              );

              // Cập nhật giao diện hoặc tải lại dữ liệu
              renderLeftPanel(leftPanelData);
            } else {
              Swal.fire(
                "Thất bại!",
                response.message || "Đã xảy ra lỗi.",
                "error"
              );
            }
          } catch (error) {
            console.error("Lỗi khi gọi API cập nhật phiếu nhập:", error);
            Swal.fire(
              "Thất bại!",
              "Không thể cập nhật phiếu nhập. Vui lòng thử lại.",
              "error"
            );
          }
        }
      });
    } else {
      Swal.fire("Cảnh báo", "Vui lòng chọn một phiếu nhập.", "warning");
    }
  });

  // Hàm gửi yêu cầu API cập nhật phiếu nhập
  async function updatePhieuNhap(data) {
    try {
      const response = await fetch(
        "http://localhost:8080/phonestore/update-phieunhap",
        {
          method: "PUT", // Hoặc "POST" nếu API yêu cầu
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const result = await response.json();
        return { success: true, data: result };
      } else {
        const errorText = await response.text();
        return { success: false, message: errorText || "Lỗi không xác định." };
      }
    } catch (error) {
      throw new Error("Không thể kết nối với API: " + error.message);
    }
  }

  btndlt.addEventListener("click", async () => {
    if (selectedMaPN) {
      Swal.fire({
        title: "Xác nhận xóa?",
        text: `Bạn có chắc muốn xóa phiếu nhập có mã: ${selectedMaPN}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Xóa",
        cancelButtonText: "Hủy",
      }).then(async (result) => {
        if (result.isConfirmed) {
          // Dữ liệu gửi đi
          const data = {
            maPN: selectedMaPN,
          };

          try {
            const response = await deletePhieuNhap(data);

            if (response.success) {
              Swal.fire("Thành công!", "Phiếu nhập đã được xóa.", "success");

              // Cập nhật giao diện hoặc tải lại dữ liệu
              renderLeftPanel(leftPanelData);
            } else {
              Swal.fire(
                "Thất bại!",
                response.message || "Đã xảy ra lỗi khi xóa phiếu nhập.",
                "error"
              );
            }
          } catch (error) {
            console.error("Lỗi khi gọi API xóa phiếu nhập:", error);
            Swal.fire(
              "Lỗi!",
              "Không thể xóa phiếu nhập. Vui lòng thử lại sau.",
              "error"
            );
          }
        }
      });
    } else {
      Swal.fire("Cảnh báo", "Vui lòng chọn một phiếu nhập.", "warning");
    }
  });

  // Hàm gọi API để xóa phiếu nhập
  async function deletePhieuNhap(data) {
    try {
      const response = await fetch(
        "http://localhost:8080/phonestore/delete-phieunhap",
        {
          method: "POST", // Sử dụng phương thức DELETE
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const result = await response.json();
        return { success: true, data: result };
      } else {
        const errorText = await response.text();
        return { success: false, message: errorText || "Lỗi không xác định." };
      }
    } catch (error) {
      throw new Error("Không thể kết nối với API: " + error.message);
    }
  }

  function handleSearch() {
    const searchValue = document
      .getElementById("inventory-search")
      .value.toLowerCase();

    const filteredData = leftPanelData.filter((item) => {
      const maPN = item.maPN ? item.maPN.toLowerCase() : "";
      const maNV = item.maNV ? item.maNV.toLowerCase() : "";
      const maNCC = item.maNCC ? item.maNCC.toLowerCase() : "";

      return (
        maPN.includes(searchValue) ||
        maNV.includes(searchValue) ||
        maNCC.includes(searchValue)
      );
    });

    renderLeftPanel(filteredData);
  }

  renderLeftPanel(leftPanelData);
  renderRightPanel([]);

  document
    .getElementById("inventory-search")
    .addEventListener("input", handleSearch);
}

// Gọi hàm khởi tạo khi trang đã tải
window.addEventListener("DOMContentLoaded", initNhapPage);

async function initDonHangPage() {
  let leftPanelData = [];
  let rightPanelData = [];
  let btnacp = document.getElementById("inventory-accept-btn");
  let dangGiaobtn = document.getElementById("inventory-danggiao-btn");
  let selectedMaPN = null; // Biến lưu maPN của dòng được chọn

  try {
    const response = await fetch(
      "http://localhost:8080/phonestore/get-donhang"
    );
    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu sản phẩm");

    const data = await response.json();
    leftPanelData = data.data;
    console.log("leftPanelData: ", leftPanelData);
  } catch (error) {
    console.error("Lỗi khi gọi API sản phẩm:", error);
    alert("Không thể lấy dữ liệu sản phẩm. Vui lòng thử lại sau.");
    return;
  }

  try {
    const response = await fetch(
      "http://localhost:8080/phonestore/get-donHang"
    );
    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu sản phẩm");

    const data = await response.json();
    rightPanelData = data.data;
    console.log("rightPanelData: ", rightPanelData);
  } catch (error) {
    console.error("Lỗi khi gọi API sản phẩm:", error);
    alert("Không thể lấy dữ liệu sản phẩm. Vui lòng thử lại sau.");
    return;
  }

  function renderLeftPanel(data) {
    const tableBody = document.getElementById("inventory-data-body");
    tableBody.innerHTML = "";

    if (data.length === 0) {
      tableBody.innerHTML =
        '<tr><td colspan="6" style="text-align: center; color: #999;">Không có dữ liệu</td></tr>';
      return;
    }

    data.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.maDH}</td>
        <td>${item.maNV}</td>
        <td>${item.maKH}</td>
        <td>${item.maKM}</td>
        <td>${item.ngayDat}</td>
        <td>${item.trangThai}</td>
        <td>${item.httt}</td>
        <td>${item.tongTien.toLocaleString()}đ</td>
      `;
      row.dataset.noteId = item.maDH; // Lưu maPN trong data attribute của row
      row.addEventListener("click", () => handleRowClick(item.maDH)); // Lắng nghe sự kiện click
      tableBody.appendChild(row);
    });
  }

  function handleRowClick(noteId) {
    selectedMaPN = noteId; // Lưu maPN khi click vào dòng
    const filteredData = rightPanelData.filter(
      (product) => product.maDH === noteId
    );
    renderRightPanel(filteredData);

    // Cập nhật nút xác nhận để sử dụng maPN đã chọn
    if (btnacp) {
      btnacp.disabled = false; // Kích hoạt nút khi có dòng được chọn
    }
  }

  function renderRightPanel(data) {
    const tableBody = document.getElementById("inventory-product-body");
    tableBody.innerHTML = "";

    if (data.length === 0) {
      tableBody.innerHTML =
        '<tr><td colspan="5" style="text-align: center; color: #999;">Không có dữ liệu</td></tr>';
      return;
    }

    data.forEach((item) => {
      (item.chitietdonhangs || []).forEach((chitiet) => {
        const soSeri = chitiet.soSeri || "Không xác định";
        const tenSP =
          chitiet.maPB_phienbansp?.maSP_sanpham?.tenSP || "Tên sản phẩm";
        const maSP =
          chitiet.maPB_phienbansp?.maSP_sanpham?.maSP || "Tên sản phẩm";
        const giaBan = chitiet.giaBan || 0;

        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${maSP}</td>
        <td>${tenSP}</td>
        <td>${soSeri}</td>
          <td>${giaBan.toLocaleString()}đ</td>
        `;
        tableBody.appendChild(row);
      });
    });
  }

  // Xử lý sự kiện click nút xác nhận
  btnacp.addEventListener("click", async () => {
    if (selectedMaPN) {
      // Hiển thị hộp thoại xác nhận trước khi thực hiện thao tác
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to confirm the order?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, confirm it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          console.log("Đang xác nhận phiếu nhập có mã PN:", selectedMaPN);

          // Dữ liệu gửi đi, bao gồm mã phiếu nhập và trạng thái
          let data = {
            maDH: selectedMaPN,
            trangThai: "Đã xác nhận",
          };

          try {
            // Gửi yêu cầu cập nhật với phương thức PUT hoặc POST tùy vào API của bạn
            const response = await fetch(
              "http://localhost:8080/phonestore/update-donhang",
              {
                method: "PUT", // Hoặc "POST" nếu API yêu cầu
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              }
            );

            if (!response.ok) {
              throw new Error("Lỗi khi cập nhật phiếu nhập");
            }

            const result = await response.json();
            console.log("Cập nhật thành công:", result);
            alert("Cập nhật phiếu nhập thành công!");

            // Nếu cần, có thể reload lại dữ liệu hoặc làm gì đó sau khi thành công
            // Ví dụ: gọi lại API để tải lại dữ liệu phiếu nhập hoặc cập nhật bảng
            renderLeftPanel(leftPanelData);
          } catch (error) {
            console.error("Lỗi khi gọi API cập nhật phiếu nhập:", error);
            alert("Không thể cập nhật phiếu nhập. Vui lòng thử lại sau.");
          }
        }
      });
    } else {
      console.log("Vui lòng chọn một phiếu nhập.");
      alert("Vui lòng chọn một phiếu nhập.");
    }
  });

  dangGiaobtn.addEventListener("click", async () => {
    if (selectedMaPN) {
      // Hiển thị hộp thoại xác nhận trước khi thực hiện thao tác
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to change the status to 'Đang giao'?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, change it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          console.log("Đang xác nhận phiếu nhập có mã đơn hàng:", selectedMaPN);

          // Dữ liệu gửi đi, bao gồm mã phiếu nhập và trạng thái
          let data = {
            maDH: selectedMaPN,
            trangThai: "Đang giao",
          };

          try {
            // Gửi yêu cầu cập nhật với phương thức PUT
            const response = await fetch(
              "http://localhost:8080/phonestore/update-donhang",
              {
                method: "PUT", // Hoặc "POST" nếu API yêu cầu
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              }
            );

            if (!response.ok) {
              throw new Error("Lỗi khi cập nhật phiếu nhập");
            }

            const result = await response.json();
            console.log("Cập nhật thành công:", result);
            alert("Cập nhật phiếu nhập thành công!");

            // Nếu cần, có thể reload lại dữ liệu hoặc làm gì đó sau khi thành công
            // Ví dụ: gọi lại API để tải lại dữ liệu phiếu nhập hoặc cập nhật bảng
            renderLeftPanel(leftPanelData);
          } catch (error) {
            console.error("Lỗi khi gọi API cập nhật phiếu nhập:", error);
            alert("Không thể cập nhật phiếu nhập. Vui lòng thử lại sau.");
          }
        }
      });
    } else {
      console.log("Vui lòng chọn một phiếu nhập.");
      alert("Vui lòng chọn một phiếu nhập.");
    }
  });

  function handleSearch() {
    const searchValue = document
      .getElementById("inventory-search")
      .value.toLowerCase();

    // Lọc dữ liệu dựa trên giá trị tìm kiếm
    const filteredData = leftPanelData.filter((item) => {
      const maDH = item.maDH ? item.maDH.toLowerCase() : ""; // Kiểm tra null
      const maNV = item.maNV ? item.maNV.toLowerCase() : ""; // Kiểm tra null
      const maKM = item.maKM ? item.maKM.toLowerCase() : ""; // Kiểm tra null

      return (
        maDH.includes(searchValue) ||
        maNV.includes(searchValue) ||
        maKM.includes(searchValue)
      );
    });

    // Hiển thị thông báo nếu không tìm thấy dữ liệu
    if (filteredData.length === 0) {
      const tableBody = document.getElementById("inventory-data-body");
      tableBody.innerHTML =
        '<tr><td colspan="6" style="text-align: center; color: #999;">Không có dữ liệu</td></tr>';
      return;
    }

    renderLeftPanel(filteredData);
  }

  renderLeftPanel(leftPanelData);
  renderRightPanel([]);

  document
    .getElementById("inventory-search")
    .addEventListener("input", handleSearch);
}
window.addEventListener("DOMContentLoaded", initDonHangPage);
function convertMoney(amount) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
}
