import supabase from "./config.js";
// console.log(supabase);

let spg = document.getElementById ("signupForm");
let sfName = document.getElementById("firstName");
let slName = document.getElementById ("lastName");
let sEmail = document.getElementById ("email");
let sPass = document.getElementById ("password");
         

        //  SIGN UP FUNCTION
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
});
    
  }
    } catch (err) {
       console.log(err) 
    }
}

spg.addEventListener("submit", signUp);


          //  LOGIN FUNCTION