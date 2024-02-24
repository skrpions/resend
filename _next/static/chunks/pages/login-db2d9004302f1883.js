(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83459],{83236:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return a(38674)}])},38674:function(e,s,a){"use strict";a.r(s),a.d(s,{__N_SSP:function(){return y}});var l=a(85893),t=a(41664),i=a.n(t),n=a(11163),r=a(67294),c=a(65511),o=a(11269),m=a(78898),d=a(77472),u=a(21669),h=a(41683),x=a(83217),p=a(40159),f=a(83322),g=a(58845),j=a(46032),b=a(59145);let N=e=>"We sent an email to ".concat(e," to confirm the email address change."),w=()=>{let e=(0,n.useRouter)(),s=e.query.email||"",a=e.query.confirm||"",t=s.length>0&&a.length>0?N(s):"";return(0,l.jsxs)("div",{className:"bg-root px-4",children:[(0,l.jsx)(b.cP,{asChild:!0,appearance:"fade",className:"absolute left-0 top-6 md:left-6",iconLeft:(0,l.jsx)(d.ed,{}),children:(0,l.jsx)(i(),{href:"/home",children:"Home"})}),(0,l.jsx)("div",{className:"flex h-screen items-center justify-center",children:(0,l.jsxs)("main",{className:"mx-auto min-h-[590px] w-full max-w-[450px]",children:[(0,l.jsx)(c.c,{className:"mx-auto block sm:mx-0"}),(0,l.jsx)(m.X,{as:"h1",className:"mb-1.5 mt-8 text-center sm:text-left",size:"5",children:"Log in to Resend"}),(0,l.jsxs)(x.x,{as:"p",className:"mb-8 text-center sm:text-left",size:"3",children:["Don't have an account?"," ",(0,l.jsx)(i(),{className:"text-blue-10",href:"/signup",children:"Sign up"}),"."]}),t&&(0,l.jsx)("div",{className:"mt-8 rounded-md border border-green-6 bg-green-3 p-3 text-sm text-green-11",children:t}),(0,l.jsx)(v,{})]})})]})},v=()=>{let{showToast:e}=(0,j.pm)(),s=(0,n.useRouter)(),[a,t]=r.useState(""),[c,m]=r.useState(""),[b,N]=r.useState("disabled"),w=async l=>{l.preventDefault();try{N("loading");let{data:e}=await f._.post("/api/auth/signin/email",{email:a,password:c});if(e.success&&!e.mfa){s.push("/overview");return}if(e.success&&e.mfa){s.push("/auth/mfa");return}}catch(s){(0,g.H)(s)&&e({title:s.message,appearance:"red"}),N("disabled")}};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("form",{onSubmit:w,children:[(0,l.jsxs)("div",{className:"mb-4 space-y-2",children:[(0,l.jsx)(h._,{htmlFor:"email",children:"Email"}),(0,l.jsx)(p.n.Input,{autoFocus:!0,required:!0,id:"email",name:"email",onChange:e=>{e.target.value.length>0&&"disabled"===b&&N("normal"),0===e.target.value.length&&N("disabled"),t(e.target.value)},placeholder:"alan.turing@example.com",size:"3",type:"email",value:a})]}),(0,l.jsxs)("div",{className:"mb-6 space-y-2",children:[(0,l.jsxs)("div",{className:"space-between flex flex-row",children:[(0,l.jsx)(h._,{className:"flex-1",htmlFor:"password",children:"Password"}),(0,l.jsx)(i(),{className:"text-sm",href:"/auth/reset-password?email=".concat(a),tabIndex:-1,children:"Forgot your password?"})]}),(0,l.jsx)(p.n.Input,{required:!0,id:"password",name:"password",onChange:e=>{e.target.value.length>0&&"disabled"===b&&a.length>0&&N("normal"),0===e.target.value.length&&N("disabled"),m(e.target.value)},placeholder:"••••••••••••",size:"3",type:"password",value:c})]}),(0,l.jsx)(o.z,{className:"block w-full",iconRight:(0,l.jsx)(d.Ec,{size:22}),size:"3",state:b,type:"submit",children:"Continue"}),(0,l.jsxs)("div",{className:"mb-6 mt-6 flex items-center justify-center",children:[(0,l.jsx)("div",{"aria-hidden":"true",className:"h-px w-full bg-slate-6","data-orientation":"horizontal",role:"separator"}),(0,l.jsx)(x.x,{className:"mx-4",size:"1",children:"OR"}),(0,l.jsx)("div",{"aria-hidden":"true",className:"h-px w-full bg-slate-6","data-orientation":"horizontal",role:"separator"})]})]}),(0,l.jsxs)("div",{className:"mb-4 flex flex-col items-center gap-4 sm:flex-row",children:[(0,l.jsx)("form",{action:"/api/auth/signin/github",className:"block w-full",method:"GET",children:(0,l.jsx)(o.z,{appearance:"gray",className:"block w-full",iconLeft:(0,l.jsx)(d.Uv,{}),size:"3",type:"submit",children:"Login with GitHub"})}),(0,l.jsx)("form",{action:"/api/auth/signin/google",className:"block w-full",method:"GET",children:(0,l.jsx)(o.z,{appearance:"gray",className:"block w-full",iconLeft:(0,l.jsx)(u.v,{}),size:"3",type:"submit",children:"Login with Google"})})]}),(0,l.jsx)(o.z,{appearance:"gray",className:"mb-8 block w-full",onClick:()=>s.push("/sso"),size:"3",children:"Login with SSO"}),(0,l.jsxs)(x.x,{as:"p",size:"1",children:["By signing in, you agree to our"," ",(0,l.jsx)(i(),{className:"text-blue-10",href:"/legal/terms-of-service",children:"Terms of Service"})," ","and"," ",(0,l.jsx)(i(),{className:"text-blue-10",href:"/legal/privacy-policy",children:"Privacy Policy"}),"."]})]})};w.theme="dark";var y=!0;s.default=w}},function(e){e.O(0,[41664,77472,41076,92888,49774,40179],function(){return e(e.s=83236)}),_N_E=e.O()}]);