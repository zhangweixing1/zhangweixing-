document.addEventListener("DOMContentLoaded",function(){
    // var jqzoom = document.querySelector(".jqzoom")[0];
    var jqzoom = document.getElementById("jqzoom");
    var name = document.getElementsByTagName("h1")[0];
    var cuan = decodeURI(location.search.slice(1));
    var price = document.getElementById("shop_price");
    var prices = document.getElementById("usd_shop_price");
    
    var cut = cuan.split("&");
// console.log(jqzoom)
    var data = {};
    cut.forEach(function(item){
        var arrXiang = item.split("=");
        data[arrXiang[0]] = arrXiang[1];
    })
    // console.log(data);
    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)){
            var shuzhi = JSON.parse(xhr.responseText);
            console.log(xhr.responseText);
            for(let j=0;j<shuzhi.length;j++){
                if(shuzhi[j].id == data.id){
                    var shuzu = shuzhi[j];
                    break;
                }
            }
            jqzoon.innerHTML =`<img src="${shuzu.img}">`;
            name.innerHTML =`${shuzu.uname}`;
            price.innerHTML =`¥${shuzu.pice}`;
            prices.innerHTML =`$${shuzu.pices}`;
            // console.log(shuzu);
        }
    }
    // console.log(shuzu);
    xhr.open("get","../php/xiangqing.php?",true);
    xhr.send(null);

    var cart = document.getElementsByClassName("cart")[0];
    // console.log(cart);
    
    



})

