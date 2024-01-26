<?php

$api_url = 'https://timesofindia.indiatimes.com/rssfeeds/-2128838597.cms?feedtype=json';
$response = file_get_contents($api_url);
$data = json_decode($response, true);

echo json_encode($data['channel']['item']);
