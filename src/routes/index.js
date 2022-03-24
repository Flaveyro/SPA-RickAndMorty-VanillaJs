import getHash from "@utils/getHash"

import Home from "@containers/Home"
import About from "@containers/About"
import err404 from "@containers/err404"
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
          Layout(Home);
        break;
      case 'main':
          console.log('main')
        break;
      case 'about':
          Layout(About);
      break;
      default:
         Layout(err404);
  }

}

export default router;



