
const signup = async (e)=>{
    e.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
 
 try {
    const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log(result);
    alert(`wellcome ${result.user.email}`)
 } catch (error) {
    console.log(error);
    alert("plz check your password ");
    // alert(error.message);
 
 }
 
 }


const Login = async (e)=>{
   e.preventDefault()
   const email = document.getElementById("login_email").value;
   const password = document.getElementById("login_password").value;
   console.log(email, password);

try {
   const result = await firebase.auth().signInWithEmailAndPassword(email, password);
   console.log(result);
   alert(`user is successfully login ${result.user.email}`)
} catch (error) {
   console.log(error);
   alert(error.message);
}

}


const logout =()=>{
    firebase.auth().signOut()
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log(user);
        }else{
            console.log(`user successfully logout`);
            alert(`user successfully logout`)
        }
    });
}
