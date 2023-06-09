// const formData = {
//     dogName: "Billy",
//     dogBreed: "Doberman",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (object) {
//         console.log(object);
//     })
//     .catch(function (error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//       });

function submitData(name = "jacob", email = "blank@email.com") {
    return fetch('http://localhost:3000/users',{
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
            "Accept": "application/json",
        },
        body:JSON.stringify({
            name,
            email
        }),
    })
    .then(response => response.json())
    .then(function(data) {
        const p = document.createElement('p')
        p.innerHTML = data['id']
        document.body.append(p)
    })
    .catch(function(error){
        const div = document.createElement('div')
        div.innerHTML = error
        document.body.append(div)
    });
};