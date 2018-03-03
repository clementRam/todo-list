# Documentation Technique 

## Présentation

L’application Todos vous permet de créer une liste de tâches que vous pourrez ensuite faire évoluer. En effet les tâches peuvent avoir deux statuts différents : « active » et « completed » . 

Trois options d’affichage possible : 
- All
- Active
- Completed

Vous pouvez éditer le contenu d’une tâche en double cliquant dessus. 

Les tâches peuvent être supprimées au cas par cas ou bien à l’aide du lien  « Clear completed »  qui permet de supprimer toutes les tâches ayant pour statut « completed » .

Aucune base de donnée n’est nécessaire, les informations sont stockées en local grâce aux cookies.

## Installation 

Requis : npm

Clone repository GitHub : https://github.com/clementRam/todo-list.git

Exécuter la commande suivante à la racine de l'application:
</br> `npm install`

## Webpack

Webpack est configuré pour minifier chaque fichier javascript et css dans le répertoire /dist.</br>

Commande build : 
   </br>`webpack`

Plugins webpack:
- Uglify: minifi les fichiers javascript
- ExtractText: traite et minifi les fichiers css

