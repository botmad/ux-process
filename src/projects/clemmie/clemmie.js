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
      name: 'Clemmie',
      incognitoName: 'Cloud-hosting stats',
      bgColor: '#f8931f',//171516
      platforms: [
        {
          deviceName: 'iPhone7',
          tabName: 'iPhone screens',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/clemmie/ios-iphone/img-1@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/clemmie/ios-iphone/img-2@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/clemmie/ios-iphone/img-3@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/clemmie/ios-iphone/img-4@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/clemmie/ios-iphone/img-5@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/clemmie/ios-iphone/img-6@2x.jpg'},
          ],
        },
        {
          deviceName: 'googlePixel',
          tabName: 'Android screens',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/clemmie/android-phone/img-1@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/clemmie/android-phone/img-2@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/clemmie/android-phone/img-3@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/clemmie/android-phone/img-4@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/clemmie/android-phone/img-5@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/clemmie/android-phone/img-6@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/clemmie/android-phone/img-7@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/clemmie/android-phone/img-8@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/clemmie/android-phone/img-9@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/clemmie/android-phone/img-10@2x.jpg'},

          ],
        },
      ],
    };
  },
}