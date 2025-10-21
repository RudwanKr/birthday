document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("startBtn");
  const welcomeScreen = document.getElementById("welcomeScreen");
  const celebrationContent = document.getElementById("celebrationContent");
  const audioControl = document.getElementById("audioControl");
  const music = document.getElementById("music");
  music.volume = 0.1;

  // Calculate age
  const birthDate = new Date("2003-10-22");
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  document.getElementById("age").innerText = age;

  // Slideshow functionality
  const slides = document.querySelectorAll(".slide");
  const slideNav = document.getElementById("slideNav");
  let currentSlide = 0;

  // Create navigation dots
  slides.forEach((slide, index) => {
    const dot = document.createElement("div");
    dot.classList.add("nav-dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    slideNav.appendChild(dot);
  });

  function goToSlide(n) {
    slides[currentSlide].classList.remove("active");
    document
      .querySelectorAll(".nav-dot")
      [currentSlide].classList.remove("active");

    currentSlide = n;

    slides[currentSlide].classList.add("active");
    document.querySelectorAll(".nav-dot")[currentSlide].classList.add("active");
  }

  // Auto-advance slides
  setInterval(() => {
    let nextSlide = (currentSlide + 1) % slides.length;
    goToSlide(nextSlide);
  }, 4000);

  // Start celebration
  startBtn.addEventListener("click", function () {
    welcomeScreen.style.display = "none";
    celebrationContent.style.display = "block";

    // Play music
    music.play();

    // Create floating elements
    createFloatingElements();
  });

  // Audio control
  let isMuted = false;
  audioControl.addEventListener("click", function () {
    if (isMuted) {
      music.play();
      // music.volume = 0.5;
      audioControl.textContent = "🔊";
      // audioControl.volume = 0.5;
      isMuted = false;
    } else {
      music.pause();
      audioControl.textContent = "🔇";
      isMuted = true;
    }
  });

  // Create floating elements (hearts, balloons, sparkles)
  function createFloatingElements() {
    const types = ["heart", "balloon", "sparkle"];
    const symbols = {
      heart: ["❤️", "💖", "💗", "💓", "💞"],
      balloon: ["🎈", "🎈", "🎈"],
      sparkle: ["✨", "🌟", "⭐"],
    };

    setInterval(() => {
      const type = types[Math.floor(Math.random() * types.length)];
      const element = document.createElement("div");
      element.classList.add("floating-element", type);

      const symbolArray = symbols[type];
      element.innerHTML =
        symbolArray[Math.floor(Math.random() * symbolArray.length)];

      element.style.left = Math.random() * 100 + "vw";
      element.style.fontSize = Math.random() * 20 + 20 + "px";
      element.style.opacity = Math.random() * 0.5 + 0.5;

      document.body.appendChild(element);

      // Remove element after animation completes (6 seconds)
      setTimeout(() => {
        if (element.parentNode) {
          element.remove();
        }
      }, 6000);
    }, 300);
  }

  // Add some interactive click effects
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn") || e.target.closest(".btn")) return;

    const x = e.clientX;
    const y = e.clientY;

    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    heart.style.fontSize = "30px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "100";
    heart.style.animation = "clickHeart 1s ease-out forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1000);
  });

  // Add the click heart animation
  const style = document.createElement("style");
  style.textContent = `
        @keyframes clickHeart {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
        }
      `;
  document.head.appendChild(style);
});

const envelopes = document.querySelectorAll(".envelope");
const fullscreenLetter = document.getElementById("fullscreenLetter");
const closeBtn = document.getElementById("closeBtn");
const letterContent = document.querySelector(".letter-content");

