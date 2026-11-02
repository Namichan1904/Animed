/* ANIMED engine. You normally do not need to edit this file.
   Content lives in /data. Each region file calls Animed.addRegion({...}). See README.md. */
(function(){
'use strict';
var AN=window.Animed||{regions:[]};
var REGIONS=AN.regions.slice().sort(function(a,b){return (a.order||99)-(b.order||99);});
var SEALED=AN.sealed||[];
var PROLOGUE=AN.prologue||[];

/* ---------- indexes and content check ---------- */
var CASE_INDEX={}, REGION_BY_ID={}, CHAPTER_OF={};
var ERRORS=[];
var RESERVED={narrator:1,you:1,pulse:1,hush:1};
function err(m){ ERRORS.push(m); }
function buildIndex(){
  var seenChapters={};
  REGIONS.forEach(function(r){
    REGION_BY_ID[r.id]=r;
    if(!r.chapters||!r.chapters.length) err(r.id+': no chapters');
    var cases=r.cases||{}, chars=r.characters||{}, lore=r.lore||{};
    Object.keys(cases).forEach(function(id){
      var c=cases[id]; c.id=id;
      if(CASE_INDEX[id]) err('Case id used twice: '+id);
      CASE_INDEX[id]={c:c,r:r};
      if(!c.pearl) err(id+': missing pearl');
      if(c.type==='mcq'){
        if(!c.options||c.options.length<2) err(id+': needs at least 2 options');
        else if(typeof c.answer!=='number'||c.answer<0||c.answer>=c.options.length) err(id+': answer must be a number from 0 to '+(c.options.length-1));
        if(!c.explain) err(id+': missing explain');
      } else if(c.type==='think'){
        if(!c.answer||typeof c.answer!=='string') err(id+': think case needs answer text');
        if(!c.points||!c.points.length) err(id+': think case needs points list');
      } else if(c.type==='boss'){
        if(!c.stages||!c.stages.length) err(id+': boss needs stages');
        else c.stages.forEach(function(s,i){
          if(!s.options||typeof s.answer!=='number'||s.answer<0||s.answer>=s.options.length) err(id+' stage '+(i+1)+': answer out of range');
        });
      } else err(id+': type must be mcq, think or boss');
      if(!c.case||!c.ask&&c.type!=='boss') err(id+': needs case text and ask');
      if(c.who&&!chars[c.who]) err(id+': unknown character "'+c.who+'"');
    });
    (r.chapters||[]).forEach(function(ch){
      if(seenChapters[ch.id]) err('Chapter id used twice: '+ch.id);
      seenChapters[ch.id]=1; CHAPTER_OF[ch.id]=r;
      (ch.beats||[]).forEach(function(b,bi){
        if(b.k==='case'){ if(!cases[b.id]) err(ch.id+' beat '+(bi+1)+': case "'+b.id+'" not found'); }
        else if(b.k==='scene'){
          (b.lines||[]).forEach(function(l,li){
            if(!l.t) err(ch.id+' scene line '+(li+1)+': missing text');
            if(l.who&&!RESERVED[l.who]&&!chars[l.who]) err(ch.id+' scene line '+(li+1)+': unknown speaker "'+l.who+'"');
          });
          (b.unlock||[]).forEach(function(u){ if(!lore[u]) err(ch.id+': unlocks unknown lore "'+u+'"'); });
        } else err(ch.id+' beat '+(bi+1)+': k must be scene or case');
      });
    });
  });
  PROLOGUE.forEach(function(l,i){ if(!l.t) err('prologue line '+(i+1)+': missing text'); });
  if(ERRORS.length&&window.console) console.error('Animed content check:\n'+ERRORS.join('\n'));
}
buildIndex();

/* ---------- state ---------- */
var KEY='animed-v3';
function defaults(){return {hero:null,name:'',prologue:false,xp:0,streak:0,tokens:1,lastPlayDate:null,lastDailyDate:null,
  mistakes:[],pearls:[],lore:[],prog:{},settings:{flavor:'full'}};}
function load(){
  try{ var raw=localStorage.getItem(KEY);
    if(raw){ var o=JSON.parse(raw), d=defaults(); for(var k in d){ if(!(k in o)) o[k]=d[k]; } return o; }
  }catch(e){}
  return defaults();
}
var S=load();
function save(){ try{ localStorage.setItem(KEY,JSON.stringify(S)); }catch(e){} }
function prog(rid){ return S.prog[rid]||(S.prog[rid]={cleared:[],pos:{}}); }

/* ---------- helpers ---------- */
function $(id){ return document.getElementById(id); }
function pick(a){ return a[Math.floor(Math.random()*a.length)]; }
function shuffle(a){ for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i]; a[i]=a[j]; a[j]=t; } return a; }
function pad(n){ return n<10?'0'+n:''+n; }
function today(){ var d=new Date(); return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate()); }
function daysBetween(a,b){ return Math.round((new Date(b+'T12:00:00')-new Date(a+'T12:00:00'))/86400000); }
function need(l){ return 50+25*(l-1); }
function levelInfo(xp){ var l=1,rem=xp; while(rem>=need(l)){ rem-=need(l); l++; } return {level:l,into:rem,need:need(l)}; }
function rankFor(l){ if(l>=20)return 'Master'; if(l>=15)return 'Specialist'; if(l>=10)return 'Clinician'; if(l>=5)return 'Apprentice'; return 'Rookie'; }
function dots(n){ var s=''; for(var i=1;i<=3;i++) s+= i<=n?'●':'○'; return s; }
function scrollTop(){ try{ window.scrollTo(0,0); }catch(e){} }
function you(){ return S.name||'Descender'; }
function fill(t){ return String(t).replace(/\{you\}/g,you()); }
function el(tag,cls,text){ var e=document.createElement(tag); if(cls) e.className=cls; if(text!=null) e.textContent=text; return e; }
function lanterns(on,total){
  var h='';
  for(var i=0;i<total;i++) h+='<span class="lan '+(i<on?'on':'off')+'"><svg viewBox="0 0 24 36" aria-hidden="true"><path class="c" d="M12 2v5M9 7h6"/><path class="b" d="M6 9h12l2 6v9l-2 6H6l-2-6v-9z"/><path class="c" d="M8 33h8"/></svg></span>';
  return h;
}
var toastTimer=null;
function toast(msg){ var t=$('toast'); t.textContent=msg; t.hidden=false; clearTimeout(toastTimer); toastTimer=setTimeout(function(){ t.hidden=true; },4200); }

