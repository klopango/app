var username = $('#txtEmail');
var password = $('#txtPassword');
var btnLogin = $('.btnLogin');
var btnRegister = $('.btnRegister');
var btnLogout = $('.btnLogout');

btnLogin.on('click', function (event) {
	// Get email and pass
	var email = username.val();
	var pass = password.val();
	var auth = firebase.auth();
	// Sign in
	var promise = auth.signInWithEmailAndPassword(email, pass);
	promise.catch(event => swal("Login", event.message, "error"))
	// swal("Login", "success", "success")
})

btnRegister.on('click', function (event) {
	// Get email and pass
	// TODO : CHECK 4 REAL EMAILZ
	var email = username.val();
	var pass = password.val();
	var auth = firebase.auth();
	// Sign in
	var promise = auth.createUserWithEmailAndPassword(email, pass);
	promise.catch(event => swal("Registered", event.message, "error"))
	// swal("Registered", "success", "success")
})

btnLogout.on('click', function (event) {
	firebase.auth().signOut();
	swal("Log Out", "success", "success")
	username.prop("value", "")
	password.prop("value", "")
})

// Add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
	if (firebaseUser) {
		console.log(firebaseUser)
		btnLogout.prop("disabled", false)
	} else {
		console.log('not logged in')
		btnLogout.prop("disabled", true)
	}
});


