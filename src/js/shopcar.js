document.addEventListener("DOMContentLoaded",function(){
    var liBiao = document.getElementsByClassName("cart_items")[0];
    var jian = document.getElementById("cutnum");
    var jia = document.getElementsByClassName("addnum")[0];
    var zhi = document.getElementsByClassName("nownum")[0];
    console.log(zhi);
 var zhanghao = Cookie.getCookie("goodslist");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
       

        if(xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)){
            var car =JSON.parse(xhr.responseText);
            console.log(car);
            liBiao.innerHTML = xuanran(car);
        }
    }
     xhr.open("get","../php/shocar.php?yes=true&zhanghao="+zhanghao,true);
     xhr.send(null);


     jia.onclick = function (){
        var _zhi = zhi.value;
        _zhi++;
    // console.log(_zhi);
    zhi.value = _zhi;
    }
    jian.onclick = function (){
        var _zhi = zhi.value;
        _zhi--;
    // console.log(_zhi);
    zhi.value = _zhi;
    }









    function xuanran(a){
        var str = "";
         a.map(function(item){
            console.log(item);
            str +=`
                <ul>
                    <li>
                        <p class="good_check"><input type="checkbox" name="good" value="" /></p>
                        <p class="good_name" style="overflow:hidden;">${item.shops}</p>
                        <p class="good_price">￥&nbsp;${item.pice}</p>
                        <p class="num">
                            <span class="cutnum" id="cutnum">-</span>
                            <input class="nownum" type="text" value="${item.qty}" />
                            <span class="addnum">+</span>
                        </p>
                        <p class="good_total">￥&nbsp;${item.pice}</p>
                        <p class="good_del">
                            <a href="javascript:;">删除</a>
                        </p>
                    </li>

                    </ul> `

        }).join("");
          return str;
    }
})