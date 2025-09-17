/// working with the menu ///
{
    const menu = document.querySelector('.menu-list')
    const nav = document.querySelector('nav')
    const menu_btn = document.querySelector('.menu-btn') 
    const menuList = document.querySelector('.menu-list ul') 
    const menuLi = document.querySelectorAll('.menu-list li')  
    menu_btn.addEventListener('click',()=>{
        const isOpen = menu_btn.getAttribute('aria-expanded') === "true"
        menu_btn.setAttribute('aria-expanded',String(!isOpen)) 
        let height = menu.getBoundingClientRect().height
        if(height === 0){
            menu.style.display='flex'
            menu.style.height = nav.getBoundingClientRect().height + menuList.getBoundingClientRect().height+48+"px"
            for(let i=0; i<menuLi.length; i++){
                setTimeout(() => {
                    menuLi[i].classList.add('visible')
                }, 600+(i*150));
            }
        }else {
            menuLi.forEach((item,i)=>{

                setTimeout(() => {
                    item.classList.remove('visible')
                }, 200+(i*150));
                setTimeout(() => {
                    menu.style.height = 0
                },800);
            })
        }
    })

}

/// The main Slider ///
{
    // using Buttons //
    let currentIndex = 2
    const articles= document.querySelectorAll('.slider-container article')
    const leftBtn = document.querySelector('.left-button')
    const rightBtn = document.querySelector('.right-button')

    rightBtn.addEventListener('click',()=>{
        currentIndex++ 
        moving(indexCorrection(currentIndex))
    })
    leftBtn.addEventListener('click',()=>{
        currentIndex-- 
        moving(indexCorrection(currentIndex))
    })
    function indexCorrection(index){
        if(index > articles.length-1){ 
            currentIndex=0 
        }
        else if(index<0){
            currentIndex = articles.length-1
        }
        return currentIndex
    }
    function moving(index){
        articles.forEach((art, num)=>{
            art.className=""
            if(num === index){
                art.classList.add('active-article')
            }
            else if(num === index+1){
                art.classList.add('next-article')
            }else if(num === index-1){
                art.classList.add('prev-article')
            }else if(num === 0 && index === articles.length-1 ){
                art.classList.add('next-article')
            }
            else if(num === articles.length-1 && index === 0){
                art.classList.add('prev-article')
            }

        })
    }
}

/// animate the main paragraph text ///

{
    const mainParagraph = document.querySelector('.main-paragraph')
    const mainParagraphText = mainParagraph.textContent
    mainParagraph.textContent="" 
    for(let i=0;i <mainParagraphText.length;i++){
        mainParagraph.innerHTML += `<span>${mainParagraphText[i] }</span>` 
    } 
    const spn = document.querySelectorAll('.main-paragraph span')
    const observer = new IntersectionObserver( (entries)=>{
        entries.forEach((entrie, index) =>{
            if(entrie.isIntersecting){
                setTimeout(() => {
                    entrie.target.style.color = "#081C2B"
                }, index*50 );
            }else {
                entrie.target.style.color = "#c3c3c3"
            }
        })
    },{})
    spn.forEach(item=>observer.observe(item))

}

 //// animate the dashed line ////
{
    const dashed = document.querySelector('.dashed')
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entrie => {
            if(entrie.isIntersecting){
                entrie.target.style.transform = 'scaleX(1)'
            }
        });
    },{}) 
    observer.observe(dashed)
}



 /// animate the Testimonial Stars ///
 {
        const stars = document.querySelectorAll('.star-icon svg path')
        const newStars = Array.from(stars) 
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((item,index)=>{
                if(item.isIntersecting ){ 
                    setTimeout(() => {
                        item.target.classList.add('active-stars')
                      }, 1000+ 100*index );
                }else {
                    item.target.classList.remove('active-stars')
                }
            })
        },{}) 
        stars.forEach(item=>observer.observe(item))
 }

 /// Big heading blur animation ///

 {
    const bigHeading = document.querySelectorAll('.big-heading')
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entrie=>{
            if(entrie.isIntersecting){
                entrie.target.style.filter = "none"
                entrie.target.style.opacity = "1"
            }
            else {
                entrie.target.style.filter = "blur(4px) "
                entrie.target.style.opacity = "0"
            }
        })
    },{})
    bigHeading.forEach(item=>{
        observer.observe(item)
    })

}