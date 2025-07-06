    let btn = document.getElementById("register")

    btn.addEventListener("click",()=>{
        

        let Fname = document.getElementById("Fname").value;
        let Email = document.getElementById("Email").value;
        let Password = document.getElementById("Pw").value;
        let Cpw = document.getElementById("Cpw").value;

        if(Fname === "" || Email === "" || Password === "" || Cpw === ""){
            alert ("sorry")
            return
        }

    function storage(){
        localStorage.setItem("Fullname",Fname)
        localStorage.setItem("IEmail",Email)
        localStorage.setItem("Pw",Password)
        localStorage.setItem("ConfirmPw",Cpw)
    }   
    storage()

        let form = document.getElementsByClassName("form-3")

        let ul = document.createElement("ul")
        ul.classList.add("Success")


        let li = document.createElement("li")
        li.textContent = "Congrats your account have been made"
        
        form[0].appendChild(ul)
        ul.appendChild(li)
        

        ul.style.display = "flex"
        form[0].reset()

        setTimeout(() => {
            ul.style.display = "none"
        }, 2000);
    })

    // Layar 2
    document.getElementById("LogIn").addEventListener("click",function (event){
        event.preventDefault()

        let Username = document.getElementById("Username").value;
        let Pass = document.getElementById("Password").value;

        let fn = localStorage.getItem("Fullname");
        let pw = localStorage.getItem("Pw");

        
    if(Username === "" || Pass === ""){
    alert("Maff")
    return; 
    }
        
       if (Username === fn && Pass === pw) {
    alert("Login Berhasil!")
    let form2 = document.getElementsByClassName("form-2")
        setTimeout(() => {
        let get = document.createElement("ul")

        get.classList.add("GetLogin")
        
        get.style.display = "flex"
        
        let des = document.createElement("li")
        
        des.textContent = "Congrats You Got Log"

        form2[0].appendChild(get)

        get.appendChild(des)

    }, 2000);
    form2[0].reset()
} else {
    alert("Login Gagal!")
    console.log(`${Username}${Pass}`)
    return;
}

        
        
        
    })