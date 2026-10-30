/* Effects: magnet logo, section-aware dynamic background, particle field, magnetic hover */
var MAG='<svg viewBox="0 -10 48 58" aria-hidden="true"><path class="fl" d="M12 2C10-14 38-14 36 2"/><path class="fl b" d="M12 2C14-6 34-6 36 2"/><g class="hs"><path d="M12 8v18a12 12 0 0 0 24 0V8" fill="none" stroke="#8c8189" stroke-width="9"/><path d="M12 8v9" stroke="#c1272d" stroke-width="9"/><path d="M36 8v9" stroke="#d8b36a" stroke-width="9"/><text x="12" y="6" font-size="6" fill="#fff" text-anchor="middle" font-family="sans-serif" font-weight="700">N</text><text x="36" y="6" font-size="6" fill="#fff" text-anchor="middle" font-family="sans-serif" font-weight="700">S</text></g></svg>';
document.querySelectorAll(".logo").forEach(function(l){l.innerHTML=MAG});
/* background theme follows the section crossing the viewport centre */
var TH=[["#c1272d","#6e0f1f","#d8b36a"],["#6e0f1f","#4a1a6e","#c1272d"],["#d8b36a","#8a2a1a","#3a1450"],["#4a1a6e","#c1272d","#d8b36a"]],BG=document.querySelector(".bg");
function theme(i){var t=TH[i%4];BG.style.setProperty("--c1",t[0]);BG.style.setProperty("--c2",t[1]);BG.style.setProperty("--c3",t[2])}
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)theme(+e.target.dataset.th)})},{rootMargin:"-48% 0px -48% 0px"});
document.querySelectorAll(".pg").forEach(function(p){p.querySelectorAll(".hero,.sec,.stair,.wsec").forEach(function(s,i){s.dataset.th=i;so.observe(s)})});
addEventListener("scroll",function(){BG.style.setProperty("--sy",scrollY)},{passive:true});
/* particles drawn toward the cursor */
(function(){var cv=document.getElementById("fx"),cx=cv.getContext("2d"),W,H,P=[],mx=-999,my=-999;
function sz(){W=cv.width=innerWidth;H=cv.height=innerHeight}sz();addEventListener("resize",sz);
for(var i=0;i<70;i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,s:Math.random()*1.5+.4});
addEventListener("pointermove",function(e){mx=e.clientX;my=e.clientY},{passive:true});
function draw(){cx.clearRect(0,0,W,H);P.forEach(function(p){var dx=mx-p.x,dy=my-p.y,d=Math.hypot(dx,dy)||1;
 if(d<200&&!RM){p.vx+=dx/d*.03;p.vy+=dy/d*.03;cx.strokeStyle="rgba(216,179,106,"+(1-d/200)*.35+")";cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(mx,my);cx.stroke()}
 p.vx=Math.max(-1.2,Math.min(1.2,p.vx*.99));p.vy=Math.max(-1.2,Math.min(1.2,p.vy*.99));p.x=(p.x+p.vx+W)%W;p.y=(p.y+p.vy+H)%H;
 cx.fillStyle="rgba(241,235,230,.55)";cx.beginPath();cx.arc(p.x,p.y,p.s,0,6.3);cx.fill()});if(!RM)requestAnimationFrame(draw)}draw()})();
/* magnetic pull on buttons */
var mg=null;document.addEventListener("pointermove",function(e){var t=e.target.closest&&e.target.closest(".btn,.soc a,.fl button");
 if(mg&&mg!==t){mg.style.transform="";mg=null}if(!t||RM)return;mg=t;var r=t.getBoundingClientRect();
 t.style.transform="translate("+(e.clientX-r.left-r.width/2)*.22+"px,"+(e.clientY-r.top-r.height/2)*.3+"px)"},{passive:true});
