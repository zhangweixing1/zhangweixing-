document.addEventListener("DOMContentLoaded",function(){
    var uname = document.querySelector(".uname");
    var passw = document.querySelector(".passw");
    var dengBtn = document.querySelector(".dengBtn");
    var code = document.querySelector("#code");
    var codes = document.querySelector("#codes");
    var ccc = document.querySelector("#captcha");
    var vcode = document.querySelector("#img_captcha");

    var str = 'abcdefghijklmnopqrstuvwxyz0123456789';//str[35]


        vcode.onclick = function(){
            randomCode();
        }

        randomCode();


        // 封装函数
        function randomCode(){
            // 随机生成一个4位验证码（包含字母）
            var _code = '';
            for(var i=0;i<4;i++){
                var index = parseInt(Math.random()*str.length) //不可能大于36
                _code += str[index]
            }
            vcode.innerHTML = _code.toUpperCase();
        }

    dengBtn.onclick = function(){
        var flag = false;
        var login = true;
        var xhr = new XMLHttpRequest();
        //创建请求对象,返回一个异步请求对象
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)){
                if(xhr.responseText == "用户名或密码错误"){
                    // console.log(xhr.responseText);
                     code.innerHTML = xhr.responseText;
                     // alert("登录shibai");
                }
                if(xhr.responseText == "成功"){
                    if(ccc.value == vcode.innerHTML){
                        console.log(555);
                        // alert("登录成功");
                        var ss = uname.value;
                        var d = new Date();
                        d.setDate(d.getDate()+7);
                        Cookie.setCookie("goodslist",ss,d,"/");
                        location.href = "../index.html";
                    }else{
                        code.innerHTML = "验证码不正确";
                    }
                }
            }
        }//处理服务器返回数据
        xhr.open("get",`../php/denglu.php?uname=${uname.value}&passw=${passw.value}&login=${login}`,true);
        //设置请求参数，建立与服务器连接
        xhr.send(null);
    }

})