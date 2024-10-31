(()=>{var e={694:(e,s,t)=>{"use strict";var r=t(925);function i(){}function n(){}n.resetWarningCache=i,e.exports=function(){function e(e,s,t,i,n,a){if(a!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function s(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:s,element:e,elementType:e,instanceOf:s,node:e,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:n,resetWarningCache:i};return t.PropTypes=t,t}},556:(e,s,t)=>{e.exports=t(694)()},925:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},s={};function t(r){var i=s[r];if(void 0!==i)return i.exports;var n=s[r]={exports:{}};return e[r](n,n.exports,t),n.exports}t.n=e=>{var s=e&&e.__esModule?()=>e.default:()=>e;return t.d(s,{a:s}),s},t.d=(e,s)=>{for(var r in s)t.o(s,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:s[r]})},t.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),(()=>{"use strict";var e=t(556),s=t.n(e);const r=window.wp.apiFetch,i=window.wp.components,n=window.wp.element,a=window.wp.hooks,l=window.wp.i18n,o=window.wp.primitives,c=window.ReactJSXRuntime,u=({plugin:e})=>{const{slug:s}=window.teydeaStudio[e].plugin,t=`ts-plugin-icon-${s}`;switch(e){case"hiringHub":return(0,c.jsx)("div",{className:"tsc-plugin-icon",children:(0,c.jsxs)(o.SVG,{fill:"none",height:"256",viewBox:"0 0 256 256",width:"256",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsx)("mask",{height:"256",id:(0,l.sprintf)("%s-a",t),maskUnits:"userSpaceOnUse",style:{maskType:"alpha"},width:"256",x:"0",y:"0",children:(0,c.jsx)(o.Path,{fill:"#fff",d:"M0 0h256v256H0z"})}),(0,c.jsxs)(o.G,{mask:(0,l.sprintf)("url(#%s-a)",t),children:[(0,c.jsx)(o.Path,{fill:"#111",d:"M-.296 10.24C-.296 4.585 4.29 0 9.944 0h235.52c5.656 0 10.24 4.585 10.24 10.24v235.52c0 5.655-4.584 10.24-10.24 10.24H9.944c-5.655 0-10.24-4.585-10.24-10.24V10.24Z"}),(0,c.jsx)(o.Path,{fill:"#fcebd8",d:"m279.269 249.611-44.688-44.688a15.895 15.895 0 0 0-12.186-4.598l-18.774-18.773a90.092 90.092 0 0 0 16.326-51.76c0-49.995-40.672-90.672-90.672-90.672s-90.662 40.677-90.662 90.677c0 50 40.672 90.672 90.672 90.672a90.13 90.13 0 0 0 51.76-16.325l18.774 18.773a15.884 15.884 0 0 0 4.597 12.182l44.688 44.688a15.947 15.947 0 0 0 11.317 4.677c4.102 0 8.192-1.557 11.312-4.677l7.542-7.542a16.015 16.015 0 0 0 0-22.629l-.006-.005ZM49.279 129.797c0-44.112 35.889-80 80.001-80s80 35.888 80 80-35.888 80-80 80-80-35.888-80-80Zm147.66 60.155 14.992 14.992-7.499 7.499-14.992-14.992a90.554 90.554 0 0 0 7.499-7.499Zm74.784 74.741-7.542 7.542a5.354 5.354 0 0 1-7.546 0l-44.688-44.688a5.345 5.345 0 0 1 0-7.547l7.541-7.541a5.347 5.347 0 0 1 7.547 0l44.688 44.688a5.343 5.343 0 0 1 0 7.546Z"}),(0,c.jsx)(o.Path,{fill:"#fcebd8",d:"M129.28 60.459c-38.23 0-69.333 31.104-69.333 69.333s31.104 69.333 69.333 69.333 69.333-31.104 69.333-69.333c0-38.23-31.104-69.333-69.333-69.333Zm-32 118.442v-6.442c0-14.704 11.963-26.667 26.667-26.667h10.666c14.704 0 26.667 11.963 26.667 26.667v6.442c-9.211 6.027-20.192 9.558-32 9.558s-22.789-3.536-32-9.558Zm32-49.109c-8.821 0-16-7.179-16-16s7.179-16 16-16 16 7.179 16 16-7.179 16-16 16Zm42.544 40.277a37.354 37.354 0 0 0-28.288-33.818 26.618 26.618 0 0 0 12.411-22.454c0-14.704-11.963-26.666-26.667-26.666-14.704 0-26.667 11.962-26.667 26.666a26.608 26.608 0 0 0 3.322 12.821 26.607 26.607 0 0 0 9.089 9.633 37.348 37.348 0 0 0-28.288 33.818 58.399 58.399 0 0 1-16.123-40.277c0-32.347 26.32-58.667 58.667-58.667s58.667 26.32 58.667 58.667c0 15.595-6.16 29.755-16.123 40.277Z"})]})]})});case"passwordRequirements":return(0,c.jsx)("div",{className:"tsc-plugin-icon",children:(0,c.jsxs)(o.SVG,{fill:"none",height:"256",viewBox:"0 0 256 256",width:"256",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsx)("clipPath",{id:(0,l.sprintf)("%s-a",t),children:(0,c.jsx)(o.Path,{d:"M0 0h256v256H0z"})}),(0,c.jsx)("mask",{height:"256",id:(0,l.sprintf)("%s-b",t),maskUnits:"userSpaceOnUse",width:"256",x:"0",y:"0",children:(0,c.jsx)(o.Path,{fill:"#fff",d:"M0 0h256v256H0z"})}),(0,c.jsxs)(o.G,{clipPath:(0,l.sprintf)("url(#%s-a)",t),mask:(0,l.sprintf)("url(#%s-b)",t),children:[(0,c.jsx)(o.Rect,{fill:"#111",height:"256",rx:"10.24",width:"256",x:"-.296"}),(0,c.jsxs)(o.G,{fill:"#fcebd8",children:[(0,c.jsx)(o.Path,{d:"M126.607 223.812a3.574 3.574 0 0 0 2.32 0c72.851-25.235 76.539-86.466 76.539-87.231V59.717a3.482 3.482 0 0 0-2.737-3.41c-54.946-12.06-72.828-24.074-72.99-24.19a3.483 3.483 0 0 0-3.99 0c-.185.116-17.673 12.107-72.967 24.19a3.48 3.48 0 0 0-2.737 3.41v77.026c.024.603 3.711 61.834 76.562 87.069zM57.027 62.5c45.042-10.066 64.942-19.992 70.74-23.448 5.914 3.456 25.699 13.382 70.741 23.448v73.918c0 2.32-3.595 56.57-70.741 80.413-67.169-23.843-70.648-78.116-70.764-80.25z"}),(0,c.jsx)(o.Path,{d:"M126.561 206.881a3.46 3.46 0 0 0 2.32 0c57.357-20.875 60.303-71.251 60.303-71.901v-62.9a3.457 3.457 0 0 0-2.714-3.387c-42.653-9.764-56.569-19.552-56.685-19.645a3.48 3.48 0 0 0-4.105 0c-.139.116-14.056 9.904-56.709 19.668a3.455 3.455 0 0 0-2.69 3.363v63.041c.023.51 2.922 50.979 60.28 71.761zM73.239 74.863c33.793-7.956 49.333-15.819 54.505-18.88 5.172 3.061 20.712 10.924 54.505 18.88v59.955c0 1.856-2.783 45.715-54.505 65.104-51.722-19.389-54.412-63.248-54.505-64.942z"}),(0,c.jsx)(o.Path,{d:"M105.014 167.428h45.46a9.761 9.761 0 0 0 9.741-9.741v-35.278a9.745 9.745 0 0 0-6.013-8.999 9.736 9.736 0 0 0-3.728-.742h-1.856V98.752a20.873 20.873 0 1 0-41.748 0v13.916h-1.856a9.736 9.736 0 0 0-6.888 2.853 9.748 9.748 0 0 0-2.853 6.888v35.278a9.762 9.762 0 0 0 9.741 9.741zm-2.783-45.019a2.784 2.784 0 0 1 2.783-2.783h45.46a2.784 2.784 0 0 1 2.783 2.783v35.278a2.784 2.784 0 0 1-2.783 2.783h-45.46a2.784 2.784 0 0 1-2.783-2.783zm11.597-23.657a13.915 13.915 0 1 1 27.832 0v13.916h-27.832z"}),(0,c.jsx)(o.Path,{d:"M124.265 147.319v4.082a3.48 3.48 0 1 0 6.958 0v-4.082a11.408 11.408 0 0 0 7.795-12.628 11.41 11.41 0 1 0-14.753 12.628zm3.479-15.238a4.457 4.457 0 0 1 4.116 2.755 4.453 4.453 0 1 1-4.116-2.755z"})]})]})]})});case"passwordResetEnforcement":return(0,c.jsx)("div",{className:"tsc-plugin-icon",children:(0,c.jsxs)(o.SVG,{fill:"none",height:"256",viewBox:"0 0 256 256",width:"256",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsx)("clipPath",{id:(0,l.sprintf)("%s-b",t),children:(0,c.jsx)(o.Path,{d:"M31.744 31.744h192.512v192.512H31.744z"})}),(0,c.jsx)("mask",{height:"256",id:(0,l.sprintf)("%s-a",t),maskUnits:"userSpaceOnUse",width:"256",x:"0",y:"0",children:(0,c.jsx)(o.Path,{d:"M0 0h256v256H0z",fill:"#fff"})}),(0,c.jsx)("mask",{height:"194",id:(0,l.sprintf)("%s-c",t),maskUnits:"userSpaceOnUse",width:"194",x:"31",y:"31",children:(0,c.jsx)(o.Path,{d:"M31.744 31.744h192.512v192.512H31.744z",fill:"#fff"})}),(0,c.jsxs)(o.G,{mask:(0,l.sprintf)("url(#%s-a)",t),children:[(0,c.jsx)(o.Rect,{fill:"#111",height:"256",rx:"10.24",width:"256",x:"-.296"}),(0,c.jsxs)(o.G,{clipPath:(0,l.sprintf)("url(#%s-b)",t),mask:(0,l.sprintf)("url(#%s-c)",t),children:[(0,c.jsx)(o.Path,{d:"m215.503 116.44 4.907-29.664-7.994 3.432c-9.869-22.07-27.615-39.125-50.118-48.11-22.945-9.161-48.085-8.839-70.788.908-22.702 9.747-40.25 27.751-49.412 50.696l13.968 5.577c7.672-19.214 22.366-34.291 41.377-42.452 19.012-8.163 40.064-8.433 59.278-.761 18.773 7.495 33.592 21.697 41.875 40.076l-7.979 3.426zM40.497 139.56l-4.907 29.664 7.994-3.432c9.87 22.069 27.615 39.125 50.119 48.11 22.945 9.161 48.085 8.839 70.787-.908 22.703-9.747 40.251-27.751 49.412-50.696l-13.967-5.577c-7.672 19.214-22.367 34.291-41.378 42.452-19.011 8.163-40.063 8.433-59.277.761-18.773-7.495-33.593-21.697-41.876-40.076l7.98-3.426z",stroke:"#fcebd8",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"7.52"}),(0,c.jsx)(o.Path,{d:"M92.526 101.467a6.31 6.31 0 0 1 0-8.928 6.317 6.317 0 0 1 8.931 0 6.312 6.312 0 0 1 0 8.928 6.316 6.316 0 0 1-8.931 0z",fill:"#fcebd8"}),(0,c.jsxs)(o.G,{stroke:"#fcebd8",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"7.52",children:[(0,c.jsx)(o.Path,{d:"m131.753 116.968 40.931 40.916-1.055 13.724-13.729 1.056-4.755-4.753-2.357-7.497-3.52-3.519-7.03-1.886-4.577-4.575-1.417-6.558-4.107-4.106-7.148-2.004-6.021-6.018"}),(0,c.jsx)(o.Path,{d:"M84.693 125.302c-11.214-11.209-11.214-29.383 0-40.593 11.213-11.209 29.394-11.209 40.607 0 11.214 11.21 11.214 29.384 0 40.593-11.213 11.209-29.394 11.209-40.607 0z"})]})]})]})]})})}return null};u.propTypes={plugin:e.string.isRequired};const d=({plugin:e,actions:s,children:t})=>{const{pageTitle:r}=window.teydeaStudio[e].settingsPage;return(0,c.jsxs)("div",{className:"tsc-settings-container",children:[(0,c.jsxs)("div",{className:"tsc-settings-container__header",children:[(0,c.jsx)(u,{plugin:e}),(0,c.jsx)("h1",{children:r}),(0,c.jsx)("div",{className:"tsc-settings-container__actions",children:s})]}),(0,c.jsx)("div",{className:"tsc-settings-container__container",children:t})]})};d.propTypes={plugin:e.string.isRequired,actions:e.element.isRequired,children:e.element.isRequired};const p=({plugin:e})=>{const{helpLinks:s}=window.teydeaStudio[e].settingsPage,{slug:t}=window.teydeaStudio[e].plugin;return(0,c.jsx)("div",{className:"tsc-settings-sidebar",children:(0,c.jsxs)(i.Panel,{children:[0<s.length&&(0,c.jsx)(i.PanelBody,{title:(0,l.__)("Help & support","password-requirements"),initialOpen:!0,className:"tsc-settings-sidebar__panel",children:(0,c.jsx)("ul",{children:s.map((({url:e,title:s},t)=>(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:e,target:"_blank",rel:"noreferrer noopener",children:s})},t)))})}),(0,a.applyFilters)("password_requirements__upsell_panel",(0,c.jsx)(n.Fragment,{})),(0,a.applyFilters)("password_requirements__promoted_plugins_panel",(0,c.jsx)(n.Fragment,{})),(0,c.jsxs)(i.PanelBody,{title:(0,l.__)("Write a review","password-requirements"),initialOpen:!1,className:"tsc-settings-sidebar__panel",children:[(0,c.jsx)("p",{children:(0,l.__)("If you like this plugin, share it with your network and write a review on WordPress.org to help others find it. Thank you!","password-requirements")}),(0,c.jsx)("a",{className:"components-button is-secondary is-compact",href:`https://wordpress.org/support/plugin/${t}/reviews/#new-post`,rel:"noopener noreferrer",target:"_blank",children:(0,l.__)("Write a review","password-requirements")})]}),(0,c.jsxs)(i.PanelBody,{title:(0,l.__)("Share your feedback","password-requirements"),initialOpen:!1,className:"tsc-settings-sidebar__panel",children:[(0,c.jsx)("p",{children:(0,l.__)("We're eager to hear your feedback, feature requests, suggestions for improvements etc; we're waiting for a message from you!","password-requirements")}),(0,c.jsx)("a",{className:"components-button is-secondary is-compact",href:"mailto:hello@teydeastudio.com",rel:"noopener noreferrer",target:"_blank",children:(0,l.__)("Contact us","password-requirements")})]})]})})};p.propTypes={plugin:e.string.isRequired};const m=({message:e})=>(0,c.jsxs)("div",{className:"tsc-waiting-indicator",children:[(0,c.jsx)(i.Spinner,{}),(0,c.jsx)("p",{children:e})]});m.propTypes={message:e.string.isRequired};const h=(e,s)=>{switch(s.type){case"fetchedSettings":return{...e,settings:s.settings,hasFetchedSettings:!0,isSettingsFetchFailed:!1};case"settingsFetchFailed":return{...e,hasFetchedSettings:!0,isSettingsFetchFailed:!0};case"saveSettings":return{...e,isSavingSettings:!0};case"settingsSaved":return{...e,notices:[...e.notices,{id:`n:${Date.now().toString()}`,status:"success",content:(0,l.__)("Settings saved","password-requirements"),isDismissible:!0,explicitDismiss:!1}],isSavingSettings:!1};case"settingsSaveFailed":{let t=(0,l.__)("Settings were not saved, something went wrong.","password-requirements");return"Invalid parameter(s): settings"===s.error.message&&"string"==typeof s.error?.data?.params?.settings&&(t=(0,l.sprintf)(
// Translators: %s - error message.
// Translators: %s - error message.
(0,l.__)("Settings were not saved due to validation error: %s Please update the invalid field value and try again.","password-requirements"),s.error.data.params.settings)),{...e,notices:[...e.notices,{id:`n:${Date.now().toString()}`,status:"error",content:t,isDismissible:!0,explicitDismiss:!1}],isSavingSettings:!1}}case"settingsChanged":{const t=(0,a.applyFilters)("password_requirements__pre_change_settings",s.settings);return{...e,settings:t}}case"noticeRemoved":return{...e,notices:[...e.notices.filter((e=>e.id!==s.noticeId))]}}return e},g=({plugin:e})=>{const{slug:s}=window.teydeaStudio[e].plugin,{nonce:t}=window.teydeaStudio[e].settingsPage,[o,u]=(0,n.useReducer)(h,{notices:[],settings:{},hasFetchedSettings:!1,isSettingsFetchFailed:!1,isSavingSettings:!1}),g=s=>(0,c.jsx)(d,{plugin:e,actions:(0,c.jsx)(i.Button,{variant:"primary",disabled:o.isSavingSettings||!o.hasFetchedSettings||o.isSettingsFetchFailed,isBusy:o.isSavingSettings,onClick:()=>{u({type:"saveSettings"})},children:o.isSavingSettings?(0,l.__)("Saving…","password-requirements"):(0,l.__)("Save all settings","password-requirements")}),children:s}),w=(0,a.applyFilters)("password_requirements__settings_page_tabs",[],o,u);return(0,n.useEffect)((()=>{!0===o.isSavingSettings&&r({path:`/${s}/v1/settings`,method:"POST",data:{nonce:t,settings:o.settings}}).then((e=>(u({type:"settingsSaved"}),e))).catch((e=>{console.error(e),u({type:"settingsSaveFailed",error:e})}))}),[o.isSavingSettings]),(0,n.useEffect)((()=>{r({path:`/${s}/v1/settings`,method:"GET"}).then((e=>(u({type:"fetchedSettings",settings:e}),e))).catch((e=>{console.error(e),u({type:"settingsFetchFailed"})}))}),[]),!1===o.hasFetchedSettings?g((0,c.jsx)("div",{className:"tsc-settings-tabs",children:(0,c.jsx)(m,{message:(0,l.__)("Loading…","password-requirements")})})):!0===o.isSettingsFetchFailed?g((0,c.jsxs)(i.Notice,{status:"error",isDismissible:!1,children:[(0,c.jsx)("p",{children:(0,l.__)("Settings fetch failed.","password-requirements")}),(0,c.jsx)("p",{children:(0,l.__)("Please try again; if the issue will be repeating, reach out to our support team.","password-requirements")})]})):g((0,c.jsxs)(n.Fragment,{children:[(0,c.jsx)(i.SnackbarList,{notices:o.notices,onRemove:e=>{u({type:"noticeRemoved",noticeId:e})}}),(0,c.jsxs)("div",{className:"tsc-settings-tabs",children:[(0,c.jsx)(i.TabPanel,{tabs:w,className:"tsc-settings-tabs__wrapper",children:e=>(0,c.jsx)(n.Fragment,{children:e.component},e.name)}),(0,c.jsx)(p,{plugin:e})]})]}))};g.propTypes={plugin:e.string.isRequired};const w=({plugins:e})=>{const s=[];for(const t of e){const{url:e,name:r,description:i}=t;s.push((0,c.jsxs)("p",{children:[(0,c.jsx)("strong",{children:(0,c.jsx)("a",{href:e,rel:"noopener noreferrer",target:"_blank",children:r})})," - ",i]}))}return 0===s.length?null:(0,c.jsx)(i.PanelBody,{title:(0,l.__)("Our other WordPress plugins","password-requirements"),initialOpen:!0,children:s})};w.propTypes={plugins:e.shape({url:e.string.isRequired,name:e.string.isRequired,description:e.string.isRequired}).isRequired};const x=({url:e,benefits:s})=>{const t="ts-upsell-panel-icon";return(0,c.jsxs)(i.PanelBody,{title:(0,l.__)("Buy the PRO version","password-requirements"),initialOpen:!0,className:"tsc-upsell-panel",children:[0<s.length&&(0,c.jsx)("ul",{children:s.map(((e,s)=>(0,c.jsx)("li",{children:e},s)))}),(0,c.jsxs)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 511.958 511.958",className:"tsc-upsell-panel__background-icon",children:[(0,c.jsxs)("linearGradient",{id:(0,l.sprintf)("%s-a",t),x1:"255.979",x2:"255.979",y1:"511.958",y2:"0",gradientUnits:"userSpaceOnUse",children:[(0,c.jsx)("stop",{offset:"0",stopColor:"#fd5900"}),(0,c.jsx)("stop",{offset:"1",stopColor:"#ffde00"})]}),(0,c.jsx)(o.Path,{fill:(0,l.sprintf)("url(#%s-a)",t),d:"M255.979 74.979c-99.371 0-181 81.651-181 181 0 99.371 81.651 181 181 181 99.371 0 181-81.651 181-181 0-99.371-81.652-181-181-181zm0 332c-83.262 0-151-67.738-151-151s67.738-151 151-151 151 67.738 151 151-67.739 151-151 151zM507.1 276.466c6.477-12.829 6.477-28.146 0-40.975l-6.707-13.285a15.376 15.376 0 0 1-1.478-9.328l2.273-14.707c2.196-14.202-2.537-28.77-12.662-38.969l-10.483-10.562a15.369 15.369 0 0 1-4.288-8.416l-2.382-14.69c-2.276-14.028-11.105-26.302-23.66-32.927 0 0-13.402-7.895-13.66-8.027a15.359 15.359 0 0 1-6.677-6.678l-6.806-13.234c-6.417-12.48-19.502-21.709-34.149-24.085l-14.689-2.382a15.38 15.38 0 0 1-8.416-4.287L352.755 23.43c-10.199-10.124-24.764-14.854-38.968-12.662l-14.707 2.273a15.369 15.369 0 0 1-9.329-1.477l-13.285-6.707c-12.828-6.476-28.145-6.477-40.973 0l-13.286 6.707a15.394 15.394 0 0 1-9.328 1.478l-14.707-2.273c-14.205-2.197-28.77 2.538-38.969 12.662L148.64 33.914a15.369 15.369 0 0 1-8.415 4.288l-14.691 2.382c-14.646 2.376-27.731 11.604-34.148 24.085l-6.805 13.234a15.369 15.369 0 0 1-6.679 6.678l-13.235 6.806c-12.48 6.417-21.709 19.502-24.084 34.148L38.2 140.226a15.366 15.366 0 0 1-4.288 8.415L23.43 159.203c-10.124 10.199-14.857 24.766-12.662 38.968l2.274 14.708a15.36 15.36 0 0 1-1.478 9.327l-6.707 13.285c-6.476 12.828-6.476 28.145 0 40.974l6.707 13.285a15.376 15.376 0 0 1 1.478 9.328l-2.274 14.708c-2.195 14.202 2.539 28.769 12.662 38.968l10.484 10.563a15.365 15.365 0 0 1 4.288 8.416l2.383 14.689c2.375 14.647 11.604 27.732 24.084 34.149l13.234 6.805a15.371 15.371 0 0 1 6.679 6.679l6.805 13.235c6.418 12.48 19.503 21.709 34.149 24.084l14.69 2.383a15.374 15.374 0 0 1 8.415 4.287l10.563 10.485c10.201 10.124 24.767 14.854 38.968 12.661l14.708-2.274a15.367 15.367 0 0 1 9.327 1.478l13.286 6.707a45.47 45.47 0 0 0 20.486 4.857 45.471 45.471 0 0 0 20.487-4.857l13.285-6.707a15.386 15.386 0 0 1 9.328-1.478l14.707 2.273c14.202 2.194 28.769-2.538 38.969-12.662l10.562-10.484a15.368 15.368 0 0 1 8.416-4.288l14.689-2.383c14.028-2.275 26.303-11.104 32.928-23.66 0 0 7.895-13.402 8.027-13.66a15.372 15.372 0 0 1 6.678-6.678l13.234-6.805c12.78-6.571 21.784-18.963 24.085-33.149l2.382-14.689a15.375 15.375 0 0 1 4.288-8.416c.159-.16.314-.324.465-.491l10.281-11.337c9.943-10.186 14.576-24.624 12.399-38.702l-2.273-14.707a15.371 15.371 0 0 1 1.477-9.329zm-26.78-13.52-6.707 13.284c-4.3 8.517-5.802 18.002-4.345 27.432l2.274 14.708a15.512 15.512 0 0 1-4.306 13.25c-.159.16-.314.324-.466.491l-10.279 11.335c-6.573 6.729-10.84 15.186-12.349 24.482l-2.382 14.689a15.514 15.514 0 0 1-8.19 11.272l-13.235 6.806c-8.343 4.291-15.048 10.928-19.417 19.215 0 0-7.894 13.401-8.026 13.659a15.513 15.513 0 0 1-11.272 8.189l-14.69 2.383a45.208 45.208 0 0 0-24.747 12.609l-10.562 10.484a15.53 15.53 0 0 1-13.251 4.306l-14.707-2.273a45.187 45.187 0 0 0-27.433 4.345l-13.284 6.707a15.518 15.518 0 0 1-13.934 0l-13.285-6.707c-6.406-3.234-13.359-4.886-20.424-4.886-2.329 0-4.67.179-7.008.541l-14.708 2.274a15.522 15.522 0 0 1-13.25-4.305l-10.562-10.484a45.205 45.205 0 0 0-24.746-12.609l-14.691-2.383c-5.26-.853-10.191-4.144-12.271-8.189l-6.806-13.235a45.212 45.212 0 0 0-19.639-19.639l-13.235-6.805c-4.045-2.08-7.336-7.012-8.189-12.272l-2.383-14.689a45.2 45.2 0 0 0-12.609-24.748L44.722 331.62a15.518 15.518 0 0 1-4.306-13.251l2.273-14.707a45.195 45.195 0 0 0-4.345-27.433l-6.707-13.284a15.515 15.515 0 0 1 0-13.934l6.707-13.284c4.3-8.518 5.803-18.004 4.345-27.432l-2.273-14.707a15.513 15.513 0 0 1 4.306-13.251l10.483-10.562c6.722-6.772 11.083-15.33 12.609-24.747l2.383-14.691c.853-5.26 4.144-10.191 8.189-12.271l13.234-6.806c8.485-4.362 15.276-11.153 19.64-19.639l6.805-13.235c2.08-4.045 7.012-7.337 12.272-8.19l14.691-2.382a45.205 45.205 0 0 0 24.746-12.609l10.562-10.483a15.528 15.528 0 0 1 13.251-4.306l14.708 2.274c9.429 1.456 18.915-.045 27.432-4.345l13.285-6.707a15.52 15.52 0 0 1 13.933 0l13.284 6.707c8.517 4.3 18.002 5.801 27.432 4.345l14.708-2.274c4.83-.742 9.783.863 13.25 4.305l10.562 10.484a45.198 45.198 0 0 0 24.747 12.609l14.689 2.382c5.261.853 10.192 4.145 12.272 8.19l6.806 13.234c4.29 8.343 10.928 15.049 19.215 19.418 0 0 13.401 7.894 13.659 8.026a15.513 15.513 0 0 1 8.189 11.272l2.382 14.69a45.215 45.215 0 0 0 12.609 24.747l10.484 10.562a15.52 15.52 0 0 1 4.306 13.251l-2.274 14.708c-1.457 9.43.045 18.916 4.345 27.432l6.707 13.285a15.514 15.514 0 0 1 .003 13.935zm-128.25-65.674a15.003 15.003 0 0 0-18.544 5.345c-3.314 4.935-18.551 23.363-32.547 23.363-2.484 0-10.18-5.782-18.108-23.656-7.113-16.035-11.892-36.668-11.892-51.344 0-8.284-6.716-15-15-15s-15 6.716-15 15c0 14.676-4.779 35.309-11.892 51.344-7.929 17.874-15.624 23.656-18.108 23.656-13.593 0-28.442-17.329-32.547-23.363a15.001 15.001 0 0 0-27.005 12.001l30 120a14.98 14.98 0 0 0 14.552 11.352h120a14.98 14.98 0 0 0 14.552-11.352l30-120a15 15 0 0 0-8.461-17.346zm-47.803 118.707H207.69L191.7 252.02c5.935 2.433 12.399 3.959 19.278 3.959 19.695 0 34.849-17.85 45-40.094 10.151 22.244 25.305 40.094 45 40.094 6.879 0 13.343-1.527 19.278-3.959z"})]}),(0,c.jsx)("p",{children:(0,c.jsx)("a",{href:e,target:"_blank",rel:"noreferrer noopener",className:"components-button is-primary is-compact",children:(0,l.sprintf)("%s →",(0,l.__)("Buy the PRO version","password-requirements"))})})]})};x.propTypes={url:e.string.isRequired,benefits:e.arrayOf(e.string).isRequired};const _=({children:e,...s})=>(0,c.jsx)("div",{className:"tsc-checkbox-group",...s,children:e});_.propTypes={children:e.element.isRequired};const y=(e,s,t)=>(e=""===e?s:Number.parseInt(e,10),(isNaN(e)||s>e)&&(e=s),null!==t&&t<e&&(e=t),e),f=(0,i.withFocusOutside)(class extends n.Component{handleFocusOutside(e){this.props.onFocusOutside(e)}render(){return this.props.children}});f.propTypes={children:e.element.isRequired,onFocusOutside:e.func.isRequired};const q=({message:e})=>(0,c.jsx)("div",{className:"tsc-field-notice",children:(0,c.jsx)("p",{children:e})});q.propTypes={message:e.string.isRequired};const b=({label:e,help:s,min:t,max:r,value:a,defaultValue:o,onChange:u})=>{const[d,p]=(0,n.useState)(""),[m,h]=(0,n.useState)(a.toString());return(void 0===r||t>r)&&(r=null),(0,n.useEffect)((()=>{h(a.toString())}),[a]),(0,n.useEffect)((()=>{m===y(m,t,r).toString()?p(""):
// Translators: %s - field value.
p(null!==r?(0,l.sprintf)((0,l.__)('"%1$s" is not within the accepted range (%2$d-%3$d).',"password-requirements"),m,t,r):(0,l.sprintf)((0,l.__)('"%1$s" must be greater than or equal to %2$d.',"password-requirements"),m,t))}),[m,t,r]),(0,c.jsxs)("div",{className:"tsc-integer-control",children:[(0,c.jsx)(f,{onFocusOutside:()=>{const e=m===y(m,t,r).toString()?Number.parseInt(m,10):o;u(e),h(e.toString())},children:(0,c.jsx)(i.TextControl,{__nextHasNoMarginBottom:!0,label:e,help:s,value:m,type:"number",onChange:e=>{h(""===e?"":Number.parseInt(e,10).toString())}})}),""!==d&&(0,c.jsx)(q,{message:d})]})};b.propTypes={label:e.string.isRequired,help:e.string,min:e.number.isRequired,max:e.number,value:e.number.isRequired,defaultValue:e.number.isRequired,onChange:e.func.isRequired};const j=({id:e,policy:s,settings:t,setSettings:r})=>{const{baseControlProps:a,controlProps:o}=(0,i.useBaseControlProps)({preferredId:"password-requirements-settings-page-password-complexity-requirements"});const u=s=>{var i;const n=Object.assign({},null!==(i=t?.policies)&&void 0!==i?i:{});n[e]=s,r({...t,policies:n})};return(0,c.jsx)("div",{className:"tsc-settings-tabs__container",children:(0,c.jsxs)(i.Panel,{header:(0,l.sprintf)("%1$s: %2$s",s.isActive?(0,l.__)("Policy","password-requirements"):(0,l.__)("Inactive Policy","password-requirements"),""===s.name?"-":s.name),children:[(0,c.jsxs)(i.PanelBody,{title:(0,l.__)("General settings","password-requirements"),initialOpen:!0,children:[(0,c.jsx)(i.PanelRow,{children:(0,c.jsx)(i.ToggleControl,{label:(0,l.__)("Activate this policy","password-requirements"),help:(0,l.__)("You can deactivate any policy if you want to keep its settings but don't want to enforce it for users.","password-requirements"),checked:s.isActive,onChange:()=>{u({...s,isActive:!s.isActive})}})}),(0,c.jsx)(i.PanelRow,{children:(0,c.jsx)(i.TextControl,{label:(0,l.__)("Policy name","password-requirements"),value:s.name,help:(0,l.__)("We suggest using a descriptive name.","password-requirements"),onChange:e=>{u({...s,name:e})}})})]}),(0,c.jsxs)(i.PanelBody,{title:(0,l.__)("Enabled rules","password-requirements"),initialOpen:!0,children:[(0,c.jsx)(i.PanelRow,{children:(0,c.jsx)(i.ToggleControl,{label:(0,l.__)("Enforce the minimum password length","password-requirements"),help:(0,l.sprintf)(
// Translators: %s - minimum password length (number of characters with text).
// Translators: %s - minimum password length (number of characters with text).
(0,l.__)("Once enabled, the users' password length must equal or exceed the defined value (currently set to %s).","password-requirements"),(0,l.sprintf)(
// Translators: %d - number of characters.
// Translators: %d - number of characters.
(0,l._n)("%d character","%d characters",s["ruleSettings.minimumLength"],"password-requirements"),s["ruleSettings.minimumLength"])),checked:s["rules.minimumLength"],onChange:()=>{u({...s,"rules.minimumLength":!s["rules.minimumLength"]})}})}),(0,c.jsx)(i.PanelRow,{children:(0,c.jsx)(i.ToggleControl,{label:(0,l.__)("Enforce the minimum password age","password-requirements"),help:(0,l.sprintf)(
// Translators: %s - minimum password age (number of days with text).
// Translators: %s - minimum password age (number of days with text).
(0,l.__)("Once enabled, users can only change their passwords if the current password has been used for at least a defined period (currently set to %s).","password-requirements"),(0,l.sprintf)(
// Translators: %d - number of days.
// Translators: %d - number of days.
(0,l._n)("%d day","%d days",s["ruleSettings.minimumAge"],"password-requirements"),s["ruleSettings.minimumAge"])),checked:s["rules.minimumAge"],onChange:()=>{u({...s,"rules.minimumAge":!s["rules.minimumAge"]})}})}),(0,c.jsx)(i.PanelRow,{children:(0,c.jsx)(i.ToggleControl,{label:(0,l.__)("Enforce the maximum password age","password-requirements"),help:(0,l.sprintf)(
// Translators: %s - maximum password age (number of days with text).
// Translators: %s - maximum password age (number of days with text).
(0,l.__)("Once enabled, users will have to change their passwords if the current password has been in use for a defined period (currently set to %s).","password-requirements"),(0,l.sprintf)(
// Translators: %d - number of days.
// Translators: %d - number of days.
(0,l._n)("%d day","%d days",s["ruleSettings.maximumAge"],"password-requirements"),s["ruleSettings.maximumAge"])),checked:s["rules.maximumAge"],onChange:()=>{u({...s,"rules.maximumAge":!s["rules.maximumAge"]})}})}),(0,c.jsx)(i.PanelRow,{children:(0,c.jsx)(i.ToggleControl,{label:(0,l.__)("Enforce the password complexity requirements","password-requirements"),help:(0,l.sprintf)(
// Translators: %s - complexity explanation.
// Translators: %s - complexity explanation.
(0,l.__)("Once enabled, users' password must meet the complexity requirements. %s","password-requirements"),(()=>{const e=[];return!0===s["ruleSettings.complexity.uppercase"]&&e.push((0,l.__)("uppercase letter(s)","password-requirements")),!0===s["ruleSettings.complexity.lowercase"]&&e.push((0,l.__)("lowercase letter(s)","password-requirements")),!0===s["ruleSettings.complexity.digit"]&&e.push((0,l.__)("base digit(s) (0 through 9)","password-requirements")),!0===s["ruleSettings.complexity.specialCharacter"]&&e.push((0,l.__)("special character(s)","password-requirements")),!0===s["ruleSettings.complexity.uniqueCharacters"]&&e.push((0,l.sprintf)(
// Translators: %d - number of characters.
// Translators: %d - number of characters.
(0,l._n)("%d unique (non-repeated) character","%d unique (non-repeated) characters",s["ruleSettings.minimumUniqueCharacters"],"password-requirements"),s["ruleSettings.minimumUniqueCharacters"])),!0===s["ruleSettings.complexity.consecutiveUserSymbols"]&&e.push((0,l.sprintf)(
// Translators: %1$s - optional glue, %2$s - number of consecutive symbols of the user's name or display name allowed in the password.
// Translators: %1$s - optional glue, %2$s - number of consecutive symbols of the user's name or display name allowed in the password.
(0,l.__)("%1$sallow up to %2$s from the user's name or display name","password-requirements"),0===e.length?"":(0,l.__)("and to ","password-requirements"),(0,l.sprintf)(
// Translators: %d - number of symbols.
// Translators: %d - number of symbols.
(0,l._n)("%d consecutive symbol","%d consecutive symbols",s["ruleSettings.maximumConsecutiveUserSymbols"],"password-requirements"),s["ruleSettings.maximumConsecutiveUserSymbols"]))),0===e.length?(0,l.__)("Currently, all complexity rules for this password policy are disabled.","password-requirements"):(0,l.sprintf)(
// Translators: %s - complexity explanation.
// Translators: %s - complexity explanation.
(0,l.__)("Currently set to require: %s.","password-requirements"),e.join(", "))})()),checked:s["rules.complexity"],onChange:()=>{u({...s,"rules.complexity":!s["rules.complexity"]})}})})]}),(0,c.jsxs)(i.PanelBody,{title:(0,l.__)("Rule settings","password-requirements"),initialOpen:!0,children:[(0,c.jsx)(i.PanelRow,{children:(0,c.jsx)(b,{label:(0,l.__)("Minimum password length","password-requirements"),help:(0,l.__)("Number of characters required in passwords; a valid value should be between 1 and 50.","password-requirements"),min:1,max:50,value:s["ruleSettings.minimumLength"],defaultValue:10,onChange:e=>{u({...s,"ruleSettings.minimumLength":e})}})}),(0,c.jsx)(i.PanelRow,{children:(0,c.jsx)(b,{label:(0,l.__)("Minimum password age","password-requirements"),help:(0,l.__)("Number of days; a valid value should be between 1 and 1000.","password-requirements"),min:1,max:1e3,value:s["ruleSettings.minimumAge"],defaultValue:2,onChange:e=>{u({...s,"ruleSettings.minimumAge":e})}})}),(0,c.jsx)(i.PanelRow,{children:(0,c.jsx)(b,{label:(0,l.__)("Maximum password age","password-requirements"),help:(0,l.__)("Number of days; a valid value should be between 1 and 1000.","password-requirements"),min:1,max:1e3,value:s["ruleSettings.maximumAge"],defaultValue:30,onChange:e=>{u({...s,"ruleSettings.maximumAge":e})}})}),(0,c.jsx)(i.PanelRow,{children:(0,c.jsx)(i.BaseControl,{...a,label:(0,l.__)("Password complexity requirements","password-requirements"),children:(0,c.jsxs)(_,{...o,children:[(0,c.jsx)(i.CheckboxControl,{label:(0,l.__)("Uppercase letter(s) required","password-requirements"),checked:s["ruleSettings.complexity.uppercase"],onChange:()=>{u({...s,"ruleSettings.complexity.uppercase":!s["ruleSettings.complexity.uppercase"]})}}),(0,c.jsx)(i.CheckboxControl,{label:(0,l.__)("Lowercase letter(s) required","password-requirements"),checked:s["ruleSettings.complexity.lowercase"],onChange:()=>{u({...s,"ruleSettings.complexity.lowercase":!s["ruleSettings.complexity.lowercase"]})}}),(0,c.jsx)(i.CheckboxControl,{label:(0,l.__)("Base digit(s) (0 through 9) required","password-requirements"),checked:s["ruleSettings.complexity.digit"],onChange:()=>{u({...s,"ruleSettings.complexity.digit":!s["ruleSettings.complexity.digit"]})}}),(0,c.jsx)(i.CheckboxControl,{label:(0,l.sprintf)(
// Translators: %s - minimum number of unique (non-repeated) characters in password, with text.
// Translators: %s - minimum number of unique (non-repeated) characters in password, with text.
(0,l.__)("At least %s required","password-requirements"),(0,l.sprintf)(
// Translators: %d - number of characters.
// Translators: %d - number of characters.
(0,l._n)("%d unique (non-repeated) character","%d unique (non-repeated) characters",s["ruleSettings.minimumUniqueCharacters"],"password-requirements"),s["ruleSettings.minimumUniqueCharacters"])),checked:s["ruleSettings.complexity.uniqueCharacters"],onChange:()=>{u({...s,"ruleSettings.complexity.uniqueCharacters":!s["ruleSettings.complexity.uniqueCharacters"]})}}),(0,c.jsx)(i.CheckboxControl,{label:(0,l.sprintf)(
// Translators: %s - number of consecutive symbols of the user's name or display name allowed in the password, with text.
// Translators: %s - number of consecutive symbols of the user's name or display name allowed in the password, with text.
(0,l.__)("Up to %s from the user's name or display name allowed","password-requirements"),(0,l.sprintf)(
// Translators: %d - number of symbols.
// Translators: %d - number of symbols.
(0,l._n)("%d consecutive symbol","%d consecutive symbols",s["ruleSettings.maximumConsecutiveUserSymbols"],"password-requirements"),s["ruleSettings.maximumConsecutiveUserSymbols"])),checked:s["ruleSettings.complexity.consecutiveUserSymbols"],onChange:()=>{u({...s,"ruleSettings.complexity.consecutiveUserSymbols":!s["ruleSettings.complexity.consecutiveUserSymbols"]})}}),(0,c.jsx)(i.CheckboxControl,{label:(0,l.__)("Special character(s) required","password-requirements"),checked:s["ruleSettings.complexity.specialCharacter"],help:(0,n.createInterpolateElement)((0,l.__)("Special character: one of punctuation characters that are present on standard US keyboard. See: <a>Password Special Characters</a> for more details.","password-requirements"),{a:(0,c.jsx)("a",{href:"https://owasp.org/www-community/password-special-characters",target:"_blank",rel:"noreferrer noopener"})}),onChange:()=>{u({...s,"ruleSettings.complexity.specialCharacter":!s["ruleSettings.complexity.specialCharacter"]})}})]})})}),(0,c.jsx)(i.PanelRow,{children:(0,c.jsx)(b,{label:(0,l.__)("Minimum number of unique (non-repeated) characters in password","password-requirements"),help:(0,l.__)('Example: in the "aabc" password, three characters are unique (non-repeated); a valid value should be between 1 and 50.',"password-requirements"),min:1,max:50,value:s["ruleSettings.minimumUniqueCharacters"],defaultValue:6,onChange:e=>{u({...s,"ruleSettings.minimumUniqueCharacters":e})}})}),(0,c.jsx)(i.PanelRow,{children:(0,c.jsx)(b,{label:(0,l.__)("Number of consecutive symbols of the user's name or display name allowed in the password","password-requirements"),help:(0,l.__)('A valid value should be between 0 and 50. Examples: if "0" is chosen, all characters used in user name or display name will not be allowed in user\'s password; if "2" is chosen and user name is "Bart", password can contain "ba", "ar", and "rt", but not "bar" or "art".',"password-requirements"),min:0,max:50,value:s["ruleSettings.maximumConsecutiveUserSymbols"],defaultValue:4,onChange:e=>{u({...s,"ruleSettings.maximumConsecutiveUserSymbols":e})}})})]})]})})};j.propTypes={id:s().string.isRequired,policy:s().object.isRequired,settings:s().object.isRequired,setSettings:s().func.isRequired};const S=({settings:e,setSettings:s})=>{var t;(0,n.useEffect)((()=>{if(0===Object.keys(e.policies).length){const t=`d:${Date.now().toString()}0000`,{policy:r}=e.templates.policies;s({...e,policies:{[t]:Object.assign({},{key:t,...r})}})}}),[e,s]);const r=null!==(t=e.policies[Object.keys(e.policies)?.[0]])&&void 0!==t?t:null;return null===r?null:(0,c.jsx)(n.Fragment,{children:(0,c.jsx)(j,{id:r.key,policy:r,settings:e,setSettings:s},r.key)})};var v,P;S.propTypes={settings:s().object.isRequired,setSettings:s().func.isRequired},(0,a.addFilter)("password_requirements__settings_page_tabs","teydeastudio/password-requirements/settings-page",((e,s,t)=>(e.push({name:"password-policy",title:(0,l.__)("Manage password policy","password-requirements"),component:(0,c.jsx)(S,{settings:s.settings,setSettings:e=>{t({type:"settingsChanged",settings:e})}})}),e))),(0,a.addFilter)("password_requirements__promoted_plugins_panel","teydeastudio/password-requirements/settings-page",(()=>(0,c.jsx)(w,{plugins:[{url:"https://teydeastudio.com/products/password-reset-enforcement/?utm_source=Password+Policy+and+Complexity+Requirements&utm_medium=Plugin&utm_campaign=Plugin+cross-reference&utm_content=Settings+sidebar",name:(0,l.__)("Password Reset Enforcement","password-requirements"),description:(0,l.__)("Force users to reset their WordPress passwords. Execute for all users at once, by role, or only for specific users.","password-requirements")}]}))),(0,a.addFilter)("password_requirements__upsell_panel","teydeastudio/password-requirements/settings-page",(e=>(Object.keys(window.teydeaStudio).includes("passwordRequirementsPro")||(e=(0,c.jsx)(x,{url:"https://teydeastudio.com/products/password-policy-and-complexity-requirements/?utm_source=Password+Policy+and+Complexity+Requirements&utm_medium=Plugin&utm_campaign=Plugin+upsell&utm_content=Settings+sidebar#pricing",benefits:[(0,l.__)("Create unlimited password policies","password-requirements"),(0,l.__)("Apply password policies to specific users (by role or by user)","password-requirements"),(0,l.__)("Prevent passwords reuse","password-requirements"),(0,l.__)("Full integration with WooCommerce","password-requirements"),(0,l.__)("Get access to PRO updates and our premium support","password-requirements")]})),e))),v=(0,c.jsx)(g,{plugin:"passwordRequirements"}),P=document.querySelector("div#password-requirements-settings-page"),(0,n.createRoot)(P).render(v)})()})();