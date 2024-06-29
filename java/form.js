function onClick(e) {
            e.preventDefault();
            grecaptcha.enterprise.ready(async () => {
                const token = await grecaptcha.enterprise.execute('6Lch2wEqAAAAAAUgANOIG0jTtaxRfHe5E_twJQ_-', { action: 'submit' });
                document.getElementById('recaptcha-container').innerHTML = '<input type="hidden" name="token" value="' + token + '">';
                document.getElementById('support-form').submit();
            });
        }

        function validateForm() {
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var issue = document.getElementById('issue').value;

            if (name.trim() == '' || email.trim() == '' || issue.trim() == '') {
                alert('Please fill out all required fields.');
                return false;
            }

            // Additional custom validation if needed

            return true;
        }

        // JavaScript for CAPTCHA
        function generateCaptcha() {
            const num1 = Math.floor(Math.random() * 10) + 1;
            const num2 = Math.floor(Math.random() * 10) + 1;
            const sum = num1 + num2;
            document.getElementById('captcha-equation').innerText = `${num1} + ${num2} = ?`;
            return sum;
        }

        let captchaAnswer = generateCaptcha();

        function validateForm() {
            const userAnswer = parseInt(document.getElementById('captcha').value, 10);
            if (userAnswer !== captchaAnswer) {
                alert('CAPTCHA answer is incorrect. Please try again.');
                captchaAnswer = generateCaptcha(); // Generate a new CAPTCHA
                return false;
            }
            return true;
        }