// const getHash = () => window.location.hash !== '' ? window.location.hash.split('/')[1].toLocaleLowerCase() || '/' : '/';

const getHash = () => {

const hash = window.location.hash;

    if(hash !== ''){
        const result = hash.split('/')[1].toLocaleLowerCase() || '/'
        // console.log(result)
        if(result === 'character'){
            const params = hash.split('/')[3];
            return [result, params]; 
        }
        return [result];
    } else {
        console.log('esta en el home');
        return '/';
        
    }

}


export default getHash;