document.addEventListener("DOMContentLoaded", function () {
  let dem = 0;
  // let isFileProcessed = false;
  // ktten viet hoa chu cai dau
  // const ktten = /^([A-Z][a-z]*\s)*([A-Z][a-z]*)$/;
  // \s khoảng trắng , * có thể xuất hiện nhiều lần , + xuất hiện ít nhất 1 lần

  //email bình thường
  //const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  //email iuh.edu.vn
  //const emailRegex = /^[a-zA-Z0-9._-]+@iuh\.edu\.vn$/;
  //email name_email@gmail.com
  // name_email ít nhất là 3 ký tự trong đó có kí tự chữ, ký tự số, ít nhất 1 ký tự đặc biệt
  // const emailRegex = /^[a-zA-Z0-9]*[a-zA-Z]+[a-zA-Z0-9]*[0-9]+[a-zA-Z0-9]*[!@#.$%^&*_-]+[a-zA-Z0-9]*@iuh\.edu\.vn$/;

  //+84
  //const phoneRegex = /^(0|\+84)[0-9]{9}$/;
  //pasword ít nhất 8 ký tự  , chữ đầu viết hoa , phải có số , chữ , ký tự đặc biệt
  //const passwordRegex = /^[A-Z](?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{7,}$/;

  //ma buu dien
  //const postalCodeRegex = /^\d{6}$/;

  //so nguyên dương
  //const positiveIntRegex = /^[1-9]\d*$/;
  
    //định dạng ngày tháng năm
  //const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  //ktsdt bat dau bang 03 07 09
  // let kt = /^0[3,7,9][0-9]{8}$/;


  //[^0-9] phủ định nghĩa là không phải số
  // \s dấu cách
  //+ ít nhất 1 lần
  // * có thể có hoặc nhiều lần
    // // Hàm tính học phí dựa trên khóa học
    // function ktKhoa(khoa) {
    //   if (khoa === "2 tuần") {
    //     return 5000000;
    //   }
    //   if (khoa === "4 tuần") {
    //     return 8000000;
    //   }
    //   if (khoa === "6 tuần") {
    //     return 9000000;
    //   }
  // }
  // let hphi = ktKhoa(khoa);


  // Biến kiểm soát FileReader chạy 1 lần

    document.getElementById("patientId").focus();
    //valitdate BN-12345
    const validateTen = () => {
        let maBenhNhan = document.getElementById("patientId").value;
        const rexmaBenhNhan = /^BN-[0-9]{5}$/;  //BN-YYYYY
        let errmaBenhNhan = document.getElementById("patientIdError");

        if (maBenhNhan === "") {
            errmaBenhNhan.innerHTML = "Mã bệnh nhân không được để trống"
            return false;
        } else if (!rexmaBenhNhan.test(maBenhNhan)) {
            errmaBenhNhan.innerHTML = "Mã bệnh nhân không hợp lệ, vui lòng nhập theo định dạng BN-YYYYY"
            return false;
        } else {
            errmaBenhNhan.innerHTML = ""; // Xóa thông báo lỗi nếu hợp lệ
            return true;
        }
    }
    document.getElementById("patientId").addEventListener("blur", validateTen);
    //input = oncahge nó sẽ chạy lại khi có sự thay đổi

  
  //replace so phay
  // Hàm định dạng số tiền với dấu phẩy
const formatMoney = (value) => {
  // Loại bỏ tất cả ký tự không phải số
  let number = value.replace(/\D/g, "");
  // Định dạng số với dấu phẩy mỗi 3 chữ số từ phải sang trái
  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

  
// Validate và định dạng ô nhập số tiền
    const validateMoneyInput = () => {
      let moneyInput = document.getElementById("moneyInput");
      let errMoneyInput = document.getElementById("moneyInputError");

      // Lấy giá trị hiện tại, định dạng lại và gán vào input
      let formattedValue = formatMoney(moneyInput.value);
      moneyInput.value = formattedValue;

      // Validate (ví dụ: không để trống)
      if (formattedValue === "") {
          errMoneyInput.innerHTML = "Số tiền không được để trống";
          return false;
      } else {
          errMoneyInput.innerHTML = "";
          return true;
      }
  };
    // Gắn sự kiện input để định dạng ngay khi nhập
  document.getElementById("moneyInput").addEventListener("input", validateMoneyInput);
  document.getElementById("moneyInput").addEventListener("blur", validateMoneyInput);

    
  
    // validate so kham
    const valdidatesokham = () => {
      let soKham = document.getElementById("medicalFile").value;
      const medicalFileInput = document.getElementById("medicalFile");
      let errsokham = document.getElementById("medicalFileError");
      let medicalFilePreview = document.getElementById("medicalFilePreview");
      const rexsokhambenh = /\.(jpg|png|gif)$/i;
      // i khong phân biệt hoa thường
      
     
      // console.log("sokhamName",sokhamName);

        if (soKham === "") {
            errsokham.innerHTML = "so kham khong duoc de trong"
            return false;
        } else if (!rexsokhambenh.test(soKham)) {
            errsokham.innerHTML = "so kham benh không hợp lệ jpg png "
            return false;
        } else {
          let soKham = document.getElementById("medicalFile").value;
          
          const file = medicalFileInput.files[0];
          let sokhamName = file.name; // Lưu tên file vào biến global soKhamc
            const reader = new FileReader();
            reader.onload = function (e) {
               soKhamURL = e.target.result;
               medicalFilePreview.src = e.target.result;
              // console.log("e.target.result",e.target.result);
              medicalFilePreview.style.display = "block";
          };

            reader.readAsDataURL(file);
            isFileProcessed = true;
            errsokham.innerHTML = ""; 
            return true;
        }
    }
  document.getElementById("medicalFile").addEventListener("change", valdidatesokham);
  
  //validate booking date
    // document.getElementById("bookingDate").focus();
    const validateBookingDate = () => {
      let dayBoongking = document.getElementById("bookingDate").value;
      let errBooking = document.getElementById("bookingDateError");
      const rexBooking = new Date(); 
      const bookingDate = new Date(dayBoongking);
      // console.log(rexBooking);
      // console.log(bookingDate);
      if (dayBoongking === "") {
          errBooking.innerHTML = "ngày đăng ký  không được để trống"
          return false;
      } else if (rexBooking.getTime() > bookingDate.getTime()) {
          errBooking.innerHTML = "ngay dang ky khong hop le"
          return false;
      } else {
          errBooking.innerHTML = ""; 
          return true;
      }
  }
  document.getElementById("bookingDate").addEventListener("blur", validateBookingDate);



  // validate checkbox
  // Validate loại dịch vụ (ít nhất một checkbox phải được chọn)
    const validateServices = () => {
        let services = Array.from(document.querySelectorAll('input[type="checkbox"]')); // Chuyển NodeList thành Array
        console.log("services",services);
        let checkedServices = services.filter(checkbox => checkbox.checked); // Lọc các checkbox được chọn
        console.log("checkedServices",checkedServices);
       let  valueLabel = checkedServices.map(checkbox => {
            let label = document.querySelector(`label[for="${checkbox.id}"]`);
            console.log("label",label);
            return label.textContent.trim();
        });
        console.log("valueLabel",valueLabel);
        let valueServices = checkedServices.map(checked => checked.value); // Lấy giá trị của các checkbox được chọn
        console.log(valueServices);
        let errServices = document.getElementById("servicesError");
        let total = valueServices.reduce((sum, value) => sum + (+value), 0);
        console.log(total);
        document.getElementById("totalCost").value = total;

        if (checkedServices.length === 0) {
            errServices.innerHTML = "Vui lòng chọn ít nhất một loại dịch vụ";
            return false;
        } else {
            errServices.innerHTML = "";
            totalCost.innerHTML = total
            return true;
        }
    };
  // Lấy danh sách checkbox dưới dạng Array và gắn sự kiện change
  //validate checkbox
  let checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
  //tra ve 1 nodelist[] va duoc conver sang array
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", validateServices);
    });
    let Khoa = document.getElementById("selectKhoa").value;
    console.log(Khoa);

  
  
  
    //validate selection
    const selecoption = () => {
        Khoa = document.getElementById("selectKhoa").value;
        console.log(Khoa);
            if (Khoa === "") {
                return false;
            } else{
                return true;
            }
        }
    document.getElementById("selectKhoa").addEventListener("change", selecoption);
  
  
  
  // Validate radio button
  const validateRadio = () => {
    // Lấy radio được chọn
    const checkedRadio = document.querySelectorAll('input[name="optradio"]:checked');
    //queryselector tra ve null con queryselectorAll tra ve nodelist[]
    const errRadio = document.getElementById('radioError');
  
    // Kiểm tra xem có radio nào được chọn không
    if (checkedRadio.length > 0) {
      errRadio.innerHTML = ''; // Xóa thông báo lỗi
      console.log('Selected radio value:', checkedRadio.value);
      return true;
    } else {
      errRadio.innerHTML = 'Vui lòng chọn một tùy chọn'; // Hiển thị lỗi
      return false;
    }
  };
  
  // Lấy tất cả radio buttons không bị disabled
  const radios = document.querySelectorAll('input[name="optradio"]:not(:disabled)');
  
  // Gắn sự kiện change cho từng radio
  if (radios.length > 0) {
    radios.forEach((radio) => {
      radio.addEventListener('change', validateRadio);
    });
  } else {
    console.log('Không tìm thấy radio buttons với name="optradio"');
  }
  
  
    // Xử lý sự kiện click nút "Đăng ký"
    document.getElementById("datlich").addEventListener("click", function (event) {
      event.preventDefault();
      // event.stopImmediatePropagation();
      let isValidTen = validateTen();
      let isValidsokham = valdidatesokham();
      let isValidBooking = validateBookingDate();
      let isValidService = validateServices();
      let isValidSelect = selecoption();
      let isValidRadio = validateRadio();
      let isValidateMoneyInput = validateMoneyInput();


      if (!isValidateMoneyInput) {
        document.getElementById("moneyInput").focus();
      } else if (!isValidTen) {
          document.getElementById("patientId").focus();
      } else if (!isValidsokham){
          document.getElementById("medicalFile").focus();
      } else if (!isValidBooking) {
          document.getElementById("bookingDate").focus();
      } else if (!isValidService){
          document.getElementById("service1").focus();
      } else if (!isValidSelect) {
          document.getElementById("selectKhoa").focus();
      } else if (!isValidRadio) {
          document.getElementById("radio1").focus();
      } else {
        dem++;
        
        let maBenhNhan = document.getElementById("patientId").value;
        let soKham = document.getElementById("medicalFile").value;
        let dayBoongking = document.getElementById("bookingDate").value;
        let valueLabel = document.querySelector('input[name="optradio"]:checked').value;
        let valueServices = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => {
            let label = document.querySelector(`label[for="${checkbox.id}"]`);
          return label.textContent.trim();
        });
        let total = document.getElementById("totalCost").value;
        let radios = document.querySelector('input[name="optradio"]:checked').value;
        let moneyInput = document.getElementById("moneyInput").value;
        
          // console.log("dem:", dem);
          // console.log("maBenhNhan:", maBenhNhan);
          // console.log("soKham:", soKham);
          // console.log("dayBoongking:", dayBoongking);
          // console.log("valueServices:", valueServices);
          // console.log("total:", total);
          // console.log("radios:", radios);
          let them = `<tr><td>${dem}</td><td>${maBenhNhan}</td><td><img src="${soKhamURL}" alt=""  width="150px" height="150px"></td><td>${dayBoongking}</td><td>${total}</td><td>${valueLabel}</td><td>${radios}</td></tr>`;

        //cong chuoi
          document.getElementById("bookingTable").innerHTML += them;

            // Đóng modal bằng cách kích hoạt data-bs-dismiss
            let modal = bootstrap.Modal.getInstance(document.getElementById("bookingModal"));
                  modal.hide();
          // Kích hoạt hành vi đóng modal
          // document.getElementById("btnDK").removeAttribute("data-bs-dismiss"); // Xóa thuộc tính sau khi đóng
          document.getElementById("moneyInput").value = ""; // Reset ô nhập số tiền
          document.getElementById("patientId").value = "";
          document.getElementById("medicalFile").value = "";
        document.getElementById("bookingDate").value = "";
        document.getElementById("comment").value = "";
        document.getElementById("totalCost").value = "";
        document.getElementById("medicalFilePreview").src = "";
        document.getElementById("medicalFilePreview").style.display = "none";
        document.getElementById("medicalFile").value = "";
        soKhamURL = "";
        sokhamName = "";
        
        // document.getElementById("selectKhoa").value = "";
        // Reset checkbox
        document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
          checkbox.checked = false;
        });
        
        console.log("queryselecterall" , document.querySelectorAll('input[name="optradio"]'))
      // Reset radio
      document.querySelectorAll('input[name="optradio"]').forEach(radio => {
          radio.checked = false;
      });
      }
  })

});


///liveserver
//autorenametag
//boostrap 5 qick snipppets
//prettier formatter
//eslint
//IntelliSense for CSS class names in HTML
//javascript code snippets
