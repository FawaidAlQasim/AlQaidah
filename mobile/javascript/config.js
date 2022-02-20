	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.loadingCaption="Loading";bookConfig.loadingCaptionColor="#FFFFFF";bookConfig.loadingBackground="#7A7A7A";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.appLogoLinkURL="https://a-alqasim.com/";bookConfig.logoHeight="40";bookConfig.logoPadding="20";bookConfig.logoTop="0";bookConfig.HomeURL="%first page%";bookConfig.appLogoOpenWindow="Blank";bookConfig.toolbarColor="#7A7A7A";bookConfig.iconColor="#FFFFFF";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#FFFFFF";bookConfig.FlipSound="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.ShareButtonVisible="Hide";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#FFFFFF";bookConfig.thumbnailAlpha="70";bookConfig.ZoomButtonVisible="Yes";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.bookmarkBackground="#FFFFFF";bookConfig.bookmarkFontColor="#400040";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#000000";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Hide";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.minZoomWidth="700";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.InstructionsButtonVisible="Show";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.HardPageEnable="Yes";bookConfig.hardCoverBorderWidth="2";bookConfig.borderColor="#33A455";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="saddle";bookConfig.RightToLeft="Yes";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.searchFontColor="#FFFDDD";bookConfig.totalPageCount=104;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2541;;bookConfig.securityType="1";bookConfig.bookTitle="القاعدة المدنية - تعليم القراءة للمبتدئين";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [{ language : "Arabic",btnFirstPage:"الأول",btnNextPage:"التالي",btnLastPage:"آخر",btnPrePage:"سابق",btnGoToHome:"منزل",btnDownload:"تحميل",btnSoundOn:"الصوت في",btnSoundOff:"تكلم بصوت عال",btnPrint:"طباعة",btnThumb:"الصور المصغرة",btnBookMark:"المرجعية",frmBookMark:"المرجعية",btnZoomIn:"التكبير في",btnZoomOut:"تصغير",btnAutoFlip:"السيارات فليب",btnStopAutoFlip:"وقف السيارات فليب",btnSocialShare:"حصة",btnHelp:"مساعدة",btnAbout:"حول",btnSearch:"بحث",btnFullscreen:"الشاشة الكاملة",btnExitFullscreen:"خروج ملء الشاشة",btnMore:"أكثر",frmPrintCaption:"طباعة",frmPrintall:"طباعة جميع الصفحات",frmPrintcurrent:"طباعة الصفحة الحالية",frmPrintRange:"نطاق الطباعة",frmPrintexample:"مثال: 2،3،5-10",frmPrintbtn:"طباعة",frmShareCaption:"حصة",frmShareLabel:"حصة",frmShareInfo:"يمكنك بسهولة مشاركة هذا المنشور إلى networks.Just الاجتماعية cilck على الزر المناسب أدناه",frminsertLabel:"إدراج لموقع",frminsertInfo:"استخدم الرمز التالي لتضمين هذا المنشور إلى موقع الويب الخاص بك.",frmaboutcaption:"اتصال",frmaboutcontactinformation:"معلومات الاتصال",frmaboutADDRESS:"العنوان",frmaboutEMAIL:"البريد الإلكتروني",frmaboutWEBSITE:"موقع على الإنترنت",frmaboutMOBILE:"جوال",frmaboutAUTHOR:"الكاتب",frmaboutDESCRIPTION:"الوصف",frmSearch:"بحث",frmToc:"جدول المحتوى",btnTableOfContent:"عرض جدول المحتويات",btnNote:"حاشية",lblLast:"هذه هي الصفحة الأخيرة.",lblFirst:"هذه هي الصفحة الأولى.",lblFullscreen:"انقر فوق عرض في الشاشة",lblName:"الاسم",lblPassword:"كلمة السر",lblLogin:"دخول",lblCancel:"إلغاء",lblNoName:"اسم المستخدم لا يمكن أن تكون فارغة.",lblNoPassword:"سر لا يمكن فارغة.",lblNoCorrectLogin:"الرجاء إدخال اسم المستخدم الصحيح وكلمة المرور.",btnVideo:"معرض الفيديو",btnSlideShow:"عرض شرائح",pnlSearchInputInvalid:"البحث عن النص قصير جدا.",btnDragToMove:"تحرك الماوس جر",btnPositionToMove:"تحرك الماوس الموقف",lblHelp1:"اسحب الصفحة ركن لعرض",lblHelp2:"انقر نقرا مزدوجا على التكبير،",lblCopy:"نسخ",lblAddToPage:"إضافة إلى صفحة",lblPage:"الصفحة",lblTitle:"العنوان",lblEdit:"تحرير",lblDelete:"حذف",lblRemoveAll:"إزالة جميع",tltCursor:"المؤشر",tltAddHighlight:"إضافة الضوء",tltAddTexts:"إضافة النصوص",tltAddShapes:"إضافة الأشكال",tltAddNotes:"ويلاحظ أن أضيف",tltAddImageFile:"إضافة ملف الصورة",tltAddSignature:"إضافة التوقيع",tltAddLine:"إضافة خط",tltAddArrow:"إضافة سهم",tltAddRect:"إضافة ريكت",tltAddEllipse:"إضافة القطع الناقص",lblDoubleClickToZoomIn:"انقر نقرا مزدوجا للتكبير.",lblPages:"صفحات",infCopyToClipboard:"متصفحك لا يدعم الجرعة الحافظة، يرجى القيام بذلك بنفسك.",lblDescription:"عنوان",frmLinkLabel:"صلة",infNotSupportHtml5:"متصفحك لا يدعم HTML5.",frmHowToUse:"كيف تستعمل",lblHelpPage1:"تحرك اصبعك على الوجه صفحة كتاب.",lblHelpPage2:"تكبير باستخدام لفتة أو انقر مرتين على الصفحة.",lblHelpPage3:"انقر لعرض جدول المحتويات والعناوين وتبادل الكتب عبر الشبكات الاجتماعية.",lblHelpPage4:"ضافة العناوين، واستخدام وظيفة البحث والسيارات الوجه الكتاب.",lblHelpPage5:"فتح على الصورة المصغرة للنظرة عامة عن صفحات الكتاب.",frmQrcodeCaption:"مسح أسفل رمز ثنائي الأبعاد لعرض مع الهاتف المحمول."},{ language : "English",btnFirstPage:"First",btnNextPage:"Next",btnLastPage:"Last",btnPrePage:"Previous",btnGoToHome:"Home",btnDownload:"Download",btnSoundOn:"Sound On",btnSoundOff:"Sound Off",btnPrint:"Print",btnThumb:"Thumbnails",btnBookMark:"Bookmark",frmBookMark:"Bookmark",btnZoomIn:"Zoom In",btnZoomOut:"Zoom Out",btnAutoFlip:"Auto Flip",btnStopAutoFlip:"Stop Auto Flip",btnSocialShare:"Share",btnHelp:"Help",btnAbout:"About",btnSearch:"Search",btnFullscreen:"Fullscreen",btnExitFullscreen:"Exit Fullscreen",btnMore:"More",frmPrintCaption:"Print",frmPrintall:"Print All Pages",frmPrintcurrent:"Print Current Page",frmPrintRange:"Print Range",frmPrintexample:"Example: 2,3,5-10",frmPrintbtn:"Print",frmShareCaption:"Share",frmShareLabel:"Share",frmShareInfo:"You can easily share this publication to social networks.Just click the appropriate button below",frminsertLabel:"Insert to Site",frminsertInfo:"Use the code below to embed this publication to your website.",frmaboutcaption:"Contact",frmaboutcontactinformation:"Contact Information",frmaboutADDRESS:"Address",frmaboutEMAIL:"Email",frmaboutWEBSITE:"Website",frmaboutMOBILE:"Mobile",frmaboutAUTHOR:"Author",frmaboutDESCRIPTION:"Description",frmSearch:"Search",frmToc:"Table Of Contents",btnTableOfContent:"Table Of Contents",btnNote:"Annotation",lblLast:"This is the last page.",lblFirst:"This is the first page.",lblFullscreen:"Click to view in fullscreen",lblName:"Name",lblPassword:"Password",lblLogin:"Login",lblCancel:"Cancel",lblNoName:"User name can not be empty.",lblNoPassword:"Password can not be empty.",lblNoCorrectLogin:"Please enter the correct user name and password.",btnVideo:"Video Gallery",btnSlideShow:"Slideshow",pnlSearchInputInvalid:"The search text is too short.",btnDragToMove:"Move by mouse drag",btnPositionToMove:"Move by mouse position",lblHelp1:"Drag the page corner to view",lblHelp2:"Double click to zoom in, out",lblCopy:"Copy",lblAddToPage:"Add To Page",lblPage:"Page",lblTitle:"Title",lblEdit:"Edit",lblDelete:"Delete",lblRemoveAll:"Remove All",tltCursor:"Cursor",tltAddHighlight:"Add highlight",tltAddTexts:"Add texts",tltAddShapes:"Add shapes",tltAddNotes:"Add notes",tltAddImageFile:"Add image file",tltAddSignature:"Add signature",tltAddLine:"Add line",tltAddArrow:"Add arrow",tltAddRect:"Add rect",tltAddEllipse:"Add ellipse",lblDoubleClickToZoomIn:"Double click to zoom in.",lblPages:"Pages",infCopyToClipboard:"Your browser dose not support clipboard, please do it yourself.",lblDescription:"Title",frmLinkLabel:"Link",infNotSupportHtml5:"Your browser does not support HTML5.",frmHowToUse:"How To Use",lblHelpPage1:"Move your finger to flip the book page.",lblHelpPage2:"Zoom in by using gesture or double click on the page.",lblHelpPage3:"Click to view the table of content, bookmarks and share your books via social networks.",lblHelpPage4:"Add bookmarks, use search function and auto flip the book.",lblHelpPage5:"Open the thumbnails to overview all book pages.",frmQrcodeCaption:"Scan the bottom two-dimensional code to view with mobile phone."}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]}; bookConfig.isFlipPdf=false;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}
