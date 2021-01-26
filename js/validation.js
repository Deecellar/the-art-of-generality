export default class Validation 
{
    validateText(string,pattern,callback)
    {
        console.log(new RegExp(pattern))
        console.log(new RegExp(pattern).test(string))
        if(string === pattern || new RegExp(pattern).test(string))
        {
            callback.call();
            return true;
        }
        return false;
    }
    
    emailValidation(string, element, classToApply)
    {
        element.remove(classToApply);
        return validateText(string,"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", () => element.classList.add(classToApply) );
    }
    
    passwordStrengthValidation(string, element, lowClass, middleClass, highClass)
    {
        element.classList.remove(lowClass);
        element.classList.remove(middleClass);
        element.classList.remove(highClass);
        let strongRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})";
        let mediumRegex = "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})";
        if(validateText(string, strongRegex, () => element.classList.add(highClass)))
        {
            return 2;
        }
        if(validateText(string, mediumRegex, () => element.classList.add(middleClass)))
        {
            return 1;
        }
        element.classList.add(lowClass);
        return 0;
    }
}
