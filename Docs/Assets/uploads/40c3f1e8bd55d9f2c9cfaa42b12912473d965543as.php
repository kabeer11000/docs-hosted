<?php
function encrypt($string,$encryption_key){

    $ciphering = "AES-128-CTR";
    $iv_length = openssl_cipher_iv_length($ciphering);
    $options = 0;
    $encryption_iv = '1234567891011121';
    $encryption = openssl_encrypt($string, $ciphering,
        $encryption_key, $options, $encryption_iv);
    return $encryption;
}
$actual_link = "https://google.com/s/";
$uniqueId = urlencode(base64_encode(uniqid()));
//header('https://kabeerjaffri.000webhostapp.com/?redirect='.$actual_link.'&clientId='.encrypt("4568129",$uniqueId).'&action=login&key='.$uniqueId.'');
echo '<script>window.location.href="http://auth.kabeersnetwork.rf.gd/?redirect='.$actual_link.'&clientId='.encrypt("6546648",$uniqueId).'&action=login&key='.$uniqueId.'";</script>';
