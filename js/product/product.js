//value
let priceNew = 0
let priceOld = 0
let memmorySelected = ''
const user = JSON.parse(localStorage.getItem('user')); 
$(document).ready(function () {
    let posNav = $('.container__top').offset().top
    let posPhone = $('.product__intro-fixed').offset().top
    $(window).scroll(() => {
        let position = $('html, body').scrollTop();
        if (position >= posNav) {
            $('.product--detail').css({ 'padding-top': posNav + 'px' });
            $('.container__top').addClass("container__top--fixed");
        } else {
            $('.product--detail').css({ 'padding-top': 0 + 'px' });
            $('.container__top').removeClass("container__top--fixed");
        }
        if (position >= posPhone) {
            $('.product__intro-fixed').addClass('product__intro-fixed_scroll')
        }
        else {
            $('.product__intro-fixed').removeClass('product__intro-fixed_scroll')
        }
        if (position > 2500) {
            $('.product__intro-fixed').css({ 'opacity': 0, 'transition': '0.3s' })
        } else {
            $('.product__intro-fixed').css({ 'opacity': 1 })
        }

    })
});

//handle 

$(document).ready(function () {

    $.getJSON("/js/data.json").done(() => {
        renderProduct()
    })

    let url_string = window.location.href; // www.test.com?id=123
    let url = new URL(url_string);
    let paramValue = url.searchParams.get("id");
    console.log('paramValue: ', paramValue);

    // function renderProduct() {

    //     //Get dt bang voi param truyen vao
    //     let item = dataProducts.filter(x => x.id == paramValue)[0]
    //     $('.container__intro--title').text(item.title)
    //     //load 3 memory
    //     $('.container__intro--memory').html(item.memory.map((mmr, index) => {
    //         return `<button id= "mmr_${index}" class="btn-memory btn btn-default btn-sm">${mmr}</button>`
    //     }))
    //     //Gan gia tri dau tien memory
    //     $('.container__intro--memory .btn-memory:first-child').addClass('activeBtn')
    //     //get Gia dau tien
    //     $('.product__item--priceOld').text(convertMoney(item.price.low.Old))
    //     $('.product__item--priceNew').text(convertMoney(item.price.low.New))
    //     $('.product__intro--img img').attr('src', `${item.img}`)
    //     $('.product__infor--title').text(item.title)
    //     $('.product__infor--option select').html(item.memory.map((mmr, index) => { return `<option value="mmr_${index}">${mmr}</option>` }))
    //     priceNew = item.price.low.New
    //     memmorySelected = item.memory[0]
    //     handleBtnMMR(item)
    //     handleBtnMMR2(item)
    // }



    async function renderProduct() {
        try {
            // Gọi API để lấy dữ liệu sản phẩm dựa trên `paramValue`
            const response = await fetch(`http://localhost:8080/phonestore/getPhoneById?id=${paramValue}`);
            
            if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu sản phẩm");
            
            // Nhận dữ liệu sản phẩm từ API
            const data = await response.json();
            console.log("Dữ liệu trả về từ API:", data.sanPham); 
            const item = data.sanPham;
           
           

            $('.product__infor--more .list-group-item')[0].textContent = "Thương hiệu: " + item.thuongHieu;
            $('.product__infor--more .list-group-item')[1].textContent = "Camera: " + item.camTruoc + "&" + item.camSau
            $('.product__infor--more .list-group-item')[2].textContent = "Dung lượng pin: " +item.pin
            $('.product__infor--more .list-group-item')[3].textContent = "Thời gian bảo hành: " + item.thoiGianBaoHanh + " tháng" 
           
            $('.container__intro--title').text(item.tenSP);




            $('.container__intro--title').text(item.tenSP);
    
            // Hiển thị các tùy chọn bộ nhớ và gán giá trị giá cũ, giá mới cho từng bộ nhớ
            $('.container__intro--memory').html(item.phienbansps.map((mmr, index) => {
                // Lấy giá cũ và giá mới từ từng đối tượng `mmr`
                const priceOld = mmr.giaBan;
                const priceNew = mmr.giaGiam;
                
                return `<button id="mmr_${index}" class="btn-memory btn btn-default btn-sm" 
                        data-price-old="${priceOld}" 
                        data-price-new="${priceNew}"
                        data-ram="${mmr.RAM}" 
                        data-rom="${mmr.ROM}">
                       ${mmr.ROM}GB 
                        </button>`;
            }));
            
            // Gán giá trị giá cũ và giá mới của bộ nhớ đầu tiên khi trang vừa tải
            const firstMemory = item.phienbansps[0];
            $('.container__intro--memory .btn-memory:first-child').addClass('activeBtn');
            $('.product__item--priceOld').text(convertMoney(firstMemory.giaBan));
            $('.product__item--priceNew').text(convertMoney(firstMemory.giaGiam));
            $('.product__intro--img img').attr('src', `${item.hinhAnh}`);
            $('.product__infor--title').text(item.tenSP);
            
            $('.product__infor--option select').html(item.phienbansps.map((mmr, index) => { 
                return `<option value="mmr_${index}">${mmr.ROM}GB</option>`;
            }));
            
            priceNew = firstMemory.giaGiam;
            memmorySelected = firstMemory;
    
            // Hàm xử lý khi bấm nút memory
            handleBtnMMR(item);
            handleBtnMMR2(item);
    
        } catch (error) {
            console.error("Lỗi khi tải sản phẩm:", error);
        }
    }
    
    














    $('.product__infor--option--color b').click( async function () {


        $('.product__infor--option--color b').removeClass('activeColor');
        $(this).addClass('activeColor');
    
        // Lấy màu sắc từ thuộc tính data-color
        const selectedColor = $(this).data('color');
        console.log('Màu đã chọn:', selectedColor);
    });
    














    function handleBtnMMR(item) {
        $('.btn-memory').click(function (e) {
            let memmory = e.target.id
            setPrice(memmory, item)
            $('.btn-memory').removeClass('activeBtn')
            $(this).addClass('activeBtn')
        });
    }
    function handleBtnMMR2(item) {
        $('.mySelectMMR').change(function () {
            let memmory = $('.mySelectMMR').val()
            setPrice(memmory, item)
            $('.btn-memory').removeClass('activeBtn')
        });
    }
    function setPrice(MMRID, item) {
        console.log(item);
    
        // Lấy chỉ mục từ `MMRID`, giả sử MMRID có định dạng "mmr_x"
        const index = parseInt(MMRID.split('_')[1], 10);
        
        // Kiểm tra xem chỉ mục có hợp lệ và nằm trong phạm vi item.memory hay không
        if (index >= 0 && index < item.phienbansps.length) {
            const selectedMemory = item.phienbansps[index];
            memmorySelected = selectedMemory;
            priceOld = selectedMemory.giaBan;
            priceNew = selectedMemory.giaGiam;
    
            // Cập nhật giá trên giao diện
            $('.product__item--priceOld').text(convertMoney(priceOld));
            $('.product__item--priceNew').text(convertMoney(priceNew));
        } else {
            console.error("MMRID không hợp lệ hoặc ngoài phạm vi bộ nhớ.");
        }
    }
    
    
});
function getMemory() {
    return memmorySelected
}
function getPrice() {
    return priceNew
}
function convertMoney(money) {
    return money.toLocaleString('vi', { style: 'currency', currency: 'vnd' });
}




