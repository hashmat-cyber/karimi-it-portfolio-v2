@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&family=Vazirmatn:wght@400;500;600;700;800&display=swap');
:root{--bg:#05070d;--bg2:#080b14;--panel:rgba(14,18,30,.72);--panel2:#0b101b;--line:rgba(255,255,255,.09);--line2:rgba(126,249,255,.18);--text:#f4f7fb;--muted:#9aa6b7;--soft:#c8d1dc;--purple:#a879ff;--blue:#55c8ff;--lime:#b6ff6a;--pink:#ff62bd;--shadow:0 24px 70px rgba(0,0,0,.34);--radius:24px}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:radial-gradient(circle at 15% 0%,rgba(168,121,255,.08),transparent 32%),radial-gradient(circle at 85% 10%,rgba(85,200,255,.07),transparent 28%),var(--bg);color:var(--text);font-family:Inter,system-ui,sans-serif;line-height:1.6}button,input,textarea{font:inherit}a{color:inherit;text-decoration:none}button{cursor:pointer}.container{width:min(1180px,calc(100% - 48px));margin:auto}.app{min-height:100vh;overflow:hidden}.siteHeader{position:sticky;top:0;z-index:50;height:82px;background:rgba(5,7,13,.72);backdrop-filter:blur(20px);border-bottom:1px solid var(--line)}.navWrap{height:100%;display:flex;align-items:center;justify-content:space-between;gap:22px}.brand{display:flex;align-items:center;gap:11px;min-width:235px}.brandMark{width:40px;height:40px;border:1px solid rgba(182,255,106,.4);border-radius:12px;display:grid;place-items:center;position:relative;background:linear-gradient(145deg,rgba(182,255,106,.13),rgba(85,200,255,.08));box-shadow:0 0 30px rgba(182,255,106,.08)}.brandMark span{font:700 12px 'Space Grotesk';letter-spacing:-.5px}.brandMark i{position:absolute;width:5px;height:5px;border-radius:50%;background:var(--lime);right:5px;top:5px;box-shadow:0 0 10px var(--lime)}.brand b{display:block;font:700 11px 'Space Grotesk';letter-spacing:.12em}.brand small{display:block;color:var(--muted);font-size:9px;margin-top:2px}.nav{display:flex;align-items:center;justify-content:center;gap:3px}.nav a{position:relative;color:#9ea9b8;font-size:11px;font-weight:600;padding:10px 11px;border-radius:12px;transition:.25s}.nav a:hover,.nav a.active{color:#fff;background:rgba(255,255,255,.055)}.nav a.active:after{content:"";position:absolute;left:50%;bottom:3px;width:18px;height:2px;border-radius:20px;background:linear-gradient(90deg,var(--purple),var(--blue));transform:translateX(-50%);box-shadow:0 0 10px rgba(85,200,255,.8)}.navActions{display:flex;align-items:center;gap:9px}.langBtn{display:flex;align-items:center;gap:7px;border:1px solid var(--line);background:rgba(255,255,255,.035);color:#dbe2ea;border-radius:12px;padding:9px 11px;font-size:10px}.mobile{display:none;border:1px solid var(--line);background:rgba(255,255,255,.04);color:#fff;border-radius:12px;width:40px;height:40px}.mobile svg{width:19px}.heroHero{}.homeHero{position:relative;min-height:calc(100vh - 82px);display:flex;align-items:center;isolation:isolate}.heroGrid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:70px 70px;mask-image:linear-gradient(to bottom,black,transparent 90%);z-index:-3}.heroGlow{position:absolute;border-radius:50%;filter:blur(50px);z-index:-2}.glowA{width:430px;height:430px;background:rgba(168,121,255,.12);left:-170px;top:120px}.glowB{width:420px;height:420px;background:rgba(85,200,255,.09);right:-160px;bottom:30px}.heroLayout{display:grid;grid-template-columns:1.08fr .92fr;gap:55px;align-items:center;padding:75px 0 80px}.heroCopy{max-width:690px}.heroKicker,.sectionEyebrow,.eyebrowSmall{font-size:9px;letter-spacing:.18em;color:#8996a8;font-weight:700}.heroKicker{display:flex;align-items:center;gap:9px;color:#aab5c4}.pulseDot{width:6px;height:6px;border-radius:50%;background:var(--lime);box-shadow:0 0 12px var(--lime)}.heroCopy h1{font:700 clamp(44px,6vw,78px)/.98 'Space Grotesk';letter-spacing:-.055em;margin:25px 0 15px}.heroCopy h1 span{display:block;color:#f7f9fc}.heroCopy h1 em{font-style:normal;background:linear-gradient(90deg,var(--lime),var(--blue),var(--purple));background-clip:text;color:transparent}.roleLine{display:flex;align-items:center;gap:11px;color:#d6dde7;font-size:11px;font-weight:700;letter-spacing:.06em}.roleLine i{width:28px;height:1px;background:linear-gradient(90deg,var(--lime),var(--blue))}.heroCopy h2{font:600 clamp(24px,3vw,36px)/1.12 'Space Grotesk';letter-spacing:-.035em;margin:26px 0 14px;max-width:680px}.heroCopy>p{color:var(--muted);font-size:14px;max-width:620px;line-height:1.85;margin:0}.heroActions{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin:28px 0 35px}.btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;border-radius:13px;border:1px solid var(--line);padding:12px 16px;font-size:11px;font-weight:700;transition:transform .2s,box-shadow .2s,border-color .2s,background .2s}.btn svg{width:15px}.btn:hover{transform:translateY(-2px)}.btn:active{transform:translateY(1px) scale(.985)}.btnPrimary{color:#08100a;border-color:transparent;background:linear-gradient(110deg,var(--lime),#d7ff9e 48%,var(--blue));box-shadow:0 13px 32px rgba(100,230,190,.12)}.btnGlass{background:rgba(255,255,255,.045);color:#f5f7fa;backdrop-filter:blur(10px)}.btnText{border-color:transparent;color:#aeb8c7;background:transparent}.heroStats{display:grid;grid-template-columns:repeat(4,1fr);max-width:670px;border-top:1px solid var(--line);padding-top:20px}.stat{padding-right:16px;border-right:1px solid var(--line)}.stat:not(:first-child){padding-left:16px}.stat:last-child{border:0}.stat strong{display:block;font:700 22px 'Space Grotesk';letter-spacing:-.03em}.stat span{display:block;color:#7e8999;font-size:8px;text-transform:uppercase;letter-spacing:.09em;margin-top:4px}.heroVisual{min-height:560px;position:relative;display:grid;place-items:center}.orbital{position:absolute;border:1px solid rgba(126,249,255,.12);border-radius:50%;transform:rotate(-18deg)}.orb1{width:510px;height:510px;border-left-color:rgba(182,255,106,.35);border-right-color:rgba(168,121,255,.25)}.orb2{width:380px;height:380px;border-top-color:rgba(85,200,255,.38);border-bottom-color:rgba(255,98,189,.2)}.visualFrame{position:relative;width:min(390px,78%);height:490px;border:1px solid rgba(255,255,255,.13);border-radius:30px;padding:13px;background:linear-gradient(145deg,rgba(255,255,255,.08),rgba(255,255,255,.02));box-shadow:var(--shadow),0 0 60px rgba(85,200,255,.06);backdrop-filter:blur(18px);overflow:hidden}.frameTop{height:30px;display:flex;justify-content:space-between;align-items:center;color:#758396;font-size:8px;letter-spacing:.13em}.frameTop span:first-child{display:flex;align-items:center;gap:5px}.frameTop svg{width:10px;color:var(--lime)}.profileFallback{height:350px;border-radius:22px;background:radial-gradient(circle at 50% 35%,rgba(168,121,255,.25),transparent 28%),linear-gradient(145deg,#111a2a,#070b12);position:relative;overflow:hidden;display:grid;place-items:center;border:1px solid rgba(255,255,255,.08)}.profileFallback:before{content:"";position:absolute;inset:20px;background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:26px 26px}.monogram{width:150px;height:150px;border-radius:50%;display:grid;place-items:center;font:700 42px 'Space Grotesk';color:#fff;background:radial-gradient(circle,rgba(182,255,106,.12),rgba(85,200,255,.05) 55%,transparent 56%);border:1px solid rgba(182,255,106,.35);box-shadow:0 0 70px rgba(85,200,255,.15),inset 0 0 30px rgba(168,121,255,.08);z-index:2}.scanline{position:absolute;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--blue),transparent);top:45%;box-shadow:0 0 14px var(--blue);animation:scan 5s linear infinite}@keyframes scan{0%{top:18%}50%{top:80%}100%{top:18%}}.profileCaption{display:grid;grid-template-columns:1.3fr .8fr;gap:12px;padding:16px 4px 3px}.profileCaption span{display:block;color:#718094;font-size:7px;letter-spacing:.13em}.profileCaption b{display:block;font-size:9px;margin-top:4px;white-space:nowrap}.techChip{position:absolute;display:flex;align-items:center;gap:7px;padding:9px 11px;border:1px solid var(--line2);background:rgba(8,12,20,.8);border-radius:12px;backdrop-filter:blur(12px);font-size:8px;letter-spacing:.12em;color:#cbd5e1;box-shadow:0 15px 35px rgba(0,0,0,.25)}.techChip svg{width:14px;color:var(--blue)}.chip1{top:85px;left:4%}.chip2{right:0;top:220px}.chip3{left:0;bottom:105px}.terminalMini{position:absolute;right:0;bottom:45px;padding:12px 14px;border:1px solid rgba(182,255,106,.18);background:rgba(7,11,17,.85);border-radius:12px;display:flex;flex-direction:column;gap:3px}.terminalMini span{font:8px monospace;color:#789083}.terminalMini b{font-size:8px;letter-spacing:.08em;color:var(--lime)}.marquee{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:rgba(255,255,255,.018)}.marqueeInner{min-height:65px;display:flex;align-items:center;justify-content:space-between;gap:25px;overflow:hidden;color:#a5b0bf;font-size:9px;font-weight:700;letter-spacing:.13em}.marqueeInner span{display:flex;align-items:center;gap:7px;white-space:nowrap}.marqueeInner svg{width:13px;color:var(--purple)}.marqueeInner i{font-style:normal;color:#3d4653;margin-left:18px}.section{padding:100px 0}.homeBento{background:linear-gradient(180deg,transparent,rgba(255,255,255,.012))}.bentoIntro{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:end;margin-bottom:35px}.sectionEyebrow{display:flex;align-items:center;gap:8px}.sectionEyebrow i{width:25px;height:1px;background:linear-gradient(90deg,var(--purple),var(--blue))}.bentoIntro h2,.pageHero h1{font:600 clamp(32px,4vw,55px)/1.05 'Space Grotesk';letter-spacing:-.045em;margin:18px 0 0}.bentoIntro>p,.pageHero p{color:var(--muted);font-size:13px;line-height:1.9;margin:0}.bentoGrid{display:grid;grid-template-columns:1.25fr 1fr 1fr;grid-template-rows:250px 210px;gap:15px}.glassCard{background:linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.018));border:1px solid var(--line);border-radius:var(--radius);box-shadow:0 18px 50px rgba(0,0,0,.16);backdrop-filter:blur(14px);position:relative;overflow:hidden}.glassCard:before{content:"";position:absolute;inset:0;background:linear-gradient(120deg,rgba(255,255,255,.04),transparent 30%,transparent 70%,rgba(85,200,255,.025));pointer-events:none}.bentoLarge{grid-row:span 2;padding:30px}.bentoLarge .bigIcon{width:58px;height:58px;border:1px solid rgba(85,200,255,.2);border-radius:16px;display:grid;place-items:center;color:var(--blue);background:rgba(85,200,255,.06);margin:20px 0}.bentoLarge .bigIcon svg{width:25px}.cardIndex{position:absolute;right:22px;top:21px;color:#4d596a;font-size:9px;letter-spacing:.15em}.bentoLarge h3{font:600 24px 'Space Grotesk';margin:8px 0}.bentoLarge p{font-size:11px;color:var(--muted);line-height:1.75;max-width:500px}.cardLink{display:inline-flex;align-items:center;gap:7px;margin-top:18px;font-size:10px;font-weight:700;color:#dce5ee}.cardLink svg{width:13px;color:var(--blue)}.bentoFocus{padding:26px}.focusRows{margin-top:17px}.focusRows>div{display:grid;grid-template-columns:28px 1fr 14px;align-items:center;gap:7px;padding:9px 0;border-top:1px solid var(--line);font-size:9px}.focusRows b{color:var(--purple);font-size:8px}.focusRows svg{width:12px;color:#779486}.bentoMetric{padding:25px;display:flex;flex-direction:column}.bentoMetric strong{font:700 47px 'Space Grotesk';margin-top:auto;background:linear-gradient(90deg,var(--lime),var(--blue));background-clip:text;color:transparent}.bentoMetric p{margin:0;color:var(--muted);font-size:9px}.metricLine{height:3px;background:#1a2230;border-radius:5px;margin-top:18px;overflow:hidden}.metricLine i{display:block;width:90%;height:100%;background:linear-gradient(90deg,var(--lime),var(--blue))}.bentoMetric.second strong{color:#fff;background:none}.nodeMap{height:3px;background:#1b2230;position:relative;margin-top:18px}.nodeMap i{position:absolute;width:6px;height:6px;border-radius:50%;background:var(--blue);top:-1px;box-shadow:0 0 9px rgba(85,200,255,.8)}.nodeMap i:nth-child(1){left:5%}.nodeMap i:nth-child(2){left:35%;background:var(--purple)}.nodeMap i:nth-child(3){left:63%;background:var(--lime)}.nodeMap i:nth-child(4){left:94%;background:var(--pink)}.pageHero{padding:110px 0 65px;border-bottom:1px solid var(--line);background:radial-gradient(circle at 75% 20%,rgba(168,121,255,.08),transparent 30%)}.pageHero h1{max-width:820px}.pageHero p{max-width:720px;margin-top:18px}.aboutBento{display:grid;grid-template-columns:.8fr 1.4fr;grid-template-rows:auto auto;gap:15px}.aboutIdentity{padding:32px}.aboutAvatar{width:130px;height:130px;border-radius:28px;border:1px solid rgba(182,255,106,.3);display:grid;place-items:center;background:radial-gradient(circle,rgba(182,255,106,.1),transparent 60%),#0a101a;margin-bottom:28px}.aboutAvatar span{font:700 34px 'Space Grotesk';letter-spacing:-.06em}.aboutIdentity h2,.aboutStory h2{font:600 27px 'Space Grotesk';margin:12px 0 5px}.aboutIdentity p{color:var(--muted);font-size:11px}.identityTags{display:flex;gap:7px;margin-top:22px;flex-wrap:wrap}.identityTags span{font-size:8px;padding:6px 9px;border:1px solid var(--line);border-radius:8px;color:#aeb8c6}.aboutStory{padding:32px}.aboutStory>p{color:var(--muted);font-size:12px;line-height:1.85;max-width:650px}.principles{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:28px}.principles div{padding:14px;border:1px solid var(--line);border-radius:14px;background:rgba(0,0,0,.1)}.principles svg{width:16px;color:var(--blue);margin-bottom:14px}.principles b,.principles span{display:block;font-size:10px}.principles span{color:#748194;font-size:8px;margin-top:3px}.aboutFocus{grid-column:1/-1;padding:28px}.focusItem{display:grid;grid-template-columns:40px 1fr 15px;gap:12px;align-items:center;padding:16px 0;border-top:1px solid var(--line)}.focusItem span{color:var(--purple);font-size:9px}.focusItem b{font-size:11px}.focusItem svg{width:13px;color:var(--lime)}.performance{display:grid;grid-template-columns:220px 1fr 170px;gap:28px;align-items:center;padding:25px 30px;margin-bottom:70px}.performance strong{display:block;font:700 38px 'Space Grotesk';background:linear-gradient(90deg,var(--lime),var(--blue));background-clip:text;color:transparent}.performance p,.performanceSide span{color:#738093;font-size:9px;margin:0}.progressTrack{height:7px;border-radius:10px;background:#171d28;overflow:hidden}.progressTrack i{display:block;width:90%;height:100%;background:linear-gradient(90deg,var(--purple),var(--blue),var(--lime));box-shadow:0 0 18px rgba(85,200,255,.3)}.performanceSide{border-left:1px solid var(--line);padding-left:25px}.performanceSide strong{font-size:28px;color:#fff;background:none}.timeline{max-width:900px;margin:auto}.timelineItem{display:grid;grid-template-columns:90px 28px 1fr;gap:18px;min-height:125px}.timeLabel{font:600 11px 'Space Grotesk';color:#8290a1;padding-top:27px;text-align:right}.timelineRail{position:relative;display:flex;justify-content:center}.timelineRail:before{content:"";position:absolute;top:0;bottom:-20px;width:1px;background:linear-gradient(var(--purple),rgba(255,255,255,.06))}.timelineRail span{position:relative;margin-top:28px;width:11px;height:11px;border-radius:50%;background:var(--blue);border:3px solid #0a0f18;box-shadow:0 0 0 1px rgba(85,200,255,.35),0 0 16px rgba(85,200,255,.4);z-index:2}.timeCard{padding:22px 25px;margin-bottom:18px}.timeCard h3{font:600 18px 'Space Grotesk';margin:6px 0}.timeCard p{font-size:10px;color:var(--muted);margin:0}.highlights{display:grid;grid-template-columns:.65fr 1.35fr;gap:50px;margin-top:90px}.highlights h2{font:600 28px 'Space Grotesk';margin:15px 0}.highlightGrid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.highlightGrid .glassCard{padding:18px;display:grid;grid-template-columns:20px 25px 1fr;gap:10px;align-items:center}.highlightGrid svg{width:15px;color:var(--lime)}.highlightGrid b{color:#6f7c8d;font-size:8px}.highlightGrid span{font-size:9px}.skillGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:15px}.skillCard{padding:25px;min-height:250px;transition:transform .25s,border-color .25s,box-shadow .25s}.skillCard:hover,.projectCard:hover,.certificate:hover{transform:translateY(-5px);border-color:rgba(85,200,255,.25);box-shadow:0 25px 65px rgba(0,0,0,.24),0 0 30px rgba(85,200,255,.04)}.skillHead{display:flex;justify-content:space-between;align-items:center}.skillIcon{width:43px;height:43px;border-radius:13px;background:rgba(85,200,255,.07);border:1px solid rgba(85,200,255,.16);display:grid;place-items:center;color:var(--blue)}.skillIcon svg{width:19px}.skillHead>span{font-size:8px;padding:6px 8px;border-radius:8px;background:rgba(182,255,106,.07);color:#a8d27d;border:1px solid rgba(182,255,106,.13)}.skillCard h3{font:600 21px 'Space Grotesk';margin:30px 0 6px}.skillCard p{font-size:10px;color:var(--muted);line-height:1.75;min-height:53px}.skillViz{margin-top:20px;display:grid;grid-template-columns:45px 1fr 35px;align-items:center;gap:10px}.skillDots{display:flex;gap:4px}.skillDots i{width:5px;height:5px;border-radius:50%;background:#263040}.skillDots i:nth-child(-n+4){background:var(--blue);box-shadow:0 0 5px rgba(85,200,255,.5)}.miniBar{height:3px;background:#1a2230;border-radius:5px;overflow:hidden}.miniBar i{display:block;height:100%;background:linear-gradient(90deg,var(--purple),var(--blue))}.skillViz>b{font-size:8px;color:#6e7c8e;text-align:right}.certificateGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:15px}.certificate{min-height:300px;transition:transform .25s}.certificateVisual{height:150px;background:radial-gradient(circle at 50% 45%,rgba(168,121,255,.15),transparent 45%),linear-gradient(145deg,#101727,#090d15);border-bottom:1px solid var(--line);display:grid;place-items:center;position:relative}.certificateVisual>svg{width:39px;color:var(--lime);filter:drop-shadow(0 0 12px rgba(182,255,106,.35))}.certificateVisual>span{position:absolute;top:14px;right:17px;font-size:9px;color:#5b6777}.seal{position:absolute;bottom:12px;left:15px;font-size:7px;letter-spacing:.14em;color:#6c7888}.certificateBody{padding:22px}.certificateBody h3{font:600 20px 'Space Grotesk';margin:8px 0}.certificateBody p{font-size:10px;color:var(--muted);margin:0;line-height:1.7}.certMeta{display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--line);margin-top:20px;padding-top:12px;color:#637083;font-size:7px;letter-spacing:.13em}.certMeta svg{width:13px;color:var(--lime)}.projectShowcase{display:grid;gap:8px}.projectCard{display:grid;grid-template-columns:42px 1.1fr .9fr;min-height:165px;transition:.25s}.project1{background:linear-gradient(120deg,rgba(182,255,106,.045),rgba(255,255,255,.018))}.projectMeta{padding:10px 8px;display:flex;flex-direction:column;justify-content:space-between;border-right:1px solid var(--line);font:600 9px 'Space Grotesk';color:#586577}.projectMeta span:last-child{writing-mode:vertical-rl;transform:rotate(180deg);letter-spacing:.14em}.projectInfo{padding:14px 20px}.projectInfo h2{font:600 clamp(18px,2.2vw,25px)/1.05 'Space Grotesk';letter-spacing:-.035em;margin:8px 0}.projectInfo p{color:var(--muted);font-size:8px;line-height:1.45;max-width:520px}.projectLinks{display:flex;gap:5px;flex-wrap:wrap;margin-top:9px}.projectLinks a{display:inline-flex;align-items:center;gap:5px;padding:6px 9px;border:1px solid var(--line);border-radius:10px;font-size:9px;font-weight:700}.projectLinks svg{width:13px}.projectLinks a svg:last-child{color:#697687}.projectMock{padding:8px;display:grid;place-items:center;background:radial-gradient(circle at center,rgba(85,200,255,.09),transparent 65%);border-left:1px solid var(--line)}.projectMock>div{width:100%;max-width:350px}.projectScreenshot img{display:block;width:100%;height:105px;object-fit:cover;border-radius:8px}.mockHeader{height:18px;border:1px solid var(--line);border-bottom:0;border-radius:10px 10px 0 0;display:flex;align-items:center;gap:5px;padding:0 10px}.mockHeader span{width:5px;height:5px;border-radius:50%;background:#445062}.mockBody{height:95px;border:1px solid var(--line);border-radius:0 0 10px 10px;display:grid;grid-template-columns:35px 1fr 60px;padding:13px;gap:10px;background:#070c14}.mockSide{border-radius:5px;background:repeating-linear-gradient(#192130 0 5px,transparent 5px 14px)}.mockChart{display:flex;align-items:flex-end;gap:6px;border-bottom:1px solid #1b2634;padding:20px 5px}.mockChart i{display:block;width:10px;background:linear-gradient(to top,var(--purple),var(--blue));height:35%}.mockChart i:nth-child(2){height:50%}.mockChart i:nth-child(3){height:40%}.mockChart i:nth-child(4){height:72%;background:linear-gradient(to top,var(--lime),var(--blue))}.mockChart i:nth-child(5){height:58%}.mockChart i:nth-child(6){height:84%;background:linear-gradient(to top,var(--lime),var(--blue))}.mockPanel{border:1px solid var(--line);border-radius:6px;padding:8px;display:flex;flex-direction:column;justify-content:center;gap:5px}.mockPanel b{font:700 24px 'Space Grotesk';color:var(--blue)}.mockPanel span,.mockPanel em{font-size:6px;color:#697688;font-style:normal}.mockPanel em{color:var(--lime)}.achievementBento{display:grid;grid-template-columns:320px 1fr;gap:15px}.achievementHero{min-height:500px;padding:35px;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;background:radial-gradient(circle at 50% 45%,rgba(168,121,255,.12),transparent 45%)}.achievementHero>svg{width:55px;height:55px;color:var(--lime);filter:drop-shadow(0 0 16px rgba(182,255,106,.3));margin-bottom:25px}.achievementHero strong{font:700 65px 'Space Grotesk';letter-spacing:-.06em}.achievementHero p{font-size:10px;color:var(--muted)}.orbitDots{height:2px;width:100%;background:#1b2432;position:relative;margin-top:50px}.orbitDots i{position:absolute;width:6px;height:6px;border-radius:50%;background:var(--blue);top:-2px}.orbitDots i:nth-child(1){left:15%}.orbitDots i:nth-child(2){left:53%;background:var(--purple)}.orbitDots i:nth-child(3){right:4%;background:var(--lime)}.achievementList{display:grid;grid-template-columns:1fr 1fr;gap:10px}.achievementList .glassCard{padding:20px;display:grid;grid-template-columns:30px 1fr 14px;gap:10px;align-items:center}.achievementList span{color:var(--purple);font-size:8px}.achievementList b{font-size:10px;line-height:1.5}.achievementList svg{width:13px;color:var(--lime)}.darkSection{background:linear-gradient(180deg,#070b13,#05070d)}.goalList{max-width:950px}.goal{display:grid;grid-template-columns:50px 45px 1fr 20px;gap:18px;padding:42px 0;border-top:1px solid var(--line);align-items:start}.goal:first-child{border-top:0}.goal>span{font:600 11px 'Space Grotesk';color:var(--blue)}.goalLine{height:100%;position:relative}.goalLine:before{content:"";position:absolute;top:5px;bottom:-47px;left:50%;width:1px;background:linear-gradient(var(--blue),transparent)}.goal:last-child .goalLine:before{display:none}.goalLine i{position:absolute;top:2px;left:50%;width:9px;height:9px;border-radius:50%;background:var(--lime);box-shadow:0 0 14px rgba(182,255,106,.45);transform:translateX(-50%)}.goal h2{font:600 30px 'Space Grotesk';margin:7px 0}.goal p{color:var(--muted);font-size:11px;line-height:1.8;max-width:700px}.goal>svg{width:16px;color:#4e5a6c}.resumeGrid{display:grid;grid-template-columns:1fr 300px;gap:15px}.resumeMain{padding:35px}.resumeHeader{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:30px;border-bottom:1px solid var(--line)}.resumeHeader h2{font:600 30px 'Space Grotesk';margin:8px 0 3px}.resumeHeader p{font-size:10px;color:var(--muted);margin:0}.resumeCode{width:68px;height:68px;border:1px solid rgba(85,200,255,.22);border-radius:18px;display:grid;place-items:center;font:700 16px 'Space Grotesk';color:var(--blue);background:rgba(85,200,255,.05);line-height:1.05}.resumeCode span{font-size:8px;color:var(--lime)}.resumeRows{display:grid;grid-template-columns:1fr 1fr;margin:20px 0}.resumeRows>div{padding:18px 0;display:grid;grid-template-columns:18px 1fr;gap:3px 10px;border-bottom:1px solid var(--line)}.resumeRows svg{grid-row:span 2;width:15px;color:var(--purple)}.resumeRows span{font-size:8px;color:#6f7c8d;text-transform:uppercase;letter-spacing:.1em}.resumeRows b{font-size:10px}.resumeBtn{margin-top:10px}.resumeSide{padding:28px}.signal{padding:22px 0;border-bottom:1px solid var(--line)}.signal:last-child{border-bottom:0}.signal strong{font:700 38px 'Space Grotesk';display:block;background:linear-gradient(90deg,var(--lime),var(--blue));background-clip:text;color:transparent}.signal span{font-size:8px;color:#6e7a8b;text-transform:uppercase;letter-spacing:.1em}.contactGrid{display:grid;grid-template-columns:.9fr 1.1fr;gap:15px}.contactIntro,.contactForm{padding:35px}.contactIntro h2{font:600 31px 'Space Grotesk';margin:15px 0}.contactIntro>p{font-size:11px;color:var(--muted);line-height:1.8}.contactLinks{margin-top:30px}.contactLinks a{display:grid;grid-template-columns:24px 1fr 14px;align-items:center;gap:12px;padding:17px 0;border-top:1px solid var(--line)}.contactLinks a>svg:first-child{width:16px;color:var(--blue)}.contactLinks a>svg:last-child{width:13px;color:#5c697a}.contactLinks span,.contactLinks b{display:block}.contactLinks span{font-size:7px;color:#697587;letter-spacing:.12em;text-transform:uppercase}.contactLinks b{font-size:9px;margin-top:3px;word-break:break-word}.formTitle{display:flex;align-items:center;gap:8px;font-size:9px;letter-spacing:.15em;color:#8793a4;padding-bottom:20px;border-bottom:1px solid var(--line)}.formTitle svg{width:14px;color:var(--lime)}form{padding-top:22px}label{display:block;color:#9ba7b7;font-size:8px;text-transform:uppercase;letter-spacing:.09em;margin-bottom:14px}input,textarea{width:100%;margin-top:7px;border:1px solid var(--line);background:#070b13;color:#fff;border-radius:11px;padding:12px 13px;font-size:10px;outline:0;transition:.2s}input{height:43px}textarea{min-height:140px;resize:vertical}input:focus,textarea:focus{border-color:rgba(85,200,255,.4);box-shadow:0 0 0 3px rgba(85,200,255,.05)}.success{display:flex;gap:7px;align-items:center;color:#a8d27d;font-size:8px;margin-top:12px}.success svg{width:13px}.footer{border-top:1px solid var(--line);padding:45px 0 25px;background:#04060b}.footerGrid{display:grid;grid-template-columns:1fr 1.5fr auto;align-items:start;gap:35px}.footerName{font:600 15px 'Space Grotesk'}.footerGrid p{font-size:9px;color:#697688;margin:5px 0}.footerLinks{display:flex;flex-wrap:wrap;gap:12px 18px}.footerLinks a{font-size:9px;color:#7e8a9a}.footerLinks a:hover{color:#fff}.footerSocial{display:flex;gap:7px}.footerSocial a{width:32px;height:32px;display:grid;place-items:center;border:1px solid var(--line);border-radius:10px;color:#8894a4}.footerSocial svg{width:14px}.footerBottom{display:flex;justify-content:space-between;border-top:1px solid var(--line);margin-top:35px;padding-top:20px;color:#4f5a69;font-size:8px}.rtl{font-family:Vazirmatn,Inter,sans-serif}.rtl .brand b,.rtl .brand small,.rtl .nav,.rtl .langBtn,.rtl .heroCopy,.rtl .pageHero,.rtl .section,.rtl .footer{font-family:Vazirmatn,Inter,sans-serif}.rtl .brand{text-align:right}.rtl .heroActions,.rtl .heroStats,.rtl .marqueeInner{direction:rtl}.rtl .stat{text-align:right;border-right:1px solid var(--line);border-left:0;padding-right:16px;padding-left:0}.rtl .stat:first-child{border-right:0}.rtl .stat:last-child{border-right:1px solid var(--line)}.rtl .techChip{direction:rtl}.rtl .projectMeta{border-right:0;border-left:1px solid var(--line)}.rtl .projectMeta span:last-child{transform:rotate(0)}.rtl .projectMock{border-left:0;border-right:1px solid var(--line)}.rtl .performanceSide{border-left:0;border-right:1px solid var(--line);padding-left:0;padding-right:25px}.rtl .timeLabel{text-align:left}.rtl .focusItem,.rtl .achievementList .glassCard,.rtl .contactLinks a{direction:rtl}.rtl .footerBottom{direction:rtl}.rtl .goal{direction:rtl}.rtl .goalLine:before{left:50%}@media(max-width:1080px){.nav{display:none}.nav.show{display:flex;position:absolute;top:75px;left:24px;right:24px;flex-wrap:wrap;justify-content:flex-start;padding:10px;background:rgba(8,11,19,.96);border:1px solid var(--line);border-radius:16px;box-shadow:var(--shadow)}.mobile{display:grid;place-items:center}.heroLayout{grid-template-columns:1fr}.heroVisual{min-height:520px}.heroCopy{max-width:800px}.skillGrid{grid-template-columns:1fr 1fr}.certificateGrid{grid-template-columns:1fr 1fr}.projectCard{grid-template-columns:55px 1fr}.projectMock{display:none}.achievementBento{grid-template-columns:280px 1fr}.resumeGrid{grid-template-columns:1fr 250px}}
@media(max-width:720px){.container{width:min(100% - 28px,1180px)}.siteHeader{height:68px}.brand{min-width:0}.brand b{font-size:8px}.brand small{font-size:7px}.langBtn span{display:none}.homeHero{min-height:auto}.heroLayout{padding:65px 0 60px;gap:35px}.heroCopy h1{font-size:47px}.heroCopy h2{font-size:25px}.heroCopy>p{font-size:12px}.heroStats{grid-template-columns:1fr 1fr;gap:16px 0}.stat{border-right:0!important;border-bottom:1px solid var(--line);padding:0 0 13px!important}.stat:nth-child(even){padding-left:15px!important;border-left:1px solid var(--line)}.heroVisual{min-height:430px}.visualFrame{height:390px;width:78%}.profileFallback{height:270px}.orb1{width:390px;height:390px}.orb2{width:300px;height:300px}.techChip{padding:7px 9px;font-size:7px}.chip1{left:0;top:45px}.chip2{right:0;top:170px}.chip3{left:0;bottom:70px}.terminalMini{right:0;bottom:20px}.marqueeInner{justify-content:flex-start;overflow:auto;padding:0 2px}.marqueeInner span{flex-shrink:0}.bentoIntro{grid-template-columns:1fr;gap:18px}.bentoGrid{grid-template-columns:1fr;grid-template-rows:auto}.bentoLarge{grid-row:auto;min-height:290px}.bentoFocus{min-height:280px}.bentoMetric{min-height:190px}.section{padding:70px 0}.pageHero{padding:75px 0 45px}.pageHero h1{font-size:35px}.pageHero p{font-size:11px}.aboutBento{grid-template-columns:1fr}.aboutFocus{grid-column:auto}.principles{grid-template-columns:1fr}.performance{grid-template-columns:1fr;gap:15px}.performanceSide{border:0!important;padding:0!important}.timelineItem{grid-template-columns:55px 20px 1fr;gap:9px}.timeLabel{font-size:9px}.timeCard{padding:18px}.highlights{grid-template-columns:1fr;gap:25px}.highlightGrid{grid-template-columns:1fr}.skillGrid,.certificateGrid{grid-template-columns:1fr}.skillCard{min-height:235px}.projectCard{grid-template-columns:38px 1fr}.projectInfo{padding:28px 22px}.projectMeta{padding:24px 11px}.achievementBento{grid-template-columns:1fr}.achievementHero{min-height:300px}.achievementList{grid-template-columns:1fr}.goal{grid-template-columns:35px 24px 1fr 15px;gap:10px}.goal h2{font-size:23px}.goal p{font-size:10px}.resumeGrid{grid-template-columns:1fr}.resumeRows{grid-template-columns:1fr}.contactGrid{grid-template-columns:1fr}.footerGrid{grid-template-columns:1fr}.footerBottom{flex-direction:column;gap:7px}.rtl .stat:nth-child(even){padding-left:0!important;padding-right:15px!important;border-left:0;border-right:1px solid var(--line)}.rtl .stat:first-child,.rtl .stat:nth-child(3){border-right:0!important}.rtl .timeLabel{text-align:right}}
@media(prefers-reduced-motion:reduce){*,*:before,*:after{scroll-behavior:auto!important;animation:none!important;transition:none!important}}

.profileFallback img{position:relative;z-index:1;width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit}.profileFallback .scanline{z-index:3}

.aboutAvatar{overflow:hidden;position:relative}.aboutAvatar img{width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit}

.verifyCert{display:inline-flex;align-items:center;gap:5px;color:inherit;text-decoration:none;font-size:11px;font-weight:700;letter-spacing:.08em}.verifyCert svg{width:14px;height:14px}.verifyCert:hover{text-decoration:underline}

/* =========================
   Certificate Images & Actions
   ========================= */

.certificateVisual{
  height:150px;
  background:
    radial-gradient(
      circle at 50% 45%,
      rgba(168,121,255,.15),
      transparent 45%
    ),
    linear-gradient(145deg,#101727,#090d15);
  border-bottom:1px solid var(--line);
  display:grid;
  place-items:center;
  position:relative;
  overflow:hidden;
}

.certificateImage{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:contain;
  padding:10px;
  display:block;
  z-index:1;
}

.certificateVisual>svg{
  width:39px;
  color:var(--lime);
  filter:drop-shadow(0 0 12px rgba(182,255,106,.35));
  position:relative;
  z-index:2;
}

.certificateVisual>span{
  position:absolute;
  top:14px;
  right:17px;
  font-size:9px;
  color:#5b6777;
  z-index:3;
  background:rgba(5,7,13,.72);
  padding:4px 6px;
  border-radius:6px;
}

.seal{
  position:absolute;
  bottom:12px;
  left:15px;
  font-size:7px;
  letter-spacing:.14em;
  color:#6c7888;
  z-index:3;
}

.certificateBody{
  padding:22px;
}

.certificateBody h3{
  font:600 20px 'Space Grotesk';
  margin:8px 0;
}

.certificateBody p{
  font-size:10px;
  color:var(--muted);
  margin:0;
  line-height:1.7;
}

.certMeta{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:10px;
  border-top:1px solid var(--line);
  margin-top:20px;
  padding-top:12px;
  color:#637083;
  font-size:7px;
  letter-spacing:.13em;
}

.certMeta>svg{
  width:13px;
  color:var(--lime);
}

.certActions{
  display:flex;
  align-items:center;
  justify-content:flex-end;
  gap:7px;
}

.viewCert,
.verifyCert{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:5px;
  text-decoration:none;
  white-space:nowrap;
  transition:.2s ease;
}

.viewCert{
  color:#aeb9c8;
  font-size:8px;
  font-weight:700;
  letter-spacing:.06em;
  padding:6px 8px;
  border:1px solid var(--line);
  border-radius:7px;
  background:rgba(255,255,255,.025);
}

.viewCert svg{
  width:12px;
  height:12px;
}

.viewCert:hover{
  color:#fff;
  border-color:rgba(85,200,255,.3);
  background:rgba(85,200,255,.06);
  transform:translateY(-1px);
}

.verifyCert{
  color:#07100a;
  font-size:8px;
  font-weight:800;
  letter-spacing:.08em;
  padding:7px 10px;
  border:1px solid rgba(182,255,106,.35);
  border-radius:8px;
  background:linear-gradient(
    110deg,
    var(--lime),
    #d7ff9e 55%,
    var(--blue)
  );
  box-shadow:
    0 5px 18px rgba(182,255,106,.10),
    0 0 12px rgba(85,200,255,.06);
}

.verifyCert svg{
  width:13px;
  height:13px;
}

.verifyCert:hover{
  transform:translateY(-2px);
  box-shadow:
    0 8px 24px rgba(182,255,106,.16),
    0 0 18px rgba(85,200,255,.10);
}

.verifyCert:active{
  transform:translateY(0);
}

@media(max-width:720px){
  .certActions{
    flex-wrap:wrap;
    justify-content:flex-end;
  }

  .viewCert,
  .verifyCert{
    font-size:7px;
  }

  .certificateImage{
    padding:8px;
  }
}

/* Certificate images and actions */
.certificateVisual{
  overflow:hidden;
}

.certificateImage{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:contain;
  padding:10px;
  display:block;
  z-index:1;
}

.certificateVisual > svg{
  position:relative;
  z-index:2;
}

.certificateVisual > span,
.certificateVisual .seal{
  z-index:3;
}

.certActions{
  display:flex;
  align-items:center;
  justify-content:flex-end;
  gap:7px;
}

.viewCert,
.verifyCert{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:5px;
  text-decoration:none;
  white-space:nowrap;
  transition:.2s ease;
}

.viewCert{
  color:#aeb9c8;
  font-size:8px;
  font-weight:700;
  letter-spacing:.06em;
  padding:6px 8px;
  border:1px solid var(--line);
  border-radius:7px;
  background:rgba(255,255,255,.025);
}

.viewCert svg{
  width:12px;
  height:12px;
}

.viewCert:hover{
  color:#fff;
  border-color:rgba(85,200,255,.3);
  background:rgba(85,200,255,.06);
}

.verifyCert{
  display:inline-flex;
  align-items:center;
  gap:5px;
  color:#07100a;
  text-decoration:none;
  font-size:8px;
  font-weight:800;
  letter-spacing:.08em;
  padding:7px 10px;
  border:1px solid rgba(182,255,106,.35);
  border-radius:8px;
  background:linear-gradient(110deg,var(--lime),#d7ff9e 55%,var(--blue));
}

.verifyCert svg{
  width:13px;
  height:13px;
}

.verifyCert:hover{
  transform:translateY(-2px);
}

@media(max-width:720px){
  .certActions{
    flex-wrap:wrap;
  }

  .certificateImage{
    padding:8px;
  }
}

/* Achievements Cards */

.achievementList {
  display: grid;
  gap: 24px;
}

.achievementCard {
  overflow: hidden;
}

.achievementCardTop {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 22px 0;
}

.achievementNumber {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .12em;
  opacity: .55;
}

.achievementYear {
  margin-left: auto;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .08em;
}

.achievementCardTop svg {
  width: 18px;
  height: 18px;
}

.achievementImageWrap {
  margin: 20px 22px 0;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
}

.achievementImage {
  display: block;
  width: 100%;
  height: auto;
  max-height: 520px;
  object-fit: contain;
}

.achievementContent {
  padding: 22px;
}

.achievementContent h3 {
  margin: 0;
  font-size: 22px;
  line-height: 1.3;
}

.achievementDescription {
  margin: 12px 0 22px;
  line-height: 1.7;
  opacity: .75;
}

.achievementDetails {
  display: grid;
  gap: 10px;
}

.achievementDetail {
  display: grid;
  grid-template-columns: minmax(110px, .7fr) 1.3fr;
  gap: 16px;
  padding-top: 10px;
  border-top: 1px solid rgba(255,255,255,.08);
}

.achievementDetail span {
  font-size: 12px;
  opacity: .55;
  text-transform: uppercase;
  letter-spacing: .06em;
}

.achievementDetail strong {
  font-size: 13px;
  line-height: 1.5;
}

@media (max-width: 700px) {

  .achievementCardTop {
    padding-left: 16px;
    padding-right: 16px;
  }

  .achievementImageWrap {
    margin-left: 16px;
    margin-right: 16px;
  }

  .achievementContent {
    padding: 16px;
  }

  .achievementContent h3 {
    font-size: 19px;
  }

  .achievementDetail {
    grid-template-columns: 1fr;
    gap: 4px;
  }

}
/* A4 Achievement Cards */
.achievementList {
  display: grid;
  gap: 24px;
}

.achievementCard {
  overflow: hidden;
}

.achievementImageWrap {
  margin: 20px 22px 0;
  width: calc(100% - 44px);
  aspect-ratio: 210 / 297;
  max-height: 620px;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
  display: flex;
  align-items: center;
  justify-content: center;
}

.achievementImage {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.achievementContent {
  padding: 22px;
}

.achievementContent h3 {
  margin: 0;
  font-size: 22px;
  line-height: 1.3;
}

.achievementDescription {
  margin: 12px 0 22px;
  line-height: 1.7;
  opacity: .75;
}

.achievementDetails {
  display: grid;
  gap: 10px;
}

.achievementDetail {
  display: grid;
  grid-template-columns: minmax(110px, .7fr) 1.3fr;
  gap: 16px;
  padding-top: 10px;
  border-top: 1px solid rgba(255,255,255,.08);
}

.achievementDetail span {
  font-size: 12px;
  opacity: .55;
  text-transform: uppercase;
  letter-spacing: .06em;
}

.achievementDetail strong {
  font-size: 13px;
  line-height: 1.5;
}

@media (max-width: 700px) {
  .achievementImageWrap {
    margin-left: 16px;
    margin-right: 16px;
    width: calc(100% - 32px);
    max-height: 520px;
  }

  .achievementContent {
    padding: 16px;
  }

  .achievementContent h3 {
    font-size: 19px;
  }

  .achievementDetail {
    grid-template-columns: 1fr;
    gap: 4px;
  }
}

/* ===== FINAL ACHIEVEMENTS DESIGN ===== */

.achievementsSection {
  padding-top: 40px;
}

.achievementsIntro {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
  padding: 28px;
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 22px;
  background: rgba(255,255,255,.03);
}

.achievementsIntro h2 {
  margin: 8px 0 4px;
  font-size: clamp(32px, 5vw, 54px);
  line-height: 1;
}

.achievementsIntro p {
  margin: 0;
  opacity: .65;
}

.achievementsTrophy {
  width: 42px;
  height: 42px;
  opacity: .75;
}

.achievementsGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  align-items: start;
}

.achievementCard {
  overflow: hidden;
  height: fit-content;
}

.achievementCardHeader {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 20px;
  border-bottom: 1px solid rgba(255,255,255,.07);
}

.achievementNumber {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .12em;
  opacity: .5;
}

.achievementYear {
  margin-left: auto;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .08em;
  opacity: .7;
}

.achievementCardHeader svg {
  width: 17px;
  height: 17px;
  opacity: .7;
}

.achievementImageWrap {
  margin: 18px;
  width: calc(100% - 36px);
  aspect-ratio: 210 / 297;
  max-height: 560px;
  border-radius: 14px;
  overflow: hidden;
  background: rgba(255,255,255,.035);
  border: 1px solid rgba(255,255,255,.08);
  display: flex;
  align-items: center;
  justify-content: center;
}

.achievementImage {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}

.achievementContent {
  padding: 0 20px 22px;
}

.achievementContent h3 {
  margin: 0 0 10px;
  font-size: 20px;
  line-height: 1.35;
}

.achievementDescription {
  margin: 0 0 20px;
  font-size: 14px;
  line-height: 1.65;
  opacity: .68;
}

.achievementDetails {
  display: grid;
  gap: 0;
  border-top: 1px solid rgba(255,255,255,.07);
}

.achievementDetail {
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr);
  gap: 14px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255,255,255,.07);
}

.achievementDetail span {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  opacity: .45;
}

.achievementDetail strong {
  font-size: 12px;
  line-height: 1.5;
  font-weight: 600;
}

@media (max-width: 900px) {
  .achievementsGrid {
    grid-template-columns: 1fr;
  }

  .achievementImageWrap {
    max-height: 620px;
  }
}

@media (max-width: 600px) {
  .achievementsIntro {
    padding: 20px;
  }

  .achievementImageWrap {
    margin: 14px;
    width: calc(100% - 28px);
  }

  .achievementContent {
    padding: 0 16px 18px;
  }

  .achievementDetail {
    grid-template-columns: 105px minmax(0, 1fr);
    gap: 10px;
  }
}


/* ===== FINAL PROJECT CARDS DESIGN ===== */

.projectShowcase{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:15px;
}

.projectCard{
  display:flex;
  flex-direction:column;
  min-height:0;
  overflow:hidden;
  position:relative;
  transition:transform .25s,border-color .25s,box-shadow .25s;
}

.projectMock{
  order:1;
  width:100%;
  height:170px;
  min-height:170px;
  padding:0;
  border-left:0;
  border-right:0;
  border-bottom:1px solid var(--line);
  background:
    radial-gradient(circle at 50% 45%,rgba(85,200,255,.12),transparent 55%),
    linear-gradient(145deg,#101727,#090d15);
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
  position:relative;
}

.projectScreenshot img{
  display:block;
  width:100%;
  height:100%;
  object-fit:contain;
  padding:10px;
  border-radius:0;
}

.projectMeta{
  order:2;
  padding:14px 20px 0;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  gap:10px;
  border:0;
  font:600 8px 'Space Grotesk';
  color:#586577;
}

.projectMeta span:last-child{
  writing-mode:horizontal-tb;
  transform:none;
  letter-spacing:.14em;
}

.projectInfo{
  order:3;
  padding:4px 20px 22px;
}

.projectInfo h2{
  font:600 20px/1.15 'Space Grotesk';
  letter-spacing:-.035em;
  margin:8px 0;
}

.projectInfo p{
  color:var(--muted);
  font-size:10px;
  line-height:1.7;
  max-width:none;
  margin:0;
}

.projectLinks{
  display:flex;
  align-items:center;
  justify-content:flex-end;
  gap:7px;
  margin-top:18px;
  padding-top:12px;
  border-top:1px solid var(--line);
}

.projectLinks a{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:5px;
  padding:6px 8px;
  border-radius:7px;
  font-size:8px;
  white-space:nowrap;
}

.projectLinks svg{
  width:12px;
  height:12px;
}

@media(max-width:1080px){
  .projectShowcase{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }

  .projectCard{
    display:flex;
    grid-template-columns:none;
  }

  .projectMock{
    display:flex;
    height:165px;
    min-height:165px;
  }

  .projectMeta{
    padding:14px 18px 0;
  }

  .projectInfo{
    padding:4px 18px 20px;
  }
}

@media(max-width:720px){
  .projectShowcase{
    grid-template-columns:1fr;
  }

  .projectCard{
    display:flex;
    grid-template-columns:none;
  }

  .projectMock{
    display:flex;
    height:170px;
    min-height:170px;
  }

  .projectMeta{
    padding:14px 18px 0;
  }

  .projectInfo{
    padding:4px 18px 20px;
  }
}

.rtl .projectMeta{
  border:0;
}

.rtl .projectMock{
  border-left:0;
  border-right:0;
}

/* ===== FINAL ACHIEVEMENT CARDS DESIGN ===== */

.achievementsGrid{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:15px;
}

.achievementCard{
  display:flex;
  flex-direction:column;
  min-height:0;
  overflow:hidden;
  position:relative;
  transition:transform .25s,border-color .25s,box-shadow .25s;
}

/* Image area — certificate style */
.achievementImageWrap{
  order:1;
  width:100%;
  height:190px;
  min-height:190px;
  padding:0;
  background:
    radial-gradient(circle at 50% 45%,rgba(168,121,255,.15),transparent 50%),
    linear-gradient(145deg,#101727,#090d15);
  border-bottom:1px solid var(--line);
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
  position:relative;
}

.achievementImage{
  display:block;
  width:100%;
  height:100%;
  object-fit:contain;
  padding:10px;
}

/* Number / year header */
.achievementCardHeader{
  order:2;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
  padding:14px 20px 0;
  border:0;
  color:#637083;
}

.achievementNumber{
  font:600 9px 'Space Grotesk';
  letter-spacing:.14em;
}

.achievementYear{
  margin-left:auto;
  font:600 8px 'Space Grotesk';
  letter-spacing:.13em;
  color:#697687;
}

.achievementCardHeader svg{
  width:15px;
  height:15px;
  color:var(--lime);
}

/* Content */
.achievementContent{
  order:3;
  padding:4px 20px 22px;
}

.achievementContent h3{
  font:600 20px/1.15 'Space Grotesk';
  letter-spacing:-.035em;
  margin:8px 0;
}

.achievementDescription{
  color:var(--muted);
  font-size:10px;
  line-height:1.7;
  margin:0;
}

/* Details */
.achievementDetails{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:8px;
  margin-top:18px;
  padding-top:14px;
  border-top:1px solid var(--line);
}

.achievementDetail{
  display:flex;
  flex-direction:column;
  gap:4px;
  min-width:0;
}

.achievementDetail span{
  color:#637083;
  font-size:7px;
  letter-spacing:.11em;
  text-transform:uppercase;
}

.achievementDetail strong{
  color:#aeb9c8;
  font-size:9px;
  line-height:1.4;
  font-weight:600;
}

/* Tablet */
@media(max-width:1080px){
  .achievementsGrid{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }

  .achievementImageWrap{
    height:180px;
    min-height:180px;
  }

  .achievementCardHeader{
    padding:14px 18px 0;
  }

  .achievementContent{
    padding:4px 18px 20px;
  }
}

/* Mobile */
@media(max-width:720px){
  .achievementsGrid{
    grid-template-columns:1fr;
  }

  .achievementImageWrap{
    height:190px;
    min-height:190px;
  }

  .achievementCardHeader{
    padding:14px 18px 0;
  }

  .achievementContent{
    padding:4px 18px 20px;
  }

  .achievementDetails{
    grid-template-columns:1fr;
  }
}

/* =========================================
   ACADEMIC PERFORMANCE - SEMESTER CARDS
   ========================================= */

.semesterGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-top: 24px;
}

.semesterCard {
  position: relative;
  padding: 22px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.035);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: transform 0.25s ease, border-color 0.25s ease,
    background 0.25s ease, box-shadow 0.25s ease;
}

.semesterCard:hover {
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.20);
  background: rgba(255, 255, 255, 0.055);
  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.18);
}

.semesterCardHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.semesterNumber {
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  opacity: 0.72;
}

.semesterTotal {
  font-size: 1.55rem;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -0.04em;
}

.semesterDivider {
  height: 1px;
  margin: 18px 0;
  background: rgba(255, 255, 255, 0.09);
}

.semesterScores {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.semesterScore {
  min-width: 0;
  padding: 14px 10px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.025);
}

.scoreLabel {
  display: block;
  margin-bottom: 7px;
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.10em;
  opacity: 0.52;
}

.semesterScore strong {
  display: block;
  font-size: 1.05rem;
  line-height: 1;
  font-weight: 850;
}

.totalScore {
  border-color: rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.065);
}

.totalScore strong {
  font-size: 1.15rem;
}

.semesterCard:last-child:nth-child(odd) {
  grid-column: 1 / -1;
  max-width: calc(50% - 9px);
  width: 100%;
  justify-self: center;
}

@media (max-width: 700px) {
  .semesterGrid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .semesterCard:last-child:nth-child(odd) {
    grid-column: auto;
    max-width: none;
  }

  .semesterCard {
    padding: 18px;
    border-radius: 17px;
  }

  .semesterTotal {
    font-size: 1.35rem;
  }

  .semesterScore {
    padding: 12px 7px;
  }

  .semesterScore strong {
    font-size: 0.98rem;
  }
}
/* =========================================================
   ACADEMIC PERFORMANCE — PREMIUM TRANSCRIPT DESIGN
   ========================================================= */

.semesterGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-top: 24px;
}

.semesterCard {
  position: relative;
  overflow: hidden;
  padding: 22px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 20px;
  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.065),
      rgba(255, 255, 255, 0.025)
    );
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;
}

.semesterCard::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.55),
    transparent
  );
  opacity: 0.65;
}

.semesterCard:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.20);
  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.085),
      rgba(255, 255, 255, 0.035)
    );
  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

.semesterCardHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.semesterNumber {
  font-size: 0.70rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  opacity: 0.60;
}

.semesterTotal {
  font-size: 1.75rem;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -0.05em;
}

.semesterDivider {
  height: 1px;
  margin: 18px 0;
  background: rgba(255, 255, 255, 0.09);
}

.semesterScores {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.semesterScore {
  min-width: 0;
  padding: 14px 8px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  background: rgba(0, 0, 0, 0.10);
}

.scoreLabel {
  display: block;
  margin-bottom: 8px;
  font-size: 0.57rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  line-height: 1.2;
  opacity: 0.48;
}

.semesterScore strong {
  display: block;
  font-size: 1.05rem;
  line-height: 1;
  font-weight: 850;
}

.totalScore {
  border-color: rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.065);
}

.totalScore .scoreLabel {
  opacity: 0.70;
}

.totalScore strong {
  font-size: 1.18rem;
}

