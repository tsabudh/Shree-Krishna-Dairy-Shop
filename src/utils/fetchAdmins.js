import API_ROUTE from '../assets/globals/baseRoute';
export const fetchAdmins = (jwtToken) => {
    return new Promise((resolve, reject) => {
        try {
            let xhttp = new XMLHttpRequest();
            let apiRoute;
            xhttp.onreadystatechange = () => {
                if (xhttp.readyState == 4) {
                    let response = JSON.parse(xhttp.responseText);
                    resolve(response);
                    console.log('message');
                }
            };

            apiRoute = `${API_ROUTE}/api/v1/admins/getAllAdmins`;

            xhttp.open('GET', apiRoute);
            xhttp.setRequestHeader('Authorization', `Bearer ${jwtToken}`);

            xhttp.send();
        } catch (error) {
            console.log(error.message);
        }
    });
};

export default fetchAdmins;
