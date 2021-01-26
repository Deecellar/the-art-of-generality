import AbstractView from '../AbstractView.js';
import { u } from '../githubPages.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Galeria');
        this.addStyles("./css/gallery.css");
        
      }

      async getHtml() {
          return await fetch(u("/views/gallery.html"))
          .then((response ) => response.text() )
      }
} 