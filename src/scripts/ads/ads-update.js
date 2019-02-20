let inputsAds = []
  , elementsAds = []
  , inputAds = document.querySelectorAll('#form-banner input')
;

document.querySelector('#form-banner button').addEventListener('click', event => {
  event.preventDefault();

  for(let i = 0; i < inputAds.length; i++) {
    let inputName = inputAds[i].getAttribute('name')
      , inputValue = inputAds[i].value
    ;

    inputsAds[inputName] = inputValue;
    elementsAds[inputName] = document.querySelector(`#ads [data-element="${inputName}"]`);
  }

  elementsAds.image.src = inputsAds.image || adsPlaceholder.image;
  elementsAds.image.alt = inputsAds.title || adsPlaceholder.title;
  elementsAds.url.title = inputsAds.title || adsPlaceholder.title;
  elementsAds.url.href = inputsAds.url || adsPlaceholder.url;
});
