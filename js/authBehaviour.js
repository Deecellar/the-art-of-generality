export default function isAuthenticated()
{
    return localStorage.getItem("IsAuth") === 'auth';
}