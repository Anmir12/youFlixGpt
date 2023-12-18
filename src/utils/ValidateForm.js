export const ValidateForm =(email,password)=>{

    const isEmail=/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);

    const isPassword = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,})$/.test(password);

    if(!isEmail) return "Email is not valid";

    if(!isPassword) return "password is not valid";

    return null;

}

