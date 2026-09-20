import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Award, BookOpen, CheckCircle2, Code2, Database,
  Download, Github, Globe2, GraduationCap, Languages, Linkedin, Mail, Menu,
  Monitor, Network, Server, Target, Trophy, X, Zap, Sparkles, Terminal,
  ExternalLink, Layers3, Cpu, CircleDot, Send, ChevronRight
} from 'lucide-react';
import './styles.css';

const content = {
  en: {
    nav: [['/','Home'],['/about','About'],['/education','Education'],['/skills','Skills'],['/certificates','Certificates'],['/projects','Projects'],['/achievements','Achievements'],['/resume','Resume'],['/contact','Contact']],
    role: 'Information Technology Student',
    heroKicker: 'PERSONAL DIGITAL LABORATORY · IT',
    heroTitle: 'Building my future through Information Technology.',
    heroText: 'I explore practical computing, programming, networking, databases, web technologies and digital problem solving — learning by building and improving.',
    explore: 'Explore Projects', resume: 'View Resume', about: 'About Me',
    stats: [['90%','Overall school result'],['2014–2026','Academic journey'],['IT','Future direction']],
    chips: ['Python','Networking','Databases','Web Development'],
    liveProfileLabel: 'LIVE PROFILE', identityLabel: 'IDENTITY', fieldLabel: 'FIELD', fieldValue: 'INFORMATION TECHNOLOGY',
    networkChipLabel: 'NETWORK', databaseChipLabel: 'DATABASE', pythonChipLabel: 'PYTHON',
    terminalModeValue: 'BUILD · TEST · IMPROVE', practicalItLabel: 'PRACTICAL IT',
    profileLabel: 'PROFILE', myApproachLabel: 'MY APPROACH',
    learningByBuildingTitle: 'Learning by Building',
    learningByBuildingText: 'I believe the best way to learn IT is to understand the basics, build practical projects and improve through real problems. I focus on turning what I learn into working systems instead of only studying theory.',
    principlesHome: [['Build','Practical projects using Python, Flask, SQL and web technologies',0],['Explore','Computer systems, networking, databases and Linux',1],['Improve','Testing, troubleshooting and learning from mistakes',2]],
    currentFocusLabel: 'CURRENT FOCUS',
    academicResultLabel: 'ACADEMIC RESULT', academicResultDesc: 'Overall school result · 90 out of 100',
    projectMindsetLabel: 'PROJECT MINDSET', projectMindsetDesc: 'Practical IT projects',
    aboutTitle: 'A practical learner with a clear direction.',
    aboutText: 'My interest in Information Technology started at school, where I became interested in computers and how technology can solve everyday problems. Since then, I have continued learning through independent study, online courses and practical projects. I have built my foundation in programming, networking, databases, web technologies and computer systems by learning through practice.',
    personalIdentityLabel: 'PERSONAL IDENTITY',
    identityTags: ['Qabilbay School','IT','2026'],
    learningByDoingTitle: 'Learning by doing.',
    learningByDoingText: 'I believe the best way to learn technology is by combining knowledge with practice. I learn through online courses, documentation and independent study, then apply what I learn by building projects and solving technical problems. Each project helps me understand my strengths, learn from mistakes and improve my skills.',
    principlesAbout: [['Learn','Independent study, courses and technical documentation',0],['Build','Real projects to turn knowledge into practical skills',1],['Improve','Testing, troubleshooting and learning from mistakes',2]],
    whatIFocusOnLabel: 'WHAT I FOCUS ON',
    focusTitle: 'What I focus on',
    focus: ['Computer Systems & IT Support — Windows, Linux, system setup and technical troubleshooting','Networking & Network Monitoring — IP networking, device monitoring, status checks and troubleshooting','Python & Flask Development — Python programming, Flask web applications and practical automation','SQL & Database Management — SQL, structured data and student information management','Web Applications & Practical Projects — Building real IT projects such as Help Desk, Network Monitoring and Student Database systems'],
    eduTitle: 'Education', eduSub: 'From my school years to my planned university journey.', performance: 'Academic performance',
    fullScaleLabel: 'full scale',
    academicPerformanceLabel: 'ACADEMIC PERFORMANCE',
    azeraakshCenterName: 'Azeraksh Academic Center',
    tuitionTranscriptLine: 'Tuition Transcript · 5 Semesters · 10 Months',
    overallSemesterAvgLabel: 'OVERALL SEMESTER AVERAGE',
    highestLabel: 'HIGHEST', lowestLabel: 'LOWEST', assessmentLabel: 'ASSESSMENT', periodLabel: 'PERIOD', periodValue: '10 Months',
    semesterWord: 'SEMESTER', midTermLabel: 'MID TERM', finalLabel: 'FINAL', totalLabel: 'TOTAL',
    assessmentWeightingLabel: 'ASSESSMENT WEIGHTING', assessmentWeightingText: 'Mid Term 20% · Final 80% · Total 100%',
    academicRecordLabel: 'ACADEMIC RECORD',
    originalTranscriptTitle: 'Original Tuition Transcript',
    originalTranscriptDesc: 'Original transcript pages for academic verification.',
    transcriptPageWord: 'TRANSCRIPT PAGE',
    azereakshTranscriptTitle: 'Azeraksh Tuition Transcript',
    transcriptCaptionDesc: (n)=>`Original academic transcript · Page ${n}`,
    academicJourneyLabel: 'ACADEMIC JOURNEY',
    journey: [['2014','Education begins','The start of my long academic journey.'],['2024','Grade 10','83% academic result.'],['2025','Grade 11','Academic year completed successfully.'],['2026','Grade 12 completion','Overall school result: 90% out of 100.'],["Next","Bachelor's in Information Technology","Planned university direction."],["Future","Master's degree","Advanced academic and professional development."]],
    highTitle: 'Academic highlights', highlightsLabel: 'HIGHLIGHTS', high: ['Overall school result: 90% out of 100','Top student in class','Four first-rank school certificates','Recognition for helping classmates learn computer skills'],
    skillsTitle: 'IT Skills', skillsSub: 'A growing technical toolkit built through study and projects.', skills: [
  ['Python', 'Intermediate', 'Programming fundamentals, scripting and problem-solving logic', Code2, '45%'],
  ['Flask', 'Intermediate', 'Building web applications with Flask, routes and forms', Server, '40%'],
  ['Networking', 'Intermediate', 'Networking concepts, IP, monitoring and troubleshooting', Network, '45%'],
  ['Linux', 'Intermediate', 'Working with Linux operating systems and basic commands', Monitor, '40%'],
  ['Windows', 'Good', 'System management, settings and basic troubleshooting', Monitor, '65%'],
  ['SQL / Databases', 'Intermediate', 'SQL queries and structured database management', Database, '42%'],
  ['Microsoft Office', 'Good', 'Word, Excel, PowerPoint and everyday productivity skills', Monitor, '75%'],
  ['ICDL', 'Good', 'Computer fundamentals and digital productivity skills', Cpu, '80%'],
  ['English Communication', 'Good', 'English speaking, reading and everyday communication', Globe2, '60%'],
],
    achTitle: 'Academic Achievements',
    achSub: 'Selected academic achievements and school recognitions.',
    academicAchievementsLabel: 'ACADEMIC ACHIEVEMENTS', learningBuildingImprovingLine: 'Learning · Building · Improving',
    certTitle: 'Certificates',
    certSub: 'Selected certificates and academic achievements.',
    certifiedLabel: 'CERTIFIED', academicLabel: 'ACADEMIC', viewCertificateLabel: 'VIEW CERTIFICATE', verifyLabel: 'VERIFY',
    certs: [
  ['CS50x','Harvard / CS50','Introduction to Computer Science','https://cs50.harvard.edu/certificates/aeb8b52a-2cec-4b32-82d1-6e59e5bc853e','/assets/certificates/CS50X.jpg','/assets/certificates/CS50X.pdf'],
  ['CS50P','Harvard / CS50','Introduction to Programming with Python','https://cs50.harvard.edu/certificates/590f0885-92c1-4263-9f8c-feb76327671a','/assets/certificates/CS50P.jpg','/assets/certificates/CS50P.pdf'],
  ['CS50 SQL','Harvard / CS50','SQL and database fundamentals'],
  ['ICDL','Digital Skills','Computer and productivity skills'],
  ['Let’s Go Three','English / Let’s Go','English language learning and development','', '/assets/certificates/English-Lets-Go-Three.jpg.jpg'],
  ['Let’s Go Two','English / Let’s Go','English language learning and development','', '/assets/certificates/English-Lets-Go-Two.jpg.jpg'],
  ['School Recognition','Qabilbay School','Academic and technology-related recognition'],
  ['Diploma','Mofaker Noori Educational Center','Diploma awarded for successfully completing the required academic program.','', '/assets/certificates/Mofaker-Noori-Diploma.jpg'],
  ['Certificate','Mofaker Noori Educational Center','Certificate awarded in recognition of talent, moral character, effort and competency.','', '/assets/certificates/Mofaker-Noori-Certificate.jpg']
],
    projTitle: 'Projects',
    projSub: 'Practical IT projects built through learning and hands-on work.',
    itProjectLabel: 'IT PROJECT', liveDemoLabel: 'Live Demo',
    projects: [
      ['Karimi IT Help Desk System','IT Support · Flask · SQLAlchemy','A web-based support system for creating, managing and tracking technical support tickets.','https://github.com/hashmat-cyber/Karimi-IT-Help-Desk-System','https://karimi-it-help-desk-system.onrender.com/'],
      ['Karimi Network Monitoring Dashboard','Networking · Flask · Python','A monitoring dashboard for devices, status checks, alerts, scanning and network reporting.','https://github.com/hashmat-cyber/Karimi-Network-Monitoring-Dashboard','https://karimi-network-monitoring-dashboard.onrender.com'],
      ['Karimi Student Information Database','Database · Python · Web','A structured student information project designed to demonstrate database organization and practical information management.','https://github.com/hashmat-cyber/Karimi-Student-Information-Database','https://karimi-student-information-database.onrender.com']
    ],
    achievementsList: [
      {
        number: '01', title: 'First Rank — Grade 11', year: '2025',
        image: '/assets/achievements/grade-11-first-rank.jpg',
        description: 'Awarded for achieving first place in Grade 11 for outstanding academic performance, commitment to learning, discipline, and consistent academic excellence.',
        details: [
          ['Achievement', 'First place in Grade 11'],
          ['Academic Year', '2025'],
          ['Issue Date', '25 December 2025'],
          ['Certificate No.', 'SCH-2025-312'],
          ['Issued by', 'Qabilbay High School'],
          ['Recognition', 'Outstanding Academic Achievement']
        ]
      },
      {
        number: '02', title: 'Successful Completion of Grade 12 First Four-Month Examination', year: '2026',
        image: '/assets/achievements/grade-12-first-four-month-exam.jpg',
        description: 'Awarded for successfully completing the first four-month examination of Grade 12, demonstrating academic performance, commitment, discipline, and perseverance.',
        details: [
          ['Grade', '12'],
          ['Academic Year', '2026'],
          ['Achievement', 'Successful completion of first four-month examination'],
          ['Issued by', 'Qabilbay High School'],
          ['Principal', 'Sayed Ghulam Hanafi'],
          ['Class Teacher', 'Mohammad Shaker Frotan']
        ]
      }
    ],
    goalsTitle: 'Academic & Career Goals', goalsSub: 'A simple roadmap with long-term direction.', roadmapLabel: 'ROADMAP', goals: [["01","Bachelor's in Information Technology","Build strong foundations in systems, networking, databases, software and modern digital technologies."],['02','Professional Development','Strengthen my practical skills through projects, certifications, internships and continuous learning.'],["03","Master's Degree","Continue advanced study and develop deeper expertise in a future IT specialization."]],
    resumeTitle: 'Resume', resumeSub: 'A concise view of my academic direction, technical foundation and practical work.',
    resumeEducationLabel: 'Education', resumeEducationValue: 'Qabilbay School · 2026',
    resumeTechFocusLabel: 'Technical focus', resumeTechFocusValue: 'Python · Web · Networking · Databases',
    resumeCredentialsLabel: 'Credentials', resumeCredentialsValue: 'CS50x · CS50P · CS50 SQL · ICDL',
    resumeProjectsLabel: 'Projects', resumeProjectsValue: '3 practical IT projects',
    downloadResumeLabel: 'Download Resume', coreSignalsLabel: 'CORE SIGNALS',
    overallSchoolResultLabel: 'Overall school result', featuredProjectsLabel: 'Featured projects', technicalCredentialsLabel: 'Technical credentials',
    contactTitle: "Let's build something meaningful.", contactText: 'For scholarship, academic, internship or technology opportunities, you can reach me through my professional profiles.', email: 'Email', github: 'GitHub', linkedin: 'LinkedIn', send: 'Send message', nameLabel: 'Name', emailLabel: 'Email', messageLabel: 'Message', namePh: 'Your name', emailPh: 'you@example.com', messagePh: 'Tell me about the opportunity…',
    openToOpportunitiesLabel: 'OPEN TO OPPORTUNITIES', messageTerminalLabel: 'MESSAGE TERMINAL', messageReadyText: 'Message ready. Thank you for contacting me.',
    footer: 'Sayed Hashmat Karimi · Information Technology Student', footerTech: 'Information Technology', back: 'Back to top', menu: 'Menu',
    pageHeroTag: 'INFORMATION TECHNOLOGY'
  },
  dari: {
    nav: [['/','خانه'],['/about','دربارهٔ من'],['/education','تحصیلات'],['/skills','مهارت‌ها'],['/certificates','سرتیفیکیت‌ها'],['/projects','پروژه‌ها'],['/achievements','دستاوردها'],['/resume','رزومه'],['/contact','تماس']],
    role: 'محصل تکنالوژی معلوماتی',
    heroKicker: 'لابراتوار دیجیتالی شخصی · IT',
    heroTitle: 'ساختن آیندهٔ خود از طریق تکنالوژی معلوماتی.',
    heroText: 'من روی کمپیوتر عملی، برنامه‌نویسی، شبکه، دیتابیس، تکنالوژی‌های وب و حل مشکلات دیجیتالی کار می‌کنم — و از طریق ساختن و بهبود، یاد می‌گیرم.',
    explore: 'دیدن پروژه‌ها', resume: 'دیدن رزومه', about: 'دربارهٔ من',
    stats: [['90%','نتیجهٔ کلی مکتب'],['2014–2026','مسیر تحصیلی'],['IT','مسیر آینده']],
    chips: ['Python','شبکه','دیتابیس','توسعهٔ وب'],
    liveProfileLabel: 'پروفایل زنده', identityLabel: 'هویت', fieldLabel: 'رشته', fieldValue: 'تکنالوژی معلوماتی',
    networkChipLabel: 'شبکه', databaseChipLabel: 'دیتابیس', pythonChipLabel: 'PYTHON',
    terminalModeValue: 'ساختن · آزمایش · بهبود', practicalItLabel: 'IT عملی',
    profileLabel: 'پروفایل', myApproachLabel: 'شیوهٔ کاری من',
    learningByBuildingTitle: 'یادگیری از طریق ساختن',
    learningByBuildingText: 'به باور من، بهترین راه برای یادگیری IT این است که اصول را بفهمی، پروژه‌های عملی بسازی و از طریق مشکلات واقعی بهبود پیدا کنی. تمرکز من این است که آموخته‌هایم را به سیستم‌های کارآمد تبدیل کنم، نه اینکه تنها به تیوری اکتفا کنم.',
    principlesHome: [['ساختن','پروژه‌های عملی با استفاده از Python، Flask، SQL و تکنالوژی‌های وب',0],['کشف و بررسی','سیستم‌های کمپیوتر، شبکه، دیتابیس و Linux',1],['بهبود','آزمایش، عیب‌یابی و آموختن از اشتباهات',2]],
    currentFocusLabel: 'تمرکز فعلی',
    academicResultLabel: 'نتیجهٔ تحصیلی', academicResultDesc: 'نتیجهٔ کلی مکتب · 90 از 100',
    projectMindsetLabel: 'ذهنیت پروژه‌محور', projectMindsetDesc: 'پروژه‌های عملی IT',
    aboutTitle: 'یک یادگیرندهٔ عملی با مسیر روشن.',
    aboutText: 'علاقهٔ من به تکنالوژی معلوماتی از دوران مکتب آغاز شد، جایی که به کمپیوتر و اینکه چگونه تکنالوژی می‌تواند مشکلات روزمره را حل کند، علاقه‌مند شدم. از آن زمان، از طریق مطالعهٔ شخصی، دوره‌های آنلاین و پروژه‌های عملی به یادگیری ادامه داده‌ام. بنیاد خود را در برنامه‌نویسی، شبکه، دیتابیس، تکنالوژی‌های وب و سیستم‌های کمپیوتر از طریق تمرین عملی ساخته‌ام.',
    personalIdentityLabel: 'هویت شخصی',
    identityTags: ['Qabilbay School','IT','2026'],
    learningByDoingTitle: 'یادگیری از طریق عمل.',
    learningByDoingText: 'به باور من، بهترین راه برای یادگیری تکنالوژی، ترکیب دانش با تمرین عملی است. من از طریق دوره‌های آنلاین، اسناد فنی و مطالعهٔ شخصی یاد می‌گیرم، سپس آموخته‌هایم را با ساختن پروژه‌ها و حل مشکلات تخنیکی به کار می‌بندم. هر پروژه به من کمک می‌کند نقاط قوتم را بشناسم، از اشتباهات یاد بگیرم و مهارت‌هایم را بهبود ببخشم.',
    principlesAbout: [['آموختن','مطالعهٔ شخصی، دوره‌ها و اسناد فنی',0],['ساختن','پروژه‌های واقعی برای تبدیل دانش به مهارت عملی',1],['بهبود','آزمایش، عیب‌یابی و آموختن از اشتباهات',2]],
    whatIFocusOnLabel: 'روی چه چیزی تمرکز دارم',
    focusTitle: 'روی چه چیزی تمرکز دارم',
    focus: ['سیستم‌های کمپیوتر و پشتیبانی IT — نصب و تنظیم Windows، Linux و عیب‌یابی تخنیکی','شبکه و مانیتورینگ شبکه — شبکه‌سازی IP، مانیتورینگ دیوایس‌ها، بررسی وضعیت و عیب‌یابی','توسعهٔ Python و Flask — برنامه‌نویسی Python، ساخت اپلیکیشن‌های وب با Flask و اتومات‌سازی عملی','مدیریت SQL و دیتابیس — کار با SQL، داده‌های ساختاریافته و مدیریت معلومات محصلین','اپلیکیشن‌های وب و پروژه‌های عملی — ساخت پروژه‌های واقعی IT مانند Help Desk، مانیتورینگ شبکه و سیستم دیتابیس محصلین'],
    eduTitle: 'تحصیلات', eduSub: 'از سال‌های مکتب تا مسیر برنامه‌ریزی‌شدهٔ دانشگاهی من.', performance: 'عملکرد تحصیلی',
    fullScaleLabel: 'مقیاس کامل',
    academicPerformanceLabel: 'عملکرد تحصیلی',
    azeraakshCenterName: 'مرکز تحصیلی Azeraksh',
    tuitionTranscriptLine: 'چارت نمرات · 5 سمستر · 10 ماه',
    overallSemesterAvgLabel: 'میانگین کلی سمستر‌ها',
    highestLabel: 'بلندترین', lowestLabel: 'پایین‌ترین', assessmentLabel: 'ارزیابی', periodLabel: 'دوره', periodValue: '10 ماه',
    semesterWord: 'سمستر', midTermLabel: 'میان‌ترم', finalLabel: 'نهایی', totalLabel: 'مجموع',
    assessmentWeightingLabel: 'وزن‌دهی ارزیابی', assessmentWeightingText: 'میان‌ترم 20% · نهایی 80% · مجموع 100%',
    academicRecordLabel: 'سوابق تحصیلی',
    originalTranscriptTitle: 'چارت نمرات اصلی',
    originalTranscriptDesc: 'صفحات اصلی چارت نمرات برای تأیید تحصیلی.',
    transcriptPageWord: 'صفحهٔ چارت نمرات',
    azereakshTranscriptTitle: 'چارت نمرات Azeraksh',
    transcriptCaptionDesc: (n)=>`چارت نمرات اصلی · صفحه ${n}`,
    academicJourneyLabel: 'مسیر تحصیلی',
    journey: [['2014','آغاز تحصیل','شروع مسیر طولانی تحصیلی من.'],['2024','صنف دهم','نتیجهٔ تحصیلی 83%.'],['2025','صنف یازدهم','سال تحصیلی با موفقیت تکمیل شد.'],['2026','تکمیل صنف دوازدهم','نتیجهٔ کلی مکتب: 90% از 100.'],['بعدی','لیسانس تکنالوژی معلوماتی','مسیر برنامه‌ریزی‌شدهٔ دانشگاهی.'],['آینده','ماستری','رشد پیشرفتهٔ تحصیلی و مسلکی.']],
    highTitle: 'نکات برجستهٔ تحصیلی', highlightsLabel: 'نکات برجسته', high: ['نتیجهٔ کلی مکتب: 90% از 100','شاگرد اول صنف','چهار سرتیفیکیت مقام اول مکتب','تقدیر به‌خاطر کمک به همصنفی‌ها در یادگیری مهارت‌های کمپیوتر'],
    skillsTitle: 'مهارت‌های IT', skillsSub: 'مجموعه‌ای رو به رشد از مهارت‌های تخنیکی که از طریق مطالعه و پروژه‌ها ساخته شده.', skills: [
  ['Python', 'متوسط', 'اصول برنامه‌نویسی، اسکریپت‌نویسی و منطق حل مسئله', Code2, '45%'],
  ['Flask', 'متوسط', 'ساخت اپلیکیشن‌های وب با Flask، روت‌ها و فرم‌ها', Server, '40%'],
  ['Networking', 'متوسط', 'مفاهیم شبکه، IP، مانیتورینگ و عیب‌یابی', Network, '45%'],
  ['Linux', 'متوسط', 'کار با سیستم‌عامل Linux و اوامر ابتدایی', Monitor, '40%'],
  ['Windows', 'خوب', 'مدیریت سیستم، تنظیمات و عیب‌یابی ابتدایی', Monitor, '65%'],
  ['SQL / Databases', 'متوسط', 'کوئری‌نویسی SQL و مدیریت دیتابیس ساختاریافته', Database, '42%'],
  ['Microsoft Office', 'خوب', 'Word، Excel، PowerPoint و مهارت‌های روزمرهٔ بهره‌وری', Monitor, '75%'],
  ['ICDL', 'خوب', 'اصول کمپیوتر و مهارت‌های دیجیتالی بهره‌وری', Cpu, '80%'],
  ['English Communication', 'خوب', 'صحبت، مطالعه و ارتباط روزمره به زبان انگلیسی', Globe2, '60%'],
],
    achTitle: 'دستاوردهای تحصیلی',
    achSub: 'دستاوردهای تحصیلی و تقدیرنامه‌های مکتب، به‌طور منتخب.',
    academicAchievementsLabel: 'دستاوردهای تحصیلی', learningBuildingImprovingLine: 'یادگیری · ساختن · بهبود',
    certTitle: 'سرتیفیکیت‌ها',
    certSub: 'سرتیفیکیت‌ها و دستاوردهای تحصیلی منتخب.',
    certifiedLabel: 'تصدیق‌شده', academicLabel: 'تحصیلی', viewCertificateLabel: 'مشاهدهٔ سرتیفیکیت', verifyLabel: 'تأیید',
    certs: [
  ['CS50x','Harvard / CS50','مقدمه‌ای بر علوم کمپیوتر','https://cs50.harvard.edu/certificates/aeb8b52a-2cec-4b32-82d1-6e59e5bc853e','/assets/certificates/CS50X.jpg','/assets/certificates/CS50X.pdf'],
  ['CS50P','Harvard / CS50','مقدمه‌ای بر برنامه‌نویسی با Python','https://cs50.harvard.edu/certificates/590f0885-92c1-4263-9f8c-feb76327671a','/assets/certificates/CS50P.jpg','/assets/certificates/CS50P.pdf'],
  ['CS50 SQL','Harvard / CS50','اصول SQL و دیتابیس'],
  ['ICDL','مهارت‌های دیجیتالی','مهارت‌های کمپیوتر و بهره‌وری'],
  ['Let’s Go Three','English / Let’s Go','آموزش و رشد زبان انگلیسی','', '/assets/certificates/English-Lets-Go-Three.jpg.jpg'],
  ['Let’s Go Two','English / Let’s Go','آموزش و رشد زبان انگلیسی','', '/assets/certificates/English-Lets-Go-Two.jpg.jpg'],
  ['تقدیرنامهٔ مکتب','Qabilbay School','تقدیر تحصیلی و مرتبط با تکنالوژی'],
  ['دیپلوم','Mofaker Noori Educational Center','دیپلوم اعطا شده به‌خاطر تکمیل موفقانهٔ برنامهٔ تحصیلی لازم.','', '/assets/certificates/Mofaker-Noori-Diploma.jpg'],
  ['سرتیفیکیت','Mofaker Noori Educational Center','سرتیفیکیت اعطا شده به‌پاس استعداد، اخلاق، تلاش و شایستگی.','', '/assets/certificates/Mofaker-Noori-Certificate.jpg']
],
    projTitle: 'پروژه‌ها',
    projSub: 'پروژه‌های عملی IT که از طریق یادگیری و کار عملی ساخته شده‌اند.',
    itProjectLabel: 'پروژهٔ IT', liveDemoLabel: 'دمو زنده',
    projects: [
      ['Karimi IT Help Desk System','پشتیبانی IT · Flask · SQLAlchemy','یک سیستم پشتیبانی تحت وب برای ایجاد، مدیریت و پیگیری تکت‌های پشتیبانی تخنیکی.','https://github.com/hashmat-cyber/Karimi-IT-Help-Desk-System','https://karimi-it-help-desk-system.onrender.com/'],
      ['Karimi Network Monitoring Dashboard','شبکه · Flask · Python','یک دشبورد مانیتورینگ برای دیوایس‌ها، بررسی وضعیت، هشدارها، اسکن و گزارش‌دهی شبکه.','https://github.com/hashmat-cyber/Karimi-Network-Monitoring-Dashboard','https://karimi-network-monitoring-dashboard.onrender.com'],
      ['Karimi Student Information Database','دیتابیس · Python · وب','یک پروژهٔ ساختاریافتهٔ معلومات محصلین که سازماندهی دیتابیس و مدیریت عملی معلومات را به نمایش می‌گذارد.','https://github.com/hashmat-cyber/Karimi-Student-Information-Database','https://karimi-student-information-database.onrender.com']
    ],
    achievementsList: [
      {
        number: '01', title: 'مقام اول — صنف یازدهم', year: '2025',
        image: '/assets/achievements/grade-11-first-rank.jpg',
        description: 'اعطا شده به‌خاطر کسب مقام اول در صنف یازدهم برای عملکرد برجستهٔ تحصیلی، تعهد به یادگیری، نظم و برتری پیوستهٔ تحصیلی.',
        details: [
          ['دستاورد', 'مقام اول در صنف یازدهم'],
          ['سال تحصیلی', '2025'],
          ['تاریخ صدور', '25 دسامبر 2025'],
          ['شماره سرتیفیکیت', 'SCH-2025-312'],
          ['صادر شده توسط', 'Qabilbay High School'],
          ['نوع تقدیر', 'دستاورد برجستهٔ تحصیلی']
        ]
      },
      {
        number: '02', title: 'تکمیل موفقانهٔ امتحان چهارماههٔ اول صنف دوازدهم', year: '2026',
        image: '/assets/achievements/grade-12-first-four-month-exam.jpg',
        description: 'اعطا شده به‌خاطر تکمیل موفقانهٔ امتحان چهارماههٔ اول صنف دوازدهم، که نشان‌دهندهٔ عملکرد تحصیلی، تعهد، نظم و پشتکار است.',
        details: [
          ['صنف', '12'],
          ['سال تحصیلی', '2026'],
          ['دستاورد', 'تکمیل موفقانهٔ امتحان چهارماههٔ اول'],
          ['صادر شده توسط', 'Qabilbay High School'],
          ['مدیر مکتب', 'سید غلام حنفی'],
          ['معلم صنف', 'محمد شاکر فروتن']
        ]
      }
    ],
    goalsTitle: 'اهداف تحصیلی و مسلکی', goalsSub: 'یک نقشهٔ راه ساده با مسیر درازمدت.', roadmapLabel: 'نقشهٔ راه', goals: [["01","لیسانس تکنالوژی معلوماتی","ایجاد بنیاد قوی در سیستم‌ها، شبکه، دیتابیس، سافتویر و تکنالوژی‌های دیجیتالی مدرن."],['02','رشد مسلکی','تقویت مهارت‌های عملی از طریق پروژه‌ها، سرتیفیکیت‌ها، کارآموزی و یادگیری مداوم.'],["03","ماستری","ادامهٔ تحصیلات پیشرفته و کسب تخصص عمیق‌تر در یک رشتهٔ آیندهٔ IT."]],
    resumeTitle: 'رزومه', resumeSub: 'نمایی مختصر از مسیر تحصیلی، بنیاد تخنیکی و کارهای عملی من.',
    resumeEducationLabel: 'تحصیلات', resumeEducationValue: 'Qabilbay School · 2026',
    resumeTechFocusLabel: 'تمرکز تخنیکی', resumeTechFocusValue: 'Python · وب · شبکه · دیتابیس',
    resumeCredentialsLabel: 'مدارک', resumeCredentialsValue: 'CS50x · CS50P · CS50 SQL · ICDL',
    resumeProjectsLabel: 'پروژه‌ها', resumeProjectsValue: '3 پروژهٔ عملی IT',
    downloadResumeLabel: 'دانلود رزومه', coreSignalsLabel: 'نشانگرهای کلیدی',
    overallSchoolResultLabel: 'نتیجهٔ کلی مکتب', featuredProjectsLabel: 'پروژه‌های برجسته', technicalCredentialsLabel: 'مدارک تخنیکی',
    contactTitle: 'بیایید چیزی با ارزش بسازیم.', contactText: 'برای فرصت‌های بورسیه، تحصیلی، کارآموزی یا تکنالوژی، می‌توانید از طریق پروفایل‌های مسلکی من با من در تماس شوید.', email: 'ایمیل', github: 'GitHub', linkedin: 'LinkedIn', send: 'ارسال پیام', nameLabel: 'نام', emailLabel: 'ایمیل', messageLabel: 'پیام', namePh: 'نام شما', emailPh: 'you@example.com', messagePh: 'دربارهٔ این فرصت به من بگویید…',
    openToOpportunitiesLabel: 'آمادهٔ فرصت‌های جدید', messageTerminalLabel: 'ترمینال پیام', messageReadyText: 'پیام آماده شد. از تماس شما سپاسگزارم.',
    footer: 'Sayed Hashmat Karimi · محصل تکنالوژی معلوماتی', footerTech: 'تکنالوژی معلوماتی', back: 'بازگشت به بالا', menu: 'منو',
    pageHeroTag: 'تکنالوژی معلوماتی'
  }
};

