# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).






# To Do
--- Create a TO DO application 
- create a front end 
- tasks will be stored in the database 
- tasks should be able to be  complete or delete 
    - show visual representation
    - should complete Task be in database??
    - delete should also be done in database


1) create front end 
    - html 
    - css
    - javascript/jquery 

2) create server
    - express
    - routes/paths 
    - pg 

3) create database
    - sql 



MAIN LOGIC

1) create tasks (POST)
    1) html input fields
    2) send to server with ajax
    3) save to database with pg Pool 

2) render all needed tasks (GET)
    1) send a request to sever with ajax
    2) create render function to display on html with jquery 

3) edit tasks (PUT)
    - completion 
        1) add a button toggle completion 
        2) send ajax request to update data everytime button is pressed
        3) show visual representation when button is pressed

    - change time/wording
        1) 
4) delete tasks (DELETE)