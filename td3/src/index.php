<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

$data = json_decode(file_get_contents('https://api-ratp.pierre-grimaud.fr/v4/traffic'));
echo $data->result->rers[0]->message;

