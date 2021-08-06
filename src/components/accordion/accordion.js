import AccordionItem from '../../components/accordion-item/accordion-item.vue';

export default {
	components: {
    'accordionItem': AccordionItem,
	},
	props: [
		// content{
  //     type: Array,
  //     required: true
  //   },
  //   multiple: {
  //     type: Boolean,
  //     default: false
  //   }
    'content',
    'multiple',
    'extraClasses',
	],
  data () {
    return {
      groupId: null,
    }
  },
  computed: {
  },
  watch: {
  },
  mounted() {
    this.groupId = this.$el.id
  },
  methods: {
  },
}