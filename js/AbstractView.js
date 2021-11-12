import { u } from '../githubPages.js';

export default class {
    constructor(params) {
        this.params = params;
        this.styles = [];
    }

    setTitle(title) {
        document.title = title;
    }

    addStyles(filename) {
        var head = document.head;
        var link = document.createElement("link")

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = u(filename);

        this.styles.push(link);
        head.appendChild(link);
    }

    removeStyles() {
        this.styles.forEach(x => document.head.removeChild(x));
    }


    async getHtml() {
        return "";
    }
}