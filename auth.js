import supabase from "./config.js";
// console.log(supabase);

let spg = document.getElementById ("signupForm");
let sfName = document.getElementById("firstName");
let slName = document.getElementById ("lastName");
let sEmail = document.getElementById ("email");
let sPass = document.getElementById ("password");
         

        //  SIGN UP FUNCTIONALITY
async function signUp(e){
    e.preventDefault();

    try {

      if(!sEmail){
        alert ("please enter your email");
        return
      }
      if(!sPass){
        alert ("please enter your password")
        return
      }
        const { data, error } = await supabase.auth.signUp(
  {
    email: sEmail.value,
    password:sPass.value ,
    options: {
      data: {
        first_name: sfName.value,
        last_name: slName.value,
      }
    }
  }
)

  if (error){
    console.log(error);
    Swal.fire({
  title: "Signup Failed!" ,
  text: error.message,
  icon: "error",
  draggable: true
})
return;
  }else {
   Swal.fire({
  title: "Signup successfully!",
  icon: "success",
  draggable: true
}).then (()=>{
  location.href = "home.html"
})
 
    
  }
    } catch (err) {
       console.log(err) 
    }
}

spg &&  spg.addEventListener("submit", signUp);


          //  LOGIN FUNCTIONALITY

let lpg = document.getElementById ("login-form");
let lEmail = document.getElementById ("lemail");
let lPass = document.getElementById ("lpassword");


 async function login(e){
    e.preventDefault();

   try {
    const { data, error } = await supabase.auth.signInWithPassword({
     email: lEmail.value,
     password: lPass.value,
  })

    if (error){
      console.log (error);
       Swal.fire({
  title: "login Failed!" ,
  text: error.message,
  icon: "error",
  draggable: true
})
return;
    }else {
       Swal.fire({
  title: "successfully login to your account!" ,
  icon: "success",
  draggable: true
}).then ( ()=> {
   location.href = "home.html"
})

    }
   } catch (err) {
    console.log(err)
   }
 }


  lpg && lpg.addEventListener ("submit", login)


        //  LOGOUT FUNCTIONAITY

  let logoutBtn = document.getElementById ("logout-btn");
   console.log(logoutBtn);
  async function  logout(e){
    e.preventDefault();

    try {
      const { error } = await supabase.auth.signOut()


      if (!error){
        
          Swal.fire({
    title: "logout successfully!" ,
    icon: "success",
    draggable: true
  }).then(() => {
    location.href = "login.html"
  })
   
  return;  
      }
    } catch (err) {
      console.log(err)
      
    }
  }
   

  logoutBtn && logoutBtn.addEventListener ("click", logout)
