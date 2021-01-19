import AbstractView from '../AbstractView.js';
import { u } from '../githubPages.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Perfil');
        this.addStyles("./css/profile.css");
        
      }

      async getHtml() {
          return await fetch(u("./views/profile.html"))
          .then((response ) => response.text() )
      }
} 