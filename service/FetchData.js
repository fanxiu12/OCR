// FetchData.js

const URI = 'http://172.20.10.6:3000';

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
