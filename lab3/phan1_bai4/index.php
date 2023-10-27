<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table{
            border-collapse: collapse;
        }
        td{
            text-align: center;
            background-color: yellow;
            border-collapse: collapse;
            border-spacing:0;
            width: 30px;
            height: 20px;
            border: 1px solid black;
        }
    </style>
</head>
<body>
<?php
function createTable($num){
    echo "<table>";
    for($i=1;$i<=$num;++$i){
        echo "<tr>";
        for($j=1;$j<=$num;++$j){
            echo "<td>".$i*$j."</td>";
        }
        echo "</tr>";
    }
    echo "</table>";
}
createTable(7);
?>
</body>
</html>