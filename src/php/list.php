<?php
    $qty = isset($_GET["qty"])? $_GET["qty"]: 5;
    $currentPage = isset($_GET["currentPage"])? $_GET["currentPage"]: 1;



    $fff = isset($_GET["fff"])?$_GET["fff"]:null;
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
    // echo 6666;
    // var_dump($qty,$currentPage);

     if($fff){
     if($fff=="true"){
            //降序
            $res = $conn->query('select * from list order by pice desc');
            $content = $res->fetch_all(MYSQLI_ASSOC);
            $res->close();
            $conn->close();
            // echo 666;
            $content = json_encode($content,JSON_UNESCAPED_UNICODE);
         
        }else if($fff=="false"){
            $ras = $conn->query('select * from list order by pice asc');
            $content = $ras->fetch_all(MYSQLI_ASSOC);
            $ras->close();
            $conn->close();
            $content = json_encode($content,JSON_UNESCAPED_UNICODE);
            // echo 777;
        }
    }else{
    $res = $conn -> query('select * from list');
    // var_dump($res);
    $content = $res->fetch_all(MYSQLI_ASSOC);
    // $res->close();
    // $conn->close();
    $content =  json_encode($content,JSON_UNESCAPED_UNICODE);
     // 2.将json字符串转成数组（获取数组的长度）,裁剪出需要的当前页的内容。
    


    }


   $content = json_decode($content,true);
    $len = count($content);
    $data = array_slice($content,($currentPage-1)*$qty,$qty);
    $res = array(
        "data" => $data,
        "len" => $len,
        "qty" => $qty,
        "currentPage" => $currentPage
    );
    echo json_encode($res,JSON_UNESCAPED_UNICODE);




?>