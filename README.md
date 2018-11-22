# Jquery_project  
  
--> sur la base du repo suivant <a href="https://github.com/mathieubrunpicard/todolist-app">Mathieu brunpicard</a>  
###  Ce travail à été réalisé en peer-coding entre @LisaLou et @Javi

### Voici le lien sur l'appli heroku : https://jqueryproject.herokuapp.com/  
  
## Ce travail est à consulter en Localhost en suivant ce process :  
*1* `cloner ce repo`  
*2* `bundle install`  
*3* `rails db:create`  
*4* `rails db:migrate`  
*5* `rails db:seed`  
*6* `rails server`  
*7* `lancer localhost dans votre navigateur`  
  
## tab/  
```Dans cette première partie du projet, tu faire un système de tabulation sur la page d'accueil. Il y a actuellement 3 listes, avec 3 items. Tu vas donc devoir créer une tab où chaque liste correspondra à un onglet, et lors du clic sur cet onglet, les éléments de cette liste seront affichés. Il sera possible de changer d'onglets en changeant sur le nom de chaque liste.```  
*  add ```gem 'jquery-rails'``` au Gemfile puis ```bundle install```  
*  add ```//= require jquery3
//= require popper
//= require bootstrap-sprockets```  dans application.js  
Pourquoi le `//=` ?  
*  une erreur apparait sur le navigateur résolu en ajoutant ``` '~> 4.3.3'``` a la gem jquery dans le Gemfile.  
*  add script pour la tab dans application.js avec les selecteurs html  
  * Tout le code est contenu dans une méthode `.ready`  
  * En Jquery coder l'instruction que par défaut le contenu des 'ul' appartenant à la class .card subirait la méthode .hide
  * Si l'élément `li` enfant est clické, engager l'instruction de cacher tout les éléments et .show le contenu de l'élément clické.
  * sinon, tout cacher.
  
## dropdown/  
```Le dropdown qui fait plaisir```  
*  Même logique que pour la tab.
  *  Direction le fichier _nav.html.erb pour englober les onglets de la nav dans une div qui contient aussi l'image avatar, pour appeller ensuite les modals depuis Jquery. 

## modals/  
```Maintenant qu'on a un joli dropdown, on va faire en sorte que chaque lien ouvre une modale qui va permettre la connexion, et l'inscription. Dans l'idée, c'est relativement simple : les modales sont des div cachées qui apparaissent lorsqu'on leur demande, et disparaissent après (un peu le même principe que le dropdown, en somme)```  
*  add script pour les modals de signIn , signUp qui s'affiche en milieu de page au click dans le dropdown. 
  *  Le système de modal s'appuie sur la même logique que la tab
  *  En Jquery Instruction sur le .click avec comme instruction un 'if/else' pour afficher la modal correspondante.  
  *  Retour à l'index.html pour placer une div de class "secret-box" qui contient nos formulaires signin et signup utilisé dans le Jquery.  
  *  Pas le temps de faire beaucoup mieux...  
  
## Carrousel/  
```Dans ce projet, nous allons te demander de faire un carousel, c'est à dire un bloc qui affiche des images et qui les fait défiler. Tu peux voir un exemple ici. Ce projet peut paraître simple, mais faire un carousel avec uniquement jQuery fait un peu réfléchir. Et c'est le but de l'exercice : la manipulation de DOMs. Évidemment, tout comme le projet précédent, il est interdit de se servir d'une library autre que jQuery 😉```  
*  add script carrousel + css pour centrer l'image courante /  
Tuto Openclassroom + style en css (add un fichier main.js dans /app/asset)  