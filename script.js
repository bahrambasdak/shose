function changeLanguage(){
    let button = document.querySelector('body header i span');
    let details = document.querySelector('.details');
    let content = document.querySelector('.details .content');
    let textSize = document.querySelector('.details .text');
    let buyText = document.querySelector('.details .price a');
    let detailsTitle = document.querySelector('.details .title');

    if(button.innerText != 'EN') {
        button.innerText = 'EN';
        content.innerHTML = 'A very high quality and light ketone from Nike brand products.';
        details.style.direction = 'ltr';
        textSize.innerHTML = 'Size';
        buyText.innerHTML = 'buy now';
        detailsTitle.innerHTML = 'NIKE AIR MAX';
    }
    else {
        button.innerText = 'FA';
        content.innerHTML = 'یک کتونی با کیفیت بسیار بالا و سبک از محصولات برند معتبر نایک .';
        details.style.direction = 'rtl';
        textSize.innerHTML = 'اندازه';
        buyText.innerHTML = 'خرید';
        detailsTitle.innerHTML = 'کتونی نایک';
    }
}


