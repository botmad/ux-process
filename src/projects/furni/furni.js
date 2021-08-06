import ComplexProjectViewer from '../../components/complex-project-viewer/complex-project-viewer.vue';
export default {
	components: {
		'complexProjectViewer': ComplexProjectViewer,
	},
  props: [
    'incognitoMode',
  ],
  data () {
    return {
      name: 'Furni',
      incognitoName: 'Innovative furniture shopping',
      bgColor: '#d25b2f',
      platforms: [
        {
          deviceName: 'iPad prototype',
          tabName: 'Concept exploration',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/furni/prototype/1.mp4'},           
          ],
        },
      ],
    };
  },
}