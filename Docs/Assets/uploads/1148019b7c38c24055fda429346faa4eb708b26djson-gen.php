<?php
$name = htmlspecialchars($_GET['name']);
$desc = htmlspecialchars($_GET['desc']);
$icon = htmlspecialchars($_GET['icon']);
$hash = file_get_contents('http://docs-kabeersnetwork-kview-app-sta.rf.gd/Private/uploads/96ec85de82565b3899d2133cfbd33fa09669f4echash.php');
echo '{"name": "'.$name.'","desc": "'.$desc.'","icon": "'.$icon.'","hash":"'.$hash.'","links": [{ "name": " ", "type": "  ", "link": "  " }]}';?>