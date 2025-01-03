<?php

class Post
{
    public int $id;
    public string $title;
    public string $content;
    public string $author;

    public static function getAllPosts()
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
                // setting first row as keys
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

    public function savePost()
    {
        $file = 'posts.csv';
        $dbDir = __DIR__ . '/../db';
        $filePath = $dbDir . '/' . $file;


        // Open file in append mode
        if (($handle = fopen($filePath, 'a')) === false) {
            return false;  // Return false if the file can't be opened
        }

        // Add the post to the CSV file
        $postData = [$this->title, $this->content, $this->author];
        if (fputcsv($handle, $postData) === false) {
            fclose($handle);
            return false;
        }

        fclose($handle);
        return true;
    }
}
