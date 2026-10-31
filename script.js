// Replace this username with the course administrator's Telegram username (without @).
const TELEGRAM_USERNAME = "Shapka_Durov";

const translations = {
ru: {
nav_home:"Главная",nav_courses:"Курсы",nav_about:"О нас",nav_faq:"Вопросы",nav_cta:"Записаться",
hero_tag:"ТВОЯ ИДЕЯ. ТВОЙ КОД. ТВОЁ БУДУЩЕЕ.",hero_title:'Создавай будущее<br>с <span class="gradient-text">Python & AI</span>',hero_text:"Освой программирование с нуля и научись превращать идеи в реальные цифровые проекты. Выбери направление и начни свой путь.",hero_button:'Выбрать курс <span>↗</span>',hero_link:"Узнать о программе",proof_title:"От первой идеи до своего проекта",proof_text:"Понятный маршрут для начинающих",terminal_text:"Идея готова к запуску...",float_python:"Логика и код",float_ai:"Идеи + AI",visual_caption:"LEARN · BUILD · CREATE",hero_bottom:"ДВА НАПРАВЛЕНИЯ — ОДНА ЦЕЛЬ: СОЗДАВАТЬ",
courses_eyebrow:"НАПРАВЛЕНИЯ",courses_title:'Выбери свой <span class="gradient-text">старт</span>',courses_intro:"Два современных направления, которые помогут сделать первые шаги в мире технологий.",python_subtitle:"Научись программировать с нуля",python_desc:"Разберись в основах Python, научись писать код и создавай собственные программы шаг за шагом.",python_skill1:"Основы языка",python_skill2:"Логика и алгоритмы",python_skill3:"Практические проекты",vibe_subtitle:"Создавай проекты вместе с AI",vibe_desc:"Научись формулировать идеи, работать с AI-инструментами и собирать сайты и приложения с помощью ИИ.",vibe_skill1:"Работа с AI",vibe_skill2:"Создание сайтов",vibe_skill3:"От идеи до прототипа",course_cta:'Подробнее о курсе <span>↗</span>',combo_title:"Хочешь изучать оба направления?",combo_text:"Оставь заявку, чтобы узнать о доступных вариантах обучения.",combo_cta:'Оставить заявку <span>↗</span>',
about_eyebrow:"НАШ ПОДХОД",about_title:'Не просто изучай.<br><span class="gradient-text">Создавай.</span>',about_text:"Технологии становятся понятнее, когда ты применяешь знания на практике. Курсы помогут познакомиться с инструментами разработки и сделать первые собственные проекты.",feature1_title:"Подходит начинающим",feature1_text:"Можно начать без опыта программирования.",feature2_title:"Фокус на практике",feature2_text:"Знакомство с инструментами через реальные задачи.",feature3_title:"Современные навыки",feature3_text:"Python, AI-инструменты и цифровое творчество.",about_cta:'Узнать условия обучения <span>↗</span>',
steps_eyebrow:"КАК НАЧАТЬ",steps_title:'Твой путь начинается <span class="gradient-text">здесь</span>',steps_intro:"Всего несколько шагов отделяют тебя от знакомства с программированием.",step1_title:"Оставь заявку",step1_text:"Расскажи, какое направление тебя интересует.",step2_title:"Узнай детали",step2_text:"Получи информацию о программе и формате обучения.",step3_title:"Начни обучение",step3_text:"Занимайся в отдельном приложении и развивай навыки.",
faq_eyebrow:"FAQ",faq_title:'Есть <span class="gradient-text">вопросы?</span>',faq_lead:"Собрали ответы на то, что важно знать перед записью.",faq_q1:"Нужен ли опыт программирования?<span>+</span>",faq_a1:"Нет. Направления рассчитаны в том числе на тех, кто только начинает знакомство с программированием.",faq_q2:"Где проходят занятия?<span>+</span>",faq_a2:"Обучение проходит онлайн через отдельное приложение. Подробности сообщаются после обращения.",faq_q3:"Можно ли выбрать оба курса?<span>+</span>",faq_a3:"Да, оставь заявку и уточни, что тебя интересуют оба направления.",faq_q4:"Сколько стоит обучение?<span>+</span>",faq_a4:"Актуальную стоимость и условия можно узнать, связавшись с организаторами.",
contact_eyebrow:"СДЕЛАЙ ПЕРВЫЙ ШАГ",contact_title:'Твоя следующая<br><span class="gradient-text">глава — в коде.</span>',contact_text:"Оставь заявку, чтобы узнать подробности о курсах Python и Vibe Coding.",form_name_label:"Твоё имя",form_name_placeholder:"Например, Алекс",form_course_label:"Интересующее направление",form_both:"Оба курса",form_contact_label:"Твой Telegram или контакт",form_contact_placeholder:"@username",form_submit:"Отправить заявку",form_note:"Нажимая кнопку, ты подготовишь сообщение для отправки организатору в Telegram.",form_missing:"Заполни, пожалуйста, все поля.",form_demo:"Укажи Telegram организатора в файле script.js, чтобы включить отправку заявок.",footer_tagline:"Учись. Создавай. Развивайся.",back_top:"Наверх ↑",lab_output:"Привет, мир!",lab_eyebrow:"ЖИВОЙ ПРИМЕР",lab_title:'От идеи — к <span class="gradient-text">работающему коду.</span>',lab_text:"Посмотри, как несколько строк Python превращаются в результат.",lab_result_label:"Результат программы",lab_running:"ВЫПОЛНЯЕТСЯ",lab_success:"Выполнено успешно",counter_paths:"направления",counter_languages:"языка интерфейса",counter_goal:"цель — создавать",floating_apply:"Записаться",loader_text:"Загружаем творческую среду…",footer_note:"Образовательный проект"
},
en: {
nav_home:"Home",nav_courses:"Courses",nav_about:"About",nav_faq:"FAQ",nav_cta:"Apply",
hero_tag:"YOUR IDEA. YOUR CODE. YOUR FUTURE.",hero_title:'Build the future<br>with <span class="gradient-text">Python & AI</span>',hero_text:"Learn programming from scratch and turn ideas into real digital projects. Choose a path and start your journey.",hero_button:'Explore courses <span>↗</span>',hero_link:"Explore the approach",proof_title:"From your first idea to your own project",proof_text:"A clear path for beginners",terminal_text:"Your idea is ready to launch...",float_python:"Logic & code",float_ai:"Ideas + AI",visual_caption:"LEARN · BUILD · CREATE",hero_bottom:"TWO PATHS — ONE GOAL: CREATE",
courses_eyebrow:"LEARNING PATHS",courses_title:'Choose your <span class="gradient-text">starting point</span>',courses_intro:"Two modern learning paths to help you take your first steps in technology.",python_subtitle:"Learn to code from scratch",python_desc:"Explore Python fundamentals, learn to write code and build your own programs step by step.",python_skill1:"Language basics",python_skill2:"Logic & algorithms",python_skill3:"Practical projects",vibe_subtitle:"Build projects with AI",vibe_desc:"Learn to shape ideas, work with AI tools and create websites and apps with AI assistance.",vibe_skill1:"Working with AI",vibe_skill2:"Website creation",vibe_skill3:"Idea to prototype",course_cta:'Explore the course <span>↗</span>',combo_title:"Interested in both paths?",combo_text:"Send an enquiry to learn about available study options.",combo_cta:'Send an enquiry <span>↗</span>',
about_eyebrow:"OUR APPROACH",about_title:'Don’t just learn.<br><span class="gradient-text">Create.</span>',about_text:"Technology makes more sense when you put knowledge into practice. These courses introduce development tools and help you create your first projects.",feature1_title:"Beginner-friendly",feature1_text:"You can start with no coding experience.",feature2_title:"Practice-focused",feature2_text:"Explore tools through practical tasks.",feature3_title:"Modern skills",feature3_text:"Python, AI tools and digital creativity.",about_cta:'Ask about the courses <span>↗</span>',
steps_eyebrow:"HOW TO START",steps_title:'Your journey starts <span class="gradient-text">here</span>',steps_intro:"Just a few steps to begin exploring programming.",step1_title:"Send an enquiry",step1_text:"Tell us which learning path interests you.",step2_title:"Get the details",step2_text:"Receive information about the programme and format.",step3_title:"Start learning",step3_text:"Study in a separate app and grow your skills.",
faq_eyebrow:"FAQ",faq_title:'Got <span class="gradient-text">questions?</span>',faq_lead:"Here are a few things to know before you apply.",faq_q1:"Do I need coding experience?<span>+</span>",faq_a1:"No. These paths are suitable for people who are just starting to explore programming.",faq_q2:"Where do classes take place?<span>+</span>",faq_a2:"Learning takes place online through a separate app. Details are shared after you contact the organisers.",faq_q3:"Can I choose both courses?<span>+</span>",faq_a3:"Yes. Send an enquiry and let us know you are interested in both paths.",faq_q4:"How much does it cost?<span>+</span>",faq_a4:"Contact the organisers for current prices and study conditions.",
contact_eyebrow:"TAKE THE FIRST STEP",contact_title:'Your next chapter<br><span class="gradient-text">is in code.</span>',contact_text:"Send an enquiry to learn more about the Python and Vibe Coding courses.",form_name_label:"Your name",form_name_placeholder:"For example, Alex",form_course_label:"Course of interest",form_both:"Both courses",form_contact_label:"Your Telegram or contact",form_contact_placeholder:"@username",form_submit:"Send an enquiry",form_note:"The button prepares a message for the course organiser in Telegram.",form_missing:"Please complete all fields.",form_demo:"Add the organiser's Telegram username in script.js to enable enquiries.",footer_tagline:"Learn. Create. Grow.",back_top:"Back to top ↑",lab_output:"Hello, world!",lab_eyebrow:"LIVE CODE LAB",lab_title:'Turn an idea into <span class="gradient-text">working code.</span>',lab_text:"See how a few lines of Python become a result.",lab_result_label:"Program output",lab_running:"RUNNING",lab_success:"Executed successfully",counter_paths:"learning paths",counter_languages:"interface languages",counter_goal:"goal: create",floating_apply:"Apply",loader_text:"Preparing your creative space…",footer_note:"Educational project"
},
uz: {
nav_home:"Bosh sahifa",nav_courses:"Kurslar",nav_about:"Biz haqimizda",nav_faq:"Savollar",nav_cta:"Yozilish",
hero_tag:"SENING G‘OYANG. SENING KODING. SENING KELAJAGING.",hero_title:'Kelajakni <span class="gradient-text">Python & AI</span><br>bilan yarat',hero_text:"Dasturlashni noldan o‘rgan va g‘oyalaringni haqiqiy raqamli loyihalarga aylantir. Yo‘nalishni tanla va boshlayver.",hero_button:'Kurslarni ko‘rish <span>↗</span>',hero_link:"Dastur haqida",proof_title:"Birinchi g‘oyadan shaxsiy loyihagacha",proof_text:"Yangi boshlovchilar uchun tushunarli yo‘l",terminal_text:"G‘oya ishga tushishga tayyor...",float_python:"Mantiq va kod",float_ai:"G‘oyalar + AI",visual_caption:"O‘RGAN · YARAT · RIVOJLAN",hero_bottom:"IKKI YO‘NALISH — BITTA MAQSAD: YARATISH",
courses_eyebrow:"YO‘NALISHLAR",courses_title:'O‘z <span class="gradient-text">boshlanishingni</span> tanla',courses_intro:"Texnologiyalar olamidagi ilk qadamlarga yordam beradigan ikki zamonaviy yo‘nalish.",python_subtitle:"Dasturlashni noldan o‘rgan",python_desc:"Python asoslarini o‘rgan, kod yozishni boshlа va bosqichma-bosqich o‘z dasturlaringni yarat.",python_skill1:"Til asoslari",python_skill2:"Mantiq va algoritmlar",python_skill3:"Amaliy loyihalar",vibe_subtitle:"AI bilan loyihalar yarat",vibe_desc:"G‘oyalarni aniq ifodalashni, AI vositalaridan foydalanishni va sayt hamda ilovalar yaratishni o‘rgan.",vibe_skill1:"AI bilan ishlash",vibe_skill2:"Sayt yaratish",vibe_skill3:"G‘oyadan prototipgacha",course_cta:'Kurs haqida batafsil <span>↗</span>',combo_title:"Ikkala yo‘nalishni ham o‘rganmoqchimisan?",combo_text:"Ta’lim imkoniyatlari haqida bilish uchun ariza qoldir.",combo_cta:'Ariza qoldirish <span>↗</span>',
about_eyebrow:"BIZNING YONDASHUV",about_title:'Faqat o‘rganma.<br><span class="gradient-text">Yarat.</span>',about_text:"Bilimlarni amalda qo‘llaganingda texnologiyalar yanada tushunarli bo‘ladi. Kurslar dasturlash vositalari bilan tanishishga va ilk loyihalaringni yaratishga yordam beradi.",feature1_title:"Yangi boshlovchilar uchun",feature1_text:"Dasturlash tajribasisiz ham boshlash mumkin.",feature2_title:"Amaliyotga e’tibor",feature2_text:"Vositalarni amaliy vazifalar orqali o‘rganish.",feature3_title:"Zamonaviy ko‘nikmalar",feature3_text:"Python, AI vositalari va raqamli ijod.",about_cta:'Ta’lim shartlarini bilish <span>↗</span>',
steps_eyebrow:"QANDAY BOSHLASH",steps_title:'Sening yo‘ling <span class="gradient-text">shu yerdan</span> boshlanadi',steps_intro:"Dasturlash bilan tanishish uchun bir necha oddiy qadam.",step1_title:"Ariza qoldir",step1_text:"Qaysi yo‘nalish qiziqtirishini yoz.",step2_title:"Batafsil ma’lumot ol",step2_text:"Dastur va ta’lim formati haqida bilib ol.",step3_title:"O‘qishni boshla",step3_text:"Alohida ilovada o‘qib, ko‘nikmalaringni rivojlantir.",
faq_eyebrow:"FAQ",faq_title:'Savollaring <span class="gradient-text">bormi?</span>',faq_lead:"Yozilishdan oldin bilish kerak bo‘lgan savollarga javoblar.",faq_q1:"Dasturlash tajribasi kerakmi?<span>+</span>",faq_a1:"Yo‘q. Yo‘nalishlar dasturlashni endi o‘rganayotganlar uchun ham mos.",faq_q2:"Darslar qayerda bo‘ladi?<span>+</span>",faq_a2:"Ta’lim alohida ilova orqali onlayn o‘tkaziladi. Batafsil ma’lumot murojaatdan so‘ng beriladi.",faq_q3:"Ikkala kursni ham tanlash mumkinmi?<span>+</span>",faq_a3:"Ha. Ariza qoldirib, ikkala yo‘nalish ham qiziqtirishini yoz.",faq_q4:"Kurs narxi qancha?<span>+</span>",faq_a4:"Amaldagi narx va shartlarni tashkilotchilar bilan bog‘lanib bilib olishing mumkin.",
contact_eyebrow:"BIRINCHI QADAMNI TASHLA",contact_title:'Keyingi sahifang<br><span class="gradient-text">kodda yoziladi.</span>',contact_text:"Python va Vibe Coding kurslari haqida batafsil ma’lumot olish uchun ariza qoldir.",form_name_label:"Isming",form_name_placeholder:"Masalan, Alex",form_course_label:"Qiziqtirgan yo‘nalish",form_both:"Ikkala kurs",form_contact_label:"Telegram yoki kontakting",form_contact_placeholder:"@username",form_submit:"Ariza yuborish",form_note:"Tugma tashkilotchiga Telegram orqali yuborish uchun xabar tayyorlaydi.",form_missing:"Iltimos, barcha maydonlarni to‘ldir.",form_demo:"Arizalarni yuborishni yoqish uchun script.js faylida tashkilotchining Telegram username'ini kiriting.",footer_tagline:"O‘rgan. Yarat. Rivojlan.",back_top:"Yuqoriga ↑",lab_output:"Salom, dunyo!",lab_eyebrow:"JONLI KOD NAMUNASI",lab_title:'G‘oyadan <span class="gradient-text">ishlaydigan kodgacha.</span>',lab_text:"Bir nechta Python qatori qanday natija berishini ko‘r.",lab_result_label:"Dastur natijasi",lab_running:"ISHLAMOQDA",lab_success:"Muvaffaqiyatli bajarildi",counter_paths:"yo‘nalish",counter_languages:"interfeys tili",counter_goal:"maqsad — yaratish",floating_apply:"Yozilish",loader_text:"Ijodiy muhit yuklanmoqda…",footer_note:"Ta’lim loyihasi"
}
};

