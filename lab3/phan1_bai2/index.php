<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
function foo($num){
switch ($num%5){
    case 0:
        echo "Hello";
        break;
    case 1:
        echo "How are you?";
        break;
    case 2:
        echo "I'm doing well, thank you";
        break;
    case 3:
        echo "See you later";
        break;
    case 4:
        echo "Good-bye";
        break;
}
}
foo(0);
echo "<br>";
foo(1);
echo "<br>";
foo(2);
echo "<br>";
foo(3);
echo "<br>";
foo(4);
echo "<br>";
?>
</body>
</html>