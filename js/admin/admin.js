const usernameLabel = $('.info__name')
const contentContainer = $('#content')
const listControlItems = $$('.nav-links__item')
const user = JSON.parse(localStorage.getItem('user'));
function loadForm() {
    usernameLabel.innerText = user.tenDangNhap
    
}

loadForm()
const thempn = () => {
    window.location.href = "./PADung/themPhieuNhap.html"
}
const xemChiTiet = () => {

    window.location.href="./PADung/chiTietPhieuNhap.html"
}
const xemPB = () => {
     window.location.href="./PADung/xemPhienBan.html"
}
if(user.quyen == "ql" || user.quyen == "nv"){
    Array.from(listControlItems).forEach((item) => {
        item.addEventListener('click', () => {
            const activeItem = $('.nav-links__item.active');
            if (activeItem) {
                activeItem.classList.remove('active')
            }
            if (item.getAttribute('data-value') === 'trang-chu') {
                item.classList.add('active')
                contentContainer.innerHTML =
                    `
                    <div class="top-line">
                    <h1 class="top-line__heading">TRANG CHỦ</h1>
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
                `
                initDashboardPage()
    
            }
            if (item.getAttribute('data-value') === 'ql-nguoidung') {
                item.classList.add('active')
                contentContainer.innerHTML =
                    `
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
                                <label for="user-id" class="form-label">Mã người dùng</label>
    
                                <input id="user-id" name="user-id" type="text" class="form-control" disabled="true">
    
                                <span class="form-message"></span>
                            </div>
                         
    
                            <div class="form-group">
                                <label for="user-username" class="form-label">Tên đăng nhập</label>
    
                                <input id="user-username" name="user-username" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="user-password" class="form-label">Mật khẩu</label>
    
                                <input id="user-password" name="user-password" type="text" class="form-control">
    
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
    
                                    <option value="active">Hoạt động</option>
                                    <option value="inactive">Không hoạt động</option>
    
                                </select>
                                <span class="form-message"></span>
                            </div>
    
    
    
                        </div>
                        <div class="form-controls">
                            <button class="btn-control" id="btn-save">Cập nhật</button>
                            <button class="btn-control" id="btn-cancel">Hủy</button>
                        </div>
                    </form>
                    <table id="product-table">
                        <thead>
                            <tr class="product-table__heading">
                                <th>Mã User</th>
                                <th>Tên đăng nhập</th>
                                <th>Mật khẩu</th>
                                <th style="width: 250px;">Địa chỉ</th>
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
                `
                initUserPage()
      
            }
            if (item.getAttribute('data-value') === 'ql-nhanvien') {
                item.classList.add('active')
                contentContainer.innerHTML =
                    `
                    <div class="top-line">
                    <h1 class="top-line__heading">QUẢN LÝ NGƯỜI DÙNG</h1>
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
                                <label for="user-id" class="form-label">Mã người dùng</label>
    
                                <input id="user-id" name="user-id" type="text" class="form-control" disabled="true">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="user-full_name" class="form-label">Họ tên người dùng</label>
    
                                <input id="user-full_name" name="user-full_name" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
    
                            <div class="form-group">
                                <label for="user-username" class="form-label">Tên đăng nhập</label>
    
                                <input id="user-username" name="user-username" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="user-password" class="form-label">Mật khẩu</label>
    
                                <input id="user-password" name="user-password" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="user-email" class="form-label">Email</label>
    
                                <input id="user-email" name="user-email" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="user-phone" class="form-label">Số ĐT</label>
    
                                <input id="user-phone" name="user-phone" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group form-group--full">
                                <label for="user-address" class="form-label">Địa chỉ</label>
    
                                <input id="user-address" name="user-address" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="user-permission" class="form-label">Quyền</label>
                                <select name="user-permission" id="user-permission" class="form-control">
                                    <option value="">--Chọn quyền--</option>
                                    <option value="customer">Khách hàng</option>
                                    <option value="admin">Admin</option>
    
                                </select>
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="user-status" class="form-label">Trạng thái</label>
                                <select name="user-status" id="user-status" class="form-control">
                                    <option value="">--Chọn trạng thái--</option>
    
                                    <option value="active">Hoạt động</option>
                                    <option value="inactive">Không hoạt động</option>
    
                                </select>
                                <span class="form-message"></span>
                            </div>
    
    
    
                        </div>
                        <div class="form-controls">
                            <button class="btn-control" id="btn-save">Lưu</button>
                            <button class="btn-control" id="btn-cancel">Hủy</button>
                        </div>
                    </form>
                    <table id="product-table">
                        <thead>
                            <tr class="product-table__heading">
                                <th>Mã User</th>
                                <th>Tên đăng nhập</th>
                                <th>Mật khẩu</th>
                                <th>Họ tên người dùng</th>
                                <th>Email</th>
                                <th>Số ĐT</th>
                                <th style="width: 250px;">Địa chỉ</th>
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
                `
                initUserPage()
            }
    
            if (item.getAttribute('data-value') === 'ql-Sanpham') {
                item.classList.add('active')
    
                contentContainer.innerHTML = `
                <div class="top-line">
            <h1 class="top-line__heading">Quản lý sản phẩm</h1>
        </div>
    
    
        <div class="content__container">
            <ul class="function__list">
                <li class="function__item active" data-value="add">
                    <span class="function__item-title">
                        Thêm mới
                    </span>
                </li>
    
    
            </ul>
            <form id="form-admin">
                <div class="form-container">
    
                    <div class="form-group">
                        <label for="user-id" class="form-label">Mã sản phẩm</label>
    
                        <input id="user-id" name="user-id" type="text" class="form-control" disabled="true">
    
                        <span class="form-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="user-full_name" class="form-label">Tên sản phẩm</label>
    
                        <input id="user-full_name" name="user-full_name" type="text" class="form-control">
    
                        <span class="form-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="user-id" class="form-label">Brand</label>
                        <select class="form-control">
                            <option>Samsung</option>
                            <option>Iphone</option>
                            <option>Xiaomi</option>
                            <option>Oppo</option>
                            <option>Vivo</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="user-id" class="form-label">Tìm kiếm sản phẩm</label>
    
                        <input id="user-id" name="user-id" type="text" class="form-control" disabled="true">
    
                        <span class="form-message"></span>
                    </div>
                    
    
    
                </div>
                <div class="form-controls">
                    <button class="button-luu button" id="">Lưu</button>
                    <button class="button-huy button" id="">Hủy</button>
                </div>
            </form>
            <table id="product-table">
                <thead>
                    <tr class="product-table__heading">
                        <th>Mã SP</th>
                        <th>Tên SP</th>
                        <th>Hệ điều hành</th>
                        <th>Brand</th>
                        <th>xuất xứ</th>
                        <th>Cam trước</th>
                        <th>Cam sau</th>
                        <th>Pin</th>
                        <th>Thời hạn bảo hành</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody class="product-table__list">
                    <tr class="product-table__row">
                        <td>1</td>
                        <td>Samsung Galaxy S23 Ultra</td>
                        <td>Android</td>
                        <td>Samsung</td>
                        <td>china</td>
                        <td>50mp</td>
                        <td>200mp</td>
                        <td>5000</td>
                        <td>6 tháng</td>
                        <td>
                            <button class="buttonTable" onclick="xemPB()">Xem phiên bản</button>
                            <button class="buttonTable">Sửa</button>
                            <button class="buttonTable buttonTable-xoa">Xóa</button>
                        </td>
                    </tr>
                    <tr class="product-table__row">
                        <td>2</td>
                        <td>iphone 16 pro max</td>
                        <td>Ios</td>
                        <td>Apple</td>
                        <td>china</td>
                        <td>50mp</td>
                        <td>200mp</td>
                        <td>5000</td>
                        <td>6 tháng</td>
                        <td>
                            <button class="buttonTable" onclick="xemPB()">Xem phiên bản</button>
                            <button class="buttonTable">Sửa</button>
                            <button class="buttonTable buttonTable-xoa">Xóa</button>
                        </td>
                    </tr>
                </tbody>
            </table>
    
        </div>
                `
    
                initInvoicePage()
            }
            if (item.getAttribute('data-value') === 'ql-hoadon') {
                item.classList.add('active')
    
                contentContainer.innerHTML = `
                <div class="top-line">
                    <h1 class="top-line__heading">QUẢN LÝ ĐƠN HÀNG</h1>
                </div>
    
                <div class="search">
                </div>
    
                <div class="filter">
                    <div class="filter__item">
                        <label class="filter__label" for="filter__start-date">Chọn ngày bắt đầu:</label>
                        <input type="datetime-local" class="filter__input" id="filter__start-date" name="filter__start-date"
                            placeholder="Chọn ngày bắt đầu">
                    </div>
                    <div class="filter__item">
                        <label class="filter__label" for="filter__end-date">Chọn ngày kết thúc:</label>
                        <input type="datetime-local" class="filter__input" id="filter__end-date" name="filter__end-date"
                            placeholder="Chọn ngày bắt đầu">
                    </div>
                    <div class="filter__item">
                        <div class="filter__button">Lọc</div>
                    </div>
                </div>
                <div class="content__container">
                    <form id="form-admin">
                        <!-- <div class="form-container">
    
                            <div class="form-group">
                                <label for="invoice-id" class="form-label">Mã HĐ</label>
    
                                <input id="invoice-id" name="invoice-id" type="text" class="form-control" disabled="true">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="invoice-user-id" class="form-label">Mã KH</label>
    
                                <input id="invoice-user-id" name="invoice-user-id" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="invoice-order-time" class="form-label">Thời gian đặt hàng</label>
    
                                <input id="invoice-order-time" name="invoice-order-time" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="invoice-total-price" class="form-label">Tổng tiền</label>
    
                                <input id="invoice-total-price" name="invoice-total-price" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="invoice-status" class="form-label">Tình trạng</label>
    
                                <input id="invoice-status" name="invoice-status" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
    
                           
    
                            
                        </div> -->
                        <div class="form-controls form-hoadon">
                            <div class="form-label">
                                <div class="invoice-label">Đơn hàng chưa được xử lý! Nhấn nút để xử lý ngay</div>
                            </div>
    
                            <button class="btn-control" id="btn-process">Xử lý</button>
    
                            <button class="btn-control" id="btn-update">Xác nhận đang giao</button>
                        </div>
                    
                        
                    </form> 
    
                    <div class="invoice-details">
                        <div class="invoice-details__header">
                            CHI TIẾT HÓA ĐƠN
                        </div>
                        <div class="invoice-details__list">
                            
                        </div>
                    </div>
    
                    <table id="product-table">
                        <thead>
                            <tr class="product-table__heading">
                                <th>Mã HD</th>
                                <th>Thời gian đặt hàng </th>
                                <th>Mã KH</th>
                                <th>Tổng tiền</th>
                                <th>Tình trạng</th>
                                <th>Chi tiết đơn hàng</th>
                            </tr>
                        </thead>
                        <tbody class="product-table__list">
                        <tr class="product-table__row product-table__row--clicked">
                            <td>1</td>
                            <td>11/05/2024</td>
                            <td>1</td>
                            <td>10000000</td>
                            <td>Đã xử lý</td>
                            <td>1</td>
                            <td>
                                <button class="product-table__see-btn product-table-btn">Xem</button>
                            </td>
                        </tr>
    
                        </tbody>
                    </table>
                   
                </div>
                `
                initInvoicePage()
            }
            if (item.getAttribute('data-value') === 'ql-sanpham') {
                item.classList.add('active')
    
    
                contentContainer.innerHTML = `
                <div class="top-line">
                    <h1 class="top-line__heading">QUẢN LÝ SẢN PHẨM</h1>
                </div>
    
                <div class="content__container">
    
                    <ul class="function__list">
                        <li class="function__item active" value="add">
                            <span class="function__item-title" >
                                Thêm mới
                            </span>
                        </li>
                        <li class="function__item" value="update">
                            <span class="function__item-title" >
                                Chỉnh sửa
                            </span>
                        </li>
                        <li class="function__item" value="delete">
                            <span class="function__item-title" >
                                Xóa
                            </span>
                        </li>
    
    
                    </ul>
                    <form id="form-admin">
                        <div class="form-container">
    
                            <div class="form-group">
                                <label for="product-id" class="form-label">Mã SP</label>
    
                                <input id="product-id" name="product-id" type="text" placeholder="VD: 1"
                                    class="form-control" disabled="true">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="product-name" class="form-label">Tên SP</label>
    
                                <input id="product-name" name="product-name" type="text" placeholder="VD: Samsung Galaxy S23 Ultra 256GB"
                                    class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="product-price-old" class="form-label">Giá trước KM</label>
    
                                <input id="product-price-old" name="product-price-old" type="text"
                                    placeholder="VD: 31990000" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="product-price-current" class="form-label">Giá sau KM</label>
    
                                <input id="product-price-current" name="product-price-current" type="text"
                                    placeholder="VD: 22190000" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="product-brand" class="form-label">Brand</label>
                                <select name="product-brand" id="product-brand" class="form-control">
                                    <option value="Iphone">Iphone</option>
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
                                <label for="product-sale" class="form-label">Phần trăm KM</label>
    
                                <input id="product-sale" name="product-sale" type="text" placeholder="VD: 30"
                                    class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <!-- Form Group for ROM -->
                            <div class="form-group">
                                <label class="form-label">ROM</label>
                                <div class="checkbox-group checkbox-group-rom">
                                    <input type="checkbox" id="rom-16gb" name="rom-16gb" class="form-checkbox" data-value="16 GB">
                                    <label for="rom-16gb">16 GB</label>
    
                                    <input type="checkbox" id="rom-32gb" name="rom-32gb" class="form-checkbox" data-value="32 GB">
                                    <label for="rom-32gb">32 GB</label>
    
                                    <input type="checkbox" id="rom-64gb" name="rom-64gb" class="form-checkbox" data-value="64 GB">
                                    <label for="rom-64gb">64 GB</label>
    
                                    <input type="checkbox" id="rom-128gb" name="rom-128gb" class="form-checkbox" data-value="128 GB">
                                    <label for="rom-128gb">128 GB</label>
    
                                    <input type="checkbox" id="rom-256gb" name="rom-256gb" class="form-checkbox" data-value="256 GB">
                                    <label for="rom-256gb">256 GB</label>
    
                                    <input type="checkbox" id="rom-512gb" name="rom-512gb" class="form-checkbox" data-value="512 GB">
                                    <label for="rom-512gb">512 GB</label>
    
                                    <input type="checkbox" id="rom-1tb" name="rom-1tb" class="form-checkbox" data-value="1 TB">
                                    <label for="rom-1tb">1 TB</label>
    
                                </div>
                                <span class="form-message"></span>
                            </div>
    
                            <!-- Form Group for RAM -->
                            <div class="form-group">
                                <label class="form-label">RAM</label>
                                <div class="checkbox-group checkbox-group-ram">
                                    <input type="checkbox" id="ram-1gb" name="ram-1gb" class="form-checkbox" data-value="1 GB">
                                    <label for="ram-1gb">1 GB</label>
    
                                    <input type="checkbox" id="ram-2gb" name="ram-2gb" class="form-checkbox" data-value="2 GB">
                                    <label for="ram-2gb">2 GB</label>
    
                                    <input type="checkbox" id="ram-3gb" name="ram-3gb" class="form-checkbox" data-value="3 GB">
                                    <label for="ram-3gb">3 GB</label>
    
                                    <input type="checkbox" id="ram-4gb" name="ram-4gb" class="form-checkbox" data-value="4 GB">
                                    <label for="ram-4gb">4 GB</label>
    
                                    <input type="checkbox" id="ram-6gb" name="ram-6gb" class="form-checkbox" data-value="6 GB">
                                    <label for="ram-6gb">6 GB</label>
    
                                    <input type="checkbox" id="ram-8gb" name="ram-8gb" class="form-checkbox" data-value="8 GB">
                                    <label for="ram-8gb">8 GB</label>
    
                                    <input type="checkbox" id="ram-12gb" name="ram-12gb" class="form-checkbox" data-value="12 GB">
                                    <label for="ram-12gb">12 GB</label>
    
                                </div>
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group form-group--full">
                                <label for="product-img" class="form-label">Ảnh (Nhập đường dẫn)</label>
    
                                <input id="product-img" name="product-img" type="text"
                                    placeholder="VD: https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s23-ultra.png"
                                    class="form-control">
                                <span class="form-message"></span>
                            </div>
    
    
                        </div>
                        <div class="form-controls">
                            <button class="btn-control" id="btn-save">Lưu</button>
                            <button class="btn-control" id="btn-cancel">Hủy</button>
                        </div>
                    </form>
    
                </div>
                <table id="product-table">
                    <thead>
                        <tr class="product-table__heading">
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Giá ban đầu</th>
                            <th>Giá sau KM</th>
                            <th>% KM</th>
                            <th>Brand</th>
                            <th>RAM</th>
                            <th>ROM</th>
                            <th>Link ảnh</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody class="product-table__list">
                        <tr class="product-table__row">
                            <td>1</td>
                            <td>Samsung Galaxy S23 Ultra 256GB</td>
                            <td>10000000</td>
                            <td>9000000</td>
                            <td>10</td>
                            <td>Samsung</td>
                            <td>2GB, 3GB</td>
                            <td>512GB, 1TB</td>
                            <td><img class="product-table__img"
                                    src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s23-ultra.png"
                                    alt=""></td>
                            <td>
                                <button class="product-table__update-btn product-table-btn">Sửa123</button>
                                <button class="product-table__delete-btn product-table-btn">Xóa</button>
                                <button class="product-table__delete-btn product-table-btn">Xem phiên bản</button>
                            </td>
                        </tr>
    
                    </tbody>
                </table>
                8`
    
                initProductPage()
            }
            if (item.getAttribute('data-value') === 'ql-khuyenmai') {
                item.classList.add('active')
                contentContainer.innerHTML =
                    `
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
                                <label for="user-full_name" class="form-label">Mô tả</label>
    
                                <input id="moTa" name="user-full_name" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
    
                            <div class="form-group">
                                <label for="user-username" class="form-label">Điều kiện</label>
    
                                <input id="dieuKien" name="user-username" type="text" class="form-control">
    
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
                                <option value="on">On</option>
                                <option value="off">Off</option>                             
                            </select>
    
                                <span class="form-message"></span>
                            </div>
                           
                           
    
    
                        </div>
                        <div class="form-controls">
                            <button type="button"  class="btn-control" id="btn-save">Cập nhật</button>
                             <button type="button"  class="btn-control" id="btn-add">Thêm</button>
                            <button type="button" onclick="huyPromotion()"  class="btn-control" id="btn-cancel">Hủy</button>
                        </div>
                    </form>
                    <table id="product-table">
                        <thead>
                            <tr class="product-table__heading">
                                <th>Mã khuyến mãi</th>
                                <th>Mô tả</th>
                                <th>Điều kiện</th>
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
                `
                initPromotionPage()
            }
            if (item.getAttribute('data-value') === 'ql-baohanh') {
                item.classList.add('active')
                contentContainer.innerHTML =
                    `
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
                                <label for="user-full_name" class="form-label">Thời gian tạo</label>
    
                                <input id="thoiGian" name="user-full_name" type="text" class="form-control">
    
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
                                <label for="user-email" class="form-label">Mã nhân viên</label>
    
                                <input id="maNv" name="user-email" type="text" class="form-control">
    
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
                `
                initBaoHanhPage()
            }
           
            if (item.getAttribute('data-value') === 'ql-phieunhap') {
                item.classList.add('active')
                contentContainer.innerHTML =
                    `
                    <div class="top-line">
                    <h1 class="top-line__heading">QUẢN LÝ PHIẾU NHẬP</h1>
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
                                <label for="user-id" class="form-label">Mã phiếu nhập</label>
    
                                <input id="maPhieuNhap" name="user-id" type="text" class="form-control" disabled="true">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="user-full_name" class="form-label">Thời gian tạo</label>
    
                                <input id="thoiGianTao" name="user-full_name" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
    
                            <div class="form-group">
                                <label for="user-username" class="form-label">Tổng tiền</label>
    
                                <input id="tongTien" name="user-username" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="user-password" class="form-label">Trạng Thái</label>                     
                                <select id="trangThai" style="height: 100%;">
                                    <option value="Đã xác nhận">Đã xác nhận</option>
                                    <option value="Chưa xác nhận">Chưa xác nhận</option>                             
                                </select>
    
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="user-email" class="form-label">Mã nhân viên</label>
    
                                <input id="maNv" name="user-email" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                           
                            <div class="form-group">
                                <label for="user-email" class="form-label">Mã nhà cung cấp</label>
    
                                <input id="maNCC" name="user-email" type="text" class="form-control">
    
                                <span class="form-message"></span>
                            </div>
                           
                           
    
    
                        </div>
                        <div class="form-controls">
                            <button type="button"  class="btn-control" id="btn-save">Cập nhật</button>
                            <button type="button"  class="btn-control" id="btn-add">Thêm</button>
                            <button type="button" onclick="huyPhieuNhap()"  class="btn-control" id="btn-cancel">Hủy</button>
                        </div>
                    </form>
                    <table id="product-table">
                        <thead>
                            <tr class="product-table__heading">
                                <th>Mã phiếu nhập</th>
                                <th>Thời gian tạo</th>
                                <th>Tổng tiền</th>
                                <th>Trạng thái</th>
                                <th>Mã nhân viên</th>  
                                <th>Nhà cung cấp</th>       
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
                                <td>Đã xử lý</td>
                                <td>
                                    <button class="product-table__update-btn product-table-btn">Sửa</button>
                                    <button class="product-table__delete-btn product-table-btn">Xem chi tiết</button>
                                </td>
                            </tr>
    
                        </tbody>
                    </table>
    
                </div>
                `
                initPhieuNhapPage()
            }
    
    
    
    
    
            if (item.getAttribute('data-value') === 'product-page') {
                redirectToProductPage()
            }
    
    
    
    
            const logOutBtn = $('#log-out-btn')
            logOutBtn.addEventListener('click', (e) => {
                e.preventDefault()
                User.logOut()
                // redirectToProductPage()
            })
        })
    })

}else{
    window.location.href = "/index.html"
}


