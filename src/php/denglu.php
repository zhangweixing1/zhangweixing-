<?php
    // echo 6666;
    $uname = isset($_GET["uname"])?$_GET["uname"]:null;
    $passw = isset($_GET["passw"])?$_GET["passw"]:null;
    $login = isset($_GET["login"])?$_GET["login"]:null;
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
    //登录查询
    if($login){
        $res = $conn->query('select * from zhuce where email="'.$uname.'" and passwords="'.$passw.'"');

        if($res->num_rows >0){
            echo "成功";
        }else{
            echo "用户名或密码错误";
        }
    }   
    $res->close();
    $conn->close();
?>