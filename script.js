const languages = {
  en: "English",
  ar: "العربية",
  hi: "हिन्दी",
  ko: "한국어",
  ja: "日本語",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
};

const translations = {
  en: {
    navHome: "Home",
    navCheck: "Performance Check",
    navResults: "Results",
    navHow: "How It Works",
    navGames: "Supported Games",
    navBottleneck: "Bottleneck",
    languageLabel: "Language",
    eyebrow: "AI gamer assistant",
    heroTitle: "Can Your PC Run This Game?",
    heroSubtitle: "AI-powered performance check for PC gamers.",
    startBtn: "Start Performance Check",
    demoBtn: "Try sample specs",
    quickStat: "Quick insight",
    quickCaption: "Typical range for mid-tier GPUs at 1080p.",
    instant: "Instant guidance → better performance",
    formEyebrow: "Performance check",
    formTitle: "Enter your specs",
    formSubtitle: "Choose your game and hardware to get personalized recommendations.",
    gameLabel: "Game Title",
    cpuLabel: "CPU",
    gpuLabel: "GPU",
    ramLabel: "RAM",
    resLabel: "Resolution",
    targetLabel: "Target",
    targetBalanced: "Balanced visuals",
    targetFPS: "I want 60+ FPS",
    targetQuality: "I want High graphics",
    submitBtn: "Check Performance",
    resultEyebrow: "Your insights",
    resultTitle: "Performance results",
    resultSubtitle:
      "Verdicts, FPS ranges, and recommended settings update instantly after you submit the form.",
    resultHero: "Latest verdict",
    navContact: "Contact",
    fpsTitle: "Estimated FPS",
    settingsTitle: "Recommended settings",
    upgradeTitle: "Upgrade suggestions",
    howEyebrow: "How it works",
    howTitle: "Input → Analyze → Result",
    howStep1Title: "Tell us your setup",
    howStep1Text: "Select your CPU, GPU, RAM, resolution, and target.",
    howStep2Title: "We score it",
    howStep2Text: "We compare your hardware against curated game requirements.",
    howStep3Title: "Get guidance",
    howStep3Text: "Receive FPS ranges, settings, and upgrade tips instantly.",
    supportEyebrow: "Popular titles",
    supportTitle: "Optimized for top games",
    bottleneckEyebrow: "Fine-tune your build",
    bottleneckTitle: "Bottleneck calculator",
    bottleneckSubtitle: "Find the limiting part of your rig and see how much performance is being held back.",
    bottleneckBtn: "Check bottleneck",
    bottleneckResult: "Result",
    bottleneckHint: "CPU/GPU balance is shown for your chosen resolution and RAM.",
    footerAbout: "About",
    footerPrivacy: "Privacy",
    footerTerms: "Terms",
    footerNote:
      "© 2025 RunForPlay. All rights reserved. Made in Saudi Arabia 🇸🇦 — تم صنع الموقع من قبل 5wkw (أو أبو زهره)",
    verdictPlayable: "✅ Playable",
    verdictBorderline: "⚠️ Barely Playable",
    verdictNo: "❌ Not Recommended",
    detailGood: "Great match for smooth gameplay.",
    detailOkay: "Use low to medium settings for stable play.",
    detailLow: "Consider lowering resolution or upgrading GPU/CPU.",
    disclaimer: "Note: These results are AI-based estimates. Real performance may vary depending on drivers, game patches, cooling, and background apps.",
  },
  ar: {
    navHome: "الرئيسية",
    navCheck: "فحص الأداء",
    navResults: "النتائج",
    navHow: "كيف يعمل",
    navGames: "الألعاب المدعومة",
    navContact: "تواصل",
    navBottleneck: "عنق الزجاجة",
    languageLabel: "اللغة",
    eyebrow: "مساعد الألعاب بالذكاء الاصطناعي",
    heroTitle: "هل يمكن لجهازك تشغيل هذه اللعبة؟",
    heroSubtitle: "فحص أداء مدعوم بالذكاء الاصطناعي للاعبين على الحاسب.",
    startBtn: "ابدأ الفحص",
    demoBtn: "تجربة المواصفات",
    quickStat: "نظرة سريعة",
    quickCaption: "نطاق معتاد لبطاقات الرسوميات المتوسطة على 1080p.",
    instant: "إرشاد فوري → أداء أفضل",
    formEyebrow: "فحص الأداء",
    formTitle: "أدخل مواصفاتك",
    formSubtitle: "اختر لعبتك ومواصفات جهازك للحصول على توصيات مخصصة.",
    gameLabel: "عنوان اللعبة",
    cpuLabel: "المعالج",
    gpuLabel: "بطاقة الرسوميات",
    ramLabel: "الذاكرة",
    resLabel: "الدقة",
    targetLabel: "الهدف",
    targetBalanced: "جودة متوازنة",
    targetFPS: "أريد 60 إطارًا+",
    targetQuality: "أريد جودة عالية",
    submitBtn: "تحقق من الأداء",
    resultEyebrow: "نتيجتك",
    resultTitle: "نتائج الأداء",
    resultSubtitle: "يتم تحديث الحكم ونطاق الإطارات والإعدادات مباشرة بعد إرسال النموذج.",
    resultHero: "آخر حكم",
    fpsTitle: "معدل الإطارات المتوقع",
    settingsTitle: "الإعدادات المقترحة",
    upgradeTitle: "اقتراحات الترقية",
    howEyebrow: "كيف يعمل",
    howTitle: "إدخال → تحليل → نتيجة",
    howStep1Title: "أخبرنا بمواصفاتك",
    howStep1Text: "اختر المعالج والبطاقة والذاكرة والدقة والهدف.",
    howStep2Title: "نقيم الأداء",
    howStep2Text: "نقارن العتاد بمتطلبات الألعاب المنسقة.",
    howStep3Title: "نقدم الإرشاد",
    howStep3Text: "نعرض نطاق الإطارات والإعدادات ونصائح الترقية فورًا.",
    supportEyebrow: "ألعاب شهيرة",
    supportTitle: "محسّن لأهم الألعاب",
    bottleneckEyebrow: "اضبط توازنك",
    bottleneckTitle: "حاسبة عنق الزجاجة",
    bottleneckSubtitle: "اكتشف المكوّن الذي يحد من الأداء والنسبة التقريبية للتأثير.",
    bottleneckBtn: "تحقق من عنق الزجاجة",
    bottleneckResult: "النتيجة",
    bottleneckHint: "يُعرض توازن المعالج والبطاقة بناءً على الدقة والذاكرة التي اخترتها.",
    footerAbout: "حول",
    footerPrivacy: "الخصوصية",
    footerTerms: "الشروط",
    footerNote:
      "© 2025 RunForPlay. All rights reserved. Made in Saudi Arabia 🇸🇦 — تم صنع الموقع من قبل 5wkw (أو أبو زهره)",
    verdictPlayable: "✅ قابل للعب",
    verdictBorderline: "⚠️ بالكاد قابل للعب",
    verdictNo: "❌ غير موصى به",
    detailGood: "مناسب لسلاسة عالية.",
    detailOkay: "استخدم إعدادات منخفضة إلى متوسطة للثبات.",
    detailLow: "خفّض الدقة أو قم بترقية البطاقة/المعالج.",
    disclaimer: "ملاحظة: النتائج تقديرية بالذكاء الاصطناعي. الأداء الفعلي قد يختلف حسب التعريفات وتحديثات اللعبة والتبريد والبرامج الخلفية.",
  },
  hi: {
    navHome: "होम",
    navCheck: "परफॉर्मेंस चेक",
    navResults: "रिजल्ट्स",
    navHow: "यह कैसे काम करता है",
    navGames: "सपोर्टेड गेम्स",
    navContact: "संपर्क",
    navBottleneck: "बॉटलनेक",
    languageLabel: "भाषा",
    eyebrow: "एआई गेमर सहायक",
    heroTitle: "क्या आपका पीसी यह गेम चला सकता है?",
    heroSubtitle: "पीसी गेमर्स के लिए एआई-समर्थित प्रदर्शन जांच।",
    startBtn: "परफॉर्मेंस चेक शुरू करें",
    demoBtn: "नमूना स्पेक्स आज़माएं",
    quickStat: "त्वरित जानकारी",
    quickCaption: "1080p पर मध्यम जीपीयू के लिए सामान्य रेंज।",
    instant: "तुरंत मार्गदर्शन → बेहतर प्रदर्शन",
    formEyebrow: "परफॉर्मेंस चेक",
    formTitle: "अपनी स्पेक्स दर्ज करें",
    formSubtitle: "अपना गेम और हार्डवेयर चुनें और निजी सुझाव पाएं।",
    gameLabel: "गेम शीर्षक",
    cpuLabel: "सीपीयू",
    gpuLabel: "जीपीयू",
    ramLabel: "रैम",
    resLabel: "रिज़ॉल्यूशन",
    targetLabel: "लक्ष्य",
    targetBalanced: "संतुलित विजुअल्स",
    targetFPS: "मुझे 60+ FPS चाहिए",
    targetQuality: "मुझे हाई ग्राफ़िक्स चाहिए",
    submitBtn: "परफॉर्मेंस जांचें",
    resultEyebrow: "आपकी जानकारी",
    resultTitle: "परफॉर्मेंस परिणाम",
    resultSubtitle: "फॉर्म सबमिट करते ही निर्णय, FPS और सेटिंग्स अपडेट हो जाते हैं।",
    resultHero: "नवीनतम निर्णय",
    fpsTitle: "अनुमानित FPS",
    settingsTitle: "सुझाए गए सेटिंग्स",
    upgradeTitle: "अपग्रेड सुझाव",
    howEyebrow: "कैसे काम करता है",
    howTitle: "इनपुट → विश्लेषण → परिणाम",
    howStep1Title: "अपनी सेटअप बताएं",
    howStep1Text: "सीपीयू, जीपीयू, रैम, रिज़ॉल्यूशन और लक्ष्य चुनें।",
    howStep2Title: "हम स्कोर करते हैं",
    howStep2Text: "हम आपके हार्डवेयर की तुलना गेम आवश्यकताओं से करते हैं।",
    howStep3Title: "मार्गदर्शन पाएं",
    howStep3Text: "FPS रेंज, सेटिंग्स और अपग्रेड टिप्स तुरंत पाएं।",
    supportEyebrow: "लोकप्रिय गेम्स",
    supportTitle: "टॉप गेम्स के लिए अनुकूल",
    bottleneckEyebrow: "अपनी बिल्ड संतुलित करें",
    bottleneckTitle: "बॉटलनेक कैलकुलेटर",
    bottleneckSubtitle: "जानें कौन सा पार्ट प्रदर्शन को रोक रहा है और कितना।",
    bottleneckBtn: "बॉटलनेक जांचें",
    bottleneckResult: "परिणाम",
    bottleneckHint: "चयनित रिज़ॉल्यूशन और रैम के आधार पर CPU/GPU संतुलन दिखाया गया है।",
    footerAbout: "अबाउट",
    footerPrivacy: "प्राइवेसी",
    footerTerms: "टर्म्स",
    footerNote:
      "© 2025 RunForPlay. All rights reserved. Made in Saudi Arabia 🇸🇦 — تم صنع الموقع من قبل 5wkw (أو أبو زهره)",
    verdictPlayable: "✅ खेलने योग्य",
    verdictBorderline: "⚠️ मुश्किल से खेलने योग्य",
    verdictNo: "❌ अनुशंसित नहीं",
    detailGood: "स्मूद गेमप्ले के लिए अच्छा मेल।",
    detailOkay: "स्थिर खेलने के लिए लो से मीडियम सेटिंग्स रखें।",
    detailLow: "रिज़ॉल्यूशन घटाएँ या GPU/CPU अपग्रेड करें।",
    disclaimer: "नोट: ये परिणाम एआई अनुमान हैं। वास्तविक प्रदर्शन ड्राइवर, गेम अपडेट, कूलिंग और बैकग्राउंड ऐप्स पर निर्भर हो सकता है।",
  },
  ko: {
    navHome: "홈",
    navCheck: "성능 체크",
    navResults: "결과",
    navHow: "작동 방식",
    navGames: "지원 게임",
    navContact: "문의",
    navBottleneck: "병목",
    languageLabel: "언어",
    eyebrow: "AI 게이머 어시스턴트",
    heroTitle: "내 PC로 이 게임을 실행할 수 있을까?",
    heroSubtitle: "PC 게이머를 위한 AI 기반 성능 체크.",
    startBtn: "성능 체크 시작",
    demoBtn: "샘플 사양 사용",
    quickStat: "빠른 인사이트",
    quickCaption: "1080p 중급 GPU의 일반적인 범위.",
    instant: "즉시 가이드 → 더 나은 성능",
    formEyebrow: "성능 체크",
    formTitle: "사양을 입력하세요",
    formSubtitle: "게임과 하드웨어를 선택해 맞춤 추천을 받으세요.",
    gameLabel: "게임 제목",
    cpuLabel: "CPU",
    gpuLabel: "GPU",
    ramLabel: "RAM",
    resLabel: "해상도",
    targetLabel: "목표",
    targetBalanced: "균형 잡힌 비주얼",
    targetFPS: "60+ FPS 원함",
    targetQuality: "고화질 원함",
    submitBtn: "성능 확인",
    resultEyebrow: "인사이트",
    resultTitle: "성능 결과",
    resultSubtitle: "폼 제출 후 즉시 판정, FPS 범위, 추천 설정이 업데이트됩니다.",
    resultHero: "최신 판정",
    fpsTitle: "예상 FPS",
    settingsTitle: "권장 설정",
    upgradeTitle: "업그레이드 제안",
    howEyebrow: "작동 방식",
    howTitle: "입력 → 분석 → 결과",
    howStep1Title: "셋업 입력",
    howStep1Text: "CPU, GPU, RAM, 해상도, 목표를 선택하세요.",
    howStep2Title: "점수 계산",
    howStep2Text: "큐레이션된 게임 요구사항과 비교합니다.",
    howStep3Title: "가이드 제공",
    howStep3Text: "FPS 범위, 설정, 업그레이드 팁을 즉시 제공합니다.",
    supportEyebrow: "인기 게임",
    supportTitle: "주요 게임에 최적화",
    bottleneckEyebrow: "밸런스 확인",
    bottleneckTitle: "병목 계산기",
    bottleneckSubtitle: "어떤 부품이 성능을 제한하는지와 대략적인 영향도를 확인하세요.",
    bottleneckBtn: "병목 확인",
    bottleneckResult: "결과",
    bottleneckHint: "선택한 해상도와 RAM 기준으로 CPU/GPU 밸런스를 표시합니다.",
    footerAbout: "소개",
    footerPrivacy: "개인정보",
    footerTerms: "이용약관",
    footerNote:
      "© 2025 RunForPlay. All rights reserved. Made in Saudi Arabia 🇸🇦 — تم صنع الموقع من قبل 5wkw (أو أبو زهره)",
    verdictPlayable: "✅ 원활한 플레이",
    verdictBorderline: "⚠️ 간신히 플레이 가능",
    verdictNo: "❌ 권장하지 않음",
    detailGood: "부드러운 플레이에 충분합니다.",
    detailOkay: "안정성을 위해 낮음~중간 설정을 사용하세요.",
    detailLow: "해상도를 낮추거나 GPU/CPU 업그레이드를 고려하세요.",
    disclaimer: "참고: 결과는 AI 기반 추정치입니다. 실제 성능은 드라이버, 게임 업데이트, 냉각, 백그라운드 앱에 따라 달라질 수 있습니다.",
  },
  ja: {
    navHome: "ホーム",
    navCheck: "性能チェック",
    navResults: "結果",
    navHow: "仕組み",
    navGames: "対応ゲーム",
    navContact: "お問い合わせ",
    navBottleneck: "ボトルネック",
    languageLabel: "言語",
    eyebrow: "AIゲーマーアシスタント",
    heroTitle: "あなたのPCはこのゲームを動かせますか？",
    heroSubtitle: "PCゲーマーのためのAI性能チェック。",
    startBtn: "パフォーマンスチェックを開始",
    demoBtn: "サンプルスペックを試す",
    quickStat: "クイックインサイト",
    quickCaption: "1080pのミドルGPUで一般的な範囲。",
    instant: "即時ガイド → より良いパフォーマンス",
    formEyebrow: "性能チェック",
    formTitle: "スペックを入力",
    formSubtitle: "ゲームとハードウェアを選び、最適な推奨を受け取る。",
    gameLabel: "ゲームタイトル",
    cpuLabel: "CPU",
    gpuLabel: "GPU",
    ramLabel: "メモリ",
    resLabel: "解像度",
    targetLabel: "目標",
    targetBalanced: "バランス重視",
    targetFPS: "60FPS以上希望",
    targetQuality: "高画質希望",
    submitBtn: "性能を確認",
    resultEyebrow: "インサイト",
    resultTitle: "パフォーマンス結果",
    resultSubtitle: "送信後すぐに判定・FPSレンジ・推奨設定が更新されます。",
    resultHero: "最新の判定",
    fpsTitle: "推定FPS",
    settingsTitle: "推奨設定",
    upgradeTitle: "アップグレード提案",
    howEyebrow: "仕組み",
    howTitle: "入力 → 解析 → 結果",
    howStep1Title: "セットアップ入力",
    howStep1Text: "CPU・GPU・メモリ・解像度・目標を選択。",
    howStep2Title: "スコア算出",
    howStep2Text: "厳選したゲーム要件と比較します。",
    howStep3Title: "ガイド提供",
    howStep3Text: "FPS範囲、設定、アップグレードのヒントを即時表示。",
    supportEyebrow: "人気タイトル",
    supportTitle: "主要ゲームに最適化",
    bottleneckEyebrow: "バランスを確認",
    bottleneckTitle: "ボトルネック計算機",
    bottleneckSubtitle: "どのパーツが性能を抑えているかと影響度を確認します。",
    bottleneckBtn: "ボトルネックを確認",
    bottleneckResult: "結果",
    bottleneckHint: "選択した解像度とメモリに基づきCPU/GPUバランスを表示します。",
    footerAbout: "概要",
    footerPrivacy: "プライバシー",
    footerTerms: "利用規約",
    footerNote:
      "© 2025 RunForPlay. All rights reserved. Made in Saudi Arabia 🇸🇦 — تم صنع الموقع من قبل 5wkw (أو أبو زهره)",
    verdictPlayable: "✅ プレイ可能",
    verdictBorderline: "⚠️ ぎりぎりプレイ可能",
    verdictNo: "❌ 推奨されません",
    detailGood: "快適に遊べる構成です。",
    detailOkay: "安定のため低～中設定を推奨。",
    detailLow: "解像度を下げるかGPU/CPUアップグレードを検討してください。",
    disclaimer: "注意: これはAIによる推定です。実際の性能はドライバー、ゲーム更新、冷却、バックグラウンドアプリに左右されます。",
  },
  es: {
    navHome: "Inicio",
    navCheck: "Chequeo de rendimiento",
    navResults: "Resultados",
    navHow: "Cómo funciona",
    navGames: "Juegos compatibles",
    navContact: "Contacto",
    navBottleneck: "Cuello de botella",
    languageLabel: "Idioma",
    eyebrow: "Asistente gamer con IA",
    heroTitle: "¿Puede tu PC correr este juego?",
    heroSubtitle: "Chequeo de rendimiento con IA para gamers de PC.",
    startBtn: "Iniciar revisión",
    demoBtn: "Probar ejemplo",
    quickStat: "Vista rápida",
    quickCaption: "Rango típico para GPUs medias en 1080p.",
    instant: "Guía al instante → mejor rendimiento",
    formEyebrow: "Chequeo de rendimiento",
    formTitle: "Ingresa tus especificaciones",
    formSubtitle: "Elige tu juego y hardware para recibir recomendaciones personalizadas.",
    gameLabel: "Título del juego",
    cpuLabel: "CPU",
    gpuLabel: "GPU",
    ramLabel: "RAM",
    resLabel: "Resolución",
    targetLabel: "Objetivo",
    targetBalanced: "Visuales balanceados",
    targetFPS: "Quiero 60+ FPS",
    targetQuality: "Quiero gráficos altos",
    submitBtn: "Verificar rendimiento",
    resultEyebrow: "Tus insights",
    resultTitle: "Resultados de rendimiento",
    resultSubtitle: "Tras enviar el formulario, verás al instante el veredicto, FPS y ajustes sugeridos.",
    resultHero: "Veredicto más reciente",
    fpsTitle: "FPS estimados",
    settingsTitle: "Ajustes recomendados",
    upgradeTitle: "Sugerencias de mejora",
    howEyebrow: "Cómo funciona",
    howTitle: "Entrada → Análisis → Resultado",
    howStep1Title: "Cuéntanos tu equipo",
    howStep1Text: "Selecciona CPU, GPU, RAM, resolución y objetivo.",
    howStep2Title: "Lo evaluamos",
    howStep2Text: "Comparamos tu hardware con requisitos curados.",
    howStep3Title: "Obtén guía",
    howStep3Text: "Recibe FPS estimados, ajustes y mejoras al instante.",
    supportEyebrow: "Títulos populares",
    supportTitle: "Optimizado para juegos top",
    bottleneckEyebrow: "Equilibra tu build",
    bottleneckTitle: "Calculadora de cuello de botella",
    bottleneckSubtitle: "Descubre qué parte limita el rendimiento y el porcentaje aproximado.",
    bottleneckBtn: "Comprobar cuello de botella",
    bottleneckResult: "Resultado",
    bottleneckHint: "El balance CPU/GPU se muestra según tu resolución y RAM.",
    footerAbout: "Acerca de",
    footerPrivacy: "Privacidad",
    footerTerms: "Términos",
    footerNote:
      "© 2025 RunForPlay. All rights reserved. Made in Saudi Arabia 🇸🇦 — تم صنع الموقع من قبل 5wkw (أو أبو زهره)",
    verdictPlayable: "✅ Jugable",
    verdictBorderline: "⚠️ Apenas jugable",
    verdictNo: "❌ No recomendado",
    detailGood: "Buena combinación para jugar fluido.",
    detailOkay: "Usa ajustes bajos a medios para mayor estabilidad.",
    detailLow: "Baja la resolución o mejora GPU/CPU.",
    disclaimer: "Nota: Estos resultados son estimaciones con IA. El rendimiento real puede variar según drivers, actualizaciones, refrigeración y apps en segundo plano.",
  },
  fr: {
    navHome: "Accueil",
    navCheck: "Vérif. performance",
    navResults: "Résultats",
    navHow: "Fonctionnement",
    navGames: "Jeux pris en charge",
    navContact: "Contact",
    navBottleneck: "Goulot",
    languageLabel: "Langue",
    eyebrow: "Assistant gamer IA",
    heroTitle: "Votre PC peut-il faire tourner ce jeu ?",
    heroSubtitle: "Vérification de performance par IA pour les joueurs PC.",
    startBtn: "Lancer le test",
    demoBtn: "Essayer un exemple",
    quickStat: "Aperçu rapide",
    quickCaption: "Plage typique pour GPU milieu de gamme en 1080p.",
    instant: "Guide instantané → meilleur rendu",
    formEyebrow: "Test de performance",
    formTitle: "Entrez vos specs",
    formSubtitle: "Choisissez votre jeu et votre matériel pour des recommandations personnalisées.",
    gameLabel: "Titre du jeu",
    cpuLabel: "CPU",
    gpuLabel: "GPU",
    ramLabel: "RAM",
    resLabel: "Résolution",
    targetLabel: "Objectif",
    targetBalanced: "Visuels équilibrés",
    targetFPS: "Je veux 60+ FPS",
    targetQuality: "Je veux des graphismes élevés",
    submitBtn: "Vérifier",
    resultEyebrow: "Vos insights",
    resultTitle: "Résultats de performance",
    resultSubtitle: "Après l'envoi, le verdict, la plage FPS et les réglages se mettent à jour aussitôt.",
    resultHero: "Dernier verdict",
    fpsTitle: "FPS estimés",
    settingsTitle: "Paramètres conseillés",
    upgradeTitle: "Suggestions d'upgrade",
    howEyebrow: "Fonctionnement",
    howTitle: "Entrée → Analyse → Résultat",
    howStep1Title: "Décrivez votre config",
    howStep1Text: "Sélectionnez CPU, GPU, RAM, résolution et objectif.",
    howStep2Title: "Nous notons",
    howStep2Text: "Nous comparons votre matériel aux exigences des jeux.",
    howStep3Title: "Recevez les conseils",
    howStep3Text: "FPS, réglages et upgrades instantanés.",
    supportEyebrow: "Titres populaires",
    supportTitle: "Optimisé pour les jeux phares",
    bottleneckEyebrow: "Équilibrez votre build",
    bottleneckTitle: "Calculateur de goulot d'étranglement",
    bottleneckSubtitle: "Identifiez la pièce limitante et l'impact approximatif sur les performances.",
    bottleneckBtn: "Vérifier le goulot",
    bottleneckResult: "Résultat",
    bottleneckHint: "L'équilibre CPU/GPU est basé sur votre résolution et RAM.",
    footerAbout: "À propos",
    footerPrivacy: "Confidentialité",
    footerTerms: "Conditions",
    footerNote:
      "© 2025 RunForPlay. All rights reserved. Made in Saudi Arabia 🇸🇦 — تم صنع الموقع من قبل 5wkw (أو أبو زهره)",
    verdictPlayable: "✅ Jouable",
    verdictBorderline: "⚠️ À peine jouable",
    verdictNo: "❌ Non recommandé",
    detailGood: "Parfait pour un jeu fluide.",
    detailOkay: "Utilise des réglages bas à moyens pour la stabilité.",
    detailLow: "Baisse la résolution ou améliore GPU/CPU.",
    disclaimer: "Remarque : résultats estimés par IA. Les performances réelles varient selon les pilotes, mises à jour, refroidissement et applications en arrière-plan.",
  },
  de: {
    navHome: "Start",
    navCheck: "Performance-Check",
    navResults: "Ergebnisse",
    navHow: "So funktioniert's",
    navGames: "Unterstützte Spiele",
    navContact: "Kontakt",
    navBottleneck: "Flaschenhals",
    languageLabel: "Sprache",
    eyebrow: "KI-Gamer-Assistent",
    heroTitle: "Kann dein PC dieses Spiel ausführen?",
    heroSubtitle: "KI-gestützter Performance-Check für PC-Gamer.",
    startBtn: "Performance-Check starten",
    demoBtn: "Beispiel testen",
    quickStat: "Schneller Einblick",
    quickCaption: "Typischer Bereich für Mittelklasse-GPUs bei 1080p.",
    instant: "Sofortige Hinweise → bessere Leistung",
    formEyebrow: "Performance-Check",
    formTitle: "Gib deine Specs ein",
    formSubtitle: "Wähle Spiel und Hardware für personalisierte Empfehlungen.",
    gameLabel: "Spieltitel",
    cpuLabel: "CPU",
    gpuLabel: "GPU",
    ramLabel: "RAM",
    resLabel: "Auflösung",
    targetLabel: "Ziel",
    targetBalanced: "Ausgewogene Grafik",
    targetFPS: "Ich will 60+ FPS",
    targetQuality: "Ich will hohe Grafik",
    submitBtn: "Performance prüfen",
    resultEyebrow: "Deine Insights",
    resultTitle: "Performance-Ergebnisse",
    resultSubtitle: "Nach dem Absenden werden Urteil, FPS-Bereich und Empfehlungen sofort aktualisiert.",
    resultHero: "Neuester Befund",
    fpsTitle: "Geschätzte FPS",
    settingsTitle: "Empfohlene Einstellungen",
    upgradeTitle: "Upgrade-Vorschläge",
    howEyebrow: "So funktioniert's",
    howTitle: "Input → Analyse → Ergebnis",
    howStep1Title: "Setup angeben",
    howStep1Text: "CPU, GPU, RAM, Auflösung und Ziel wählen.",
    howStep2Title: "Wir bewerten",
    howStep2Text: "Wir vergleichen deine Hardware mit Spiele-Anforderungen.",
    howStep3Title: "Erhalte Guidance",
    howStep3Text: "FPS-Bereich, Einstellungen und Upgrade-Tipps sofort.",
    supportEyebrow: "Beliebte Titel",
    supportTitle: "Optimiert für Top-Spiele",
    bottleneckEyebrow: "Balance prüfen",
    bottleneckTitle: "Flaschenhals-Rechner",
    bottleneckSubtitle: "Finde das limitierende Teil und den ungefähren Einfluss auf die Leistung.",
    bottleneckBtn: "Flaschenhals prüfen",
    bottleneckResult: "Ergebnis",
    bottleneckHint: "CPU/GPU-Balance wird basierend auf Auflösung und RAM gezeigt.",
    footerAbout: "Über uns",
    footerPrivacy: "Datenschutz",
    footerTerms: "Bedingungen",
    footerNote:
      "© 2025 RunForPlay. All rights reserved. Made in Saudi Arabia 🇸🇦 — تم صنع الموقع من قبل 5wkw (أو أبو زهره)",
    verdictPlayable: "✅ Spielbar",
    verdictBorderline: "⚠️ Kaum spielbar",
    verdictNo: "❌ Nicht empfohlen",
    detailGood: "Gut für flüssiges Gameplay.",
    detailOkay: "Nutze niedrige bis mittlere Settings für Stabilität.",
    detailLow: "Reduziere die Auflösung oder rüste GPU/CPU auf.",
    disclaimer: "Hinweis: Ergebnisse sind KI-Schätzungen. Tatsächliche Leistung variiert je nach Treibern, Updates, Kühlung und Hintergrundprogrammen.",
  },
};

