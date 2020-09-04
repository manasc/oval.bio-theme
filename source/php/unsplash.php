<?php
include 'vendor/autoload.php';

Crew\Unsplash\HttpClient::init([
	'applicationId' => 'qRsBuEHvB14gKNpViDEgAQCYdjpsKrnD4hZbPEYNTy4',
	'secret' => 'S92gkNpvDCVlZ2uFnL_o-3oVORLyOOQ4_Q_-Zly_r-k',
	'utmSource' => 'Oval Bio',
]);

$filters = [
	'featured' => true,
	'query' => 'exercise',
	'count' => 25,
	"orientation" => 'landscape',
];

$photos = Crew\Unsplash\Photo::random($filters)->toArray();

$file = fopen("source/temp/images.json", "w");
fwrite($file, json_encode($photos));
