import Link from './Link'

Link.install = function(Vue, options = {}) {
  Vue.component(Link.name, Link)

  Vue.mixin({
    methods: {
      linkClick(to) {
        return options.linkClick !== undefined ? options.linkClick(to) : true
      }
    }
  })
}

export default Link
