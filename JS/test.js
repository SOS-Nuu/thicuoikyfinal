//check login localstorage
//login
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
let currentEmail = localStorage.getItem('userEmail') || '';

// content is not loggin
const loginContent = `
        <button class="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                    data-bs-toggle="modal" data-bs-target="#searchModal">
                <i class="fas fa-search text-primary"></i>
        </button>
      <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#login" id="loginBtn">
          Đăng nhập
      </button>
  `;

// Nội dung khi đã đăng nhập
const loggedInContent = `
        <button class="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                        data-bs-toggle="modal" data-bs-target="#searchModal">
                        <i class="fas fa-search text-primary"></i>
        </button>
         <a  href="cart.history.html" class="position-relative me-4 my-auto">
                      <i class="fa fa-shopping-bag fa-2x"></i>
                      <span id="cartCount"
                          class="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                          style="top: -5px; left: 15px; height: 20px; min-width: 20px;">
                          
                      </span>
        </a>
    <div class="dropdown my-auto">
    <a href="#" class="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="fas fa-user fa-2x"></i>
    </a>

    <ul class="dropdown-menu dropdown-menu-end p-4" aria-labelledby="dropdownMenuLink">
        <li class="d-flex align-items-center flex-column" style="min-width: 300px;">
            <img id="userAvatar" style="width: 150px; height: 150px; border-radius: 50%; overflow: hidden;" src="../../../../resources/images/president/anonymousavatar.jpg" alt="User Avatar">
            <div id="userName" class="text-center my-3">User</div>
        </li>

        <li><a class="dropdown-item" href="#">Quản lý tài khoản</a></li>
        <li><a class="dropdown-item" href="order.history.html">Lịch sử mua hàng</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li>
            <form method="post" action="">
                <input type="hidden" name="_method" value="post">
                <button type="button" class="btn btn-danger" onclick="logout()">Đăng xuất</button>
            </form>
        </li>
    </ul>
    </div>
  `;

//func render avatar by email
function getAvatarSrc(email) {
    return email === 'nu1412sos@gmail.com' ? '../../../../resources/images/president/levannguyen.jpg' : '../../../../resources/images/president/anonymousavatar.jpg';
}

//func get email show name
function getDisplayName(email) {
    return email === 'nu1412sos@gmail.com' ? 'Lê Văn Nguyên' : email.split('@')[0];
    //slit chia chuoi
}

function renderContent() {
    const authSection = document.getElementById('authSection');
    if (authSection) {
        authSection.innerHTML = isLoggedIn ? loggedInContent : loginContent;

        if (isLoggedIn) {
            const userAvatar = document.getElementById('userAvatar');
            const userName = document.getElementById('userName');
            if (userAvatar) { userAvatar.src = getAvatarSrc(currentEmail) };
            if (userName) userName.textContent = getDisplayName(currentEmail);
        }
    }
}

// process event submit form login
//submit form login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('userEmail').value;
        const password = document.getElementById('password').value;

        if (email && password) {
            isLoggedIn = true;
            currentEmail = email;
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);

            renderContent();
            const loginModal = document.getElementById('login');
            if (loginModal) {
                bootstrap.Modal.getInstance(loginModal).hide();
            }
        } else {
            alert('Vui lòng nhập email và mật khẩu!');
        }
    });
}

//func logout
function logout() {
    isLoggedIn = false;
    currentEmail = '';
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('userEmail');
    renderContent();
}
//run func reload
renderContent();



