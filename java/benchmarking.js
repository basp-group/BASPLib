/**
 * Author: Dr. Amir Aghabiglou
 */

function copyText(button) {
    const codeElement = button.closest('.code-container').querySelector('pre');
    const textToCopy = codeElement.innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
        console.log('Code copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}