// Different letters for each envelope
const letters = [
  `
    <h1>Letter One ❤️</h1>
    <p>رضواني حبيبي وشخصي المفضل ♥️🥺 وكان تعرف كيف بديت نحبك حتى كلمة حبيبي بديت نحسها شوي عليك ، ومن غير مبالغة بجديات بديت نحس فيك جزء مني ونخاف عليك هلبا ونتمنى ديما نشوفك سعيد وفرحان وناجح ، تعرف انه ماعمريش فكرت إنه ف العمر هذا نفكر نحب ولا نعلق روحي بأي إنسان لاكن لما عرفتك خشيت دماغي وبديت نفكر فيك وبعدها حبيتك وكل يوم نزيد نحبك اكتر من لي قبله ♥️♥️ 
لانه  كل شي ينحب نحب روحك وطيبتك وصفاتك الكويسه كلها و انا شفت فيك هلباا حاجات حلوة ومرات حتى انت مش مركز فيهم ♥️ وحتى كان عندك صفات مش كويسه انا نحبك🥺 ونحبهم  وبديت نحس فيك نصي الثاني لي كان مفقود من كمية الراحهه والانسجام لي نحسهم لما نهدرز عليك ، واحني اليوم بالزبط سكرنا اربعه شهور مع بعض ومع ذلك نحس في روحي ليا سنين نعرفك من كتر ماتعلقت بيك نفكر فيك طول الوقت وصلت ل مرحلة الهوس 😩
،. نحبك هلبا ومش متخيله حياتي من غيرك وانا نبيك توعدني انك تقعد معاي للأبد ومش مهم عدد السنين لي ح نقعدوها بعاد على بعض اهم شي انه نقعدو نحبو وبعض وانت تقعد تحبني زي توا واكتر زي ما انا كل يوم نحبك اكثر من اليوم لي قبله وماتملش مني اهم شي 🌝♥️   لانه على قد مابديت نحبك بديت نخاف من انك تمل مني ولا تبدأ معاش تحبني 😢، هلبا مشاعر وهلبا حب ليك ولي وجودك جنبي وحتى لو كان يجمعنا شات بس لاكن وحق ربي اكتر شي يلعب ف مزاجي ومشاعري واكتر شي يأثر فيا في الدنيا ، كلامي هذا ياروحي كله من قلبي ومن وسط قلبي وبعيدا عن التعبير بالفصحى والجو لانه انا حاليا نكتب ف كل شيء في قلبي من غير تناسق ولا تفكير 🥺 ، طبعا كلامي هذا بمناسبة إنك كبرت سنه🌝 كل عام وانت بألف خير ياقلبي ينعاد عليك بالصَحة والسلامه وسنة حلوة عليك وتحقق فيها كل ماتتمنى والعقبال مِية سنة نطفوها واحني جنب بعض♥️♥️ نحببك هلبا</p>
  `,
  `
    <h1>Letter Two 💌</h1>
    <p>انت احسن حد في حياتي واكثر شخص نحبه في حياتي ومش متخيل انت قداش مانحبك وتعلقت بيك ولله هكي حبيتك انت وكل شي فيك ولله انت تستاهل كل خير لانك كويس هلباا ربي يخليك ليا يارب يارب يارب يارب يارب يارب ربي يوفقك في حياتك وينجحك ويفرحك ويبعد عليك بنات وولاد الحرام وبنطلب منك طلب ماتكلمش اي بنت غيري بالله عليك وكان يوم انت معاش تحبني او لقيت حد ثاني ابعتلي وقولي انه معاش تبيني وبس واني ديما بندعيلك زي قبل</p>

  `,
  `
    <h1>Letter Three 🌹</h1>
    <p>أنت الوجهة المُفضلة لِي قلبي ، التِي لا أخشى الرجوع عليها ، سُفني الضائعة لا ترسى الاّ على برك، ونجُومي لا تُضيء الاّ في سماءك ، وشتات قلبي لا يلتئم الا بِك  ، أخطئت يوماً وقُلت لك أنك جزءٌ منّي فالجزُء من الشيءّ يعني القلِيل منه ولاكنّي في الحقِيقة ممتلئِة بك ذلك الإمتلاء الذي ضاعت فيه هوِيتي ، ذلك الإمتلاء الذي لم يعد يتّسع لي شيء آخر ، أحببتك فنبتت بين رُوحي الزهور ، زُهوراً تُشبهك تمَاماً جذُورها مِيثاق الحب المعقُود بيننا ، مُنذ أن أحببتك قررت أن أُغيّر بعض مفاهِيم العالم ، فلمْ يعد الإنتماء بالنسبةِ لِي بلاد أو مدينة ، قد يكوُن الإنتماء شخص فإنني أنتمي إليك وأنت تنتمي إليّ ,
، شخصيّن بروح واحِدة تائهيين في هذا العالم .</p>

  `,
  `
    <h1>Letter Four 🌹</h1>
    <p>9/4/2022♡ 
،. 
هل تعرف ياعزِيري رضوان فِكرة أن تكون شخصاً لا يكترُت ب أمر أحد تفكيرك يتمحور فقط حول ذاتِك مُنشغلاً بِوقتك الفارغ الذي لا يتسع سوا لك ثم يأتي أحدا يقتحم فراغك يستقر في روحك ويسكن عقلك فـ لا  تسطيع فِعل شيئا سواء التفكِير به طوال الوقت ، تُفكر بهذا الشخص وكيف دخل حياتك وكيف بِفترةٍ قصيرة أستطاع أن يجعل رُوحك تقترن به ، هذا تحديدا ماحدث معِي منذ محادَثنا الأولى وبالرُغم بساطة الأحاديث التِي تبادلناها الأ أن تُلك المحادثه أثرها عميق داخَلي لأنها كانتِ المرة الأولى التِي شَعرت بأنك شخص مُريح، فلم إضطر  لي تصنع نمط فِي الكلام او إنتقاء المَواضيع التِي يجب أن أُخبرك بِها، فآ أنا أخبرك بكل مايخطَر على عقلِي،أحببتُ الحديث معَك تم تَعلقت به فأصبحت مُحادثك الجُزء المُحبب لِي فِي يومي ، ولي أقول لك الحقِيقة فِي بداية الأمر أكتر ماجذبني هو حديثك وأندهاشي بِفكرة الشبه بيننا ، أما الآن مايجذبني أنتَ بِكل ماتحمله حديثك وقتك أسمك شكلك تفكيرك طيبتك ، فِي المُدة السابِقة القصيرة كل ماكُنت أحاول تحديده هو مشاعَري إن كانت مُجرد لهفة أعجاب ام حقّا رغبة صادِقة ، وُكل ماتوصلت اليه أبحاثي 🌝 
هو  رغبتي فوُجودك معي ، فبُرغم أنه كُل مايجمعنا مُحادثه خلف شاشة الهاتِف الا أنها تغنيني عن وجوه البَشر الُمجتمعة فِي قارورة العالم ، ولأنها المرة الأولى التِي أكتب لك أود أن أُخبرك بأنني مُغرمة بِ صورتك فِي خيالي ، خيَالي الذي جَعل المسافة بيني وبينك صفراً ، وبالرُغم بأنه لم تسنح لي الفرصة لي تأمل عينيك الأ أنّي أستطيع رؤية إنعاكسي بِها، ولم يسبق لي بي سماع ضحكاتك الا أنّي أراهن بقدرتها على العبَث ب مزاجي ، أود أن أخبرك يارضواني بغاية امتناني لك  لجعلي أؤمن بأنه وفِي حالتي العادية وعدم محاولتي لي لفت للإنتباه هُناك من يَنتبه لِي وجودي  ، وكل ما أتمناه الأن هو أن نضل نتشارك الحدِيث ونتقاسم معاً الموُسيقى والإقتباسات والوقت والحُزن والسعَادة  أيضا فُهم يقولون أن مُقاسمة الحزن تضعفه ومشاركة الفَرح تُضاعفه ، وفِي الخُتام أريدك أن تعلم بأنك أفضل المُفضلين على هذا الكوكب وأنك تستحق الجزء الجمِيل مِن كل شيء🤍🤍🤍. 
المُخلصة لك بحُب خلود🌝</p>

  `,
  `
    <h1>from my heart 🌹</h1>
    <p>السلام عليكم ورحمة الله وبركاته،
خلود... يا نبض أملي، ويا وجهتي في هذه الحياة.
كل يوم يمضي، يزداد شوقي إليك، ويكبر بداخلي يقين اللقاء بك. لست أطلب من الحياة شيئًا أعظم من أن نجتمع يومًا، روحًا بجوار روح، وقلبًا يحتضن قلبًا. أنا مؤمن تمامًا بأن الله، الكريم الرحيم، لن يخذل أمنياتنا، كما جاء في الحديث القدسي:
"أنا عند ظن عبدي بي"
وإني – والله – أحسن الظن به، وأعلم أنه سيحقق ما نتمنى، في الوقت الذي يراه خيرًا لنا.
لكنّ الدعاء وحده لا يكفي، لذلك أسعى بكل جهدي، بكل ما أملك من طاقة وأمل، لتحقيق هذا الهدف... هدف هو أنتِ.
خلود، ها قد مرت سنة أخرى من عمرك، تكبرين فيها نورًا، وتزدادين نضجًا وجمالًا. والسنوات تمضي، لكنني أؤمن أن كل يوم يمر، هو خطوة تقرّبنا من مصيرنا المشترك.
فلا تدعي اليأس يقترب منكِ، فهذا كل ما أطلبه منكِ… الثقة، والأمل، والثبات.
أحبك من أعماق قلبي، وامتناني لا يوصف لأنك تشاركينني هذا الشعور.
كل عام وأنتِ بخير، يا من ولدت لتكوني لي ♥️
عيد ميلاد سعيد يا خلود.</p>
    <p>تحياتي لك 🌟</p>
  `,
];
// Handle each envelope
envelopes.forEach((envelope) => {
  envelope.addEventListener("click", () => {
    const letterIndex = envelope.dataset.letter;
    document.body.classList.add('no-scroll');
    // Insert correct letter content
    letterContent.innerHTML = `
      <button class="close-btn" id="closeBtn">×</button>
      ${letters[letterIndex]}
    `;

    // Reattach close button event
    const closeBtnNew = letterContent.querySelector("#closeBtn");
    closeBtnNew.addEventListener("click", closeLetter);

    // Open animation
    envelope.classList.add("open");
    createSparkles(envelope);
    setTimeout(() => {
      fullscreenLetter.style.display = "flex";
      setTimeout(() => {
        fullscreenLetter.style.opacity = "1";
        letterContent.style.transform = "scale(1)";
      }, 50);
    }, 1000);
  });
});

function closeLetter() {
  fullscreenLetter.style.opacity = "0";
  letterContent.style.transform = "scale(0.9)";
  document.body.classList.remove('no-scroll');
  setTimeout(() => {
    fullscreenLetter.style.display = "none";
    envelopes.forEach((e) => e.classList.remove("open"));
  }, 1000);
}

// Clicking outside content closes letter
fullscreenLetter.addEventListener("click", (e) => {
  if (e.target === fullscreenLetter) {
    closeLetter();
  }
});

// Sparkles around the clicked envelope
function createSparkles(envelope) {
  for (let i = 0; i < 15; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    const envelopeRect = envelope.getBoundingClientRect();
    const x = envelopeRect.left + Math.random() * envelopeRect.width;
    const y = envelopeRect.top + Math.random() * envelopeRect.height;

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    sparkle.style.animation = `sparkle ${0.5 + Math.random() * 0.5}s forwards`;

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1000);
  }
}