function setLanguage(lang) {
  const dict = translations[lang] || translations.ru;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });
  try { localStorage.setItem("pva-language", lang); } catch (_) {}
}
const languageSelect = document.getElementById("languageSelect");
let savedLanguage = "ru"; try { savedLanguage = localStorage.getItem("pva-language") || "ru"; } catch (_) {}
languageSelect.value = savedLanguage;
setLanguage(savedLanguage);
languageSelect.addEventListener("change", e => setLanguage(e.target.value));

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));


document.getElementById("leadForm").addEventListener("submit", event => {
  event.preventDefault();
  const dict = translations[languageSelect.value] || translations.ru;
  const name = document.getElementById("studentName").value.trim();
  const course = document.getElementById("courseChoice").value;
  const contact = document.getElementById("contactInfo").value.trim();
  const status = document.getElementById("formStatus");
  if (!name || !contact) {
    status.textContent = dict.form_missing;
    return;
  }
  if (TELEGRAM_USERNAME === "YOUR_TELEGRAM_USERNAME") {
    status.textContent = dict.form_demo;
    return;
  }
  const message = `Здравствуйте! Хочу узнать о курсе.\nИмя: ${name}\nНаправление: ${course}\nМой контакт: ${contact}`;
  const url = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
  status.textContent = "Telegram откроется в новой вкладке. Отправь подготовленное сообщение.";
});
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll reveals: content enters smoothly as the visitor moves down the page.
const revealTargets = document.querySelectorAll('.section-heading,.course-card,.combo-banner,.about-art,.about-copy,.step,.faq-grid > div,.contact-panel,.visual-strip-copy,.visual-tile,.outcomes-panel');
revealTargets.forEach((el,index)=>{el.classList.add('reveal');if(el.matches('.about-art,.faq-grid > div:first-child'))el.classList.add('reveal-left');if(el.matches('.about-copy,.faq-grid > div:last-child'))el.classList.add('reveal-right');if(el.classList.contains('course-card')||el.classList.contains('step')||el.classList.contains('visual-tile'))el.style.transitionDelay=`${(index%3)*90}ms`;});
if('IntersectionObserver' in window){const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}}),{threshold:.12,rootMargin:'0px 0px -35px 0px'});revealTargets.forEach(el=>revealObserver.observe(el));}else revealTargets.forEach(el=>el.classList.add('is-visible'));
const cursorGlow=document.getElementById('cursorGlow');window.addEventListener('pointermove',event=>{if(cursorGlow&&event.pointerType==='mouse'){cursorGlow.style.left=`${event.clientX}px`;cursorGlow.style.top=`${event.clientY}px`;}},{passive:true});
// Low-cost neon particles and connecting lines.
(()=>{const canvas=document.getElementById('particles');if(!canvas)return;const ctx=canvas.getContext('2d');if(!ctx)return;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;let w=0,h=0,dots=[],raf=0;function resize(){const dpr=Math.min(window.devicePixelRatio||1,1.6);w=innerWidth;h=innerHeight;canvas.width=Math.floor(w*dpr);canvas.height=Math.floor(h*dpr);canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0);dots=Array.from({length:Math.min(65,Math.floor(w*h/22000))},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.6+.4,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,a:Math.random()*.4+.12,hue:Math.random()>.5?255:195}));}function draw(){ctx.clearRect(0,0,w,h);dots.forEach((p,i)=>{if(!reduced){p.x+=p.vx;p.y+=p.vy;}if(p.x<0)p.x=w;if(p.x>w)p.x=0;if(p.y<0)p.y=h;if(p.y>h)p.y=0;ctx.beginPath();ctx.fillStyle=`hsla(${p.hue},100%,78%,${p.a})`;ctx.shadowBlur=9;ctx.shadowColor=`hsla(${p.hue},100%,65%,.5)`;ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;for(let j=i+1;j<dots.length;j++){const q=dots[j],dx=p.x-q.x,dy=p.y-q.y,dist=Math.sqrt(dx*dx+dy*dy);if(dist<105){ctx.beginPath();ctx.strokeStyle=`rgba(132,128,255,${(1-dist/105)*.09})`;ctx.lineWidth=.6;ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke();}}});if(!reduced)raf=requestAnimationFrame(draw);}resize();draw();addEventListener('resize',()=>{cancelAnimationFrame(raf);resize();draw();},{passive:true});})();


