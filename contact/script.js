const submit = document.querySelector('.contact-me .container .content .the-form form .button-send .btn');
console.log(submit)

const success = document.querySelector('.contact-me .container .content .the-form form .success');
console.log(success);

submit.addEventListener('click', function () {
    alert('your message has been sent. Thank you :)')
});

const text = document.querySelector('.contact-me .container .content .text');
console.log(text);

const form = document.querySelector('.contact-me .container .content .the-form');
console.log(form)

window.addEventListener('load', function () {
    if (window.className = 'text' || 'the-form') {
        text.classList.add('animation-text');
        form.classList.add('animation-the-form');
    }
})