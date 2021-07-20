// select container


// future div children 
var div = " "; 

    // create all of the div elements and append them to the parent
    for (var i = 0; i < 16; i++ )
    {
        for (var j=0; j < 16; j++ )
        {
            // create the new div elements and append to he main container
            div = document.createElement("div");
            div.style.width = "25px";
            div.style.height =  "25px";
            div.style.background = "grey";
          
            // add an event listener to each divs
            div.addEventListener("mouseover", function (event) 
                                 {
             event.target.style.backgroundColor = 'black';
            })
            // add divs to parents
            document.getElementById("container").appendChild(div);

        }
    }

function reset()
{
    // select all divs in he container 
    var clear = container.querySelectorAll("div");
  
    // for all div elements make it return back to its original color 
     clear.forEach((c) => 
     {
       c.style.backgroundColor = 'grey';
     });
  
}







