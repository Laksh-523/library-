 //Regform
 function showMsg(event) {
        event.preventDefault();
        alert("Application submitted successfully!\n\nPlease visit the library front desk with your ID card to complete your registration.");
        window.location.href = "index.html";
    }


//contact
$(document).ready(function() {
    
    $('.faq-title').click(function() {
        
        $(this).next('.faq-body').slideToggle(300);
        
    });

});


//form
    document.getElementById('reservationForm2').addEventListener('submit', function(event) {
        event.preventDefault(); 

        let isValid = true;

        
        const fullName = document.getElementById('fullName');
        const memberId = document.getElementById('memberId');
        const emailInput = document.getElementById('email');
        const phone = document.getElementById('phone');
        const category = document.getElementById('category');
        const bookName = document.getElementById('bookName');
        const terms = document.getElementById('terms');
        const reserveDate = document.getElementById('reserveDate');

        
        const nameError = document.getElementById('nameError');
        const memberError = document.getElementById('memberError');
        const emailError = document.getElementById('emailError');
        const phoneError = document.getElementById('phoneError');
        const categoryError = document.getElementById('categoryError');
        const bookError = document.getElementById('bookError');
        const termsError = document.getElementById('termsError');
        const dateError = document.getElementById('dateError');

        
        const errors = document.querySelectorAll('.error-msg');
        errors.forEach(err => err.style.display = 'none');
        const inputs = document.querySelectorAll('input, select');
        inputs.forEach(input => input.classList.remove('invalid'));

       
        if (fullName.value.trim() === "") {
            nameError.style.display = 'block';
            fullName.classList.add('invalid');
            isValid = false;
        }

       
        if (memberId.value.trim() === "") {
            memberError.style.display = 'block';
            memberId.classList.add('invalid');
            isValid = false;
        }

        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === "") {
            emailError.textContent = "Please enter your email address";
            emailError.style.display = 'block';
            emailInput.classList.add('invalid');
            isValid = false;
        } else if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = "Invalid email format (e.g., name@email.com)";
            emailError.style.display = 'block';
            emailInput.classList.add('invalid');
            isValid = false;
        }

       
        const phonePattern = /^\d{10}$/;
        if (phone.value.trim() === "") {
            phoneError.textContent = "Please enter your contact number";
            phoneError.style.display = 'block';
            phone.classList.add('invalid');
            isValid = false;
        } else if (!phonePattern.test(phone.value.trim())) {
            phoneError.textContent = "Phone number must be exactly 10 digits";
            phoneError.style.display = 'block';
            phone.classList.add('invalid');
            isValid = false;
        }

        
        if (category.value === "empty") {
            categoryError.style.display = 'block';
            category.classList.add('invalid');
            isValid = false;
        }

       
        if (bookName.value.trim() === "") {
            bookError.style.display = 'block';
            bookName.classList.add('invalid');
            isValid = false;
        }

        
        if (reserveDate.value === "") {
            dateError.style.display = 'block';
            reserveDate.classList.add('invalid');
            isValid = false;
        }

        
        if (!terms.checked) {
            termsError.style.display = 'block';
            isValid = false;
        }

        
        if (isValid) {
            alert("Successfully Reserved.");
            this.submit(); 
        } else {
            alert("Reservation failed. Please check the errors.");
        }
    });
     
    function showReservedDate() {
        let inputDateVal = document.getElementById("reservedDate").value;
        if (!inputDateVal) return; 

        let reservationDate = new Date(inputDateVal);
        let returnDeadline = new Date(reservationDate);
        returnDeadline.setDate(reservationDate.getDate() + 14);

        let today = new Date();
        today.setHours(0, 0, 0, 0);
        returnDeadline.setHours(0, 0, 0, 0);

        let timeDifference = returnDeadline.getTime() - today.getTime();
        let daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        let displayElement = document.getElementById("daysCountDisplay");

        if (daysRemaining > 0) {
            displayElement.innerHTML = "There are " + daysRemaining + " remaining days to return book.";
            displayElement.style.color = "black";
        } else if (daysRemaining === 0) {
            displayElement.innerHTML = "Today is the deadline to return the book!";
            displayElement.style.color = "red";
        } else {
            displayElement.innerHTML = "The return date for the book has expired!";
            displayElement.style.color = "red";
        }
    }