/* ---------- art slots ---------- */
var imgOK={};
function tryImage(slot,path){
  slot.dataset.path=path;
  if(imgOK[path]===false) return;
  if(imgOK[path]===true){ slot.innerHTML='<img alt="" src="'+path+'">'; return; }
  var im=new Image();
  im.onload=function(){ imgOK[path]=true; if(slot.dataset.path===path) slot.innerHTML='<img alt="" src="'+path+'">'; };
  im.onerror=function(){ imgOK[path]=false; };
  im.src=path;
}
function setArt(slot,key,mood,color){
  if(!slot) return;
  var path;
  if(key==='hero'){ slot.innerHTML=Art.hero(S.hero||'f'); path='assets/hero-'+(S.hero||'f')+'.png'; }
  else if(key==='pulse'){ slot.innerHTML=Art.pulse(mood||'idle'); path='assets/pulse.png'; }
  else { slot.innerHTML=Art.npc(color); path='assets/npc-'+key+'.png'; }
  tryImage(slot,path);
}
function setMood(slotId,mood){ var s=$(slotId); if(!s) return; var svg=s.querySelector('svg'); if(svg) svg.setAttribute('data-mood',mood); }
function regionChar(region,key){ return (region&&region.characters&&region.characters[key])||null; }

/* ---------- region theme ---------- */
function applyTheme(r){
  var p=(r&&r.palette)||{a:'#0A0E2E',b:'#171B55',c:'#2C1B5E',glow:'#FFD36B'};
  var s=document.body.style;
  s.setProperty('--ra',p.a); s.setProperty('--rb',p.b); s.setProperty('--rc',p.c); s.setProperty('--rglow',p.glow||'#FFD36B');
}

/* ---------- views ---------- */
var VIEWS=['select','world','region','scene','quest','result','codex','settings'];
function show(v){ VIEWS.forEach(function(n){ $('view-'+n).hidden=(n!==v); }); scrollTop(); $('hdr-actions').hidden=(v==='select'); }

/* ---------- character select ---------- */
var pickHero=null;
function renderSelect(){
  applyTheme(null);
  pickHero=S.hero;
  $('pick-m').setAttribute('aria-pressed',pickHero==='m'?'true':'false');
  $('pick-f').setAttribute('aria-pressed',pickHero==='f'?'true':'false');
  setArt($('pick-m-art'),'x'); $('pick-m-art').innerHTML=Art.hero('m'); tryImage($('pick-m-art'),'assets/hero-m.png');
  setArt($('pick-f-art'),'x'); $('pick-f-art').innerHTML=Art.hero('f'); tryImage($('pick-f-art'),'assets/hero-f.png');
  $('in-name').value=S.name||'';
  $('btn-begin').disabled=!pickHero;
  show('select');
}
function choose(g){
  pickHero=g;
  $('pick-m').setAttribute('aria-pressed',g==='m'?'true':'false');
  $('pick-f').setAttribute('aria-pressed',g==='f'?'true':'false');
  $('btn-begin').disabled=false;
}
function beginGame(){
  if(!pickHero) return;
  S.hero=pickHero; S.name=($('in-name').value||'').trim().slice(0,20); save();
  if(!S.prologue){ startPrologue(); } else goWorld();
}

