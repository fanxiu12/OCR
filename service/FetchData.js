// FetchData.js

const URI = 'http://10.0.2.2:3000';

export default {
    async fetchUsers() {
        try {
                let response = await fetch(URI + '/users');
                let responseJsonData = await response.json();
                return responseJsonData;
            }
        catch(e) {
            console.log(e)
        }
    }
}
