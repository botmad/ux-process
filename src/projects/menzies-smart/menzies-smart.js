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
      name: 'Menzies Aviation',
      incognitoName: 'Aviation auditing app',
      bgColor: '#0090de', //214273
      platforms: [
        // {
        //   deviceName: 'mockups',
        //   tabName: 'Preview',
        //   screens: [
        //     { image: 'https://palmaka.design/folio-db/projects/menzies-smart/mockups/promo-mockup.jpg'},
        //   ],
        // },
        {
          deviceName: 'iPhone7',
          tabName: 'Screens',
          screens: [
            // { image: 'https://palmaka.design/folio-db/projects/menzies-smart/ios-iphone/img-1@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/ios-iphone/img-2@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/ios-iphone/img-3@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/ios-iphone/img-4@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/ios-iphone/img-5@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/ios-iphone/img-6@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/ios-iphone/img-7@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/ios-iphone/img-8@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/ios-iphone/img-9@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/ios-iphone/img-10@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/ios-iphone/img-11@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/ios-iphone/img-12@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/ios-iphone/img-13@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/ios-iphone/img-14@2x.png'},
          ],
        },
        {
          deviceName: 'iPhone7 prototype',
          tabName: 'Promo animation',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/prototype/1.mp4'},
          ],
        },
        {
          deviceName: 'mockups',
          tabName: 'Flows',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/process/img-1@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/process/img-2@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/process/img-3@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/process/img-4@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/process/img-5@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/process/img-6@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/process/img-7@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/process/img-8@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/process/img-9@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/process/img-10@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/process/img-11@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/process/img-12@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/process/img-13@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/process/img-14@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/process/img-15@2x.jpg'},
          ],
        },
        {
          deviceName: 'mockups',
          tabName: 'Printable variation',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/print/img-1@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/print/img-2@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/menzies-smart/print/img-3@2x.jpg'},
          ],
        },
      ],
    };
  },
}