// Các hàm validate
const validate = {
    validateProductName: function (name) {
        let value = true;
        let message = 'Hợp lệ'
        if (name.trim() === '') {
            value = false;
            message = 'Tên sản phẩm không được để trống';
            return { value, message };
        }
        if (name.length < 7) {
            value = false
            message = 'Tên sản phẩm phải ít nhất 7 ký tự'
            return { value, message }
        }
        if (/^\d+$/.test(name)) {
            value = false;
            message = 'Tên sản phẩm không được chứa toàn bộ là số';
            return { value, message }
        }
        return { value, message };
    },

    showErrMessage: function (errorLabel, message) {
        errorLabel.innerText = message
        errorLabel.classList.add('active')
    },
    validateProductInt: function (input) {
        let value = true;
        let message = 'Hợp lệ'
        if (input.toString().trim() === '') {
            value = false;
            message = 'Không được để trống';
            return { value, message };
        }
        if (/\D/.test(input)) {
            value = false;
            message = 'Không được chứa ký tự chữ';
        }
        return { value, message }
    },
    hideErrMessage: function (errorLabel) {
        errorLabel.innerText = ''
        errorLabel.classList.remove('active')
    },
    hideAllErrMessage: function (listErrorMessage) {
        listErrorMessage.forEach(mess => {
            mess.innerText = ''
            mess.classList.remove('active')
        })

    },
    validateProductList: function (list) {
        let value = true;
        let message = 'Hợp lệ'
        if (!list || list.length === 0) {
            value = false;
            message = 'Phải chọn ít nhất 1 giá trị';
        }
        return { value, message }

    },
    validateValue: function (input) {
        let value = true;
        let message = 'Hợp lệ'
        if (input.trim() === '') {
            value = false;
            message = 'Phải chọn ít nhất 1 giá trị';
        }
        return { value, message }
    },
    validateUserFullName: function (fullName) {
        let value = true;
        let message = 'Hợp lệ'
        if (fullName.trim() === '') {
            value = false;
            message = 'Họ tên không được để trống';
            return { value, message };
        }

        if (/^\d+$/.test(fullName)) {
            value = false;
            message = 'Họ tên không được chứa toàn bộ là số';
            return { value, message }
        }
        return { value, message };
    },
    validateUserUsername: function (username) {
        let value = true;
        let message = 'Hợp lệ'
        if (username.trim() === '') {
            value = false;
            message = 'Tên đăng nhập không được để trống';
            return { value, message };
        }
        if (username.length < 6) {
            value = false;
            message = 'Tên đăng nhập tối thiểu 6 ký tự';
            return { value, message };
        }

        if (/^\d+$/.test(username)) {
            value = false;
            message = 'Tên đăng nhập không được chứa toàn bộ là số';
            return { value, message }
        }
        return { value, message };

    },
    validateUserPassword: function (password) {
        let value = true;
        let message = 'Hợp lệ'
        if (password.trim() === '') {
            value = false;
            message = 'Mật khẩu không được để trống';
            return { value, message };
        }
        if (password.length < 6) {
            value = false;
            message = 'Mật khẩu tối thiểu 6 ký tự';
            return { value, message };
        }
        return { value, message };

    },
    validateUserEmail: function (email) {
        let value = true;
        let message = 'Hợp lệ'
        if (email.trim() === '') {
            value = false;
            message = 'Email không được để trống';
            return { value, message };
        }
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            value = false;
            message = 'Email phải đúng định dạng. VD: wizardsc1111@gmail.com';
            return { value, message };
        }
        return { value, message };
    },
    validateUserPhone: function (phone) {
        let value = true;
        let message = 'Hợp lệ'
        if (/\D/.test(phone)) {
            value = false;
            message = 'SĐT không được chứa ký tự chữ';
        }
        return { value, message };

    }
}


