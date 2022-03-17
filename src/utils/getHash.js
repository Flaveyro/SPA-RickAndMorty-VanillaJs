const getHash = () => window.location.hash !== '' ? window.location.hash.split('/')[1].toLocaleLowerCase() || '/' : '/';

// const getHash = () => {

// const hash = window.location.hash;

//     if(hash !== ''){
//         return hash.split('/')[1].toLocaleLowerCase() || '/'
//     } else {
//         console.log('esta en el home');
//         return '/';
        
//     }

// }


export default getHash;