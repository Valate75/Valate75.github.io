let info = {};

fetch('https://api.github.com/users/Valate75', { 
    headers: {'Accept' : 'application/vnd.github.v3+json'}})                                        // Fetch Data from GitHub
   .then( response => response.json())                                                              // Converting the response to a JSON object
   .then( data => info = data)                                                                      // Convert data into a global var info (for multiple uses)
   .then( data => document.getElementById('bio').textContent = info.bio)                            // Send bio to the HTML
   .then( data => document.getElementById('name').textContent = `${info.login} (${info.name})`)     // Send login and name to the HTML
   .catch( error => console.error(error));                                                          // Catch Errors
