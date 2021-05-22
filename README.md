# StockBitApplication

this is my attempt at the questions

1. Anagram, here I used no es6 functions. I mostly use for looping. 
    The pseudo code is as follows:
    
    a. I sort the letters of each words by using bubble sort 
        `aikt,aikt,aikt,aku,aik,aakmn,aku`
        
    b. I used two arrays for storing the sorted words
    
    
    c. Grouping the first array so it looks like 
    `aikt,aikt,aikt,aku,aku,aakmn,aik`
    
    d. Then using the second array for the correct indexes.
    
    e. Grouped the words into associative array 
     
     example: 
     ```
     
    group:0, word: kita,
    group:0: word: akit,
    group: 1: kua,
    and so on
    ```
    
    f. Then using the `group` I print it out
    


2. Movies List
    For this one, I used React, Node.js, Axios, and Redux

    a. list of movies are displayed by appending Elements to an array then display it using JSX
    
    b. Infinite scroll are achieved by using scroll event handler, detecting whether user has reached the bottom of the page then requesting new data
    
    c. Searching movies are achieved by using `keyword` state and using `dispatch` to request movies with that title
    
    d. Single page for movie detail is achieved by requesting the details of the movies using the `imdbID` passed through query params
    
    e. Movie poster popup achieved by using `showDialog` state and `Modal` component
    
    

To run it please use `npm start`
    
   
       
    
