<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

error_reporting(E_ERROR);
$susers=[];
$sql="SELECT * FROM users";

if($result=mysqli_query($con,$sql)){
    $cr=0;
    while($row=mysqli_fetch_assoc($result)){
        $users[$cr]['id']=$row['id'];
        $users[$cr]['name']=$row['name'];
        $users[$cr]['email']=$row['email'];
        $users[$cr]['password']=$row['password'];
        $cr++;
    }
    echo json_encode($users);
}
else{
    http_response_code(404);
}
?>