/* ---------- world ---------- */
function regionProgress(r){ var p=prog(r.id); return {done:p.cleared.length,total:r.chapters.length}; }
function dailyPool(){
  var ids=[];
  REGIONS.forEach(function(r){
    var p=prog(r.id);
    r.chapters.forEach(function(ch){
      if(p.cleared.indexOf(ch.id)>-1) (ch.beats||[]).forEach(function(b){ if(b.k==='case'&&ids.indexOf(b.id)<0) ids.push(b.id); });
    });
  });
  return ids;
}
function dailySize(){ return Math.min(5+Math.floor((levelInfo(S.xp).level-1)/3),10); }
function goWorld(){
  applyTheme(null);
  var li=levelInfo(S.xp);
  setArt($('pl-art'),'hero');
  $('pl-name').textContent=you();
  $('lv-num').textContent=li.level;
  $('rank').textContent=rankFor(li.level);
  $('xp-txt').textContent=li.into+' / '+li.need+' XP';
  var pct=Math.round(li.into/li.need*100);
  $('xpfill').style.width=pct+'%'; $('xpbar').setAttribute('aria-valuenow',pct);
  $('c-streak').textContent=S.streak; $('c-tokens').textContent=S.tokens; $('c-pearls').textContent=S.pearls.length;

  var pool=dailyPool(), cleared=(S.lastDailyDate===today());
  if(!pool.length){
    $('daily-desc').textContent='Clear your first chapter to unlock the Daily Trial. It mixes cases from chapters you have finished.';
    $('btn-daily').disabled=true; $('btn-daily').textContent='Daily Trial';
  } else {
    var n=Math.min(dailySize(),pool.length);
    $('daily-desc').textContent = cleared ? 'Cleared for today. Practice runs give half XP and keep your streak safe.'
      : n+' cases from chapters you have cleared. Finish it for +20 bonus XP and to extend your streak. The count grows as you level.';
    $('btn-daily').disabled=false; $('btn-daily').textContent=cleared?'Practice run':'Start Daily Trial';
  }
  var m=S.mistakes.length;
  $('review-title').textContent=m+(m===1?' case':' cases')+' waiting';
  $('review-desc').textContent=m?'Win them back for full XP. Each one you get right leaves the queue.':'Cases you miss land here, so you can win them back.';
  $('btn-review').disabled=!m;

  var box=$('regions'); box.innerHTML='';
  REGIONS.forEach(function(r){
    var rp=regionProgress(r), card=el('article','region-card');
    var p=r.palette||{};
    card.style.background='linear-gradient(180deg,'+p.a+' 0%,'+p.b+' 62%,'+p.c+' 100%)';
    card.innerHTML='<div class="label"></div><h2></h2><p></p><div class="lanrow"></div><div class="row"><button class="btn" type="button"></button></div>';
    card.querySelector('.label').textContent='Region '+(r.order||1)+' · '+r.system;
    card.querySelector('h2').textContent=r.name;
    card.querySelector('p').textContent=r.blurb||'';
    card.querySelector('.lanrow').innerHTML=lanterns(rp.done,rp.total);
    var b=card.querySelector('button'); b.textContent=rp.done?(rp.done>=rp.total?'Revisit region':'Continue'):'Enter region';
    b.addEventListener('click',function(){ goRegion(r.id); });
    box.appendChild(card);
  });
  var sealed=$('sealed'); sealed.innerHTML='';
  SEALED.forEach(function(s){
    var c=el('div','region-card sealed'); c.style.background='linear-gradient(180deg,#0A0E2E,#171B55)';
    c.innerHTML='<div class="label"></div><h2 style="font-size:20px"></h2>';
    c.querySelector('.label').textContent=s.system+' · sealed';
    c.querySelector('h2').textContent=s.name;
    sealed.appendChild(c);
  });
  var eb=$('errbox');
  if(ERRORS.length){ eb.hidden=false; eb.innerHTML='<b>Content check found '+ERRORS.length+' problem'+(ERRORS.length>1?'s':'')+'.</b> Fix these in your /data files:<ul></ul>'; ERRORS.slice(0,12).forEach(function(m){ eb.querySelector('ul').appendChild(el('li',null,m)); }); }
  else eb.hidden=true;
  show('world');
}

