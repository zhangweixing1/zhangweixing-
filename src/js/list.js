 jQuery(function($){
            $(".nav li").has("ul").append($("<span/>").addClass("arrow"));
            $(".nav").on("mouseover","li",function(){
                clearTimeout(this.timer);
                $(this).children(".dowr").slideDown(1000);
            }).on("mouseout","li",function(){
                this.timer = setTimeout(()=>{
                    $(this).children(".dowr").slideUp(50);
                },800)
            })
        })
 document.addEventListener("DOMContentLoaded",function(){
    // var search = document.getElementsByClassName("search");
    var imgxg = document.getElementsByClassName("img-xg")[0];
    var mainLi = document.getElementsByClassName("mainLi")[0];
    var xhr = new XMLHttpRequest();
    var str = "";
            xhr.onreadystatechange=function(){
                    if(xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)){
                        var shangpin = JSON.parse(xhr.responseText);
                        // console.log(shangpin);
                        xuanranLi(shangpin);
                        mainLi.innerHTML = str;
                    }
                }
            // xhr.open("get","../php/list.php",true);
            // xhr.send(null);
   


  var mainLi = document.querySelector(".mainLi");
       //点击跳转到详情页
        mainLi.onclick=function(e){
            if(e.target.tagName == "LI"){
                console.log(555);
                location.href = "details.html?id="+e.target.id;
            }
            if(e.target.tagName == "P"){
                console.log(555);
                // location.href = "details.html?id="+;
                location.href = "xiangqing.html?id="+e.target.parentElement.id;
            }
            if(e.target.tagName == "IMG"){
                console.log(e.target.parentElement.parentElement.id);
                location.href = "details.html?id="+e.target.parentElement.parentElement.id;
            }
        }
        xhr.open("get","../php/list.php",true);
        xhr.send(null);

        var paixu = document.getElementById("paixu");
        console.log(paixu);
        paixu.onclick =function(){ 
        mainLi.innerHTML = "";
        // console.log(6666);
        var fff = true;       
        var xhr1 = new XMLHttpRequest();
        xhr1.onreadystatechange = function (){
            if(xhr1.readyState == 4 && (xhr1.status == 200 || xhr1.status == 304)){
                var res = JSON.parse(xhr1.responseText);
                 xuanranLi(res);
                 console.log(res);
                mainLi.innerHTML = str;
            }
        }
        xhr1.open("get","../php/list.php?fff="+fff,true);
        xhr1.send(null);
        // console.log(xhr1.readyState);

    }

     function xuanranLi(a){
        str = "";

        a.map(function(item){
            str +=` 
            <li class="img-xg" id='${item.id}'>
                    <i class="top"></i> 
                    <i class="right"></i> 
                    <i class="bottom"></i> 
                    <i class="left"></i>
                    <a  class="img" title="甘露天使 全屋健水器 简单小巧 功能强大 经久耐用 物美价廉 1台" href="#">
                    <p class="b-q">
                        <b class="pc-tps balance" title="余额兑换"></b>
                        <b class="pc-tps free" title="包邮"></b>
                    </p>
                    <img data-original="main.jpg" src="${item.img}" style="display: inline;">
                    </a>
                    <dl class="tit">
                        <dd class="fl">
                            <p>
                                <a  title="甘露天使 全屋健水器 简单小巧 功能强大 经久耐用 物美价廉 1台" href="#">${item.uname}</a></p>
                            <p class="c-o fs-14">¥${item.pice}<span class="usaMoney">$${item.pices}</span></p>
                        </dd>
                        <dt class="fr">
                            <s class="qizhi"><img src="../images/cn.jpg"></s>
                            <p class="c-bb">中国</p>
                        </dt>
                    </dl>
                </li>
            `
        }).join("");
    }



           
 })

 