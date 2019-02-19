const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('../tags', false, /\.json$/)
const tagsRes = requireAll(req)

const formReq = require.context('../formTags', false, /\.json$/)
const formTagsRes = requireAll(formReq)

export default {
  state: {
    tags: tagsRes,
    formTags: formTagsRes
  },
  mutations: {
  },
  actions: {
  },
}