/* ---------- region ---------- */
var curRegion=null;
function goRegion(id){
  var r=REGION_BY_ID[id]; if(!r) return;
  curRegion=r; applyTheme(r);
  var p=prog(r.id), rp=regionProgress(r);
  $('rg-label').textContent='Region '+(r.order||1)+' · '+r.system;
  $('rg-name').textContent=r.name;
  $('rg-blurb').textContent=r.blurb||'';
  $('rg-lan').innerHTML=lanterns(rp.done,rp.total);
  $('rg-status').textContent=rp.done+' of '+rp.total+' chapters cleared';
  var list=$('chap-list'); list.innerHTML='';
  var lastAct=null;
  r.chapters.forEach(function(ch,i){
    if(ch.act&&ch.act!==lastAct){ list.appendChild(el('div','act',ch.act)); lastAct=ch.act; }
    var cleared=p.cleared.indexOf(ch.id)>-1;
    var prevOk=(i===0)||p.cleared.indexOf(r.chapters[i-1].id)>-1;
    var locked=!cleared&&!prevOk;
    var started=(p.pos[ch.id]||0)>0;
    var ncase=(ch.beats||[]).filter(function(b){return b.k==='case';}).length;
    var row=el('div','chap'+(cleared?' cleared':'')+(locked?' locked':''));
    row.innerHTML='<div class="lan '+(cleared?'on':'off')+'"><svg viewBox="0 0 24 36" aria-hidden="true"><path class="c" d="M12 2v5M9 7h6"/><path class="b" d="M6 9h12l2 6v9l-2 6H6l-2-6v-9z"/><path class="c" d="M8 33h8"/></svg></div>'
      +'<div><h3></h3><div class="meta"></div><p></p></div><div class="go"><button class="btn" type="button"></button></div>';
    row.querySelector('h3').textContent=(i+1)+'. '+ch.title;
    row.querySelector('.meta').textContent=ch.topic+' · '+ncase+' case'+(ncase===1?'':'s');
    row.querySelector('p').textContent=locked?'Clear the previous chapter to open this one.':(ch.summary||'');
    var b=row.querySelector('button');
    b.textContent=cleared?'Replay':(started?'Continue':'Begin');
    if(!cleared&&!started) b.classList.add('pink');
    if(locked){ b.disabled=true; b.textContent='Locked'; }
    b.addEventListener('click',function(){ startChapter(r,ch); });
    list.appendChild(row);
  });
  show('region');
}

/* ---------- run engine ---------- */
var run=null;
function newRun(mode,steps,startI,region,chapter){
  run={mode:mode,steps:steps,i:startI||0,xp:0,correct:0,cases:0,results:[],newLore:[],shownLevel:levelInfo(S.xp).level,
    cur:null,boss:null,onNext:null,region:region||null,chapter:chapter||null,answered:false};
}
function startPrologue(){
  applyTheme(REGIONS[0]||null);
  newRun('prologue',[{k:'scene',lines:PROLOGUE}],0,REGIONS[0]||null,null);
  playStep();
}
function startChapter(r,ch){
  var p=prog(r.id), cleared=p.cleared.indexOf(ch.id)>-1;
  var i=cleared?0:(p.pos[ch.id]||0);
  if(i>=ch.beats.length) i=0;
  applyTheme(r);
  newRun(cleared?'replay':'story',ch.beats,i,r,ch);
  playStep();
}
function startDaily(practiceFlag){
  var pool=shuffle(dailyPool()); if(!pool.length) return;
  var n=Math.min(dailySize(),pool.length);
  var mode=(S.lastDailyDate===today())?'practice':'daily';
  newRun(mode,pool.slice(0,n).map(function(id){return {k:'case',id:id};}),0,null,null);
  playStep();
}
function startReview(){
  var ids=shuffle(S.mistakes.filter(function(id){return CASE_INDEX[id];}));
  if(!ids.length) return;
  newRun('review',ids.map(function(id){return {k:'case',id:id};}),0,null,null);
  playStep();
}
function playStep(){
  var s=run.steps[run.i];
  if(!s){ finishRun(); return; }
  if(s.k==='scene') renderScene(s);
  else { var ci=CASE_INDEX[s.id]; if(ci){ if(run.mode==='daily'||run.mode==='practice'||run.mode==='review') applyTheme(ci.r); renderCase(ci.c,ci.r); } else advance(); }
}
function advance(){
  run.i++;
  if(run.mode==='story'){ prog(run.region.id).pos[run.chapter.id]=run.i; save(); }
  checkLevelUp();
  playStep();
}
function checkLevelUp(){ var l=levelInfo(S.xp).level; if(l>run.shownLevel){ run.shownLevel=l; showLevelUp(l); } }
function renderSegs(id){
  var segs=$(id); segs.innerHTML='';
  for(var i=0;i<run.steps.length;i++) segs.appendChild(el('span','seg'+(i<run.i?' done':(i===run.i?' now':''))));
}
function headerText(){
  var name={story:run.chapter&&run.chapter.title,replay:'Replay · '+(run.chapter&&run.chapter.title),daily:'Daily Trial',practice:'Practice run',review:'Review',prologue:'Prologue'}[run.mode];
  return name+' · step '+(run.i+1)+' of '+run.steps.length;
}
function streakTouch(){
  var t=today(); if(S.lastPlayDate===t) return;
  var gap=S.lastPlayDate?daysBetween(S.lastPlayDate,t):null;
  if(gap===null) S.streak=1;
  else if(gap===1) S.streak+=1;
  else if(gap===2&&S.tokens>0){ S.tokens--; S.streak+=1; }
  else S.streak=1;
  if(S.streak%7===0) S.tokens=Math.min(2,S.tokens+1);
  S.lastPlayDate=t;
}

