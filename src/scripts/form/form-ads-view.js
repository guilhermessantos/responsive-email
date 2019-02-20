formAdsView = () => (
  `
  <form id="form-banner">
    <div class="form__header">
      <i class="fas fa-bullhorn"></i> Banner
    </div>

    <ul class="form__list">
      <li class="form__field">
        <label class="form__label">Imagem
          <input type="text" name="image" class="form__input">
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
      <li class="form__footer">
        <button class="form__button">Atualizar banner</button>
      </li>
    </ul>
  </form>
  `
)
