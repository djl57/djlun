export default {
  firstLevel: state => state.navbar.firstLevel,
  secondLevel: state => state.navbar.secondLevel,
  articleTitle: state => state.navbar.articleTitle,
  curArticle: state => state.navbar.curArticle,
  curBread: state => state.navbar.curBread,
  tags: state => state.tags.tags,
  formTags: state => state.tags.formTags
}