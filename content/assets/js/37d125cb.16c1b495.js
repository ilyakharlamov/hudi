"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[55004],{78446:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"rfc-process","title":"RFC Process","description":"This page describes a Request For Comments (RFC) process for proposing any major change to Hudi or even just sharing designs/vision for the project to get early feedback.","source":"@site/contribute/rfc-process.md","sourceDirName":".","slug":"/rfc-process","permalink":"/contribute/rfc-process","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"RFC Process","toc":true,"last_modified_at":"2020-09-01T19:59:57.000Z"},"sidebar":"contribute","previous":{"title":"Developer Setup","permalink":"/contribute/developer-setup"},"next":{"title":"Report Security Issues","permalink":"/contribute/report-security-issues"}}');var r=t(74848),a=t(28453);const o={sidebar_position:4,title:"RFC Process",toc:!0,last_modified_at:new Date("2020-09-01T19:59:57.000Z")},s=void 0,c={},d=[{value:"When do I need an RFC ?",id:"when-do-i-need-an-rfc-",level:2},{value:"Who can initiate the RFC ?",id:"who-can-initiate-the-rfc-",level:2},{value:"How do I author an RFC ?",id:"how-do-i-author-an-rfc-",level:2},{value:"Proposing the RFC",id:"proposing-the-rfc",level:3},{value:"Writing the RFC",id:"writing-the-rfc",level:3},{value:"Keeping it upto date",id:"keeping-it-upto-date",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This page describes a Request For Comments (RFC) process for proposing any major change to Hudi or even just sharing designs/vision for the project to get early feedback."}),"\n",(0,r.jsx)(n.h2,{id:"when-do-i-need-an-rfc-",children:"When do I need an RFC ?"}),"\n",(0,r.jsx)(n.p,{children:"Whenever a feature is considered to be causing a \u201cmajor change\u201d in the project, such a feature requires an RFC.\nAny of the following can be considered a major change:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Any new component, module or code that introduces a new concept into the project or alters the behavior of an existing one"}),"\n",(0,r.jsx)(n.li,{children:"Any large code refactor to address general code re-usability and structure. There is no strong definition for \u201cLarge\u201d and whether or not the refactor requires an RFC can be discussed on the @dev mailing list."}),"\n",(0,r.jsx)(n.li,{children:"Any change that impacts the underlying storage layout/format. e.g changes to the HoodieLogFormat, timeline layout version."}),"\n",(0,r.jsx)(n.li,{children:"New indexing schemes, New deltastreamer sources, New platform services."}),"\n",(0,r.jsx)(n.li,{children:"Any change that impacts the public interfaces of the project."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"It can also be used to describe large direction shifts to the project (e.g. Flink support) or new green field ideas (e.g. Hudi for ML flows)\nNot all RFCs require the same effort and detail. For critical changes such as the File Format and Index, we need to deeply discuss the trade-offs of\nmaking such a change and how it impacts current and new users. Any changes to such components affect the correctness of a dataset (backwards and forward versions supported).\nOther changes such as code refactor might require more details around abstractions but as long as there is good test coverage, a migration plan section can be avoided.\nIt may happen that you are making a bunch of changes across many components to enable an already existing feature. For example, introducing a new config along with reporting metrics,\nenhancing a tool and also improving documentation and the on-boarding experience. If all of these changes are linked to a general feature/idea, these can be grouped together under a single RFC."}),"\n",(0,r.jsx)(n.h2,{id:"who-can-initiate-the-rfc-",children:"Who can initiate the RFC ?"}),"\n",(0,r.jsx)(n.p,{children:"Anyone can initiate an RFC. Please note that if you are unsure of whether a feature already exists or if there is a plan already to implement a similar one, always start a discussion thread on the dev mailing list before initiating a RFC. This will help everyone get the right context and optimize everyone\u2019s usage of time."}),"\n",(0,r.jsx)(n.h2,{id:"how-do-i-author-an-rfc-",children:"How do I author an RFC ?"}),"\n",(0,r.jsx)(n.h3,{id:"proposing-the-rfc",children:"Proposing the RFC"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["First, start a discussion thread on the Apache Hudi dev mailing list, by sending an email to ",(0,r.jsx)(n.code,{children:"dev@hudi.apache.org"})," with subject line ",(0,r.jsx)(n.code,{children:"DISCUSS <proposed idea>"}),".\nUse this discussion thread to get an agreement from people on the mailing list that your proposed idea necessitates an RFC."]}),"\n",(0,r.jsxs)(n.li,{children:["File an umbrella JIRA for the RFC with the label ",(0,r.jsx)(n.code,{children:"hudi-umbrellas"})," added to it. See an ",(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/HUDI-1292",children:"example JIRA"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Raise a PR, adding an entry to the table at ",(0,r.jsx)(n.code,{children:"rfc/README.md"}),", picking the next available RFC number. Hudi committers will help land that."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"writing-the-rfc",children:"Writing the RFC"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a folder ",(0,r.jsx)(n.code,{children:"rfc-<number>"})," under ",(0,r.jsx)(n.code,{children:"rfc"})," folder, where ",(0,r.jsx)(n.code,{children:"<number>"})," is replaced by the actual RFC number used."]}),"\n",(0,r.jsxs)(n.li,{children:["Copy the rfc template file ",(0,r.jsx)(n.code,{children:"rfc/template.md"})," to ",(0,r.jsx)(n.code,{children:"rfc/rfc-<number>/rfc-<number>.md"})," and proceed to draft your design document."]}),"\n",(0,r.jsxs)(n.li,{children:["[Optional] Place any images used by the same directory using the ",(0,r.jsx)(n.code,{children:"![alt text](./image.png)"})," markdown syntax."]}),"\n",(0,r.jsxs)(n.li,{children:["Add at least 2 PMC members as approvers (you can find their github usernames ",(0,r.jsx)(n.a,{href:"/community/team",children:"here"}),"). You are free to add any number of dev members to your reviewers list."]}),"\n",(0,r.jsxs)(n.li,{children:["Raise a PR against the master branch with ",(0,r.jsx)(n.code,{children:"[RFC-<number>]"})," in the title and work through feedback, until the RFC approved (by approving the Github PR itself)"]}),"\n",(0,r.jsxs)(n.li,{children:['Before landing the PR, please change the status to "IN PROGRESS" under ',(0,r.jsx)(n.code,{children:"rfc/README.md"})," and keep it maintained as you go about implementing, completing or even abandoning."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"keeping-it-upto-date",children:"Keeping it upto date"}),"\n",(0,r.jsx)(n.p,{children:'RFC process is by no-means is an attempt at the "waterfall" software development process.\nWe recognize that design can be an iterative process as well, often evolving together with implementation.'}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Please ensure your code PRs are labelled with a ",(0,r.jsx)(n.code,{children:"[RFC-<number>]"})," title, in addition to the JIRA number."]}),"\n",(0,r.jsx)(n.li,{children:"As your implementation changes over time, you will update the RFCs and keep them in-sync. Project maintainers could point out these opportunities during code reviews."}),"\n",(0,r.jsx)(n.li,{children:'During the final landing of all goals of the RFC, the status changes to "COMPLETED"'}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var i=t(96540);const r={},a=i.createContext(r);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);