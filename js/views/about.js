import AbstractView from '../AbstractView.js';
import { u } from '../githubPages.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Sobre la pagina');
        
      }

      async getHtml() {
          return await fetch(u("/views/about.html"))
          .then((response ) => response.text() )
      }
} 