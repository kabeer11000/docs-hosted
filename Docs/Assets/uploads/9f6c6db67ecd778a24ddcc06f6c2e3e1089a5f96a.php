


<?php
$a = [];
$words = ["threat","wide","cookie","population","habit","researcher","local","item","similar","notion","author","evaluation","wooden","dramatic","lack","besides","bed","writer","important","should","that","express","contribution","consistent","shadow","statement","provision","beer","cancer","immigrant","he","plan","publicly","divide","cross","clinical","inquiry","electricity","wealth","insist","contemporary","just","fear","organic","beach","estimate","craft","occur","investigation","end","emotional","blanket","lunch","civil","closely","launch","network","flavor","discipline","chemical","honor","drag","whom","wage","fellow","Congress","machine","shock","politically","can","belief","magazine","status","identify","recent","time","tear","his","citizen","jail","keep","tonight","whenever","finding","reinforce","art","hope","existence","why","behind","married","morning","link","universal","self","this","alone","employment","reaction","constitutional"];
foreach($words as $word){
    if(strlen($word) >= 4){
        array_push($a, array(substr($word, 0, 3) => $word));
    }
    else if(strlen($word) >= 3){
        array_push($a, array(substr($word, 0, 2) => $word));
    }else{
        array_push($a, array(substr($word, 0, 1) => $word));
        
    }
}
echo json_encode($a);
