<?php

$hash = md5(uniqid().uniqid()).md5(uniqid().uniqid()).md5(uniqid().uniqid()));
echo sha1($hash)