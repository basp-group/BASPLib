function onClick(e) {
    e.preventDefault();
    grecaptcha.enterprise.ready(async () => {
        const token = await grecaptcha.enterprise.execute('6LdusQYqAAAAALdAwzYWGUH2DOQpiPFMYSforgfL', { action: 'submit' });
        document.getElementById('recaptcha-container').innerHTML = `<input type="hidden" name="token" value="${token}">`;
        document.getElementById('support-form').submit();
    });
}

function onSubmit(event) {
    event.preventDefault();
    if (!validateForm()) {
        return false;
    }
    onClick(event);
}

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const issue = document.getElementById('issue').value.trim();
    const userAnswer = parseInt(document.getElementById('captcha').value, 10);

    if (!name || !email || !issue) {
        alert('Please fill out all required fields.');
        return false;
    }

    if (isNaN(userAnswer) || userAnswer !== captchaAnswer) {
        alert('CAPTCHA answer is incorrect. Please try again.');
        captchaAnswer = generateCaptcha();
        return false;
    }

    return true;
}

function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const sum = num1 + num2;
    document.getElementById('captcha-equation').innerText = `${num1} + ${num2} = ?`;
    return sum;
}

let captchaAnswer = generateCaptcha();