// Feature pack: loader, animated code demo, counters, accordion, 3D tilt and quick navigation.
(() => {
  const loader = document.getElementById('pageLoader');
  const hideLoader = () => { if (loader) { loader.classList.add('loader-hidden'); setTimeout(() => loader.remove(), 650); } };
  window.addEventListener('load', hideLoader, { once: true });
  setTimeout(hideLoader, 1800);
  const output = document.getElementById('labOutput');
  const lab = document.getElementById('labEditor');
  if (output && lab) {
    const finalText = output.textContent; output.textContent = ''; let typed = false;
    const typeOutput = () => { if (typed) return; typed = true;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { output.textContent = finalText; return; }
      let i = 0; const timer = setInterval(() => { output.textContent = finalText.slice(0, ++i); if (i >= finalText.length) clearInterval(timer); }, 75);
    };
    if ('IntersectionObserver' in window) { const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { typeOutput(); obs.disconnect(); } }), { threshold: .35 }); obs.observe(lab); } else typeOutput();
  }
  const counters = document.querySelectorAll('[data-count]');
  const runCounter = el => { const target = Number(el.dataset.count || 0); if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = target; return; }
    const start = performance.now(), duration = 850; const tick = now => { const p = Math.min((now-start)/duration,1); el.textContent = Math.round(target*(1-Math.pow(1-p,3))); if (p<1) requestAnimationFrame(tick); }; requestAnimationFrame(tick); };
  if (counters.length) { if ('IntersectionObserver' in window) { const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { runCounter(e.target); obs.unobserve(e.target); } }), { threshold:.6 }); counters.forEach(el => obs.observe(el)); } else counters.forEach(runCounter); }
  document.querySelectorAll('.faq-list details').forEach(detail => detail.addEventListener('toggle', () => { if (detail.open) document.querySelectorAll('.faq-list details').forEach(other => { if (other !== detail) other.open = false; }); }));
  const canTilt = window.matchMedia('(hover: hover) and (pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (canTilt) document.querySelectorAll('.course-card, .visual-tile, .lab-editor').forEach(card => {
    card.addEventListener('pointermove', e => { const r=card.getBoundingClientRect(), x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height; card.style.setProperty('--tilt-x', `${(0.5-y)*5}deg`); card.style.setProperty('--tilt-y', `${(x-0.5)*7}deg`); card.classList.add('tilting'); });
    card.addEventListener('pointerleave', () => { card.classList.remove('tilting'); card.style.removeProperty('--tilt-x'); card.style.removeProperty('--tilt-y'); });
  });
  const backTop=document.getElementById('backToTop'), floatingApply=document.getElementById('floatingApply');
  const updateScrollControls=()=>{const visible=window.scrollY>450;if(backTop)backTop.classList.toggle('is-visible',visible);if(floatingApply)floatingApply.classList.toggle('is-visible',visible);};
  window.addEventListener('scroll',updateScrollControls,{passive:true});updateScrollControls();
  if(backTop)backTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));
  document.querySelectorAll('[data-course]').forEach(link=>link.addEventListener('click',()=>{const select=document.getElementById('courseChoice');if(select&&link.dataset.course)select.value=link.dataset.course;}));
})();
