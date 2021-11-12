import { u } from "./githubPages.js";
import about from "./views/about.js";
import gallery from "./views/gallery.js";
import home from "./views/home.js";
import login from "./views/login.js";
import profile from "./views/profile.js";
import register from "./views/register.js";
import resetPassword from "./views/reset.password.js";
import isAuthenticated from "./authBehaviour.js";
import Validation from "./validation.js";
removeAuthBehind();

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};
const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};
const router = async () => {
  const routes = [
    { path: ("/"), view: home },
    { path: ("/gallery"), view: gallery },
    { path: ("/about"), view: about },
    { path: ("/register"), view: register },
    { path: ("/login"), view: login },
    { path: ("/profile"), view: profile },
    { path: ("/reset-password"), view: resetPassword },
  ];
  console.log(location.pathname.split("/"))
  // Test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );
  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));

  document.querySelector("#app").innerHTML = await view.getHtml();
  var arr = document.querySelector("#app").getElementsByTagName("script");
  for (var n = 0; n < arr.length; n++) eval(arr[n].textContent);
  removeAuthBehind();

};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("a") || e.target.matches(".nav-link") || e.target.matches("img")) {
      e.preventDefault();
      navigateTo(e.target.href);
      console.log(e.target.href)
    }
  });

  router();
});

function removeAuthBehind()
{
  let selector = ["auth-on","auth-off"];
  let index = 0;
  if(isAuthenticated()){
    index = 1;
  }

  for(let el of document.getElementsByClassName(selector[index])){
    el.remove();

  }
  for(let el of document.getElementsByClassName(selector[selector.length - index - 1])){
    el.classList.replace(selector[selector.length - index - 1], selector[selector.length - index - 1]+"-visible")

  }

}




// Nav Behaviour
let hamburger = document.getElementById('hamburgerbtn');

let mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', function(){
    mobileMenu.classList.toggle("active");
    console.log("owo");
});
