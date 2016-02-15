FSR.surveydefs = [{
    name: 'browse',
    section: 'mglobal',
    platform: 'phone',
    invite: {
        when: 'onentry',
        
        /* Mobile */
        dialogs: [{
            reverseButtons: false,
            headline: "We'd welcome your feedback!",
            blurb: "We'd like your opinion on our web site, in order to improve your experience. Will you help us by completing this survey, which will take 2 to 3 minutes?",
            attribution: "Conducted by ForeSee.",
            declineButton: "No, thanks",
            acceptButton: "Yes, I'll help",
            
            locales: {
                "fr": {
                    reverseButtons: false,
                    headline: "Dites-nous ce que vous pensez !",
                    blurb: "Afin d’améliorer vos prochaines visites, nous aimerions connaître votre opinion sur notre site. Nous vous serions reconnaissants si vous pouviez compléter ce questionnaire ; cela devrait prendre entre 2 et 3 minutes.",
                    attribution: "Menée par ForeSee",
                    declineButton: "Non merci",
                    acceptButton: "Oui"
                },
                "cn": {
                    headline: "我们欢迎您提出反馈意见！",
                    blurb: "我们希望了解您对我们网站的意见，以便使您获得更好的体验。您是否能完成本项调查，帮助我们？只需2到3分钟。",
                    attribution: "由ForeSee主办。",
                    declineButton: "不参加，谢谢",
                    acceptButton: "是，我愿意参加"
                },
                "de": {
                    headline: "Wir freuen uns auf Ihr Feedback!",
                    blurb: "Wir interessieren uns für Ihre Meinung zu unserer Website, damit wir noch besser für Sie da sein können. Wären Sie bereit, an einer 2 bis 3 Minuten dauernden Umfrage teilzunehmen?",
                    attribution: "Durchgeführt von ForeSee.",
                    declineButton: "Nein, danke",
                    acceptButton: "Ja, gern"
                },
                "ru": {
                    headline: "Нам важно Ваше мнение!",
                    blurb: "Мы хотели бы узнать ваше мнение о нашем сайте, чтобы сделать вашу работу с ним более удобной. Не могли бы вы помочь нам, уделив 2-3 минуты на прохождение этого опроса?",
                    attribution: "Опрос проводит компания <br>ForeSee.",
                    declineButton: "Нет, спасибо",
                    acceptButton: "Да, я помогу"
                },
                "it": {
                    headline: "Vogliamo conoscere il tuo parere!",
                    blurb: "Per migliorare la tua esperienza, desideriamo conoscere la tua opinione sul nostro sito web. Ti chiediamo tra i 2 e i 3 minuti di tempo per compilare il sondaggio.",
                    attribution: "Condotto da ForeSee.",
                    declineButton: "No, grazie",
                    acceptButton: "Sì, volentieri"
                }
            }
        }]
    },
    pop: {
        when: 'now'
    },
    criteria: {
        sp: 30,
        lf: 3,
        locales: [{
            locale: 'fr',
            sp: 20,
            lf: 3
        }, {
            locale: 'uk',
            sp: 20,
            lf: 3
        }, {
            locale: 'in',
            sp: 20,
            lf: 3
        },{
            locale: 'cn',
            sp: 5,
            lf: 3
        }, {
            locale: 'de',
            sp: 10,
            lf: 3
        }, {
            locale: 'ru',
            sp: 10,
            lf: 3
        },{
            locale: 'it',
            sp: 10,
            lf: 3
        }]
    },
    include: {
        urls: ['.']
    }
}, {
    name: 'browse',
    platform: 'desktop',
    invite: {
        when: 'onentry'
    },
    pop: {
        when: 'later',
        what: 'qualifier'
    },
    criteria: {
        sp: 0,
        lf: 0,
        locales: [{
            locale: 'fr',
            sp: 10,
            lf: 3
        }, {
            locale: 'uk',
            sp: 20,
            lf: 3
        }, {
            locale: 'cn',
            sp: 10,
            lf: 3
        }, {
            locale: 'ru',
            sp: 5,
            lf: 3
        }, {
            locale: 'de',
            sp: 5,
            lf: 3
        }, {
            locale: 'in',
            sp: 10,
            lf: 3
        },{
            locale: 'it',
            sp: 5,
            lf: 3
        }]
    },
    include: {
        urls: ['.']
    }
}];
FSR.properties = {
    repeatdays: 90,
    
    repeatoverride: false,
    
    altcookie: {
        name: 'IPERCEPTIONS_702',
        value: 'iPe_702_User',
        path: '/',
        persistent: true
    },
    
    language: {
        src: 'location',
        locales: [{
            match: '/fr/',
            locale: 'fr'
        }, {
            match: '/uk/',
            locale: 'uk'
        }, {
            match: '/cn/',
            locale: 'cn'
        }, {
            match: '/ru/',
            locale: 'ru'
        }, {
            match: '/de/',
            locale: 'de'
        }, {
            match: '/in/',
            locale: 'in'
        }, {
            match: '/it/',
            locale: 'it'
        }]
    },
    
    exclude: {
        cookies: [{
            name: 'IPERCEPTIONS_702',
            value: 'iPe_702_User'
        }]
    },
    
    zIndexPopup: 10000,
    
    ignoreWindowTopCheck: false,
    
    ipexclude: 'fsr$ip',
    
    mobileHeartbeat: {
        delay: 60, /*mobile on exit heartbeat delay seconds*/
        max: 3600 /*mobile on exit heartbeat max run time seconds*/
    },
    
    invite: {
    
        // For no site logo, comment this line:
        siteLogo: "sitelogo.jpg",
        
        //alt text fore site logo img
        siteLogoAlt: "",
        
        /* Desktop */
        dialogs: [[{
            reverseButtons: false,
            headline: "We'd welcome your feedback!",
            blurb: "Thank you for visiting our website. You have been selected to participate in a brief customer satisfaction survey to let us know how we can improve your experience.",
            //noticeAboutSurvey: "The survey is designed to measure your entire experience, please look for it at the <u>conclusion</u> of your visit.",
            attribution: "This survey is conducted by an independent company ForeSee, on behalf of the site you are visiting.",
            closeInviteButtonText: "Click to close.",
            declineButton: "No, thanks",
            acceptButton: "Yes, I'll give feedback",
            error: "Error",
            warnLaunch: "this will launch a new window",
            
            locales: {
                "fr": {
                    headline: "Souhaitez-vous nous aider à améliorer votre expérience sur notre site ?",
                    blurb: "Votre avis nous intéresse ! Veuillez répondre à ce bref questionnaire, qui ne devrait prendre que 3 ou 4 minutes.<br><br>Merci de votre coopération.",
                    //noticeAboutSurvey: "Cette enquête est conçue pour évaluer l'ensemble de votre visite sur notre site et surviendra donc à la <u>fin de votre visite</u>.",
                    attribution: "Cette enquête est menée par une société indépendante, ForeSee.",
                    closeInviteButtonText: "Cliquer pour fermer.",
                    declineButton: "Non, merci",
                    acceptButton: "Oui, je ferai part de mes commentaires"
                },
                "uk": {
                    headline: "Will you help us improve your experience on our site?",
                    blurb: "We want your opinion! Please complete this brief survey, which only takes 3-4 minutes.<br><br>Thank you for your time and thoughts.",
                    //noticeAboutSurvey: "The survey is designed to measure your entire experience, please look for it at the <u>conclusion</u> of your visit.",
                    attribution: "This survey is conducted by an independent company ForeSee, on behalf of the site you are visiting.",
                    closeInviteButtonText: "Click to close.",
                    declineButton: "No, thanks",
                    acceptButton: "Yes, I'll give feedback"
                },
                "cn": {
                    headline: "您是否愿意帮助我们改进您在我们网站中的体验？",
                    blurb: "我们希望听到您的意见！请占用您3-4分钟的时间帮我们完成这个调查。<br><br>感谢您的时间和想法。",
                    //noticeAboutSurvey: "设计本项调查的目的是检测您的整个体验，请准备好在您访问结束时填写这份调查。",
                    attribution: "本项调查由独立公司 ForeSee 代表您造访的网站举办。",
                    closeInviteButtonText: "单击此处关闭。",
                    declineButton: "不参加，谢谢",
                    acceptButton: "是，我会提供反馈意见"
                },
                "ru": {
                    headline: "Помогите нам улучшить ваши впечатления от нашего сайта.",
                    blurb: "Нам необходимо ваше мнение!  Пожалуйста, заполните эту короткую анкету. Это займет всего 3-4 минуты.<br><br>Благодарим за уделенное нам время и ваше мнение.",
                    //noticeAboutSurvey: "Опрос предназначен для оценки Ваших впечатлений в целом. Пожалуйста, пройдите его по <u>завершении</u>  Вашего посещения.",
                    attribution: "Опрос проводит независимая компания ForeSee в интересах веб-сайта, на котором Вы сейчас находитесь.",
                    closeInviteButtonText: "Нажмите, чтобы закрыть.",
                    declineButton: "Нет, спасибо",
                    acceptButton: "Да, я выскажу свое мнение"
                },
                "de": {
                    headline: "Wären Sie bereit, zur Verbesserung unserer Website beizutragen?",
                    blurb: "Wir interessieren uns für Ihre Meinung!  Bitte nehmen Sie an dieser kurzen Umfrage teil. Die Beantwortung der Fragen dauert nur etwa 3 bis 4 Minuten.<br><br>Vielen Dank für Ihre Zeit und Ihr Feedback.",
                    //noticeAboutSurvey: "Mit dieser Umfrage wird Ihr Gesamteindruck gemessen. Bitte schauen Sie nach ihr <u>am Ende</u> Ihres Besuchs.",
                    attribution: "Diese Umfrage wird von einem unabhängigen Unternehmen, ForeSee, im Auftrag der von Ihnen besuchten Website durchgeführt.",
                    closeInviteButtonText: "Zum Schließen hier klicken",
                    declineButton: "Nein, danke",
                    acceptButton: "Ja, ich gebe gern Feedback"
                },
                "in": {
                    headline: "Will you help us improve your experience on our site?",
                    blurb: "We want your opinion!  Please complete this brief survey, which will take only 3-4 minutes.<br><br>Thank you for your time and thoughts.",
                    //noticeAboutSurvey: "The survey is designed to measure your entire experience, please look for it at the <u>conclusion</u> of your visit.",
                    attribution: "This survey is conducted by an independent company ForeSee, on behalf of the site you are visiting.",
                    closeInviteButtonText: "Click to close.",
                    declineButton: "No, thanks",
                    acceptButton: "Yes, I'll give feedback"
                },
                "it": {
                    headline: "Vuoi aiutarci a migliorare il nostro sito?",
                    blurb: "Vogliamo il tuo parere!  Ti invitiamo a partecipare al nostro sondaggio, che ti ruberà solo 3-4 minuti.<br><br>Ti ringraziamo per il tuo tempo e i tuoi commenti.",
                    //noticeAboutSurvey: "Il sondaggio mira a valutare la tua esperienza generale, troverai tutti i dettagli al <u>termine</u> della tua visita.",
                    attribution: "Il sondaggio è gestito dalla società indipendente ForeSee per conto del sito che stai visitando.",
                    closeInviteButtonText: "Clicca per chiudere.",
                    declineButton: "No, grazie",
                    acceptButton: "Sì, partecipo volentieri"
                }
            }
        }]],
        
        exclude: {
            urls: [],
            referrers: [],
            userAgents: [],
            browsers: [],
            cookies: [],
            variables: []
        },
        include: {
            local: ['.']
        },
        
        delay: 0,
        timeout: 0,
        
        hideOnClick: false,
        
        hideCloseButton: false,
        
        css: 'foresee-dhtml.css',
        
        hide: [],
        
        hideFlash: false,
        
        type: 'dhtml',
        /* desktop */
        // url: 'invite.html'
        /* mobile */
        url: 'invite-mobile.html',
        back: 'url'
    
        //SurveyMutex: 'SurveyMutex'
    },
    
    tracker: {
        width: '690',
        height: '500',
        timeout: 3,
        adjust: true,
        alert: {
            enabled: true,
            message: 'The survey is now available.',
            locales: [{
                locale: 'fr',
                message: 'Votre enquête est désormais disponible.'
            }, {
                locale: 'uk',
                message: 'The survey is now available.'
            },{
                locale: 'cn',
                message: '本项调查现在可供使用。 '
            }, {
                locale: 'ru',
                message: 'Форма опроса сейчас доступна.'
            }, {
                locale: 'de',
                message: 'Die Umfrage steht jetzt zur Verfügung.'
            }, {
                locale: 'in',
                message: 'The survey is now available.'
            },{
                locale: 'it',
                message: 'Il sondaggio ora è disponibile.'
            }]
        },
        url: 'tracker.html',
        locales: [{
            locale: 'fr',
            url: 'tracker_fr.html'
        }, {
            locale: 'uk',
            url: 'tracker_uk.html'
        },{
            locale: 'cn',
            url: 'tracker_cn.html'
        }, {
            locale: 'ru',
            url: 'tracker_ru.html'
        }, {
            locale: 'de',
            url: 'tracker_de.html'
        }, {
            locale: 'in',
            url: 'tracker_in.html'
        },{
            locale: 'it',
            url: 'tracker_it.html'
        }]
    },
    
    survey: {
        width: 690,
        height: 700,
        host: "www.foreseeresults.com",
        protocol: "http:"
    },
    
    qualifier: {
        footer: '<div id=\"fsrcontainer\"><div style=\"float:left;width:80%;font-size:8pt;text-align:left;line-height:12px;\">This survey is conducted by an independent company ForeSee,<br>on behalf of the site you are visiting.</div><div style=\"float:right;font-size:8pt;\"><a target="_blank" title="Validate TRUSTe privacy certification" href="//privacy-policy.truste.com/click-with-confidence/ctv/en/www.foreseeresults.com/seal_m"><img border=\"0\" src=\"{%baseHref%}truste.png\" alt=\"Validate TRUSTe Privacy Certification\"></a></div></div>',
        width: '690',
        height: '500',
        bgcolor: '#333',
        opacity: 0.7,
        x: 'center',
        y: 'center',
        delay: 0,
        buttons: {
            accept: 'Continue'
        },
        hideOnClick: false,
        css: 'foresee-dhtml.css',
        url: 'qualifying.html',
        locales: [{
            locale: 'fr',
            url: 'qualifying_fr.html'
        }, {
            locale: 'uk',
            url: 'qualifying_uk.html'
        },{
            locale: 'cn',
            url: 'qualifying_cn.html'
        }, {
            locale: 'ru',
            url: 'qualifying_ru.html'
        }, {
            locale: 'de',
            url: 'qualifying_de.html'
        }, {
            locale: 'in',
            url: 'qualifying_in.html'
        },{
            locale: 'it',
            url: 'qualifying_it.html'
        }]
    },
    
    cancel: {
        url: 'cancel.html',
        locales: [{
            locale: 'fr',
            url: 'cancel_fr.html'
        }, {
            locale: 'uk',
            url: 'cancel_uk.html'
        },{
            locale: 'cn',
            url: 'cancel_cn.html'
        }, {
            locale: 'ru',
            url: 'cancel_ru.html'
        }, {
            locale: 'de',
            url: 'cancel_de.html'
        }, {
            locale: 'in',
            url: 'cancel_in.html'
        },{
            locale: 'it',
            url: 'cancel_it.html'
        }],
        width: '690',
        height: '400'
    },
    
    pop: {
        what: 'survey',
        after: 'leaving-site',
        pu: false,
        tracker: true
    },
    
    meta: {
        referrer: true,
        terms: true,
        ref_url: true,
        url: true,
        url_params: false,
        user_agent: false,
        entry: false,
        entry_params: false
    },
    
    events: {
        enabled: true,
        id: true,
        codes: {
            purchase: 800,
            items: 801,
            dollars: 802,
            followup: 803,
            information: 804,
            content: 805
        },
        pd: 7,
        custom: {}
    },
    
    previous: false,
    
    analytics: {
        google_local: false,
        google_remote: false
    },
    
    cpps: {},
    
    mode: 'first-party'
};