let softPalette = null;

function hslToHex(h, s, l) {
  const a = s / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l / 100 - a * Math.max(Math.min(k - 3, 9 - k, 1), -1) / 2;
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function generateSoftPalette() {
  const hue = Math.floor(Math.random() * 360);
  const color1 = hslToHex(hue, 48, 84);
  const color2 = hslToHex((hue + 42) % 360, 44, 82);
  return { soft1: color1, soft2: color2 };
}

const cpus = [
  { id: "i3-6100", label: "Intel i3-6100", score: 220 },
  { id: "i3-8100", label: "Intel i3-8100", score: 260 },
  { id: "i3-10100", label: "Intel i3-10100", score: 320 },
  { id: "i3-12100", label: "Intel i3-12100", score: 430 },
  { id: "i3-14100", label: "Intel i3-14100", score: 470 },
  { id: "i5-4460", label: "Intel i5-4460", score: 260 },
  { id: "i5-6500", label: "Intel i5-6500", score: 340 },
  { id: "i5-8400", label: "Intel i5-8400", score: 410 },
  { id: "i5-9400F", label: "Intel i5-9400F", score: 430 },
  { id: "i5-10400F", label: "Intel i5-10400F", score: 520 },
  { id: "i5-11400F", label: "Intel i5-11400F", score: 590 },
  { id: "i5-12400F", label: "Intel i5-12400F", score: 680 },
  { id: "i5-13400F", label: "Intel i5-13400F", score: 740 },
  { id: "i5-14400F", label: "Intel i5-14400F", score: 770 },
  { id: "i7-4790K", label: "Intel i7-4790K", score: 400 },
  { id: "i7-7700K", label: "Intel i7-7700K", score: 520 },
  { id: "i7-8700K", label: "Intel i7-8700K", score: 640 },
  { id: "i7-9700K", label: "Intel i7-9700K", score: 700 },
  { id: "i7-10700K", label: "Intel i7-10700K", score: 740 },
  { id: "i7-11700K", label: "Intel i7-11700K", score: 780 },
  { id: "i7-12700K", label: "Intel i7-12700K", score: 850 },
  { id: "i7-13700K", label: "Intel i7-13700K", score: 930 },
  { id: "i7-14700K", label: "Intel i7-14700K", score: 960 },
  { id: "i9-9900K", label: "Intel i9-9900K", score: 760 },
  { id: "i9-10900K", label: "Intel i9-10900K", score: 820 },
  { id: "i9-11900K", label: "Intel i9-11900K", score: 860 },
  { id: "i9-12900K", label: "Intel i9-12900K", score: 930 },
  { id: "i9-13900K", label: "Intel i9-13900K", score: 980 },
  { id: "i9-14900K", label: "Intel i9-14900K", score: 990 },
  { id: "r3-1200", label: "AMD Ryzen 3 1200", score: 200 },
  { id: "r3-3100", label: "AMD Ryzen 3 3100", score: 300 },
  { id: "r3-3300x", label: "AMD Ryzen 3 3300X", score: 360 },
  { id: "r5-2600", label: "AMD Ryzen 5 2600", score: 420 },
  { id: "r5-3600", label: "AMD Ryzen 5 3600", score: 520 },
  { id: "r5-5600", label: "AMD Ryzen 5 5600", score: 600 },
  { id: "r5-5600x", label: "AMD Ryzen 5 5600X", score: 640 },
  { id: "r5-7600", label: "AMD Ryzen 5 7600", score: 720 },
  { id: "r5-7600x", label: "AMD Ryzen 5 7600X", score: 760 },
  { id: "r7-3700x", label: "AMD Ryzen 7 3700X", score: 620 },
  { id: "r7-5800X", label: "AMD Ryzen 7 5800X", score: 760 },
  { id: "r7-5800x3d", label: "AMD Ryzen 7 5800X3D", score: 880 },
  { id: "r7-7700x", label: "AMD Ryzen 7 7700X", score: 860 },
  { id: "r7-7800x3d", label: "AMD Ryzen 7 7800X3D", score: 980 },
  { id: "r9-5900x", label: "AMD Ryzen 9 5900X", score: 860 },
  { id: "r9-7900x", label: "AMD Ryzen 9 7900X", score: 950 },
  { id: "r9-7950x", label: "AMD Ryzen 9 7950X", score: 990 },
];

const gpus = [
  { id: "gtx-750", label: "NVIDIA GTX 750", score: 170 },
  { id: "gtx-960", label: "NVIDIA GTX 960", score: 260 },
  { id: "gtx-970", label: "NVIDIA GTX 970", score: 340 },
  { id: "gtx-980", label: "NVIDIA GTX 980", score: 420 },
  { id: "gtx-980ti", label: "NVIDIA GTX 980 Ti", score: 470 },
  { id: "gtx-1050", label: "NVIDIA GTX 1050", score: 260 },
  { id: "gtx-1050ti", label: "NVIDIA GTX 1050 Ti", score: 290 },
  { id: "gtx-1060", label: "NVIDIA GTX 1060", score: 360 },
  { id: "gtx-1070", label: "NVIDIA GTX 1070", score: 460 },
  { id: "gtx-1080", label: "NVIDIA GTX 1080", score: 540 },
  { id: "gtx-1080ti", label: "NVIDIA GTX 1080 Ti", score: 620 },
  { id: "gtx-1650", label: "NVIDIA GTX 1650", score: 340 },
  { id: "gtx-1660", label: "NVIDIA GTX 1660", score: 400 },
  { id: "gtx-1660s", label: "NVIDIA GTX 1660 Super", score: 430 },
  { id: "gtx-1660ti", label: "NVIDIA GTX 1660 Ti", score: 450 },
  { id: "rtx-2060", label: "NVIDIA RTX 2060", score: 520 },
  { id: "rtx-2060s", label: "NVIDIA RTX 2060 Super", score: 560 },
  { id: "rtx-2070", label: "NVIDIA RTX 2070", score: 610 },
  { id: "rtx-2070s", label: "NVIDIA RTX 2070 Super", score: 650 },
  { id: "rtx-2080", label: "NVIDIA RTX 2080", score: 700 },
  { id: "rtx-2080s", label: "NVIDIA RTX 2080 Super", score: 740 },
  { id: "rtx-2080ti", label: "NVIDIA RTX 2080 Ti", score: 800 },
  { id: "rtx-3050", label: "NVIDIA RTX 3050", score: 540 },
  { id: "rtx-3060", label: "NVIDIA RTX 3060", score: 660 },
  { id: "rtx-3060ti", label: "NVIDIA RTX 3060 Ti", score: 720 },
  { id: "rtx-3070", label: "NVIDIA RTX 3070", score: 780 },
  { id: "rtx-3070ti", label: "NVIDIA RTX 3070 Ti", score: 820 },
  { id: "rtx-3080", label: "NVIDIA RTX 3080", score: 900 },
  { id: "rtx-3080ti", label: "NVIDIA RTX 3080 Ti", score: 940 },
  { id: "rtx-3090", label: "NVIDIA RTX 3090", score: 980 },
  { id: "rtx-3090ti", label: "NVIDIA RTX 3090 Ti", score: 1000 },
  { id: "rtx-4050", label: "NVIDIA RTX 4050", score: 600 },
  { id: "rtx-4060", label: "NVIDIA RTX 4060", score: 720 },
  { id: "rtx-4060ti", label: "NVIDIA RTX 4060 Ti", score: 780 },
  { id: "rtx-4070", label: "NVIDIA RTX 4070", score: 880 },
  { id: "rtx-4070ti", label: "NVIDIA RTX 4070 Ti", score: 940 },
  { id: "rtx-4080", label: "NVIDIA RTX 4080", score: 1020 },
  { id: "rtx-4090", label: "NVIDIA RTX 4090", score: 1100 },
  { id: "rtx-4090d", label: "NVIDIA RTX 4090D", score: 1080 },
  { id: "rtx-5070", label: "NVIDIA RTX 5070", score: 980 },
  { id: "rtx-5080", label: "NVIDIA RTX 5080", score: 1120 },
  { id: "rtx-5090", label: "NVIDIA RTX 5090", score: 1180 },
  { id: "rx-550", label: "AMD RX 550", score: 180 },
  { id: "rx-560", label: "AMD RX 560", score: 230 },
  { id: "rx-570", label: "AMD RX 570", score: 280 },
  { id: "rx-580", label: "AMD RX 580", score: 330 },
  { id: "rx-590", label: "AMD RX 590", score: 360 },
  { id: "rx-5500xt", label: "AMD RX 5500 XT", score: 420 },
  { id: "rx-5600xt", label: "AMD RX 5600 XT", score: 520 },
  { id: "rx-5700xt", label: "AMD RX 5700 XT", score: 660 },
  { id: "rx-6600", label: "AMD RX 6600", score: 560 },
  { id: "rx-6600xt", label: "AMD RX 6600 XT", score: 620 },
  { id: "rx-6650xt", label: "AMD RX 6650 XT", score: 660 },
  { id: "rx-6700", label: "AMD RX 6700", score: 680 },
  { id: "rx-6700xt", label: "AMD RX 6700 XT", score: 720 },
  { id: "rx-6750xt", label: "AMD RX 6750 XT", score: 760 },
  { id: "rx-6800", label: "AMD RX 6800", score: 840 },
  { id: "rx-6800xt", label: "AMD RX 6800 XT", score: 900 },
  { id: "rx-6900xt", label: "AMD RX 6900 XT", score: 960 },
  { id: "rx-7600", label: "AMD RX 7600", score: 720 },
  { id: "rx-7700xt", label: "AMD RX 7700 XT", score: 840 },
  { id: "rx-7800xt", label: "AMD RX 7800 XT", score: 920 },
  { id: "rx-7900xt", label: "AMD RX 7900 XT", score: 980 },
  { id: "rx-7900xtx", label: "AMD RX 7900 XTX", score: 1040 },
  { id: "intel-xe", label: "Intel Iris Xe", score: 190 },
  { id: "intel-uhd", label: "Intel UHD", score: 120 },
];

const games = [
  {
    id: "fortnite",
    name: "Fortnite",
    cpuMin: 220,
    cpuRec: 420,
    gpuMin: 220,
    gpuRec: 420,
    ramMin: 8,
    ramRec: 16,
  },
  {
    id: "valorant",
    name: "Valorant",
    cpuMin: 180,
    cpuRec: 300,
    gpuMin: 160,
    gpuRec: 300,
    ramMin: 4,
    ramRec: 8,
  },
  {
    id: "gta-v",
    name: "GTA V",
    cpuMin: 300,
    cpuRec: 520,
    gpuMin: 260,
    gpuRec: 520,
    ramMin: 8,
    ramRec: 16,
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk 2077",
    cpuMin: 520,
    cpuRec: 800,
    gpuMin: 520,
    gpuRec: 860,
    ramMin: 16,
    ramRec: 32,
  },
  {
    id: "apex",
    name: "Apex Legends",
    cpuMin: 320,
    cpuRec: 520,
    gpuMin: 320,
    gpuRec: 520,
    ramMin: 8,
    ramRec: 16,
  },
  {
    id: "cs2",
    name: "Counter-Strike 2",
    cpuMin: 220,
    cpuRec: 420,
    gpuMin: 220,
    gpuRec: 420,
    ramMin: 8,
    ramRec: 16,
  },
  {
    id: "warzone",
    name: "Call of Duty: Warzone",
    cpuMin: 520,
    cpuRec: 780,
    gpuMin: 520,
    gpuRec: 820,
    ramMin: 16,
    ramRec: 24,
  },
  {
    id: "helldivers2",
    name: "Helldivers 2",
    cpuMin: 540,
    cpuRec: 820,
    gpuMin: 560,
    gpuRec: 900,
    ramMin: 16,
    ramRec: 24,
  },
  {
    id: "bops6",
    name: "Call of Duty: Black Ops 6",
    cpuMin: 560,
    cpuRec: 820,
    gpuMin: 560,
    gpuRec: 880,
    ramMin: 16,
    ramRec: 24,
  },
  {
    id: "bops7",
    name: "Call of Duty: Black Ops 7",
    cpuMin: 600,
    cpuRec: 880,
    gpuMin: 620,
    gpuRec: 940,
    ramMin: 16,
    ramRec: 24,
  },
  {
    id: "the-finals",
    name: "The Finals",
    cpuMin: 420,
    cpuRec: 680,
    gpuMin: 520,
    gpuRec: 820,
    ramMin: 12,
    ramRec: 16,
  },
  {
    id: "palworld",
    name: "Palworld",
    cpuMin: 360,
    cpuRec: 620,
    gpuMin: 360,
    gpuRec: 700,
    ramMin: 12,
    ramRec: 16,
  },
  {
    id: "overwatch2",
    name: "Overwatch 2",
    cpuMin: 320,
    cpuRec: 520,
    gpuMin: 320,
    gpuRec: 540,
    ramMin: 8,
    ramRec: 16,
  },
  {
    id: "lol",
    name: "League of Legends",
    cpuMin: 140,
    cpuRec: 260,
    gpuMin: 140,
    gpuRec: 240,
    ramMin: 4,
    ramRec: 8,
  },
  {
    id: "ow-r6",
    name: "Rainbow Six Siege",
    cpuMin: 280,
    cpuRec: 460,
    gpuMin: 260,
    gpuRec: 480,
    ramMin: 8,
    ramRec: 16,
  },
  {
    id: "hogwarts",
    name: "Hogwarts Legacy",
    cpuMin: 520,
    cpuRec: 820,
    gpuMin: 520,
    gpuRec: 880,
    ramMin: 16,
    ramRec: 24,
  },
  {
    id: "bg3",
    name: "Baldur's Gate 3",
    cpuMin: 420,
    cpuRec: 640,
    gpuMin: 420,
    gpuRec: 700,
    ramMin: 12,
    ramRec: 16,
  },
  {
    id: "forza5",
    name: "Forza Horizon 5",
    cpuMin: 420,
    cpuRec: 700,
    gpuMin: 420,
    gpuRec: 760,
    ramMin: 12,
    ramRec: 16,
  },
  {
    id: "rdr2",
    name: "Red Dead Redemption 2",
    cpuMin: 520,
    cpuRec: 820,
    gpuMin: 520,
    gpuRec: 880,
    ramMin: 16,
    ramRec: 24,
  },
  {
    id: "bf2042",
    name: "Battlefield 2042",
    cpuMin: 520,
    cpuRec: 820,
    gpuMin: 520,
    gpuRec: 860,
    ramMin: 16,
    ramRec: 24,
  },
  {
    id: "minecraft",
    name: "Minecraft (RTX)",
    cpuMin: 200,
    cpuRec: 380,
    gpuMin: 220,
    gpuRec: 600,
    ramMin: 8,
    ramRec: 16,
  },
  {
    id: "pubg",
    name: "PUBG: Battlegrounds",
    cpuMin: 360,
    cpuRec: 620,
    gpuMin: 360,
    gpuRec: 640,
    ramMin: 8,
    ramRec: 16,
  },
  {
    id: "elden-ring",
    name: "Elden Ring",
    cpuMin: 420,
    cpuRec: 620,
    gpuMin: 420,
    gpuRec: 680,
    ramMin: 12,
    ramRec: 16,
  },
  {
    id: "starfield",
    name: "Starfield",
    cpuMin: 620,
    cpuRec: 900,
    gpuMin: 620,
    gpuRec: 980,
    ramMin: 16,
    ramRec: 24,
  },
];

const gameThemes = {
  default: { primary: "#50e3c2", secondary: "#a855f7" },
  fortnite: { primary: "#7c5dff", secondary: "#1ec9ff" },
  valorant: { primary: "#ff4654", secondary: "#0f1823" },
  "gta-v": { primary: "#6dd3a3", secondary: "#0f1a1c" },
  cyberpunk: { primary: "#f5d000", secondary: "#0c1014" },
  apex: { primary: "#d62839", secondary: "#0b1320" },
  cs2: { primary: "#f5a623", secondary: "#0c1624" },
  warzone: { primary: "#00c2ff", secondary: "#0b1723" },
  helldivers2: { primary: "#ffd580", secondary: "#0f1b29" },
  bops6: { primary: "#ff7a00", secondary: "#0f0f10" },
  bops7: { primary: "#9e1b32", secondary: "#0b0c10" },
  "the-finals": { primary: "#ff5c8d", secondary: "#0d1325" },
  palworld: { primary: "#8fd3ff", secondary: "#0d1822" },
  overwatch2: { primary: "#f99e1a", secondary: "#0f1624" },
  lol: { primary: "#0bc6a0", secondary: "#0b1420" },
  "ow-r6": { primary: "#00c3ff", secondary: "#0c1a25" },
  hogwarts: { primary: "#d8b586", secondary: "#0f121c" },
  bg3: { primary: "#f5c87c", secondary: "#0f1722" },
  forza5: { primary: "#ff4f7b", secondary: "#0d1524" },
  rdr2: { primary: "#c93c3c", secondary: "#0f0f14" },
  bf2042: { primary: "#35f0d0", secondary: "#0a1a19" },
  minecraft: { primary: "#7ac943", secondary: "#0d1612" },
  pubg: { primary: "#f5b126", secondary: "#0f141d" },
  "elden-ring": { primary: "#9fb25b", secondary: "#0a0f0c" },
  starfield: { primary: "#78a0ff", secondary: "#0d1020" },
};

const resolutions = {
  720: 0.85,
  1080: 1,
  1440: 1.25,
  2160: 1.6,
};

const targets = {
  balanced: 1,
  fps: 1.1,
  quality: 0.9,
};

const settingsTemplates = {
  low: [
    "Resolution: 1280×720",
    "Graphics Preset: Low",
    "Textures: Low",
    "Shadows: Off",
    "Anti-aliasing: Off",
    "Post-processing: Low",
    "V-Sync: Off",
  ],
  medium: [
    "Resolution: 1920×1080",
    "Graphics Preset: Medium",
    "Textures: Medium",
    "Shadows: Low",
    "Anti-aliasing: Medium",
    "Post-processing: Low",
    "V-Sync: Off",
  ],
  high: [
    "Resolution: 2560×1440",
    "Graphics Preset: High",
    "Textures: High",
    "Shadows: Medium",
    "Anti-aliasing: High",
    "Post-processing: Medium",
    "V-Sync: Adaptive",
  ],
};

let lastInput = null;

function populateOptions() {
  const cpuSelect = document.getElementById("cpu");
  const gpuSelect = document.getElementById("gpu");
  const bnCpuSelect = document.getElementById("bn-cpu");
  const bnGpuSelect = document.getElementById("bn-gpu");
  const gameOptions = document.getElementById("gameOptions");
  const gameTags = document.getElementById("gameTags");

  cpus.forEach((cpu) => {
    const opt = document.createElement("option");
    opt.value = cpu.id;
    opt.textContent = cpu.label;
    cpuSelect.appendChild(opt);

    if (bnCpuSelect) {
      const bnOpt = document.createElement("option");
      bnOpt.value = cpu.id;
      bnOpt.textContent = cpu.label;
      bnCpuSelect.appendChild(bnOpt);
    }
  });

  gpus.forEach((gpu) => {
    const opt = document.createElement("option");
    opt.value = gpu.id;
    opt.textContent = gpu.label;
    gpuSelect.appendChild(opt);

    if (bnGpuSelect) {
      const bnOpt = document.createElement("option");
      bnOpt.value = gpu.id;
      bnOpt.textContent = gpu.label;
      bnGpuSelect.appendChild(bnOpt);
    }
  });

  games.forEach((game) => {
    const opt = document.createElement("option");
    opt.value = game.name;
    gameOptions.appendChild(opt);

    const tag = document.createElement("div");
    tag.className = "chip";
    tag.textContent = game.name;
    gameTags.appendChild(tag);
  });
}

function applyTranslations(lang = "en") {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (value) {
      el.textContent = value;
    }
  });

  document.getElementById("disclaimer").textContent = dict.disclaimer;
}