/* ---------- scenes ---------- */
function renderScene(s){
  show('scene');
  run.curScene=s; run.li=0;
  $('sc-count').textContent=headerText();
  $('sc-xp').textContent='+'+run.xp+' XP';
  renderSegs('sc-segs');
  var total=(run.region&&run.region.chapters)?run.region.chapters.length:8;
  var on=run.region?Math.round(8*prog(run.region.id).cleared.length/Math.max(1,total)):0;
  $('sc-road').innerHTML=lanterns(on,8);
  var stg=document.querySelector('#v-scene .stage')||document.querySelector('.stage');
  if(stg){ var bg=s.bg||(run.chapter&&run.chapter.bg)||''; stg.style.backgroundImage=bg?'url('+bg+')':''; stg.classList.toggle('has-bg',!!bg); }
  showLine();
}
function showLine(){
  var lines=run.curScene.lines, ln=lines[run.li], who=(ln.who||'narrator');
  var box=$('sc-box'), np=$('sc-name'), pt=$('sc-portrait');
  var ch=regionChar(run.region,who);
  if(who==='narrator'){ np.hidden=true; box.className='box narr'; }
  else {
    np.hidden=false;
    np.textContent = who==='you'?you():(who==='pulse'?'Pulse':(who==='hush'?'The Hush':(ch?ch.name:who)));
    box.className='box '+(who==='hush'?'hush':(who==='you'?'you':''));
  }
  $('sc-text').textContent=fill(ln.t);
  if(who==='pulse'){ pt.hidden=false; setArt($('sc-art'),'pulse',ln.m||'idle'); }
  else if(who==='you'){ pt.hidden=false; setArt($('sc-art'),'hero'); }
  else if(ch){ pt.hidden=false; setArt($('sc-art'),who,null,ch.color); }
  else pt.hidden=true;
  $('sc-next').textContent=(run.li===lines.length-1)?'Continue':'Next';
}
function sceneNext(){ if(run.li<run.curScene.lines.length-1){ run.li++; showLine(); } else endScene(); }
function endScene(){
  var names=[];
  (run.curScene.unlock||[]).forEach(function(id){
    var lore=(run.region&&run.region.lore)||{};
    if(lore[id]&&S.lore.indexOf(id)<0){ S.lore.push(id); names.push(lore[id].title); run.newLore.push(lore[id].title); }
  });
  if(names.length){ save(); toast('Codex updated: '+names.join(', ')); }
  advance();
}

/* ---------- cases ---------- */
function buildOptions(opts,onPick){
  var wrap=el('div','opts');
  shuffle(opts.map(function(t,i){return i;})).forEach(function(oi,pos){
    var b=el('button','opt'); b.type='button'; b.dataset.oi=oi;
    b.appendChild(el('span','k','ABCD'.charAt(pos))); b.appendChild(el('span','t',opts[oi]));
    b.addEventListener('click',function(){ onPick(b,oi); });
    wrap.appendChild(b);
  });
  return wrap;
}
function markOptions(btn,answerIdx){
  Array.prototype.forEach.call($('q-body').querySelectorAll('.opt'),function(b){
    var i=+b.dataset.oi; b.disabled=true;
    if(i===answerIdx) b.classList.add('right'); else if(b===btn) b.classList.add('wrong'); else b.classList.add('dim');
  });
}
function showNext(label,fn){ var nx=$('q-next'); nx.textContent=label; nx.hidden=false; run.onNext=fn; nx.focus(); }
function pearlNode(q){ var d=el('div','pearl'); d.appendChild(el('b',null,'Ward pearl')); d.appendChild(el('span',null,q.pearl)); return d; }
var LINES={start:['Case incoming.','Read the vitals first.','What does the story tell you?','Take a breath. Think it through.'],
  good:['That is the one.','Clean read.','Nice catch.','Exactly right.'],
  miss:['Good miss to learn from.','Close. Read the pearl.','It is queued for review.','Now you will remember it.']};
function setBubble(mood,line){ setMood('q-art',mood); if(line) $('q-bubble').textContent=line; }

