 function isAuthenticated()
{
    return localStorage.getItem("IsAuth") === 'auth';
}
function intervalChange(states, validation, interval, element, callback, params)
{
    console.log("changed");
    window.clearInterval(interval);
    interval = window.setInterval(() => {
    states.forEach(x => element.classList.remove(x));
    validateElement(validation, element, callback, params);
        window.clearInterval(interval);
    }, 300)
}

function validateElement(validation, element, callback, params)
{
    //callback.call(params);
    
    if(validation.validateText(element.textContent,"[^-\\s]", () => element.classList.add("auth-fail")))
        {
            return true;
        }
        else {
            element.classList.add("auth-state");
            return false;
        }
}

export {isAuthenticated,intervalChange,validateElement};