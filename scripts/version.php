<?php
error_reporting(false);
$version = 1.0; //версия файла AHK

if ($version <> (float)$_GET['version']) die(json_encode(['code' => 1, 'version' => $version, 'url' => 'ссылка на обновление'], JSON_UNESCAPED_UNICODE)); //ответ в JSON при новой версии
else die(json_encode(['code' => 2], JSON_UNESCAPED_UNICODE)); //ответ, если версия программы актуальна
?>