const LANG_KEY = 'karimi-lang';

function Layout({t,lang,setLang,children}){
  const loc = useLocation();
  const [open,setOpen] = useState(false);

  useEffect(()=>{
    setOpen(false);
    window.scrollTo({top:0,behavior:'smooth'});
  },[loc.pathname]);

  useEffect(()=>{
    document.documentElement.dir = lang==='dari' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang==='dari' ? 'fa' : 'en';
    try { localStorage.setItem(LANG_KEY, lang); } catch(e) {}
  },[lang]);

  return <div className={lang==='dari' ? 'app rtl' : 'app'}>
    <header className="siteHeader">
      <div className="container navWrap">
        <Link to="/" className="brand">
          <span className="brandMark">
            <img src="/assets/images/profile/profile.jpg" alt="Sayed Hashmat Karimi" />
          </span>

          <span>
            <b>SAYED HASHMAT KARIMI</b>
            <small>{t.role}</small>
          </span>
        </Link>

        <nav className={open?'nav show':'nav'}>
          {t.nav.map(([p,l])=>
            <Link
              key={p}
              className={loc.pathname===p?'active':''}
              to={p}
            >
              {l}
            </Link>
          )}
        </nav>

        <div className="navActions">
          <div className="langBtn" role="group" aria-label="Language">
            <Languages size={13}/>
            <button
              type="button"
              className={lang==='en'?'langOptActive':'langOpt'}
              onClick={()=>setLang('en')}
            >
              English
            </button>
            <span className="langSep">|</span>
            <button
              type="button"
              className={lang==='dari'?'langOptActive':'langOpt'}
              onClick={()=>setLang('dari')}
            >
              دری
            </button>
          </div>

          <button
            className="mobile"
            aria-label={t.menu}
            onClick={()=>setOpen(!open)}
          >
            {open?<X/>:<Menu/>}
          </button>
        </div>
      </div>
    </header>

    <main>{children}</main>

    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <div className="footerName">Sayed Hashmat Karimi</div>
          <p>{t.role}</p>
        </div>

        <div className="footerLinks">
          {t.nav.slice(0,5).map(([p,l])=>
            <Link key={p} to={p}>{l}</Link>
          )}
        </div>

        <div className="footerSocial">
          <a
            href="https://github.com/hashmat-cyber"
            target="_blank"
            rel="noreferrer"
          >
            <Github/>
          </a>

          <a
            href="https://www.linkedin.com/in/sayed-hashmat-karimi-5463ab416"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin/>
          </a>

          <a href="mailto:sayedhashmatkarimi75@gmail.com">
            <Mail/>
          </a>
        </div>
      </div>

      <div className="container footerBottom">
        <span>© 2026 Sayed Hashmat Karimi</span>
        <span>{t.footerTech} · {t.back}</span>
      </div>
    </footer>
  </div>
}

