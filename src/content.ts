import {googleTranslate} from "./lib/translate";

const textArea: HTMLTextAreaElement = document.querySelector('#prompt-textarea')!;
const submitButton = document.querySelector(
  '#__next > div.overflow-hidden.w-full.h-full.relative.flex.z-0 > div.relative.flex.h-full.max-w-full.flex-1.overflow-hidden > div > main > div.absolute.bottom-0.left-0.w-full.border-t.md\\:border-t-0.dark\\:border-white\\/20.md\\:border-transparent.md\\:dark\\:border-transparent.md\\:bg-vert-light-gradient.bg-white.dark\\:bg-gray-800.md\\:\\!bg-transparent.dark\\:md\\:bg-vert-dark-gradient.pt-2 > form > div > div > button',
);
const form = document.querySelector(
    '#__next > div.overflow-hidden.w-full.h-full.relative.flex.z-0 > div.relative.flex.h-full.max-w-full.flex-1.overflow-hidden > div > main > div.absolute.bottom-0.left-0.w-full.border-t.md\\:border-t-0.dark\\:border-white\\/20.md\\:border-transparent.md\\:dark\\:border-transparent.md\\:bg-vert-light-gradient.bg-white.dark\\:bg-gray-800.md\\:\\!bg-transparent.dark\\:md\\:bg-vert-dark-gradient.pt-2 > form'
)
// @ts-ignore
const cloneSubmitButton = submitButton.cloneNode(true)
// @ts-ignore
cloneSubmitButton.disabled = false

// @ts-ignore
submitButton.style.display = 'none';
// @ts-ignore
submitButton.parentNode.insertBefore(cloneSubmitButton, submitButton);

// @ts-ignore
const translateTextfield= async (event) => {
  event.preventDefault()
  event.stopPropagation()


  textArea.value = await googleTranslate({from: 'ko', to: 'en', word: textArea.value})

  // @ts-ignore
  submitButton.click();
}

// @ts-ignore
cloneSubmitButton.addEventListener('click', translateTextfield);

// @ts-ignore
form.addEventListener('keydown', async function(event) {
  // @ts-ignore
  if (event.key === 'Enter') {
    // @ts-ignore
    if(!event.shiftKey){
      await translateTextfield(event)
    }
  }
});