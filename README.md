# MERNStackTest

# Step 1 : HELLO WORLD

## 1.1 : React
Demmarage sans npm : utilisation des cdn pour l'instant
Create index.html as a file, use all scripts (react, react-dom, babel) from CDN. Write a Hello World element within the HTML between  tags.

## 1.2 : Basic server express

http://expressjs.com/en/starter/hello-world.html
http://expressjs.com/en/starter/static-files.html
Use Node and Express to serve the HTML file.

#Step 2 : Organisation

## 2.1 : Spération du script et du html
## 2.2 : Utilisation de npm
  Transformation de fichier JSX en JS manuellement coté server avec Babel

#Step 3 : Components

##3.1 : Créer un composant avec une class qui extend React.Component
##3.2 : Compose Component
  Intégrer et hierarchiser plusieurs composants

## 3.3  :  Props + Composants dynamique
  Passer des props à un composants.
  Générer dynamiquement des composants à partir de datas
  Problématique : La gestion des css globaux pour les composants ne semble pas pratique du tout.

# Step 4 : Handling State
  Setter un init state via le constructeur. (le constructeur doit toujours appeler super())
  Update le state à partir d'un enfant :
    - Ecrire la methode qui appel setState dans le parent
    - Passer en props du composant enfant la methode ci dessus. !Attention, pour conserver le contexte du this, utiliser une arrow function dans la props : propsName={() => function()}, ou binder la methode du parent au this dans le constructeur : this.addBug = this.addBug.bind(this);