/* ---------------------------------------------------------
   ACADEMIC MINI STAT CARDS
   --------------------------------------------------------- */

.glassMiniCard {
  min-height: 92px;
  padding: 17px 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.055),
      rgba(255, 255, 255, 0.018)
    );
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.035);
  transition:
    transform 0.22s ease,
    border-color 0.22s ease,
    background 0.22s ease;
}

.glassMiniCard:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.065);
}

.glassMiniCard .eyebrowSmall {
  display: block;
  margin-bottom: 10px;
}

.glassMiniCard strong {
  display: block;
  font-size: 1.18rem;
  line-height: 1;
  font-weight: 850;
}

/* ---------------------------------------------------------
   ACADEMIC RECORD / TRANSCRIPT
   --------------------------------------------------------- */

.glassMiniCard + .glassMiniCard {
  margin-left: 0;
}

a:has(.semesterCard),
a:has(.glassMiniCard) {
  text-decoration: none;
}

a:has(img[src*="azeraksh-transcript"]) {
  text-decoration: none;
  color: inherit;
}

a:has(img[src*="azeraksh-transcript"]) > .glassCard,
a:has(img[src*="azeraksh-transcript"]) > div {
  height: 100%;
}

a:has(img[src*="azeraksh-transcript"]) img {
  aspect-ratio: 1 / 1.414;
  object-fit: cover;
  object-position: top center;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.16);
  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

