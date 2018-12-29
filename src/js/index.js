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
            // 移出aa,开启aa.timer将aa的ul隐藏。但是如果在300ms之内移回aa,就会清空aa.timer.
            // 移出aa,开启aa.timer将aa的ul隐藏。此时移入bb,清空的是bb.timer
            // 
             var focus = document.querySelector(".banner");
            var ulbox = focus.children[0];
            var firstImg = ulbox.children[0].children[0];
            // 3.复制索引0所在的元素，追加到ul最后面。
            var cloneLi = ulbox.children[0].cloneNode(true);
            ulbox.appendChild(cloneLi);
            var len = ulbox.children.length;
            var idx = 0;
            var timer;
            // 1.focus呈现图片，宽度为第一张图片的宽度。ul的宽度=图片的宽度*图片张数
            //  * 必须等待第一张图片加载完成后，再获取宽度
            firstImg.onload = function(){
                focus.style.width = firstImg.offsetWidth + 'px';
                ulbox.style.width = firstImg.offsetWidth * len + 'px';
            }
            
            var page = createPage();
            autoplay();
            //4.鼠标移入focus，清除定时器。鼠标移出focus，重新开启定时器
            focus.onmouseover = function(){
                clearInterval(timer);
            }
            focus.onmouseout = function(){
                  autoplay();
            }
            //5.点击小圆点，获取里面的内容-1==>索引
            page.onclick = function(e){
                if(e.target.tagName == "SPAN"){
                    idx = e.target.innerHTML - 1;
                    showPic();
                }
            }
            // you.onclick =function(){
            //  idx++;
            //  showPic();
            // }

            // 2.开启定时器，定义一个索引（0、1、2）改变，从而改变的是ulbox的left值
            //  * 当索引为数组长度时，其实要呈现的是索引1所在的图片。为了让轮播图是正着滚的，同时将ul的left手动设置成0。
            function autoplay(){
                timer = setInterval(function(){
                    idx++;
                    showPic();
                },2500) 
            }
            //只做呈现图片
            function showPic(){
                if(idx == 5){
                    ulbox.style.left = 0;
                    idx = 0;
                }
                //4.滚动过程中索引改变，去除所有的高亮，再让对应的索引高亮.
                //  * 当滚到被复制那张图片索引时，对应的索引为0的小圆点高亮。
                for(var i=0;i<len-1;i++){
                    page.children[i].classList.remove("active");
                }
                if(idx == 5){
                    page.children[0].classList.add("active");
                }else{
                    page.children[idx].classList.add("active");
                }
                animation(ulbox,{left:-firstImg.offsetWidth *idx},30);
            }
            
            //3.生成页码，同时根据len-1生成小圆点.默认第一个小圆点高亮.active
            function createPage(){
                var page  = document.createElement("div"); 
                page.classList.add("page");
                for(var i=1;i<=len-1;i++){
                    var dotted = document.createElement("span");
                    dotted.innerHTML = i;
                    page.appendChild(dotted);
                }    
                page.children[0].classList.add("active");
                focus.appendChild(page);
                return page;
            }


            $(".hotLi")
            // console.log($(".hotLi"))
            


        })
 document.addEventListener("DOMContentLoaded",function(){
    var hotLi = document.getElementsByClassName("hotLi")[0];
    var xhr = new XMLHttpRequest();
    var str = "";
            xhr.onreadystatechange=function(){
                    if(xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)){
                        var paijiang = JSON.parse(xhr.responseText);
                        // console.log(xhr.responseText);
                        xuanran(paijiang);
                        console.log(str);
            hotLi.innerHTML = str;
                    }
                }
            xhr.open("get","../php/index.php",true);
            xhr.send(null);


            function xuanran(paijiang){
                str = "";
                paijiang.map(function(item){
                    str += `
                    <ul class="iProductsList" id='item.id'>
                    <li>
                        <a href="#">
                            <span class="pic">
                                <img src="${item.img}" alt="" />
                            </span>
                            <dl>
                                <dt>${item.uname}</dt>
                                <dd class="price">
                                    <span>¥${item.price}</span>
                                </dd>
                            </dl>
                        </a>
                    </li>
                </ul>
                `
                }).join("");
            }
 })
