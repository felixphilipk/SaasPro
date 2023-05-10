
intempt.configure(
    "saas-demo",
    "saas-demo",
    "487687402531205120",
    "e8d6230b68e944a59c650bd7dc7c5fdf.f6ada16dcf8f4e80a0d9da9e3ffe8e6c"
  )

    

        const btn = document.querySelector("[type='submit']")
        btn.addEventListener("click", () => {
        const email = document.querySelector("input[name='email']").value.toString();
        
       
        intempt.recordEvent('login', {
        email: email,
       
      });
        },false)


