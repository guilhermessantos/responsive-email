articleFooterView = (
    id,
    size = 180,
    placeholder = articleFooterPlaceholder
  ) => (
`
  <tr id="article-${id}">
    <td width="${size}" valign="top">
      <a href="${placeholder.url}" title="${placeholder.title}" data-element="url">
        <img src="${placeholder.image}" alt="${placeholder.title}" data-element="image">
      </a>
    </td>

    <td width="30"></td>

    <td width="390" valign="top">
      <a href="${placeholder.categoryUrl}" title="${placeholder.category}" class="mb i-block" data-element="categoryUrl">
        <span class="sub-canal" data-element="category" style="background: ${placeholder.color}">${placeholder.category}</span>
      </a>

      <h4>
        <a href="${placeholder.url}" title="${placeholder.title}" data-element="url">
          <span data-element="title" style="color: ${placeholder.color}">${id} ${placeholder.title}</span>
        </a>
      </h4>

      <p data-element="excerpt">
        ${placeholder.excerpt}
      </p>
    </td>
  </tr>
  `
)
