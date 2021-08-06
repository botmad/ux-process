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
      name: 'Brochure Webdesign',
      incognitoName: 'Observations of children\'s significant learning',
      bgColor: '#0a0e17',
      platforms: [
        {
          deviceName: 'web',
          tabName: 'Screens',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-1@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-2@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-3@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-4@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-5@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-6@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-7@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-8@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-9@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-10@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-11@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-12@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-13@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-14@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-15@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-16@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-17@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-18@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-19@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-20@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-21@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-22@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-23@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-24@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-25@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-26@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-27@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/webdesign/web/img-28@2x.jpg'},
          ],
        },
      ],
    };
  },
}