function renderCase(q,r){
  show('quest');
  run.cur=q; run.answered=false; run.boss=null; run.curRegion=r;
  $('q-count').textContent=headerText();
  $('q-xp').textContent='+'+run.xp+' XP';
  renderSegs('q-segs');
  $('q-sys').textContent=r.system+' · '+r.name;
  $('q-boss').hidden=(q.type!=='boss');
  $('q-diff').textContent=dots(q.difficulty||1);
  $('q-diff').setAttribute('aria-label','Difficulty '+(q.difficulty||1)+' of 3');
  var pat=$('q-patient');
  if(q.patient){
    pat.hidden=false; var ch=regionChar(r,q.who);
    pat.innerHTML='<div class="art" id="q-pat-art"></div><div><b></b><span class="muted"></span></div>';
    pat.querySelector('b').textContent=q.patient; pat.querySelector('span').textContent=q.topic;
    setArt($('q-pat-art'),q.who||'x',null,ch&&ch.color);
  } else pat.hidden=true;
  $('q-case').textContent=fill(q.case);
  $('q-body').innerHTML='';
  var fb=$('q-feedback'); fb.innerHTML=''; fb.hidden=true;
  $('q-next').hidden=true;
  setArt($('q-art'),'pulse','idle'); setBubble('idle',pick(LINES.start));
  if(q.type==='mcq'){
    $('q-ask').textContent=q.ask;
    $('q-body').appendChild(buildOptions(q.options,answerMcq));
  } else if(q.type==='think'){
    $('q-ask').textContent=q.ask;
    var b=$('q-body');
    b.innerHTML='<label class="label" for="q-note">Think first. Type your answer (optional)</label><textarea id="q-note" placeholder="Diagnosis, next step, reasoning..."></textarea><div class="row" style="margin-top:12px"><button class="btn" id="q-reveal" type="button">Reveal answer</button></div>';
    $('q-reveal').addEventListener('click',revealThink);
  } else { run.boss={si:0,ok:0,gain:0}; renderBossStage(); }
}
function fbHead(cls,title,topic){ var h=el('div','fb-head '+cls); h.appendChild(el('span',null,title)); h.appendChild(el('span','topic',topic)); return h; }
function answerMcq(btn,oi){
  if(run.answered) return; run.answered=true;
  var q=run.cur, ok=(oi===q.answer);
  markOptions(btn,q.answer);
  var fb=$('q-feedback'); fb.innerHTML='';
  fb.appendChild(fbHead(ok?'good':'bad',ok?'Correct':'Not this time',q.topic));
  fb.appendChild(el('p',null,q.explain)); fb.appendChild(pearlNode(q)); fb.hidden=false;
  record(ok,ok?10:3);
  showNext(run.i===run.steps.length-1?'Finish':'Continue',advance);
}
function revealThink(){
  if(run.answered) return; run.answered=true;
  var q=run.cur; $('q-reveal').disabled=true; var note=$('q-note'); if(note) note.readOnly=true;
  var fb=$('q-feedback'); fb.innerHTML='';
  fb.appendChild(fbHead('','Answer',q.topic)); fb.appendChild(el('p',null,q.answer));
  var ul=el('ul'); q.points.forEach(function(p){ ul.appendChild(el('li',null,p)); }); fb.appendChild(ul);
  fb.appendChild(pearlNode(q));
  var lab=el('div','label','How did you do?'); lab.style.marginTop='16px'; fb.appendChild(lab);
  var rate=el('div','rate'), yes=el('button','btn','I had it'), no=el('button','btn ghost','Not yet');
  yes.type='button'; no.type='button'; rate.appendChild(yes); rate.appendChild(no); fb.appendChild(rate); fb.hidden=false;
  function done(ok){ yes.disabled=true; no.disabled=true; record(ok,ok?10:3); showNext(run.i===run.steps.length-1?'Finish':'Continue',advance); }
  yes.addEventListener('click',function(){ done(true); }); no.addEventListener('click',function(){ done(false); });
  yes.focus();
}
function renderBossStage(){
  var q=run.cur, b=run.boss, st=q.stages[b.si]; run.answered=false;
  $('q-ask').textContent='Stage '+(b.si+1)+' of '+q.stages.length+'. '+st.ask;
  $('q-body').innerHTML=''; $('q-feedback').hidden=true; $('q-feedback').innerHTML=''; $('q-next').hidden=true;
  $('q-body').appendChild(buildOptions(st.options,answerBoss));
}
function answerBoss(btn,oi){
  if(run.answered) return; run.answered=true;
  var q=run.cur, b=run.boss, st=q.stages[b.si], ok=(oi===st.answer);
  markOptions(btn,st.answer); b.gain+=ok?10:3; if(ok) b.ok++;
  var last=(b.si===q.stages.length-1);
  var fb=$('q-feedback'); fb.innerHTML='';
  fb.appendChild(fbHead(ok?'good':'bad',ok?'Direct hit':'Missed','Stage '+(b.si+1))); fb.appendChild(el('p',null,st.explain));
  if(last) fb.appendChild(pearlNode(q)); fb.hidden=false;
  setBubble(ok?'happy':'oops',pick(ok?LINES.good:LINES.miss));
  if(!last) showNext('Next stage',function(){ b.si++; renderBossStage(); });
  else {
    var all=(b.ok===q.stages.length);
    record(all,b.gain+(all?10:0),true);
    setBubble(all?'happy':'oops',all?'The Hall is yours.':'Bruised, but the boss falls.');
    showNext(run.i===run.steps.length-1?'Finish':'Continue',advance);
  }
}
function record(ok,baseGain,keepMood){
  var q=run.cur, half=(run.mode==='practice'||run.mode==='replay');
  var gain=half?Math.max(1,Math.floor(baseGain/2)):baseGain;
  S.xp+=gain; run.xp+=gain; run.cases++; if(ok) run.correct++;
  streakTouch();
  if(S.pearls.indexOf(q.id)<0) S.pearls.push(q.id);
  if(!half){
    var idx=S.mistakes.indexOf(q.id);
    if(ok&&idx>-1) S.mistakes.splice(idx,1);
    if(!ok&&idx===-1) S.mistakes.push(q.id);
  }
  run.results.push({q:q,ok:ok}); save();
  $('q-xp').textContent='+'+run.xp+' XP';
  if(!keepMood) setBubble(ok?'happy':'oops',pick(ok?LINES.good:LINES.miss));
}

