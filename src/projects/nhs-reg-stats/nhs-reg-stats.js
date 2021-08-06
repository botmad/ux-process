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
      name: 'NHS Regional Stats',
      incognitoName: 'health data by region',
      bgColor: '#266979', //120c13
      platforms: [
        {
          deviceName: 'iPad prototype',
          tabName: 'Concept exploration',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/nhs-reg-stats/prototype/1.mp4'},           
          ],
        },
      ],
    };
  },
}