a:has(img[src*="azeraksh-transcript"]):hover img {
  transform: scale(1.012);
  border-color: rgba(255, 255, 255, 0.18);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.22);
}

a:has(img[src*="azeraksh-transcript"]) .eyebrowSmall {
  letter-spacing: 0.12em;
}

/* ---------------------------------------------------------
   ASSESSMENT WEIGHTING
   --------------------------------------------------------- */

.semesterGrid + * {
  border-top-color: rgba(255, 255, 255, 0.10) !important;
}

/* ---------------------------------------------------------
   CENTER THE 5TH SEMESTER
   --------------------------------------------------------- */

.semesterCard:last-child:nth-child(odd) {
  grid-column: 1 / -1;
  width: 100%;
  max-width: calc(50% - 9px);
  justify-self: center;
}

/* ---------------------------------------------------------
   MOBILE
   --------------------------------------------------------- */

@media (max-width: 700px) {
  .semesterGrid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .semesterCard:last-child:nth-child(odd) {
    grid-column: auto;
    max-width: none;
  }

  .semesterCard {
    padding: 18px;
    border-radius: 17px;
  }

  .semesterTotal {
    font-size: 1.45rem;
  }

  .semesterScores {
    gap: 8px;
  }

  .semesterScore {
    padding: 12px 6px;
    border-radius: 12px;
  }

  .semesterScore strong {
    font-size: 0.95rem;
  }

  .totalScore strong {
    font-size: 1.05rem;
  }

  .scoreLabel {
    font-size: 0.53rem;
  }
}

