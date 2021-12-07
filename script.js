// Image Slider
function imageSlider()
{    
    var slideList = document.getElementById("slideWrap");
    var pictureAmt = slideList.querySelectorAll("li").length;
    var count = 1;

    // Resize Window Event
    window.addEventListener('resize', function() {
        slideList.style.left = "-" + (count - 1) * window.innerWidth + "px";
    });

    // Change Image
    setInterval(function()
    {
        if(count < pictureAmt)
        {
            slideList.style.left = "-" + count * window.innerWidth + "px";
            count++;
        }
        else if(count = pictureAmt)
        {
            slideList.style.left = "0px";
            count = 1;
        }
    }, 5000);
}
// On Start
window.onload = function()
{
    if(getCookie("accepted") != "true") document.getElementById("cookie-popup").style.display = "block";
    if(getCookie("darkmode") == "true")
    {
        document.body.style.color = "white";
        document.body.style.backgroundColor = "#0B0C0F";
        document.getElementById("darkMode").innerText = "Dark mode";
        document.getElementById("topinfo").style.backgroundColor = "#0B0C0F";

        var links = document.links
        for (let i = 0; i < links.length; i++)
            links[i].style.color = "white";
        document.getElementById("topr").style.color = "black";

        darkmode = true;
    }
    imageSlider();
}

// Scroll Event
window.addEventListener("scroll", function() {
    var scrollPoint = document.getElementById("scrollPoint").getBoundingClientRect().top;
    if (scrollPoint < window.innerHeight)
        document.getElementById("up").style.display = "block"
    else
        document.getElementById("up").style.display = "none"
});

var darkMode = false;
function mode() {
    darkMode = !darkMode
    if(darkMode)
    {
        document.body.style.color = "white";
        document.body.style.backgroundColor = "#0B0C0F";
        document.getElementById("darkMode").innerText = "Dark mode";
        document.getElementById("topinfo").style.backgroundColor = "#0B0C0F";

        var links = document.links
        for (let i = 0; i < links.length; i++)
            links[i].style.color = "white";
        document.getElementById("topr").style.color = "black";

        if(getCookie("accepted") == "true") document.cookie = "darkmode=true";
    }
    else
    {
        document.body.style.color = "black";
        document.body.style.backgroundColor = "white";
        document.getElementById("darkMode").innerText = "Light mode";
        document.getElementById("topinfo").style.backgroundColor = "white";

        var links = document.links
        for (let i = 0; i < links.length; i++)
            links[i].style.color = "black";

        if(getCookie("accepted") == "true") document.cookie = "darkmode=false;";
    }
}

function denyCookies()
{
    document.getElementById("cookie-popup").style.display = "none";
}
function acceptCookies()
{
    document.getElementById("cookie-popup").style.display = "none";
    document.cookie = "accepted=true";
    document.cookie = "darkmode=false;";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

/*
// Name And Username
fetch('https://api.github.com/users/Valate75', {
    headers: {'Accept' : 'application/vnd.github.v3+json'}})                                        // Fetch Data from GitHub
   .then( response => response.json())                                                              // Converting the response to a JSON object
   .then( data => document.getElementById('name').textContent = `${data.login} (${data.name})`)     // send data to the HTML
   .catch( error => console.error(error));                                                          // Catch Errors

// Readme.md
fetch('https://raw.githubusercontent.com/Valate75/Valate75/main/README.md')                         // Fetch Data from GitHub
    .then( response => response.text())                                                             // Converting the response to text
    .then( data => {                                                                                // Edit text
            let bc = false; let text = "";
            for(let i = 0; i < data.length; i++) // Convert the md # to HTML bold
            {
                char = data.charAt(i)
                if(char == '#') { char = "<h3>"; i++; bc = !bc; }
                else if(char == '\n' && bc) { char = "</h3>"; i--; bc = !bc; }
                text += char;
            }
            document.getElementById('info').innerHTML = text                                        // Send text to the HTML
        })
    .catch( error => console.error(error));                                                         // Catch Errors
*/
