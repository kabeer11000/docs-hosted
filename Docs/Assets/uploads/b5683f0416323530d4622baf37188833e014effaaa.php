<?php
$urls = array('www.test.com', 'test.com', 'cp.test.com/private/index.php?r=asdasdasdas&fdf');
echo "<div style='overflow-x:auto;'>";
echo "<table>";
echo "<tr><th>URL</th><th>Host</th><th>Domain</th><th>Domain X</th></tr>";
foreach ($urls as $url) {
    $info = parse_url_all($url);
    echo "<tr><td>".$url."</td><td>".$info['host'].
    "</td><td>".$info['domain']."</td><td>".$info['domainX']."</td></tr>";
}
echo "</table></div>";