@media (max-width: 430px) {
  .semesterScores {
    grid-template-columns: 1fr;
  }

  .semesterScore {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    text-align: left;
    padding: 12px 14px;
  }

  .scoreLabel {
    margin-bottom: 0;
  }

  .semesterScore strong {
    font-size: 1rem;
  }
}
/* =========================================================
   ACADEMIC PERFORMANCE — FINAL VISUAL OVERRIDE
   ========================================================= */

/* ---------- MAIN ACADEMIC AREA ---------- */

.semesterGrid {
  display: grid !important;
  grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  gap: 20px !important;
  margin-top: 28px !important;
}

/* ---------- STAT CARDS ---------- */

.glassMiniCard {
  position: relative !important;
  min-height: 105px !important;
  padding: 20px !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  gap: 9px !important;
  border: 1px solid rgba(255,255,255,.12) !important;
  border-radius: 18px !important;
  background: linear-gradient(
    145deg,
    rgba(255,255,255,.075),
    rgba(255,255,255,.025)
  ) !important;
  box-shadow:
    0 10px 30px rgba(0,0,0,.12),
    inset 0 1px 0 rgba(255,255,255,.05) !important;
}

.glassMiniCard:hover {
  transform: translateY(-4px) !important;
  border-color: rgba(255,255,255,.24) !important;
  box-shadow:
    0 16px 38px rgba(0,0,0,.20),
    inset 0 1px 0 rgba(255,255,255,.07) !important;
}

.glassMiniCard .eyebrowSmall {
  font-size: .60rem !important;
  letter-spacing: .14em !important;
  opacity: .55 !important;
}

.glassMiniCard strong {
  font-size: 1.35rem !important;
  line-height: 1 !important;
  font-weight: 900 !important;
}

/* ---------- SEMESTER CARD ---------- */

.semesterCard {
  position: relative !important;
  overflow: hidden !important;
  padding: 24px !important;
  border: 1px solid rgba(255,255,255,.13) !important;
  border-radius: 22px !important;
  background:
    radial-gradient(
      circle at top right,
      rgba(255,255,255,.07),
      transparent 42%
    ),
    linear-gradient(
      145deg,
      rgba(255,255,255,.065),
      rgba(255,255,255,.018)
    ) !important;
  box-shadow:
    0 14px 35px rgba(0,0,0,.14),
    inset 0 1px 0 rgba(255,255,255,.05) !important;
}

.semesterCard::before {
  content: "" !important;
  position: absolute !important;
  top: 0 !important;
  left: 22px !important;
  right: 22px !important;
  height: 2px !important;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,255,255,.60),
    transparent
  ) !important;
}

.semesterCard:hover {
  transform: translateY(-5px) !important;
  border-color: rgba(255,255,255,.24) !important;
  box-shadow:
    0 20px 45px rgba(0,0,0,.22),
    inset 0 1px 0 rgba(255,255,255,.07) !important;
}

/* ---------- SEMESTER HEADER ---------- */

.semesterCardHeader {
  min-height: 42px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
}

.semesterNumber {
  font-size: .72rem !important;
  font-weight: 850 !important;
  letter-spacing: .16em !important;
  opacity: .62 !important;
}

.semesterTotal {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  min-width: 76px !important;
  min-height: 42px !important;
  padding: 8px 13px !important;
  border: 1px solid rgba(255,255,255,.16) !important;
  border-radius: 13px !important;
  background: rgba(255,255,255,.075) !important;
  font-size: 1.45rem !important;
  font-weight: 950 !important;
  letter-spacing: -.04em !important;
}

/* ---------- DIVIDER ---------- */

.semesterDivider {
  height: 1px !important;
  margin: 20px 0 !important;
  background: rgba(255,255,255,.10) !important;
}

/* ---------- SCORE BOXES ---------- */

.semesterScores {
  display: grid !important;
  grid-template-columns: repeat(3, minmax(0,1fr)) !important;
  gap: 11px !important;
}

.semesterScore {
  min-height: 78px !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 9px !important;
  padding: 12px 8px !important;
  border: 1px solid rgba(255,255,255,.08) !important;
  border-radius: 15px !important;
  background: rgba(0,0,0,.13) !important;
}

.scoreLabel {
  margin: 0 !important;
  font-size: .56rem !important;
  font-weight: 850 !important;
  letter-spacing: .12em !important;
  opacity: .48 !important;
}

.semesterScore strong {
  font-size: 1.08rem !important;
  font-weight: 900 !important;
  line-height: 1 !important;
}

.totalScore {
  border-color: rgba(255,255,255,.20) !important;
  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,.105),
      rgba(255,255,255,.045)
    ) !important;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.06) !important;
}

.totalScore .scoreLabel {
  opacity: .72 !important;
}

.totalScore strong {
  font-size: 1.22rem !important;
}

/* ---------- FIFTH SEMESTER ---------- */

.semesterCard:last-child:nth-child(odd) {
  grid-column: 1 / -1 !important;
  width: 100% !important;
  max-width: calc(50% - 10px) !important;
  justify-self: center !important;
}

/* ---------- ACADEMIC RECORD HEADER ---------- */

.sectionEyebrow {
  letter-spacing: .16em !important;
}

a:has(img[src*="azeraksh-transcript"]) {
  display: block !important;
  color: inherit !important;
  text-decoration: none !important;
}

/* ---------- TRANSCRIPT CARDS ---------- */

a:has(img[src*="azeraksh-transcript"]) > div {
  height: 100% !important;
}

a:has(img[src*="azeraksh-transcript"]) img {
  width: 100% !important;
  display: block !important;
  aspect-ratio: 1 / 1.414 !important;
  object-fit: cover !important;
  object-position: top center !important;
  border: 1px solid rgba(255,255,255,.11) !important;
  border-radius: 15px !important;
  box-shadow: 0 12px 30px rgba(0,0,0,.18) !important;
  transition:
    transform .30s ease,
    border-color .30s ease,
    box-shadow .30s ease !important;
}

a:has(img[src*="azeraksh-transcript"]):hover img {
  transform: translateY(-3px) scale(1.008) !important;
  border-color: rgba(255,255,255,.24) !important;
  box-shadow: 0 20px 42px rgba(0,0,0,.25) !important;
}

a:has(img[src*="azeraksh-transcript"]) .eyebrowSmall {
  display: block !important;
  margin-top: 15px !important;
  padding-top: 13px !important;
  border-top: 1px solid rgba(255,255,255,.08) !important;
  font-size: .62rem !important;
  letter-spacing: .14em !important;
  opacity: .62 !important;
}

/* ---------- ASSESSMENT WEIGHTING ---------- */

.semesterGrid + div {
  margin-top: 26px !important;
  padding: 18px 20px !important;
  border: 1px solid rgba(255,255,255,.09) !important;
  border-top: 1px solid rgba(255,255,255,.13) !important;
  border-radius: 16px !important;
  background: rgba(255,255,255,.025) !important;
}

.semesterGrid + div .eyebrowSmall {
  font-size: .60rem !important;
  letter-spacing: .14em !important;
  opacity: .58 !important;
}

.semesterGrid + div p {
  font-size: .92rem !important;
  opacity: .78 !important;
}

/* ---------- MOBILE ---------- */

