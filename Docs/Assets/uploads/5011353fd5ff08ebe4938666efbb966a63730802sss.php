<?php

class KAuth {

  function init ($r, $id, $m) {
      function encrypt($string,$encryption_key){
  
          $ciphering = "AES-128-CBC";
          $iv_length = openssl_cipher_iv_length($ciphering);
          $options = 0;
          $encryption_iv = '1234567891011121';
          $encryption = openssl_encrypt($string, $ciphering,
          $encryption_key, $options, $encryption_iv);
          return $encryption;
   }
$actual_link = $r;
$uniqueId = urlencode(base64_encode(uniqid()));
$url = 'http://auth.kabeersnetwork.rf.gd/?redirect='.$actual_link.'&clientId='.base64_encode(urlencode(encrypt($id,$uniqueId))).'&action='.$m.'&key='.$uniqueId.'';

    // Functions declared inside a function have global scope

    function go($url){header('Location:'.$url);}
  }
}


$ob = new KAuth();
$redirect = 'http://auth.kabeersnetwork.rf.gd/server/account/';
$id = '6546648';
$method = 'login';
$ob->init($redirect, $id, $method);

go();