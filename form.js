   var form = document.getElementById("cmform");
   form.addEventListener("submit", formSubmit);

   function formSubmit(e) {
       e.preventDefault()

       const formData = new FormData();
       formData.append(
           'name',
           document.querySelector('input[name="name"]').value
       )
       formData.append(
           'email',
           document.querySelector('input[name="email"]').value
       )
       formData.append(
        'message',
        document.querySelector('textarea[name="message"]').value
    )

       fetch("https://getform.io/f/c46944dd-06b2-430d-b83a-8a4391276811",
       {
           method: "POST",
           body: formData,
       })
       .then(response => console.log(response))
       .catch(error => console.log(error))
       }

