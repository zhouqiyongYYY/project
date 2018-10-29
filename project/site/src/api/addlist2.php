<?php
	     
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "username";
        $conn = new mysqli($servername, $username, $password, $dbname);       
        $conn->set_charset('utf8');

        $sql = 'select * from carlist';
        // DELETE FROM carlist where guid = $dguid
        $result = $conn->query($sql);
        $row = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($row);
        // mysqli_query($conn,"INSERT INTO userlist (username,password) VALUES ('$_username', '$_psw')");
        $result->close();
        $conn->close();












?>