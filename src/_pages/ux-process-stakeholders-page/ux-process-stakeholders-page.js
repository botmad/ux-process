import Accordion from '../../components/accordion/accordion.vue';

const DiscoverySection = {
    title: 'Discovery',
    description: `
      <p>Requirements & constraints gathering. Understanding the organisation's operations and business goals - what's the big picture that all their users are working towards and how it aligns with the design challenge you're facing.</p>
    `
}
const DiscoverySubSections = [
  {
    id: 1,
    active: false,
    title: `Participate in Discovery`,
    details: `
      <h6>What is it?</h6>
      <p>Product or Customer Discovery meetings involve the client's stakeholders and most senior members of your team. Its purpose is to draft a high-level product vision, reducing uncertainty around an idea. Discoveries are a critical first step to make sure that the right product gets built for the right audience.</p>
      <h6>When to do it?</h6>
      <p>At the beginning of the project</p>
      <h6>What are you getting out of this?</h6>
      <ul>
         <li>UX Designer has unique expertise that is directly relevant to why products succeed or fail.</li>
         <li>Designers are well-versed in visualising a high-level idea as it takes shape through the discovery process. They can provide everyone with a better understanding of what's being discussed by crafting charts, mindmaps, and other visual aid for tracking complex project advancement.</li>
      </ul>
    `,
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 2,
    active: false,
    title: `Stakeholder Interview`,
    details: `
      <h6>What is it?</h6>
      <p>A meeting where a UX practitioner is present and given enough time to drive the conversation about the design</p>
      <h6>When to do it?</h6>
      <p>At the beginning of the project</p>
      <h6>What are you getting out of this?</h6>
      <ul>
         <li>Get stakeholders on board with a design process</li>
         <li>Settle ground for further communication</li>
         <li>Reduce the risk of confirmation bias</li>
      </ul>
    `,
    more: `
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
    id: 3,
    active: false,
    title: 'Clarify KPI and Success Criteria',
    details: `
      <h6>What is it?</h6>
      <p>A set of factors that can be measured to determine success after implementaion.</p>
      <h6>When to do it?</h6>
      <p>At the beginning of the project</p>
      <h6>What are you getting out of this?</h6>
      <ul>
        <li>At the end of the process we want to demonstrate with confidence that your solution is performing well for the business</li>
        <li>UX principles do not always align with business goals.</li>
        <li>Narrow the scope by focusing on the right goals.</li>
        <li>Protect the scope further down the line.</li>
      </ul>
    `,
    more: `
      <p>At the end of the project, calculating the client's return on investment (ROI) will be one of the most effective methods to demonstrate the value of design efforts. The ROI is determined by comparing the Key Performance Metrics (KPI). When starting the project, it is important to know whether the client focuses on specific KPI as it will provide the basis for prioritising your design goals.</p>

      <p>Find out which of these metrics are the most important to the client but be ready to challenge them if you feel that they are not an adequate measurement of the problem that your team is resolving.</p>
      <div class="links">
        <div class="links-section articles">
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.nngroup.com/articles/benchmarking-ux/?lm=ab-testing-vs-usability-testing&pt=youtubevideo">Benchmarking UX: Tracking Metrics</a></li>
            <li><a href="https://www.nngroup.com/articles/calculating-roi-design-projects/">Calculating ROI for Design Projects in 4 Steps</a></li>
            <li><a href="https://www.nngroup.com/articles/three-myths-roi-ux/">Three Myths About Calculating the ROI of UX</a></li>
            <li><a href="https://www.uxmatters.com/mt/archives/2012/07/how-to-calculate-the-roi-of-ux-using-metrics.php">How to Calculate the ROI of UX Using Metrics</a></li>
          </ul>
        </div>
      </div>
    `,
    videoLinks: [
      { id: 0, url: 'https://www.youtube.com/embed/5PKmF4hhju8', title: "The Benefits of Benchmarking Your Product's UX",},
      { id: 1, url: 'https://www.youtube.com/embed/25_bu4z72h8', title: "Don't Overthink UX ROI",},
      { id: 2, url: 'https://www.youtube.com/embed/LO3yE4yeg14', title: "Handle Bad UX Requests Without Saying No",}
    ],
    extraClasses: 'ovp established',
  },
  {
    id: 4,
    active: false,
    title: 'Concept Statement',
    details: `
      <h6>What is it?</h6>
      <p>A concept statement is a concise summary of the product vision.</p>
      <h6>When to do it?</h6>
      <p>After underestanding the essence of the problem your client is facing. The concept statement may change upon research findings so it is important to revise it whenever necessary.</p>
      <h6>What are you getting out of this?</h6>
      <ul>
        <li>The research stage is crucial, but without outlining what we are researching and why, it may turn into a misdirected and overwhelming exercise.</li>
        <li>A concept statement helps to determine the product scope and acts as a guide for deciding on features and use cases.</li>
      </ul>
    `,
    more: `
      <p>A concept statement is a concise summary of the product vision. It's important to define a concept statement as it helps in determining the product scope, features and use cases.</p>

      <h6>Concept statement should include</h6>
      <ul>
        <li>Proposed product name</li>
        <li>Target users</li>
        <li>A one-line description of the product</li>
        <li>What problem(s) the product will solve</li>
      </ul>
    `,
    extraClasses: 'ovp mvp new',
  },
]

const ResearchSection = {
    title: 'Research',
    description: `
      <p>UX research is the responsibility for learning about users, their goals, challenges, and activities, and for bringing that understanding to the organization. Timeline or budget should not be an excuse for skipping user research. Simple, fast, cheap studies are infinitely better than no studies at all.</p>
    `
}

const ResearchSubSections = [
  {
    id: 1,
    active: false,
    title: 'Analytics Data Review',
    details: `
      <h6>What is it?</h6>
      <p>Review of the user activity logs in search of meaningful patterns that signify a problem or need for improvement.</p>
      <h6>When to do it?</h6>
      <p>Before the design begings or after introducing changes to the system.</p>
      <h6>What are you getting out of this?</h6>
      <ul>
        <li>Inexpensive method to get insight into how users behave.</li>
        <li>Quantitative data has an undeniable statistical value that can reveal factors omitted by the interviewed individuals.</li>
        <li>It can provide a convincing fundament for validating or invalidating decisions made during the Discovery and directing UX research.</li>
      </ul> 
    `,
    more: `
      <p>Google Analytics is filled with very useful information for UX Strategists defining a baseline and tracking trends in order to define goals, strategies, and concepts for a brighter tomorrow. These metrics tell you what customers are doing, but not why they are doing it. Pairing analytics and user research will provide you with clearer answers.</p>
      <div class="links">
        <div class="links-section articles">
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.nngroup.com/articles/analytics-reports-ux-strategists/">Five Essential Analytics Reports for UX Strategists</a></li>
            <li><a href="https://www.nngroup.com/articles/vanity-metrics/">Vanity Metrics: Add Context to Add Meaning</a></li>
            <li><a href="https://www.nngroup.com/articles/quant-research-practice/">Quantitative UX Research in Practice</a></li>
          </ul>
        </div>
      </div>
    `,
    exampleImages: [
      { url: 'https://media.nngroup.com/media/editor/2017/12/14/screen-shot-2017-12-14-at-55628-pm.png', source: "https://www.nngroup.com/articles/empathy-mapping/",},
    ],
    videoLinks: [
      { id: 0, url: 'https://www.youtube.com/embed/5wEFrKVTrmA', title: "Turning Analytics Findings Into Usability Studies",},
      { id: 1, url: 'https://www.youtube.com/embed/YWCfjy1BeA8', title: "Analytics vs. Quantitative Usability Testing",},
      { id: 2, url: 'https://www.youtube.com/embed/4BjCq4SeZEA', title: "In Analytics, What do the Numbers Really Mean?",},
      { id: 3, url: 'https://www.youtube.com/embed/KxF2ZZh8O8M', title: "Vanity Metrics in Analytics",},
      { id: 4, url: 'https://www.youtube.com/embed/V2uo2HHseMI', title: "How to Interpret User Time Spent and Page Views",}
    ],
    extraClasses: 'established',
  },
  {
    id: 2,
    active: false,
    title: 'User Interviews',
    details: `
      <h6>What is it?</h6>
      <p>Direct 1-1 conversations between researcher and end-user.</p>
      <h6>When to do it?</h6>
      <ul>
        <li>In general, it’s a good practice to hear from your users at any point.</li>
        <li>Before defining the solutions to identified problems.</li>
        <li>To supplement another method - For example, asking questions after a usability test.</li>
      </ul>
      <h6>What are you getting out of this?</h6>
      <ul>
        <li>The user is the expert - They have a daily routine, goals and difficulties.</li>
        <li>Our client's revenue depends on users' meeting their goals - Learn all about it.</li>
        <li>Eventually, users will leave if you will make (or keep) meeting their goal a frustrating experience - Meet them to empathise with them.</li>
        <li>There are discrepancies between how users' workflow is exemplified vs. its actual reality. The way people carry their work may include several factors missed by the high-level perception represented by business leaders.</li>
      </ul>
      <p>⚠️ Interviews are at the core of the UX research and one of the most valuable activities to perform. If you are only acting on one entry from this list, pick this one.</p>
    `,
    more: `
      <p>Despite many weaknesses, interviews are a valuable method for exploratory user research. The purpose of interviews is to gather the necessary intelligence to understand various aspects of your users, such as their goals, motivations, tasks and frustrations. These insights are key to reducing risk and making evidence-informed decisions about how to meet the needs of the user and improve their workflow.</p>

      <p>Once you uncover this information, you might choose to filter your rough notes down and express them in a clearer format, which can help you identify patterns in your findings and communicate them to others - see personas, empathy maps, journey maps</p>
      <p>It takes skill and preparation to interview well. The following can result in inadequate data:
      <ul>
        <li>Asking the wrong questions - leading questions, for example.</li>
        <li>Not letting the conversation stray from your script where it’s appropriate.</li>
        <li>Ignoring subtle non-verbal cues - tone of voice and body language can reveal key insights about the user.</li>      
      </ul>

      <div class="links">
        <div class="links-section articles">  
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.nngroup.com/articles/user-interviews/">User Interviews: How, When, and Why to Conduct Them</a></li>
            <li><a href="https://www.nngroup.com/articles/why-user-interviews-fail/">Why User Interviews Fail</a></li>
            <li><a href="https://www.nngroup.com/articles/pure-method/">Quantifying and Comparing Ease of Use Without Breaking the Bank</a></li>
          </ul>
        </div>     
      </div>
    `,
    videoLinks: [
      { id: 0, url: 'https://www.youtube.com/embed/jy-QGuWE7PQ', title: "The 3 Types of User Interviews: Structured, Semi-Structured, and Unstructured",},
      { id: 1, url: 'https://www.youtube.com/embed/FLMKTivaMbU', title: "Intentional Silence as a Moderation Technique",},
    ],
    extraClasses: 'established',
  },
  {
    id: 3,
    active: false,
    title: `Ethnographic Field Studies`,
    details: `
      <h6>What is it?</h6>
      <p>Field research is observing people at work in their natural environment. It's the observation of real user behaviour, as opposed to the scripted nature of interviews or surveys.</p>
      <h6>When to do it?</h6>
      <p>Before the design begins, but they can be arranged at any time to gain insight into users' practice.</p>
      <h6>What are you getting out of this?</h6>
      <ul>
        <li>Field research reveals unmet user needs not articulated during the interviews.</li>
        <li>Field studies may reveal unexpected finings and inspire innovative solutions.</li>        
      </ul>
    `,
    more: `
      <p>Field research is conducted in the user’s natural environment. Learn the unexpected by leaving the office and observing people in their natural environment.</p>
      <div class="links">
        <div class="links-section articles">
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.nngroup.com/articles/first-rule-of-usability-dont-listen-to-users/">First Rule of Usability? Don't Listen to Users</a></li>
            <li><a href="https://www.nngroup.com/articles/field-studies/">Field Studies</a></li>
            <li><a href="https://www.nngroup.com/articles/field-studies-done-right-fast-and-observational/">Field Studies Done Right: Fast and Observational</a></li>
            <li><a href="https://www.nngroup.com/articles/tips-user-research-field/?lm=field-studies&pt=article">27 Tips and Tricks for Conducting Successful User Research in the Field</a></li>
          </ul>
        </div>
      </div>
    `,
    videoLinks: [
      { id: 0, url: 'https://www.youtube.com/embed/GvYjOrwM2fI', title: "4 Steps to Field Studies with Users",},
      { id: 1, url: 'https://www.youtube.com/embed/smzwIsi2Zto', title: "Doing Field Studies Remotely",},
    ],
    extraClasses: 'established',
  },
  {
    id: 4,
    active: false,
    title: 'Surveys',
    details: `
      <h6>What is it?</h6>
      <p>Qualitative surveys ask open-ended questions looking for comments, feedback, suggestions - sometimes in preparation for quantitative surveys.<br>
        Quantitative surveys count results: how many people say that they do this vs. do that.<br
        It’s possible to mix the two kinds of surveys.</p>
      <h6>When to do it?</h6>
      <p>During the requirements gathering, before the design (or redesign) phase or after implementation.</p>
      <h6>What are you getting out of this?</h6>
      <ul>
        <li>Cheap and easy to conduct.</li>
        <li>Fast and easily obtainable source of insight on how people are experiencing the system, in their own words.</li>
        <li>Surveys can expose the user's sentiment on what works and what doesn't.</li>
      </ul>
      <p>⚠️ Surveys can be misleading if conducted incorrectly and ideally should be a supplementary research method. There are plenty of stories about people going wrong with confidence, based on their survey results.</p>
    `,
    more: `
      <div class="links">
        <div class="links-section articles">    
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.nngroup.com/articles/qualitative-surveys/">28 Tips for Creating Great Qualitative Surveys</a></li>
            <li><a href="https://www.nngroup.com/articles/keep-online-surveys-short/">https://www.nngroup.com/articles/keep-online-surveys-short/</a></li>
          </ul>
        </div>
      </div>
    `,
    videoLinks: [
      { id: 0, url: 'https://www.youtube.com/embed/zaK4xfAqpY0', title: "Survey Response Biases in User Research",},
    ],
    extraClasses: 'established',
  },
  {
    id: 5,
    active: false,
    title: 'User Personas',
    details: `
      <h6>What is it?</h6>
      <p>Personas are profiles of fictional people, made to represent the different user types that might use your service.</p>
      <h6>When to do it?</h6>
      <p>Personas should only be created after completing a decent amount of user research (interviews, ethnography or surveys). Personas should always derive from UX research findings.</p>
      <h6>What are you getting out of this?</h6>
      <ul>
        <li>Personas help the team to build empathy with the end-users, shifting their consideration from assembling a set of features towards a human-centric design approach.</li>
        <li>Personas are simple summarizations of the user research. They can quickly convey an identified characteristic of the target user range.</li>
        <li>They are understandable to any audience.</li>
      </ul>
    `,
    more: `
      <p>Personas are representations of a cluster of users with similar behaviors, goals, and motivations. As such, personas are fictional, yet still realistic because they embody the characteristics and behaviors of actual people. Personas are used to communicate information about users and create a common ground among different team members by unifying their views and understanding of target users.</p>

      <p>Personas can humanize complex data and help give UX design teams a consistent focus and design target. When based on user research, personas support user-centered design throughout a project’s lifecycle by making characteristics of key user segments more salient.</p>
      <div class="links">
        <div class="links-section articles">
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.interaction-design.org/literature/article/personas-why-and-how-you-should-use-them">Personas – A Simple Introduction</li>
            <li><a href="https://www.nngroup.com/articles/persona-budgets/">How Much Time Does It Take to Create Personas?</a></li>
            <li><a href="https://www.nngroup.com/articles/persona-scope/">Just-Right Personas: How to Choose the Scope of Your Personas</a></li>
            <li><a href="https://www.nngroup.com/articles/why-personas-fail/">Why Personas Fail</a></li>
            <li><a href="https://www.nngroup.com/articles/why-personas-fail/">Why Personas Fail</a></li>
          </ul>
        </div>
      </div>
    `,
    exampleImages: [
      { url: 'https://storage.googleapis.com/uxfolio/5cdb8a806a30080004cd776a/5cdb8d6c6a30080004cd776b/aOLqrQhzznvdpwQp.jpg', source: "https://uxfol.io/project/04cd776b/Fastis",},
    ],
    videoLinks: [
      { id: 0, url: 'https://www.youtube.com/embed/5wEFrKVTrmA', title: "What Are Personas and Why Should I Care?",},
      { id: 1, url: 'https://www.youtube.com/embed/YWCfjy1BeA8', title: "Why Personas Fail",},
      { id: 2, url: 'https://www.youtube.com/embed/4BjCq4SeZEA', title: "Bringing Personas to Agile",},
      { id: 3, url: 'https://www.youtube.com/embed/KxF2ZZh8O8M', title: "Jobs-to-Be-Done vs. Personas",},
      { id: 3, url: 'https://www.youtube.com/embed/XVaiNayTi8U', title: "How to Choose the Scope of Your Personas",}
    ],
    extraClasses: 'ovp mvp new established',
  },
  {
    id: 6,
    active: false,
    title: 'Competitor Analysis',
    details: `
      <h6>What is it?</h6>
      <p>Competitive usability evaluations are a method of obtaining data on what works well or ineffectively on other systems. </p>
      <h6>When to do it?</h6>
      <p>It is a great initial research activity that may be repeated whenever approaching a new, not compared feature.</p>
      <h6>What are you getting out of this?</h6>
      <ul>
        <li>Reduce risk and cost by not implementing useless features or bad workflows.</li>
        <li>Add value by identifying design approaches that considerably benefit users, in which case we can add this value to our system.</li>
        <li>Guide UX investments to approaches that your users need.</li>
        <li>Understand the competitive landscape your product is facing.</li>
        <li>Opportunity for early testing without the need to prototype or develop compared solutions.</li>
      </ul>
    `,
    more: `
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
    id: 7,
    active: false,
    title: 'Empathy Mapping',
    details: `
      <h6>What is it?</h6>
      <p>An empathy map is a visualisation of how users emotional responses change, step by step, as they interact with the system.</p>
      <h6>When to do it?</h6>
      <p>After concluding user interviews and/or another type of user research to illustrate the current state of affairs within a system.</p>
      <h6>What are you getting out of this?</h6>
      <ul>
        <li>Empathy is a critical part of human-centred design.</li>
        <li>The empathy map visualises the users wants, needs, goals and frustrations to the rest of the team (and stakeholders), democratising the human-centric design mindset.</li>
        <li>The mapping process reveals holes in existing user data.</li>
        <li>Callouts of key insights from research in a single-page infographic.</li>
        <li>Fast and inexpensive</li>
      </ul>
    `,
    more: `
      <p>In order to advocate on behalf of the user, not only must we deeply understand our users, but we must also help our colleagues understand them and prioritise their needs. An empathy map is a tool used to articulate what we know about a particular type of user by visualising their attitudes and behaviours.</p>
    `,
    articles: `
      <h6>Articles</h6>
      <ul>
        <li><a href="https://www.nngroup.com/articles/empathy-mapping/">Empathy Mapping: The First Step in Design Thinking</a></li>
        <li><a href="https://www.nngroup.com/articles/sympathy-vs-empathy-ux/">Sympathy vs. Empathy in UX</a></li>
      </ul>
    `,
    exampleImages: [
      { url: 'https://media.nngroup.com/media/editor/2017/12/14/screen-shot-2017-12-14-at-55628-pm.png', source: "https://www.nngroup.com/articles/empathy-mapping/",},
    ],
    videoLinks: [
      { id: 0, url: 'https://www.youtube.com/embed/9HwpR3Njq00', title: "How to Empathy Map",},
      { id: 1, url: 'https://www.youtube.com/embed/ZnkvVEbLFg4', title: "Most Important Skill Required for UX Professionals",},
    ],
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
      <p>A meeting facilitated by a designer where stakeholders and team members generate and discuss a wide set of ideas by visualising them as simple sketches. It is often followed by a critique workshop and <a href="https://en.wikipedia.org/wiki/Dot-voting#:~:text=Dot%2Dvoting%20(also%20known%20as,stickers%20being%20the%20most%20common.">"dot voting"</a>.</p>
      <h6>When to do it?</h6>
      <p>After concluding the user research, during the ideation stage - ideally after brainstorming - before the journey mapping and Information Architecture phase.</p>
      <h6>What are you getting out of this?</h6>
      <ul>
        <li>Fast and easy way to compare a variety of ideas coming from well-informed people.</li>
        <li>An effective way to capture how stakeholders envision solutions to their problems.</li>
        <li>A way to break the deadlock if stakeholders would not sign-off the design because "it's not what they are looking for".</li>
        <li>Engage conflicting viewpoints into a professional design critique.</li>
        <li>Collaboratively achieve resolution, giving everyone a chance to make their vision understood by others. </li>
        <li>Building buy-in for design decisions</li>
      </ul>
    `,
    more: `
      <p>You can sketch the product flow and features. Avoid getting into details at this stage. Note that this is neither a wireframe nor a prototype. Sketch out ideas and brainstorm them with your peers. Iterate on the process until you feel confident to move on with wireframes.</p>

      <p>Sketching exercise is the most effective if it's done collaboratively. When assembling your team, try to include non-designers.
      <p>Develop, share and exchange ideas and categorise them according to product and business needs. Mix and match ideas and iterate on the process.</p>
    `,
    videoLinks: [
      { id: 0, url: 'https://www.youtube.com/embed/amE1nGiW-jU', title: "How to Get Stakeholders to Sketch: A Magic Formula",},
      { id: 1, url: 'https://www.youtube.com/embed/7fZNTIAozmk', title: "Pencils vs. Pixels for UI Protyping and Sketching",},
    ],
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
    more: `
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
      </div>
    `,
    videoLinks: [
      { id: 0, url: 'https://www.youtube.com/embed/dmlFRCZI9gQ', title: "Scenario Mapping for Design Exploration",},
    ],
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
    more: `
      <p>Service blueprints visualize organizational processes in order to optimize how a business delivers a user experience. It is a diagram that shows the relationships between different service components — people, props (physical or digital evidence), and processes — that are directly tied to touchpoints in a specific customer journey.</p>
      <h6>Articles</h6>
      <div class="links">
        <div class="links-section articles">
          <ul>
            <li><a href="https://www.nngroup.com/articles/service-blueprints-definition/">Service Blueprints: Definition</a></li>
          </ul>
        </div>
      </div>
    `,
    videoLinks: [
      { id: 0, url: 'https://www.youtube.com/embed/z-BfM-fsBEY', title: "The 5 Steps to Service Blueprinting",},
      { id: 1, url: 'https://www.youtube.com/embed/bCRBaD2_dCQ', title: "4 Key Components of Service Blueprints",},
      { id: 2, url: 'https://www.youtube.com/embed/6FdFIYKxeDM', title: "When and Why UX Practitioners Use Service Blueprintsg",},
      { id: 3, url: 'https://www.youtube.com/embed/ubKp3vRJIJg', title: "Service Blueprinting FAQ",},
    ],
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
    exampleImages: [
      { url: 'https://media.nngroup.com/media/editor/2020/07/30/nng-cjm.png', source: "https://www.nngroup.com/articles/journey-mapping-101/",},
    ],
    more: `
      <p>A journey map is a visualisation of the process that a person goes through in order to accomplish a goal. In its most basic form it's an actions timeline that is often is fleshed out with user thoughts and emotions in order to create a narrative.</p>
    `,
    articles: `
      <h6>Articles</h6>
      <ul>
        <li><a href="https://www.nngroup.com/articles/research-journey-mapping/">How to Conduct Research for Customer Journey-Mapping</a></li>
        <li><a href="https://www.nngroup.com/articles/journey-mapping-101/">Journey Mapping 101</a></li>
        <li><a href="https://www.nngroup.com/articles/customer-journey-mapping/">When and How to Create Customer Journey Maps</a></li>
        <li><a href="https://www.nngroup.com/articles/journey-mapping-faq/">Journey Mapping: 9 Frequently Asked Questions</a></li>
      </ul>
    `,
    videoLinks: [
      { id: 0, url: 'https://www.youtube.com/embed/nQQBeV2iP7A', title: "Journey Mapping: 2 Decisions to Make Before You Begin",},
      { id: 1, url: 'https://www.youtube.com/embed/CquXSGaTjk8', title: "How to Conduct Research for Customer Journey Mapping",},
      { id: 2, url: 'https://www.youtube.com/embed/M0I5gdoon6o', title: "The 5 Steps to Customer Journey Mapping",},
      { id: 3, url: 'https://www.youtube.com/embed/2W13ext26kQ', title: "Customer Journey Mapping 101",},
    ],
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
    more: `
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
      </div>
    `,
    videoLinks: [
      { id: 0, url: 'https://www.youtube.com/embed/TbEfjaE94sU', title: "Card Sorting: How to Best Organize Product Offerings",},
      { id: 1, url: 'https://www.youtube.com/embed/0tNPT6X9Lhc', title: "Open vs. Closed Card Sorting",},
      { id: 2, url: 'https://www.youtube.com/embed/ax0_rqC4v44', title: "How to Avoid Bias in Card Sorting",},
      { id: 3, url: 'https://www.youtube.com/embed/P0WDO76300Q', title: "Tree Testing to Evaluate Information Architecture Categories",},
    ],
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
    more: `
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
    more: `
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
      </div>
    `,
    videoLinks: [
      { id: 0, url: 'https://www.youtube.com/embed/P0WDO76300Q', title: "Tree Testing to Evaluate Information Architecture Categories",},
    ],
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
    more: `
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
      <h6>What is it?</h6>
      <p></p>
      <h6>When to do it?</h6>
      <p></p>
      <h6>What are you getting out of this?</h6>
      <p></p>
    `,
    more: `
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
      </div>
    `,
    videoLinks: [
      { id: 0, url: 'https://www.youtube.com/embed/miVcrftnhzM', title: "Prototypes vs Wireframes in UX Projects",},
      { id: 1, url: 'https://www.youtube.com/embed/fw42BYQmuJ4', title: "Paper Prototyping 101",},
      { id: 2, url: 'https://www.youtube.com/embed/LtED1dBcSVI', title: "Just-Enough Prototypes Make Communicating Specs More Successful",},
      { id: 3, url: 'https://www.youtube.com/embed/k63MiRRszLk', title: "Presenting Low-Fidelity Prototypes to Stakeholders",},
    ],
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
    more: `
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
      </div>
    `,
    videoLinks: [
      { id: 0, url: 'https://www.youtube.com/embed/6Bw0n6Jvwxk', title: "Heuristic Evaluation of User Interfaces",},
      { id: 1, url: 'https://www.youtube.com/embed/cTtc90jCULU', title: "Usability Heuristic 1: Visibility of System Status",},
      { id: 2, url: 'https://www.youtube.com/embed/0TAt9Pln51g', title: "Usability Heuristic 2: Match Between the System and the Real World",},
      { id: 3, url: 'https://www.youtube.com/embed/MXuk-fdbr0A', title: "Usability Heuristic 3: User Control & Freedom",},
      { id: 4, url: 'https://www.youtube.com/embed/Ibndy9KLOSQ', title: "Usability Heuristic 4: Consistency and Standards",},
      { id: 5, url: 'https://www.youtube.com/embed/imS9s1DUY-I', title: "Usability Heuristic 5: Error Prevention",},
      { id: 6, url: 'https://www.youtube.com/embed/6glQPp6q4Jc', title: "Usability Heuristic 6: Recognition vs. Recall in User Interfaces",},
      { id: 7, url: 'https://www.youtube.com/embed/LoTdRTBB8BQ', title: "Usability Heuristic 7: Flexibility and Efficiency of Use",},
      { id: 8, url: 'https://www.youtube.com/embed/ZgbRmeWDgd0', title: "Usability Heuristic 8: Aesthetic and Minimalist Design",},
      { id: 9, url: 'https://www.youtube.com/embed/cCun-ReLTFI', title: "Usability Heuristic 9: Help Users Recognize, Diagnose, and Recover from Errors",},
      { id: 10, url: 'https://www.youtube.com/embed/iIQVRzatb50', title: "Usability Heuristic 10: Help and Documentation",},
    ],
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
    more: `
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
      </div>
    `,
    videoLinks: [
      { id: 0, url: 'https://www.youtube.com/embed/v8JJrDvQDF4', title: "User Testing: Why & How (Jakob Nielsen)",},
      { id: 1, url: 'https://www.youtube.com/embed/V-An4Jfplew', title: "User Testing Facilitation Techniques",},
      { id: 2, url: 'https://www.youtube.com/embed/ZkDafFDtJ1Y', title: "Running a Remote Usability Test, Part 1",},
      { id: 3, url: 'https://www.youtube.com/embed/lYE8I311qG4', title: "Running a Remote Usability Test, Part 2",},
    ],
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
    more: `
      <p>A/B testing can quickly show which design performs best</p>

      <div class="links">
        <div class="links-section articles">
          <h6>Articles</h6>
          <ul>
            <li><a href="https://www.nngroup.com/articles/ab-testing-and-ux-research/">Define Stronger A/B Test Variations Through UX Research</a></li>
            <li><a href="https://www.nngroup.com/articles/putting-ab-testing-in-its-place/">Putting A/B Testing in Its Place</a></li>
            <li><a href="https://www.nngroup.com/articles/multivariate-testing/">Multivariate vs. A/B Testing: Incremental vs. Radical Changes</a></li>
            <li><a href="https://www.nngroup.com/articles/ab-testing-usability-engineering/">A/B Testing, Usability Engineering, Radical Innovation: What Pays Best?</a></li>
          </ul>
        </div>
      </div>
    `,
    videoLinks: [
      { id: 0, url: 'https://www.youtube.com/embed/m000dSSXvDY', title: "A/B Testing 101",},
      { id: 1, url: 'https://www.youtube.com/embed/TYrWpZdcujU', title: "Don't A/B Test Yourself Off a Cliff",},
      { id: 2, url: 'https://www.youtube.com/embed/6-j5My77tIU', title: "Is A/B Testing Faster than Usability Testing at Getting Results?",},
      { id: 3, url: 'https://www.youtube.com/embed/fp6UWlZm1jk', title: "A/B Testing vs. Multivariate Testing for Design Optimization",},
    ],
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
      selectedDesignFramework: 0,
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