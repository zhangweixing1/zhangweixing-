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
   var page = document.querySelector(".page");
    var xhr = new XMLHttpRequest();
    // var str = "";
            xhr.onreadystatechange=function(){
                    if(xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)){
                        var shangpin = JSON.parse(xhr.responseText);
                        console.log(shangpin);
                        
                       mainLi.innerHTML =xuanranLi(shangpin.data);
                        var totalPage = Math.ceil(shangpin.len/shangpin.qty);
                    page.innerHTML = "";
                    for(var i=1;i<=totalPage;i++){
                        var span = document.createElement("span");
                        span.innerHTML = i;
                        if(i == shangpin.currentPage){
                            span.classList.add("active");
                        }
                        page.appendChild(span);
                    }
                    }
                }


                //2.点击page，获取当前页码，再次发起请求
            page.onclick = function(e){
                if(e.target.tagName == "SPAN"){
                    currentPage = e.target.innerHTML;
                    xhr.open("get","../php/list.php?qty="+8+"&currentPage="+currentPage,true);
                    xhr.send(null);
                }
            }
           



   


                var mainLi = document.querySelector(".mainLi");
               //点击跳转到详情页
                mainLi.onclick=function(e){
                    if(e.target.tagName == "LI"){
                        // console.log(555);
                        // 
                        location.href = "details.html?id="+e.target.id;
                    }
                    if(e.target.tagName == "P"){
                        // console.log(555);
                        // location.href = "details.html?id="+;
                        location.href = "xiangqing.html?id="+e.target.parentElement.id;
                    }
                    if(e.target.tagName == "IMG"){
                        console.log(e.target.parentElement.parentElement.id);
                        location.href = "details.html?id="+e.target.parentElement.parentElement.id;
                    }
                }
        xhr.open("get","../php/list.php?qty="+8,true);
        xhr.send(null);

        var paixu = document.getElementById("paixu");
        // console.log(paixu);
        var fff = true;
        paixu.onclick =function(){ 
        mainLi.innerHTML = "";
        var xhr1 = new XMLHttpRequest();
        xhr1.onreadystatechange = function (){
            if(xhr1.readyState == 4 && (xhr1.status == 200 || xhr1.status == 304)){
                var res = JSON.parse(xhr1.responseText);
                console.log(res.data);
                // xuanranLi(res.data);

                mainLi.innerHTML =xuanranLi(res.data);
            }
        }
        xhr1.open("get","../php/list.php?fff="+fff+"&qty="+8+"&currentPage=1",true);
        xhr1.send(null);
        // console.log(xhr1.readyState);
        fff =!fff;


    }

     function xuanranLi(a){
        var str = "";

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
        return str;
    }



           
 })

