function myFunction(){
    swal("Welcome to User Portal")
 }

function logout() {
    firebase.auth().signOut()
        .then(() => {
            localStorage.removeItem("UserID")
            window.location = "../../formpage/public/loginadmin.html"
        })
}
