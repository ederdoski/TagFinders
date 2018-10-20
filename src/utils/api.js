const BASE_API = 'https://api.microlink.io/?url=';

class Api {
	async getData(url){
		const query = await fetch(`${BASE_API}${url}`);
		const data  = await query.json();
		return data.data;
	}
}

export default new Api();