<?php
try {
    $dsn = 'mysql:host=localhost;dbname=mbteai;charset=utf8';
    $username = 'root';
    $password = '2h3r3t1i7f';
    $option = [
        PDO::ATTR_ERRMODE => PDO::ERRRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ];

    $pdo = new PDO($dsn, $username, $password, $option);
    echo "データベースに接続できました！";
} catch (PDOException $e) {
    echo "接続に失敗しました。". $e->getMessage();
}
?>