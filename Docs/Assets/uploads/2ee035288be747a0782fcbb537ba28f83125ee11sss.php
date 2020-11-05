<?php 
function encrypt($plaintext, $password) {
 
 $method = "AES-256-CBC";
    $key = hash('sha256', $password, true);

    //$iv = openssl_random_pseudo_bytes(16);
    $iv = '4858960622007534';

    $ciphertext = openssl_encrypt($plaintext, $method, $key, OPENSSL_RAW_DATA, $iv);
    $hash = hash_hmac('sha256', $ciphertext . $iv, $key, true);

    return $iv . $hash . $ciphertext;
}

$actual_link = "https://google.com/";
$uniqueId = urlencode(base64_encode(uniqid()));

header('Location:http://auth.kabeersnetwork.rf.gd/?redirect='.$actual_link.'&clientId='.encrypt("6546648",$uniqueId).'&action=login&key='.$uniqueId.'');