function initProductPage() {
    const usernameLabel = $('.info__name')
    const btnSave = $('#btn-save')
    const btnCancel = $('#btn-cancel')
    const btnUpdate = $('.product-table__update-btn')
    const btnDelete = $('.product-table__delete-btn')
    const functionList = $$('.function__item')
    const contentContainer = $('#content')
    const listControlItems = $$('.nav-links__item')
    const listErrorMessage = $$('.form-message')
    renderProductToTable()

    function renderProductToTable() {
        const tableBody = $('.product-table__list')
        const productList = Product.getProducts()
        let html = ''
        if (productList) {
            Array.from(productList).forEach(product => {

                html +=
                    `
                <tr class="product-table__row">
                            <td>${product.productID}</td>
                            <td>${product.name}</td>
                            <td>${money.formatCurrencytoVND(product.price_old)}</td>
                            <td>${money.formatCurrencytoVND(product.price_current)}</td>
                            <td>${product.sale}</td>
                            <td style="text-transform: capitalize;">${product.brand}</td>
                            <td>${product.ram}</td>
                            <td>${product.rom}</td>
                            <td><img class="product-table__img" src="${product.img}" alt=""></td>
                            <td>
                                <button class="product-table__update-btn product-table-btn" data-product-id="${product.productID}">Sửa</button>
                                <button class="product-table__delete-btn product-table-btn" data-product-id="${product.productID}">Xóa</button>
                                <button class="product-table__delete-btn product-table-btn" data-product-id="${product.productID}">Xem phiên bản</button>
                            </td>
                        </tr>
                `
            })
            tableBody.innerHTML = html
            const productRowList = $$('.product-table__row')
            Array.from(productRowList).forEach(row => {
                const updateButton = row.querySelector('.product-table__update-btn')
                const deleteButton = row.querySelector('.product-table__delete-btn')
                updateButton.addEventListener('click', () => {
                    const productID = updateButton.getAttribute('data-product-id')
                    const productItem = Product.getProductID(parseInt(productID))
                    renderProduct(productItem, true)

                })

                deleteButton.addEventListener('click', () => {
                    const productID = deleteButton.getAttribute('data-product-id')
                    const productItem = Product.getProductID(parseInt(productID))
                    renderProduct(productItem, false)
                    deleteProduct(parseInt(productID))
                })


            })
        }
    }
    let listROM = [];
    let listRAM = [];
    let productId = document.getElementById('product-id');
    let productName = document.getElementById('product-name');
    let productPriceOld = document.getElementById('product-price-old');
    let productPriceCurrent = document.getElementById('product-price-current');
    let productBrand = document.getElementById('product-brand');
    let productSale = document.getElementById('product-sale');
    let productIMG = document.getElementById('product-img');
    let listROMCheckbox = $$('.checkbox-group-rom input[type="checkbox"]');
    let listRAMCheckbox = $$('.checkbox-group-ram input[type="checkbox"]');
    function resetValue() {
        productId.value = '';
        productName.value = '';
        productPriceOld.value = '';
        productPriceCurrent.value = '';
        productBrand.selectedIndex = -1; // Bỏ chọn option trong select
        productSale.value = '';
        productIMG.value = '';
        listRAM = []
        listROM = []
        Array.from(listROMCheckbox).forEach(item => item.checked = false)
        Array.from(listRAMCheckbox).forEach(item => item.checked = false)
        validate.hideAllErrMessage(listErrorMessage)
    }
    // Khi nhấn nút thêm thì active nút thêm
    Array.from(functionList).forEach(item => {
        item.addEventListener('click', () => {
            // Loại bỏ lớp 'active' từ tất cả các phần tử
            Array.from(functionList).forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Thêm lớp 'active' cho phần tử được kích hoạt có giá trị là 'add'
            if (item.getAttribute('value') === 'add') {
                item.classList.add('active');
                resetValue()
            }
        });
    })


    function addProduct() {
        // Lấy giá trị của các input
        Array.from(listROMCheckbox).forEach((item, index) => {
            if (item.checked) {
                listROM.push(romValues[index])
            }
        })
        Array.from(listRAMCheckbox).forEach((item, index) => {
            if (item.checked) {
                listRAM.push(ramValues[index])
            }

        })
        //Kiểm tra dữ liệu
        // console.log(productPriceOld.value)
        const validateAndDisplayError = (input, errorMessageElement, validationFunction) => {
            const validationResult = validationFunction(input);
            if (!validationResult.value) {
                validate.showErrMessage(errorMessageElement, validationResult.message);
                return false
            } else {
                validate.hideErrMessage(errorMessageElement);
                return true
            }
        };
        const isValidProductName = validateAndDisplayError(productName.value.toString(), listErrorMessage[1], validate.validateProductName);
        const isValidProductPriceOld = validateAndDisplayError(productPriceOld.value, listErrorMessage[2], validate.validateProductInt);
        const isValidProductPriceCurrent = validateAndDisplayError(productPriceCurrent.value, listErrorMessage[3], validate.validateProductInt);
        const isValidProductSale = validateAndDisplayError(productSale.value, listErrorMessage[5], validate.validateProductInt);
        const isValidListROM = validateAndDisplayError(listROM, listErrorMessage[6], validate.validateProductList);
        const isValidListRAM = validateAndDisplayError(listRAM, listErrorMessage[7], validate.validateProductList);
        const isValidBrand = validateAndDisplayError(productBrand.value.toString(), listErrorMessage[4], validate.validateValue)
        if (isValidProductName && isValidProductPriceOld && isValidProductPriceCurrent && isValidProductSale && isValidBrand && isValidListROM && isValidListRAM) {
            // Nếu không có lỗi, thêm sản phẩm
            Product.addProduct(productName.value, productPriceOld.value, productPriceCurrent.value, productIMG.value, productBrand.value, listRAM, listROM, productSale.value);
            resetValue();
            renderProductToTable();
        }
    }
    function renderProduct(productItem, isUpdate) {
        resetValue()
        //active cho thẻ sửa
        Array.from(functionList).forEach(item => {
            if (item.classList.contains('active')) item.classList.remove('active')
            if (item.getAttribute('value') === 'update' && isUpdate == true) {

                item.classList.add('active')
            }
            if (item.getAttribute('value') === 'delete' && isUpdate == false) {
                item.classList.add('active')
            }
        })

        //Render thông tin sản phẩm lên form
        productId.value = productItem.productID
        productName.value = productItem.name
        productPriceCurrent.value = productItem.price_current
        productPriceOld.value = productItem.price_old
        productIMG.value = productItem.img
        const indexToSelect = Array.from(productBrand.options).findIndex(option => option.value.toLowerCase() === productItem.brand.toLowerCase());
        if (indexToSelect !== -1) {
            // Chọn option bằng cách gán giá trị cho selectedIndex
            productBrand.selectedIndex = indexToSelect;
        } else {
            console.error(`Không tìm thấy option với giá trị ${productItem.brand}`);
        }
        productSale.value = productItem.sale
        Array.from(listROMCheckbox).forEach((item) => {
            productItem.rom.forEach((value) => {
                if (item.getAttribute('data-value') === value) {
                    item.checked = true
                    listROM.push(value)
                }
            })
        })

        Array.from(listRAMCheckbox).forEach((item) => {
            productItem.ram.forEach((value) => {
                if (item.getAttribute('data-value') === value) item.checked = true
                listRAM.push(value)
            })
        })

    }

    btnSave.addEventListener('click', (e) => {
        e.preventDefault();
        const isUpdateActive = Array.from(functionList).some(item => {
            if (item.getAttribute('value') === 'update' && item.classList.contains('active')) {

                updateProduct();
                renderProductToTable();
                return true;
            }
            if (item.getAttribute('value') === 'add' && item.classList.contains('active')) {

                addProduct();
                renderProductToTable();
                return true;
            }
            return false;
        });

        if (!isUpdateActive) {
            console.log('No active "update" item found.');
        }
    });
    btnCancel.addEventListener('click', (e) => {
        e.preventDefault();
        resetValue();
    })
    function updateProduct() {
        listRAM = []
        listROM = []
        //chỉnh sửa thông tin sản phẩm
        Array.from(listROMCheckbox).forEach((item, index) => {
            if (item.checked) {
                listROM.push(romValues[index])
            }
        })
        Array.from(listRAMCheckbox).forEach((item, index) => {
            if (item.checked) {
                listRAM.push(ramValues[index])
            }

        })

        Product.updateProduct(productId.value, productName.value, productPriceOld.value, productPriceCurrent.value, productIMG.value, productBrand.value, listRAM, listROM, productSale.value)
    }

    function deleteProduct(productID) {
        if (confirm('Bạn có muốn xóa sản phẩm này?')) {
            Product.deleteProduct(productID)
            renderProductToTable()
        }
    }
}














