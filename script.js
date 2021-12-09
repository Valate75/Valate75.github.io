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
        if (count < pictureAmt)
        {
            slideList.style.left = "-" + count * window.innerWidth + "px";
            count++;
        }
        else if (count = pictureAmt)
        {
            slideList.style.left = "0px";
            count = 1;
        }
    }, 5000);
}

// Change mode
function mode()
{
    if (document.body.style.color == "white")
        modeChange("black", "white", "Light mode");
    else
        modeChange("white", "#0C0C17", "Dark mode");
}

function modeChange(c1, c2, title)
{
    document.body.style.color = c1;                                                 // Change the text color
    document.body.style.backgroundColor = c2;                                       // Change the background colour
    document.getElementById("darkMode").innerText = title;                          // Change title

    // change all links text colour
    for (let i = 0; i < document.querySelectorAll("a").length; i++)
            document.querySelectorAll("a")[i].style.color = c1;
    
    // change all .line colours
    for (let i = 0; i < document.getElementsByClassName("line").length; i++)
        document.getElementsByClassName("line")[i].style.backgroundColor = c1;

    // Change the top info's background
    if (c2 != "white") document.getElementById("topinfo").style.backgroundColor = "#1D1F28";
    else document.getElementById("topinfo").style.backgroundColor = c2;

    document.getElementById("topr").style.color = "black";                          // Change back the github link to black
}

// Scroll Event
window.addEventListener("scroll", function()
{
    var scrollPoint = document.getElementById("scrollPoint").getBoundingClientRect().top;
    if (scrollPoint < window.innerHeight)
        document.getElementById("up").style.display = "block"
    else
        document.getElementById("up").style.display = "none"
});

// On Load
window.onload = function()
{
    imageSlider();
}

/*function denyCookies()
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
}*/