function applyGameTheme(gameId) {
  const theme = gameThemes[gameId] || gameThemes.default;
  const root = document.documentElement;
  root.style.setProperty("--theme-1", theme.primary);
  root.style.setProperty("--theme-2", theme.secondary);
  root.style.setProperty("--accent", theme.primary);
  root.style.setProperty("--accent-2", theme.secondary);
  applyBackgroundMood(theme);
}

function applyBackgroundMood(theme) {
  if (!softPalette) return;
  const paletteTheme = theme || gameThemes.default;
  const root = document.documentElement;
  const softBase = `color-mix(in srgb, ${softPalette.soft1} 35%, #0f1526)`;
  root.style.setProperty("--bg", softBase);
  root.style.setProperty(
    "--bg-soft-1",
    `color-mix(in srgb, ${paletteTheme.primary} 22%, ${softPalette.soft1})`
  );
  root.style.setProperty(
    "--bg-soft-2",
    `color-mix(in srgb, ${paletteTheme.secondary} 20%, ${softPalette.soft2})`
  );
}

function setupLanguages() {
  const langSelect = document.getElementById("language");
  Object.entries(languages).forEach(([code, label]) => {
    const opt = document.createElement("option");
    opt.value = code;
    opt.textContent = label;
    langSelect.appendChild(opt);
  });

  langSelect.value = "en";
  applyTranslations("en");

  langSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    applyTranslations(lang);
    if (lastInput) {
      const result = computePerformance(lastInput, lang);
      renderResults(result, lang);
    }
    const bnForm = document.getElementById("bottleneckForm");
    if (bnForm) {
      const bnResult = computeBottleneck(
        {
          cpuId: bnForm["bn-cpu"].value || cpus[0].id,
          gpuId: bnForm["bn-gpu"].value || gpus[0].id,
          ram: Number(bnForm["bn-ram"].value) || 16,
          resolution: bnForm["bn-resolution"].value || "1080",
        },
        lang
      );
      renderBottleneck(bnResult, lang);
    }
  });
}

