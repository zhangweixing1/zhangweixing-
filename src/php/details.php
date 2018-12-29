<?php
    // echo  666;
    $email = isset($_GET["email"])?$_GET["email"]:null;
    $word = isset($_GET["word"])?$_GET["word"]:null;
    $register = isset($_GET["register"])?$_GET["register"]:null;
    $gister = isset($_GET["gister"])?$_GET["gister"]:null;
    $reg = isset($_GET["reg"])?$_GET["reg"]:null;
    // 1.创建连接,测试是否连接成功
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'tps138';
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        // var_dump($conn->connect_error);
    }
    //2.查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
    //3.执行查询语句，得到查询结果集(对象)
    $res = $conn->query('select * from zhuce where email="'.$email.'"');
    $arr = $conn->query('select * from zhuce where email="'.$word.'"');
            // echo "111";
    // var_dump($res);
    if($res->num_rows > 0){
        echo "该用户名已被注册";
    }else if($reg){
        if($res->num_rows > 0 && $arr->num_rows >0){
            echo "111";
        }else{
            echo "密码输入错误";
        }
    }else{
        if($register){
            $res = $conn->query('insert into zhuce (email,passwords) values ("'.$email.'","'.$word.'")');
            if($res){
                echo "注册成功";
            }else{
                echo "插入失败";
            }
        }else{
            echo "该用户名可用";
        }
    }
?>