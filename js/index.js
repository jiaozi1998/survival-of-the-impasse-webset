window.onload = function () {
    //拿到需要操作的元素
    let oToolbar=document.querySelector(".toolbar");
    let oNav=document.querySelector(".nav");
    let oMenu=document.querySelector("#myMenu")
    let oMenuUp=document.querySelector(".menu-up")
    let oMenuDown=document.querySelector(".menu-down")
    let oTip=document.querySelector(".tip")

    new fullpage('#fullpage', {
        sectionsColor: ['#0da5d6', '#2ab561', '#de8910', '#16ba9d', '#0da5d6', '#de8910', '#000000'],
        verticalCentered: false,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage' , 'fifthPage', 'sixthPage'],
        // 页面在最后一张刷新时，不占100%，会出现后面的空余部分，这里去掉最后一页
        menu: '#myMenu',
        onLeave:function(origin, destination, direction){
            if (destination.isFirst){
                oToolbar.style.display="block";
                oNav.style.top="42px";
                oMenu.style.display="none";

            } else{
                oToolbar.style.display="none";
                oNav.style.top=0;
                oMenu.style.display="block";
            }
            if(destination.isLast){
                oTip.style.display="none";
            }else {
                oTip.style.display="block";

            }

        }
    });
    oMenuUp.onclick=function () {
        fullpage_api.moveSectionUp();
    };
    oMenuDown.onclick=function () {
        fullpage_api.moveSectionDown();
    };
    // 4.初始化第四屏动画
    initSection4Animation();

}
function initSection4Animation() {
    let oLis=document.querySelectorAll(".section-four>ul>li");
    let oImgs=document.querySelectorAll(".section-four>ul>li>img");
    let oH3=document.querySelectorAll(".section-four>ul>li>h3");
    for(let i=0;i<oLis.length;i++){
        let item=oLis[i];
        item.onmouseenter=function () {
            oLis[0].style.width="20%";
            oLis[1].style.width="20%";
            oLis[2].style.width="20%";
            item.style.width="60%";
            oImgs[i].style.opacity="1";
            oH3[i].style.opacity="0";
            if(i===0){
                oImgs[0].style.left="0"
            }else if(i===2){
                oImgs[2].style.right="0"
            }
        }
        item.onmouseleave=function () {
            oLis[0].style.width="33%";
            oLis[1].style.width="34%";
            oLis[2].style.width="33%";
            oImgs[i].style.opacity="0.6";
            oH3.style.opacity="1";
            if(i===0){
                oImgs[0].style.left="-18px"
            }else if(i===2){
                oImgs[2].style.right="-18px"
            }
        }
    }
}