function findByLabel(collection, label) {
  return collection.find((item) => item.label.toLowerCase() === label.toLowerCase());
}

function findById(collection, id) {
  return collection.find((item) => item.id === id);
}

function computePerformance(input, language = "en") {
  const dict = translations[language] || translations.en;
  const game =
    games.find((g) => g.name.toLowerCase() === input.game.toLowerCase()) || games[0];
  const cpu = findById(cpus, input.cpuId) || cpus[0];
  const gpu = findById(gpus, input.gpuId) || gpus[0];
  const resFactor = resolutions[input.resolution] || 1;
  const targetFactor = targets[input.target] || 1;

  const cpuFactor = cpu.score / game.cpuRec;
  const gpuFactor = gpu.score / game.gpuRec;
  const ramFactor = input.ram / game.ramRec;

  const balanceScore =
    (Math.min(cpuFactor, gpuFactor) * 0.65 + Math.min(cpuFactor, ramFactor) * 0.35) /
    resFactor *
    targetFactor;
  const headroom = Math.min(Math.max(cpuFactor, gpuFactor), 1.8);
  const performanceScore = balanceScore * (0.7 + headroom * 0.35);

  let verdictKey = "verdictPlayable";
  let detail = dict.detailGood;
  if (performanceScore < 0.65 || input.ram < game.ramMin) {
    verdictKey = "verdictNo";
    detail = dict.detailLow;
  } else if (performanceScore < 0.95) {
    verdictKey = "verdictBorderline";
    detail = dict.detailOkay;
  } else {
    verdictKey = "verdictPlayable";
    detail = dict.detailGood;
  }

  const baseFps = 90;
  const fpsEstimate = Math.max(20, Math.round(baseFps * performanceScore + 70));
  const spread = Math.max(10, Math.round(fpsEstimate * 0.14));
  const fpsRange = `${Math.max(12, fpsEstimate - spread)}–${fpsEstimate + spread} FPS`;

  let settingsProfile = "medium";
  if (performanceScore < 0.85) settingsProfile = "low";
  if (performanceScore > 1.25) settingsProfile = "high";

  const upgrades = [];
  if (gpu.score < game.gpuRec * 0.9) {
    upgrades.push(
      `GPU is near minimum for ${game.name}. Consider at least ${suggestGpu(game.gpuRec)} for smoother play.`
    );
  }
  if (cpu.score < game.cpuRec * 0.9) {
    upgrades.push(
      `CPU could bottleneck heavy scenes. A stronger option like ${suggestCpu(game.cpuRec)} will help.`
    );
  }
  if (input.ram < game.ramRec) {
    upgrades.push("Upgrade RAM to meet recommended capacity and reduce stutter.");
  }
  if (!upgrades.length) upgrades.push("Your build is well balanced—keep drivers updated for best results.");

  return {
    verdict: dict[verdictKey],
    verdictDetail: detail,
    fpsRange,
    fpsDetail: `${game.name} @ ${input.resolution}p (${settingsProfile} settings)`,
    settings: settingsTemplates[settingsProfile],
    upgrades,
  };
}

