/* Theme */
startTheme()

function startTheme(){
    const currentTheme = localStorage.getItem("theme");
    if(currentTheme === null){
        if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
            localStorage.setItem("theme", "dark-mode");
        }else{
            localStorage.setItem("theme", "light-mode");
        }
    }
    
    if(currentTheme === "dark-mode"){
        setTheme('Dark');
    }else{
        setTheme('Light');
    }
}

function setTheme(SetTo){
    switch(SetTo){
        case 'Dark':
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
        break;
        case 'Light':
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
        break;
        case 'Toggle':
            if(localStorage.getItem("theme") === "dark-mode"){
                localStorage.setItem("theme", "light-mode");
                document.body.classList.add("light-mode");
                document.body.classList.remove("dark-mode");
            }else{
                localStorage.setItem("theme", "dark-mode");
                document.body.classList.add("dark-mode");
                document.body.classList.remove("light-mode");
            }
        break;
    }
}