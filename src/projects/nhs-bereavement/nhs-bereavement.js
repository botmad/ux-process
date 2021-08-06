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
      name: 'NHS Bereavement',
      incognitoName: 'Respectfully informing bereaved families',
      bgColor: '#20222e',
      platforms: [
        {
          deviceName: 'iPhone7 prototype',
          tabName: 'wireframe prototype',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/nhs-bereavement/video/2.mp4'},
          ],
        },
        {
          deviceName: 'iPhone7',
          tabName: 'iPhone screens',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/nhs-bereavement/ios-iphone/img-2@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/nhs-bereavement/ios-iphone/img-3@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/nhs-bereavement/ios-iphone/img-4@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/nhs-bereavement/ios-iphone/img-5@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/nhs-bereavement/ios-iphone/img-6@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/nhs-bereavement/ios-iphone/img-7@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/nhs-bereavement/ios-iphone/img-8@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/nhs-bereavement/ios-iphone/img-9@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/nhs-bereavement/ios-iphone/img-10@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/nhs-bereavement/ios-iphone/img-11@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/nhs-bereavement/ios-iphone/img-12@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/nhs-bereavement/ios-iphone/img-13@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/nhs-bereavement/ios-iphone/img-14@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/nhs-bereavement/ios-iphone/img-15@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/nhs-bereavement/ios-iphone/img-16@2x.jpg'},
          ],
        },
        {
          deviceName: 'iPhone7 prototype special-case',
          tabName: 'Prototype',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/nhs-bereavement/video/1.mp4'},
          ],
        },
        {
          deviceName: 'mockups',
          tabName: 'Process snapshots',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/nhs-bereavement/process/img-1.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/nhs-bereavement/process/img-2.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/nhs-bereavement/process/img-3.jpg'},
          ],
        },
      ],
    };
  },
}