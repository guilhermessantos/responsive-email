formView = (id) => (
  `
  <form id="form-${id}" class="form" data-form="${id}">
    <div class="form__header">
      <i class="far fa-newspaper"></i> <span>${id}</span> Artigo
    </div>

    <ul class="form__list">
      <li class="form__field">
        <label class="form__label">Imagem
          <input type="text" name="image" class="form__input">
        </label>
      </li>
      <li class="form__field">
        <label class="form__label">Categoria
          <input type="text" name="category" class="form__input">
        </label>
      </li>
      <li class="form__field">
        <label class="form__label">Link da categoria
          <input type="text" name="categoryUrl" class="form__input">
        </label>
      </li>
      <li class="form__field">
        <label class="form__label">Cor
          <input type="text" name="color" class="form__input">
        </label>
      </li>
      <li class="form__field">
        <label class="form__label">Titulo
          <input type="text" name="title" class="form__input">
        </label>
      </li>
      <li class="form__field">
        <label class="form__label">Link do artigo
          <input type="text" name="url" class="form__input">
        </label>
      </li>
      <li class="form__field">
        <label class="form__label">
          Subtitulo
          <input type="text" name="excerpt" class="form__input">
        </label>
      </li>
      <li class="form__footer">
        <button class="form__button">Atualizar artigo</button>
      </li>
    </ul>
  </form>
  `
)
