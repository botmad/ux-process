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
      name: 'Breathe',
      incognitoName: 'Cardiac coherence app',
      bgColor: '#010109',//0e1527 020308
      platforms: [
        {
          deviceName: 'iPhone11',
          tabName: 'Screens',
          screens: [
            // { image: 'https://palmaka.design/folio-db/projects/breathe/images/ios-iphone/img-1@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/breathe/ios-iphone/img-2@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/breathe/ios-iphone/img-3@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/breathe/ios-iphone/img-4@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/breathe/ios-iphone/img-5@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/breathe/ios-iphone/img-6@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/breathe/ios-iphone/img-7@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/breathe/ios-iphone/img-8@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/breathe/ios-iphone/img-9@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/breathe/ios-iphone/img-10@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/breathe/ios-iphone/img-11@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/breathe/ios-iphone/img-12@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/breathe/ios-iphone/img-13@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/breathe/ios-iphone/img-14@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/breathe/ios-iphone/img-15@2x.jpg'},
          ],
        },
      ],
    };
  },
}