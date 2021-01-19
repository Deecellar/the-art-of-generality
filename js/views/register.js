import AbstractView from '../AbstractView.js';
import { u } from '../githubPages.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Registrarse');
        this.addStyles("./css/register.css");
        
      }

      async getHtml() {
          return await fetch(u("./views/register.html"))
          .then((response ) => response.text() )
      }
} 