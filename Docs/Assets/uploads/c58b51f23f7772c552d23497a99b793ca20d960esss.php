<?php
function generateCode($limit){
$code = '';
for($i = 0; $i < $limit; $i++) { $code .= mt_rand(0, 9); }
return $code;
}
generateCode(16);