const urlBase = 'https://ada-api-clase86-default-rtdb.firebaseio.com';

const creatObject = () => {
    const user = document.getElementById('user').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    return { user, email, password }
}
