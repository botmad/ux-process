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
      bgColor: '#00affc',//163a75
      platforms: [
        {
          deviceName: 'iPhone7',
          tabName: 'Overview',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/who/onboarding/img-1@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/who/onboarding/img-2@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/who/onboarding/img-3@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/who/onboarding/img-4@2x.png'},
          ],
        },
        {
          deviceName: 'iPhone7 landscape',
          tabName: 'iPhone',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-1@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-2@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-3@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-4@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-5@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-6@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-7@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-8@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-9@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-10@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-11@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-12@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-13@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-14@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-15@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-16@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-17@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-18@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-19@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-20@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-21@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-22@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-23@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-24@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-25@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-26@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-27@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/ios-iphone/img-28@2x.jpg'},
          ],
        },
        {
          deviceName: 'googlePixel landscape',
          tabName: 'Android (Phone)',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/who/android-phone/img-1@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/android-phone/img-2@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/android-phone/img-3@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/android-phone/img-4@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/android-phone/img-5@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/android-phone/img-6@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/who/android-phone/img-7@2x.jpg'},
          ],
        },
      ],
    };
  },
}