function initInvoicePage() {
    const invoiceList = [
        { invoiceID: 1, orderTime: '2024-05-11T14:30', userID: 1, totalPrice: 20000000, status: true },
        { invoiceID: 2, orderTime: '2024-05-10T09:15', userID: 2, totalPrice: 10000000, status: true },
        { invoiceID: 3, orderTime: '2024-05-12T18:45', userID: 4, totalPrice: 7000000, status: false },
        { invoiceID: 4, orderTime: '2024-11-10T10:00', userID: 3, totalPrice: 11000000, status: true },
        { invoiceID: 5, orderTime: '2024-10-13T16:20', userID: 8, totalPrice: 10000000, status: true }
    ];    
    const orderDetails = [ // thêm để text
        { invoiceID: 1, productIMG: "img/product/samsungs21.jpg", storeProduct: { name: "Samsung Galaxy S21" }, product_price: 5000000, quantity: 2, totalPrice: 10000000 },
        { invoiceID: 1, productIMG: "img/product/iphone12.jpg", storeProduct: { name: "iPhone 12" }, product_price: 10000000, quantity: 1, totalPrice: 10000000 },
        { invoiceID: 2, productIMG: "img/product/OPPOReno5.png", storeProduct: { name: "Oppo Reno 5" }, product_price: 10000000, quantity: 1, totalPrice: 10000000 },
        { invoiceID: 3, productIMG: "img/product/XiaomiRNote10.png", storeProduct: { name: "Realme 7" }, product_price: 7000000, quantity: 1, totalPrice: 7000000 }
    ];
    
    const invoiceDetailContainer = $('.invoice-details__list'); // thêm để text
    // const invoiceList = Invoice.getInvoices()
    const invoiceIDInput = $('#invoice-id')
    const invoiceUserIDInput = $('#invoice-user-id')
    const invoiceOrderTimeInput = $('#invoice-order-time')
    const invoiceTotalPriceInput = $('#invoice-total-price')
    const invoiceStatusInput = $('#invoice-status')
    const message = $('.invoice-label')
    const processBtn = $('#btn-process')
    const updateBtn = $('#btn-update')


    function handleInvoiceActions() {
        //Nút lọc hóa đơn
        // const filterButton = $('.filter__button')
        // const startDateInput = $('#filter__start-date')
        // const endDateInput = $('#filter__end-date')
        // filterButton.addEventListener('click', () => {
        //     const startDate = time.getDateTime(startDateInput.value)
        //     const endDate = time.getDateTime(endDateInput.value)

        //     const filterList = Invoice.getInvoiceByDateTime(startDate, endDate)
        //     renderInvoice(filterList)
        // })

       
            const filterButton = $('.filter__button');
            const startDateInput = $('#filter__start-date');
            const endDateInput = $('#filter__end-date');
            
            filterButton.addEventListener('click', () => {
                const startDate = startDateInput.value;  // Giá trị định dạng YYYY-MM-DDTHH:MM
                const endDate = endDateInput.value;      // Giá trị định dạng YYYY-MM-DDTHH:MM
                
             // Kiểm tra xem cả hai trường có giá trị hay không
                if (!startDate || !endDate) {
                    alert('Vui lòng nhập đầy đủ thông tin ngày bắt đầu và ngày kết thúc.'); // Thông báo nếu chưa nhập đủ
                return; // Dừng thực hiện nếu không đủ thông tin
                }

                // Lọc hóa đơn theo khoảng thời gian
                const filterList = invoiceList.filter(invoice => {
                    const invoiceDate = invoice.orderTime;  // Ngày giờ của hóa đơn
                    return invoiceDate >= startDate && invoiceDate <= endDate;  // So sánh ngày giờ
                });
                
                renderInvoice(filterList);  // Hiển thị hóa đơn sau khi lọc
            });
            
        
            
            processBtn.addEventListener('click', (e) => {
                e.preventDefault();
            
                const invoiceID = clickedRow.selectedInvoiceID; // Lấy mã hóa đơn đã chọn
                const invoiceStatus = $(`.product-table__row--clicked[data-value="${invoiceID}"] td:nth-child(5)`).innerText; // Lấy trạng thái hóa đơn
            
                // Kiểm tra trạng thái hóa đơn
                if (invoiceStatus === 'Chưa xử lý') {
                    Invoice.updateInvoiceStatus(parseInt(invoiceID), true); // Cập nhật trạng thái hóa đơn
                    const newList = Invoice.getInvoices(); // Lấy danh sách hóa đơn mới
                    renderInvoice(newList); // Hiển thị lại danh sách hóa đơn
                    resetValue(); // Đặt lại trạng thái
                } else {
                    alert('Đơn hàng đã được xử lý, không thể xác nhận lại.'); // Thông báo nếu đơn hàng đã xử lý
                }
            });
           
            updateBtn.addEventListener('click', (e) => {
                e.preventDefault();
            
                const invoiceID = clickedRow.selectedInvoiceID; // Lấy mã hóa đơn đã chọn
                const invoiceStatus = $(`.product-table__row--clicked[data-value="${invoiceID}"] td:nth-child(5)`).innerText; // Lấy trạng thái hóa đơn
            
                // Kiểm tra trạng thái hóa đơn
                if (invoiceStatus === 'Đã xử lý') {
                    Invoice.updateInvoiceStatus(parseInt(invoiceID), 'Đang giao'); // Cập nhật trạng thái hóa đơn
                    const newList = Invoice.getInvoices(); // Lấy danh sách hóa đơn mới
                    renderInvoice(newList); // Hiển thị lại danh sách hóa đơn
                    resetValue(); // Đặt lại trạng thái
                } else {
                    alert('Chỉ có thể xác nhận đơn hàng đang giao khi đơn hàng đã được xử lý.'); // Thông báo nếu trạng thái không hợp lệ
                }
            });

    }
    handleInvoiceActions()
    renderInvoice(invoiceList)


    
    function renderInvoice(listInvoice) {
        const tableBody = $('.product-table__list')

        let html = ''
        Array.from(listInvoice).forEach(invoice => {
            let status = ''
            if (invoice.status === false) {
                status = 'Chưa xử lý'
            } else if (invoice.status === true) {
                status = 'Đã xử lý'
            }
            html += `
            <tr class="product-table__row product-table__row--clicked" data-value="${invoice.invoiceID}">
                            <td>${invoice.invoiceID}</td>
                
                            <!-- <td>${time.getDateTime(invoice.orderTime)}</td> --> 
                            <td>${invoice.orderTime.replace('T', ' ')}</td>
                
                            <td>${invoice.userID}</td>

                            <td>${money.formatCurrencytoVND(invoice.totalPrice)}</td>
                            <!-- <td>${money.formatCurrencytoVND(Invoice.getTotalPriceOfInvoice(invoice.invoiceID))}</td> -->
                
                            <td>${status}</td>
                
                            <td>
                                <button class="product-table__see-btn product-table-btn">Xem</button>
                            </td>
             
               </tr>

            `
        })

        tableBody.innerHTML = html
        const productRowList = $$('.product-table__row')
        Array.from(productRowList).forEach((row) => {
            const seeButton = row.querySelector('.product-table__see-btn')
            seeButton.addEventListener('click', (e) => {
                e.preventDefault();
                renderDetailProduct(parseInt(row.dataset.value))
            })

        })
        clickedRow()


    }

    function resetValue() {

        invoiceIDInput.value = ''
        invoiceUserIDInput.value = ''
        invoiceOrderTimeInput.value = ''
        invoiceTotalPriceInput.value = ''
        invoiceStatusInput.value = ''
        message.classList.remove('active')
    }

    // function clickedRow() {
    //     const rowTable = $$('.product-table__row--clicked')
    //     Array.from(rowTable).forEach(row => {
    //         row.addEventListener('click', () => {
    //             const invoiceID = row.cells[0].innerText;
    //             clickedRow.selectedInvoiceID = invoiceID;
    //             const invoiceOrderTime = row.cells[1].innerText;
    //             const invoiceUserID = row.cells[2].innerText;
    //             const invoiceTotalPrice = row.cells[3].innerText;
    //             const invoiceStatus = row.cells[4].innerText;

    //             invoiceIDInput.disabled = true
    //             invoiceUserIDInput.disabled = true
    //             invoiceOrderTimeInput.disabled = true
    //             invoiceTotalPriceInput.disabled = true
    //             invoiceStatusInput.disabled = true

    //             if (invoiceStatus === 'Chưa xử lý') {

    //                 message.classList.add('active')
    //                 processBtn.disabled = false;

    //             }
    //             else {
    //                 processBtn.disabled = true;

    //                 message.classList.remove('active')

    //                 // processBtn.style.backgroundColor = '#999'


    //             }
    //             invoiceIDInput.value = invoiceID
    //             invoiceOrderTimeInput.value = invoiceOrderTime
    //             invoiceUserIDInput.value = invoiceUserID
    //             invoiceTotalPriceInput.value = invoiceTotalPrice
    //             invoiceStatusInput.value = invoiceStatus
    //         })
    //     })
    // }

    function clickedRow() {
        const rowTable = $$('.product-table__row--clicked');
        Array.from(rowTable).forEach(row => {
            row.addEventListener('click', () => {
                const invoiceID = row.cells[0].innerText; // Lấy mã hóa đơn
                clickedRow.selectedInvoiceID = invoiceID; // Lưu mã hóa đơn đã chọn
    
                const invoiceStatus = row.cells[4].innerText; // Lấy trạng thái hóa đơn
    
                // Kích hoạt nút "Xác nhận", "Hủy" và "Xác nhận đang giao"
                processBtn.disabled = false; // Kích hoạt nút "Xác nhận"
                updateBtn.disabled = false; // Kích hoạt nút "Xác nhận đang giao"
    
                // Kiểm tra trạng thái để quyết định nút "Xác nhận" và "Xác nhận đang giao"
                if (invoiceStatus === 'Chưa xử lý') {
                    processBtn.disabled = false; // Kích hoạt nút "Xác nhận"
                    updateBtn.disabled = true; // Vô hiệu hóa nút "Xác nhận đang giao"
                } else if (invoiceStatus === 'Đã xử lý') {
                    processBtn.disabled = true; // Vô hiệu hóa nút "Xác nhận"
                    updateBtn.disabled = false; // Kích hoạt nút "Xác nhận đang giao"
                } else {
                    processBtn.disabled = true; // Vô hiệu hóa nút "Xác nhận"
                    updateBtn.disabled = true; // Vô hiệu hóa nút "Xác nhận đang giao"
                }
            });
        });
    }


     // Vô hiệu hóa các nút khi khởi tạo
        processBtn.disabled = true; // Vô hiệu hóa nút "Xác nhận"
        updateBtn.disabled = true; // Vô hiệu hóa nút "Xác nhận đang giao"

        // Gọi hàm clickedRow để thiết lập sự kiện click cho các dòng
        clickedRow();



    // function renderDetailProduct(invoiceID) {
    //     const invoiceDetailList = $('.invoice-details__list')
    //     const listDetailInvoice = orderDetails.filter(detail => detail.invoiceID === invoiceID); // mảng thêm để text
    //     // const listDetailInvoice = Invoice.getDetailInvoice(invoiceID)
    //     let html = ''
    //     listDetailInvoice.forEach(detailInvoice => {
    //         html += `
    //         <div class="invoice-details__item">
    //             <img class="invoice-details__img"
    //                 src="${detailInvoice.productIMG}"
    //                 alt="">
    //             <div class="invoice-details__item-wrapper">
    //                 <div class="invoice-details__name">
    //                    ${detailInvoice.storeProduct.name}
    //                 </div>
    //                 <div class="invoice-details__price">
    //                     <span class="invoice-details__price-label">Đơn giá: </span>
    //                     ${money.formatCurrencytoVND(detailInvoice.product_price)}
    //                 </div>
    //                 <div class="invoice-details__quantity">
    //                     <span class="invoice-details__quantity-label">Số lượng: </span>
    //                     ${detailInvoice.quantity}
    //                 </div>
    //                 <div class="invoice-details__total-price">
    //                     <span class="invoice-details__total-price-label">Tổng tiền: </span>
    //                     ${money.formatCurrencytoVND(detailInvoice.totalPrice)}
    //                 </div>
    //             </div>
    //         </div>
    //         `
    //     })
    //     invoiceDetailList.innerHTML = html
    // }
    
    function renderDetailProduct(invoiceID) {
        const invoiceDetailList = $('.invoice-details__list');
        const listDetailInvoice = orderDetails.filter(detail => detail.invoiceID === invoiceID); // mảng thêm để text
        let html = '';
    
        html += `
        <div class="product-detail-header">
            <button class="close-detail-btn" style="float: right; cursor: pointer;">&times;</button>
        </div>
        <table class="product-detail-table">
            <thead>
                <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Mã phiên bản</th>
                    <th>Số seri</th>
                    <th>RAM</th>
                    <th>Màu</th>
                    <th>Giá bán</th>
                    <th>Số lượng</th>
                    <th>Tổng tiền</th>
                </tr>
            </thead>
            <tbody>
        `;
    
        const productSummary = {};
    
        listDetailInvoice.forEach(detailInvoice => {
            const productKey = detailInvoice.storeProduct.name; // Sử dụng tên sản phẩm làm khóa
            if (!productSummary[productKey]) {
                productSummary[productKey] = {
                    productID: detailInvoice.storeProduct.id, // Giả sử có thuộc tính id
                    name: detailInvoice.storeProduct.name,
                    version: detailInvoice.storeProduct.version, // Giả sử có thuộc tính version
                    serial: detailInvoice.storeProduct.serial, // Giả sử có thuộc tính serial
                    ram: detailInvoice.storeProduct.ram, // Giả sử có thuộc tính ram
                    color: detailInvoice.storeProduct.color, // Giả sử có thuộc tính color
                    price: detailInvoice.product_price,
                    quantity: 0,
                    total: 0
                };
            }
            productSummary[productKey].quantity += detailInvoice.quantity;
            productSummary[productKey].total += detailInvoice.product_price * detailInvoice.quantity;
        });
    
        // Tạo các dòng cho bảng
        for (const product in productSummary) {
            const item = productSummary[product];
            html += `
                <tr>
                    <td>${item.productID}</td>
                    <td>${item.name}</td>
                    <td>${item.version}</td>
                    <td>${item.serial}</td>
                    <td>${item.ram}</td>
                    <td>${item.color}</td>
                    <td>${money.formatCurrencytoVND(item.price)}</td>
                    <td>${item.quantity}</td>
                    <td>${money.formatCurrencytoVND(item.total)}</td>
                </tr>
            `;
        }
    
        html += `
            </tbody>
        </table>
        `;

        invoiceDetailList.innerHTML = html;
    
        const closeButton = invoiceDetailList.querySelector('.close-detail-btn');
        closeButton.addEventListener('click', () => {
            invoiceDetailList.innerHTML = '';
            resetInvoicePage(); 
        });
    }
    
   
    function resetInvoicePage() {
        processBtn.disabled = true; 
        updateBtn.disabled = true; 

        resetValue(); 
    }


}