function PageHero({num,title,sub,t}){return <section className="pageHero"><div className="container"><div className="sectionEyebrow"><span>{num}</span><i/> {t.pageHeroTag}</div><h1>{title}</h1><p>{sub}</p></div></section>}
function GlassCard({children,className=''}){return <div className={`glassCard ${className}`}>{children}</div>}

function Home({t}){const nav=useNavigate();return <>
  <section className="homeHero"><div className="heroGrid"/><div className="heroGlow glowA"/><div className="heroGlow glowB"/><div className="container heroLayout">
    <div className="heroCopy"><div className="heroKicker"><span className="pulseDot"/>{t.heroKicker}</div><h1><span>SAYED HASHMAT</span> <em>KARIMI</em></h1><div className="roleLine"><span>{t.role}</span><i/><span>IT · 2026</span></div><h2>{t.heroTitle}</h2><p>{t.heroText}</p><div className="heroActions"><button className="btn btnPrimary" onClick={()=>nav('/projects')}>{t.explore}<ArrowRight/></button><button className="btn btnGlass" onClick={()=>nav('/resume')}>{t.resume}<ArrowUpRight/></button><button className="btn btnText" onClick={()=>nav('/contact')}>{t.about}<ChevronRight/></button></div><div className="heroStats">{t.stats.map(([v,l])=><div className="stat" key={l}><strong>{v}</strong><span>{l}</span></div>)}</div></div>
    <div className="heroVisual"><div className="orbital orb1"/><div className="orbital orb2"/><div className="visualFrame"><div className="frameTop"><span><CircleDot/> {t.liveProfileLabel}</span><span>01 / 04</span></div><div className="profileFallback"><img src="/assets/images/profile/profile.jpg" alt="Sayed Hashmat Karimi" /><div className="scanline"/></div><div className="profileCaption"><div><span>{t.identityLabel}</span><b>SAYED HASHMAT KARIMI</b></div><div><span>{t.fieldLabel}</span><b>{t.fieldValue}</b></div></div></div><div className="techChip chip1"><Network/><span>{t.networkChipLabel}</span></div><div className="techChip chip2"><Database/><span>{t.databaseChipLabel}</span></div><div className="techChip chip3"><Code2/><span>{t.pythonChipLabel}</span></div><div className="terminalMini"><span>&gt;_ learning.mode</span><b>{t.terminalModeValue}</b></div></div>
  </div></section>
  <section className="marquee"><div className="container marqueeInner">{t.chips.map((x,i)=><span key={x}><Zap/> {x} <i>·</i></span>)}<span><Sparkles/> {t.practicalItLabel}</span></div></section>
  <section className="section homeBento"><div className="container bentoIntro"><div><span className="sectionEyebrow">01 <i/> {t.profileLabel}</span><h2>{t.aboutTitle}</h2></div><p>{t.aboutText}</p></div><div className="container bentoGrid"><GlassCard className="bentoLarge"><span className="cardIndex">01</span><div className="bigIcon"><Cpu/></div><span className="eyebrowSmall">{t.myApproachLabel}</span><h3>{t.learningByBuildingTitle}</h3><p>{t.learningByBuildingText}</p><div className="principles">{t.principlesHome.map(([label,desc,i])=>{const Icon=[Code2,Layers3,Target][i];return <div key={label}><Icon/><b>{label}</b><span>{desc}</span></div>})}</div><Link to="/about" className="cardLink">{t.about}<ArrowUpRight/></Link></GlassCard><GlassCard className="bentoFocus"><span className="eyebrowSmall">{t.currentFocusLabel}</span><div className="focusRows">{t.focus.slice(0,4).map((x,i)=><div key={x}><b>0{i+1}</b><span>{x}</span><CheckCircle2/></div>)}</div></GlassCard><GlassCard className="bentoMetric"><span className="eyebrowSmall">{t.academicResultLabel}</span><strong>90%</strong><p>{t.academicResultDesc}</p><div className="metricLine"><i/></div></GlassCard><GlassCard className="bentoMetric second"><span className="eyebrowSmall">{t.projectMindsetLabel}</span><strong>03</strong><p>{t.projectMindsetDesc}</p><div className="nodeMap"><i/><i/><i/><i/></div></GlassCard></div></section>
</>}

