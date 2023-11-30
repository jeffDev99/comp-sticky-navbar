let $ = document;
let mainNavEl = $.querySelector("#mainNav")
let mainNavListItemLinkEl = $.querySelectorAll("#mainNav ul li a")
let logoImgEl = $.querySelector("#mainNav .logo img")


document.addEventListener("scroll",(e)=>{
    if (document.documentElement.scrollTop >100) {
        logoImgEl.style.height = "60px"
        mainNavEl.style.backgroundColor = "#333333"
        mainNavListItemLinkEl.forEach(item=>{
            item.style.color = "#fff"
        })


    } else{
        logoImgEl.style.height = "84px"
        mainNavEl.style.backgroundColor = "#eeeeee"
        mainNavListItemLinkEl.forEach(item=>{
            item.style.color = "#333"
        })
    }
})