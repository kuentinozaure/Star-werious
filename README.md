
# StarWerious (En)

  

This project is an angular app made with Angular CLI 11.2.9

The main role of this app is to call Swapi Api and list the starthip and pilot

This app is production ready with a docker file

the application is available [here](https://starwerious.herokuapp.com/home).
  
  

## How to create your docker image and run it

``

$ docker build -t yourdockerimagename .

``

``$ docker run -d -it -p 80:80/tcp yourdockerimagename

``

  

## Feature implemented in this project

  

- display on landing page the list of starship from star wars

  

- On click on the starship details, new page is displayed and show you more information about the selected starship also display the pilots who have drove this starship

  

- On click on pilot details new page is display to show you more information about selected pilot

  

- You can navigate back with the web browser back arrow

  

## Constraint implemented

  

- Not used the `wrapper swapi` to call the rest api swapi

  

- Go to starship list or go on the back page

  

## Constraint implemented but not optimal ( explication

  

- Only load a data one time when the app is started

  

→ I load the data one time i can pass this through the router but when i'm back on the starship list my list is refresh, i can't find actually the method to avoid the refresh ( i think a NGRX/REDUX store is needed ?)`

  

## Bonus Implemented

  

- I had a docker file to deploy in production through docker a app, also you can lauch it on `production` in your PC

  

- I had pwa feature which you can `download starWerious app` on your device, if you want to test pwa feature please run `npm run start-pwa`

  

- I had my own css style for the table of (starship list, starship details, pilot details),but I have bad taste in design

- I had to a starship list the film that are associated to the starships


# StarWerious (Fr)

Ce projet est une application angulaire réalisée avec Angular CLI 11.2.9.
Le rôle principal de cette application est d'appeler l'Api Swapi et de lister les vaisseaux et les pilotes.
Cette application est prête pour la production avec un fichier docker
L'application est accessible [ici](https://starwerious.herokuapp.com/home).

## Comment créer votre image docker et l'exécuter
``
$ docker build -t yourdockerimagename .
``
``$ docker run -d -it -p 80:80/tcp yourdockerimagename 
``

## Fonctionnalité implémentée dans ce projet

- Afficher sur la page d'accueil la liste des vaisseaux de Star wars

- En cliquant sur les détails du vaisseau, une nouvelle page s'affiche et vous montre plus d'informations sur le vaisseau sélectionné, ainsi que les pilotes qui ont piloté ce vaisseau.

- En cliquant sur les détails du pilote, une nouvelle page s'affiche pour vous montrer plus d'informations sur le pilote sélectionné.

- Vous pouvez revenir en arrière avec la flèche de retour du navigateur web. 

## Contrainte implémentée

- Pas d'utilisation du `wrapper swapi` pour appeler le reste de l'api swapi.

- possibilité à tout moment de revenir à la liste des vaisseaux ou à la dernière
page visionnée.. 

## Contrainte implémentée mais pas optimale (explication)

- Charger les données une seule fois au démarrage de l'application. 

	→ Je charge les données une seule fois, je les fait passer par le routeur mais quand je suis de retour sur la liste des vaisseaux, ma liste est rafraîchie, je ne trouve pas la méthode pour éviter le rafraîchissement (je pense qu'un store NGRX/REDUX est nécessaire).

## Bonus implémenté 

- Création d'un fichier docker pour déployer en production via docker l'application, aussi vous pouvez le lancer sur `production` dans votre PC 

- J'ai ajouté la fonctionnalité pwa qui vous permet de `télécharger l'application starWerious` sur votre appareil, si vous voulez tester la fonctionnalité pwa, veuillez exécuter `npm run start-pwa`.

- J'ai crée mon propre style css pour les tableau de (liste des vaisseaux, détails des vaisseaux, détails des pilotes), mais j'avoue que j'ai un mauvais goût en matière de design .

- J'ai ajouté la liste des films qui sont associés au vaisseaux