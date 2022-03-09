document.getElementById("btnTinhTong").onclick = function() {
    var tenPhim = document.getElementById("txtTenPhim").value;
    var tienVeNguoiLon = Number(document.getElementById("nhapGiaVeNguoiLon").value);
    var tienVeTreEm = Number(document.getElementById("nhapGiaVeTreEm").value);

    var soVeNL = Number(document.getElementById("soVeNguoiLon").value);

    var soVeTE = Number(document.getElementById("soVeTreEm").value);  


    var tiLePhanTram = Number(document.getElementById("phanTram").value);

    var doanhThu, tongDoanhThu, tongVe ;


    tongVe = soVeNL + soVeTE;

    doanhThu = tienVeNguoiLon * soVeNL + tienVeTreEm * soVeTE;

    var tienTuThien = doanhThu * (tiLePhanTram)/100;

    tongDoanhThu = doanhThu - tienTuThien;

    
    // console.log(doanhThu);
    // console.log(tienTuThien);
    
    // console.log(tongDoanhThu);
    // console.log(tenPhim, tienVeTreEm, tienVeNguoiLon, soVeNL, soVeNL);

    // console.log("123");

    var kq = "<div class='alert alert-success'>";

    kq += "<p>Tên phim: " + tenPhim + "</p>";
    kq += "<p>Số vé đã bán: " + tongVe + "</p>";
    kq += "<p>Doanh thu: " +doanhThu+"</p>";
    kq += "<p>Trích từ thiện: " +tiLePhanTram+"%</p>";
    kq += "<p>Tổng tiền từ thiện: "+tienTuThien+"</p>"; 
    kq += "<p>Tổng thu được sau khi trừ: "+tongDoanhThu+"</p>";
    kq +="</div>";

    document.getElementById("footerLoiNhuan").innerHTML = kq;
    //Format vnd
    // var currentFormat = new Intl.NumberFormat('vn-VN');
    // var tienVnd = currentFormat.format(tongDoanhThu);
}
document.getElementById("btnTinhLuong").onclick = function() {
    var soNgayLam = Number(document.getElementById("txtSoNgayLam").value);

    var tongLuong = 100000 * soNgayLam;

    console.log(tongLuong);
    var kq ="<div>"
    kq += "<p>Tổng lương: " + tongLuong + "</p>";
    kq += "</div>";

    document.getElementById("footerTinhLuong").innerHTML = kq;
    // console.log("123");
}


document.getElementById("btnTinhTrungBinh").onclick = function() {
    var n1 = Number(document.getElementById("numbers1").value);
    var n2 = Number(document.getElementById("numbers2").value);
    var n3 = Number(document.getElementById("number3").value);
    var n4 = Number(document.getElementById("number4").value);
    var n5 = Number(document.getElementById("number5").value);
    const N = 5;
    console.log(n1);
    console.log(n2);
    console.log(n3);   
    console.log(n4);
    console.log(n5);
    var tinh = (n1+n2+n3+n4+n5)/N;
    console.log(tinh);

    var kq1 ="<div>"
    kq1 += "<p>Tổng lương: " + tinh + "</p>";
    kq1 += "</div>";

    document.getElementById("footerTB").innerHTML = kq1; 
}


document.getElementById("btnTinhKichThuoc").onclick = function() {
    var cDai = Number(document.getElementById("cd").value);
    var cRong = Number(document.getElementById("cr").value);

    var s = cDai * cRong;
    var p = (cDai + cRong) * 2;

    var kq2 ="<div>"
    kq2 += "<p>Diện tích: " + s + "</p>";
    kq2 += "<p>Chu vi: " + p + "</p>"
    kq2 += "</div>";

    document.getElementById("footerKT").innerHTML = kq1;

    // console.log("123");
}
document.getElementById("btnTinhKySo").onclick = function() {
    var n = Number(document.getElementById("so").value);

    var unit = n % 10;
    var ten = Math.floor(n % 100 / 10);

    var sum =  unit + ten;

    var kq3 = "<div>"
    kq3 += "<p> Tổng là: " + sum + "</p>";
    kq3 += "</div>";
    document.getElementById("footerTinhKySo").innerHTML = kq3;
}

document.getElementById("btnDoiTien").onclick = function() {
    var money = Number(document.getElementById("tien").value);

    var moneyVND = money * 23500;
    var currentFormat = new Intl.NumberFormat('vn-VN');
    var tienVnd = currentFormat.format(moneyVND);
    var kq4 = "<div>"
    kq4 += "<p> $ sang VNĐ = " + tienVnd + "</p>";
    kq4 += "</div>";

    document.getElementById("footerDoiTien").innerHTML = kq4;
}