// initInvoicePage()

function initUserPage() {
    const userList = User.getUsers()
    const tableBody = $('.product-table__list')
    const userIDInput = $('#user-id')
    const fullNameInput = $('#user-full_name')
    const usernameInput = $('#user-username')
    const passwordInput = $('#user-password')
    const emailInput = $('#user-email')
    const phoneInput = $('#user-phone')
    const addressInput = $('#user-address')
    const permissionInput = $('#user-permission')
    const statusInput = $('#user-status')
    const functionList = $$('.function__item')
    const listErrorMessage = $$('.form-message')
    const btnSave = $('#btn-save')
    const btnCancel = $('#btn-cancel')

    renderUserList(userList)

    function renderUserList(listUser) {
        userIDInput.value = User.getLastUserID() + 1
        let html = ''
        Array.from(listUser).forEach(user => {


            html += `
            <tr class="product-table__row" data-value=${user.userID}>
                <td>${user.userID}</td>
                <td>${user.username}</td>
                <td>${user.password}</td>
                <td>${user.full_name}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.address}</td>
                <td>
                            <button class="product-table__update-btn product-table-btn">Sửa</button>
                            <button class="product-table__delete-btn product-table-btn">Xóa</button>
                        </td>
            </tr>
             `
        })

        tableBody.innerHTML = html
        const tableRow = $$('.product-table__row')
        Array.from(tableRow).forEach(row => {
            const userID = row.getAttribute('data-value')
            const user = User.getUserID(parseInt(userID))
            const btnUpdate = row.querySelector('.product-table__update-btn')
            const btnDelete = row.querySelector('.product-table__delete-btn')

            const username = row.cells[1].innerText
            const password = row.cells[2].innerText
            const fullName = row.cells[3].innerText
            const email = row.cells[4].innerText
            const phone = row.cells[5].innerText
            const address = row.cells[6].innerText
            const permission = user.isAdmin ? 'admin' : 'customer'
            const status = user.isActive ? 'active' : 'inactive'
            btnUpdate.addEventListener('click', () => {
                userIDInput.value = userID
                fullNameInput.value = fullName
                passwordInput.value = password
                usernameInput.value = username
                emailInput.value = email
                phoneInput.value = phone
                addressInput.value = address
                permissionInput.value = permission
                statusInput.value = status
                Array.from(functionList).forEach(item => {
                    if (item.classList.contains('active')) {
                        item.classList.remove('active')
                    }
                    if (item.dataset.value === 'update') {
                        item.classList.add('active')
                    }
                })

            })

            btnDelete.addEventListener('click', () => {
                deleteUser(userID)
                resetValue()
            })
        })

    }
    function deleteUser(userID) {

        if (confirm('Bạn có muốn xóa người dùng này?')) {
            const user = User.getUserID(parseInt(userID))
            console.log(user.username)
            console.log(user.full_name)
            console.log(user.isAdmin)
            if (user.isAdmin === true) {

                alert('Không thể xóa người dùng quản trị (admin)');
                return
            } else {
                User.deleteUser(userID)
                resetValue()
                const newList = User.getUsers()
                renderUserList(newList)
            }



        }


    }
    function updateUser() {
        const userID = userIDInput.value
        const username = usernameInput.value
        const password = passwordInput.value
        const fullName = fullNameInput.value
        const email = emailInput.value
        const phone = phoneInput.value
        const address = addressInput.value
        const status = (statusInput.value === 'active') ? true : false
        User.updateUser(userID, username, password, email, phone, fullName, address, status)
        const newList = User.getUsers()

        User.loadUsers(newList)
        renderUserList(newList)
    }
    function addUser() {
        // const userID = userIDInput.value
        const validateAndDisplayError = (input, errorMessageElement, validationFunction) => {
            const validationResult = validationFunction(input);
            if (!validationResult.value) {
                validate.showErrMessage(errorMessageElement, validationResult.message);
                return false
            } else {
                validate.hideErrMessage(errorMessageElement);
                return true
            }
        };
        const isValidFullname = validateAndDisplayError(fullNameInput.value.toString(), listErrorMessage[1], validate.validateUserFullName);
        const isValidUsername = validateAndDisplayError(usernameInput.value.toString(), listErrorMessage[2], validate.validateUserUsername);
        const isValidPassword = validateAndDisplayError(passwordInput.value.toString(), listErrorMessage[3], validate.validateUserPassword);
        const isValidEmail = validateAndDisplayError(emailInput.value.toString(), listErrorMessage[4], validate.validateUserEmail);
        const isValidPhone = validateAndDisplayError(phoneInput.value.toString(), listErrorMessage[5], validate.validateUserPhone);
        if (isValidFullname && isValidUsername && isValidPassword && isValidEmail && isValidPhone && isValidPassword) {
            const username = usernameInput.value
            const password = passwordInput.value
            const fullName = fullNameInput.value
            const email = emailInput.value
            const phone = phoneInput.value
            const address = addressInput.value
            const permission = (permissionInput.value === 'admin') ? true : false
            const status = (statusInput.value === 'active') ? true : false
            User.addUser(username, password, email, phone, fullName, address, permission, status)
            const newList = User.getUsers()
            User.loadUsers(newList)
            renderUserList(newList)
        }
        return;


    }
    btnSave.addEventListener('click', (e) => {
        
        e.preventDefault()
        Array.from(functionList).forEach(item => {
            if (item.classList.contains('active') && item.dataset.value === 'update') {
                updateUser()
                resetValue()

            } else if (item.classList.contains('active') && item.dataset.value === 'add') {
                addUser()
                // resetValue()
            }
        })

    })
    btnCancel.addEventListener('click', (e) => {
        e.preventDefault();
        resetValue();
    })

    function resetValue() {
        functionList.forEach(item => {
            if (item.classList.contains('active')) {
                item.classList.remove('active')
            }
            if (item.dataset.value === 'add') {
                item.classList.add('active')
            }

        })
        userIDInput.value = ''
        usernameInput.value = ''
        passwordInput.value = ''
        fullNameInput.value = ''
        emailInput.value = ''
        phoneInput.value = ''
        addressInput.value = ''
        statusInput.value = ""
        permissionInput.value = ""
    }
}

