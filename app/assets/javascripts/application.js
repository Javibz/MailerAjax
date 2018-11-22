// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require rails-ujs
//= require activestorage
//= require_tree .

//test de liaison entre l'app et le script:
/*$(document).ready(function() {
    $("h1").text("coucou");
});*/

// script de tabulation:

$(document).ready(function() {
    $(".modal-signup").hide();
    $(".modal-login").hide();   
    $("ul > .card").hide();
    $(".dropdown > ul").hide();

    $(".container > ul > li").css("border", "solid green 0.3px");
    $(".container > ul > li").click(function(){
    //$(".container > ul > li").css("background-color", "red");
        
        if( $(this).next().is(":hidden") ) {
            $("ul > .card").hide(200);
            $(this).next().show(200);
        }
        else{
            $("ul > .card").hide(200);
        }  
        });
    // dropdown du avatar

    $(".rounded-circle").click(function() {
        if( $(this).next().is(":hidden")) {
             $(".dropdown > ul").show();
        }else {
             $(".dropdown > ul").hide();
        }
    });
    $(".dropdown > ul > li").css("list-style-type", "none");

    // modal login 
    $(".login").click(function() {
        if( $(".modal-login").is(":hidden")) {
            $(".modal-login").show();
        }else {
             $(".modal-login").hide();
        };
    });
    // modal signup
    $(".signup").click(function() {
        if( $(".modal-signup").is(":hidden")) {
            $(".modal-signup").show();
        }else {
             $(".modal-signup").hide();
        };    
    });

    // section carrousel
    var $carrousel = $('#carrousel'), // on cible le bloc du carrousel

    $img = $('#carrousel img'), // on cible les images contenues dans le carrousel

    indexImg = $img.length - 1, // on définit l'index du dernier élément

    i = 0, // on initialise un compteur

    $currentImg = $img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)

        // cette partie determine les propriétés d'affichage par défaults
    $img.css('display', 'none'); // on cache les images

    $currentImg.css('display', 'block'); // on affiche seulement l'image courante
    $carrousel.append('<div class="controls"> <button class="prev"> < </button> <button class="next"> > </button> </div>');


    $('.next').click(function(){ // image suivante
        i++;
        if( i <= indexImg ){
            $img.css('display', 'none'); // on cache les images
            $currentImg = $img.eq(i); // position 'i'
            $currentImg.css('display', 'block'); // puis on l'affiche
        }
        else{
            i = indexImg;
        }
    });
    $('.prev').click(function(){ // image précédente
        i--;
        if(i >= 0){
            $img.css('display', 'none');
            $currentImg = $img.eq(i);// position 'i'
            $currentImg.css('display', 'block');
        }
        else{
            i = 0;
        }
    });
    // fonction slider d'image :
    function slideImg(){
        setTimeout(function(){ // on utilise une fonction anonyme
            if(i < indexImg){ // si le compteur est inférieur au dernier index
            i++; // on l'incrémente
        }
        else{ // sinon, on le remet à 0 (première image)
            i = 0;
        }
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
        slideImg(); // relancer la fonction à la fin
        }, 5000); // timer en millisecond (5sec)
    }
    slideImg();
});
//$(".cat__title").find("ul")
