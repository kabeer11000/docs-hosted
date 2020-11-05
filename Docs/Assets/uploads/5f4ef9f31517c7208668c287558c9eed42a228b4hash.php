<?php

$hash = md5(uniqid().uniqid()).md5(uniqid().uniqid()).md5(uniqid().uniqid()));
echo hash('sha256', $hash);