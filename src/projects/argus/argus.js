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
      name: 'Argus Dashboard',
      incognitoName: 'Transactions monitoring app',
      bgColor: '#50d1c2',//275788
      platforms: [
        {
          deviceName: 'iPhone7 prototype',
          tabName: 'Prototype',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/argus/video/1.mp4'},
          ],
        },
        {
          deviceName: 'iPhone7',
          tabName: 'iPhone screens',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-1@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-2@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-3@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-4@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-5@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-6@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-7@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-8@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-9@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-10@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-11@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-12@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-13@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-14@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-15@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-16@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-17@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-18@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-19@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-20@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-21@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-22@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-23@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-24@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-25@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-26@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-27@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/argus/ios-iphone/img-28@2x.jpg'},
          ],
        },
      ],
    };
  },
}