document.querySelectorAll('.form').forEach(form => {
  let inputs = []
    , elements = []
    , links = []
    , input = document.querySelectorAll(`#${form.id} input`)
    , button = document.querySelector(`#${form.id} button`)
    , dataForm = form.getAttribute('data-form')
  ;

  button.addEventListener('click', event => {
    event.preventDefault();

    for(let i = 0; i < input.length; i++) {
      let inputName = input[i].getAttribute('name')
        , inputValue = input[i].value
      ;

      if (inputName == 'url') {
        links[inputName] = document.querySelectorAll(`#article-${dataForm} [data-element="${inputName}"]`)
      }

      inputs[inputName] = inputValue;
      elements[inputName] = document.querySelector(`#article-${dataForm} [data-element="${inputName}"]`);
    }

    links.url.forEach(link => {
      link.href = inputs.url || articlePlaceholder.url;
    });

    elements.title.innerHTML = inputs.title || articlePlaceholder.title;
    elements.title.style.color = inputs.color || articlePlaceholder.color;
    elements.image.src = inputs.image;
    elements.categoryUrl.href = inputs.categoryUrl || articlePlaceholder.categoryUrl;
    elements.excerpt.innerHTML = inputs.excerpt || articlePlaceholder.excerpt;
    elements.category.innerHTML = inputs.category || articlePlaceholder.category;
    elements.category.style.background = inputs.color ||  articlePlaceholder.color;
  });
});
