<?php

class Post
{

    public static function getPosts()
    {
        $file = 'posts.csv';
        $dbDir = __DIR__ . '/../db';
        $filePath = $dbDir . '/' . $file;

        if (!file_exists($filePath)) {

            // echo getcwd();
            chdir('db');

            touch($file);
        } else {
            // echo 'File exists ...';
            $posts = [];
            // echo getcwd();
            $handle = fopen($filePath, 'r');

            if ($handle) {
                // echo 'handle success...';
                $header = fgetcsv($handle);
                while (($row = fgetcsv($handle)) !== false) {
                    $posts[] = array_combine($header, $row);
                }
            }

            fclose($handle);


            // print_r($posts);
            return $posts;
        }
    }
}
