fetch("https://api.escuelajs.co/api/v1/users")
    .then(response => response.json()) //Convertir la data a JSON
    .then(data => {
        let fila = '<tr><th>Nombre</th><th>Email</th><th>Password</th><th>Avatar</th></tr>'
        for (let usuario of data) {
            fila += `<tr><td>${usuario.name}</td>
                         <td>${usuario.email}</td>
                        <td>${usuario.password}</td>
                        <td><div class="card mb-2" style="width: 6rem;"><img src="${usuario.avatar}" class="card-img-top" alt="Avatar"></td></tr>`
                        
        }
        document.getElementById("tabla").innerHTML = fila
    })
s