function About({t}){return <><PageHero num="01" title={t.aboutTitle} sub={t.aboutText} t={t}/><section className="section"><div className="container aboutBento"><GlassCard className="aboutIdentity"><div className="aboutAvatar"><img src="/assets/images/profile/profile.jpg" alt="Sayed Hashmat Karimi" /></div><span className="eyebrowSmall">{t.personalIdentityLabel}</span><h2>Sayed Hashmat Karimi</h2><p>{t.role}</p><div className="identityTags">{t.identityTags.map(x=><span key={x}>{x}</span>)}</div></GlassCard><GlassCard className="aboutStory"><span className="eyebrowSmall">{t.myApproachLabel}</span><h2>{t.learningByDoingTitle}</h2><p>{t.learningByDoingText}</p><div className="principles">{t.principlesAbout.map(([label,desc,i])=>{const Icon=[Layers3,Code2,Target][i];return <div key={label}><Icon/><b>{label}</b><span>{desc}</span></div>})}</div></GlassCard><GlassCard className="aboutFocus"><span className="eyebrowSmall">{t.whatIFocusOnLabel}</span>{t.focus.map((x,i)=><div className="focusItem" key={x}><span>0{i+1}</span><b>{x}</b><CheckCircle2/></div>)}</GlassCard></div></section></>}

