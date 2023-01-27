
var my_var;
            function mine(){
                my_var = setTimeout(pageLoader,3000);
            }
            function pageLoader(){
                document.getElementById('loader').style.display = 'none';
                document.getElementById('hideAll').style.display = 'block';
            }
    $(document).ready(function(){
        
        //....hide loadee.....
        
        
        
    $("#btn").click(function(){
          $('html,body').animate({scrollTop:630},1000);
      });
    
    $('input[type="checkbox"]').click(function(){
           $('body').toggleClass('dark-mode');
           $('body').toggleClass('active');
           $('.box').toggleClass('active');
        }); 
    
    $("#ar").click(function(){
        $('.navbar .container .lang p:nth-child(1)').toggleClass('active');
        $('.navbar .container .lang p:nth-child(2)').toggleClass('active');
        $('body').toggleClass('change-dir');
    });
    $("#en").click(function(){
          $('.navbar .container .lang p:nth-child(1)').toggleClass('active');
          $('.navbar .container .lang p:nth-child(2)').toggleClass('active');
          $('body').toggleClass('change-dir');
    });
    
    var data = {
		  "en":{
		    "logo":"Amr",
		    "home":"Home",
		    "works":"Works",
		    "skilles":"Skilles",
		    "connect":"Connect",
		    "welcome":"Welcome In The World of UI/UX Designs",
		    "download":"Download CV",
		    "aboutProfile":"Profile",
		    "profileName":"Amr Ragab Ali",
		    "about-profile":"I'm FrontEnd Developer,Graduated from the Faculty of Specific Education, Minia University, Education Technology, looking forward to working in the best companies, works as a freelancer, has seven years of experience, can work in a work team consisting of several individuals, the possibility of working on projects according to the budget",
		    "myworks":"My Works",
		    "japanes-anime":"Japanes Anime website",
		    "feature":"Features : ",
		    "api":"using API Ajax and Animation",
		    "mode":"Dark/Light Mode",
		    "responsive":"Responsive Website",
		    "preview":"Preview",
		    "creative":"Creative Website ",
		    "ar/en":"using Ar/En and Animation",
		    "toggle":"Animation Toggle",
		    "phronic":"Phronic Box",
		    "myskilles":"My Skilles",
            "ui/ux":"UI/UX",
            "web-dev":"Web Developer",
            "photoshop":"Design Photoshop",
            "markting":"Degital Markting",
            "essential":"Essential Work Skilles",
            "name":"name",
            "send":"Send Message",
            "number":"Mobile No",
            "number-txt":"01141703905 - 01551195026",
            "email":"E-mail",
            "location":"Location",
            "location-txt":"Egypt-Elminia-Beni Mazar",
            "copyright":"© 2021 copyright",
            "copyright-2":"All rights reversed to Amr Ragab Ali",
		  },
		  "ar":{
		    "logo":"عمرو",
		    "home":"الرئيسية",
		    "works":"أعمالى",
		    "skilles":"مهاراتى",
		    "connect":"إتصل بى",
		    "welcome":"مرحبا بك فى عالم الديزاين الخاص بى",
		    "download":"تحميل CV",
		    "aboutProfile":"بروفايل",
		    "profileName":"عمرو رجب على محمد",
		    "about-profile":"أنا مصمم ومطور مواقع ، تخرج من كلية التربية النوعية،جامعة المنيا، تكنولوجيا التعليم ، أتطلع إلى العمل في أفضل الشركات ، ويعمل كفرد مستقل،ولديه خبرة سبع سنوات،ويمكنه العمل في فريق عمل يتكون من عدة أفراد،وإمكانية تطوير وعمل في مشاريع وفقًا للميزانية",
		    "myworks":"أعمالى",
		    "japanes-anime":"موقع إنمى يابانى",
		    "feature":"المميزات :",
		    "api":"يستخدم API , Ajax والانيميشن",
		     "mode":"الوضع الليلى/النهارى",
		    "responsive":"موقع متجاوب",
		    "preview":"مشاهدة",
		    "creative":"الموقع الإبداعى",
		    "ar/en":"يستخدم تغيير اللغة والانيميشن",
		    "toggle":"التبديل الحركى",
		    "phronic":"القالب الفرعونى",
		    "myskilles":"مهاراتى",
            "ui/ux":"الديزاين",
            "web-dev":"مطور مواقع",
            "photoshop":"الفوتوشوب",
            "markting":"ديجيتال ماركتينج",
            "essential":"المهارات الأساسية للعمل",
            "name":"الأسم بالكامل",
            "send":"إرسال رسالة",
            "number":"رقم الهاتف",
            "number-txt":"٠١١٤١٦٠٣٩٠٥ - ٠١٥٥١١٩٥٠٢٦",
            "email":"البريد الإلكترونى",
            "location":"الموقع",
            "location-txt":"مصر-المنيا-بنى مزار",
            "copyright":"حقوق النشر ©",
            "copyright-2":"جميع الحقوق محفوظة لـ عمرو رجب على ",
		  }
		}
    $(".translate").click(function(){
        var lang = $(this).attr("id");
		    
		    $(".lang").each(function(index,el){
		      $(this).text(data[lang][$(this).attr("key")]);
		      $('.works .content .box p').toggleClass('active');
		      $('.navbar').toggleClass('active');
		      $('.connect .container .div-connect .content-box .name-box p').toggleClass('active');
		      
		    });
    });
    
    $(".ch_1").click(function(){
        
        $('html,body').animate({scrollTop:0},1000);
      
    });
    $(".ch_2").click(function(){
        
        $('html,body').animate({scrollTop:630},1000);
      
    });
    $(".ch_3").click(function(){
        
        $('html,body').animate({scrollTop:1000},1000);
      
    });
    $(".ch_4").click(function(){
        
        $('html,body').animate({scrollTop:1900},1000);
      
    });
    $(".ch_5").click(function(){
        
        $('html,body').animate({scrollTop:2500},1000);
      
    });
    $(".ch_6").click(function(){
        
        $('html,body').animate({scrollTop:6000},1000);
      
    });
        
    //click thumb   
    $(".thumb i").click(function(){
        //$(".thumb:nth-child(1) i").css("color","#00ccff");
      //  alert("cool");
    });
    
        //scroll change
    
    // run typewritter jquery
    });