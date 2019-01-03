document.addEventListener("DOMContentLoaded",function(){
    var liBiao = document.getElementsByClassName("cart_items")[0];
    var jian = document.getElementById("cutnum");
    var jia = document.getElementsByClassName("addnum")[0];
    var zhi = document.getElementsByClassName("nownum")[0];
    var uL = document.getElementsByClassName("uL")[0];
    
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







    
    liBiao.onclick = function(e){
        if(e.target.className == "addnum"){
           var idx = e.target.parentElement.parentElement.getAttribute("idx");
            var xhr1 = new XMLHttpRequest()
            xhr1.onreadystatechange = function(){
                if(xhr1.readyState == 4 && (xhr1.status == 200 || xhr1.status == 304)){
                var  jia = JSON.parse(xhr1.responseText);
                console.log(jia);
                var ss = e.target.parentElement.previousElementSibling.innerHTML.slice(7);
                e.target.parentElement.nextElementSibling.innerHTML= "￥"+ss*jia;
                e.target.previousElementSibling.value = jia;
                // $(".nownum").val(jia);
                // liBiao.innerHTML = xuanran(jia);
                }
            } 
            xhr1.open("get","../php/shocar1.php?shop=true&idx="+idx+"&zhanghao="+zhanghao,true);
            xhr1.send(null);
            // location.reload();
        }else if(e.target.className == "cutnum"){
           var idx = e.target.parentElement.parentElement.getAttribute("idx");
           if(e.target.nextElementSibling.value == 1){
                e.target.nextElementSibling.value = 1;
           }else{
               var xhr2 = new XMLHttpRequest()
                xhr2.onreadystatechange = function(){
                    if(xhr2.readyState == 4 && (xhr2.status == 200 || xhr2.status == 304)){
                    var  jian = JSON.parse(xhr2.responseText);
                        console.log(jian);
                        var ss = e.target.parentElement.previousElementSibling.innerHTML.slice(7);
                        e.target.parentElement.nextElementSibling.innerHTML= "￥"+ss*jian;
                        e.target.nextElementSibling.value = jian;
                    }
                } 
                xhr2.open("get","../php/shocar1.php?shoph=true&idx="+idx+"&zhanghao="+zhanghao,true);
                xhr2.send(null);
           }
        }else if(e.target.tagName == "A"){
               var xhr3 = new XMLHttpRequest()
            var idx = e.target.parentElement.parentElement.getAttribute("idx");
            xhr3.onreadystatechange = function(){
                if(xhr3.readyState == 4 && (xhr3.status == 200 || xhr3.status == 304)){
                var  jian = xhr3.responseText;
                    console.log(jian);
                }
            } 
            xhr3.open("get","../php/shocar1.php?shophs=true&idx="+idx+"&zhanghao="+zhanghao,true);
            xhr3.send(null);

           e.target.parentElement.parentElement.parentElement.remove(e.target.parentElement.parentElement);

        }

    }

//全选商品
    var all = document.querySelector(".select_all");
    var goods = document.getElementsByName("good");
    all.onclick=function(){
        for(var i=0 ;i<goods.length;i++){
            goods[i].checked = all.checked;
            goods[i].onclick = function(){
                all.checked = isCheckAll();
            }
        }
    }
    function isCheckAll(){
        // 假设goods全部勾选
        var res = true;
        for(var i=0;i<goods.length;i++){
            if(!goods[i].checked){
                res = false;
                break;
            }
        }
        return res;
    }
//清空所有商品




    function xuanran(a){
        var str = "";
         a.map(function(item){
            // console.log(item);
            str +=`
                <ul>
                    <li idx = "${item.id}">
                        <p class="good_check"><input type="checkbox" name="good" value="" /></p>
                        <p class="good_name" style="overflow:hidden;">${item.shops}</p>
                        <p class="good_price">￥&nbsp;${item.pice}</p>
                        <p class="num">
                            <span class="cutnum" id="cutnum">-</span>
                            <input class="nownum" type="text" value="${item.qty}" />
                            <span class="addnum">+</span>
                        </p>
                        <p class="good_total">￥&nbsp;${item.pice*item.qty}</p>
                        <p class="good_del">
                            <a href="javascript:;">删除</a>
                        </p>
                    </li>

                    </ul> `

        }).join("");
          return str;
    }
})