function initDashboardPage() {
    const boxItem = $$('.box-analysis__item')
    const filterSelect = document.getElementById('filter__select');
    const filterButton = $('.filter__button')
    const defaultMonth = 11
    loadBoxAnalysis()
    loadOptionMonth()
    filterMonth()
    function loadBoxAnalysis(month = 11) {
        boxItem.forEach(item => {
            if (item.dataset.value === 'total-customer') {
                const a = Invoice.getTotalCustomerByMonth(month)
                item.querySelector('.box-analysis__number').innerText = a
            }
            if (item.dataset.value === 'total-price') {
                const a = Invoice.calculateRevenueByMonth(month)
                item.querySelector('.box-analysis__number').innerText = a
            }
            if (item.dataset.value === 'total-invoice') {
                const a = Invoice.getTotalInvoiceByMonth(month)
                item.querySelector('.box-analysis__number').innerText = a

            }
            if (item.dataset.value === 'total-product') {
                const a = Invoice.getTotalSoldProductsInMonth(month)
                item.querySelector('.box-analysis__number').innerText = a
            }
        })

    }
    function loadOptionMonth() {
        filterSelect.innerHTML = ''
        for (let i = 1; i <= 12; i++) {
            // Tạo một option
            const option = document.createElement('option');

            // Đặt giá trị và văn bản cho option
            option.value = i.toString(); // Giá trị từ 1 đến 12
            option.textContent = `Tháng ${i}`;
            if (i === defaultMonth) {
                option.selected = true;
            }
            // Thêm option vào thẻ select
            filterSelect.appendChild(option);
        }

    }

    function filterMonth() {
        filterButton.addEventListener('click', () => {
            loadBoxAnalysis(parseInt(filterSelect.value));
            renderTable(parseInt(filterSelect.value));
        })
    }

    function renderTable(month = defaultMonth) {
        const table = $$('.table__container')
        table.forEach(tb => {

            if (parseInt(tb.dataset.value) === 1) {
                const tableBody = tb.querySelector('.analysis-table__list')
                tableBody.innerHTML = ''
                renderTable1(tableBody)
            }
            if (parseInt(tb.dataset.value) === 2) {
                const tableBody = tb.querySelector('.analysis-table__list')
                tableBody.innerHTML = ''
                renderTable2(tableBody)
            }
        })
        function renderTable1(tableBody) {
            brandValues.forEach(item => {
                // Tạo một dòng mới
                const row = document.createElement('tr');
                row.classList.add('analysis-table__row');

                // Tạo và thêm các ô (td) cho dòng
                const brandCell = document.createElement('td');
                brandCell.textContent = item;

                const quantityCell = document.createElement('td');

                quantityCell.textContent = Invoice.getTotalSoldProductsInMonthByBrand(item.toLowerCase(), month)

                row.appendChild(brandCell);
                row.appendChild(quantityCell);

                // Thêm dòng vào tbody
                tableBody.appendChild(row);
            });
        }

        function renderTable2(tableBody) {
            brandValues.forEach(item => {
                // Tạo một dòng mới
                const row = document.createElement('tr');
                row.classList.add('analysis-table__row');

                // Tạo và thêm các ô (td) cho dòng
                const brandCell = document.createElement('td');
                brandCell.textContent = item;

                const quantityCell = document.createElement('td');

                quantityCell.textContent = Invoice.calculateRevenueByCategoryAndMonth(item.toLowerCase(), month)
                row.appendChild(brandCell);
                row.appendChild(quantityCell);

                // Thêm dòng vào tbody
                tableBody.appendChild(row);
            });
        }

    }
    renderTable()
}


// PROMOTION

