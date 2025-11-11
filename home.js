import supabase from  "./config.js";
        
        // FETCH DATA OF CURRENT USER

let username = document.getElementById ("user-name");

async  function getUser(e){
   
    try{
       const { data: { user } } = await supabase.auth.getUser()


       if (user){
        username.innerHTML = user.user_metadata.first_name;
       }
    }catch(err){
        console.log (err)
    }
}

getUser();