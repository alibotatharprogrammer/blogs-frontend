const signupvalidator=({name,email,password,confirmpassword})=>{
  const errors={
    name:"",
    email:"",
    password:"",
    confirmpassword:""
  }
  if(!name){
    errors.name="Name is required"
  }
  if(!email){
    errors.email="Email is required"
  }
  if(!password){
    errors.password="Password is required"
  }
  if(confirmpassword!==password){
    errors.confirmpassword="Password does not match"
  }
  return errors;
}
export default signupvalidator;