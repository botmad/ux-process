
import uxProcessPage from './_pages/ux-process-page/ux-process-page.vue'
import uxProcessStakeholdersPage from './_pages/ux-process-stakeholders-page/ux-process-stakeholders-page.vue'

export default [
	{
		path: '/',
		name: 'stakeholderFacing',
		component: uxProcessStakeholdersPage,
	},
	{
		path: '/designer-reference',
		name: 'designerReference',
		component: uxProcessPage,
	},
];