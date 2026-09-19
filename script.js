
const menu=document.querySelector('.menu'), links=document.querySelector('.links');
menu?.addEventListener('click',()=>links?.classList.toggle('mobile-open'));

document.querySelectorAll('form').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const btn=form.querySelector('button[type="submit"]');
    if(!btn)return;
    const old=btn.innerHTML;
    btn.innerHTML='Enquiry received ✓';btn.disabled=true;
    setTimeout(()=>{btn.innerHTML=old;btn.disabled=false;form.reset()},2400);
  });
});

document.querySelectorAll('[data-filter]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f=btn.dataset.filter;
    document.querySelectorAll('[data-category]').forEach(card=>{
      const show=f==='all'||card.dataset.category===f;
      card.style.opacity=show?'1':'0';
      card.style.transform=show?'':'scale(.96)';
      setTimeout(()=>card.style.display=show?'':'none',show?0:220);
    });
  });
});

(function(){
 const els=document.querySelectorAll('.section-head,.service-card,.service,.card,.article-card,.split-copy,.feature-copy,.process-grid>div,.stat,.testimonial-inner,.contact-wrap>*');
 els.forEach((e,i)=>{e.classList.add('reveal');e.style.transitionDelay=Math.min((i%4)*80,280)+'ms'});
 if('IntersectionObserver' in window){
   const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.1,rootMargin:'0px 0px -30px'});
   els.forEach(e=>io.observe(e));
 }else els.forEach(e=>e.classList.add('is-visible'));
})();

(function(){
 const slider=document.querySelector('.hero-slider'); if(!slider)return;
 const slides=[...slider.querySelectorAll('.hero-slide')],dots=[...slider.querySelectorAll('.hero-dots button')];
 const prev=slider.querySelector('.hero-prev'),next=slider.querySelector('.hero-next'),count=slider.querySelector('.hero-count b');
 let current=0,timer;
 function show(i){current=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle('is-active',n===current));dots.forEach((d,n)=>d.classList.toggle('is-active',n===current));if(count)count.textContent=String(current+1).padStart(2,'0')}
 function start(){clearInterval(timer);timer=setInterval(()=>show(current+1),7200)}
 prev?.addEventListener('click',()=>{show(current-1);start()});next?.addEventListener('click',()=>{show(current+1);start()});
 dots.forEach((d,i)=>d.addEventListener('click',()=>{show(i);start()}));
 slider.addEventListener('mouseenter',()=>clearInterval(timer));slider.addEventListener('mouseleave',start);start();
})();
