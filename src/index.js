require('./style/markdown.scss');
require('./style/index.scss');
import marked from 'marked';
import debounce from 'lodash/debounce';

if (window.localStorage && window.localStorage.markdownDate) {
    const data = window.localStorage.markdownDate;
    setMarkdown(data);
    document
        .getElementById('markdown-input')
        .value = data;
}

document
    .getElementById('markdown-input')
    .addEventListener('keyup', e => {
        const data = e.target.value;
        setMarkdown(data);
        setLocalStorage(data);
    });


function setMarkdown(data) {
    document
        .getElementById('markdownContainer')
        .innerHTML = marked(data);
}

function setLocalStorage(data) {
    window.localStorage.markdownDate = data;
}