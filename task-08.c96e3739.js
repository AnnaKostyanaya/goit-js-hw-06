const e=document.querySelector(".login-form");let t={};e.addEventListener("submit",(e=>{e.preventDefault();const{elements:{email:r,password:l}}=e.currentTarget;""===r.value||""===l.value?alert("Всі поля повинні бути заповнені"):(t.email=r.value,t.password=l.value,console.log(t),e.currentTarget.reset())}));
//# sourceMappingURL=task-08.c96e3739.js.map
