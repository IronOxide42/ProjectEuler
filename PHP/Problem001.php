<?php
    $question = 1000;
    $sum = 0;
    $i = 0;
    while( $i < $question) {
        if((($i % 3) == 0) && (($i % 5) == 0)) {
            $sum = $sum + $i;
        }
        $i = $i + 1;
    }
    print $sum;
?>