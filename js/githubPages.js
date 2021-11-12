const PROJECT_TITLE = 'the-art-of-generality';
const isGithub = true; // This is constant and should be modified in case of deployment to github pages
export function u(url) {
    let str = url;
    let tmp = "";
    if(isGithub === true) // Redundant
    {
        tmp += PROJECT_TITLE;
        tmp += url;
    }
  return tmp;;
}
