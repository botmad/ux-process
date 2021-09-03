import Accordion from '../../components/accordion/accordion.vue';

const DiscoverySection = {
    title: 'Discovery',
    description: `
      <p>Requirements & constraints gathering. Understanding the organisation's operations and business goals - what's the big picture that all their users are working towards and how it aligns with the design challenge you're facing on the project.</p>
    `
}
const DiscoverySubSections = [
  {
    id: 1,
    active: false,
    title: `Stakeholder Interview`,
    details: `
      <h6>What is it?</h6>
      <p>A meeting where a UX practitioner is present and given enough time to drive the conversation about the design</p>
      <h6>When to do it?</h6>
      <p>At the beginning of the project</p>
      <h6>What are you getting out of this?</h6>
      <p>Even if key stakeholders had multiple conversations with the sales and engagement team before, they might have not been asked questions a UX practitioner would bring. This may lead to a higher understanding of the problem at hand, settle a single decision-maker, settle ground for further communication and reduce the risk of confirmation bias.</p>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 2,
    active: false,
    title: 'Clarify KPI and Success Criteria',
    details: `
      <h6>What is it?</h6>
      <p>A set of factors that can be measured to determine success after implementaion.</p>
      <h6>When to do it?</h6>
      <p>At the beginning of the project</p>
      <h6>What are you getting out of this?</h6>
      <p>Clear direction. Focusing on the right goals. Saving time by not solving the problems that would not contribute to the business-driving resolution.</p>
    `,
    extraClasses: 'ovp established',
  },
]

const ResearchSection = {
    title: 'Research',
    description: `
      <p>Timeline or budget should not be an excuse for skipping user research. Simple, fast, cheap studies are infinitely better than no studies at all.</p>
    `
}

const ResearchSubSections = [
  {
    id: 1,
    active: false,
    title: 'Concept Statement',
    details: `
      <h6>What is it?</h6>
      <p>A concept statement is a concise summary of the product vision.</p>
      <h6>When to do it?</h6>
      <p>After underestanding the essence of the problem your stakeholders are facing. The concept statement may change upon research findings so it is important to revise it whenever necessary.</p>
      <h6>What are you getting out of this?</h6>
      <p>A concept statement helps in determining the product scope and acts as a guide for deciding on features and use cases.</p>
    `,
    extraClasses: 'ovp mvp new',
  },
  {
    id: 2,
    active: false,
    title: 'Analytics Data Review',
    details: `
      <h6>What is it?</h6>
      <p></p>
      <h6>When to do it?</h6>
      <p></p>
      <h6>What are you getting out of this?</h6>
      <p></p>
    `,
    extraClasses: 'established',
  },
  {
    id: 3,
    active: false,
    title: 'User Interviews',
    details: `
      <h6>What is it?</h6>
      <p></p>
      <h6>When to do it?</h6>
      <p></p>
      <h6>What are you getting out of this?</h6>
      <p></p>
    `,
    extraClasses: 'established',
  },
  {
    id: 4,
    active: false,
    title: 'User Personas',
    details: `
      <h6>What is it?</h6>
      <p></p>
      <h6>When to do it?</h6>
      <p></p>
      <h6>What are you getting out of this?</h6>
      <p></p>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 5,
    active: false,
    title: `Ethnographic Field Studies`,
    details: `
      <h6>What is it?</h6>
      <p></p>
      <h6>When to do it?</h6>
      <p></p>
      <h6>What are you getting out of this?</h6>
      <p></p>
    `,
    extraClasses: 'established',
  },
  {
    id: 6,
    active: false,
    title: 'Surveys',
    details: `
      <h6>What is it?</h6>
      <p></p>
      <h6>When to do it?</h6>
      <p></p>
      <h6>What are you getting out of this?</h6>
      <p></p>
    `,
    extraClasses: 'established',
  },
  {
    id: 7,
    active: false,
    title: 'Competitor Analysis',
    details: `
      <h6>What is it?</h6>
      <p></p>
      <h6>When to do it?</h6>
      <p></p>
      <h6>What are you getting out of this?</h6>
      <p></p>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 8,
    active: false,
    title: 'Empathy Mapping',
    details: `
      <h6>What is it?</h6>
      <p></p>
      <h6>When to do it?</h6>
      <p></p>
      <h6>What are you getting out of this?</h6>
      <p></p>
    `,
    extraClasses: 'ovp mvp new established',
  },
]
const IdeationSection = {
    title: 'Analysis and Ideation',
    description: `
      <p>Ideation is the process of generating a broad set of ideas, with no attempt to judge or evaluate them. Before ideation, always make sure that you and all the participants are solving the right problem. The focus of ideation is quantity instead of quality. There are no bad ideas, crazy is welcomed.</p>
    `
}
const IdeationSubSections = [
  {
    id: 1,
    active: false,
    title: 'Stakeholders Sketching Workshop',
    details: `
      <h6>What is it?</h6>
      <p></p>
      <h6>When to do it?</h6>
      <p></p>
      <h6>What are you getting out of this?</h6>
      <p></p>
    `,
    extraClasses: 'ovp mvp new established',
  },
]
const DefinitionSection = {
    title: 'Define and Devise',
    description: `
      <p>Iterate, review and critique your approach with the team and stakeholders to ensure that the project unveils to everyone's satisfaction.</p>
    `
}
const DefinitionSubSections = [
  {
    id: 1,
    active: false,
    title: 'Context Scenario',
    details: `
      <h6>What is it?</h6>
      <p></p>
      <h6>When to do it?</h6>
      <p></p>
      <h6>What are you getting out of this?</h6>
      <p></p>
    `,
    extraClasses: 'ovp mvp new',
  },
  {
    id: 2,
    active: false,
    title: 'Service blueprint',
    details: `
      <h6>What is it?</h6>
      <p></p>
      <h6>When to do it?</h6>
      <p></p>
      <h6>What are you getting out of this?</h6>
      <p></p>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 3,
    active: false,
    title: 'User Journey Mapping',
    details: `
      <h6>What is it?</h6>
      <p></p>
      <h6>When to do it?</h6>
      <p></p>
      <h6>What are you getting out of this?</h6>
      <p></p>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 4,
    active: false,
    title: 'Card Sorting',
    details: `
      <h6>What is it?</h6>
      <p></p>
      <h6>When to do it?</h6>
      <p></p>
      <h6>What are you getting out of this?</h6>
      <p></p>
    `,
    extraClasses: 'ovp mvp new',
  },
  {
    id: 5,
    active: false,
    title: 'Key Path Scenario',
    details: `
      <h6>What is it?</h6>
      <p></p>
      <h6>When to do it?</h6>
      <p></p>
      <h6>What are you getting out of this?</h6>
      <p></p>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 6,
    active: false,
    title: 'Information Architecture',
    details: `
      <h6>What is it?</h6>
      <p></p>
      <h6>When to do it?</h6>
      <p></p>
      <h6>What are you getting out of this?</h6>
      <p></p>
    `,
    extraClasses: 'ovp mvp new established',
  },
]
const ExecutionSection = {
    title: 'Execute and Measure',
    description: `
      <p>Drive an emphasis on early and rapid iteration with frequent usability input.</p>
    `
}
const ExecutionSubSections = [
  {
    id: 1,
    active: false,
    title: 'Wireflows',
    details: `
      <h6>What is it?</h6>
      <p></p>
      <h6>When to do it?</h6>
      <p></p>
      <h6>What are you getting out of this?</h6>
      <p></p>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 2,
    active: false,
    title: 'Narrowed-down Prototypes',
    details: `
      <h6>What is it?</h6>
      <p></p>
      <h6>When to do it?</h6>
      <p></p>
      <h6>What are you getting out of this?</h6>
      <p></p>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 3,
    active: false,
    title: 'Heuristic Evaluation',
    details: `
      <h6>What is it?</h6>
      <p></p>
      <h6>When to do it?</h6>
      <p></p>
      <h6>What are you getting out of this?</h6>
      <p></p>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 4,
    active: false,
    title: 'Simplified User Testing',
    details: `
      <h6>What is it?</h6>
      <p></p>
      <h6>When to do it?</h6>
      <p></p>
      <h6>What are you getting out of this?</h6>
      <p></p>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 5,
    active: false,
    title: 'A/B Testing',
    details: `
      <h6>What is it?</h6>
      <p></p>
      <h6>When to do it?</h6>
      <p></p>
      <h6>What are you getting out of this?</h6>
      <p></p>
    `,
    extraClasses: 'ovp mvp new established',
  },
]
const DeliverySection = {
    title: 'High Fidelity Finish & Delivery',
    description: `
      <p>Drive an emphasis on early and rapid iteration with frequent usability input. Test as you progress.</p>
    `
}
const DeliverySubSections = [
  {
    id: 1,
    active: false,
    title: 'Hi Fidelity design',
    details: ``,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 2,
    active: false,
    title: 'Accessibility Review',
    details: ``,
    extraClasses: 'ovp new established',
  },
  {
    id: 3,
    active: false,
    title: 'Developer Styleguide',
    details: ``,
    extraClasses: 'ovp mvp new established',
  },
  
]

