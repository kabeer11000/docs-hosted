<?php

$name = htmlspecialchars($_GET['name']);
$desc = htmlspecialchars($_GET['desc']);
$icon = htmlspecialchars($_GET['icon']);
echo '
{
    "name": "'.$name.'",
    "desc": "'.$desc.'",
    "icon": "'.$icon.'",
    "links": [{ "name": " ", "type": "  ", "link": "  " }]
}
';

//name,type,link