async function initPromotionPage() {
    
   
    try {
        const response = await fetch("http://localhost:8080/phonestore/get-promotion");
        if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu khuyến mãi");
        
        const data = await response.json();
        const promotions = data.data;
        console.log('promotions: ', promotions);
        
        let html = '';
        promotions.forEach((promo) => {
            html += `
            <tr class="product-table__row" data-value="${promo.maKM}">
                <td>${promo.maKM}</td>
                <td>${promo.moTa}</td>
                <td>${promo.dieuKien}</td>
                <td>${promo.mucGiam}</td>
                <td>${promo.trangThai}</td>
                <td>
                    <button id="btn-edit" onclick="editBtn('${promo.maKM}')"  class="product-table__update-btn product-table-btn">Sửa</button>              
                </td>
            </tr>
            `;
        });

        document.querySelector('.product-table__list').innerHTML = html;

    } catch (error) {
        console.error("Lỗi khi gọi API khuyến mãi:", error);
    }
    const btnUpdate = $('#btn-save')
    const btnAdd = $('#btn-add')
    btnUpdate.addEventListener('click', async (e) => {
        // Lấy giá trị từ các trường nhập liệu
        let maKmEl = document.getElementById("maKhuyenMai").value;
        let moTaEl = document.getElementById("moTa").value;
        let dieuKienEl = document.getElementById("dieuKien").value;
        let mucGiamEl = document.getElementById("mucGiam").value;
        let trangThaiEl = document.getElementById("trangThai").value;
    
        // Kiểm tra dữ liệu trước khi gửi đi
        if (!maKmEl || !moTaEl || !dieuKienEl || !mucGiamEl || !trangThaiEl) {
            alert("Vui lòng điền đầy đủ các thông tin.");
            return;
        }
    
        // Tạo đối tượng dữ liệu
        const data = {
            id: maKmEl,
            moTa: moTaEl,
            dieuKien: dieuKienEl,
            mucGiam: mucGiamEl,
            trangThai: trangThaiEl
        };
    
        console.log('data: ', data);
    
        // Gọi API để cập nhật khuyến mãi
        try {
            const response = await fetch('http://localhost:8080/phonestore/update-promotion', {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // Chuyển đối tượng data thành chuỗi JSON
            });
    
            if (!response.ok) {
                throw new Error('Có lỗi xảy ra khi cập nhật khuyến mãi');
            }
    
            // Xử lý phản hồi từ API (nếu cần)
            const result = await response.json();
            console.log('Cập nhật thành công:', result);
    
            // Thông báo cập nhật thành công
            alert('Cập nhật khuyến mãi thành công!');
    
            // Reload lại trang
            window.location.reload();
    
        } catch (error) {
            console.error('Cập nhật thất bại:', error);
            alert('Có lỗi xảy ra khi cập nhật khuyến mãi!');
        }
    });
    
       btnAdd.addEventListener('click', async (e) => {
        // Lấy giá trị từ các trường nhập liệu
        let maKmEl = document.getElementById("maKhuyenMai").value;
        let moTaEl = document.getElementById("moTa").value;
        let dieuKienEl = document.getElementById("dieuKien").value;
        let mucGiamEl = document.getElementById("mucGiam").value;
        let trangThaiEl = document.getElementById("trangThai").value;
    
        // Kiểm tra dữ liệu trước khi gửi đi
        if (maKmEl != "") {
            alert("Mã khuyến mãi tồn tại");
            return;
        }
        if (!moTaEl || !dieuKienEl || !mucGiamEl || !trangThaiEl) {
            alert("Vui lòng điền đầy đủ các thông tin.");
            return;
        }
    
        // Tạo đối tượng dữ liệu
        const data = {
            moTa: moTaEl,
            dieuKien: dieuKienEl,
            mucGiam: mucGiamEl,
            trangThai: trangThaiEl
        };
    
        console.log('data: ', data);
    
        // Gọi API để Thêm khuyến mãi
        try {
            const response = await fetch('http://localhost:8080/phonestore/add-khuyenmai', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (!response.ok) {
                throw new Error('Có lỗi xảy ra khi Thêm khuyến mãi');
            }
    
            // Xử lý phản hồi từ API (nếu cần)
            const result = await response.json();
            console.log('Thêm thành công:', result);
    
            // Kiểm tra nếu dữ liệu trả về đúng cấu trúc
            if (result && result.data) {
                // Thêm hàng mới vào bảng
                const table = document.getElementById('product-table'); // Lấy bảng bằng ID
                const newRow = table.insertRow(); // Thêm một hàng mới vào cuối bảng
    
                // Thêm các ô (td) vào hàng mới
                newRow.innerHTML = `
                    <td>${result.data.maKM}</td>
                    <td>${result.data.moTa}</td>
                    <td>${result.data.dieuKien}</td>
                    <td>${result.data.mucGiam}</td>
                    <td>${result.data.trangThai}</td>
                `;
            }
    
            // Thông báo thành công
            alert('Thêm khuyến mãi thành công!');
    
        } catch (error) {
            console.error('Có lỗi xảy ra:', error);
            alert('Có lỗi xảy ra khi thêm khuyến mãi!');
        }
    });
    

    
   

       



}

const editBtn = async (promotionID) => {
    // Lấy dòng tương ứng với promotionID
    let row = document.querySelector(`tr[data-value='${promotionID}']`);

    // Lấy các giá trị từ các ô trong dòng
    let maKM = row.querySelector('td:nth-child(1)').textContent;  
    let moTa = row.querySelector('td:nth-child(2)').textContent;  
    let dieuKien = row.querySelector('td:nth-child(3)').textContent;  
    let mucGiam = row.querySelector('td:nth-child(4)').textContent;  
    let trangThai = row.querySelector('td:nth-child(5)').textContent;  

    // Điền các giá trị vào các ô nhập liệu
    document.getElementById("maKhuyenMai").value = maKM;
    document.getElementById("moTa").value = moTa;
    document.getElementById("dieuKien").value = dieuKien;
    document.getElementById("mucGiam").value = mucGiam;
    document.getElementById("trangThai").value = trangThai;

    // Chuyển trạng thái active sang "Chỉnh sửa"
    // Lấy tất cả các phần tử <li> có lớp "function__item"
    let items = document.querySelectorAll('.function__item');
    
    // Xóa lớp active khỏi tất cả các phần tử
    items.forEach(item => {
        item.classList.remove('active');
    });

    // Thêm lớp active vào phần tử "Chỉnh sửa"
    let updateItem = document.querySelector('li[data-value="update"]');
    if (updateItem) {
        updateItem.classList.add('active');
    }
};
const huyPromotion = () => {
    document.getElementById("maKhuyenMai").value = "";
    document.getElementById("moTa").value = "";
    document.getElementById("dieuKien").value = "";
    document.getElementById("mucGiam").value = "";
    document.getElementById("trangThai").value = "";


    
    // Chuyển trạng thái active sang "Chỉnh sửa"
    // Lấy tất cả các phần tử <li> có lớp "function__item"
    let items = document.querySelectorAll('.function__item');
    
    // Xóa lớp active khỏi tất cả các phần tử
    items.forEach(item => {
        item.classList.remove('active');
    });

    // Thêm lớp active vào phần tử "Chỉnh sửa"
    let updateItem = document.querySelector('li[data-value="add"]');
    if (updateItem) {
        updateItem.classList.add('active');
    }

}

//  phieuBaoHanh

async function initBaoHanhPage() {
    try {
        const response = await fetch("http://localhost:8080/phonestore/get-phieubaohanh");
        if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu khuyến mãi");
        
        const data = await response.json();
        const res = data.data;
        console.log('res: ', res);
        
        let html = '';
        res.forEach((item) => {
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
                    <button  onclick="deleteBaoHanh('${item.maPBH}')" class="product-table__delete-btn product-table-btn">Xóa</button>             
                </td>
            </tr>
            `;
        });

        document.querySelector('.product-table__list').innerHTML = html;





    const btnUpdate = $('#btn-save')
    const btnAdd = $('#btn-add')
    btnUpdate.addEventListener('click', async (e) => {
        // Lấy giá trị từ các trường nhập liệu
        let maPBHEl = document.getElementById("maBaoHanh").value;
        let thoiGianTaoEl = document.getElementById("thoiGian").value;
        let tongTienEl = document.getElementById("tongTien").value;
        let MaNVEl = document.getElementById("maNv").value;
        let soSeriEl = document.getElementById("soSeri").value;
        let trangThaiEl = document.getElementById("trangThai").value;
        let noiDungEl = document.getElementById("noiDung").value;
    
        // Kiểm tra dữ liệu trước khi gửi đi
        if (!maPBHEl || !thoiGianTaoEl || !tongTienEl || !MaNVEl || !soSeriEl || !trangThaiEl || !noiDungEl) {
            alert("Vui lòng điền đầy đủ các thông tin.");
            return;
        }
    
        // Tạo đối tượng dữ liệu
        const data = {
            maPBH: maPBHEl,
            thoiGianTao: thoiGianTaoEl,
            tongTien: tongTienEl,
            trangThai: trangThaiEl,
            maNV: MaNVEl,
            soSeri: soSeriEl,
            noiDung: noiDungEl
        };
    
        console.log('data: ', data);
    
        try {
            const response = await fetch('http://localhost:8080/phonestore/update-baohanh', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (!response.ok) {
                throw new Error('Có lỗi xảy ra khi cập nhật khuyến mãi');
            }
    
            const result = await response.json();
            console.log('Cập nhật thành công:', result);
    
            // Load lại trang sau khi cập nhật thành công
            window.location.reload();
    
            alert('Cập nhật khuyến mãi thành công!');
        } catch (error) {
            console.log('Lỗi khi cập nhật khuyến mãi:', error);
            alert('Có lỗi xảy ra khi cập nhật khuyến mãi!');
        }
    });
    


       btnAdd.addEventListener('click', async (e) => {
        // Lấy giá trị từ các trường nhập liệu
        let thoiGianTaoEl = document.getElementById("thoiGian").value;
        let tongTienEl = document.getElementById("tongTien").value;
        let MaNVEl = document.getElementById("maNv").value;
        let soSeriEl = document.getElementById("soSeri").value;
        let trangThaiEl = document.getElementById("trangThai").value;
        let noiDungEl = document.getElementById("noiDung").value;
    
        // Kiểm tra dữ liệu trước khi gửi đi
        if (!thoiGianTaoEl || !tongTienEl || !MaNVEl || !soSeriEl || !trangThaiEl || !noiDungEl) {
            alert("Vui lòng điền đầy đủ các thông tin.");
            return;
        }
    
        // Tạo đối tượng dữ liệu
        const data = {
            thoiGianTao: thoiGianTaoEl,
            tongTien: tongTienEl,
            trangThai: trangThaiEl,
            maNV: MaNVEl,
            soSeri: soSeriEl,
            noiDung: noiDungEl
        };
    
        console.log('data: ', data);
    
        try {
            const response = await fetch('http://localhost:8080/phonestore/add-baohanh', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (!response.ok) {
                throw new Error('Có lỗi xảy ra khi thêm khuyến mãi');
            }
    
            const result = await response.json();
            console.log('Thêm thành công:', result);
            alert('Thêm khuyến mãi thành công!');
    
            // Cập nhật bảng bằng cách thêm một hàng mới
            const table = document.getElementById('product-table'); // Lấy bảng bằng ID
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
                <button onclick="editBaoHanh('${result.data.maPBH}')"  class="product-table__update-btn product-table-btn">Sửa</button> 
                <button  onclick="deleteBaoHanh('${result.data.maPBH}')" class="product-table__delete-btn product-table-btn">Xóa</button>             
            </td>
            `;
    
        } catch (error) {
            console.error('Lỗi khi thêm khuyến mãi:', error);
            alert('Có lỗi xảy ra khi thêm khuyến mãi!');
        }
    });
    
      
} catch (error) {
        console.error("Lỗi khi gọi API bảo hành:", error);
    }
    
}