function computeBottleneck(input, language = "en") {
  const dict = translations[language] || translations.en;
  const cpu = findById(cpus, input.cpuId) || cpus[0];
  const gpu = findById(gpus, input.gpuId) || gpus[0];
  const resFactor = resolutions[input.resolution] || 1;
  const ram = Number(input.ram) || 16;

  const ramAssist = 1 + Math.min(0.12, (ram - 16) / 160);
  const cpuEffective = cpu.score * ramAssist;
  const gpuEffective = gpu.score / resFactor;

  const higher = Math.max(cpuEffective, gpuEffective);
  const lower = Math.max(1, Math.min(cpuEffective, gpuEffective));
  const difference = Math.max(0, higher - lower);
  let limiter = "balanced";

  if (cpuEffective < gpuEffective * 0.9) limiter = "cpu";
  if (gpuEffective < cpuEffective * 0.9) limiter = "gpu";

  const rawPercent = (difference / higher) * 100;
  const midPercent = Math.max(3, Math.min(50, rawPercent - 7));
  const percentRange = `${Math.round(Math.max(2, midPercent - 4))}–${Math.round(midPercent + 4)}%`;

  let summary = "Balanced build";
  let detail = dict.bottleneckHint || "CPU/GPU balance shown for your resolution.";

  if (limiter === "cpu") {
    summary = "CPU is limiting";
    detail = `Your CPU is holding back this GPU by roughly ${percentRange} at ${input.resolution}p. ${suggestCpu(
      gpu.score
    )} will unlock more frames.`;
  } else if (limiter === "gpu") {
    summary = "GPU is limiting";
    detail = `Your GPU is the ceiling by about ${percentRange} at ${input.resolution}p. ${suggestGpu(
      cpu.score
    )} would ease the bottleneck.`;
  } else {
    summary = "Well balanced";
    detail = "CPU, GPU, and RAM look aligned for gaming at this resolution.";
  }

  return { summary, detail, percentRange };
}

