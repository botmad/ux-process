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
      name: 'Ballachulish Quarry Stories',
      incognitoName: 'Local attraction guide',
      bgColor: '#202020',//141414
      platforms: [
        {
          deviceName: 'iPhone7',
          tabName: 'iPhone screens',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/bsq/ios-iphone/img-1@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/bsq/ios-iphone/img-2@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/bsq/ios-iphone/img-3@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/bsq/ios-iphone/img-4@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/bsq/ios-iphone/img-5@2x.jpg'},
          ],
        },
      ],
    };
  },
}