const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('../tags', false, /\.json$/)
const tagsRes = requireAll(req)

export default {
  state: {
    tags: tagsRes
  },
  mutations: {
  },
  actions: {
  },
}