function Education({t}){
  const semesters = [
    ["01", "20%", "77%", "97%"],
    ["02", "18%", "80%", "98%"],
    ["03", "18.5%", "71.25%", "89.75%"],
    ["04", "16.5%", "62%", "78.5%"],
    ["05", "19%", "78%", "97%"]
  ];

  return (
    <>
      <PageHero num="02" title={t.eduTitle} sub={t.eduSub} t={t}/>

      <section className="section">
        <div className="container">

          <GlassCard className="performance">
            <div>
              <span className="eyebrowSmall">{t.performance}</span>
              <strong>90%</strong>
              <p>{t.academicResultDesc}</p>
            </div>

            <div className="progressTrack">
              <i/>
            </div>

            <div className="performanceSide">
              <strong>100%</strong>
              <span>{t.fullScaleLabel}</span>
            </div>
          </GlassCard>

          <GlassCard className="academicPerformanceCard">
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "24px",
              flexWrap: "wrap",
              marginBottom: "24px"
            }}>
              <div>
                <span className="eyebrowSmall">{t.academicPerformanceLabel}</span>
                <h2 style={{margin: "8px 0 6px"}}>{t.azeraakshCenterName}</h2>
                <p style={{margin: 0}}>{t.tuitionTranscriptLine}</p>
              </div>

              <div style={{textAlign: "right"}}>
                <span className="eyebrowSmall">{t.overallSemesterAvgLabel}</span>
                <strong style={{
                  display: "block",
                  fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                  lineHeight: 1,
                  marginTop: "8px"
                }}>92.05%</strong>
              </div>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "12px",
              marginBottom: "22px"
            }}>
              <div className="glassMiniCard">
                <span className="eyebrowSmall">{t.highestLabel}</span>
                <strong>98%</strong>
              </div>

              <div className="glassMiniCard">
                <span className="eyebrowSmall">{t.lowestLabel}</span>
                <strong>78.5%</strong>
              </div>

              <div className="glassMiniCard">
                <span className="eyebrowSmall">{t.assessmentLabel}</span>
                <strong>20% + 80%</strong>
              </div>

              <div className="glassMiniCard">
                <span className="eyebrowSmall">{t.periodLabel}</span>
                <strong>{t.periodValue}</strong>
              </div>
            </div>

            <div style={{marginTop: "24px"}}>
              <div className="semesterGrid">
                {semesters.map(([semester, midTerm, final, total]) => (
                  <div className="semesterCard" key={semester}>
                    <div className="semesterCardHeader">
                      <span className="semesterNumber">{t.semesterWord} {semester}</span>
                      <span className="semesterTotal">{total}</span>
                    </div>

                    <div className="semesterDivider" />

                    <div className="semesterScores">
                      <div className="semesterScore">
                        <span className="scoreLabel">{t.midTermLabel}</span>
                        <strong>{midTerm}</strong>
                      </div>

                      <div className="semesterScore">
                        <span className="scoreLabel">{t.finalLabel}</span>
                        <strong>{final}</strong>
                      </div>

                      <div className="semesterScore totalScore">
                        <span className="scoreLabel">{t.totalLabel}</span>
                        <strong>{total}</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              marginTop: "20px",
              paddingTop: "18px",
              borderTop: "1px solid rgba(255,255,255,.08)"
            }}>
              <span className="eyebrowSmall">{t.assessmentWeightingLabel}</span>
              <p style={{margin: "7px 0 0"}}>{t.assessmentWeightingText}</p>
            </div>
          </GlassCard>

          <div style={{marginTop: "28px"}}>
            <div style={{marginBottom: "18px"}}>
              <span className="sectionEyebrow">{t.academicRecordLabel}</span>
              <h2 style={{marginTop: "8px"}}>{t.originalTranscriptTitle}</h2>
              <p>{t.originalTranscriptDesc}</p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "18px"
            }}>
              <a
                href="/assets/academic/azeraksh-transcript-2%20(2).jpg"
                target="_blank"
                rel="noreferrer"
                style={{display: "block"}}
              >
                <GlassCard>
                  <img
                    src="/assets/academic/azeraksh-transcript-2%20(2).jpg"
                    alt="Azeraksh Tuition Transcript page 1"
                    style={{
                      width: "100%",
                      display: "block",
                      borderRadius: "12px"
                    }}
                  />
                  <div className="transcript-caption">
                    <div className="transcript-caption-header">
                      <span className="transcript-caption-icon">▣</span>
                      <span className="transcript-caption-label">{t.transcriptPageWord} 01</span>
                    </div>
                  <div className="transcript-caption-title">
                    {t.azereakshTranscriptTitle}
                  </div>
                  <div className="transcript-caption-description">
                    {t.transcriptCaptionDesc(1)}
                  </div>
                  </div>
                </GlassCard>
              </a>

              <a
                href="/assets/academic/azeraksh-transcript-2%20(1).jpg"
                target="_blank"
                rel="noreferrer"
                style={{display: "block"}}
              >
                <GlassCard>
                  <img
                    src="/assets/academic/azeraksh-transcript-2%20(1).jpg"
                    alt="Azeraksh Tuition Transcript page 2"
                    style={{
                      width: "100%",
                      display: "block",
                      borderRadius: "12px"
                    }}
                  />
                  <div className="transcript-caption">
                    <div className="transcript-caption-header">
                      <span className="transcript-caption-icon">▣</span>
                      <span className="transcript-caption-label">{t.transcriptPageWord} 02</span>
                    </div>
                  <div className="transcript-caption-title">
                    {t.azereakshTranscriptTitle}
                  </div>
                  <div className="transcript-caption-description">
                    {t.transcriptCaptionDesc(2)}
                  </div>
                  </div>
                </GlassCard>
              </a>
            </div>
          </div>

          <div className="timeline">
            {t.journey.map((j,i)=>(
              <div className="timelineItem" key={i}>
                <div className="timeLabel">{j[0]}</div>
                <div className="timelineRail">
                  <span/>
                  <i/>
                </div>
                <GlassCard className="timeCard">
                  <span className="eyebrowSmall">{t.academicJourneyLabel}</span>
                  <h3>{j[1]}</h3>
                  <p>{j[2]}</p>
                </GlassCard>
              </div>
            ))}
          </div>

          <div className="highlights">
            <div>
              <span className="sectionEyebrow">03 <i/> {t.highlightsLabel}</span>
              <h2>{t.highTitle}</h2>
            </div>

            <div className="highlightGrid">
              {t.high.map((x,i)=>(
                <GlassCard key={x}>
                  <Award/>
                  <b>0{i+1}</b>
                  <span>{x}</span>
                </GlassCard>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
function Skills({t}){return <><PageHero num="03" title={t.skillsTitle} sub={t.skillsSub} t={t}/><section className="section"><div className="container skillGrid">{t.skills.map(([n,l,d,I,p],i)=><GlassCard className={`skillCard s${i+1}`} key={n}><div className="skillHead"><div className="skillIcon"><I/></div><span>{l}</span></div><span className="cardIndex">0{i+1}</span><h3>{n}</h3><p>{d}</p><div className="skillViz"><div className="skillDots"><i/><i/><i/><i/><i/></div><div className="miniBar"><i style={{width:p}}/></div><b>{p}</b></div></GlassCard>)}</div></section></>}

function Certificates({t}){
  return (
    <>
      <PageHero
        num="04"
        title={t.certTitle}
        sub={t.certSub}
        t={t}
      />

      <section className="section">
        <div className="container certificateGrid">

          {t.certs.map(([n,o,d,url,img,pdf],i)=>(
            <GlassCard
              className="certificate"
              key={n}
            >

              <div className="certificateVisual">

                {img ? (
                  <img
                    src={img}
                    alt={`${n} certificate`}
                    className="certificateImage"
                  />
                ) : (
                  <Award/>
                )}

                {!img && (
                  <div className="seal">
                    {t.certifiedLabel}
                  </div>
                )}

                {!img && (
                  <span>
                    0{i+1}
                  </span>
                )}

              </div>

              <div className="certificateBody">

                <span className="eyebrowSmall">
                  {o}
                </span>

                <h3>{n}</h3>

                <p>{d}</p>

                <div className="certMeta">

                  <span>{t.academicLabel}</span>

                  <div className="certActions">

                    {pdf && (
                      <a
                        href={pdf}
                        target="_blank"
                        rel="noreferrer"
                        className="viewCert"
                      >
                        {t.viewCertificateLabel}
                        <ArrowUpRight/>
                      </a>
                    )}

                    {url ? (
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="verifyCert"
                      >
                        {t.verifyLabel}
                        <ArrowUpRight/>
                      </a>
                    ) : (
                      <CheckCircle2/>
                    )}

                  </div>

                </div>

              </div>

            </GlassCard>
          ))}

        </div>
      </section>
    </>
  );
}
function Projects({t}){
  const projectImages = [
    '/assets/projects/it-help-desk-dashboard.jpg.png',
    '/assets/projects/network-monitoring-dashboard.jpg.png',
    '/assets/projects/student-information-database.jpg.png'
  ];

  return (
    <>
      <PageHero
        num="05"
        title={t.projTitle}
        sub={t.projSub}
        t={t}
      />

      <section className="section">
        <div className="container projectShowcase">

          {t.projects.map(([n,tags,d,git,demo],i)=>(
            <GlassCard
              className={`projectCard project${i+1}`}
              key={n}
            >

              <div className="projectMeta">
                <span>0{i+1}</span>
                <span>{t.itProjectLabel}</span>
              </div>

              <div className="projectInfo">
                <span className="eyebrowSmall">
                  {tags}
                </span>

                <h2>{n}</h2>

                <p>{d}</p>

                <div className="projectLinks">
                  <a
                    href={git}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github/>
                    GitHub
                    <ArrowUpRight/>
                  </a>

                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Globe2/>
                    {t.liveDemoLabel}
                    <ArrowUpRight/>
                  </a>
                </div>
              </div>

              <div className="projectMock projectScreenshot">
                <img
                  src={projectImages[i]}
                  alt={`${n} dashboard screenshot`}
                />
              </div>

            </GlassCard>
          ))}

        </div>
      </section>
    </>
  );
}
function Achievements({t}){
  const achievements = t.achievementsList;

  return (
    <>
      <PageHero
        num="06"
        title={t.achTitle}
        sub={t.achSub}
        t={t}
      />

      <section className="section achievementsSection">
        <div className="container">

          <div className="achievementsIntro">
            <div>
              <span className="eyebrowSmall">{t.academicAchievementsLabel}</span>
              <h2>2025–2026</h2>
              <p>{t.learningBuildingImprovingLine}</p>
            </div>

            <Trophy className="achievementsTrophy"/>
          </div>

          <div className="achievementsGrid">

            {achievements.map((achievement) => (
              <GlassCard
                className="achievementCard"
                key={achievement.title}
              >

                <div className="achievementCardHeader">
                  <span className="achievementNumber">
                    {achievement.number}
                  </span>

                  <span className="achievementYear">
                    {achievement.year}
                  </span>

                  <CheckCircle2/>
                </div>

                <div className="achievementImageWrap">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="achievementImage"
                  />
                </div>

                <div className="achievementContent">

                  <h3>{achievement.title}</h3>

                  <p className="achievementDescription">
                    {achievement.description}
                  </p>

                  <div className="achievementDetails">
                    {achievement.details.map(([label, value]) => (
                      <div
                        className="achievementDetail"
                        key={label}
                      >
                        <span>{label}</span>
                        <strong>{value}</strong>
                      </div>
                    ))}
                  </div>

                </div>

              </GlassCard>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}
function Goals({t}){return <><PageHero num="07" title={t.goalsTitle} sub={t.goalsSub} t={t}/><section className="section darkSection"><div className="container goalList">{t.goals.map(g=><div className="goal" key={g[0]}><span>{g[0]}</span><div className="goalLine"><i/></div><div><span className="eyebrowSmall">{t.roadmapLabel}</span><h2>{g[1]}</h2><p>{g[2]}</p></div><Target/></div>)}</div></section></>}

function Resume({t}){return <><PageHero num="08" title={t.resumeTitle} sub={t.resumeSub} t={t}/><section className="section"><div className="container resumeGrid"><GlassCard className="resumeMain"><div className="resumeHeader"><div><span className="eyebrowSmall">{t.profileLabel}</span><h2>Sayed Hashmat Karimi</h2><p>{t.role}</p></div><div className="resumeCode">SK<br/><span>IT</span></div></div><div className="resumeRows"><div><GraduationCap/><span>{t.resumeEducationLabel}</span><b>{t.resumeEducationValue}</b></div><div><Code2/><span>{t.resumeTechFocusLabel}</span><b>{t.resumeTechFocusValue}</b></div><div><Award/><span>{t.resumeCredentialsLabel}</span><b>{t.resumeCredentialsValue}</b></div><div><Layers3/><span>{t.resumeProjectsLabel}</span><b>{t.resumeProjectsValue}</b></div></div><button className="btn btnPrimary resumeBtn"><Download/>{t.downloadResumeLabel}</button></GlassCard><GlassCard className="resumeSide"><span className="eyebrowSmall">{t.coreSignalsLabel}</span><div className="signal"><strong>90%</strong><span>{t.overallSchoolResultLabel}</span></div><div className="signal"><strong>03</strong><span>{t.featuredProjectsLabel}</span></div><div className="signal"><strong>04+</strong><span>{t.technicalCredentialsLabel}</span></div></GlassCard></div></section></>}

function Contact({t}){
  const [sent,setSent] = useState(false);
  const [sending,setSending] = useState(false);
  const [error,setError] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSent(false);
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const response = await fetch('https://formsubmit.co/ajax/sayedhashmatkarimi75@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          message: payload.message,
          _subject: 'New message from Karimi IT Portfolio',
          _template: 'table',
          _captcha: 'true'
        })
      });

      const result = await response.json();
      if (!response.ok || result.success === false) {
        throw new Error('Form submission failed');
      }

      setSent(true);
      form.reset();
    } catch (err) {
      console.error('Contact form error:', err);
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHero
        num="09"
        title={t.contactTitle}
        sub={t.contactText}
        t={t}
      />

      <section className="section">
        <div className="container contactGrid">

          <GlassCard className="contactIntro">
            <span className="eyebrowSmall">
              {t.openToOpportunitiesLabel}
            </span>

            <h2>{t.contactTitle}</h2>

            <p>{t.contactText}</p>

            <div className="contactLinks">

              <a href="mailto:sayedhashmatkarimi75@gmail.com">
                <Mail/>

                <div>
                  <span>{t.email}</span>
                  <b>sayedhashmatkarimi75@gmail.com</b>
                </div>

                <ArrowUpRight/>
              </a>

              <a
                href="https://github.com/hashmat-cyber"
                target="_blank"
                rel="noreferrer"
              >
                <Github/>

                <div>
                  <span>{t.github}</span>
                  <b>github.com/hashmat-cyber</b>
                </div>

                <ArrowUpRight/>
              </a>

              <a
                href="https://www.linkedin.com/in/sayed-hashmat-karimi-5463ab416"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin/>

                <div>
                  <span>{t.linkedin}</span>
                  <b>linkedin.com/in/sayed-hashmat-karimi-5463ab416</b>
                </div>

                <ArrowUpRight/>
              </a>

            </div>
          </GlassCard>


          <GlassCard className="contactForm">

            <div className="formTitle">
              <Terminal/>
              <span>{t.messageTerminalLabel}</span>
            </div>

            <form onSubmit={submit}>

              <label>
                {t.nameLabel}

                <input
                  required
                  placeholder={t.namePh}
                />
              </label>

              <label>
                {t.emailLabel}

                <input
                  required
                  type="email"
                  placeholder={t.emailPh}
                />
              </label>

              <label>
                {t.messageLabel}

                <textarea
                  required
                  placeholder={t.messagePh}
                />
              </label>

              <button
                className="btn btnPrimary"
                type="submit"
              >
                <Send/>
                {t.send}
              </button>

              {sent && (
                <div className="success">
                  <CheckCircle2/>
                  {lang === 'dari' ? 'پیام شما با موفقیت ارسال شد.' : 'Your message was sent successfully.'}
                </div>
              )}

              {error && (
                <div className="success">
                  {lang === 'dari' ? 'ارسال پیام موفق نشد. لطفاً دوباره تلاش کنید.' : 'The message could not be sent. Please try again.'}
                </div>
              )}

            </form>

          </GlassCard>

        </div>
      </section>
    </>
  );
}
function App(){
  const [lang, setLang] = useState(()=>{
    try {
      const saved = localStorage.getItem(LANG_KEY);
      return saved === 'dari' ? 'dari' : 'en';
    } catch(e) { return 'en'; }
  });
  const t = content[lang];
  return <Layout t={t} lang={lang} setLang={setLang}><Routes><Route path="/" element={<Home t={t}/>}/><Route path="/about" element={<About t={t}/>}/><Route path="/education" element={<Education t={t}/>}/><Route path="/skills" element={<Skills t={t}/>}/><Route path="/certificates" element={<Certificates t={t}/>}/><Route path="/projects" element={<Projects t={t}/>}/><Route path="/achievements" element={<Achievements t={t}/>}/><Route path="/goals" element={<Goals t={t}/>}/><Route path="/resume" element={<Resume t={t}/>}/><Route path="/contact" element={<Contact t={t}/>}/><Route path="*" element={<Home t={t}/>}/></Routes></Layout>
}
createRoot(document.getElementById('root')).render(<BrowserRouter><App/></BrowserRouter>);
