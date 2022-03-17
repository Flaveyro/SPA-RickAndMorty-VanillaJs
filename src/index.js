import router from "@routes";

import "@styles/main.css";

(function App() {
  // console.log(router)
  // const body = document.getElementsByTagName('body')[0];
  // console.log(Header())
  
  // body.innerHTML = 
  // `${router()}
  
  // `;
  document.addEventListener('DOMContentLoaded', router);

  window.addEventListener('hashchange', router);

  

  
})();