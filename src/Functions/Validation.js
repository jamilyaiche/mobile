export const hasUperCase= (str)=> {
    return /[A-Z]/.test(str)
  }
export  const hasSpecialCaracter= (str)=> {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(str)
  }
export  const  isMail= (str)=> {
    return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(str)
  }