let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
 
counter1 = 0 
counter2 = 0 


function incrementHome1()   {
    
   
    counter1 += 1 
    homeScoreEl.textContent = counter1 
    
}

function incrementHome2()   {
    
    counter1 += 2 
    homeScoreEl.textContent  =  counter1
      
}

function incrementHome3()   {
    
    
    counter1 += 3 
    homeScoreEl.textContent  =  counter1
      
}

function incrementHome4()   {
    
    counter2 += 1 
    guestScoreEl.textContent = counter2 
    
}

function incrementHome5()   {
    
    counter2 += 2 
    guestScoreEl.textContent = counter2
   
}

function incrementHome6()   {
    
    counter2 += 3 
    guestScoreEl.textContent = counter2   
   
}