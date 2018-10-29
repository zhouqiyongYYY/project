<?php
        $guid = isset($_GET["guid"])?$_GET["guid"]: "1";
        $user = isset($_GET["user"])?$_GET["user"]:"";        
        // echo  $guid;
        // echo $user;

        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "username";
        $conn = new mysqli($servername, $username, $password, $dbname);       
        $conn->set_charset('utf8');

        $sql = 'select * from carlist where guid="'.$guid.'" and user="'.$user.'"';
        // DELETE FROM carlist where guid = $dguid
        $result = $conn->query($sql);
        $row = $result->fetch_all(MYSQLI_ASSOC);
        if($row){
            $res = $conn->query('delete from carlist where guid="'.$guid.'"and user="'.$user.'"'); 
        };

        $result->close();
        $conn->close();
        














?>