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
      name: 'Alchemist',
      incognitoName: 'Cocktail bar app loyalty scheme',
      bgColor: '#000000',
      platforms: [
        {
          deviceName: 'iPhone7 prototype jetblack',
          tabName: 'Prototyping',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/alchemist/prototype/1.mp4'},           
          ],
        },
      ],
    };
  },
}