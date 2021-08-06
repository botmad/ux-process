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
      name: 'Sibcas',
      incognitoName: 'Portacabin managment app',
      bgColor: '#ff8f00', //ff6700 F9C346 083974
      platforms: [
        {
          deviceName: 'googlePixel',
          tabName: 'Android screens',
          screens: [
            // { image: 'https://palmaka.design/folio-db/projects/sibcas/android-phone/img-1@2x.png'},
            // { image: 'https://palmaka.design/folio-db/projects/sibcas/android-phone/img-2@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/sibcas/android-phone/img-3@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/sibcas/android-phone/img-4@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/sibcas/android-phone/img-5@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/sibcas/android-phone/img-6@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/sibcas/android-phone/img-7@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/sibcas/android-phone/img-8@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/sibcas/android-phone/img-9@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/sibcas/android-phone/img-10@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/sibcas/android-phone/img-11@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/sibcas/android-phone/img-12@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/sibcas/android-phone/img-13@2x.png'},
          ],
        },
        {
          deviceName: 'mockups',
          tabName: 'Flows',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/sibcas/process/img-1@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/sibcas/process/img-2@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/sibcas/process/img-3@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/sibcas/process/img-4@2x.png'},
            { image: 'https://palmaka.design/folio-db/projects/sibcas/process/img-5@2x.png'},
          ],
        },
      ],
    };
  },
}