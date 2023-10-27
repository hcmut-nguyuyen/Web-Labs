<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
function printFor(){
    for($i=0;$i<=100;++$i){
        if($i%2==1){
            echo $i."<br>";
        }
    }
}
function printWhile(){
    $i =0;
    while($i<=100){
        if($i%2==1){
            echo $i."<br>";
        }
        ++$i;
    }
}
printFor();
printWhile();
?>
</body>
</html>