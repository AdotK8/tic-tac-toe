export {input1, input2}

const form = document.querySelector('form')

form.addEventListener("submit", (e)=> { //adds users inputted book to library 
    e.preventDefault();

    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    
    location.href = "./game.html"

});




