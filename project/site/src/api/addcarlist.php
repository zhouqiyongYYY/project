<?php

		$imgurl = isset($_GET["imgurl"])?$_GET["imgurl"]:"has no";
        $guid = isset($_GET["guid"])?$_GET["guid"]: "1";
        $uname = isset($_GET["uname"])?$_GET["uname"]:"has no";
        $price = isset($_GET["price"])?$_GET["price"]:1.1;
        $jianshu = isset($_GET["jianshu"])?$_GET["jianshu"]:"1";
        $user = isset($_GET["user"])?$_GET["user"]:"";
        // echo $user;
        // $dguid = isset($_GET["dguid"])?$_GET["dguid"]:"1";
        // echo $dguid;
        // echo $imgurl;
        // echo $uname;
        // echo $price;
        // echo $guid;
        // echo $jianshu;

   
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "username";
        $conn = new mysqli($servername, $username, $password, $dbname);
        
        $conn->set_charset('utf8');
        $result = $conn ->query('select * from carlist where guid="'.$guid.'" and user="'.$user.'"');
        $c = $result->fetch_all(MYSQLI_ASSOC);
        if($c){
            // $qty = ++$c["jianshu"];
            $res = $conn->query('update carlist set jianshu=jianshu+1 where guid="'.$guid.'" and user="'.$user.'"');
        }else{
            $res = $conn ->query('insert into carlist (imgurl,uname,price,jianshu,guid,user)
            values ("'.$imgurl.'","'.$uname.'",'.$price.','.$jianshu.','.$guid.',"'.$user.'")'); 
        }
       
        // $sql = 'select * from carlist';
        // DELETE FROM carlist where guid = $dguid
        $result->close();
        $conn->close();
        






?>