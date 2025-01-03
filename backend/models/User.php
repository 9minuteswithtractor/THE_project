<?php

class User
{


    public static function getAllUsers(): array
    {

        // get csv file

        // handle read
        $file = 'users.csv';
        $dbDir = __DIR__ . '/../db';
        $filePath = $dbDir . '/' . $file;

        if (file_exists($filePath)) {


            $handle = fopen($filePath, 'r');
            if ($handle) {
                $users = [];

                $header = fgetcsv($handle);
                while (($row = fgetcsv($handle)) !== false) {
                    $users[] = array_combine($header, $row);
                }

                return $users;
            }

            fclose($handle);
        } else {
            echo 'could not find the file ...';
        }
    }
}
