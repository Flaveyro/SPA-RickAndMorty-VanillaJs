import getHash from "@utils/getHash"

import Home from "@containers/Home"
import About from "@containers/About"
import Layout from "@layout"


// console.log(Home())
const router = () => {
  const hash = getHash();
  // console.log(hash);
  const body = document.getElementsByTagName('body')[0];  
  // body.innerHTML = `
  // ${Header()}
  // ${About()}
  // ${Footer()}
  // `;
  switch (hash) {
      case '/':
          body.innerHTML = Layout(Home());
        break;
      case 'main':
          console.log('main')
        break;
      case 'about':
          body.innerHTML = Layout(About());
      break;
      default: 
      console.log('404')
  }

}

export default router;



