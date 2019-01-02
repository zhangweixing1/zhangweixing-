<?php
    $idx = isset($_GET["idx"])?$_GET["idx"]:null;
    $shop = isset($_GET["shop"])?$_GET["shop"]:null;
    $zhanghao = isset($_GET["zhanghao"])?$_GET["zhanghao"]:null;


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


    $res = $conn->query('select * from ureshop where id="'.$idx.'"');

    if($shop){
        $qtyp = $res->fetch_all(MYSQLI_ASSOC);

       
        $qtyn = 1+$qtyp[0]["qty"];
         // var_dump($qtyn);

        $res2 = $conn->query('update ureshop set qty = "'.$qtyn.'" where id = '.$idx.' and zhanghao="'.$zhanghao.'"');
    }
    // else{
    //     $qtyp = $res->fetch_all(MYSQLI_ASSOC);
    //     $qtyn = $qtyp[0]-1["qty"];
    //     $res2 = $conn->query('update ureshop set qty = "'.$qtyn.'" where id = '.$idx.' and zhanghao="'.$zhanghao.'"');
    // }

        // $content = $res->fetch_all(MYSQLI_ASSOC);
        // $res->close();
        // $conn->close();
        // echo json_encode($content,JSON_UNESCAPED_UNICODE);
    // echo $res;

    // if($shop){
    //     $qtyp = $res->fetch_all(MYSQLI_ASSOC);

    //     // var_dump($qtyp);
    //     $qtyn = $qty+$qtyp[0]["qty"];

    //     $res2 = $conn->query('update ureshop set qty = "'.$qtyn.'" where idx = '.$idx.' and zhanghao="'.$zhanghao.'"');
    // }

    // if($res->num_rows > 0){
    //     $qtyp = $res->fetch_all(MYSQLI_ASSOC);
    //     $qtyn = $qty+$qtyp[0]["qty"];
    //     $res2 = $conn->query('update ureshop set qty = "'.$qtyn.'" where idx = '.$idx.' and zhanghao="'.$zhanghao.'"');
    // }else if($yes){
    //     $ress = $conn->query('select * from ureshop where zhanghao="'.$zhanghao.'"');
    //     $content = $ress->fetch_all(MYSQLI_ASSOC);
    //     $ress->close();
    //     $conn->close();
    //      echo json_encode($content,JSON_UNESCAPED_UNICODE);

    // }else{
    //     $res2 = $conn->query('insert into ureshop (pice,pices,img,qty,zhanghao,shops,idx) values("'.$pice.'","'.$pices.'","'.$img.'","'.$qty.'","'.$zhanghao.'","'.$shops.'","'.$idx.'")');
    // }





?>