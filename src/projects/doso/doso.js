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
      name: 'DoSo',
      incognitoName: 'Automated saving & investing app',
      bgColor: '#383641',//322f3a 45bc62
      platforms: [
        {
          deviceName: 'mockups',
          tabName: 'Concept exploration',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/doso/mockups/img-1@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/doso/mockups/img-2@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/doso/mockups/img-3@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/doso/mockups/img-4@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/doso/mockups/img-5@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/doso/mockups/img-6@2x.jpg'},
            
          ],
        },
        {
          deviceName: 'iPhone7 prototype',
          tabName: 'Prototyping',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/doso/prototype/1.mp4'},
          ],
        },
        {
          deviceName: 'iPhone7',
          tabName: 'iPhone screens',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/doso/ios-iphone/img-1@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/doso/ios-iphone/img-2@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/doso/ios-iphone/img-3@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/doso/ios-iphone/img-4@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/doso/ios-iphone/img-5@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/doso/ios-iphone/img-6@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/doso/ios-iphone/img-7@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/doso/ios-iphone/img-8@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/doso/ios-iphone/img-9@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/doso/ios-iphone/img-10@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/doso/ios-iphone/img-11@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/doso/ios-iphone/img-12@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/doso/ios-iphone/img-13@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/doso/ios-iphone/img-14@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/doso/ios-iphone/img-15@2x.jpg'},
          ],
        },
      ],
    };
  },
}