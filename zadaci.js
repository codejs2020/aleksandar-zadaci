//zadatak 1
let nule = "000"
let number1 = 78.5 
function numberZero() {
    return (nule + Math.floor(number1))
} 
// zadatak2 
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("Aleksandar"));
//daa
// zadatak3
function openCity(evt, cityName) {
    // Declare all variables
    let i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  //zadatak7
 
  function myFunction() {
    var d = new Date();
    var n = d.getDay()
    if ( n = 1) {
    return ("ponedeljak")
    }
    if ( n = 2) {
        return ("utorak")
        }
        if ( n = 3) {
            return ("sreda")
            }
            if ( n = 4) {
                return ("cetvrtak")
                }
                if ( n = 5) {
                    return ("petak")
                    }
                    if ( n = 6) {
                        return ("subota")
                        }
                        if ( n = 7) {
                            return ("snedelja")
                            }
  }
  //zadatak9
  const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  
  genNew.addEventListener("click", setBg);
  setBg();