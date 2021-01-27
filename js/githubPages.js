const PROJECT_TITLE = 'the-art-of-generality';
const isGithub = false; // This is constant and should be modified in case of deployment to github pages
export function u(url) {
    let str = url;
    if(isGithub)
    {
        str = `/${PROJECT_TITLE}${url}`;  
    }
  return str;
}