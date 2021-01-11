let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for(var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        console.log(mode)
        setTheme(mode)
    })
}

function copyToClipboard(element) {
    console.log("HEL")
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }

function setTheme(mode){
    
    switch(mode){
        case "light":
            document.getElementById("theme-style").href = "default.css";
            break;
    
        case "blue":
            document.getElementById("theme-style").href = "themes/blue.css";
            break;
    
        case "green":
            document.getElementById("theme-style").href = "themes/green.css";
            break;
    
        case "purple":
            document.getElementById("theme-style").href = "themes/purple.css";
            break;

        }
    localStorage.setItem('theme',mode)
}