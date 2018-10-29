<?php
        $_usrname = isset($_POST["username"])?$_POST["username"]:"has no";
        // echo $usrname;

        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "username";
        $conn = new mysqli($servername, $username, $password, $dbname);
        // if ($conn->connect_error) {
        //         die("连接失败: " . $conn->connect_error);
        //     } 
        $conn->set_charset('utf8');
         // echo "连接成功";    

        // $sql = 'select * from userlist where usrname='.$usrname;
        $sql = 'select * from userlist';
        $result = $conn->query($sql);
        $row = $result->fetch_all(MYSQLI_ASSOC);       
         foreach($row as $item){          
            if($item ['usrname'] == $_usrname){
                 echo "true";
                 break;
            }
        };
        $result->close();
        $conn->close();






?>