/* ---------- results ---------- */
var nextChapter=null;
function finishRun(){
  if(run.mode==='prologue'){ S.prologue=true; save(); goWorld(); return; }
  var note='';
  nextChapter=null;
  if(run.mode==='story'){
    var p=prog(run.region.id);
    if(p.cleared.indexOf(run.chapter.id)<0){ p.cleared.push(run.chapter.id); S.xp+=30; run.xp+=30; note+='Chapter bonus of 30 XP included. '; }
    delete p.pos[run.chapter.id];
    var idx=run.region.chapters.indexOf(run.chapter);
    nextChapter=run.region.chapters[idx+1]||null;
  }
  if(run.mode==='daily'){ S.lastDailyDate=today(); S.xp+=20; run.xp+=20; note+='Daily bonus of 20 XP included. '; }
  save();
  renderResult(note);
  show('result');
  checkLevelUp();
}
function renderResult(note){
  var n=run.cases, pct=n?run.correct/n:0, story=(run.mode==='story'||run.mode==='replay');
  $('r-mode').textContent={story:'Story',replay:'Replay',daily:'Daily Trial',practice:'Practice run',review:'Review'}[run.mode];
  if(story){
    $('r-head').textContent='Chapter cleared';
    $('r-sub').textContent=run.chapter.outro||'The road ahead grows a little brighter.';
    var rp=regionProgress(run.region); $('r-lan').innerHTML=lanterns(rp.done,rp.total); $('r-lan').hidden=false;
  } else {
    $('r-head').textContent=pct>=0.8?'Strong run':(pct>=0.5?'Solid run':'Tough set');
    $('r-sub').textContent=pct>=0.8?'You read these cases well.':(pct>=0.5?'The misses are queued so you can win them back.':'Every miss is in your review queue. That is how the pearls stick.');
    $('r-lan').hidden=true;
  }
  $('r-score').textContent=run.correct+'/'+n; $('r-xp').textContent='+'+run.xp;
  $('r-level').textContent=levelInfo(S.xp).level; $('r-streak').textContent=S.streak;
  if(run.newLore.length) note+='Codex updated: '+run.newLore.join(', ')+'. ';
  if(run.mode==='practice'||run.mode==='replay') note+='Half XP, and your review queue is unchanged. ';
  if(run.mode==='review') note+='Cases you got right have left your review queue. ';
  $('r-note').textContent=note;
  $('r-next').hidden=!(nextChapter&&run.mode==='story');
  if(nextChapter) $('r-next').textContent='Next chapter';
  $('r-back').textContent=run.region&&story?'Back to region':'Back to the realm';
  var ul=$('r-list'); ul.innerHTML='';
  run.results.forEach(function(r){ var li=el('li'); li.appendChild(el('b',null,r.q.topic)); li.appendChild(el('span',r.ok?'ok':'no',r.ok?'Correct':'Review')); ul.appendChild(li); });
}
function showLevelUp(l){
  setArt($('lu-art'),'hero');
  var prev=rankFor(l-1), now=rankFor(l);
  $('lu-level').textContent='Level '+l;
  $('lu-rank').textContent=prev!==now?'New rank: '+now+'.':'Rank: '+now+'. Keep going.';
  $('lvup').hidden=false; $('lu-ok').focus();
}

/* ---------- codex ---------- */
function renderCodex(){
  var lore=$('cx-lore'); lore.innerHTML='';
  REGIONS.forEach(function(r){
    (r.loreOrder||Object.keys(r.lore||{})).forEach(function(id){
      var L=(r.lore||{})[id]; if(!L) return;
      var e=el('div','entry'+(S.lore.indexOf(id)>-1?'':' locked'));
      if(S.lore.indexOf(id)>-1){ e.appendChild(el('b',null,L.title)); e.appendChild(document.createTextNode(L.text)); }
      else { e.appendChild(el('b',null,'???')); e.appendChild(document.createTextNode('Locked. Keep playing the story.')); }
      lore.appendChild(e);
    });
  });
  var pe=$('cx-pearls'); pe.innerHTML='';
  S.pearls.forEach(function(id){ var ci=CASE_INDEX[id]; if(!ci) return; var e=el('div','entry'); e.appendChild(el('b',null,ci.c.topic)); e.appendChild(document.createTextNode(ci.c.pearl)); pe.appendChild(e); });
  if(!S.pearls.length) pe.appendChild(el('div','entry locked','No pearls yet. Open a case to collect one.'));
  show('codex');
}

