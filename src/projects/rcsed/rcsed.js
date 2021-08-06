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
      name: 'Royal College of Surgeons of Edinburgh',
      incognitoName: 'Association of surgeons',
      bgColor: '#29a3ae', //b2dae2 //0f1e3c
      platforms: [
        {
          deviceName: 'about',
          tabName: 'About',
          screens: [
            { image: 'https://palmaka.design/folio-db/projects/rcsed/mockups/preview-md@2x.jpg'},
          ],
          processOutline: 'https://palmaka.design/folio-db/projects/rcsed/process/RCSEd-process-outline@2x.png',
          aboutContentTitle: `Supporting medical professionals at every step of their career.`,
          aboutContent: `
### Background
The company I worked for has been contracted by the association of medical professionals to provide an innovative way for individuals to explore resources, guidance, and opportunities that they offer.
My role, as a full-stack designer assigned to the project, was to establish the structure, User Experience and high fidelity definition of the cross-platform Flutter app.

### Process
To understand the challenges faced by the organisation and to ensure that we were outlining an effective solution and a strong return on investment, the team engaged the client in a range of activities. I was participating in or leading the following ones:
- A discovery period
  - Consultation with client's IT and marketing department
  - interviews of stakeholders and people affiliated with the organisation
  - A series of workshops involving some of the key stakeholders
- Design
  - Information Architecture
  - Wireframing
  - Prototyping
  - Hi-fidelity design
- Development
  - Supporting the implementation team through the technicalities of the responsive cross-platform app.

### Result
The association was founded in 1505, making it one of the oldest organisations of the world. The services they offer are instrumental in shaping medical professionals careers. The app consolidates hundreds of years of experience and resources by making content and events easily accessible to settled and provisional members.
          `,
        },
        {
          deviceName: 'googlePixel3',
          tabName: 'Screens',
          screens: [
            // { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-1@2x.jpg'},
            // { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-2@2x.jpg'},
            // { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-3@2x.jpg'},
            // { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-4@2x.jpg'},
            // { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-5@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-6@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-7@2x.jpg'},
            // { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-8@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-9@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-10@2x.jpg'},
            // { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-11@2x.jpg'},
            // { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-12@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-13@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-14@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-15@2x.jpg'},
            // { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-16@2x.jpg'},
            // { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-17@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-18@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-19@2x.jpg'},
            // { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-20@2x.jpg'},
            // { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-21@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-22@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-23@2x.jpg'},
            // { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-24@2x.jpg'},
            // { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-25@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-26@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-27@2x.jpg'},
            // { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-28@2x.jpg'},
            // { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-29@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-30@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-31@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-32@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-33@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-34@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-35@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/IMG-36@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-37@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-38@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-39@2x.jpg'},
            // { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-40@2x.jpg'},
            // { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-41@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-42@2x.jpg'},
            // { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-43@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-44@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-45@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-46@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-47@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-48@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-49@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-50@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-51@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-52@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-53@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-54@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-55@2x.jpg'},
            { image: 'https://palmaka.design/folio-db/projects/rcsed/android-phone/img-56@2x.jpg'},
          ],
        },
      ],
    };
  },
}