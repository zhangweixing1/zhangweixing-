<?php
    $id = isset($_GET["id"])?$_GET["id"]:null;

    // 1.创建连接,测试是否连接成功
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'tps138';
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        // var_dump($conn->connect_error);
    }
    // echo  $conn;
    //2.查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
    // var_dump("成功");
    //3.书写语句，执行语句
    //  执行语句的代码： $res = $conn->query()    
    //      (1) 若执行的是增删改语句,$res的值为布尔值。
    //      (2) 若执行的是查询语句，得到查询结果集(对象)
    //            * num_rows ：结果集中的数量，用于判断是否查询到结果
    //            * fetch_all(MYSQLI_ASSOC) 得到所有结果
    //            * fetch_assoc() 得到第一个结果
    //            * fetch_row() 得到第一个结果,只能拿到值
    // 4.若是查询语句，记得释放查询结果集，避免资源浪费
    // 5.关闭数据库

    $res = $conn -> query('select * from list');
    $content = $res->fetch_all(MYSQLI_ASSOC);
    $res->close();
    $conn->close();
    echo json_encode($content);

    //======================





?>