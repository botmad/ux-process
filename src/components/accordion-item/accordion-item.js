
export default {
	components: {
	},
	props: [
		'item',
    'multiple',
    'groupId'
	],
  data () {
    return {
      moreContentExpanded: false,
      selectedVideo: 0,
    }
  },
  computed: {
  },
  watch: {
  },
  mounted() {
  },
  methods: {
    toggle(event) {
      if (this.multiple) this.item.active = !this.item.active
      else {
        this.$parent.$children.forEach((item, index) => {
          if (item.$el.id === event.currentTarget.parentElement.parentElement.id) item.item.active = !item.item.active
          else item.item.active = false
        }) 
      }
    },
    
    startTransition(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    
    endTransition(el) {
      el.style.height = ''
    },

    showMore(event) {

      if (this.moreContentExpanded) {
        this.moreContentExpanded = false
      } else {
        this.moreContentExpanded = true
      }
    }
  },
}