@media (max-width: 700px) {
  .semesterGrid {
    grid-template-columns: 1fr !important;
    gap: 15px !important;
  }

  .semesterCard:last-child:nth-child(odd) {
    grid-column: auto !important;
    max-width: none !important;
  }

  .semesterCard {
    padding: 19px !important;
    border-radius: 18px !important;
  }

  .semesterTotal {
    min-width: 68px !important;
    min-height: 38px !important;
    font-size: 1.25rem !important;
  }

  .semesterScores {
    gap: 8px !important;
  }

  .semesterScore {
    min-height: 70px !important;
  }

  .glassMiniCard {
    min-height: 90px !important;
  }
}

@media (max-width: 430px) {
  .semesterScores {
    grid-template-columns: 1fr !important;
  }

  .semesterScore {
    min-height: 56px !important;
    flex-direction: row !important;
    justify-content: space-between !important;
    padding: 12px 15px !important;
  }

  .scoreLabel {
    margin: 0 !important;
  }
}

/* =========================================================
   ACADEMIC PERFORMANCE — COMPLETE PROFESSIONAL DESIGN
   ========================================================= */

.academicPerformanceCard {
  position: relative;
  overflow: hidden;
}

.academicHero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 28px;
  padding: 4px 0 26px;
  border-bottom: 1px solid rgba(255,255,255,.08);
}

.academicHeroContent {
  display: flex;
  align-items: center;
  gap: 16px;
}

.academicIcon,
.recordIcon,
.assessmentIcon,
.documentIcon {
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.055);
  box-shadow: 0 10px 30px rgba(0,0,0,.18);
  font-size: 20px;
}

.academicHero h2 {
  margin: 7px 0 5px;
}

.academicHero p {
  margin: 0;
  opacity: .7;
}

.academicAverage {
  text-align: right;
  min-width: 190px;
}

.academicAverage span {
  display: block;
  font-size: .68rem;
  letter-spacing: .13em;
  opacity: .62;
}

.academicAverage strong {
  display: block;
  margin-top: 5px;
  font-size: clamp(2.5rem, 6vw, 4.3rem);
  line-height: .95;
  letter-spacing: -.05em;
}

.academicStats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin: 20px 0 30px;
}

.academicStatCard {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 82px;
  padding: 15px;
  border: 1px solid rgba(255,255,255,.09);
  border-radius: 16px;
  background: rgba(255,255,255,.035);
  transition: transform .22s ease, border-color .22s ease, background .22s ease;
}

.academicStatCard:hover {
  transform: translateY(-3px);
  border-color: rgba(255,255,255,.18);
  background: rgba(255,255,255,.055);
}

.academicStatIcon {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 11px;
  background: rgba(255,255,255,.065);
  border: 1px solid rgba(255,255,255,.08);
  font-size: 15px;
}

.academicStatCard strong {
  display: block;
  margin-top: 4px;
  font-size: 1.15rem;
}

.academicSectionHeading {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 18px;
  margin-bottom: 16px;
}

.academicSectionHeading h3 {
  margin: 6px 0 0;
  font-size: 1.15rem;
}

.academicSectionBadge {
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 10px;
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 999px;
  background: rgba(255,255,255,.035);
  font-size: .64rem;
  letter-spacing: .12em;
  opacity: .75;
}

.semesterGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 0;
}

.semesterCard {
  position: relative;
  padding: 19px;
  border: 1px solid rgba(255,255,255,.095);
  border-radius: 18px;
  background:
    linear-gradient(145deg, rgba(255,255,255,.055), rgba(255,255,255,.018));
  box-shadow: 0 12px 35px rgba(0,0,0,.12);
  transition: transform .22s ease, border-color .22s ease, box-shadow .22s ease;
}

.semesterCard:hover {
  transform: translateY(-3px);
  border-color: rgba(255,255,255,.18);
  box-shadow: 0 18px 45px rgba(0,0,0,.2);
}

.semesterCard:last-child:nth-child(odd) {
  grid-column: 1 / -1;
  width: calc(50% - 8px);
  justify-self: center;
}

.semesterCardHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.semesterLabel {
  display: block;
  margin-bottom: 4px;
  font-size: .58rem;
  letter-spacing: .13em;
  opacity: .45;
}

.semesterNumber {
  display: block;
  font-size: .78rem;
  font-weight: 800;
  letter-spacing: .12em;
}

.semesterTotal {
  display: grid;
  place-items: center;
  min-width: 62px;
  min-height: 40px;
  padding: 0 10px;
  border-radius: 11px;
  background: rgba(255,255,255,.075);
  border: 1px solid rgba(255,255,255,.1);
  font-weight: 800;
  font-size: 1rem;
}

.semesterDivider {
  height: 1px;
  margin: 15px 0;
  background: rgba(255,255,255,.08);
}

.semesterScores {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.semesterScore {
  min-width: 0;
  padding: 11px 8px;
  text-align: center;
  border-radius: 12px;
  background: rgba(255,255,255,.035);
  border: 1px solid rgba(255,255,255,.06);
}

.scoreLabel {
  display: block;
  font-size: .58rem;
  letter-spacing: .09em;
  opacity: .55;
}

.semesterScore strong {
  display: block;
  margin-top: 5px;
  font-size: 1.05rem;
}

.semesterScore small {
  display: block;
  margin-top: 3px;
  font-size: .58rem;
  opacity: .42;
}

.totalScore {
  background: rgba(255,255,255,.065);
  border-color: rgba(255,255,255,.12);
}

.assessmentWeightingCard {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
  padding: 18px;
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 17px;
  background: rgba(255,255,255,.035);
}

.assessmentContent {
  flex: 1;
}

.assessmentContent h3 {
  margin: 5px 0 4px;
  font-size: 1rem;
}

.assessmentContent p {
  margin: 0;
  opacity: .62;
  font-size: .85rem;
}

.assessmentFormula {
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}

.assessmentFormula span,
.assessmentFormula strong {
  display: grid;
  place-items: center;
  min-width: 52px;
  height: 38px;
  padding: 0 9px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,.09);
  background: rgba(255,255,255,.045);
  font-size: .8rem;
}

.assessmentFormula strong {
  background: rgba(255,255,255,.09);
}

.assessmentFormula i {
  font-style: normal;
  opacity: .4;
}

.academicRecordSection {
  margin-top: 30px;
}

.academicRecordHeader {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
  margin-bottom: 18px;
}

.academicRecordTitle {
  display: flex;
  align-items: center;
  gap: 14px;
}

.academicRecordTitle h2 {
  margin: 6px 0 5px;
}

.academicRecordTitle p {
  margin: 0;
  opacity: .62;
}

.transcriptGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.transcriptCard {
  display: block;
  overflow: hidden;
  color: inherit;
  text-decoration: none;
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 20px;
  background: rgba(255,255,255,.035);
  box-shadow: 0 14px 40px rgba(0,0,0,.15);
  transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
}

.transcriptCard:hover {
  transform: translateY(-5px);
  border-color: rgba(255,255,255,.2);
  box-shadow: 0 22px 55px rgba(0,0,0,.23);
}

.transcriptImageWrap {
  position: relative;
  overflow: hidden;
  padding: 12px;
  background: rgba(0,0,0,.18);
}

.transcriptImageWrap img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 13px;
  transition: transform .35s ease;
}

.transcriptCard:hover .transcriptImageWrap img {
  transform: scale(1.025);
}

.transcriptPageNumber {
  position: absolute;
  top: 22px;
  right: 22px;
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 11px;
  background: rgba(0,0,0,.65);
  border: 1px solid rgba(255,255,255,.16);
  backdrop-filter: blur(10px);
  font-size: .72rem;
  font-weight: 800;
}

.transcriptInfo {
  padding: 18px;
}

.transcriptTitleRow {
  display: flex;
  align-items: center;
  gap: 11px;
}

.documentIcon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  font-size: 15px;
}

.transcriptTitleRow h3 {
  margin: 4px 0 0;
  font-size: 1rem;
}

.transcriptInfo > p {
  margin: 12px 0 16px;
  opacity: .58;
  font-size: .8rem;
}

.transcriptButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  min-height: 36px;
  padding: 0 13px;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 10px;
  background: rgba(255,255,255,.05);
  font-size: .67rem;
  font-weight: 800;
  letter-spacing: .08em;
  transition: background .2s ease, border-color .2s ease;
}

.transcriptCard:hover .transcriptButton {
  background: rgba(255,255,255,.09);
  border-color: rgba(255,255,255,.2);
}

.transcriptButton b {
  font-size: .9rem;
}

@media (max-width: 900px) {
  .academicStats {
    grid-template-columns: repeat(2, 1fr);
  }

  .academicHero {
    align-items: flex-start;
  }

  .transcriptGrid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .academicHero,
  .academicRecordHeader,
  .assessmentWeightingCard {
    flex-direction: column;
    align-items: stretch;
  }

  .academicAverage {
    text-align: left;
  }

  .semesterGrid {
    grid-template-columns: 1fr;
  }

  .semesterCard:last-child:nth-child(odd) {
    grid-column: auto;
    width: 100%;
  }

  .assessmentFormula {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .academicStats {
    grid-template-columns: 1fr;
  }

  .academicHeroContent,
  .academicRecordTitle {
    align-items: flex-start;
  }

  .semesterScores {
    grid-template-columns: 1fr;
  }

  .academicSectionHeading {
    align-items: flex-start;
    flex-direction: column;
  }

  .assessmentFormula {
    width: 100%;
    justify-content: space-between;
  }

  .assessmentFormula span,
  .assessmentFormula strong {
    flex: 1;
  }
}
/* =========================================================
   ACADEMIC PERFORMANCE — PREMIUM TRANSCRIPT DESIGN
   ========================================================= */

.academicPerformanceCard {
  position: relative;
  overflow: hidden;
  padding: clamp(22px, 4vw, 38px) !important;
}

.academicPerformanceCard::before {
  content: "";
  position: absolute;
  width: 280px;
  height: 280px;
  top: -150px;
  right: -100px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(120, 255, 220, 0.12),
    transparent 70%
  );
  pointer-events: none;
}

.academicPerformanceCard::after {
  content: "";
  position: absolute;
  width: 220px;
  height: 220px;
  bottom: -140px;
  left: -100px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(100, 180, 255, 0.08),
    transparent 70%
  );
  pointer-events: none;
}


/* =========================================================
   HERO
   ========================================================= */

