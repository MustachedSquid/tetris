<?php

require_once 'config.php';

function create_header(){
    echo '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Tetris</title>
    <link rel="stylesheet" type="text/css" href="'.RELATIVE_PATH.'/css/main.css">
    <script src="'.RELATIVE_PATH.'/js/main.js"></script>
</head>
<body>';
}

function create_content($html){
    echo "<div id='content'>$html</div>";
}

function create_footer(){
    echo '</body></html>';
}

function create_page($html){
    create_header();
    create_content($html);
    create_footer();
}