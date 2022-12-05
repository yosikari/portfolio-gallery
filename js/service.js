'use strict'
var gProjs = [
    {
        id: "minesweeper",
        name: "Minesweeper",
        title: "My first sprint project",
        desc: `Minesweeper is a logic puzzle game.The game features a grid of clickable squares, 
        with hidden mines scattered throughout the board. The objective is to clear the board without detonating any mines. 
        During the development of this game I got a deeper understanding of recursion and local storage`,
        url: "projs/minesweeper",
        publishedAt: 1668999399000,
        labels: ["recursion","local storage","timer"],
    },

    {
        id: "touchNums",
        name: "Touch Nums",
        title: "Nice board game",
        desc: "A simple game with the objective to click the number by their order as fast possible",
        url: "projs/touchNums",
        publishedAt: 1668999399000,
        labels: ["matrix", "timer"],
    },

    {
        id: "pacMan",
        name: "Pac-Man",
        title: "Of cours we can't pass the pac-man",
        desc: `In this game the player controls  a Pac-Man, who must eat all the dots inside an enclosed maze while avoiding four colored ghosts.
        During the development of this game I got a deeper understanding matrixes and keyboard events`,
        url: "projs/pacMan",
        publishedAt: 1668999399000,
        labels: ["matrix", "timer", "keyboard events"],
    },

    {
        id: "toDos",
        name: "Tasks Manager",
        title: "Simple and usefull",
        desc: `A simple todo site, where the user can add/remove and fillter their todos.
        During the development of this site I got a deeper understanding of high level functions including- sort,map and fillter`,
        url: "projs/toDos",
        publishedAt: 1668999399000,
        labels: ["input events", "high level functions", "sort"],
    },

    {
        id: "bookShop",
        name: "Books Shop",
        title: "If you collect books you have to give it a try",
        desc: `A simple book shop site, where the user can add,updat,remove and rate a book.In addition he can 
        search for a specific book by its name and sort by name,date and price.
        During the development of this site I got a deeper understanding jQuery,bootstrap and optimizing the screen size`,
        url: "projs/bookShop",
        publishedAt: 1668999399000,
        labels: ["input events", "id", "sort"],
    },

    {
        id: "guessWho",
        name: "Guess Who",
        title: "I can read your mide",
        desc: `Guess Who" - in this game the "computer" tries to guess the character the user is thinking of.
        The user can also "teach" the correct guess computer by adding the guess and leading question.
        I learned how to create and work with a tree structure to save and update the game flow according to the user actions`,
        url: "projs/guessWho",
        publishedAt: 1668999399000,
        labels: ["jquery", "input events"],
    },

    {
        id: "InPicture",
        name: "In Picture",
        title: "You think you know the ansswer?",
        desc: `In this game you need to select the correct answer to what appears in the presented picture.
        During the development of this game I learned how to work with images`,
        url: "projs/InPicture",
        publishedAt: 1668999399000,
        labels: ["img"],
    },

]



function getProjs() {
    return gProjs
}

