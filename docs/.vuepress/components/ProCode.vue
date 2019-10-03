<template>
  <div
		:class="{'hover': isHover}"
		class="pro-code"
		@mouseenter="isHover = true"
		@mouseleave="isHover = false"
	>
    <div class="source">
      <slot />
    </div>
    <div class="meta">
      <div class="description" v-if="$slots.description[0].children">
        <slot name="description" />
      </div>
      <div class="language-html">
        <slot name="code" />
      </div>
    </div>
    <div
      :class="{'is-fixed': isFixContorl}"
      ref="control"
			class="control"
      @click="isExpanded = !isExpanded"
		>
      <i :class="[isExpanded ? 'el-icon-caret-top' : 'el-icon-caret-bottom', isHover ? 'is-hover' : '']"></i>
      <transition name="text-slide">
        <span v-show="isHover" :class="{ 'is-hover': isHover }">{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
	name: 'ProCode',
  data() {
    return {
      isHover: false,
      isExpanded: false,
      scrollView: null,
      isFixContorl: false
    }
  },
  computed: {
    controlText() {
      return this.isExpanded ? 'Hide' : 'Expand'
    },
    codeArea() {
      return this.$el.getElementsByClassName('meta')[0]
    },
    codeAreaHeight() {
      const foundDescs = this.$el.getElementsByClassName('description')
      const foundCodes = this.$el.getElementsByClassName('language-html')
      if (foundDescs.length) {
        return (
          foundDescs[0].clientHeight + foundCodes[0].clientHeight + 20
        )
      }
      return foundCodes[0].clientHeight + 20
    }
  },
  watch: {
    isExpanded(val) {
      this.codeArea.style.height = val ? `${this.codeAreaHeight + 1}px` : '0'
      this.$nextTick(() => {
        setTimeout(() => this.handleScroll(), 300)
      })
    }
  },
  mounted() {
    this.scrollView = document.querySelector('html')
    if (this.scrollView && this.scrollView === document.firstElementChild) {
      this.scrollView = window
    }
    if (this.scrollView) {
      this.scrollView.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.handleScroll)
    }
  },
  beforeDestroy() {
    this.scrollView && this.scrollView.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const rect = this.codeArea ? this.codeArea.getBoundingClientRect() : {}
      const { top, bottom, left, width } = rect
      this.isFixContorl =
        bottom + 44 > document.documentElement.clientHeight &&
        top <= document.documentElement.clientHeight
      this.$refs.control.style.left = this.isFixContorl ? `${left}px` : '0'
      this.$refs.control.style.width = this.isFixContorl ? `${width}px` : ''
    }
  }
}
</script>

<style lang="stylus">
:root
	--showColor rgba(232, 237, 250, 0.6)
	--controlHoverColor #2e333e
	@media (prefers-color-scheme: light)
		--controlHoverColor #f9fafc
	@media (prefers-color-scheme: dark)
		--box-shadow  rgba(0, 0, 0, .3)

.pro-code
	position relative
	padding-bottom 44px
	border 1px solid var(--borderColor)
	border-radius 3px
	background var(--codeBgColor)
	transition all 0.2s
	&.hover
		box-shadow 0 3px 8px var(--box-shadow)
	.source
		padding 24px
	.meta
		height 0
		border-top 1px solid var(--borderColor)
		overflow hidden
		transition height 0.2s
		.description
			padding 20px
			margin 10px
			border 1px solid var(--borderColor)
			box-sizing border-box
			background var(--tipBgColor)
			font-size 14px
			line-height 22px
			color var(--textColor)
			word-break break-word
			p
				margin 0
				line-height 26px
			code
				display inline-block
				padding 1px 5px
				margin 0 4px
				height 18px
				border-radius 3px
				background-color var(--miniCodeBgColor)
				font-size 12px
				line-height 18px
				color var(--lighten20TextColor)
	.control
		position absolute
		margin-top -1px
		height 44px
		box-sizing border-box
		border-top 1px solid var(--borderColor)
		border-bottom-left-radius 4px
		border-bottom-right-radius 4px
		background var(--codeBgColor)
		text-align center
		color var(--textColor)
		cursor pointer
		width 100%
		user-select none
		&.is-fixed
			position fixed
			z-index 11
			bottom 0
		&:hover
			background-color var(--controlHoverColor)
			color var(--accentColor)
		> i
			display inline-block
			font-size 16px
			line-height 44px
			transition all 0.3s
			&.is-hover
				transform translateX(-40px)
		> span
		  position absolute
		  display inline-block
		  font-size 14px
		  line-height 44px
		  transform translateX(-30px)
		  transition 0.3s
		& .text-slide-enter,
		& .text-slide-leave-active
			opacity 0
			transform translateX(10px)
</style>
