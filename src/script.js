const emailSpan = document.querySelector('.email');
const subscribeButton = document.querySelector('.submit');
const leftSection = document.querySelector('.left');
const rightSection = document.querySelector('.right');
const successSection = document.querySelector('.success');
subscribeButton.addEventListener('click', function() {
    if(email.value === '') {
        alert('Please input your email first');
    }
    else {
        let getEmail = document.getElementById('email').value;
        leftSection.classList.add('hidden');
        rightSection.classList.add('hidden');
        successSection.classList.remove('hidden');
        emailSpan.innerHTML = getEmail;
    }
});