const editBaoHanh = async (idBaoHanh) => {
    // Lấy dòng tương ứng với idBaoHanh
    let row = document.querySelector(`tr[data-value='${idBaoHanh}']`);

    // Lấy các giá trị từ các ô trong dòng
    let maPBH = row.querySelector('td:nth-child(1)').textContent;  
    let thoiGianTao = row.querySelector('td:nth-child(2)').textContent;  
    let tongTien = row.querySelector('td:nth-child(3)').textContent;  
    let trangThai = row.querySelector('td:nth-child(4)').textContent;  
    let maNV = row.querySelector('td:nth-child(5)').textContent;  
    let soSeri = row.querySelector('td:nth-child(6)').textContent;
    let noiDung = row.querySelector('td:nth-child(7)').textContent;

    // Điền các giá trị vào các ô nhập liệu
    document.getElementById("maBaoHanh").value = maPBH;
    document.getElementById("thoiGian").value = thoiGianTao;
    document.getElementById("tongTien").value = tongTien;
    document.getElementById("maNv").value = maNV;
    document.getElementById("soSeri").value = soSeri;
    document.getElementById("trangThai").value = trangThai;
    document.getElementById("noiDung").value = noiDung;

    // Chuyển trạng thái active sang "Chỉnh sửa"
    // Lấy tất cả các phần tử <li> có lớp "function__item"
    let items = document.querySelectorAll('.function__item');
    
    // Xóa lớp active khỏi tất cả các phần tử
    items.forEach(item => {
        item.classList.remove('active');
    });

    // Thêm lớp active vào phần tử "Chỉnh sửa"
    let updateItem = document.querySelector('li[data-value="update"]');
    if (updateItem) {
        updateItem.classList.add('active');
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
    let items = document.querySelectorAll('.function__item');
    
    // Xóa lớp active khỏi tất cả các phần tử
    items.forEach(item => {
        item.classList.remove('active');
    });

    // Thêm lớp active vào phần tử "Chỉnh sửa"
    let updateItem = document.querySelector('li[data-value="add"]');
    if (updateItem) {
        updateItem.classList.add('active');
    }

}
const deleteBaoHanh = async (idBaoHanh) => {
    let row = document.querySelector(`tr[data-value='${idBaoHanh}']`);
    let maPBH = row.querySelector('td:nth-child(1)').textContent;  
    console.log('maPBH: ', maPBH);

    const data = {
        idBaoHanh: maPBH, // Gửi idPhiếuBảoHành thay vì maPBH
    };

    try {
        const response = await fetch('http://localhost:8080/phonestore/delete-baohanh', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Có lỗi xảy ra khi xoá bảo hành');
        }

        const result = await response.json();
        console.log('Xoá thành công:', result);

        // Thông báo thành công
        alert('Xoá bảo hành thành công!');
        row.remove(); // Xóa dòng khỏi bảng sau khi xóa thành công
    } catch (error) {
        console.error('Có lỗi khi xoá bảo hành:', error);
        alert('Có lỗi xảy ra khi xoá bảo hành!');
    }
};






// PHIEU NHAP


async function initPhieuNhapPage() {
    try {
        const response = await fetch("http://localhost:8080/phonestore/get-phieunhap");
        if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu khuyến mãi");
        
        const data = await response.json();
        const res = data.data;
        console.log('res: ', res);
        
        let html = '';
        res.forEach((item) => {
            html += `
            <tr class="product-table__row" data-value="${item.maPN}">
                <td>${item.maPN}</td>
                <td>${item.ngayTao}</td>
                <td>${item.tongTien}</td>
                <td>${item.trangThai}</td>
                <td>${item.maNV}</td>
                <td>${item.maNCC}</td>
                <td>
                    <button onclick="editPhieuNhap('${item.maPN}')"  class="product-table__update-btn product-table-btn">Sửa</button> 
                    <button onclick="xenChiTietPhieuNhap('${item.maPN}')"  class="product-table__update-btn product-table-btn">Chi tiết</button> 
                                
                </td>
            </tr>
            `;
        });

        document.querySelector('.product-table__list').innerHTML = html;





    const btnUpdate = $('#btn-save')
    const btnAdd = $('#btn-add')
    btnUpdate.addEventListener('click', async (e) => {
        // Lấy giá trị từ các trường nhập liệu
        let maPnEl =    document.getElementById("maPhieuNhap").value ;
        let thoiGianTaoEl = document.getElementById("thoiGianTao").value;
        let tongTienEl = document.getElementById("tongTien").value;
        let MaNVEl = document.getElementById("maNv").value;
        let trangThaiEl = document.getElementById("trangThai").value;
        let maNccEl = document.getElementById("maNCC").value; 
    
   
         // Kiểm tra dữ liệu trước khi gửi đi
         if (!thoiGianTaoEl || !tongTienEl || !MaNVEl  || !trangThaiEl || !maNccEl || !maPnEl) {
            alert("Vui lòng điền đầy đủ các thông tin.");
            return;
        }
    
       // Tạo đối tượng dữ liệu
       const data = {
        maPN : maPnEl,
        ngayTao: thoiGianTaoEl,
        tongTien: tongTienEl,
        trangThai: trangThaiEl,
        maNV: MaNVEl,
        maNCC:maNccEl
    };
    
        console.log('data: ', data);
    
        try {
            const response = await fetch('http://localhost:8080/phonestore/update-phieunhap', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (!response.ok) {
                throw new Error('Có lỗi xảy ra khi cập nhật phiếu nhập');
            }
    
            const result = await response.json();
            console.log('Cập nhật thành công:', result);
    
            // Load lại trang sau khi cập nhật thành công
            window.location.reload();
    
            alert('Cập nhật phiếu nhập thành công!');
        } catch (error) {
            console.log('Lỗi khi cập nhật phiếu nhập:', error);
            alert('Có lỗi xảy ra khi cập nhật phiếu nhập!');
        }
    });
    


       btnAdd.addEventListener('click', async (e) => {
        // Lấy giá trị từ các trường nhập liệu
        let thoiGianTaoEl = document.getElementById("thoiGianTao").value;
        let tongTienEl = document.getElementById("tongTien").value;
        let MaNVEl = document.getElementById("maNv").value;
        let trangThaiEl = document.getElementById("trangThai").value;
        let maNccEl = document.getElementById("maNCC").value; 
    
        // Kiểm tra dữ liệu trước khi gửi đi
        if (!thoiGianTaoEl || !tongTienEl || !MaNVEl  || !trangThaiEl || !maNccEl) {
            alert("Vui lòng điền đầy đủ các thông tin.");
            return;
        }
    
        // Tạo đối tượng dữ liệu
        const data = {
            ngayTao: thoiGianTaoEl,
            tongTien: tongTienEl,
            trangThai: trangThaiEl,
            maNV: MaNVEl,
            maNCC:maNccEl
        };
    
        console.log('data: ', data);
    
        try {
            const response = await fetch('http://localhost:8080/phonestore/add-phieunhap', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (!response.ok) {
                throw new Error('Có lỗi xảy ra khi thêm phiếu nhập');
            }
    
            const result = await response.json();
            console.log('Thêm thành công:', result);
            alert('Thêm phiếu nhập thành công!');
    
            // Cập nhật bảng bằng cách thêm một hàng mới
            const table = document.getElementById('product-table'); // Lấy bảng bằng ID
            const newRow = table.insertRow(); // Thêm một hàng mới vào cuối bảng
    
            // Thêm các ô (td) vào hàng mới
            newRow.innerHTML = `
                <td>${result.data.maPN}</td>
                <td>${result.data.ngayTao}</td>
                <td>${result.data.tongTien}</td>
                <td>${result.data.trangThai}</td>
                <td>${result.data.maNV}</td>
                <td>${result.data.maNCC}</td>
                <td>
                <button onclick="editPhieuNhap('${result.data.maPN}')"  class="product-table__update-btn product-table-btn">Sửa</button> 
                            
            </td>
            `;
    
        } catch (error) {
            console.error('Lỗi khi thêm phiếu nhập:', error);
            alert('Có lỗi xảy ra khi thêm phiếu nhập!');
        }
    });
    
      
} catch (error) {
        console.error("Lỗi khi gọi API phiếu nhập:", error);
    }
    
}

const editPhieuNhap = async (idPhieuNhap) => {
    // Lấy dòng tương ứng với idBaoHanh
    let row = document.querySelector(`tr[data-value='${idPhieuNhap}']`);

    // Lấy các giá trị từ các ô trong dòng
    let maPN = row.querySelector('td:nth-child(1)').textContent;  
    let thoiGianTao = row.querySelector('td:nth-child(2)').textContent;  
    let tongTien = row.querySelector('td:nth-child(3)').textContent;  
    let trangThai = row.querySelector('td:nth-child(4)').textContent;  
    let maNV = row.querySelector('td:nth-child(5)').textContent;  
    let nhaCC = row.querySelector('td:nth-child(6)').textContent;
  

    // Điền các giá trị vào các ô nhập liệu
    document.getElementById("maPhieuNhap").value = maPN;
    document.getElementById("thoiGianTao").value = thoiGianTao;
    document.getElementById("tongTien").value = tongTien;
    document.getElementById("maNv").value = maNV;
    document.getElementById("trangThai").value = trangThai;
    document.getElementById("maNCC").value = nhaCC;

    // Chuyển trạng thái active sang "Chỉnh sửa"
    // Lấy tất cả các phần tử <li> có lớp "function__item"
    let items = document.querySelectorAll('.function__item');
    
    // Xóa lớp active khỏi tất cả các phần tử
    items.forEach(item => {
        item.classList.remove('active');
    });

    // Thêm lớp active vào phần tử "Chỉnh sửa"
    let updateItem = document.querySelector('li[data-value="update"]');
    if (updateItem) {
        updateItem.classList.add('active');
    }
};
const huyPhieuNhap = () => { 
    document.getElementById("maPhieuNhap").value = "";
    document.getElementById("thoiGianTao").value = "";
    document.getElementById("tongTien").value = "";
    document.getElementById("maNv").value = "";
    document.getElementById("trangThai").value = "";
    document.getElementById("maNCC").value = "";


    
    // Chuyển trạng thái active sang "Chỉnh sửa"
    // Lấy tất cả các phần tử <li> có lớp "function__item"
    let items = document.querySelectorAll('.function__item');
    
    // Xóa lớp active khỏi tất cả các phần tử
    items.forEach(item => {
        item.classList.remove('active');
    });

    // Thêm lớp active vào phần tử "Chỉnh sửa"
    let updateItem = document.querySelector('li[data-value="add"]');
    if (updateItem) {
        updateItem.classList.add('active');
    }

}
const xenChiTietPhieuNhap = (idPhieuNhap) => {
    console.log('idPhieuNhap: ', idPhieuNhap);
    

}







// const deletePhieuNhap = async (idPhieuNhap) => {
//     let row = document.querySelector(`tr[data-value='${idPhieuNhap}']`);
//     let maPN = row.querySelector('td:nth-child(1)').textContent;  
//     console.log('maPBH: ', maPN);

//     const data = {
//         maPN: maPN, // Gửi idPhiếuBảoHành thay vì maPBH
//     };

//     try {
//         const response = await fetch('http://localhost:8080/phonestore/delete-phieunhap', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         });

//         if (!response.ok) {
//             throw new Error('Có lỗi xảy ra khi xoá bảo hành');
//         }

//         const result = await response.json();
//         console.log('Xoá thành công:', result);

//         // Thông báo thành công
//         alert('Xoá bảo hành thành công!');
//         row.remove(); // Xóa dòng khỏi bảng sau khi xóa thành công
//     } catch (error) {
//         console.error('Có lỗi khi xoá bảo hành:', error);
//         alert('Có lỗi xảy ra khi xoá bảo hành!');
//     }
// };



















// Hàm chuyển đổi giá tiền sang định dạng hiển thị (ví dụ: VND)
function convertMoney(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

