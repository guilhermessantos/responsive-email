articleView = (
    id,
    size = 285,
    placeholder = articlePlaceholder
  ) => (
  `
  <td id="article-${id}" width="${size}" style="max-width: ${size}px">
    <a href="${placeholder.url}" title="${placeholder.title}" class="block mb" data-element="url">
      <img src="${placeholder.image}" alt="${placeholder.title}" data-element="image">
    </a>

    <a href="${placeholder.categoryUrl}" title="${placeholder.category}" class="mb i-block" data-element="categoryUrl">
      <span class="sub-canal" data-element='category' style="background: ${placeholder.color}">${placeholder.category}</span>
    </a>

    <h3>
      <a href="${placeholder.url}" title="${placeholder.title}" data-element="url">
        <span data-element="title" style="color: ${placeholder.color}">${id} ${placeholder.title}</span>
      </a>
    </h3>

    <p data-element="excerpt">
      ${placeholder.excerpt}
    </p>
  </td>
  `
)
