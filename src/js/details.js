document.addEventListener("DOMContentLoaded",function(){
    var cookies = Cookie.getCookie("goodslist");
    var ssr = document.getElementById("ssr");
    ssr.innerHTML= "欢迎"+cookies;
    console.log(cookies);

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
    console.log(data);
    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)){
            var shuzhi = JSON.parse(xhr.responseText);
            console.log(shuzhi);
            for(let j=0;j<shuzhi.length;j++){
                if(shuzhi[j].id == data.id){
                    var shuzu = shuzhi[j];

                    break;
                }
            }
            jqzoon.innerHTML =`<img src="${shuzu.img}">`;
            name.innerHTML =`${shuzu.uname}`;
            price.innerHTML =`￥${shuzu.pice}`;
            prices.innerHTML =`$${shuzu.pices}`;


            var shops = shuzu.uname;
            var img = shuzu.img;
            var pice = shuzu.pice;
            var pices = shuzu.pices;
            var idx = data.id;
            console.log(data.id);
            var qty =  zhi.value;
            // var prices = shuzu.pice;
            cart.onclick = function(){
                var zhanghao = Cookie.getCookie("goodslist");
            // console.log(shops);
            // console.log(img);
            // console.log(prics);
            // console.log(prics);
            // console.log(idx);
            // console.log(qty);
                var xhr1 = new XMLHttpRequest();
                xhr1.onreadystatechange = function (){
                    console.log(xhr1.responseText);
                }
                xhr1.open("get","../php/shocar.php?pice="+pice+"&pices="+pices+"&img="+img+"&qty="+qty+"&idx="+idx+"&zhanghao="+zhanghao+"&shops="+shops,true);
                xhr1.send(null);
            }
        }
    }
    // console.log(shuzu);
    xhr.open("get","../php/xiangqing.php?",true);
    xhr.send(null);

    var cart = document.getElementsByClassName("cart")[0];
    var zhi = document.getElementsByClassName("js-number")[0];
    var  jia = document.getElementsByClassName("js-s1")[0];
    console.log(zhi);
    var  jian = document.getElementsByClassName("js-s2")[0];
    console.log(jia);

    jia.onclick = function (){
        var _zhi = zhi.value;
        _zhi++;
    // console.log(_zhi);
    zhi.value = _zhi;
    }
    jian.onclick = function (){
        if(zhi.value <= 1){
            zhi.value == 1
        }else {
            var _zhi = zhi.value;
            _zhi--;
            // console.log(_zhi);
            zhi.value = _zhi;
        }
      
    }
    





})

