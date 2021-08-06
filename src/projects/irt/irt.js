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
      name: 'IRT',
      incognitoName: 'Housing energy rating managment',
      bgColor: '#4286f5',//e4eefd
      platforms: [
        {
          deviceName: 'web',
          tabName: 'screens',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-1@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-2@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-3@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-4@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-5@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-6@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-7@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-8@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-9@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-10@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-11@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-12@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-13@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-14@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-15@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-16@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-17@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-18@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-19@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-20@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-21@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-22@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-23@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-24@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-25@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/irt/web/img-26@2x.jpg'},
          ],
        },
      ],
    };
  },
}