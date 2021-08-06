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
      name: 'Hoxton',
      incognitoName: 'Innovative hotel app',
      bgColor: '#405766',//4d8b86 353535
      platforms: [
        // {
        //   deviceName: 'mockups',
        //   tabName: 'Preview',
        //   screens: [
        //     { image: 'https://palmaka.design/folio-db/projects/hoxton/mockups/1@2x.png'},
        //   ],
        // },
        {
          deviceName: 'iPhone7 prototype',
          tabName: 'Prototyping',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/hoxton/prototype/1.mp4'},
          ],
        },
        {
          deviceName: 'iPhone7 rosegold',
          tabName: 'iPhone screens',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-1@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-2@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-3@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-4@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-5@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-6@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-7@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-8@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-9@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-10@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-11@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-12@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-13@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-14@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-15@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-16@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-17@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-18@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-19@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-20@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-21@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-22@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-23@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-24@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-25@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-26@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-27@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-28@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-29@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-30@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-31@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-32@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-33@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/hoxton/ios-iphone/img-34@2x.jpg'},
          ],
        },
      ],
    };
  },
}