function suggestGpu(targetScore) {
  const candidate = gpus.find((g) => g.score >= targetScore * 0.95);
  return candidate ? candidate.label : "a stronger modern GPU";
}

function suggestCpu(targetScore) {
  const candidate = cpus.find((c) => c.score >= targetScore * 0.95);
  return candidate ? candidate.label : "a newer multi-core CPU";
}

function renderResults(result, language = "en") {
  const dict = translations[language] || translations.en;
  document.getElementById("verdict").textContent = result.verdict;
  document.getElementById("verdictDetail").textContent = result.verdictDetail;
  document.getElementById("fpsRange").textContent = result.fpsRange;
  document.getElementById("fpsDetail").textContent = result.fpsDetail;

  const settingsList = document.getElementById("settingsList");
  const upgradeList = document.getElementById("upgradeList");
  settingsList.innerHTML = "";
  upgradeList.innerHTML = "";

  result.settings.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    settingsList.appendChild(li);
  });

  result.upgrades.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    upgradeList.appendChild(li);
  });

  document.getElementById("results").classList.remove("hidden");
  document.getElementById("disclaimer").textContent = dict.disclaimer;
}

function renderBottleneck(result, language = "en") {
  const dict = translations[language] || translations.en;
  document.getElementById("bnSummary").textContent = result.summary;
  document.getElementById("bnDetail").textContent = result.detail;
  document.getElementById("bnPercent").textContent = result.percentRange;
  document.getElementById("bnHint").textContent = dict.bottleneckHint;
}

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const gameInput = form.game.value.trim();
  const cpuId = form.cpu.value;
  const gpuId = form.gpu.value;
  const ram = Number(form.ram.value);
  const resolution = form.resolution.value;
  const target = form.target.value;
  const language = document.getElementById("language").value;

  if (!gameInput) return;

  const selectedGame = games.find((g) => g.name.toLowerCase() === gameInput.toLowerCase());
  applyGameTheme(selectedGame?.id);

  lastInput = { game: gameInput, cpuId, gpuId, ram, resolution, target };

  const result = computePerformance(lastInput, language);
  renderResults(result, language);
}

