import AbstractView from '../AbstractView.js';
import { u } from '../githubPages.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Ingrese');
        this.addStyles("./css/login.css");
        
      }

      async getHtml() {
          return await fetch(u("./views/login.html"))
          .then((response ) => response.text() )
      }
} 