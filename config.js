//import { createClient } from  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'  Installation  of supbase project via cdn(but  this link does,nt work after pause period )
import { createClient } from "https://esm.sh/@supabase/supabase-js"    // so use this cdn from esm.sh/#docs 
console.log(createClient)

const supURL = "https://ivuahrbcszzybdfeiawd.supabase.co"
const supKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2dWFocmJjc3p6eWJkZmVpYXdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2NjUzMTIsImV4cCI6MjA3ODI0MTMxMn0.V_KwDl63VRyoAKn2fHdY-UpDnONrypF2o_0g7TncaB4"

const supabase = createClient(supURL , supKey )

export default supabase