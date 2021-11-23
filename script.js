fetch('https://api.github.com/users/Valate75', {
    headers: {'Accept' : 'application/vnd.github.v3+json'}})                                        // Fetch Data from GitHub
   .then( response => response.json())                                                              // Converting the response to a JSON object
   .then( data => { //document.getElementById('bio').textContent = data.bio
                    document.getElementById('name').textContent = `${data.login} (${data.name})`
                  })                                                                                // send data to the HTML
   .catch( error => console.error(error));                                                          // Catch Errors

fetch('https://raw.githubusercontent.com/Valate75/Valate75/main/README.md')                         // Fetch Data from GitHub
    .then( response => response.text())                                                             // Converting the response to text
    .then( data => {                                                                                // Send text to the HTML
            let bc = false; let text = "";
            for(let i = 0; i < data.length; i++) // Convery the md # to HTML bold
            {
                char = data.charAt(i)
                if(char == '#') { char = "<b>"; i++; bc = !bc; }
                else if(char == '\n' && bc) { char = "</b>"; i--; bc = !bc; }
                text += char;
            }
            document.getElementById('info').innerHTML = text
        })
    .catch( error => console.error(error));                                                         // Catch Errors
