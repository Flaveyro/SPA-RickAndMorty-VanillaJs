import getHash from "@utils/getHash"

import Home from "@containers/Home"
import About from "@containers/About"
import err404 from "@containers/err404"
import Layout from "@layout"
import Character from "@containers/Character"


const router = () => {
  // console.log(Character)
  const hash = getHash();
  // console.log(hash);
  const body = document.getElementsByTagName('body')[0];  
  // body.innerHTML = `
  // ${Header()}
  // ${About()}
  // ${Footer()}
  // `;
  switch (hash[0]) {
      case '/':
          Layout(Home);
        break;
      case 'character':
          Layout(Character, hash[1])
        break;
      case 'about':
          Layout(About);
      break;
      default:
         Layout(err404);
  }

}

export default router;



