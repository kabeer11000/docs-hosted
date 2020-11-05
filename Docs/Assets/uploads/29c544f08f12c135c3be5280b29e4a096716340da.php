<?php
function parse_url_all($url){
    $url = substr($url,0,4)=='http'? $url: 'http://'.$url;
    $d = parse_url($url);
    $tmp = explode('.',$d['host']);
    $n = count($tmp);
    if ($n>=2){
        if ($n==4 || ($n==3 && strlen($tmp[($n-2)])<=3)){
            $d['domain'] = $tmp[($n-3)].".".$tmp[($n-2)].".".$tmp[($n-1)];
            $d['domainX'] = $tmp[($n-3)];
        } else {
            $d['domain'] = $tmp[($n-2)].".".$tmp[($n-1)];
            $d['domainX'] = $tmp[($n-2)];
        }
    }
    return $d;
}
$urls = array('www.test.com', 'test.com', 'cp.test.com' 'http://stackoverflow.com/questions/5343288/index.php?r=asdasdasdas&fdf');
echo "<div style='overflow-x:auto;'>";
echo "<table>";
echo "<tr><th>URL</th><th>Host</th><th>Domain</th><th>Domain X</th></tr>";
foreach ($urls as $url) {
    $info = parse_url_all($url);
    echo "<tr><td>".$url."</td><td>".$info['host'].
    "</td><td>".$info['domain']."</td><td>".$info['domainX']."</td></tr>";
}
echo "</table></div>";
