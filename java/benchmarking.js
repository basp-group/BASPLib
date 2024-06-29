// function copyText() {
//   const codeElement = document.querySelector("pre code");
//   const textToCopy = codeElement.innerText;
//
//   const tempTextArea = document.createElement("textarea");
//   tempTextArea.value = textToCopy;
//   document.body.appendChild(tempTextArea);
//   tempTextArea.select();
//   document.execCommand("copy");
//   document.body.removeChild(tempTextArea);
//
//   // alert("Code copied to clipboard!");
// }

//
//   function copyText(button) {
//   // Find the code block within the parent container
//   var codeContainer = button.parentElement;
//   var code = codeContainer.querySelector('code').innerText;
//
//   // Create a temporary textarea element to copy the text
//   var textarea = document.createElement('textarea');
//   textarea.value = code;
//   document.body.appendChild(textarea);
//
//   // Select and copy the text
//   textarea.select();
//   document.execCommand('copy');
//
//   // Remove the temporary element
//   document.body.removeChild(textarea);
//
//   // Optional: Change the button image to indicate success
//   button.querySelector('img').src = 'images/check.png';
//   setTimeout(() => {
//   button.querySelector('img').src = 'images/copy.png';
// }, 2000);
// }

function copyText(button) {
    const codeElement = button.closest('.code-container').querySelector('pre');
    const textToCopy = codeElement.innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
        console.log('Code copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}


