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
    
   
       
    
