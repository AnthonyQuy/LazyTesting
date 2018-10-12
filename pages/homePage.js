module.exports = {
  url: 'http://www.google.com',

  getSearchInput() {
    return '//input[@name="q"]';
  },
  getSearchResultLinkByLabel(label) {
    return `//a[text()="${label}"]`;
  }
};