.academicHero {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  padding: 24px;
  margin-bottom: 22px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.055),
      rgba(255, 255, 255, 0.018)
    );
  box-shadow:
    0 20px 55px rgba(0, 0, 0, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.academicHeroContent {
  display: flex;
  align-items: center;
  gap: 18px;
  min-width: 0;
}

.academicIcon {
  width: 58px;
  height: 58px;
  flex: 0 0 58px;
  display: grid;
  place-items: center;
  border-radius: 17px;
  font-size: 27px;
  font-weight: 800;
  color: #ffffff;
  background:
    linear-gradient(
      135deg,
      rgba(120, 255, 220, 0.18),
      rgba(90, 160, 255, 0.16)
    );
  border: 1px solid rgba(120, 255, 220, 0.22);
  box-shadow:
    0 0 28px rgba(120, 255, 220, 0.10),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.academicHero h2 {
  margin: 7px 0 5px;
  font-size: clamp(1.45rem, 3vw, 2.15rem);
  line-height: 1.15;
  letter-spacing: -0.03em;
}

.academicHero p {
  margin: 0;
  color: rgba(255, 255, 255, 0.58);
  font-size: 0.92rem;
}

.academicAverage {
  min-width: 180px;
  padding: 17px 20px;
  text-align: right;
  border-left: 1px solid rgba(255, 255, 255, 0.09);
}

.academicAverage span {
  display: block;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.13em;
  color: rgba(255, 255, 255, 0.48);
}

.academicAverage strong {
  display: block;
  margin-top: 5px;
  font-size: clamp(2.3rem, 5vw, 3.7rem);
  line-height: 1;
  letter-spacing: -0.06em;
  background: linear-gradient(135deg, #ffffff, #8fffe1);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.academicAverage small {
  display: block;
  margin-top: 7px;
  color: rgba(255, 255, 255, 0.45);
}


/* =========================================================
   STAT CARDS
   ========================================================= */

.academicStats {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 36px;
}

.academicStatCard {
  display: flex;
  align-items: center;
  gap: 13px;
  min-width: 0;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.075);
  border-radius: 17px;
  background: rgba(255, 255, 255, 0.028);
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background 180ms ease;
}

.academicStatCard:hover {
  transform: translateY(-3px);
  border-color: rgba(120, 255, 220, 0.22);
  background: rgba(255, 255, 255, 0.045);
}

.academicStatIcon {
  width: 39px;
  height: 39px;
  flex: 0 0 39px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  font-size: 17px;
  font-weight: 800;
  color: #9fffe7;
  background: rgba(120, 255, 220, 0.08);
  border: 1px solid rgba(120, 255, 220, 0.13);
}

.academicStatCard span {
  display: block;
  margin-bottom: 4px;
  font-size: 0.63rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  color: rgba(255, 255, 255, 0.43);
}

.academicStatCard strong {
  display: block;
  font-size: 1.12rem;
  color: #ffffff;
}


/* =========================================================
   SECTION HEADINGS
   ========================================================= */

.academicSectionHeading {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 17px;
}

.academicSectionHeading h3 {
  margin: 7px 0 5px;
  font-size: clamp(1.15rem, 2.5vw, 1.5rem);
}

.academicSectionHeading p {
  margin: 0;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.86rem;
}

.academicSectionBadge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  padding: 7px 11px;
  border-radius: 999px;
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  color: rgba(255, 255, 255, 0.62);
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(255, 255, 255, 0.08);
}


/* =========================================================
   SEMESTER GRID
   ========================================================= */

.semesterGrid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.semesterCard {
  min-width: 0;
  padding: 20px;
  border-radius: 19px;
  border: 1px solid rgba(255, 255, 255, 0.075);
  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.042),
      rgba(255, 255, 255, 0.018)
    );
  box-shadow:
    0 12px 35px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.035);
  transition:
    transform 180ms ease,
    border-color 180ms ease;
}

.semesterCard:hover {
  transform: translateY(-3px);
  border-color: rgba(120, 255, 220, 0.18);
}

.semesterCard:last-child:nth-child(odd) {
  grid-column: 1 / -1;
  width: calc(50% - 7px);
  justify-self: center;
}

.semesterCardHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}

.semesterLabel {
  display: block;
  margin-bottom: 5px;
  font-size: 0.59rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.38);
}

.semesterNumber {
  display: block;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  color: #ffffff;
}

.semesterTotal {
  min-width: 72px;
  padding: 8px 10px;
  text-align: right;
  border-radius: 12px;
  background: rgba(120, 255, 220, 0.07);
  border: 1px solid rgba(120, 255, 220, 0.12);
}

.semesterTotal span {
  display: block;
  font-size: 0.55rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.4);
}

.semesterTotal strong {
  display: block;
  margin-top: 2px;
  font-size: 1.2rem;
  color: #9fffe7;
}

.semesterDivider {
  height: 1px;
  margin: 17px 0;
  background: rgba(255, 255, 255, 0.07);
}

.semesterScores {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.semesterScore {
  padding: 12px 9px;
  text-align: center;
  border-radius: 13px;
  background: rgba(255, 255, 255, 0.026);
  border: 1px solid rgba(255, 255, 255, 0.055);
}

.semesterScore .scoreLabel {
  display: block;
  font-size: 0.56rem;
  font-weight: 800;
  letter-spacing: 0.09em;
  color: rgba(255, 255, 255, 0.42);
}

.semesterScore strong {
  display: block;
  margin-top: 5px;
  font-size: 1.12rem;
  color: #ffffff;
}

.semesterScore small {
  display: block;
  margin-top: 3px;
  font-size: 0.58rem;
  color: rgba(255, 255, 255, 0.32);
}

.semesterScore.totalScore {
  background: rgba(120, 255, 220, 0.055);
  border-color: rgba(120, 255, 220, 0.12);
}

.semesterScore.totalScore strong {
  color: #9fffe7;
}


/* =========================================================
   ASSESSMENT METHOD
   ========================================================= */

.assessmentWeightingCard {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 18px;
  margin-top: 18px;
  padding: 20px;
  border-radius: 19px;
  border: 1px solid rgba(255, 255, 255, 0.075);
  background:
    linear-gradient(
      110deg,
      rgba(120, 255, 220, 0.055),
      rgba(255, 255, 255, 0.02)
    );
}

.assessmentIcon {
  width: 49px;
  height: 49px;
  display: grid;
  place-items: center;
  border-radius: 15px;
  font-size: 21px;
  font-weight: 800;
  color: #9fffe7;
  background: rgba(120, 255, 220, 0.08);
  border: 1px solid rgba(120, 255, 220, 0.13);
}

.assessmentContent h3 {
  margin: 5px 0;
  font-size: 1rem;
}

.assessmentContent p {
  max-width: 650px;
  margin: 0;
  color: rgba(255, 255, 255, 0.48);
  font-size: 0.82rem;
  line-height: 1.6;
}

.assessmentFormula {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  flex-wrap: wrap;
  min-width: 220px;
  padding: 12px 15px;
  border-radius: 14px;
  background: rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.055);
}

.assessmentFormula strong {
  color: #ffffff;
  font-size: 0.95rem;
}

.assessmentFormula span {
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.38);
}

.assessmentFormula b {
  color: rgba(255, 255, 255, 0.28);
}


/* =========================================================
   ORIGINAL ACADEMIC RECORD
   ========================================================= */

.academicRecordSection {
  position: relative;
  z-index: 1;
  margin-top: 38px;
  padding-top: 31px;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.academicRecordHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 18px;
}

.academicRecordTitle {
  display: flex;
  align-items: center;
  gap: 14px;
}

.recordIcon {
  width: 48px;
  height: 48px;
  flex: 0 0 48px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  font-size: 21px;
  color: #ffffff;
  background:
    linear-gradient(
      135deg,
      rgba(120, 255, 220, 0.12),
      rgba(90, 160, 255, 0.12)
    );
  border: 1px solid rgba(120, 255, 220, 0.13);
}

.academicRecordTitle h3 {
  margin: 5px 0 4px;
  font-size: 1.18rem;
}

.academicRecordTitle p {
  margin: 0;
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.8rem;
}


/* =========================================================
   TRANSCRIPT CARDS
   ========================================================= */

.transcriptGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.transcriptCard {
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.045),
      rgba(255, 255, 255, 0.018)
    );
  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  transition:
    transform 180ms ease,
    border-color 180ms ease;
}

.transcriptCard:hover {
  transform: translateY(-4px);
  border-color: rgba(120, 255, 220, 0.2);
}

.transcriptImageWrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  background: rgba(0, 0, 0, 0.2);
}

.transcriptImageWrap img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
  transition: transform 300ms ease;
}

.transcriptCard:hover .transcriptImageWrap img {
  transform: scale(1.025);
}

.transcriptPageNumber {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 6px 9px;
  border-radius: 999px;
  font-size: 0.58rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: #ffffff;
  background: rgba(8, 12, 18, 0.76);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
}

.transcriptInfo {
  padding: 17px;
}

.transcriptTitleRow {
  display: flex;
  align-items: center;
  gap: 9px;
}

.documentIcon {
  width: 31px;
  height: 31px;
  flex: 0 0 31px;
  display: grid;
  place-items: center;
  border-radius: 9px;
  font-size: 13px;
  color: #9fffe7;
  background: rgba(120, 255, 220, 0.07);
  border: 1px solid rgba(120, 255, 220, 0.11);
}

.transcriptTitleRow strong {
  font-size: 0.91rem;
  color: #ffffff;
}

.transcriptInfo p {
  margin: 9px 0 14px 40px;
  color: rgba(255, 255, 255, 0.42);
  font-size: 0.76rem;
}

.transcriptButton {
  width: 100%;
  min-height: 40px;
  padding: 9px 13px;
  border-radius: 11px;
  border: 1px solid rgba(120, 255, 220, 0.14);
  background: rgba(120, 255, 220, 0.055);
  color: #9fffe7;
  font-family: inherit;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition:
    background 180ms ease,
    border-color 180ms ease,
    transform 180ms ease;
}

.transcriptButton:hover {
  background: rgba(120, 255, 220, 0.10);
  border-color: rgba(120, 255, 220, 0.26);
  transform: translateY(-1px);
}


/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 900px) {

  .academicStats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .assessmentWeightingCard {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .assessmentFormula {
    grid-column: 1 / -1;
    justify-self: stretch;
  }

}


@media (max-width: 700px) {

  .academicHero {
    align-items: flex-start;
    flex-direction: column;
  }

  .academicAverage {
    width: 100%;
    min-width: 0;
    padding: 15px 0 0;
    text-align: left;
    border-left: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .semesterGrid {
    grid-template-columns: 1fr;
  }

  .semesterCard:last-child:nth-child(odd) {
    grid-column: auto;
    width: auto;
  }

  .transcriptGrid {
    grid-template-columns: 1fr;
  }

  .academicRecordHeader {
    align-items: flex-start;
    flex-direction: column;
  }

}


@media (max-width: 480px) {

  .academicPerformanceCard {
    padding: 16px !important;
  }

  .academicHero {
    padding: 18px;
  }

  .academicHeroContent {
    align-items: flex-start;
  }

  .academicIcon {
    width: 48px;
    height: 48px;
    flex-basis: 48px;
    font-size: 22px;
  }

  .academicStats {
    grid-template-columns: 1fr;
  }

  .academicSectionHeading {
    align-items: flex-start;
    flex-direction: column;
  }

  .semesterCard {
    padding: 16px;
  }

  .semesterScores {
    gap: 5px;
  }

  .semesterScore {
    padding: 10px 5px;
  }

  .semesterScore strong {
    font-size: 1rem;
  }

  .assessmentWeightingCard {
    grid-template-columns: 1fr;
  }

  .assessmentIcon {
    width: 44px;
    height: 44px;
  }

  .assessmentFormula {
    min-width: 0;
  }

  .academicRecordSection {
    margin-top: 30px;
    padding-top: 25px;
  }

}
