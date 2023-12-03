const listFeaturesEmployee = [
    {
        title: "Đăng nhập",
        href: "#dangnhap"
    },
    {
        title: "Quên mật khẩu",
        href: "#quenmatkhau"
    },
    {
        title: "Tạo hóa đơn",
        href: "#taohoadon"
    },
    {
        title: "Cập nhật khách hàng cho hóa đơn",
        href: "#capnhatkhachhangchohoadon"
    },
    {
        title: "Thêm sản phẩm vào giỏ hàng",
        href: "#themsanphamvaogiohang"
    },
    {
        title: "Thanh toán hóa đơn",
        href: "#thanhtoanhoadon"
    },
    {
        title: "Thêm sản phẩm",
        href: "#themsanpham"
    },
    {
        title: "Cập nhật sản phẩm ",
        href: "#capnhatsanpham"
    },
    {
        title: "Tìm kiếm sản phẩm",
        href: "#timkiemsanpham"
    },
    {
        title: "Thống kê cá nhân",
        href: "#thongkecanhan"
    },
    {
        title: "Quản lý hóa đơn",
        href: "#quanlyhoadon"
    },
    {
        title: "Quản lý khách hàng",
        href: "#quanlykhachhang"
    },
    {
        title: "Tạo đơn giao hàng",
        href: "#taodongiaohang"
    },
    {
        title: "In phiếu giao hàng",
        href: "#inphieugiaohang"
    },
    {
        title: "Hủy đơn hàng",
        href: "#huydonhang"
    },
    {
        title: "Xác nhận đơn hàng giao thành công",
        href: "#dongiaohangthanhcong"
    },
    {
        title: "Lọc theo mục khuyến mãi",
        href: "#loctheomuckhuyenmai"
    },
]

const listFeaturesLeader = [
    {
        title: "Thêm nhà cung cấp",
        href: "#themnhacungcap"
    },
    {
        title: "Cập nhật nhà cung cấp ",
        href: "#capnhatnhacungcap"
    },
    {
        title: "Tìm kiếm nhà cung cấp",
        href: "#timkiemnhacungcap"
    },
    {
        title: "Thêm nhân viên",
        href: "#themnhanvien"
    },
    {
        title: "Cập nhật nhân viên",
        href: "#capnhatnhanvien"
    },
    {
        title: "Tìm kiếm nhân viên",
        href: "#timkiemnhanvien"
    },
    {
        title: "Lọc nhân viên",
        href: "#locnhanvien"
    },
    {
        title: "Tạo đơn đổi trả",
        href: "#taodondoitra"
    },
    {
        title: "Thống kê nhân viên",
        href: "#thongkenhanvien"
    },
    {
        title: "Thống kê cửa hàng",
        href: "#thongkecuahang"
    },
    {
        title: "Thống kê sản phẩm",
        href: "#thongkesanpham"
    },
    {
        title: "Tạo khuyến mãi",
        href: "#taokhuyenmai"
    },
    {
        title: "Thay đổi trạng thái CTKM",
        href: "#thaydoitrangthaiCtkm"
    },
]

const $ = (query) => {
    return document.querySelector(query);
}

const $$ = (query) => {
    return document.querySelectorAll(query);
}

const loadFeatures = (query, arrayRender) => {
    const elementFeatures = $(query);
    let string = "";
    arrayRender.forEach(element => {
        string += `
        <li class="feature__list-item">
            <a href="${element.href}">${element.title}</a>
        </li>
        `;
    });
    elementFeatures.innerHTML = string;
}

loadFeatures("#feature__epl", listFeaturesEmployee);
loadFeatures("#feature__leader", listFeaturesLeader);