async function buyNow() {
    // Kiểm tra nếu người dùng chưa đăng nhập
    if (!user) {
        alert("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng.");
        return;
    }

    // Lấy id sản phẩm từ URL
    let url_string = window.location.href;
    let url = new URL(url_string);
    let idProduct = url.searchParams.get("id");

    try {
        // Gọi API để lấy dữ liệu sản phẩm
        const response = await fetch(`http://localhost:8080/phonestore/getPhoneById?id=${idProduct}`);
        if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu sản phẩm");

        // Nhận dữ liệu sản phẩm từ API
        const data = await response.json();
        const item = data.sanPham;

        // Kiểm tra và khởi tạo giỏ hàng từ localStorage nếu chưa tồn tại
        let carts = JSON.parse(localStorage.getItem('listCart')) || [];

        // Thêm sản phẩm vào giỏ hàng
        item.price = getPrice();
        item.memory = getMemory();
        carts.push(item);

        // Lưu lại giỏ hàng vào localStorage
        localStorage.setItem('listCart', JSON.stringify(carts));
        alert("Thêm sản phẩm vào giỏ hàng thành công!")
        window.location.href="/html/shopping__cart/shopping_cart.html"
        console.log("Sản phẩm đã thêm vào giỏ hàng:", item);
    } catch (error) {
        console.error("Lỗi khi tải sản phẩm:", error);
    }
}






async function addCart() {
    // Kiểm tra nếu người dùng chưa đăng nhập
    if (!user) {
        alert("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng.");
        return;
    }

    // Lấy id sản phẩm từ URL
    let url_string = window.location.href;
    let url = new URL(url_string);
    let idProduct = url.searchParams.get("id");

    try {
        // Gọi API để lấy dữ liệu sản phẩm
        const response = await fetch(`http://localhost:8080/phonestore/getPhoneById?id=${idProduct}`);
        if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu sản phẩm");

        // Nhận dữ liệu sản phẩm từ API
        const data = await response.json();
        const item = data.sanPham;

        // Kiểm tra và khởi tạo giỏ hàng từ localStorage nếu chưa tồn tại
        let carts = JSON.parse(localStorage.getItem('listCart')) || [];

        // Thêm sản phẩm vào giỏ hàng
        item.price = getPrice();
        item.memory = getMemory();
        carts.push(item);

        // Lưu lại giỏ hàng vào localStorage
        localStorage.setItem('listCart', JSON.stringify(carts));
        alert("Thêm sản phẩm vào giỏ hàng thành công!")
        console.log("Sản phẩm đã thêm vào giỏ hàng:", item);
    } catch (error) {
        console.error("Lỗi khi tải sản phẩm:", error);
    }
}

