import AbstractView from '../AbstractView.js';
import { u } from '../githubPages.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Recuperar la contraseña');
        this.addStyles("./css/reset-password.css");
        
      }

      async getHtml() {
          return await fetch(u("./views/reset-password.html"))
          .then((response ) => response.text() )
      }
} 