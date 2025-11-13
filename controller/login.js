document.addEventListener('DOMContentLoaded', () => {
    const openlogin=document.getElementById("loginclick");    
    const loginemail=document.getElementById("newsletterEmail");
    const loginpwd = document.getElementById("newsletterpwd");
    const newInner = document.getElementById("inner");

    openlogin.addEventListener('click',() => {
        const login = loginemail.value.trim();
        const pwd = loginpwd.value;
        newInner.textContent=`this is your login gmail- ${login} and password - ${pwd}`;
    })


})