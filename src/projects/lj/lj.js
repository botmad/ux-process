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
        name: 'Learning Journals',
      incognitoName: 'Observations of children\'s significant learning',
      bgColor: '#FF9800',//66b1d1
      platforms: [
        {
          deviceName: 'iPad',
          tabName: 'Screens',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-1@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-2@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-3@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-4@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-5@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-6@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-7@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-8@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-9@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-10@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-11@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-12@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-13@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-14@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-15@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-16@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-17@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-18@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-19@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-20@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-21@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-22@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-23@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-24@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-25@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-26@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-27@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-28@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-29@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-30@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-31@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-32@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-33@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-34@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-35@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-36@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-37@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-38@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-39@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-40@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-41@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-42@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-43@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-44@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-45@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-46@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-47@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/lj/ios-ipad/img-48@2x.jpg'},            
          ],
        },
      ],
    };
  },
}