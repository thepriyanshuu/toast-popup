const inputValue = document.querySelector('.input-text');
const button = document.querySelector('button');
const rangeInput = document.querySelector('.range-input');
const toastContainer = document.querySelector('.toast-container');
const horizontalToast = document.querySelector('#horizontal-position');
const verticalToast = document.querySelector('#vertical-position');
const toastType = document.querySelector('#toast-type');



button.addEventListener('click' , ()=>{
    
    const span = document.createElement('span');
    const closeIcon = document.createElement('span');
    closeIcon.classList.add('close-icon')
    closeIcon.innerText = '✖';
    span.innerText = `${inputValue.value}`;
    span.appendChild(closeIcon)
    toastContainer.appendChild(span)
    inputValue.value = ''
    
    if(horizontalToast.value == 'right'){
        toastContainer.classList.add('right')
        span.classList.add('from-right');
    }
    else{
        toastContainer.classList.remove('right')
        span.classList.remove('from-right')
    }
    if(verticalToast.value == 'bottom'){
        toastContainer.classList.add('bottom')        
    }
    else{
        toastContainer.classList.remove('bottom')
    }
    if(toastType.value == 'success'){
        span.classList.add('success')
    }
    else if(toastType.value == 'error'){
        span.classList.add('error')
    }
    else if(toastType.value == 'warning'){
        span.classList.add('warning')
    }
    else{
        span.classList.add('info')
    }

    closeIcon.addEventListener('click', ()=>{
        if(horizontalToast.value == 'left'){
            span.classList.remove('to-right');
            span.classList.add('to-left');
        }
        else{
            span.classList.add('to-right');
            span.classList.remove('to-left');
        }
        setTimeout(() => {
            span.remove()
        }, 100);
    })
    
    
    setTimeout(()=>{
        if(horizontalToast.value == 'right'){
            span.classList.add('to-right')
            setTimeout(() => {
                span.remove()
            }, 99);
        }
        else{
            span.classList.remove('to-right');
            span.classList.add('to-left')
            setTimeout(() => {
                span.remove()
            }, 99);
        }
    }, parseInt(rangeInput.value * 100))
    
})

