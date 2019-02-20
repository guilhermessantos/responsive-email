adsView = (placeholder = adsPlaceholder) => (
  `
  <td id="ads" width="195" valign="top" style="max-width: 195px">
    <a href="${placeholder.url}" title="${placeholder.title}" data-element="url">
      <img src="${placeholder.image}" alt="${placeholder.title}" data-element="image">
    </a>
  </td>
  `
)