function handleBottleneck(e) {
  e.preventDefault();
  const form = e.target;
  const language = document.getElementById("language").value;
  const input = {
    cpuId: form["bn-cpu"].value,
    gpuId: form["bn-gpu"].value,
    ram: Number(form["bn-ram"].value),
    resolution: form["bn-resolution"].value,
  };

  const result = computeBottleneck(input, language);
  renderBottleneck(result, language);
}

function fillDemo() {
  const form = document.getElementById("specForm");
  form.game.value = "Cyberpunk 2077";
  form.cpu.value = "r7-5800X";
  form.gpu.value = "rtx-3070";
  form.ram.value = "16";
  form.resolution.value = "1440";
  form.target.value = "balanced";
  applyGameTheme("cyberpunk");
}

function init() {
  softPalette = generateSoftPalette();
  applyBackgroundMood(gameThemes.default);
  populateOptions();
  setupLanguages();
  const gameField = document.getElementById("game");
  gameField.addEventListener("input", (e) => {
    const value = e.target.value.trim().toLowerCase();
    const selectedGame = games.find((g) => g.name.toLowerCase() === value);
    applyGameTheme(selectedGame?.id);
  });

  document.getElementById("specForm").addEventListener("submit", handleSubmit);
  document.getElementById("demoFill").addEventListener("click", fillDemo);
  const bnForm = document.getElementById("bottleneckForm");
  if (bnForm) {
    bnForm.addEventListener("submit", handleBottleneck);
    const language = document.getElementById("language").value;
    if (findById(cpus, "i5-12400F")) bnForm["bn-cpu"].value = "i5-12400F";
    if (findById(gpus, "rtx-3060")) bnForm["bn-gpu"].value = "rtx-3060";
    const baselineBn = computeBottleneck(
      {
        cpuId: bnForm["bn-cpu"].value || cpus[0].id,
        gpuId: bnForm["bn-gpu"].value || gpus[0].id,
        ram: Number(bnForm["bn-ram"].value) || 16,
        resolution: bnForm["bn-resolution"].value || "1080",
      },
      language
    );
    renderBottleneck(baselineBn, language);
  }
  applyGameTheme("default");
}

document.addEventListener("DOMContentLoaded", init);
