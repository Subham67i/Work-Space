const accordains = document.querySelectorAll('.accordain');

accordains.forEach(accordain => {
    const icon = accordain.querySelector('.icon');
    const answer = accordain.querySelector('.answer');

    accordain.addEventListener('click' , () => {
       
        if(icon.classList.contains('active')) {
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        } else {
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    })
})