export default {
  components: {
    'accordion': Accordion,
  },
  data () {
    return {
      discoverySection: DiscoverySection,
      discoverySubSections: DiscoverySubSections,
      researchSection: ResearchSection,
      researchSubSections: ResearchSubSections,
      ideationSection: IdeationSection,
      ideationSubSections: IdeationSubSections,
      definitionSection: DefinitionSection,
      definitionSubSections: DefinitionSubSections,
      executionSection: ExecutionSection,
      executionSubSections: ExecutionSubSections,
      executionSection: ExecutionSection,
      executionSubSections: ExecutionSubSections,
      deliverySection: DeliverySection,
      deliverySubSections: DeliverySubSections,
      selectedProductType: 3,
    };
  },
  computed: {
  },
  watch: {
  },
  mounted() {
  },
  methods: {
    showAll: function (event) {
      var divsToShow = document.getElementsByClassName("accordion-item"); //divsToHide is an array
      for(var i = 0; i < divsToShow.length; i++){
        divsToShow[i].style.display = "initial";
      }
    },
    showProcessesForDesigningANewPlatform: function (event) {
      var divsToHide = document.getElementsByClassName("accordion-item"); //divsToHide is an array
      for(var i = 0; i < divsToHide.length; i++){
          divsToHide[i].style.display = "none";
      }
      var divsToShow = document.getElementsByClassName("new"); //divsToHide is an array
      for(var i = 0; i < divsToShow.length; i++){
        divsToShow[i].style.display = "initial";
      }
    },
    showProcessesForExpandingAnExistingPlatform: function (event) {
      var divsToHide = document.getElementsByClassName("accordion-item"); //divsToHide is an array
      for(var i = 0; i < divsToHide.length; i++){
          divsToHide[i].style.display = "none";
      }
      var divsToShow = document.getElementsByClassName("established"); //divsToHide is an array
      for(var i = 0; i < divsToShow.length; i++){
        divsToShow[i].style.display = "initial";
      }
    }
  },
}