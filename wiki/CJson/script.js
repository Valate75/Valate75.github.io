fetch('https://raw.githubusercontent.com/Valate75/Cjson/main/cheatsheet.md')                        // Fetch Data from GitHub
    .then( response => response.text())                                                             // Converting the response to text
    .then( data => {                                                                                // Edit text
            let bc = false; let sc = false; let text = "";
            for(let i = 0; i < data.length; i++) // Format the text better
            {
                char = data.charAt(i)
                if(char == '#') { char = "<b>"; i++; bc = !bc; } // Make titles bold
                else if(char == '\n' && bc) { char = "</b>"; i--; bc = !bc; }
                else if(char == '/' && data.charAt(i + 1) == '/') { char = "<span>//"; i+=2; sc = !sc; } // Make text another colour
                else if(char == '\n' && sc) { char = "</span>"; i--; sc = !sc; }
                text += char;
            }
            document.getElementById('cheatsheet').innerHTML = text                                  // Send text to the HTML
        })
    .catch( error => console.error(error));                                                         // Catch Errors

fetch('https://raw.githubusercontent.com/Valate75/Cjson/main/README.md')                            // Fetch Data from GitHub
    .then( response => response.text())                                                             // Converting the response to text
    .then( data => {                                                                                // Edit text
            let bc = false; let text = "";
            for(let i = 0; i < data.length; i++) // Format the text better
            {
                char = data.charAt(i)
                if(char == '#') { char = "<b>"; i++; bc = !bc; } // Make titles bold
                else if(char == '\n' && bc) { char = "</b>"; i--; bc = !bc; }
                text += char;
            }
            document.getElementById('info').innerHTML = text                                        // Send text to the HTML
        })
    .catch( error => console.error(error));                                                         // Catch Errors