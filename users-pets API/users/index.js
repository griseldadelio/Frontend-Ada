const tableUsers = document.getElementById('users-list');

const creatTable = () => {

    //Traemos los datos 
    fetch(urlBase + '/users.json')
        .then(response => response.json())
        .then(data => {

            const tbody = tableUsers.querySelector('tbody');
            for (prop in data) {

                // Creo todos los elementos
                const user = data[prop];
                const tr = document.createElement('tr');
                const tdName = document.createElement('td');
                const tdEmail = document.createElement('td');
                const tdPassword = document.createElement('td');
                const a = document.createElement('a');

                // Le asigno un link al nombre de usuario
                a.setAttribute('href', 'detail.html?name=' + prop);

                a.innerHTML = user.user;
                tdEmail.innerHTML = user.email;
                tdPassword.innerHTML = user.password;

                // Anidamos 
                tdName.appendChild(a);
                tr.appendChild(tdName);
                tr.appendChild(tdEmail);
                tr.appendChild(tdPassword);
                tbody.appendChild(tr);

                /*
                // boton Delete
                const buttonDelete = document.createElement('button');
                buttonDelete.classList.add('btn');
                buttonDelete.setAttribute('id', 'delete');
                buttonDelete.style.backgroundColor = 'red';
                buttonDelete.innerHTML = '<b> <i class="fa fa-trash" aria-hidden="true"></i>  Delete </b>';
                const td = document.createElement('td');
                td.appendChild(buttonDelete);
                tr.appendChild(td);
                */
            }
        })
        .catch(error => console.log(error))
}
creatTable()

