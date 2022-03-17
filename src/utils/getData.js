const getData = async (url) => {
    try{
        const response = await window.fetch(url);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error)
    }
}

export default getData;