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
    title: 'Industry Terms Glossary',
    details: `
      <h6>Articles</h6>
      <ul>
        <li><a href="https://www.theguardian.com/business/glossary-business-terms-a-z-jargon">Glossary of business terms - A to Z</a></li>
      </ul>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 2,
    active: false,
    title: 'Stakeholder Map',
    details: `
      <p>Stakeholder maps help you understand how all relevant parties (many of whom may not be part of the formal reporting structure) on the chart interact and impact a product or service. Knowing the organisational dynamics are helpful when facilitating design events and prioritising communication.</p>
      <h6>Articles</h6>
      <ul>
        <li><a href="https://www.linkedin.com/pulse/difference-between-org-chart-stakeholder-map-ferry-wiederoder/">The Difference Between an Org Chart and a Stakeholder Map</a></li>
      </ul>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 3,
    active: false,
    title: `Stakeholder Interview`,
    details: `
      <p>Useful list of questions to refer to when you’re starting a new project, compiled by highly experienced Scott Logic designers.</p>

      <h6>Business / Project Focused</h6>
      <ul>
        <li>Who is the client and what do they do?</li>
        <li>Is there any internal knowledge on the client’s domain that might be useful?</li>
        <li>What is their value proposition?</li>
        <li>What is the scope of the project?</li>
        <li>Who are the key stakeholders?</li>
        <li>What is the expected release date/ deadline?</li>
        <li>What assets do the business currently have i.e. images / content / existing designs?</li>
        <li>Does the business have a pre-existing style guide or component library?</li>
        <li>What metrics will be used to measure success? (if they haven’t identified any, it may be good to try and work with them to define their understanding of success)</li>
      </ul>
      <h6>User / Solution Focused</h6>
      <ul>
        <li>Who are the users of this product or service?</li>
        <li>What are the key user problems/stories we are trying to address?</li>
        <li>What solution(s) exists today if any?</li>
        <li>How does the current solution Perform?</li>
        <li>What competitor solutions are there?</li>
        <li>When will there be touch points with the user?</li>
        <li>How will the solutions be validated with the user?</li>
      </ul>
      <h6>Team Focused</h6>
      <ul>
        <li>Who are the current project team? And what are their roles / responsibilities.</li>
        <li>What are the internal business processes? i.e publishing workflow (do they need improving/ are they successful?)</li>
        <li>Is there an identified ways of working?</li>
        <li>Are they new to working with a UX designer? (they may need a lot of hand holding and explanation of the value UX can bring if they have never worked with UX before)</li>
        <li>Have they identified potential risks or where things could go wrong? (what happens if they do go wrong?)

        <li>What is the project vision / goals and objectives?</li>
        <li>What user stories / requirements are we looking to deliver against? (if they don’t exist then we will work with the client to help define them)</li>
        <li>Who are the other external stakeholders and what is their role / responsibilities? I.e branding / other areas of the business</li>
      </ul>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 4,
    active: false,
    title: 'Clarify KPI and Success Criteria',
    details: `
      <p>At the end of the project, calculating the client's return on investment (ROI) will be one of the most effective methods to demonstrate the value of design efforts. The ROI is determined by comparing the Key Performance Metrics (KPI). When starting the project, it is important to know whether the client focuses on specific KPI as it will provide the basis for prioritising your design goals.</p>

      <p>Find out which of these metrics are the most important to the client but be ready to challenge them if you feel that they are not an adequate measurement of the problem that your team is resolving.</p>
      <div class="links">
        <div class="links-section articles">
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.nngroup.com/articles/calculating-roi-design-projects/">Calculating ROI for Design Projects in 4 Steps</a></li>
            <li><a href="https://www.nngroup.com/articles/three-myths-roi-ux/">Three Myths About Calculating the ROI of UX</a></li>
            <li><a href="https://www.uxmatters.com/mt/archives/2012/07/how-to-calculate-the-roi-of-ux-using-metrics.php">How to Calculate the ROI of UX Using Metrics</a></li>
          </ul>
        </div>
        <div class="links-section videos">
          <h6>Short Videos</h6>
          <ul>
            <li><a href="https://www.nngroup.com/videos/ux-benchmarking/">The Benefits of Benchmarking Your Product's UX</a></li>
            <li><a href="https://www.nngroup.com/videos/handle-bad-ux-requests/">Handle Bad UX Requests Without Saying No</a></li>        
          </ul>
        </div>
      </div>
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
    title: 'Research Proposal',
    details: `
      <p>Trying to get a buy-in for UX research from the client can be frustrating. Using the right approach and appropriate support can help you win it.</p>
      <div class="links">
        <div class="links-section articles">
          <h6>Articles</h6>
          <ul>
            <li><a href="https://uxdesign.cc/want-stakeholder-buy-in-present-the-mvr-minimum-viable-research-75556bfa0e2d">Want stakeholder buy-in? Present the MVR (Minimum Viable Research)</a></li>
            <li><a href="https://www.userzoom.com/ux-library/how-to-get-stakeholder-buy-in-for-user-research/">How to get stakeholder buy-in for user research: expert tips</a></li>
            <li><a href="https://www.nngroup.com/articles/discount-usability-20-years/">Discount Usability: 20 Years</a></li>
            <li><a href="https://www.nngroup.com/articles/ux-research-cheat-sheet/">UX Research Cheat Sheet</a></li>
            <li><a href="https://www.nngroup.com/articles/5-ux-workshops/">5 UX Workshops and When to Use Them: A Cheat Sheet</a></li>
            <li><a href="https://www.nngroup.com/articles/which-ux-research-methods/">When to Use Which User-Experience Research Methods</a></li>
          </ul>
        </div>
        <div class="links-section videos">
          <h6>Short Videos</h6>
          <ul>
            <li><a href="https://www.nngroup.com/videos/convincing-companies-ux-accessibility/">Convincing Companies to Do UX and Accessibility</a></li>
            <li><a href="https://www.nngroup.com/videos/creating-ux-roadmap/">Creating a UX Roadmap</a></li>
            <li><a href="https://www.nngroup.com/videos/5-qualitative-research-methods/">5 Qualitative Research Methods</a></li>
            <li><a href="https://www.nngroup.com/videos/when-use-which-ux-research-method/">When to Use Which UX Research Method</a></li>
          </ul>
        </div>
      </div>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 2,
    active: false,
    title: 'Competitor Analysis',
    details: `
      <p>Data on what works well or poorly on other sites saves you from implementing useless features and guides UX investments to features that your users need. A competitive analysis is a way to collect and compare data about products in the marketplace. It is often good initial research activity for a project allowing you to take an in-depth look at how others solve the same design problems. It can help determine the direction of a design or the need for the development of a feature. In the more advanced stage of the design process, competitive evaluations let you assess if your design is better or worse than your competitors.</p>
      <h6>Articles</h6>
      <ul>
        <li><a href="https://www.nngroup.com/articles/competitive-usability-evaluations/">Competitive Usability Evaluations: Learning from Your Competition</a></li>
        <li><a href="https://uxplanet.org/top-things-to-know-about-ux-competitive-analysis-d91689fd8b36">Top Things to Know About UX Competitive Analysis</a></li>
        <li><a href="https://medium.com/user-research/competitive-analysis-b02daf26a96e">Competitive Analysis</a></li>
      </ul>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 3,
    active: false,
    title: `Ethnographic Field Studies`,
    details: `
      <p>Field research is conducted in the user’s context and location. Learn the unexpected by leaving the office and observing people in their natural environment.</p>
      <div class="links">
        <div class="links-section articles">
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.nngroup.com/articles/field-studies/">Field Studies</a></li>
            <li><a href="https://www.nngroup.com/articles/field-studies-done-right-fast-and-observational/">Field Studies Done Right: Fast and Observational</a></li>
            <li><a href="https://www.nngroup.com/articles/tips-user-research-field/?lm=field-studies&pt=article">27 Tips and Tricks for Conducting Successful User Research in the Field</a></li>
          </ul>
        </div>
        <div class="links-section videos">
          <h6>Short Videos</h6>
          <ul>
            <li><a href="https://www.nngroup.com/videos/4-steps-field-studies/">4 Steps to Field Studies with Users</a></li>
            <li><a href="https://www.nngroup.com/videos/remote-field-studies/">Doing Field Studies Remotely</a></li>
          </ul>
        </div>
      </div>
    `,
    extraClasses: 'established',
  },
  {
    id: 4,
    active: false,
    title: 'User Interviews',
    details: `
      <p>Despite many weaknesses, interviews are a valuable method for exploratory user research. Interviews give insights into what users think about a site, an application, a product, or a process. They can point out what site content is memorable, what people feel is important on the site, and what ideas for improvement they may have.</p>
      <div class="links">
        <div class="links-section articles">  
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.nngroup.com/articles/user-interviews/">User Interviews: How, When, and Why to Conduct Them</a></li>
            <li><a href="https://www.nngroup.com/articles/why-user-interviews-fail/">Why User Interviews Fail</a></li>
          </ul>
        </div>
        <div class="links-section videos">
          <h6>Short Videos</h6>
          <ul>
            <li><a href="https://www.nngroup.com/videos/3-types-user-interviews/">The 3 Types of User Interviews: Structured, Semi-Structured, and Unstructured</a></li>
            <li><a href="https://www.nngroup.com/videos/intentional-silence-moderation-technique/">Intentional Silence as a Moderation Technique</a></li>
          </ul>
        </div>
      </div>
    `,
    extraClasses: 'established',
  },
  {
    id: 5,
    active: false,
    title: 'Sales Team Interviews',
    details: `
      <p>While feedback from users should be the holy grail of user research, in reality, companies will not always provide designers with access to their specialised user groups. A handy workaround pointed out to me by <a href="https://www.linkedin.com/in/chloemsanderson/">Chloe Anderson</a> is interviewing the Salesperson - they are usually much easier to reach often they can have very close relationships with users.</p>
    `
  },
  {
    id: 6,
    active: false,
    title: 'Surveys',
    details: `
      <p>Quantitative surveys ask questions that can be answered by checkbox or radio button, and when you want to be sure your data is broadly applicable to a large number of people. Qualitative surveys ask open-ended questions to generate useful information via a conversation rather than a vote, such as when you’re not sure what the right set of answers might include.</p>
      <div class="links">
        <div class="links-section articles">    
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.nngroup.com/articles/qualitative-surveys/">28 Tips for Creating Great Qualitative Surveys</a></li>
            <li><a href="https://www.nngroup.com/articles/keep-online-surveys-short/">https://www.nngroup.com/articles/keep-online-surveys-short/</a></li>
          </ul>
        </div>
        <div class="links-section videos">
          <h6>Short Videos</h6>
          <ul>
            <li><a href="https://www.nngroup.com/videos/survey-response-biases/">Survey Response Biases in User Research</a></li>
          </ul>
        </div>
      </div>
    `,
    extraClasses: 'established',
  },
  {
    id: 7,
    active: false,
    title: 'Analytics Data Review',
    details: `
      <p>Google Analytics is filled with very useful information for UX Strategists defining a baseline and tracking trends in order to define goals, strategies, and concepts for a brighter tomorrow. These metrics tell you what customers are doing, but not why they are doing it. Pairing analytics and user research will provide you with clearer answers.</p>
      <div class="links">
        <div class="links-section articles">
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.nngroup.com/articles/analytics-reports-ux-strategists/">Five Essential Analytics Reports for UX Strategists</a></li>
            <li><a href="https://www.nngroup.com/articles/vanity-metrics/">Vanity Metrics: Add Context to Add Meaning</a></li>
          </ul>
        </div>
        <div class="links-section videos">
          <h6>Short Videos</h6>
          <ul>
            <li><a href="https://www.nngroup.com/videos/turning-analytics-findings-usability-studies/">Turning Analytics Findings Into Usability Studies</a></li>
            <li><a href="https://www.nngroup.com/videos/analytics-vs-quantitative-usability-testing/">Analytics vs. Quantitative Usability Testing</a></li>
            <li><a href="https://www.nngroup.com/videos/analytics-what-do-numbers-really-mean/">In Analytics, What do the Numbers Really Mean?</a></li>
            <li><a href="https://www.nngroup.com/videos/vanity-metrics-analytics/">Vanity Metrics in Analytics</a></li>
          </ul>
        </div>
      </div>
    `,
    extraClasses: 'established',
  },
  {
    id: 8,
    active: false,
    title: 'Empathy Mapping',
    details: `
      <p>In order to advocate on behalf of the user, not only must we deeply understand our users, but we must also help our colleagues understand them and prioritise their needs. An empathy map is a tool used to articulate what we know about a particular type of user by visualising their attitudes and behaviours.</p>
      <div class="links">
        <div class="links-section articles">
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.nngroup.com/articles/empathy-mapping/">Empathy Mapping: The First Step in Design Thinking</a></li>
            <li><a href="https://www.nngroup.com/articles/sympathy-vs-empathy-ux/">Sympathy vs. Empathy in UX</a></li>
          </ul>
        </div>
        <div class="links-section videos">
          <h6>Short Videos</h6>
          <ul>
            <li><a href="https://www.nngroup.com/videos/empathy-map/">How to Empathy Map</a></li>
            <li><a href="https://www.nngroup.com/videos/ux-professionals-most-important-skill/">Most Important Skill Required for UX Professionals</a></li>
          </ul>
        </div>
      </div>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 9,
    active: false,
    title: 'User Personas',
    details: `
      <p>Personas are representations of a cluster of users with similar behaviors, goals, and motivations. As such, personas are fictional, yet still realistic because they embody the characteristics and behaviors of actual people. Personas are used to communicate information about users and create a common ground among different team members by unifying their views and understanding of target users.</p>

      <p>Personas can humanize complex data and help give UX design teams a consistent focus and design target. When based on user research, personas support user-centered design throughout a project’s lifecycle by making characteristics of key user segments more salient.</p>
      <div class="links">
        <div class="links-section articles">
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.nngroup.com/articles/persona-budgets/">How Much Time Does It Take to Create Personas?</a></li>
            <li><a href="https://www.nngroup.com/articles/persona-scope/">Just-Right Personas: How to Choose the Scope of Your Personas</a></li>
            <li><a href="https://www.nngroup.com/articles/why-personas-fail/">Why Personas Fail</a></li>
          </ul>
        </div>
        <div class="links-section videos">
          <h6>Short Videos</h6>
          <ul>
            <li><a href="https://www.nngroup.com/videos/personas/">What Are Personas and Why Should I Care?</a></li>
            <li><a href="https://www.nngroup.com/videos/why-personas-fail/">Why Personas Fail</a></li>
            <li><a href="https://www.nngroup.com/videos/bringing-personas-agile/">Bringing Personas to Agile/a></li>
            <li><a href="https://www.nngroup.com/videos/jobs-be-done-vs-personas/">Jobs-to-Be-Done vs. Personas</a></li>
          </ul>
        </div>
      </div>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 10,
    active: false,
    title: 'User Stories',
    details: `
      <p>A user story is a short statement or abstract that identifies the user and their need/goal. It determines who the user is, what they need and why they need it. For example: “As a UX Manager, John oversees all the design projects, including assets creation and prototyping efforts, at the design consultancy where he works. He needs easy access to a design tool that allows him to centralise UI libraries so that multiple designers to work simultaneously on a prototype.”</p>

      <p>How to write a user story:</p>

      <ul>
        <li>“As a [role], I want [feature] because [reason].”</li>
        <li>“As UX Manager, John wants centralised assets management so that his designers are in sync.”</li>
      </ul>

      <h6>Articles</h6>
      <ul>
        <li><a href="https://www.nngroup.com/articles/ux-stories/">UX Stories Communicate Designs</a></li>
      </ul>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 11,
    active: false,
    title: 'Stakeholder Review',
    details: `
      <p>To make UX research more efficient and effective, get everyone involved. When teams understand user concerns and usability issues, they become better at preventing problems. Having an audience for your research is a wonderful opportunity for UX practitioners to gain allies and get buy-in for problems that need to be solved. Stakeholder participation in both research and design is best, because you can show the value of UX activities and get the whole team focused on the people you are trying to serve.</p>
      <h6>Articles</h6>
      <ul>
        <li><a href="https://www.nngroup.com/articles/collaborating-stakeholders/">How to Collaborate with Stakeholders in UX Research</a></li>
      </ul>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 12,
    active: false,
    title: 'Concept Statement',
    details: `
      <p>A concept statement is a concise summary of the product vision. It's important to define a concept statement as it helps in determining the product scope and acts as a guide for deciding on features and use cases.</p>
      <h6>Concept statement should include</h6>
      <ul>
        <li>Proposed product name/li>
        <li>Target users</li>
        <li>A one-line description of the product</li>
        <li>What problem(s) the product will solve</li>
      </ul>
    `,
    extraClasses: 'ovp mvp new',
  },
]
const IdeationSection = {
    title: 'Ideation',
    description: `
      <p>Ideation is the process of generating a broad set of ideas, with no attempt to judge or evaluate them. Before ideation, always make sure that you and all the participants are solving the right problem. The focus of ideation is quantity instead of quality. There are no bad ideas, crazy is welcomed.</p>
    `
}
const IdeationSubSections = [
  {
    id: 1,
    active: false,
    title: 'Brainstorming',
    details: `
      <p>During a Brainstorm session, you leverage the synergy of the group to reach new ideas by building on others’ ideas. It encourages people to come up with thoughts and ideas that can seem a bit off. Ideas are blended to create one good idea as indicated by the slogan “1+1=3”. Participants should be able to discuss their ideas freely without fear of criticism. You should create an environment where all participants embrace wild ideas and misunderstanding, and which will allow you to reach further than you could by simply thinking logically about a problem.</p>
      <div class="links">
        <div class="links-section articles">
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.nngroup.com/articles/ux-ideation/">Ideation for Everyday Design Challenges</a></li>
            <li><a href="https://uxdesign.cc/brainstorm-79e51f20f313">3 Proven Methods to Organize a Brainstorming Session</a></li>
            <li><a href="https://www.interaction-design.org/literature/article/introduction-to-the-essential-ideation-techniques-which-are-the-heart-of-design-thinking">Introduction to the Essential Ideation Techniques which are the Heart of Design Thinking</a></li>
            <li><a href="https://www.justinmind.com/blog/8-ux-ideation-techniques-to-try-out/">8 UX ideation techniques to try out</a></li>
            <li><a href="https://www.nngroup.com/articles/facilitating-design-studio-workshop/">Facilitating an Effective Design Studio Workshop</a></li>
            <li><a href="https://www.nngroup.com/videos/beating-creative-blocks-reframing/">Beating Creative Blocks in UX Design Through Reframing</a></li>
          </ul>
        </div>
        <div class="links-section videos">
          <h6>Short Videos</h6>
          <ul>
            <li><a href="https://www.nngroup.com/videos/prioritize-ideas-ux-brainstorming/">How to Prioritize Ideas from UX Brainstorming Sessions</a></li>
          </ul>
        </div>
      </div>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 2,
    active: false,
    title: 'Storyboard',
    details: `
      <p>Visual representations of UX stories capture attention, provide clarity, and inspire us to take action. Storyboards can help internal audiences empathise with users and buy into your design goals. Well-crafted stories build insight and focus on users and their needs.</p>

      <p>Storyboarding may also be used as a nonlinear brainstorming technique that involves developing a visual story related to a problem. It helps participants explore the problem in depth and come up with potential solutions through bringing the narrative to life.</p>
      <div class="links">
        <div class="links-section articles">
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.nngroup.com/articles/storyboards-visualize-ideas/">Storyboards Help Visualize UX Ideas</a></li>
            <li><a href="https://www.nngroup.com/articles/ux-stories/">UX Stories Communicate Designs</a></li>
          </ul>
        </div>
        <div class="links-section videos">
          <h6>Short Videos</h6>
          <ul>
            <li><a href="https://www.nngroup.com/videos/ux-storyboard/">How to Create a UX Storyboard</a></li>
          </ul>
        </div>
      </div>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 3,
    active: false,
    title: 'Sketching Excercise',
    details: `
      <p>You can sketch the product flow and features. Avoid getting into details at this stage. Note that this is neither a wireframe nor a prototype. Sketch out ideas and brainstorm them with your peers. Iterate on the process until you feel confident to move on with wireframes.</p>

      <p>Sketching exercise is the most effective if it's done collaboratively. When assembling your team, try to include non-designers.
      <p>Develop, share and exchange ideas and categorise them according to product and business needs. Mix and match ideas and iterate on the process.</p>
      <h6>Short Videos</h6>
      <ul>
        <li><a href="https://www.nngroup.com/videos/stakeholder-sketching/">How to Get Stakeholders to Sketch: A Magic Formula</a></li>
        <li><a href="https://www.nngroup.com/videos/pencils-vs-pixels/">https://www.nngroup.com/videos/pencils-vs-pixels/</a></li>
      </ul>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 4,
    active: false,
    title: 'Evaluating Outcomes',
    details: `
      <p>Methods range from using affinity diagrams to cluster ideas, to having each proposed design critiqued by the group, to taking a “vote” on the different suggestions. This process will help you understand the various goals and benefits of each idea, and which concepts resonate with the group when the time comes to move on to the prototyping stage. Keep in mind that you needn’t choose a single design — prototype the top three ideas (or combinations of several ideas) to test and discover which is the best concept.</p>
    `
  },
]
const DefinitionSection = {
    title: 'Definition',
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
      <p>Personas driven contextual story map. Context scenario focuses on key actions that a persona will take while using the product. Its purpose is to map out the big picture rather than describing interactions in detail. Context scenarios should be broad and relatively shallow in scope. The focus should be on the behaviors of the user and the system.</p>
      <ul>
        <li>Focus on the goals and state only what the user wants to accomplish from the product. The narrative should be entirely textual. No need for sketches or wireframes at this stage.</li>
        <li>The focus should be on the behaviors of the user and the system.</li>
        <li>Create multiple scenarios for different persona types in different contexts.</li>
        <li>Analyze the scenarios to extract the persona's needs or requirements.</li>
      </ul>
      <div class="links">
        <div class="links-section articles">
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.usability.gov/how-to-and-tools/methods/scenarios.html">Scenarios</a></li>
          </ul>
        </div>
        <div class="links-section videos">
          <h6>Short Videos</h6>
          <ul>
            <li><a href="https://www.nngroup.com/videos/scenario-mapping/">Scenario Mapping for Design Exploration</a></li>
          </ul>
        </div>
      </div>
    `,
    extraClasses: 'ovp mvp new',
  },
  {
    id: 2,
    active: false,
    title: 'Service blueprint',
    details: `
      <p>Service blueprints visualize organizational processes in order to optimize how a business delivers a user experience. It is a diagram that shows the relationships between different service components — people, props (physical or digital evidence), and processes — that are directly tied to touchpoints in a specific customer journey./p>
      <h6>Articles</h6>
      <ul>
        <li><a href="https://www.nngroup.com/articles/service-blueprints-definition/">Service Blueprints: Definition</a></li>
      </ul>
      <div class="links">
        <div class="links-section articles">
          <h6>Short Videos</h6>
          <ul>
            <li><a href="https://www.nngroup.com/videos/5-steps-service-blueprinting/">The 5 Steps to Service Blueprinting</a></li>
            <li><a href="https://www.nngroup.com/videos/4-key-components-service-blueprints/">4 Key Components of Service Blueprints</a></li>
            <li><a href="https://www.nngroup.com/videos/service-blueprints-when-why/">When and Why UX Practitioners Use Service Blueprints</a></li>
            <li><a href="https://www.nngroup.com/videos/service-blueprinting-faq/">Service Blueprinting FAQ</a></li>
          </ul>
        </div>
      </div>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 3,
    active: false,
    title: 'User Journey Mapping',
    details: `
      <p>A journey map is a visualisation of the process that a person goes through in order to accomplish a goal. In its most basic form it's an actions timeline that is often is fleshed out with user thoughts and emotions in order to create a narrative.</p>
      <div class="links">
        <div class="links-section articles">
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.nngroup.com/articles/journey-mapping-101/">Journey Mapping 101</a></li>
            <li><a href="https://www.nngroup.com/articles/customer-journey-mapping/">When and How to Create Customer Journey Maps</a></li>
            <li><a href="https://www.nngroup.com/articles/journey-mapping-faq/">Journey Mapping: 9 Frequently Asked Questions</a></li>
          </ul>
        </div>
        <div class="links-section videos">
          <h6>Short Videos</h6>
          <ul>
            <li><a href="https://www.nngroup.com/videos/journey-mapping-decisions/">Journey Mapping: 2 Decisions to Make Before You Begin</a></li>
            <li><a href="https://www.nngroup.com/videos/research-journey-mapping/">How to Conduct Research for Customer Journey Mapping</a></li>
            <li><a href="https://www.nngroup.com/videos/customer-journey-mapping-steps/">The 5 Steps to Customer Journey Mapping</a></li>
            <li><a href="https://www.nngroup.com/videos/journey-mapping-101/">Customer Journey Mapping 101</a></li>
          </ul>
        </div>
      </div>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 4,
    active: false,
    title: 'Key Path Scenario',
    details: `
      <p>Key Path Scenario is an In-depth user journey map that describes the persona’s interaction with the product. The focus is on describing how the persona will achieve the task by interacting with various interface elements of the product. This phase is focused on devising solutions and delivering high-level specifications for product’s fundamental forms and behaviours.</p>
      <ul>
        <li>Begin with context scenario and start grouping functionalities based on the task flow outlined in the context scenario.</li>
        <li>Draw a rough wireframe for each view and its component elements.</li>
        <li>Identify the major interaction elements for each view.</li>
        <li>Define relationships between the views and keep focus on the persona’s goal.</li>
        <li>Trim any unnecessary tasks and actions that deviate from the goal.</li>
        <li>Iterate the process to refine the flow and interaction elements.</li>
      </ul>

      <h6>Articles</h6>
      <ul>
        <li><a href="https://www.slideshare.net/mobile/ebacon/scenarios-for-design-interaction10-workshop-by-elizabeth-bacon">Scenarios For Design: Interaction10 Workshop by Elizabeth Bacon</a></li>
      </ul>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 5,
    active: false,
    title: 'Card Sorting',
    details: `
      <p>Card sorting is a research tool used to assess or determine the way information is grouped, labelled, and organised within a site by allowing users to sort content topics into categories that make sense to them.</p>
      <p>Too often, content is structured based on what makes sense to the company, not to the users.</p>
      <div class="links">
        <div class="links-section articles">
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.nngroup.com/articles/card-sorting-definition/">Card Sorting: Uncover Users' Mental Models for Better Information Architecture</a></li>
            <li><a href="https://www.nngroup.com/articles/card-sorting-terminology-matches/">Card Sorting: Pushing Users Beyond Terminology Matches</a></li>
            <li><a href="https://careerfoundry.com/en/blog/ux-design/what-is-card-sorting/#3-types-of-card-sorting">What Is Card Sorting In UX Design? A Beginner’s Guide</a></li>
          </ul>
        </div>
        <div class="links-section videos">
          <h6>Short Videos</h6>
          <ul>
            <li><a href="https://www.nngroup.com/videos/card-sorting-organize-product-offerings/">Card Sorting: How to Best Organize Product Offerings</a></li>
            <li><a href="https://www.nngroup.com/videos/open-vs-closed-card-sorting/">Open vs. Closed Card Sorting</a></li>
            <li><a href="https://www.nngroup.com/videos/bias-card-sorting/">How to Avoid Bias in Card Sorting</a></li>
            <li><a href="https://www.nngroup.com/videos/tree-testing/">Tree Testing to Evaluate Information Architecture Categories</a></li>
          </ul>
        </div>
      </div>
    `,
    extraClasses: 'ovp mvp new',
  },
  {
    id: 6,
    active: false,
    title: 'Information Architecture',
    details: `
      <p>Information architecture (IA) is much more than just a sitemap to show what page leads where. It is a visual representation of the product’s infrastructure, features, and hierarchy. The level of detail is up to the designer and team's needs, so IA may also include precisely mapped flows for every interaction and behaviour inside the application.</p>

      <p>With IA available, it becomes significantly easier to make key decisions for new features and implementations and to understand timelines for product changes.</p>

      <p>A detailed IA may often be used to enable backend developers to start working on the database schema and API architecture before the UI designs are completed.</p>
      <div class="links">
        <div class="links-section articles">
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.toptal.com/designers/ia/guide-to-information-architecture">The Comprehensive Guide to Information Architecture</a></li>
            <li><a href="https://www.nngroup.com/articles/top-10-ia-mistakes/">Top 10 Information Architecture (IA) Mistakes</a></li>
          </ul>
        </div>
        <div class="links-section videos">
          <h6>Short Videos</h6>
          <ul>
            <li><a href="https://www.nngroup.com/videos/tree-testing/">Tree Testing to Evaluate Information Architecture Categories</a></li>
          </ul>
        </div>
      </div>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 7,
    active: false,
    title: 'Critique Session',
    details: `
      <p></p>
      <div class="links">
        <div class="links-section articles">
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.nngroup.com/articles/ux-expert-reviews/">UX Expert Reviews</a></li>
          </ul>
        </div>
        <div class="links-section videos">
          <h6>Short Videos</h6>
          <ul>
            <li><a href="https://www.nngroup.com/videos/opinions-expert-design-review/">Keep Your Opinions out of an Expert Design Review</a></li>
          </ul>
        </div>
      </div>
    `,
    extraClasses: 'ovp mvp new established',
  },
]
const ExecutionSection = {
    title: 'Execution',
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
      <p>Wireflows are a combination of wireframes and flowcharts. They can document workflow and screen designs when there are few pages that change dynamically.</p>
      <h6>Articles</h6>
      <ul>
        <li><a href="https://www.nngroup.com/articles/wireflows/">Wireflows: A UX Deliverable for Workflows and Apps</a></li>
      </ul>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 2,
    active: false,
    title: 'Narrowed-down Prototypes',
    details: `
      <p>Using a narrowed-down in scope prototype, you can self-test, and more importantly user test early design ideas at an extremely low cost. Doing so lets you fix usability problems before wasting money implementing something that doesn't work.</p>
      <div class="links">
        <div class="links-section articles">
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.nngroup.com/articles/paper-prototyping/">Paper Prototyping: Getting User Data Before You Code</a></li>
            <li><a href="https://www.nngroup.com/articles/ux-prototype-hi-lo-fidelity/">UX Prototypes: Low Fidelity vs. High Fidelity</a></li>
            <li><a href="https://www.nngroup.com/articles/mozilla-paper-prototype/">Test Paper Prototypes to Save Time and Money: The Mozilla Case Study</a></li>
            <li><a href="https://www.nngroup.com/articles/ia-view-prototype/">IA-Based View of Prototype Fidelity</a></li>
          </ul>
        </div>
        <div class="links-section videos">
          <h6>Short Videos</h6>
          <ul>
            <li><a href="https://www.nngroup.com/videos/prototypes-vs-wireframes-ux-projects/">Prototypes vs Wireframes in UX Projects</a></li>
            <li><a href="https://www.nngroup.com/videos/paper-prototyping-101/">Paper Prototyping 101/a></li>
            <li><a href="https://www.nngroup.com/videos/just-enough-prototypes/">Just-Enough Prototypes Make Communicating Specs More Successful</a></li>
            <li><a href="https://www.nngroup.com/videos/low-fi-prototypes-stakeholders/">Presenting Low-Fidelity Prototypes to Stakeholders</a></li>
          </ul>
        </div>
      </div>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 3,
    active: false,
    title: 'Simplified User Testing',
    details: `
      <p>In an ideal world there would be no excuse for not performing usability studies. They’re fast, cheap, and very convincing. Test with representative customers using realistic task, then be amazed by what you observe. UX researchers use this popular observational methodology to uncover problems and opportunities in designs.</p>

      <p>Even with a paper prototype, you can user test early design ideas at an extremely low cost. Doing so lets you fix usability problems before you waste money implementing something that doesn't work.</p>
      <div class="links">
        <div class="links-section articles">
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.nngroup.com/articles/how-many-test-users/">How Many Test Users in a Usability Study?</a></li>
            <li><a href="https://www.nngroup.com/articles/authentic-behavior-in-user-testing/">Authentic Behavior in User Testing</a></li>
            <li><a href="https://www.nngroup.com/articles/testing-expert-users/">Testing Expert Users</a></li>
            <li><a href="https://www.nngroup.com/articles/stakeholders-and-user-testing/">Involving Stakeholders in User Testing</a></li>
            <li><a href="https://www.nngroup.com/articles/cost-of-user-testing-a-website/">Cost of User Testing a Website</a></li>
          </ul>
        </div>
        <div class="links-section videos">
          <h6>Short Videos</h6>
          <ul>
            <li><a href="https://www.nngroup.com/videos/user-testing-jakob-nielsen/">User Testing: Why & How (Jakob Nielsen)</a></li>
            <li><a href="https://www.nngroup.com/videos/user-testing-facilitation-techniques/">User Testing Facilitation Techniques</a></li>
            <li><a href="https://www.nngroup.com/videos/remote-usability-test-part-1/">Running a Remote Usability Test, Part 1</a></li>
            <li><a href="https://www.nngroup.com/videos/remote-usability-test-part-2/">Running a Remote Usability Test, Part 2</a></li>
          </ul>
        </div>
      </div>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 4,
    active: false,
    title: 'Heuristic Evaluation',
    details: `
      <p>Heuristic evaluation is a method for a walk-through assessment based on 10 well-proven general principles for human-computer interaction. It is used for finding the usability problems so that they can be attended to as part of an iterative design process.</p>

      <p>Both heuristic evaluation and user testing can miss some problems, so it is best to employ both of these evaluation methods.</p>
      <div class="links">
        <div class="links-section articles">
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.nngroup.com/articles/ten-usability-heuristics/">10 Usability Heuristics for User Interface Design</a></li>
            <li><a href="https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/">How to Conduct a Heuristic Evaluation</a></li>
          </ul>
        </div>
        <div class="links-section videos">
          <h6>Short Videos</h6>
          <ul>
            <li><a href="https://www.nngroup.com/videos/heuristic-evaluation/">Heuristic Evaluation of User Interfaces</a></li>
            <li><a href="https://www.nngroup.com/videos/usability-heuristic-system-status/">Usability Heuristic 1: Visibility of System Status</a></li>
            <li><a href="https://www.nngroup.com/videos/match-system-real-world/">Usability Heuristic 2: Match Between the System and the Real World</a></li>
            <li><a href="https://www.nngroup.com/videos/usability-heuristic-user-control-freedom/">Usability Heuristic 3: User Control & Freedom</a></li>
            <li><a href="https://www.nngroup.com/videos/usability-heuristic-consistency-standards/">Usability Heuristic 4: Consistency and Standards</a></li>
            <li><a href="https://www.nngroup.com/videos/usability-heuristic-error-prevention/">Usability Heuristic 5: Error Prevention</a></li>
            <li><a href="https://www.nngroup.com/videos/recognition-vs-recall/">Usability Heuristic 6: Recognition vs. Recall in User Interfaces</a></li>
            <li><a href="https://www.nngroup.com/videos/flexibility-efficiency-use/">Usability Heuristic 7: Flexibility and Efficiency of Use</a></li>
            <li><a href="https://www.nngroup.com/videos/aesthetic-and-minimalist-design/">Usability Heuristic 8: Aesthetic and Minimalist Design</a></li>
            <li><a href="https://www.nngroup.com/videos/usability-heuristic-recognize-errors/">Usability Heuristic 9: Help Users Recognize, Diagnose, and Recover from Errors</a></li>
            <li><a href="https://www.nngroup.com/videos/help-and-documentation/">Usability Heuristic 10: Help and Documentation</a></li>
          </ul>
        </div>
      </div>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 5,
    active: false,
    title: 'Critique Session',
    details: `
      <div class="links">
        <div class="links-section articles">
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.nngroup.com/articles/ux-expert-reviews/">UX Expert Reviews</a></li>
          </ul>
        </div>
        <div class="links-section videos">
          <h6>Short Videos</h6>
          <ul>
            <li><a href="https://www.nngroup.com/videos/opinions-expert-design-review/">Keep Your Opinions out of an Expert Design Review</a></li>
          </ul>
        </div>
      </div>
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
  {
    id: 4,
    active: false,
    title: 'Micro-interactions & Motion Design',
    details: ``,
    extraClasses: 'ovp new established',
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