document.addEventListener("DOMContentLoaded", function () {
    let dem = 0;
    // Tự động focus vào input txtTen khi trang được tải
    document.getElementById("txtTen").focus();
  
    // Hàm kiểm tra họ tên
    const validateTen = () => {
      let ten = document.getElementById("txtTen").value;
      const kt = /^([A-Z][a-z]*\s)*([A-Z][a-z]*)$/;
      //\s ky tu khoang trang
      let erTen = document.getElementById("erTen");
  
      if (ten === "") {
        erTen.innerHTML = "không được để rỗng";
        erTen.classList.add("mauDo");
        return false;
      } else if (!kt.test(ten)) {
        erTen.innerHTML = "sai cú pháp (mỗi từ phải bắt đầu bằng chữ cái in hoa)";
        erTen.classList.add("mauDo");
        return false;
      } else {
        erTen.innerHTML = "*";
        erTen.classList.remove("mauDo");
        return true;
      }
    };
  
    // Kiểm tra họ tên khi rời khỏi input
    document.getElementById("txtTen").addEventListener("blur", validateTen);
  
    // Hàm kiểm tra số điện thoại
    function validateSDT() {
      let sdt = document.getElementById("txtSDT").value;
      let kt = /^0[3,7,9][0-9]{8}$/;
      let erSDT = document.getElementById("erSDT");
  
      if (sdt === "") {
        erSDT.innerHTML = "không được để rỗng";
        erSDT.classList.add("mauDo");
        return false;
      } else if (!kt.test(sdt)) {
        erSDT.innerHTML = "sai cú pháp (0XXX-YYYYYY, X và Y là số)";
        erSDT.classList.add("mauDo");
        return false;
      } else {
        erSDT.innerHTML = "*";
        erSDT.classList.remove("mauDo");
        return true;
      }
    }
  
    // Kiểm tra số điện thoại khi rời khỏi input
    document.getElementById("txtSDT").addEventListener("blur", validateSDT);
  
    // Hàm kiểm tra ngày sinh
    function validateNgaySinh() {
      let ngay = document.getElementById("Ngay").value;
      let erNgay = document.getElementById("erNgay");
  
      if (!ngay) {
        erNgay.innerHTML = "ngày không hợp lệ";
        erNgay.classList.add("mauDo");
        return false;
      }
  
      // Tính tuổi dựa trên ngày sinh
      let birthDate = new Date(ngay);
      console.log(birthDate);
      console.log(ngay);
      let today = new Date("2025-05-12"); // Ngày hiện tại theo đề bài
      let age = today.getFullYear() - birthDate.getFullYear();
  
      let monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
  
      if (age <= 15 || age >= 18) {
        erNgay.innerHTML = "tuổi phải lớn hơn 15 và dưới 18";
        erNgay.classList.add("mauDo");
        return false;
      } else {
        erNgay.innerHTML = "*";
        erNgay.classList.remove("mauDo");
        return true;
      }
    }
  
    // Kiểm tra ngày sinh khi rời khỏi input
    document.getElementById("Ngay").addEventListener("blur", validateNgaySinh);
  
    // Hàm kiểm tra địa chỉ
    function validateDiaChi() {
      let dc = document.getElementById("txtDC").value;
      let erDC = document.getElementById("erDC");
  
      if (dc === "") {
        erDC.innerHTML = "không được để rỗng";
        erDC.classList.add("mauDo");
        return false;
      } else {
        erDC.innerHTML = "*";
        erDC.classList.remove("mauDo");
        return true;
      }
    }
  
    // Kiểm tra địa chỉ khi rời khỏi input
    document.getElementById("txtDC").addEventListener("blur", validateDiaChi);
  
    // Hàm tính học phí dựa trên khóa học
    function ktKhoa(khoa) {
      if (khoa === "2 tuần") {
        return 5000000;
      }
      if (khoa === "4 tuần") {
        return 8000000;
      }
      if (khoa === "6 tuần") {
        return 9000000;
      }
    }
  
    // Xử lý sự kiện click nút "Đăng ký"
    document.getElementById("btnDK").addEventListener("click", function (e) {
      e.preventDefault(); // Ngăn chặn hành vi mặc định của form
  
      // Kiểm tra tất cả các trường và xác định ô đầu tiên không hợp lệ
      let isTenValid = validateTen();
      let isSDTValid = validateSDT();
      let isNgaySinhValid = validateNgaySinh();
      let isDiaChiValid = validateDiaChi();
  
      // Tìm ô input đầu tiên không hợp lệ để focus
      if (!isTenValid) {
        document.getElementById("txtTen").focus();
      } else if (!isSDTValid) {
        document.getElementById("txtSDT").focus();
      } else if (!isNgaySinhValid) {
        document.getElementById("Ngay").focus();
      } else if (!isDiaChiValid) {
        document.getElementById("txtDC").focus();
      } else {
        // Nếu tất cả các trường hợp lệ, thêm dữ liệu vào bảng
        dem++;
        let ten = document.getElementById("txtTen").value;
        let sdt = document.getElementById("txtSDT").value;
        let ngaysinh = document.getElementById("Ngay").value;
        let diachi = document.getElementById("txtDC").value;
        let khoa = document.getElementById("slKhoa").value;
        let hphi = ktKhoa(khoa);
  
        // Thêm dữ liệu vào bảng
        let them = `<tr><td>${dem}</td><td>${ten}</td><td>Nam</td><td>${sdt}</td><td>${ngaysinh}</td><td>${diachi}</td><td>${khoa}</td><td>${hphi}</td></tr>`;
        document.getElementById("tBcontent").innerHTML += them;
  
        // Đóng modal sau khi lưu
  
        // Đóng modal bằng cách kích hoạt data-bs-dismiss
        document.getElementById("btnDK").setAttribute("data-bs-dismiss", "modal");
        document.getElementById("btnDK").click(); // Kích hoạt hành vi đóng modal
        // document.getElementById("btnDK").removeAttribute("data-bs-dismiss"); // Xóa thuộc tính sau khi đóng
  
        // Reset form sau khi lưu
        document.getElementById("txtTen").value = "";
        document.getElementById("txtSDT").value = "";
        document.getElementById("Ngay").value = "";
        document.getElementById("txtDC").value = "";
        document.getElementById("slKhoa").value = "2 tuần";
      }
    });
  });
  