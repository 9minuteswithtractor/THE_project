<?php

class LoginController
{

    // authenticate
    public function handleLogin()
    {

        header('Content-Type: application/json');

        $rawData = file_get_contents('php://input');
        $data = json_decode($rawData, true);

        // sanitize input data 
        $user = htmlspecialchars($data['user']);
        $password = htmlspecialchars($data['password']);

        // is data valid?
        if (empty($user) || empty($password)) {
            echo json_encode(['error' => 'User and password are required']);
            return;
        }


        // get all users from csv file ...
        require_once "models/User.php";
        $users = User::getAllUsers();


        if (empty($users)) {
            echo json_encode(['error' => 'No users found ...']);
            return;
        }


        // simple validation :
        foreach ($users as $entry) {
            if ($entry['user'] === $user) {
                if ($entry['password'] === $password) {

                    // success
                    if (!isset($_SESSION)) {
                        session_start();
                    }
                    $_SESSION['isLoggedIn'] = true;
                    $_SESSION['user'] = $user;
                    echo json_encode(['message' => 'Login successful!']);
                    return;
                } else {
                    echo json_encode(['message' => 'Invalid username or password']);
                    return;
                }
            } else {
                echo json_encode(['message' => 'No username found ...']);
                return;
            }
        }
    }

    // register new



}
