require('./style/markdown.scss');
require('./style/index.scss');
import marked from 'marked';
// import debounce from 'lodash/debounce';

if (window.localStorage && window.localStorage.markdownDate) {
    const data = window.localStorage.markdownDate;
    setMarkdown(data);
    setInputHeight(data);    
    document
        .getElementById('markdownInput')
        .value = data;
}

document
    .getElementById('markdownInput')
    .addEventListener('keyup', e => {
        const data = e.target.value;
        setMarkdown(data);
        setLocalStorage(data);
        setInputHeight(data);
    });


function setMarkdown(data) {
    document
        .getElementById('markdownContainer')
        .innerHTML = marked(data);
}

function setLocalStorage(data) {
    window.localStorage.markdownDate = data;
}

function setInputHeight(data) {
    const rowNumber = data.split('\n').length;
    const markdownInput = document.getElementById('markdownInput');
    markdownInput.style.height = rowNumber * 22 + 'px';
}