"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37799],{37799:function(e,n,t){t.r(n),t.d(n,{LandingPageDevelop:function(){return S}});var a=t(85893),i=t(60761),r=t(9008),o=t.n(r),s=t(41664),l=t.n(s),d=t(67294),c=t(77472),m=t(59145),x=t(60434),h=t(93967),p=t.n(h),g=t(33554);let u=d.forwardRef((e,n)=>{let{children:t,className:i,...r}=e;return(0,a.jsx)("div",{...r,ref:n,className:p()("flex w-full flex-col justify-between md:flex-row",i),children:t})});u.displayName="CodeEditorContent";let f=d.forwardRef((e,n)=>{let{children:t,className:i,...r}=e;return(0,a.jsx)("header",{...r,ref:n,className:p()("flex h-12 items-center border-b border-slate-6 px-4",i),children:(0,a.jsxs)("div",{className:"flex w-full justify-between",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("div",{"aria-hidden":"true",className:"h-2.5 w-2.5 rounded-full bg-red-10"}),(0,a.jsx)("div",{"aria-hidden":"true",className:"h-2.5 w-2.5 rounded-full bg-yellow-10"}),(0,a.jsx)("div",{"aria-hidden":"true",className:"h-2.5 w-2.5 rounded-full bg-green-10"})]}),(0,a.jsx)("div",{className:"flex justify-end gap-2",children:t})]})})});f.displayName="CodeEditorControls";let y=d.forwardRef((e,n)=>{let{children:t,className:i,...r}=e;return(0,a.jsx)(x.VY,{...r,ref:n,className:p()("flex w-full justify-between outline-none focus-visible:ring-2 focus-visible:ring-slate-6","flex-col md:max-w-[calc(100%_-_12.5rem)] md:flex-row",i),children:t})});y.displayName="CodeEditorEditor";let b=d.forwardRef((e,n)=>{let{mode:t,device:i,className:r,value:o,...s}=e;return(0,a.jsx)("div",{...s,ref:n,className:"w-full p-2.5",children:(0,a.jsx)("div",{className:p()("order-1 mx-auto h-full max-h-[500px] min-h-[300px] flex-1 overflow-auto rounded-2xl text-sm","md:order-2 md:max-h-[calc(650px_-_20px)]",{"max-w-full p-8":"desktop"===i,"max-w-[350px] p-8":"mobile"===i,"bg-slate-2":"dark"===t,"bg-white":"light"===t,"leading-5":"mobile"===i,"leading-[24px]":"desktop"===i,"text-black":"light"===t,"text-slate-12":"dark"===t},r),style:{fontFamily:"Helvetica",backgroundImage:"radial-gradient(100% 50% at 50% 0%, rgba(0, 163, 255, 0.13) 0%, rgba(0, 163, 255, 0) 50%, rgba(0, 163, 255, 0) 100%)"},children:o})})});b.displayName="CodeEditorPreview";var w=t(44691);let j=d.forwardRef((e,n)=>{let{files:t,...i}=e;return(0,a.jsx)("aside",{...i,ref:n,className:p()("flex-shirk-0 w-full overflow-auto border-b border-slate-6 px-2 py-2.5","md:min-w-[12.5rem] md:max-w-[12.5rem] md:border-b-0 md:border-r"),children:(0,a.jsx)(w.E.div,{children:(0,a.jsx)(x.aV,{className:"flex gap-2 md:flex-col",children:t.map(e=>(0,a.jsxs)(x.SP,{className:p()("inline-flex h-8 flex-shrink-0 items-center gap-1 rounded pl-1 pr-2 text-sm text-slate-11 outline-none","transition duration-200 ease-in-out","md:flex md:px-1","hover:bg-slate-4 hover:text-slate-12","focus-visible:bg-slate-4 focus-visible:text-slate-12","data-[state='active']:text-blue-10"),value:e.name,children:[(0,a.jsx)(c._4,{}),e.name]},e.name))})})})});j.displayName="CodeEditorSidebar";let v=d.forwardRef((e,n)=>{let{children:t,className:i,...r}=e;return(0,a.jsx)(x.fC,{orientation:"vertical",...r,ref:n,className:p()("rounded-3xl border border-slate-6",i),children:t})});v.displayName="CodeEditorRoot";let k={Root:v,Controls:f,Sidebar:j,Editor:y,Content:u,Preview:b,Code:e=>{let{value:n,className:t}=e;return(0,a.jsx)(g.d.Snippet,{className:p()("order-2 max-h-[400px] min-h-[300px] overflow-auto md:order-none md:max-h-[650px] md:min-h-[500px]",t),size:"1",syntax:"tsx",value:n})}};var T=t(25675),N=t.n(T);let C={codeString:"import { Body, Button, Container, Head, Html, Img, Link, Preview, Section, Text } from '@react-email/components';\nimport * as React from 'react';\n\nexport const ResetPasswordEmail = ({\n  userFirstname = 'User',\n  resetPasswordLink = '',\n}: ResetPasswordEmailProps) => {\n  return (\n    <Html>\n      <Head />\n      <Preview>Dropbox reset your password</Preview>\n      <Body style={main}>\n        <Container style={container}>\n          <Img\n            src={`${baseUrl}/static/example-logo.png`}\n            width=\"80\"\n            height=\"80\"\n            alt=\"Logo Example\"\n          />\n          <Section>\n            <Text style={text}>Hi {userFirstname},</Text>\n            <Text style={text}>\n              Someone recently requested a password change for your Dropbox\n              account. If this was you, you can set a new password here:\n            </Text>\n            <Button style={button} href={resetPasswordLink}>\n              Reset password\n            </Button>\n            <Text style={text}>\n              If you don&apos;t want to change your password or didn&apos;t\n              request this, just ignore and delete this message.\n            </Text>\n            <Text style={text}>\n              To keep your account secure, please don&apos;t forward this email\n              to anyone. See our Help Center for{' '}\n              <Link style={anchor} href=\"\">\n                more security tips.\n              </Link>\n            </Text>\n            <Text style={text}>Happy Dropboxing!</Text>\n          </Section>\n        </Container>\n      </Body>\n    </Html>\n  );\n};\n\ninterface ResetPasswordEmailProps {\n  userFirstname?: string;\n  resetPasswordLink?: string;\n}\n\nconst baseUrl = process.env.URL\n  ? `https://${process.env.URL}`\n  : '';\n\nexport default ResetPasswordEmail;\n\nconst main = {\n  backgroundColor: '#f6f9fc',\n  padding: '10px 0',\n};\n\nconst container = {\n  backgroundColor: '#ffffff',\n  border: '1px solid #f0f0f0',\n  padding: '45px',\n};\n\nconst text = {\n     \"Helvetica, Arial, 'Lucida Grande', sans-serif\",\n  fontWeight: '300',\n  color: '#404040',\n  lineHeight: '26px',\n};\n\nconst button = {\n  backgroundColor: '#007ee6',\n  borderRadius: '4px',\n  color: '#fff',\n  fontFamily: \"'Open Sans', 'Helvetica Neue', Arial\",\n  fontSize: '15px',\n  textDecoration: 'none',\n  textAlign: 'center' as const,\n  display: 'block',\n  width: '210px',\n  paddingTop: '15px',\n  paddingBottom: '15px',\n};\n\nconst anchor = {\n  textDecoration: 'underline',\n};",Preview:()=>(0,a.jsx)("table",{align:"center",cellPadding:"0",cellSpacing:"0","data-id":"__react-email-container",role:"presentation",style:{maxWidth:"380px",marginLeft:"auto",marginRight:"auto",padding:"10px",width:"100%"},width:"100%",children:(0,a.jsx)("tbody",{children:(0,a.jsx)("tr",{style:{width:"100%"},children:(0,a.jsxs)("td",{children:[(0,a.jsx)("table",{align:"center",cellPadding:"0",cellSpacing:"0","data-id":"react-email-section",role:"presentation",style:{marginTop:"24px"},width:"100%",children:(0,a.jsx)("tbody",{children:(0,a.jsx)("tr",{children:(0,a.jsx)("td",{children:(0,a.jsx)(N(),{alt:"Logo Example","data-id":"react-email-img",height:"80",src:"/static/example-logo.png",style:{display:"block",outline:"none",border:"none",textDecoration:"none",marginTop:"0px",marginBottom:"0px",marginLeft:"auto",marginRight:"auto"},width:"80"})})})})}),(0,a.jsx)("table",{align:"center",cellPadding:"0",cellSpacing:"0","data-id":"react-email-section",role:"presentation",width:"100%",children:(0,a.jsx)("tbody",{children:(0,a.jsx)("tr",{children:(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{"data-id":"react-email-text",style:{margin:"16px 0",fontWeight:"500",fontFamily:"Helvetica, Arial, 'Lucida Grande', sans-serif"},children:"Hi user,"}),(0,a.jsx)("p",{"data-id":"react-email-text",style:{margin:"16px 0",fontWeight:"500",fontFamily:"Helvetica, Arial, 'Lucida Grande', sans-serif"},children:"Someone recently requested a password change for your ACME account. If this was you, you can set a new password here:"}),(0,a.jsx)("table",{align:"center",cellPadding:"0",cellSpacing:"0","data-id":"react-email-section",role:"presentation",style:{textAlign:"center"},width:"100%",children:(0,a.jsx)("tbody",{children:(0,a.jsx)("tr",{children:(0,a.jsx)("td",{children:(0,a.jsx)("a",{"data-id":"react-email-button",href:"",style:{backgroundColor:"#00A3FF",borderRadius:"4px",color:"#fff",fontFamily:"'Helvetica Neue', Arial",fontWeight:"600",textDecoration:"none",textAlign:"center",width:"210px",margin:"0 auto",display:"inline-block",lineHeight:"100%",maxWidth:"100%"},target:"_blank",children:(0,a.jsx)("span",{style:{maxWidth:"100%",display:"inline-block",lineHeight:"120%",paddingTop:"15px",paddingBottom:"15px"},children:"Reset password"})})})})})}),(0,a.jsx)("p",{"data-id":"react-email-text",style:{margin:"16px 0",fontWeight:"500",fontFamily:"Helvetica, Arial, 'Lucida Grande', sans-serif"},children:"If you don't want to change your password or didn't request this, just ignore and delete this message."}),(0,a.jsxs)("p",{"data-id":"react-email-text",style:{margin:"16px 0",fontWeight:"500",fontFamily:"Helvetica, Arial, 'Lucida Grande', sans-serif"},children:["To keep your account secure, please don't forward this email to anyone. See our Help Center for"," ",(0,a.jsx)("a",{"data-id":"react-email-link",href:"",style:{color:"#00A3FF",textDecoration:"none"},target:"_blank",children:"more security tips."})]}),(0,a.jsx)("p",{"data-id":"react-email-text",style:{margin:"16px 0",fontWeight:"500",fontFamily:"Helvetica, Arial, 'Lucida Grande', sans-serif"},children:"Happy Day!"})]})})})})]})})})})},L={codeString:'import { Body, Button, Column, Container, Head, Heading, Hr, Html, Img, Link, Preview, Row, Section, Tailwind, Text } from \'@react-email/components\';\nimport * as React from \'react\';\n\nexport const InviteUserEmail = ({\n  username = \'user\',\n  userImage = `${baseUrl}/static/avatar.png`,\n  invitedByUsername = \'analasso\',\n  invitedByEmail = \'analasso@gmail.com\',\n  teamName = \'Project\',\n  teamImage = `${baseUrl}/static/example-logo.png`,\n  inviteLink = \'https://company.com/teams/invite/foo\',\n  inviteFromIp = \'204.13.186.218\',\n  inviteFromLocation = \'Greendale\',\n  company = \'ACME\',\n}: InviteUserEmailProps) => {\n  const previewText = `Join ${invitedByUsername}`;\n\n  return (\n    <Html>\n      <Head />\n      <Preview>{previewText}</Preview>\n      <Tailwind>\n        <Body className="bg-white my-auto mx-auto font-sans">\n          <Container className="my-10 mx-auto p-5 w-[465px]">\n            <Section className="mt-8">\n              <Img\n                src={`${baseUrl}/static/example-logo.png`}\n                width="80"\n                height="80"\n                alt="Logo Example"\n                className="my-0 mx-auto"\n              />\n            </Section>\n            <Heading className="text-2xl font-normal text-center p-0 my-8 mx-0">\n              Join <strong>{teamName}</strong> on <strong>{company}</strong>\n            </Heading>\n            <Text className="text-sm">\n              Hello {username},\n            </Text>\n            <Text className="text-sm">\n              <strong>{invitedByUsername}</strong> (\n              <Link\n                href={`mailto:${invitedByEmail}`}\n                className="text-blue-600 no-underline"\n              >\n                {invitedByEmail}\n              </Link>\n              ) has invited you to the <strong>{teamName}</strong> team on{\' \'}\n              <strong>{company}</strong>.\n            </Text>\n            <Section className="text-center my-8">\n              <Button\n                pX={20}\n                pY={12}\n                className="bg-[#00A3FF] rounded text-white text-[12px] font-semibold no-underline text-center"\n                href={inviteLink}\n              >\n                Join the team\n              </Button>\n            </Section>\n            <Text className="text-sm">\n              or copy and paste this URL into your browser:{\' \'}\n              <Link\n                href={inviteLink}\n                className="text-blue-600 no-underline"\n              >\n                {inviteLink}\n              </Link>\n            </Text>\n            <Hr className="border border-solid border-[#eaeaea] my-6 mx-0 w-full" />\n            <Text className="opacity-50 text-xs">\n              This invitation was intended for{\' \'}\n              <span className="">{username} </span>.This invite was sent from{\' \'}\n              <span className="">{inviteFromIp}</span> located in{\' \'}\n              <span className="">{inviteFromLocation}</span>. If you were not\n              expecting this invitation, you can ignore this email. If you are\n              concerned about your account\'s safety, please reply to this email to\n              get in touch with us.\n            </Text>\n          </Container>\n        </Body>\n      </Tailwind>\n    </Html>\n  );\n};\n\n\ninterface InviteUserEmailProps {\n  username?: string;\n  userImage?: string;\n  invitedByUsername?: string;\n  invitedByEmail?: string;\n  teamName?: string;\n  teamImage?: string;\n  inviteLink?: string;\n  inviteFromIp?: string;\n  inviteFromLocation?: string;\n  company?: string;\n}\n\nconst baseUrl = process.env.URL\n  ? `https://${process.env.URL}`\n  : \'\';\n\nexport default InviteUserEmail;',Preview:()=>(0,a.jsx)("table",{align:"center",cellPadding:"0",cellSpacing:"0","data-id":"__react-email-container",role:"presentation",style:{maxWidth:"380px",marginLeft:"auto",marginRight:"auto",padding:"10px",width:"100%"},width:"100%",children:(0,a.jsx)("tbody",{children:(0,a.jsx)("tr",{style:{width:"100%"},children:(0,a.jsxs)("td",{children:[(0,a.jsx)("table",{align:"center",cellPadding:"0",cellSpacing:"0","data-id":"react-email-section",role:"presentation",style:{marginTop:"24px"},width:"100%",children:(0,a.jsx)("tbody",{children:(0,a.jsx)("tr",{children:(0,a.jsx)("td",{children:(0,a.jsx)(N(),{alt:"Logo Example","data-id":"react-email-img",height:"80",src:"/static/example-logo.png",style:{display:"block",outline:"none",border:"none",textDecoration:"none",marginTop:"0px",marginBottom:"0px",marginLeft:"auto",marginRight:"auto"},width:"80"})})})})}),(0,a.jsxs)("h1",{"data-id":"react-email-heading",style:{fontSize:"24px",fontWeight:"400",textAlign:"center",padding:"0px",marginTop:"30px",marginBottom:"30px",marginLeft:"0px",marginRight:"0px",lineHeight:"1.4"},children:["Join Project on ",(0,a.jsx)("strong",{children:"ACME"})]}),(0,a.jsx)("p",{"data-id":"react-email-text",style:{margin:"16px 0"},children:"Hello user,"}),(0,a.jsxs)("p",{"data-id":"react-email-text",style:{margin:"16px 0"},children:[(0,a.jsx)("strong",{children:"analasso"})," (",(0,a.jsx)("a",{"data-id":"react-email-link",href:"mailto:analasso@gmail.com",rel:"noopener noreferrer",style:{color:"#00A3FF",textDecoration:"none",textDecorationLine:"none"},target:"_blank",children:"analasso@gmail.com"}),") has invited you to the Project team on ",(0,a.jsx)("strong",{children:"ACME"}),"."]}),(0,a.jsx)("table",{align:"center",cellPadding:"0",cellSpacing:"0","data-id":"react-email-section",role:"presentation",style:{textAlign:"center",marginTop:"32px",marginBottom:"32px"},width:"100%",children:(0,a.jsx)("tbody",{children:(0,a.jsx)("tr",{children:(0,a.jsx)("td",{children:(0,a.jsxs)("a",{"data-id":"react-email-button",href:"https://company.com/teams/invite/foo",rel:"noopener noreferrer",style:{lineHeight:"100%",textDecoration:"none",display:"inline-block",maxWidth:"100%",padding:"12px 20px",backgroundColor:"#00A3FF",borderRadius:"0.25rem",color:"rgb(255,255,255)",fontWeight:"600",textDecorationLine:"none",textAlign:"center"},target:"_blank",children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{style:{maxWidth:"100%",display:"inline-block",lineHeight:"120%"},children:"Join the team"}),(0,a.jsx)("span",{})]})})})})}),(0,a.jsxs)("p",{"data-id":"react-email-text",style:{margin:"16px 0"},children:["or copy and paste this URL into your browser:"," ",(0,a.jsx)("a",{"data-id":"react-email-link",href:"https://company.com/teams/invite/foo",rel:"noopener noreferrer",style:{color:"#00A3FF",textDecoration:"none",textDecorationLine:"none"},target:"_blank",children:"https://company.com/teams/invite/foo"})]}),(0,a.jsx)("hr",{"data-id":"react-email-hr",style:{width:"100%",border:"none",borderTop:"1px solid #eaeaea",borderWidth:"1px",borderStyle:"solid",borderColor:"rgb(234,234,234, 0.1)",marginTop:"26px",marginBottom:"26px",marginLeft:"0px",marginRight:"0px"}}),(0,a.jsxs)("p",{"data-id":"react-email-text",style:{fontSize:"12px",lineHeight:"24px",margin:"16px 0",opacity:"0.5"},children:["This invitation was intended for ",(0,a.jsx)("span",{children:"user "}),".This invite was sent from ",(0,a.jsx)("span",{children:"204.13.186.218"})," located in"," ",(0,a.jsx)("span",{children:"Greendale"}),". If you were not expecting this invitation, you can ignore this email. If you are concerned about your account's safety, please reply to this email to get in touch with us."]})]})})})})},P={codeString:'import { Body, Button, Column, Container, Head, Heading, Hr, Html, Img, Link, Preview, Row, Section, Text, Tailwind } from \'@react-email/components\';\nimport * as React from \'react\';\n\nconst WelcomeEmail = ({\n  username = \'newuser\',\n  company = \'ACME\',\n}: WelcomeEmailProps) => {\n  const previewText = `Welcome to ${company}, ${username}!`;\n\n  return (\n    <Html>\n      <Head />\n      <Preview>{previewText}</Preview>\n      <Tailwind>\n      <Body className="bg-white my-auto mx-auto font-sans">\n        <Container className="my-10 mx-auto p-5 w-[465px]">\n          <Section className="mt-8">\n            <Img\n              src={`${baseUrl}/static/example-logo.png`}\n              width="80"\n              height="80"\n              alt="Logo Example"\n              className="my-0 mx-auto"\n            />\n          </Section>\n          <Heading className="text-2xl font-normal text-center p-0 my-8 mx-0">\n            Welcome to <strong>{company}</strong>, {username}!\n          </Heading>\n          <Text className="text-sm">\n            Hello {username},\n          </Text>\n          <Text className="text-sm">\n            We\'re excited to have you onboard at <strong>{company}</strong>. We hope you enjoy your journey with us. If you have any questions or need assistance, feel free to reach out.\n          </Text>\n          <Section className="text-center mt-[32px] mb-[32px]">\n              <Button\n                pX={20}\n                pY={12}\n                className="bg-[#00A3FF] rounded text-white text-xs font-semibold no-underline text-center"\n                href={`${baseUrl}/get-started`}\n              >\n                Get Started\n              </Button>\n          </Section>\n          <Text className="text-sm">\n            Cheers,\n            <br/>\n            The {company} Team\n          </Text>\n        </Container>\n      </Body>\n      </Tailwind>\n    </Html>\n  );\n};\n\ninterface WelcomeEmailProps {\n  username?: string;\n  company?: string;\n}\n\nconst baseUrl = process.env.URL\n  ? `https://${process.env.URL}`\n  : \'\';\n\nexport default WelcomeEmail;',Preview:()=>(0,a.jsx)("table",{align:"center",cellPadding:"0",cellSpacing:"0","data-id":"__react-email-container",role:"presentation",style:{maxWidth:"380px",marginLeft:"auto",marginRight:"auto",padding:"10px",width:"100%"},width:"100%",children:(0,a.jsx)("tbody",{children:(0,a.jsx)("tr",{style:{width:"100%"},children:(0,a.jsxs)("td",{children:[(0,a.jsx)("table",{align:"center",cellPadding:"0",cellSpacing:"0","data-id":"react-email-section",role:"presentation",style:{marginTop:"24px"},width:"100%",children:(0,a.jsx)("tbody",{children:(0,a.jsx)("tr",{children:(0,a.jsx)("td",{children:(0,a.jsx)(N(),{alt:"Logo Example","data-id":"react-email-img",height:"80",src:"/static/example-logo.png",style:{display:"block",outline:"none",border:"none",textDecoration:"none",marginTop:"0px",marginBottom:"0px",marginLeft:"auto",marginRight:"auto"},width:"80"})})})})}),(0,a.jsxs)("h1",{"data-id":"react-email-heading",style:{fontSize:"24px",fontWeight:"400",textAlign:"center",padding:"0px",marginTop:"30px",marginBottom:"30px",marginLeft:"0px",marginRight:"0px",lineHeight:"1.4"},children:["Welcome to ",(0,a.jsx)("strong",{children:"ACME"}),", user!"]}),(0,a.jsx)("p",{"data-id":"react-email-text",style:{margin:"16px 0"},children:"Hello newuser,"}),(0,a.jsxs)("p",{"data-id":"react-email-text",style:{margin:"16px 0"},children:["We're excited to have you onboard at ",(0,a.jsx)("strong",{children:"ACME"}),". We hope you enjoy your journey with us. If you have any questions or need assistance, feel free to reach out."]}),(0,a.jsx)("table",{align:"center",cellPadding:"0",cellSpacing:"0","data-id":"react-email-section",role:"presentation",style:{textAlign:"center",marginTop:"32px",marginBottom:"32px"},width:"100%",children:(0,a.jsx)("tbody",{children:(0,a.jsx)("tr",{children:(0,a.jsx)("td",{children:(0,a.jsxs)("a",{"data-id":"react-email-button",href:"/get-started",style:{lineHeight:"100%",textDecoration:"none",display:"inline-block",maxWidth:"100%",padding:"12px 20px",backgroundColor:"rgb(0,163,255)",borderRadius:"0.25rem",color:"rgb(255,255,255)",fontWeight:600,textDecorationLine:"none",textAlign:"center"},target:"_blank",children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{style:{maxWidth:"100%",display:"inline-block",lineHeight:"120%"},children:"Get Started"}),(0,a.jsx)("span",{})]})})})})}),(0,a.jsxs)("p",{"data-id":"react-email-text",style:{margin:"16px 0"},children:["Cheers,",(0,a.jsx)("br",{}),"The ACME Team"]})]})})})})},R={codeString:'import { Body, Column, Container, Head, Heading, Hr, Html, Img, Link, Preview, Row, Section, Text, Tailwind } from \'@react-email/components\';\nimport * as React from \'react\';\n\nconst WeeklyDigestEmail = ({\n  company = \'ACME\',\n}: WeeklyDigestEmailProps) => {\n  const previewText = `Weekly digest from ${company} `;\n\n  return (\n    <Html>\n      <Head />\n      <Preview>{previewText}</Preview>\n      <Tailwind>\n      <Body className="bg-white my-auto mx-auto font-sans">\n        <Container className="my-10 mx-auto p-5 w-[465px]">\n          <Section className="mt-8">\n            <Img\n              src={`${baseUrl}/static/example-logo.png`}\n              width="80"\n              height="80"\n              alt="Logo example"\n              className="my-0 mx-auto"\n            />\n          </Section>\n          <Heading className="text-2xl font-normal text-center p-0 my-8 mx-0">\n            Weekly Digest for you from <strong>{company}</strong>\n          </Heading>\n\n\n\n          {/* Each Article as a Row */}\n          <Row>\n            <Column>\n              <Img\n                src={`${baseUrl}/static/email-content-1.jpg`}\n                width="110"\n                height="110"\n                alt="Article Thumbnail"\n                className=\'rounded-2xl mr-5\'\n              />\n            </Column>\n            <Column>\n              <Text className="text-sm">\n                <strong>Understanding Photosynthesis: A Deep Dive:</strong> Photosynthesis is a crucial process for life on Earth. Understand how plants convert light energy into chemical energy, and the impact of this process on our daily lives\n                <Link\n                  href={`#`}\n                  className="text-blue-600 no-underline pl-2"\n                >\n                  Read More\n                </Link>\n              </Text>\n            </Column>\n          </Row>\n\n          <Row>\n            <Column>\n              <Img\n                src={`${baseUrl}/static/email-content-2.jpg`}\n                width="110"\n                height="110"\n                alt="Article Thumbnail"\n                className=\'rounded-2xl mr-5\'\n              />\n            </Column>\n            <Column>\n              <Text className="text-sm">\n                <strong>The Benefits of Indoor Plants</strong> Learn about the numerous benefits of having indoor plants, from improving air quality to boosting mood and productivity. Discover the best indoor plants for your home or office.\n                <Link\n                  href={`#`}\n                  className="text-blue-600 no-underline pl-2"\n                >\n                  Read More\n                </Link>\n              </Text>\n            </Column>\n          </Row>\n\n          <Row>\n            <Column>\n              <Img\n                src={`${baseUrl}/static/email-content-3.jpg`}\n                width="110"\n                height="110"\n                alt="Article Thumbnail"\n                className=\'rounded-2xl mr-5\'\n              />\n            </Column>\n            <Column>\n              <Text className="text-sm">\n                <strong>The Future of Plant-Based Foods:</strong> Plant-based foods are gaining popularity for their health and environmental benefits. Explore the future trends of this growing industry and how it could revolutionize our food system.\n                <Link\n                  href={`#`}\n                  className="text-blue-600 no-underline pl-2"\n                >\n                  Read More\n                </Link>\n              </Text>\n            </Column>\n          </Row>\n\n          <Hr className="border border-solid border-[#eaeaea] my-6 mx-0 w-full" />\n\n          <Text className="text-sm">\n            You can unsubscribe from these emails or update your email preferences {" "}\n            <Link\n              href={`#`}\n              className="text-blue-600 no-underline"\n            >\n              here.\n            </Link>\n          </Text>\n        </Container>\n      </Body>\n      </Tailwind>\n    </Html>\n  );\n};\n\ninterface WeeklyDigestEmailProps {\n  company?: string;\n}\n\nconst baseUrl = process.env.URL\n  ? `https://${process.env.URL}`\n  : \'\';\n\nexport default WeeklyDigestEmail;',Preview:()=>(0,a.jsx)("table",{align:"center",cellPadding:"0",cellSpacing:"0","data-id":"__react-email-container",role:"presentation",style:{maxWidth:"380px",marginLeft:"auto",marginRight:"auto",padding:"10px",width:"100%"},width:"100%",children:(0,a.jsx)("tbody",{children:(0,a.jsx)("tr",{style:{width:"100%"},children:(0,a.jsxs)("td",{children:[(0,a.jsx)("table",{align:"center",cellPadding:"0",cellSpacing:"0","data-id":"react-email-section",role:"presentation",style:{marginTop:"24px"},width:"100%",children:(0,a.jsx)("tbody",{children:(0,a.jsx)("tr",{children:(0,a.jsx)("td",{children:(0,a.jsx)(N(),{alt:"Logo Example","data-id":"react-email-img",height:"80",src:"/static/example-logo.png",style:{display:"block",outline:"none",border:"none",textDecoration:"none",marginTop:"0px",marginBottom:"0px",marginLeft:"auto",marginRight:"auto"},width:"80"})})})})}),(0,a.jsxs)("h1",{"data-id":"react-email-heading",style:{fontSize:"24px",fontWeight:400,textAlign:"center",padding:"0px",marginTop:"30px",marginBottom:"30px",marginLeft:"0px",marginRight:"0px",lineHeight:"1.4"},children:["Weekly Digest for you from ",(0,a.jsx)("strong",{children:"ACME"})]}),(0,a.jsx)("table",{align:"center",cellPadding:"0",cellSpacing:"0","data-id":"react-email-row",role:"presentation",width:"100%",children:(0,a.jsx)("tbody",{style:{width:"100%"},children:(0,a.jsxs)("tr",{style:{width:"100%"},children:[(0,a.jsx)("td",{"data-id":"__react-email-column",width:"30%",children:(0,a.jsx)(N(),{alt:"Article Thumbnail","data-id":"react-email-img",height:110,src:"/static/landing-page/email-content-1.jpg",style:{display:"block",outline:"none",border:"none",textDecoration:"none",borderRadius:"0.5rem"},width:110})}),(0,a.jsx)("td",{"data-id":"__react-email-column",width:"70%",children:(0,a.jsxs)("p",{"data-id":"react-email-text",style:{margin:"16px 0",paddingLeft:"1rem"},children:[(0,a.jsx)("strong",{children:"Understanding Photosynthesis: A Deep Dive:"})," ","Photosynthesis is a crucial process for life on Earth. Understand how plants convert light energy",(0,a.jsx)("a",{"data-id":"react-email-link",href:"#",style:{color:"#00A3FF",textDecoration:"none",textDecorationLine:"none",paddingLeft:"0.5rem"},target:"_blank",children:"Read More"})]})})]})})}),(0,a.jsx)("table",{align:"center",cellPadding:"0",cellSpacing:"0","data-id":"react-email-row",role:"presentation",width:"100%",children:(0,a.jsx)("tbody",{style:{width:"100%"},children:(0,a.jsxs)("tr",{style:{width:"100%"},children:[(0,a.jsx)("td",{"data-id":"__react-email-column",width:"30%",children:(0,a.jsx)(N(),{alt:"Article Thumbnail","data-id":"react-email-img",height:110,src:"/static/landing-page/email-content-2.jpg",style:{display:"block",outline:"none",border:"none",textDecoration:"none",borderRadius:"1rem"},width:110})}),(0,a.jsx)("td",{"data-id":"__react-email-column",width:"70%",children:(0,a.jsxs)("p",{"data-id":"react-email-text",style:{margin:"16px 0",paddingLeft:"1rem"},children:[(0,a.jsx)("strong",{children:"The Benefits of Indoor Plants"})," Learn about the numerous benefits of having indoor plants, from improving air quality to boosting mood and productivity.",(0,a.jsx)("a",{"data-id":"react-email-link",href:"#",style:{color:"#00A3FF",textDecoration:"none",textDecorationLine:"none",paddingLeft:"0.5rem"},target:"_blank",children:"Read More"})]})})]})})}),(0,a.jsx)("table",{align:"center",cellPadding:"0",cellSpacing:"0","data-id":"react-email-row",role:"presentation",width:"100%",children:(0,a.jsx)("tbody",{style:{width:"100%"},children:(0,a.jsxs)("tr",{style:{width:"100%"},children:[(0,a.jsx)("td",{"data-id":"__react-email-column",width:"30%",children:(0,a.jsx)(N(),{alt:"Article Thumbnail","data-id":"react-email-img",height:110,src:"/static/landing-page/email-content-3.jpg",style:{display:"block",outline:"none",border:"none",textDecoration:"none",borderRadius:"1rem"},width:110})}),(0,a.jsx)("td",{"data-id":"__react-email-column",width:"70%",children:(0,a.jsxs)("p",{"data-id":"react-email-text",style:{margin:"16px 0",paddingLeft:"1rem"},children:[(0,a.jsx)("strong",{children:"The Future of Plant-Based Foods:"})," ","Plant-based foods are gaining popularity for their health and environmental benefits. Explore the trends",(0,a.jsx)("a",{"data-id":"react-email-link",href:"#",style:{color:"#00A3FF",textDecoration:"none",textDecorationLine:"none",paddingLeft:"0.5rem"},target:"_blank",children:"Read More"})]})})]})})}),(0,a.jsx)("hr",{"data-id":"react-email-hr",style:{width:"100%",border:"none",borderTop:"1px solid transparent",borderWidth:"1px",borderStyle:"solid",borderColor:"rgba(234,234,234, 0.1)",marginTop:"26px",marginBottom:"26px",marginLeft:"0px",marginRight:"0px"}}),(0,a.jsxs)("p",{"data-id":"react-email-text",style:{margin:"16px 0"},children:["You can unsubscribe from these emails or update your email preferences"," ",(0,a.jsx)("a",{"data-id":"react-email-link",href:"#",style:{color:"#00A3FF",textDecoration:"none",textDecorationLine:"none"},target:"_blank",children:"here."})]})]})})})})},S=()=>(0,a.jsxs)(m.T3.Section,{className:"mx-auto max-w-5xl md:max-w-7xl",children:[(0,a.jsx)(o(),{children:(0,a.jsx)("link",{as:"fetch",crossOrigin:"anonymous",href:"/static/landing-page/3d-react.mp4",rel:"preload"})}),(0,a.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"mx-auto mb-4",controls:!1,height:170,poster:"/static/landing-page/3d-react-fallback.jpg",src:"/static/landing-page/3d-react.mp4",width:170}),(0,a.jsx)(m.T3.Title,{className:"text-center",children:"Develop emails using React"}),(0,a.jsxs)(m.T3.Description,{className:"text-center",children:["Create beautiful templates without having to deal with <table> layouts and HTML. ",(0,a.jsx)("br",{className:"hidden sm:block"})," Powered by react-email, our open source component library."]}),(0,a.jsxs)(m.T3.Cta,{className:"justify-center",children:[(0,a.jsx)(m.cP,{asChild:!0,iconRight:(0,a.jsx)(c.VG,{}),size:"3",children:(0,a.jsx)(l(),{href:"/signup",children:"Get Started"})}),(0,a.jsx)(m.cP,{asChild:!0,appearance:"fade",iconRight:(0,a.jsx)(c.VG,{}),size:"3",children:(0,a.jsx)(l(),{href:"https://react.email/docs",children:"Check the Docs"})})]}),(0,a.jsx)(E,{})]}),E=()=>{let[e,n]=d.useState("desktop"),[t,r]=d.useState("dark");return(0,a.jsxs)(k.Root,{defaultValue:H[0].name,children:[(0,a.jsxs)(k.Controls,{children:[(0,a.jsx)(i.fC,{onCheckedChange:e=>n(e?"mobile":"desktop"),value:"mobile"===e?"on":"off",children:(0,a.jsxs)(i.bU,{"aria-label":"Email view mode",className:"group hidden items-center rounded-lg border border-slate-6 md:flex",children:[(0,a.jsx)("div",{className:"inline-flex h-8 w-8 items-center justify-center rounded-l-lg text-slate-11 transition duration-200 ease-in-out hover:text-slate-12 group-data-[state='unchecked']:bg-slate-2 group-data-[state='unchecked']:text-white",children:(0,a.jsx)(c.re,{})}),(0,a.jsx)("div",{className:"inline-flex h-8 w-8 items-center justify-center rounded-r-lg text-slate-11 transition duration-200 ease-in-out hover:text-slate-12 group-data-[state='checked']:bg-slate-2 group-data-[state='checked']:text-white",children:(0,a.jsx)(c.S9,{})})]})}),(0,a.jsx)(i.fC,{onCheckedChange:e=>r(e?"light":"dark"),value:"light"===t?"on":"off",children:(0,a.jsxs)(i.bU,{"aria-label":"Email appearance mode",className:"group hidden items-center rounded-lg border border-slate-6 md:flex",children:[(0,a.jsx)("div",{className:"inline-flex h-8 w-8 items-center justify-center rounded-l-lg text-slate-11 transition duration-200 ease-in-out hover:text-slate-12 group-data-[state='unchecked']:bg-slate-2 group-data-[state='unchecked']:text-white",children:(0,a.jsx)(c.C9,{})}),(0,a.jsx)("div",{className:"inline-flex h-8 w-8 items-center justify-center rounded-r-lg text-slate-11 transition duration-200 ease-in-out hover:text-slate-12 group-data-[state='checked']:bg-slate-2 group-data-[state='checked']:text-white",children:(0,a.jsx)(c.O3,{})})]})})]}),(0,a.jsxs)(k.Content,{children:[(0,a.jsx)(k.Sidebar,{files:H}),H.map(n=>(0,a.jsxs)(k.Editor,{value:n.name,children:[(0,a.jsx)(k.Code,{className:"hidden md:block",value:n.code}),(0,a.jsx)(k.Preview,{className:"pointer-events-none",device:e,mode:t,value:n.preview})]},n.name))]})]})},H=[{name:"user-welcome.tsx",preview:(0,a.jsx)(P.Preview,{}),code:P.codeString},{name:"reset-password.tsx",preview:(0,a.jsx)(C.Preview,{}),code:C.codeString},{name:"user-invite.tsx",preview:(0,a.jsx)(L.Preview,{}),code:L.codeString},{name:"weekly-digest.tsx",preview:(0,a.jsx)(R.Preview,{}),code:R.codeString}]},60761:function(e,n,t){t.d(n,{bU:function(){return v},fC:function(){return j}});var a=t(87462),i=t(67294),r=t(36206),o=t(28771),s=t(25360),l=t(77342),d=t(57898),c=t(7546),m=t(75320);let x="Switch",[h,p]=(0,s.b)(x),[g,u]=h(x),f=(0,i.forwardRef)((e,n)=>{let{__scopeSwitch:t,name:s,checked:d,defaultChecked:c,required:x,disabled:h,value:p="on",onCheckedChange:u,...f}=e,[y,j]=(0,i.useState)(null),v=(0,o.e)(n,e=>j(e)),k=(0,i.useRef)(!1),T=!y||!!y.closest("form"),[N=!1,C]=(0,l.T)({prop:d,defaultProp:c,onChange:u});return(0,i.createElement)(g,{scope:t,checked:N,disabled:h},(0,i.createElement)(m.WV.button,(0,a.Z)({type:"button",role:"switch","aria-checked":N,"aria-required":x,"data-state":w(N),"data-disabled":h?"":void 0,disabled:h,value:p},f,{ref:v,onClick:(0,r.M)(e.onClick,e=>{C(e=>!e),T&&(k.current=e.isPropagationStopped(),k.current||e.stopPropagation())})})),T&&(0,i.createElement)(b,{control:y,bubbles:!k.current,name:s,value:p,checked:N,required:x,disabled:h,style:{transform:"translateX(-100%)"}}))}),y=(0,i.forwardRef)((e,n)=>{let{__scopeSwitch:t,...r}=e,o=u("SwitchThumb",t);return(0,i.createElement)(m.WV.span,(0,a.Z)({"data-state":w(o.checked),"data-disabled":o.disabled?"":void 0},r,{ref:n}))}),b=e=>{let{control:n,checked:t,bubbles:r=!0,...o}=e,s=(0,i.useRef)(null),l=(0,d.D)(t),m=(0,c.t)(n);return(0,i.useEffect)(()=>{let e=s.current,n=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(l!==t&&n){let a=new Event("click",{bubbles:r});n.call(e,t),e.dispatchEvent(a)}},[l,t,r]),(0,i.createElement)("input",(0,a.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:t},o,{tabIndex:-1,ref:s,style:{...e.style,...m,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function w(e){return e?"checked":"unchecked"}let j=f,v=y}}]);