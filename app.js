let counter = document.querySelectorAll('.counter');

counter.forEach(count => {
    count.innerHTML = 0;

    let update= () => {
        let attriValue = count.getAttribute('data-target');
        let mainValue = +count.innerHTML;
        let sliceValue = attriValue / 200;

        if(mainValue < attriValue){
            count.innerHTML = `${Math.floor(mainValue + sliceValue)}`;
            setTimeout(update,10)
        }else{
            count.innerHTML = attriValue;
        }
    }
    update()
})





