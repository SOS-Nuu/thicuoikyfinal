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
    // const emailrex = /^[^\s@]*?(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[^\s@]*@iuh\.edu\.vn$/;
    //2option chon cai nao cung dc
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
  
      document.getElementById("hovaten").focus();
      //valitdate hovaten
      const validateTen = () => {
          let hovaten = document.getElementById("hovaten").value;
          
          const ktten = /^([A-Z][a-z]*\s)*([A-Z][a-z]*)$/;
          
          let errhovaten = document.getElementById("errhovaten");
          console.log(errhovaten)
  
          if (hovaten === "") {
            errhovaten.innerHTML = "ho va ten khong duoc de trong"
              return false;
          } else if (!ktten.test(hovaten)) {
            errhovaten.innerHTML = "Ho van ten khong hop le"
              return false;
          } else {
            errhovaten.innerHTML = ""; // Xóa thông báo lỗi nếu hợp lệ
              return true;
          }
      }
      document.getElementById("hovaten").addEventListener("blur", validateTen);
      //input = oncahge nó sẽ chạy lại khi có sự thay đổi
  
      //valitdate hovaten
      const validatesodienthoai = () => {
          let sodienthoai = document.getElementById("sodienthoai").value;
          
          let ktsodienthoai = /^0[0-9][0-9]{8}$/;          
          let errsodienthoai = document.getElementById("errsodienthoai");
  
          if (sodienthoai === "") {
            errsodienthoai.innerHTML = "so dien thoai khong duoc de trong"
              return false;
          } else if (!ktsodienthoai.test(sodienthoai)) {
            errsodienthoai.innerHTML = "so dien thoai khong hop le"
              return false;
          } else {
            errsodienthoai.innerHTML = ""; // Xóa thông báo lỗi nếu hợp lệ
              return true;
          }
      }
    document.getElementById("sodienthoai").addEventListener("blur", validatesodienthoai);
    
    const validateBookingDate = () => {
        let dayBoongking = document.getElementById("bookingdate").value;
        let errBooking = document.getElementById("errbookingdate");
        const rexBooking = new Date(); 
        const bookingdate = new Date(dayBoongking);
        // console.log(rexBooking);
        // console.log(bookingdate);
        if (dayBoongking === "") {
            errBooking.innerHTML = "ngày đăng ký  không được để trống"
            return false;
        } else if (rexBooking.getTime() > bookingdate.getTime()) {
            errBooking.innerHTML = "ngay dang ky khong hop le"
            return false;
        } else {
            errBooking.innerHTML = ""; // Xóa thông báo lỗi nếu hợp lệ
            return true;
        }
    }
    document.getElementById("bookingdate").addEventListener("blur", validateBookingDate);
    
         //valitdate hovaten
         const validateemail = () => {
            let email = document.getElementById("email").value;
            
            let ktemail =/^[^\s@]*?(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[^\s@]*@iuh\.edu\.vn$/;
            let erremail = document.getElementById("erremail");
    
            if (email === "") {
              erremail.innerHTML = "email khong duoc de trong"
                return false;
            } else if (!ktemail.test(email)) {
              erremail.innerHTML = "email khong hop le"
                return false;
            } else {
              erremail.innerHTML = ""; // Xóa thông báo lỗi nếu hợp lệ
                return true;
            }
        }
    document.getElementById("email").addEventListener("blur", validateemail);
    
        // Validate radio button
    const validateRadio = () => {
        // Lấy radio được chọn
        const checkedRadio = document.querySelector('input[name="optradio"]:checked');
        const errRadio = document.getElementById('radioError');
    
        // Kiểm tra xem có radio nào được chọn không
        if (checkedRadio) {
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
        console.warn('Không tìm thấy radio buttons với name="optradio"');
}
     
    
    
document.getElementById("datlich").addEventListener("click", function (event) {
    event.preventDefault();


    let isvalidateTen = validateTen();
    let isvalidatesodienthoai = validatesodienthoai();
    let isvalidateBookingDate = validateBookingDate();
    let isvalidateemail = validateemail();
    let isvalidateRadio = validateRadio();

    
    if (!isvalidateTen) {
        document.getElementById("hovaten").focus();
    } else if (!isvalidatesodienthoai) {
        document.getElementById("sodienthoai").focus();
    } else if (!isvalidateBookingDate) {
        document.getElementById("bookingdate").focus();
    } else if (!isvalidateemail) {
        document.getElementById("email").focus();
    } else if (!isvalidateRadio) {
        document.getElementById("radio1").focus();
    } else {

        dem++;
        let hovaten = document.getElementById("hovaten").value;
        let sodienthoai = document.getElementById("sodienthoai").value;
      let dayBoongking = document.getElementById("bookingdate").value;
          let email = document.getElementById("email").value;
          let radios = document.querySelector('input[name="optradio"]:checked').value;
          Khoa = document.getElementById("selectKhoa").value;

        console.log("radios123123123", radios)
        let them = `<tr>
                            <td>${dem}</td>
                            <td>${hovaten}</td>
                            <td>${sodienthoai}</td>
                            <td>${dayBoongking}</td>
                            <td>${email}</td>
                            <td>${Khoa}</td>
                            <td>${radios}</td>
                        </tr>`;
        
        document.getElementById("bookingTable").innerHTML += them;
        let modal = bootstrap.Modal.getInstance(document.getElementById("bookingModal"));
        modal.hide();



    }



});
});



  
  
  ///liveserver
  //autorenametag
  //boostrap 5 qick snipppets
  //prettier formatter
  //eslint
  //IntelliSense for CSS class names in HTML
  //javascript code snippets