/* ---------- settings ---------- */
function applySettings(){
  document.body.setAttribute('data-flavor',S.settings.flavor);
  Array.prototype.forEach.call($('ctl-flavor').querySelectorAll('button'),function(b){ b.setAttribute('aria-pressed',b.dataset.v===S.settings.flavor?'true':'false'); });
  motesState();
}
/* ---------- drifting motes ---------- */
var mc=null,mx=null,motes=[],raf=null;
function motesInit(){
  mc=$('motes'); if(!mc||!mc.getContext) return; mx=mc.getContext('2d');
  function size(){ mc.width=window.innerWidth; mc.height=window.innerHeight; }
  size(); window.addEventListener('resize',size);
  for(var i=0;i<46;i++) motes.push({x:Math.random(),y:Math.random(),r:0.8+Math.random()*2.2,s:0.02+Math.random()*0.05,p:Math.random()*6.28,k:i%5===0?2:(i%3===0?1:0)});
}
function motesTick(t){
  if(!mx) return;
  mx.clearRect(0,0,mc.width,mc.height);
  var glow=getComputedStyle(document.body).getPropertyValue('--rglow').trim()||'#FFD36B';
  var cols=[glow,'#9A7CFF','#05050F'];
  motes.forEach(function(m){
    m.y-=m.s/60; if(m.y<-0.02){ m.y=1.02; m.x=Math.random(); }
    var x=(m.x+Math.sin(t/2400+m.p)*0.012)*mc.width, y=m.y*mc.height;
    mx.fillStyle=cols[m.k]; mx.globalAlpha=(m.k===2?0.55:0.25+0.5*Math.abs(Math.sin(t/1600+m.p)));
    if(m.k===2){ mx.save(); mx.translate(x,y); mx.rotate(t/3000+m.p); mx.beginPath(); mx.moveTo(0,-m.r*3); mx.lineTo(m.r*1.4,m.r*2); mx.lineTo(-m.r*1.4,m.r*2); mx.closePath(); mx.fill(); mx.restore(); }
    else { mx.beginPath(); mx.arc(x,y,m.r,0,6.283); mx.fill(); }
  });
  raf=requestAnimationFrame(motesTick);
}
function motesState(){
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(raf){ cancelAnimationFrame(raf); raf=null; }
  if(mx&&mc) mx.clearRect(0,0,mc.width,mc.height);
  if(S.settings.flavor==='full'&&!reduce&&mx) raf=requestAnimationFrame(motesTick);
}

/* ---------- wiring ---------- */
function start(){
  motesInit(); applySettings();
  if(!S.hero) renderSelect(); else if(!S.prologue) startPrologue(); else goWorld();
}
$('pick-m').addEventListener('click',function(){ choose('m'); });
$('pick-f').addEventListener('click',function(){ choose('f'); });
$('btn-begin').addEventListener('click',beginGame);
$('brand').addEventListener('click',function(){ if(S.hero&&S.prologue) goWorld(); });
$('btn-codex').addEventListener('click',renderCodex);
$('cx-back').addEventListener('click',goWorld);
$('btn-settings').addEventListener('click',function(){ $('reset-confirm').hidden=true; $('reset-row').hidden=false; show('settings'); });
$('set-back').addEventListener('click',goWorld);
$('rg-back').addEventListener('click',goWorld);
$('btn-daily').addEventListener('click',startDaily);
$('btn-review').addEventListener('click',startReview);
$('q-next').addEventListener('click',function(){ if(run&&run.onNext) run.onNext(); });
$('sc-next').addEventListener('click',function(e){ e.stopPropagation(); sceneNext(); });
$('sc-box').addEventListener('click',sceneNext);
$('sc-box').addEventListener('keydown',function(e){ if((e.key==='Enter'||e.key===' ')&&e.target===$('sc-box')){ e.preventDefault(); sceneNext(); } });
$('sc-skip').addEventListener('click',function(e){ e.stopPropagation(); endScene(); });
$('r-back').addEventListener('click',function(){ if(run&&run.region&&(run.mode==='story'||run.mode==='replay')) goRegion(run.region.id); else goWorld(); });
$('r-next').addEventListener('click',function(){ if(nextChapter&&run&&run.region) startChapter(run.region,nextChapter); });
$('lu-ok').addEventListener('click',function(){ $('lvup').hidden=true; });
$('ctl-flavor').addEventListener('click',function(e){ var b=e.target.closest('button'); if(!b) return; S.settings.flavor=b.dataset.v; save(); applySettings(); });
$('btn-change').addEventListener('click',renderSelect);
$('btn-reset').addEventListener('click',function(){ $('reset-row').hidden=true; $('reset-confirm').hidden=false; });
$('btn-reset-no').addEventListener('click',function(){ $('reset-confirm').hidden=true; $('reset-row').hidden=false; });
$('btn-reset-yes').addEventListener('click',function(){ var keep=S.settings; S=defaults(); S.settings=keep; save(); renderSelect(); });

window.Animed.debug={state:function(){return S;},errors:ERRORS,regions:REGIONS};
start();
})();
