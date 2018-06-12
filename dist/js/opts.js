/*! (c) Philipp König under GPL-3.0 */
(e=>{"use strict";e.opts={ids:{page:{iframe:"blockbyte-bs-sidebar",overlay:"blockbyte-bs-overlay",indicator:"blockbyte-bs-indicator"},sidebar:{sidebar:"sidebar",shareInfo:"shareInfo",reloadInfo:"reloadInfo",bookmarkBox:{all:"bookmarkBox",search:"bookmarkBoxSearch"}},overlay:{urlList:"urlList"}},classes:{active:"active",visible:"visible",hidden:"hidden",success:"success",error:"error",close:"close",hover:"hover",loading:"loading",building:"building",initLoading:"initLoading",page:{visible:"blockbyte-bs-visible",hideMask:"blockbyte-bs-hideMask",hover:"blockbyte-bs-hover",noscroll:"blockbyte-bs-noscroll",hasLeftsideBack:"blockbyte-bs-has-lsb",style:"blockbyte-bs-style",fullHeight:"blockbyte-bs-fullHeight",noAnimations:"noAnimations",darkMode:"dark",highContrast:"highContrast"},sidebar:{extLoaded:"loaded",openedOnce:"openedOnce",permanent:"permanent",cached:"cached",mark:"mark",hideRoot:"hideRoot",dirAnimated:"animated",dirOpened:"opened",bookmarkDir:"dir",dirIcon:"icon",separator:"separator",bookmarkLink:"link",bookmarkLabel:"label",entryPinned:"pinned",menu:"menu",sort:"sort",fixed:"fixed",lockPinned:"lockPinned",lastHover:"lastHover",copied:"copied",filterBox:"filter",search:"search",searchBox:"searchBox",searchClose:"searchClose",searchVisible:"searchVisible",removeMask:"removeMask",removed:"removed",restored:"restored"},tooltip:{wrapper:"tooltip"},contextmenu:{wrapper:"contextmenu",top:"top",list:"list",icons:"icons",right:"right",separator:"separator"},drag:{trigger:"drag",helper:"dragHelper",isDragged:"isDragged",cancel:"dragCancel",dragHover:"dragHover",snap:"snap",dragInitial:"dragInitial"},scrollBox:{wrapper:"scrollBox",hideScrollbar:"hideScrollbar",scrolled:"scrolled"},checkbox:{box:"checkbox",clicked:"clicked",focus:"focus"},overlay:{modal:"modal",preview:"preview",previewUrl:"previewUrl",info:"info",action:"action",progressBar:"progressBar",buttonWrapper:"buttons",checkUrlProgressLabel:"progressLabel",urlCheckLoading:"urlCheckLoading",urlCheckList:"urlCheckList"},newtab:{smallContent:"small",chromeApps:"chromeApps",suggestions:"suggestions",edit:"edit",add:"add",link:"link",permanentSidebar:"permanentSidebar",remove:"remove",infoBar:"infoBar",save:"save",cancel:"cancel"},onboarding:{slide:"slide",skip:"skip",close:"close",settings:"settings",appearance:"appearance",hideOpenTypeIcon:"hideOpenType",large:"large"},settings:{tabs:{content:"tab"},color:{field:"color",mask:"colorMask"},radio:{wrapper:"radioWrapper"},range:{inactive:"inactive"},newtab:{hideable:"hideable"},translation:{select:"languageSelect",category:"category",edit:"edit",progress:"progress",mark:"mark",requiredInfo:"requiredInfo",amountInfo:"amountInfo",empty:"empty",back:"back",goto:"goto"},toggleArea:{preview:"preview",fullHeight:"fullHeight",dragged:"dragged",dragging:"dragging",modal:"toggleAreaModal"},appearance:{preview:{fullHeight:"blockbyte-bs-fullHeight"}},feedback:{onlySuggestions:"onlySuggestions",answer:"answer",noHeight:"noHeight",absolute:"absolute"},revert:"revert",highlight:"highlight",showModal:"showModal",small:"small",desc:"desc",box:"box",dialog:"dialog",boxWrapper:"boxWrapper",contentBox:"contentBox",incomplete:"incomplete",suggestion:"suggestion"}},attr:{uid:"data-blockbyte-bs-uid",src:"data-src",position:"data-pos",type:"data-type",name:"data-name",value:"data-value",sort:"data-sort",direction:"data-direction",style:"data-style",id:"data-id",i18n:"data-i18n",i18nReplaces:"data-i18nReplaces",newtab:{perRow:"data-perRow"},onboarding:{openType:"data-openType",surface:"data-surface"},settings:{appearance:"data-appearance",success:"data-successtext",hideOnFalse:"data-hideOnFalse",save:"data-save",restore:"data-restore",range:{min:"data-min",max:"data-max",step:"data-step",unit:"data-unit",infinity:"data-infinity"},color:{alpha:"data-alpha",suggestions:"data-suggestions"},field:{placeholder:"data-placeholder"},translation:{releaseStatus:"data-status",language:"data-lang"}}},events:{loaded:"blockbyte-bs-loaded",elementsCreated:"blockbyte-bs-created",openSidebar:"blockbyte-bs-sidebar-open",sidebarOpened:"blockbyte-bs-sidebar-opened",checkboxChanged:"blockbyte-bs-checkbox-changed",scrollBoxLastPart:"blockbyte-bs-scrollbox-lastpart",lsbLoaded:"blockbyte-lsb-loaded",pageChanged:"blockbyte-bs-pageChanged"},ajax:{versionHistory:"https://extensions.blockbyte.de/ajax/changelog/bs",feedback:{form:"https://extensions.blockbyte.de/ajax/feedback",suggestions:"https://extensions.blockbyte.de/ajax/feedback/suggestions"},translation:{info:"https://extensions.blockbyte.de/ajax/translation/bs/info",langvars:"https://extensions.blockbyte.de/ajax/translation/bs/langvars",submit:"https://extensions.blockbyte.de/ajax/translation/bs/submit"}},leftsideBackSelector:"div#blockbyte-lsb-indicator.blockbyte-lsb-visible",donateLink:"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2VW2UADL99YEL",manifest:chrome.runtime.getManifest(),demoMode:!1},e.cl=e.opts.classes,e.attr=e.opts.attr})(jsu);