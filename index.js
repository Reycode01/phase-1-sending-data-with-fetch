
function submitData(name, email) {
    const formData = {
        name: name,
        email: email
    };

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(response => response.json())
        .then(data => {
            const id = data.id;
            document.body.append(id);
            return data;
        })
        .catch(error => {
            console.error('Error:', error.message);
            document.body.append(error.message);
            return error;
        });
}

submitData("John Doe", "john@example.com");