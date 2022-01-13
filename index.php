<?php

    require_once 'php/structure/structure.php';

    $rows = 22;
    $columns = 10;

    $html = "<div id='center'><div id='game'>";

for ($i=0; $i<$rows; $i++){
    for ($j=0; $j<$columns; $j++){

        $gridId = "r".$i."c".$j;
        $html = $html . "<div id='$gridId' class='grid'></div>";

    }
    $html = $html . "<br>";
}

    $html = $html . "<div id='controls'><button class='controls' id='left'><b><-</b></button><button class='controls' id='right'><b>-></b></button><button class='controls' id='rotate'><b>R</b></button></div></div></div>";

    create_page($html);