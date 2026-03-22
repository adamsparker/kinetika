/* ══════════════════════════════════════
   FORM STUDIO — app.js
══════════════════════════════════════ */

/* ── ASSET MAPS ── */
const PROG_PHOTOS = {
  mishima:    'assets/programs/mishima.jpg',
  mentzer:    'assets/programs/mentzer.jpg',
  tren_twins: 'assets/programs/tren-twins.jpg',
  ronnie:     'assets/programs/ronnie.jpg',
  mass:       'assets/programs/mass.jpg',
  cut:        'assets/programs/cut.jpg',
  goggins:    'assets/programs/goggins.jpg',
  makhachev:  'assets/programs/makhachev.jpg',
};
const PROD_PHOTOS = {
  whey:       'assets/products/whey.jpg',
  preworkout: 'assets/products/preworkout.jpg',
  magnesium:  'assets/products/magnesium.jpg',
  omega3:     'assets/products/omega3.jpg',
  creatine:   'assets/products/creatine.jpg',
  cherry:     'assets/products/cherry.jpg',
};

/* ── EMOJI MAPS ── */
const MEAL_EMOJI = {
  'Завтрак': '🥣', 'Обед': '🍽️', 'Перекус': '🍎',
  'Перед тренировкой': '🍌', 'После тренировки': '🥤', 'Ужин': '🥩',
};
const EX_EMOJI = {
  'Приседания со штангой': '🦵', 'Жим стоя': '🤲', 'Жим лёжа': '🤜',
  'Становая тяга': '⬆️', 'Тяга в наклоне': '🔙', 'Подтягивания': '🙌',
  'Планка': '🧱', 'Румынская тяга': '🔙', 'Фронтальный присед': '🦵',
  'Строгий жим стоя': '🤲', 'Тяга Пендлея': '🔙', 'Гиперэкстензия': '🔄',
  'Жим гантелей на наклонной': '💪', 'Подъём на бицепс': '💪',
  'Тяга верхнего блока': '🙌', 'Тяга нижнего блока': '🔙',
  'Тяга гантели одной рукой': '🔙', 'Разведения с гантелями': '🦋',
  'Кроссоверы': '🦋', 'Жим в тренажёре': '🤜', 'Отжимания от пола': '🤸',
  'Выпады с гантелями': '🚶', 'Жим ногами': '🦵', 'Разгибания ног': '🦵',
  'Сгибания ног': '🦵', 'Икры в тренажёре': '🦶', 'Подъём на носки стоя': '🦶',
  'Хип-траст со штангой': '🦵', 'Шраги со штангой': '💆',
  'Жим Арнольда': '💪', 'Подъём гантелей в стороны': '🦋',
  'Сгибания на бицепс с гантелями': '💪', 'Разгибания на трицепс у блока': '💪',
  'Французский жим': '💪', 'Жим лёжа узким хватом': '🤜',
  'Подтягивания широким хватом': '🙌', 'Бег лёгкий': '🏃',
  'Бег темповый': '🏃', 'Бег длинный': '🏃', 'Интервалы': '⚡',
  'Бёрпи': '🔥', 'Спринт 100м': '🏃', 'Растяжка (йога)': '🧘',
  'Кардио низкой интенсивности': '🚶', 'Кардио (велосипед)': '🚲',
  'Плавание': '🏊', 'Бокс (лапы)': '🥊', 'Борьба': '🤼',
  'Удары по груше': '🥊', 'Партерная борьба': '🤼', 'Жим гантелей лёжа': '🤜',
};
function exEmoji(n) { return EX_EMOJI[n] || '🏋️'; }

/* ── PROGRAMS DATA ── */
const PROGRAMS = [
  {
    id: 'mishima', cat: 'Сила', level: 'Средний', lc: '#4a7256',
    stripe: 's-strength', pill: 'p-strength', rating: '4.8', weeks: 12, freq: '3×/нед',
    title: 'Программа Юкио Мисимы',
    desc: 'Культурист-самурай. Строил тело как инструмент воли. Базовые движения, железная дисциплина.',
    long: 'Мисима начал тренироваться в 27 лет и за 10 лет построил тело, ставшее символом. Программа — 3 дня в неделю, только базовые движения, минимум изоляции. Принцип: каждый подход — акт воли.',
    stats: [{v:'12',l:'Недель'},{v:'36',l:'Тренировок'},{v:'4.8★',l:'Рейтинг'}],
    blocks: [{r:'1–4',t:'Фундамент',s:'Техника базы, 65–75%',d:'3 дня'},{r:'5–8',t:'Накопление',s:'Объём, 75–85%',d:'3 дня'},{r:'9–12',t:'Интенсификация',s:'85–95%, воля',d:'3 дня'}],
    schedule: [
      {day:'Понедельник',type:'train',name:'Приседания + жим',exercises:[{n:'Приседания со штангой',sets:'5×5',detail:'Рабочий вес'},{n:'Жим лёжа',sets:'5×5',detail:'Строгая техника'},{n:'Подтягивания',sets:'3×max',detail:'Широкий хват'}]},
      {day:'Вторник',type:'rest',name:'Кэндо / медитация'},
      {day:'Среда',type:'train',name:'Становая + тяга',exercises:[{n:'Становая тяга',sets:'5×3',detail:'Максимальный вес'},{n:'Тяга в наклоне',sets:'4×6',detail:'С паузой'},{n:'Планка',sets:'3×60с',detail:'Абсолютный контроль'}]},
      {day:'Четверг',type:'rest',name:'Активный отдых'},
      {day:'Пятница',type:'train',name:'Полное тело',exercises:[{n:'Фронтальный присед',sets:'4×5',detail:'Культура движения'},{n:'Строгий жим стоя',sets:'4×6',detail:'Без читинга'},{n:'Румынская тяга',sets:'3×8',detail:'Растяжение'}]},
      {day:'Суббота',type:'rest',name:'Отдых'},{day:'Воскресенье',type:'rest',name:'Полный отдых'},
    ],
    recSupps: ['whey','creatine','omega3'],
    recMeals: [{ico:'🍱',name:'Рис с рыбой',detail:'Б 42г · У 65г · Ж 8г',kcal:500,time:'Обед'},{ico:'🍳',name:'Яйца с зеленью',detail:'Б 24г · У 2г · Ж 18г',kcal:270,time:'Завтрак'}],
    tags: ['Сила','Средний','Штанга','3× в неделю'],
    obGoal: 'strength', obLevel: ['intermediate','advanced'], obDays: ['3'],
  },
  {
    id: 'mentzer', cat: 'Гипертрофия', level: 'Продвинутый', lc: '#3a526e',
    stripe: 's-hypertrophy', pill: 'p-hypertrophy', rating: '4.9', weeks: 8, freq: '2×/нед',
    title: 'Программа Майка Ментцера',
    desc: 'HIT — High Intensity Training. Один отказной сет — и достаточно. Меньше объёма, больше роста.',
    long: 'Майк Ментцер — философ и бодибилдер, чемпион Mr. Universe. Его High Intensity Training: 1 рабочий сет до полного отказа, 2 тренировки в неделю, долгое восстановление. Результат — объём без перетренированности.',
    stats: [{v:'8',l:'Недель'},{v:'16',l:'Тренировок'},{v:'4.9★',l:'Рейтинг'}],
    blocks: [{r:'1–2',t:'Адаптация к HIT',s:'Учим отказ',d:'2 дня'},{r:'3–6',t:'Максимальная интенсивность',s:'1 отказной сет',d:'2 дня'},{r:'7–8',t:'Специализация',s:'Слабые места',d:'2 дня'}],
    schedule: [
      {day:'Понедельник',type:'train',name:'Грудь + Спина (HIT)',exercises:[{n:'Кроссоверы',sets:'1×отказ',detail:'Пред-утомление'},{n:'Жим лёжа',sets:'1×отказ',detail:'Сразу после кроссовера'},{n:'Тяга верхнего блока',sets:'1×отказ',detail:'Полный диапазон'},{n:'Тяга нижнего блока',sets:'1×отказ',detail:'Пиковое сокращение'}]},
      {day:'Вторник',type:'rest',name:'Полный отдых — критично'},{day:'Среда',type:'rest',name:'Полный отдых'},
      {day:'Четверг',type:'train',name:'Ноги + Плечи + Руки (HIT)',exercises:[{n:'Разгибания ног',sets:'1×отказ',detail:'Пред-утомление'},{n:'Жим ногами',sets:'1×отказ',detail:'Сразу'},{n:'Жим Арнольда',sets:'1×отказ',detail:'Плечи'},{n:'Подъём гантелей в стороны',sets:'1×отказ',detail:'Боковые дельты'},{n:'Сгибания на бицепс с гантелями',sets:'1×отказ',detail:'Полный отказ'},{n:'Разгибания на трицепс у блока',sets:'1×отказ',detail:'Верёвка'}]},
      {day:'Пятница',type:'rest',name:'Полный отдых'},{day:'Суббота',type:'rest',name:'Полный отдых'},{day:'Воскресенье',type:'rest',name:'Полный отдых'},
    ],
    recSupps: ['whey','creatine','omega3'],
    recMeals: [{ico:'🥩',name:'Стейк + овощи',detail:'Б 50г · У 15г · Ж 22г',kcal:480,time:'Ужин'},{ico:'🥤',name:'Протеиновый шейк',detail:'Б 40г · У 8г · Ж 3г',kcal:220,time:'После тренировки'}],
    tags: ['Гипертрофия','Продвинутый','HIT','2× в неделю'],
    obGoal: 'muscle', obLevel: ['advanced'], obDays: ['2'],
  },
  {
    id: 'tren_twins', cat: 'Гипертрофия', level: 'Продвинутый', lc: '#3a526e',
    stripe: 's-hypertrophy', pill: 'p-hypertrophy', rating: '4.7', weeks: 12, freq: '6×/нед',
    title: 'Программа Tren Twins',
    desc: 'Братья-близнецы YouTube. Высокочастотный PPL, огромный объём, никаких компромиссов.',
    long: 'Майкл и Крис Кавана — феномен социальных сетей с телами профессиональных бодибилдеров. Их программа: PPL 6 раз в неделю, каждая группа дважды, акцент на тяжёлых базовых движениях с большим объёмом изоляции.',
    stats: [{v:'12',l:'Недель'},{v:'72',l:'Тренировок'},{v:'4.7★',l:'Рейтинг'}],
    blocks: [{r:'1–4',t:'Объёмный блок',s:'12–15 повторов',d:'6 дней'},{r:'5–8',t:'Сила + гипертрофия',s:'6–10 повторов',d:'6 дней'},{r:'9–12',t:'Пик формы',s:'Дроп-сеты, суперсеты',d:'6 дней'}],
    schedule: [
      {day:'Понедельник',type:'train',name:'Push A — Грудь / Плечи / Трицепс',exercises:[{n:'Жим лёжа',sets:'4×8',detail:'Тяжёлый рабочий вес'},{n:'Жим гантелей на наклонной',sets:'4×10',detail:'Верхняя грудь'},{n:'Кроссоверы',sets:'3×15',detail:'Пиковое сокращение'},{n:'Жим Арнольда',sets:'4×10',detail:'Плечи'},{n:'Подъём гантелей в стороны',sets:'4×15',detail:'Боковые дельты'},{n:'Разгибания на трицепс у блока',sets:'4×12',detail:'Трицепс'}]},
      {day:'Вторник',type:'train',name:'Pull A — Спина / Бицепс',exercises:[{n:'Тяга верхнего блока',sets:'4×10',detail:'Широкий хват'},{n:'Тяга нижнего блока',sets:'4×10',detail:'Пиковое сжатие'},{n:'Тяга гантели одной рукой',sets:'4×12',detail:'Каждая сторона'},{n:'Подтягивания',sets:'3×max',detail:'С весом'},{n:'Сгибания на бицепс с гантелями',sets:'4×12',detail:'Молоток + обычный'}]},
      {day:'Среда',type:'train',name:'Legs — Квадры / Бицепс бедра / Икры',exercises:[{n:'Приседания со штангой',sets:'5×6',detail:'Основной лифт'},{n:'Жим ногами',sets:'4×12',detail:'Широкая постановка'},{n:'Разгибания ног',sets:'4×15',detail:'Изоляция'},{n:'Румынская тяга',sets:'4×10',detail:'Бицепс бедра'},{n:'Сгибания ног',sets:'3×15',detail:'Лёжа'},{n:'Икры в тренажёре',sets:'5×15',detail:'Пауза внизу'}]},
      {day:'Четверг',type:'train',name:'Push B',exercises:[{n:'Жим в тренажёре',sets:'4×12',detail:'Наклонный'},{n:'Разведения с гантелями',sets:'4×12',detail:'Нижняя грудь'},{n:'Строгий жим стоя',sets:'4×8',detail:'Армейский'},{n:'Подъём гантелей в стороны',sets:'4×15',detail:'Суперсет'},{n:'Французский жим',sets:'4×10',detail:'Трицепс'}]},
      {day:'Пятница',type:'train',name:'Pull B',exercises:[{n:'Становая тяга',sets:'4×5',detail:'Тяжёлый день'},{n:'Тяга Пендлея',sets:'4×8',detail:'Взрывная'},{n:'Тяга верхнего блока',sets:'3×12',detail:'Узкий хват'},{n:'Подъём на бицепс',sets:'4×10',detail:'EZ-гриф'}]},
      {day:'Суббота',type:'train',name:'Legs B',exercises:[{n:'Фронтальный присед',sets:'4×8',detail:'Квадрицепс'},{n:'Хип-траст со штангой',sets:'4×12',detail:'Ягодичные'},{n:'Выпады с гантелями',sets:'3×12',detail:'Каждая нога'},{n:'Подъём на носки стоя',sets:'5×20',detail:'Икры'}]},
      {day:'Воскресенье',type:'rest',name:'Полный отдых'},
    ],
    recSupps: ['whey','preworkout','creatine'],
    recMeals: [{ico:'🍗',name:'Куриная грудка × 400г',detail:'Б 80г · У 0г · Ж 8г',kcal:420,time:'Обед'},{ico:'🍚',name:'Рис + яйца',detail:'Б 30г · У 90г · Ж 14г',kcal:610,time:'После тренировки'}],
    tags: ['Гипертрофия','Продвинутый','PPL','6× в неделю'],
    obGoal: 'muscle', obLevel: ['advanced'], obDays: ['5+'],
  },
  {
    id: 'ronnie', cat: 'Гипертрофия', level: 'Продвинутый', lc: '#3a526e',
    stripe: 's-hypertrophy', pill: 'p-hypertrophy', rating: '5.0', weeks: 16, freq: '6×/нед',
    title: 'Программа Ронни Колмана',
    desc: '8× Мистер Олимпия. «Don\'t nobody wanna lift no heavy-ass weights.» Объём, который сломит большинство.',
    long: 'Ронни тренировался дважды в день: утром — кардио, вечером — железо. 6 дней в неделю. Колоссальный объём, рекордные рабочие веса. Эта программа — адаптированная версия для смертных, дух тот же.',
    stats: [{v:'16',l:'Недель'},{v:'96',l:'Тренировок'},{v:'5.0★',l:'Рейтинг'}],
    blocks: [{r:'1–4',t:'Объём',s:'15–20 повторов',d:'6 дней'},{r:'5–10',t:'Сила бодибилдера',s:'8–12 повторов',d:'6 дней'},{r:'11–16',t:'Финишёр',s:'Дроп-сеты + суперсеты',d:'6 дней'}],
    schedule: [
      {day:'Понедельник',type:'train',name:'Ноги + Спина',exercises:[{n:'Приседания со штангой',sets:'4×12',detail:'Ронни брал 250+ кг'},{n:'Жим ногами',sets:'4×15',detail:'Широко'},{n:'Разгибания ног',sets:'4×15',detail:'Изоляция'},{n:'Становая тяга',sets:'4×10',detail:'Конвенциональная'},{n:'Тяга верхнего блока',sets:'4×12',detail:'Широкий хват'},{n:'Тяга нижнего блока',sets:'4×12',detail:'Плотное сжатие'}]},
      {day:'Вторник',type:'train',name:'Грудь + Плечи',exercises:[{n:'Жим лёжа',sets:'4×12',detail:'Тяжёлый'},{n:'Жим гантелей на наклонной',sets:'4×12',detail:'Верхняя грудь'},{n:'Кроссоверы',sets:'3×15',detail:'Пиковое'},{n:'Строгий жим стоя',sets:'4×10',detail:'Армейский'},{n:'Подъём гантелей в стороны',sets:'4×15',detail:'Дельты'},{n:'Шраги со штангой',sets:'4×15',detail:'Трапеции'}]},
      {day:'Среда',type:'train',name:'Руки + Икры',exercises:[{n:'Подъём на бицепс',sets:'5×12',detail:'EZ-гриф'},{n:'Сгибания на бицепс с гантелями',sets:'4×12',detail:'Молоток'},{n:'Французский жим',sets:'5×12',detail:'Трицепс'},{n:'Жим лёжа узким хватом',sets:'4×12',detail:'Трицепс'},{n:'Подъём на носки стоя',sets:'6×15',detail:'Икры'}]},
      {day:'Четверг',type:'train',name:'Ноги — Задний отдел',exercises:[{n:'Румынская тяга',sets:'4×12',detail:'Бицепс бедра'},{n:'Сгибания ног',sets:'4×15',detail:'Лёжа'},{n:'Выпады с гантелями',sets:'3×12',detail:'Ягодичные'},{n:'Хип-траст со штангой',sets:'4×15',detail:'Пиковое'},{n:'Икры в тренажёре',sets:'5×20',detail:'Сидя'}]},
      {day:'Пятница',type:'train',name:'Спина — День тяг',exercises:[{n:'Становая тяга',sets:'5×8',detail:'Приоритет спины'},{n:'Тяга Пендлея',sets:'4×10',detail:'Взрывная'},{n:'Тяга гантели одной рукой',sets:'4×12',detail:'Каждая сторона'},{n:'Гиперэкстензия',sets:'3×15',detail:'Поясница'},{n:'Подтягивания',sets:'3×max',detail:'С весом'}]},
      {day:'Суббота',type:'train',name:'Грудь + Руки (объём)',exercises:[{n:'Жим в тренажёре',sets:'5×12',detail:'Наклонный'},{n:'Разведения с гантелями',sets:'4×12',detail:'Изоляция'},{n:'Подъём на бицепс',sets:'4×15',detail:'Пиковое'},{n:'Разгибания на трицепс у блока',sets:'4×15',detail:'Верёвка'}]},
      {day:'Воскресенье',type:'rest',name:'Отдых + кардио (опц.)'},
    ],
    recSupps: ['whey','creatine','preworkout'],
    recMeals: [{ico:'🥩',name:'Говядина + рис + яйца',detail:'Б 70г · У 80г · Ж 20г',kcal:800,time:'Обед'},{ico:'🥣',name:'Овсянка + протеин',detail:'Б 40г · У 70г · Ж 6г',kcal:490,time:'Завтрак'}],
    tags: ['Гипертрофия','Продвинутый','Зал','6× в неделю'],
    obGoal: 'muscle', obLevel: ['advanced'], obDays: ['5+'],
  },
  {
    id: 'mass', cat: 'Гипертрофия', level: 'Начинающий', lc: '#3a526e',
    stripe: 's-hypertrophy', pill: 'p-hypertrophy', rating: '4.6', weeks: 12, freq: '4×/нед',
    title: 'Программа набора массы',
    desc: 'Классический сплит Верх/Низ для максимального роста. Профицит + прогрессия нагрузок.',
    long: '12 недель чистого набора. Фуллбади переходит в сплит «Верх/Низ». Упор на базу, прогрессивная перегрузка каждую тренировку. Профицит 400–500 ккал обязателен.',
    stats: [{v:'12',l:'Недель'},{v:'48',l:'Тренировок'},{v:'4.6★',l:'Рейтинг'}],
    blocks: [{r:'1–4',t:'Фуллбади',s:'3×8–12',d:'4 дня'},{r:'5–8',t:'Верх / Низ',s:'4×6–10',d:'4 дня'},{r:'9–12',t:'Специализация',s:'5×5 + изоляция',d:'4 дня'}],
    schedule: [
      {day:'Понедельник',type:'train',name:'Верх A',exercises:[{n:'Жим лёжа',sets:'4×8',detail:'Основной лифт'},{n:'Тяга верхнего блока',sets:'4×10',detail:'Ширина спины'},{n:'Жим Арнольда',sets:'3×12',detail:'Плечи'},{n:'Подъём на бицепс',sets:'3×12',detail:'Изоляция'}]},
      {day:'Вторник',type:'train',name:'Низ A',exercises:[{n:'Приседания со штангой',sets:'4×8',detail:'Рабочий вес'},{n:'Румынская тяга',sets:'4×10',detail:'Бицепс бедра'},{n:'Жим ногами',sets:'3×12',detail:'Объём'},{n:'Икры в тренажёре',sets:'4×15',detail:'Сидя'}]},
      {day:'Среда',type:'rest',name:'Отдых'},
      {day:'Четверг',type:'train',name:'Верх B',exercises:[{n:'Тяга в наклоне',sets:'4×8',detail:'Толщина спины'},{n:'Жим гантелей на наклонной',sets:'4×10',detail:'Верхняя грудь'},{n:'Подтягивания широким хватом',sets:'3×max',detail:'С весом'},{n:'Французский жим',sets:'3×12',detail:'Трицепс'}]},
      {day:'Пятница',type:'train',name:'Низ B',exercises:[{n:'Становая тяга',sets:'4×5',detail:'Тяжёлый день'},{n:'Выпады с гантелями',sets:'3×12',detail:'Каждая нога'},{n:'Хип-траст со штангой',sets:'4×12',detail:'Ягодичные'},{n:'Подъём на носки стоя',sets:'4×20',detail:'Икры'}]},
      {day:'Суббота',type:'rest',name:'Отдых'},{day:'Воскресенье',type:'rest',name:'Отдых'},
    ],
    recSupps: ['whey','creatine','omega3'],
    recMeals: [{ico:'🍝',name:'Паста с фаршем',detail:'Б 45г · У 85г · Ж 18г',kcal:700,time:'Обед'},{ico:'🥣',name:'Овсянка с протеином',detail:'Б 35г · У 60г · Ж 8г',kcal:460,time:'Завтрак'}],
    tags: ['Гипертрофия','Начинающий','Зал','4× в неделю'],
    obGoal: 'muscle', obLevel: ['beginner','returning'], obDays: ['4','3'],
  },
  {
    id: 'cut', cat: 'Кардио', level: 'Средний', lc: '#8b3e1a',
    stripe: 's-cardio', pill: 'p-cardio', rating: '4.7', weeks: 8, freq: '5×/нед',
    title: 'Программа для похудения',
    desc: 'Дефицит + силовая база + кардио. Теряем жир — сохраняем мышцы.',
    long: '8 недель сушки: силовые 3 раза в неделю сохраняют мышечную массу, 2 кардио-сессии сжигают жир. Дефицит 400–500 ккал, высокобелковый рацион.',
    stats: [{v:'8',l:'Недель'},{v:'40',l:'Тренировок'},{v:'4.7★',l:'Рейтинг'}],
    blocks: [{r:'1–3',t:'Адаптация',s:'Силовые + LISS',d:'5 дней'},{r:'4–6',t:'Максимальный дефицит',s:'Суперсеты + HIIT',d:'5 дней'},{r:'7–8',t:'Финиш',s:'Пиковая форма',d:'5 дней'}],
    schedule: [
      {day:'Понедельник',type:'train',name:'Силовая A',exercises:[{n:'Приседания со штангой',sets:'4×8',detail:'Сохраняем силу'},{n:'Жим лёжа',sets:'4×8',detail:'Рабочий вес'},{n:'Тяга верхнего блока',sets:'3×10',detail:'Спина'},{n:'Планка',sets:'3×45с',detail:'Кор'}]},
      {day:'Вторник',type:'train',name:'Кардио LISS',exercises:[{n:'Кардио низкой интенсивности',sets:'45 мин',detail:'60–70% ЧСС'},{n:'Растяжка (йога)',sets:'10 мин',detail:'Заминка'}]},
      {day:'Среда',type:'train',name:'Силовая B',exercises:[{n:'Становая тяга',sets:'4×6',detail:'Базовый лифт'},{n:'Строгий жим стоя',sets:'3×10',detail:'Плечи'},{n:'Выпады с гантелями',sets:'3×12',detail:'Каждая нога'},{n:'Подтягивания',sets:'3×max',detail:'Широкий хват'}]},
      {day:'Четверг',type:'train',name:'HIIT',exercises:[{n:'Спринт 100м',sets:'10×',detail:'Отдых 60 сек'},{n:'Бёрпи',sets:'3×15',detail:'Без пауз'},{n:'Интервалы',sets:'3×200м',detail:'Взрывная работа'}]},
      {day:'Пятница',type:'train',name:'Силовая C',exercises:[{n:'Фронтальный присед',sets:'3×8',detail:'Квадрицепс'},{n:'Тяга в наклоне',sets:'4×8',detail:'Спина'},{n:'Жим гантелей лёжа',sets:'3×12',detail:'Грудь'},{n:'Румынская тяга',sets:'3×10',detail:'Бицепс бедра'}]},
      {day:'Суббота',type:'rest',name:'Ходьба / активный отдых'},{day:'Воскресенье',type:'rest',name:'Полный отдых'},
    ],
    recSupps: ['omega3','magnesium','whey'],
    recMeals: [{ico:'🥗',name:'Салат с курицей',detail:'Б 40г · У 15г · Ж 10г',kcal:310,time:'Обед'},{ico:'🍳',name:'Белковый омлет',detail:'Б 28г · У 4г · Ж 16г',kcal:280,time:'Завтрак'}],
    tags: ['Похудение','Средний','Смешанный','5× в неделю'],
    obGoal: 'fat', obLevel: ['beginner','intermediate','returning'], obDays: ['4','5+','3'],
  },
  {
    id: 'goggins', cat: 'Выносливость', level: 'Продвинутый', lc: '#2a5c4e',
    stripe: 's-endurance', pill: 'p-endurance', rating: '4.9', weeks: 16, freq: '7×/нед',
    title: 'Программа Дэвида Гоггинса',
    desc: 'Navy SEAL, рекордсмен по подтягиваниям, ультрамарафонец. «Stay Hard» — это не слова, это образ жизни.',
    long: 'Гоггинс тренируется каждый день. Утренний бег, дневные тренировки, вечернее железо. Его принцип: когда хочешь остановиться — ты только на 40% от своего лимита.',
    stats: [{v:'16',l:'Недель'},{v:'112',l:'Тренировок'},{v:'4.9★',l:'Рейтинг'}],
    blocks: [{r:'1–4',t:'Калибровка',s:'Строим базу разума',d:'7 дней'},{r:'5–10',t:'40% правило',s:'Когда хочешь сдаться — продолжай',d:'7 дней'},{r:'11–16',t:'Accountability',s:'Зеркало не врёт',d:'7 дней'}],
    schedule: [
      {day:'Понедельник',type:'train',name:'Бег + Подтягивания',exercises:[{n:'Бег длинный',sets:'60–90 мин',detail:'Зона 2 ЧСС'},{n:'Подтягивания',sets:'100 повторов',detail:'Разбить на подходы'},{n:'Отжимания от пола',sets:'100 повторов',detail:'В течение дня'}]},
      {day:'Вторник',type:'train',name:'Велосипед + Силовые',exercises:[{n:'Кардио (велосипед)',sets:'90 мин',detail:'Умеренная интенсивность'},{n:'Приседания со штангой',sets:'5×5',detail:'Сила ног'},{n:'Становая тяга',sets:'5×5',detail:'Базовый лифт'}]},
      {day:'Среда',type:'train',name:'Плавание + Бег',exercises:[{n:'Плавание',sets:'45 мин',detail:'Активное восстановление'},{n:'Бег темповый',sets:'30 мин',detail:'Пороговый'},{n:'Подтягивания',sets:'50 повторов',detail:'Любой хват'}]},
      {day:'Четверг',type:'train',name:'Длинный бег',exercises:[{n:'Бег длинный',sets:'2–3 часа',detail:'«Когда хочешь остановиться — продолжай»'},{n:'Отжимания от пола',sets:'100 повторов',detail:'В конце дистанции'}]},
      {day:'Пятница',type:'train',name:'HIIT + Силовые',exercises:[{n:'Интервалы',sets:'10×400м',detail:'Максимальные усилия'},{n:'Жим лёжа',sets:'5×5',detail:'Верхняя сила'},{n:'Тяга в наклоне',sets:'5×5',detail:'Спина'},{n:'Планка',sets:'5×60с',detail:'Кор'}]},
      {day:'Суббота',type:'train',name:'Ультра-бег',exercises:[{n:'Бег длинный',sets:'4–6 часов',detail:'«Stay Hard. No excuses.»'},{n:'Кардио низкой интенсивности',sets:'Заминка',detail:'Ходьба 30 мин'}]},
      {day:'Воскресенье',type:'train',name:'Активное восстановление',exercises:[{n:'Кардио низкой интенсивности',sets:'45 мин',detail:'Лёгкая ходьба / плавание'},{n:'Растяжка (йога)',sets:'30 мин',detail:'Гибкость и разум'}]},
    ],
    recSupps: ['omega3','magnesium','whey'],
    recMeals: [{ico:'🍌',name:'Банан + арахисовая паста',detail:'Б 8г · У 42г · Ж 14г',kcal:320,time:'Перед тренировкой'},{ico:'🥤',name:'Электролиты + протеин',detail:'Б 30г · У 20г · Ж 2г',kcal:220,time:'После тренировки'}],
    tags: ['Выносливость','Продвинутый','Кардио','7× в неделю'],
    obGoal: 'endurance', obLevel: ['advanced'], obDays: ['5+'],
  },
  {
    id: 'makhachev', cat: 'MMA', level: 'Продвинутый', lc: '#5a3a6e',
    stripe: 's-mma', pill: 'p-mma', rating: '4.9', weeks: 12, freq: '6×/нед',
    title: 'Программа Ислама Махачева',
    desc: 'Чемпион UFC в лёгком весе. Тренировки команды Абу-Дерсу: борьба, ОФП, функциональная сила.',
    long: 'Ислам — один из лучших MMA-бойцов планеты. Дагестанская школа: утро — партер и борьба, вечер — ОФП и силовые. Программа включает функциональные упражнения, взрывную силу и выносливость бойца.',
    stats: [{v:'12',l:'Недель'},{v:'72',l:'Тренировок'},{v:'4.9★',l:'Рейтинг'}],
    blocks: [{r:'1–4',t:'ОФП фундамент',s:'Выносливость + базовая сила',d:'6 дней'},{r:'5–8',t:'Взрывная сила',s:'Борьба + силовые',d:'6 дней'},{r:'9–12',t:'Пиковая форма',s:'Спарринги + поддержание',d:'6 дней'}],
    schedule: [
      {day:'Понедельник',type:'train',name:'Борьба + ОФП',exercises:[{n:'Борьба',sets:'60 мин',detail:'Партер, двойной захват, тейкдауны'},{n:'Подтягивания',sets:'5×max',detail:'Функциональная сила'},{n:'Отжимания от пола',sets:'5×30',detail:'Взрывные'},{n:'Бёрпи',sets:'4×20',detail:'Кондиция'}]},
      {day:'Вторник',type:'train',name:'Силовые + Бег',exercises:[{n:'Становая тяга',sets:'5×3',detail:'Взрывная сила'},{n:'Приседания со штангой',sets:'4×5',detail:'Мощь ног'},{n:'Бег темповый',sets:'5 км',detail:'Аэробная база'}]},
      {day:'Среда',type:'train',name:'Удары + Кондиция',exercises:[{n:'Удары по груше',sets:'6×3 мин',detail:'Отдых 60 сек'},{n:'Интервалы',sets:'8×200м',detail:'Спринт'},{n:'Планка',sets:'5×60с',detail:'Стабильность кора'}]},
      {day:'Четверг',type:'train',name:'Партерная борьба + Силовые',exercises:[{n:'Партерная борьба',sets:'60 мин',detail:'Болевые, удержания'},{n:'Жим лёжа',sets:'4×6',detail:'Толкающая сила'},{n:'Подтягивания широким хватом',sets:'4×10',detail:'Тянущая сила'},{n:'Тяга в наклоне',sets:'4×8',detail:'Спина бойца'}]},
      {day:'Пятница',type:'train',name:'Бокс + HIIT',exercises:[{n:'Бокс (лапы)',sets:'5×3 мин',detail:'Техника и скорость'},{n:'Бёрпи',sets:'5×15',detail:'Без пауз'},{n:'Бег лёгкий',sets:'20 мин',detail:'Заминка'}]},
      {day:'Суббота',type:'train',name:'Полный ОФП',exercises:[{n:'Бег длинный',sets:'8–10 км',detail:'Аэробная база'},{n:'Подтягивания',sets:'100 повторов',detail:'В течение тренировки'},{n:'Отжимания от пола',sets:'150 повторов',detail:'В течение тренировки'}]},
      {day:'Воскресенье',type:'rest',name:'Баня / массаж / отдых'},
    ],
    recSupps: ['omega3','magnesium','whey'],
    recMeals: [{ico:'🫕',name:'Плов с бараниной',detail:'Б 35г · У 70г · Ж 18г',kcal:590,time:'Обед'},{ico:'🍖',name:'Курица + картофель',detail:'Б 45г · У 50г · Ж 10г',kcal:480,time:'Ужин'}],
    tags: ['MMA','Продвинутый','Функциональный','6× в неделю'],
    obGoal: 'endurance', obLevel: ['intermediate','advanced'], obDays: ['5+','4'],
  },
];

const PRODUCTS = [
  {id:'whey',     name:'Сывороточный изолят Pro', brand:'Form Basics',    price:3200, priceStr:'₽3 200', unit:'/кг',     desc:'25г белка на порцию, холодная обработка.',    badge:'Новинка'},
  {id:'preworkout',name:'Предтрен Flow',           brand:'Form Basics',    price:2800, priceStr:'₽2 800', unit:'/300г',   desc:'Кофеин + бета-аланин + цитруллин. Без краша.'},
  {id:'magnesium', name:'Магний глицинат',         brand:'Form Recovery',  price:1600, priceStr:'₽1 600', unit:'/90 кап.',desc:'Высокая биодоступность. Качество сна.'},
  {id:'omega3',    name:'Омега-3 Ультра',          brand:'Form Daily',     price:2100, priceStr:'₽2 100', unit:'/120 кап.',desc:'3г ЭПК+ДГК. Суставы, сердце, мозг.'},
  {id:'creatine',  name:'Моногидрат креатина',     brand:'Form Basics',    price:1400, priceStr:'₽1 400', unit:'/500г',   desc:'Самая изученная добавка в спорте.',           badge:'Хит'},
  {id:'cherry',    name:'Экстракт вишни',          brand:'Form Recovery',  price:2600, priceStr:'₽2 600', unit:'/60 кап.',desc:'Снижение боли после тренировки.'},
];

const LEADERBOARD = [
  {rank:1, name:'Дмитрий В.',  sub:'Ронни · 16 нед.',       pts:5440, av:'Д', avBg:'linear-gradient(135deg,#c8a050,#8a6020)', change:'—'},
  {rank:2, name:'Марина К.',   sub:'Гоггинс · 12 нед.',     pts:4820, av:'М', avBg:'linear-gradient(135deg,#9da8b5,#6b7a8a)', change:'+1'},
  {rank:3, name:'Алексей М.',  sub:'Мисима · 12 нед.',      pts:4210, av:'А', avBg:'linear-gradient(135deg,#c9b99a,#8a7255)', change:'-1', me:true},
  {rank:4, name:'Ольга С.',    sub:'Похудение · 6 нед.',    pts:3980, av:'О', avBg:'linear-gradient(135deg,#8b3e1a,#5c2d0e)', change:'+2'},
  {rank:5, name:'Павел Т.',    sub:'Махачев · 8 нед.',      pts:3640, av:'П', avBg:'linear-gradient(135deg,#5a3a6e,#2d1a38)', change:'—'},
  {rank:6, name:'Юлия Н.',    sub:'Ментцер · 4 нед.',      pts:3210, av:'Ю', avBg:'linear-gradient(135deg,#3a526e,#1e2b38)', change:'+3'},
  {rank:7, name:'Иван Р.',     sub:'Tren Twins · 8 нед.',   pts:2980, av:'И', avBg:'linear-gradient(135deg,#2d4a3e,#1a2e26)', change:'-2'},
  {rank:8, name:'Анна К.',    sub:'Набор массы · 3 нед.',  pts:2670, av:'А', avBg:'linear-gradient(135deg,#4a2210,#2a1506)', change:'+1'},
];

/* FOOD_DB defined later in the DIET section */

/* ── APP STATE ── */
let currentUser = null;  // { name, email, isGuest }
let activePlan = null;
let pendingPlan = null;
let cartItems = {};
let meals = [];
let streakDays = 0;
let calcTdee = 0;
let completedExercises = {};  // { weekIdx: { dayIdx: Set of exIdx } }
let openDayIdx = null;
let currentWeek = 0;   // 0-based week index
let weekHistory = {};  // { weekIdx: { dayIdx: Set of exIdx } } — archived completed weeks
const MEAL_TARGETS = {kcal: 2400, p: 180, c: 270, f: 80};

// Onboarding state
let obProfile = { plans: {}, diet: {} };
let obShown = { plans: false, diet: false };

// Computed recommendations from onboarding
let recommendedProgIds = [];
let recommendedDietKcal = null;

/* ══════════════════════════════════════
   AUTH
══════════════════════════════════════ */
function authTab(tab, btn) {
  document.querySelectorAll('.auth-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('auth-' + tab).classList.add('active');
}

function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-pass').value;
  const err = document.getElementById('login-error');
  if (!email || !pass) { err.classList.add('show'); return; }
  err.classList.remove('show');
  const name = email.split('@')[0];
  const displayName = name.charAt(0).toUpperCase() + name.slice(1);
  currentUser = { name: displayName, email, isGuest: false };
  closeAuthAndInit();
}

function doRegister() {
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pass = document.getElementById('reg-pass').value;
  const err = document.getElementById('reg-error');
  if (!name || !email || pass.length < 6) { err.classList.add('show'); return; }
  err.classList.remove('show');
  currentUser = { name, email, isGuest: false };
  closeAuthAndInit();
}

function doGuest() {
  currentUser = { name: 'Гость', email: '', isGuest: true };
  closeAuthAndInit();
}

function closeAuthAndInit() {
  // Populate profile with user data
  applyUserToUI(currentUser.name);
  
  const g = document.getElementById('auth-gate');
  g.style.transition = 'opacity .3s';
  g.style.opacity = '0';
  setTimeout(() => {
    g.style.display = 'none';
    // Show onboarding after login
    setTimeout(() => {
      document.getElementById('ob-plans').classList.add('open');
      obShown.plans = true;
    }, 300);
  }, 300);
}

function applyUserToUI(name) {
  const initial = name[0] || '?';
  document.getElementById('sb-uname').textContent = name;
  document.getElementById('sb-avatar-el').textContent = initial;
  document.getElementById('ph-name-display').textContent = name;
  document.getElementById('ph-avatar-el').childNodes[0].textContent = initial;
  document.getElementById('pf-name').value = name.split(' ')[0] || name;
  document.getElementById('pf-surname').value = name.split(' ')[1] || '';
}

/* ── SIDEBAR ── */
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sb-overlay').classList.toggle('open');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sb-overlay').classList.remove('open');
}

/* ══════════════════════════════════════
   ONBOARDING — with real logic
══════════════════════════════════════ */
function pickOb(ns, el, key, val) {
  el.closest('.ob-grid').querySelectorAll('.ob-opt').forEach(o => o.classList.remove('sel'));
  el.classList.add('sel');
  obProfile[ns][key] = val;
  const sn = el.closest('.ob-step').id.split('-s')[1];
  const pre = ns === 'plans' ? 'p' : 'd';
  document.getElementById(pre + '-n' + sn).disabled = false;
}

function nextObStep(ns, n) {
  const pre = ns === 'plans' ? 'p' : 'd';
  document.getElementById(pre + '-s' + (n - 1)).classList.remove('active');
  document.getElementById(pre + '-s' + n).classList.add('active');
  document.getElementById(pre + '-d' + (n - 1)).classList.add('done');
}

function finishOb(ns) {
  if (ns === 'plans') {
    applyPlanOnboarding();
  } else if (ns === 'diet') {
    applyDietOnboarding();
  }
  skipOb('ob-' + ns);
}

function skipOb(id) {
  document.getElementById(id).classList.remove('open');
  const ns = id.replace('ob-', '');
  obShown[ns] = true;
}

function maybeShowOb(section) {
  if (section === 'plans' && !obShown.plans) {
    document.getElementById('ob-plans').classList.add('open');
    obShown.plans = true;
  }
  if (section === 'diet' && !obShown.diet) {
    document.getElementById('ob-diet').classList.add('open');
    obShown.diet = true;
  }
}

function reopenOb(ns) {
  const pre = ns === 'plans' ? 'p' : 'd';
  const steps = ns === 'plans' ? 3 : 3;
  for (let i = 0; i < steps; i++) {
    const s = document.getElementById(pre + '-s' + i);
    if (s) { s.classList.remove('active'); s.querySelectorAll('.ob-opt').forEach(o => o.classList.remove('sel')); }
    const dot = document.getElementById(pre + '-d' + i);
    if (dot) dot.classList.remove('done');
    const btn = document.getElementById(pre + '-n' + i);
    if (btn) btn.disabled = true;
  }
  obProfile[ns] = {};
  document.getElementById(pre + '-s0').classList.add('active');
  document.getElementById(pre + '-d0').classList.add('done');
  obShown[ns] = false;
  document.getElementById('ob-' + ns).classList.add('open');
  obShown[ns] = true;
}

/* Apply plan onboarding results → filter & sort programs */
function applyPlanOnboarding() {
  const { goal, level, days } = obProfile.plans;
  if (!goal) return;

  // Score programs
  const scored = PROGRAMS.map(p => {
    let score = 0;
    if (p.obGoal === goal) score += 10;
    if (level && p.obLevel && p.obLevel.includes(level)) score += 5;
    if (days && p.obDays && p.obDays.includes(days)) score += 3;
    return { p, score };
  }).sort((a, b) => b.score - a.score);

  recommendedProgIds = scored.filter(x => x.score >= 10).map(x => x.p.id);

  // Show results banner
  const goalLabels = { strength: 'Сила', muscle: 'Набор мышц', fat: 'Похудение', endurance: 'Выносливость' };
  const levelLabels = { beginner: 'Начинающий', intermediate: 'Средний', advanced: 'Продвинутый', returning: 'Возвращающийся' };
  showObResultsBanner(
    '🎯',
    `Подобрано ${recommendedProgIds.length} программ для цели <strong>«${goalLabels[goal] || goal}»</strong>${level ? ` · уровень ${levelLabels[level]}` : ''}`,
    'Рекомендации готовы'
  );

  renderProgs('Все');
}

/* Apply diet onboarding results → update macro targets */
function showObResultsBanner(icon, text, tag) {
  const existing = document.getElementById('ob-results-banner');
  if (existing) existing.remove();

  const banner = document.createElement('div');
  banner.id = 'ob-results-banner';
  banner.className = 'ob-results-banner';
  banner.innerHTML = `
    <span class="ob-results-icon">${icon}</span>
    <span class="ob-results-text">${text}</span>
    <span class="ob-results-tag">${tag}</span>
  `;

  // Insert at top of current panel
  const activePanelId = document.querySelector('.panel.active')?.id;
  const panel = document.getElementById(activePanelId);
  if (panel) panel.insertAdjacentElement('afterbegin', banner);
}

/* ══════════════════════════════════════
   PROGRAMS
══════════════════════════════════════ */
function renderProgs(filter = 'Все') {
  let list = filter === 'Все' ? [...PROGRAMS] : PROGRAMS.filter(p => p.cat === filter);

  // If we have recommendations, sort recommended to top
  if (recommendedProgIds.length && filter === 'Все') {
    list.sort((a, b) => {
      const ai = recommendedProgIds.indexOf(a.id);
      const bi = recommendedProgIds.indexOf(b.id);
      if (ai === -1 && bi === -1) return 0;
      if (ai === -1) return 1;
      if (bi === -1) return -1;
      return ai - bi;
    });
  }

  document.getElementById('prog-grid').innerHTML = list.map(p => {
    const isAct = activePlan && activePlan.id === p.id;
    const isRec = recommendedProgIds.includes(p.id);
    const photo = PROG_PHOTOS[p.id] || '';
    return `<div class="prog-card${isAct ? ' is-active' : ''}" onclick="openDetail('${p.id}')">
      ${isAct ? '<div class="active-ribbon">Активна</div>' : (isRec ? '<div class="active-ribbon" style="background:var(--amber)">Рекомендуем</div>' : '')}
      <div class="card-thumb">
        <img src="${photo}" alt="${p.title}" onerror="this.style.background='#2a2520'">
        <div class="card-thumb-overlay"></div>
        <div class="thumb-stripe ${p.stripe}"></div>
        <div class="level-badge"><span class="lvl-dot" style="background:${p.lc}"></span>${p.level}</div>
      </div>
      <div class="card-body">
        <div class="card-meta"><span class="cat-pill ${p.pill}">${p.cat}</span><span class="card-rating">★ ${p.rating}</span></div>
        <div class="card-title">${p.title}</div>
        <div class="card-desc">${p.desc}</div>
        <div class="card-footer"><div class="card-chips"><span class="c-chip">${p.freq}</span><span class="c-chip">${p.weeks} нед.</span></div></div>
      </div></div>`;
  }).join('');
}

function filterProgs(btn, cat) {
  document.querySelectorAll('#prog-filters .f-chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProgs(cat);
}

/* ── DETAIL ── */
function openDetail(id) {
  const p = PROGRAMS.find(x => x.id === id);
  if (!p) return;
  pendingPlan = p;

  document.getElementById('dh-photo').src = PROG_PHOTOS[p.id] || '';
  document.getElementById('d-stripe').className = 'd-stripe ' + p.stripe;
  document.getElementById('d-tags').innerHTML = p.tags.map(t => `<span class="d-tag">${t}</span>`).join('');
  document.getElementById('d-title').textContent = p.title;
  document.getElementById('d-desc').textContent = p.long;
  document.getElementById('d-stats').innerHTML = p.stats.map(s =>
    `<div class="d-stat"><span class="d-stat-v">${s.v}</span><span class="d-stat-l">${s.l}</span></div>`).join('');
  document.getElementById('d-blocks').innerHTML = p.blocks.map(b =>
    `<div class="week-item"><div class="wn">${b.r}</div><div class="wi"><strong>${b.t}</strong><span>${b.s}</span></div><div class="wd">${b.d}</div></div>`).join('');

  // Schedule
  const schedLbl = document.getElementById('d-schedule-lbl');
  const schedEl = document.getElementById('d-schedule');
  if (p.schedule && p.schedule.length) {
    schedLbl.style.display = 'block';
    schedEl.innerHTML = `<div class="schedule-week">
      <div class="schedule-week-hd"><span class="schedule-week-num">Неделя 1</span><span class="schedule-week-title">Типовая неделя</span></div>
      ${p.schedule.map((day, idx) => `
        <div class="day-block" id="db-${id}-${idx}">
          <div class="day-block-hd" onclick="toggleDayBlock('db-${id}-${idx}', ${!!day.exercises})">
            <div class="day-pill ${day.type === 'rest' ? 'rest-day' : 'train-day'}">
              <span class="dp-label">${day.day.slice(0,2).toUpperCase()}</span>
              <span class="dp-num">${idx + 1}</span>
            </div>
            <div class="day-block-info">
              <div class="day-block-name">${day.name}</div>
              ${day.exercises ? `<div class="day-block-sub">${day.exercises.length} упражнений</div>` : '<div class="day-block-sub">—</div>'}
            </div>
            ${day.exercises ? `<i class="ph ph-caret-down day-block-chevron"></i>` : ''}
          </div>
          ${day.exercises ? `<div class="day-exercises">
            ${day.exercises.map(e => `<div class="ex-row">
              <div class="ex-icon-box">${exEmoji(e.n)}</div>
              <div class="ex-info"><strong>${e.n}</strong><span>${e.detail}</span></div>
              <div class="ex-sets">${e.sets}</div>
            </div>`).join('')}
          </div>` : ''}
        </div>`).join('')}
    </div>`;
  } else { schedLbl.style.display = 'none'; schedEl.innerHTML = ''; }

  // Nutrition
  const nw = document.getElementById('d-nutrition-wrap');
  if (p.recMeals && p.recMeals.length) {
    nw.style.display = 'block';
    document.getElementById('d-nutrition').innerHTML = p.recMeals.map(m => `
      <div class="rec-meal-row">
        <span class="rec-meal-ico">${m.ico}</span>
        <div class="rec-meal-info"><strong>${m.name}</strong><span>${m.detail}</span></div>
        <span class="rec-meal-kcal">${m.kcal} ккал</span>
      </div>`).join('');
  } else nw.style.display = 'none';

  // Supps
  const sw = document.getElementById('d-supps-wrap');
  const supps = PRODUCTS.filter(x => p.recSupps.includes(x.id));
  if (supps.length) {
    sw.style.display = 'block';
    document.getElementById('d-supps').innerHTML = supps.map(s => `
      <div class="rec-s-row" onclick="gotoShop()">
        <div class="rec-s-photo"><img src="${PROD_PHOTOS[s.id]}" alt="${s.name}" onerror="this.parentNode.textContent='💊'"></div>
        <div class="rec-s-i"><strong>${s.name}</strong><span>${s.brand}</span></div>
        <span class="rec-s-p">${s.priceStr}</span>
      </div>`).join('');
  } else sw.style.display = 'none';

  const isAct = activePlan && activePlan.id === id;
  document.getElementById('d-cta').innerHTML = isAct
    ? `<div class="cta-row"><button class="d-cta" onclick="closeDetail();switchTo('myplan')">Перейти к плану →</button><button class="d-cta sec" style="padding:14px 16px" onclick="confirmStop()">✕</button></div>`
    : `<button class="d-cta" onclick="openConfirm()">Начать программу</button>`;

  document.getElementById('detail-wrap').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function toggleDayBlock(id, hasEx) {
  if (!hasEx) return;
  document.getElementById(id).classList.toggle('open');
}
function closeDetail() {
  document.getElementById('detail-wrap').classList.remove('open');
  document.body.style.overflow = '';
}
function maybeCloseDetail(e) {
  if (e.target === document.getElementById('detail-wrap')) closeDetail();
}

/* ── CONFIRM / STOP ── */
function openConfirm() {
  if (!pendingPlan) return;
  document.getElementById('mp-icon').src = PROG_PHOTOS[pendingPlan.id] || '';
  document.getElementById('mp-name').textContent = pendingPlan.title;
  document.getElementById('mp-meta').textContent = pendingPlan.weeks + ' нед. · ' + pendingPlan.freq;
  document.getElementById('confirmModal').classList.add('open');
}
function closeConfirm() { document.getElementById('confirmModal').classList.remove('open'); }

function startPlan() {
  activePlan = pendingPlan;
  closeConfirm(); closeDetail();
  completedExercises = {}; weekHistory = {};
  openDayIdx = null; currentWeek = 0;

  const photo = PROG_PHOTOS[activePlan.id] || '';
  document.getElementById('mp-hero-photo').src = photo;
  document.getElementById('mp-title').textContent = activePlan.title;
  document.getElementById('mps-left').textContent = activePlan.weeks - 1;
  document.getElementById('mps-freq').textContent = activePlan.freq;

  document.getElementById('sb-plan-area').innerHTML = `
    <div class="sb-plan-chip" onclick="switchTo('myplan')">
      <div class="sb-plan-icon"><img src="${photo}" alt="" onerror="this.parentNode.textContent='🏋️'"></div>
      <div><span class="sb-plan-lbl">Активная программа</span><span class="sb-plan-name">${activePlan.title}</span></div>
    </div>`;
  document.getElementById('nav-myplan').style.display = 'flex';

  document.getElementById('diet-badge').style.display = 'flex';
  document.getElementById('diet-badge-text').innerHTML = `Макросы под <strong>${activePlan.title}</strong>`;
  document.getElementById('diet-badge-pill').textContent = activePlan.cat;

  renderProgs(); renderShop(); renderMyPlan();
  switchTo('myplan');
}

function confirmStop() { document.getElementById('stopModal').classList.add('open'); }

function stopPlan() {
  activePlan = null; pendingPlan = null;
  currentWeek = 0; completedExercises = {}; weekHistory = {};
  document.getElementById('stopModal').classList.remove('open');
  closeDetail();
  document.getElementById('sb-plan-area').innerHTML = `
    <div class="sb-no-plan" onclick="switchTo('plans')"><i class="ph ph-clipboard-text"></i> Нет активной программы</div>`;
  document.getElementById('nav-myplan').style.display = 'none';
  document.getElementById('diet-badge').style.display = 'none';
  renderProgs(); renderShop(); switchTo('plans');
}

/* ══════════════════════════════════════
   MY PLAN — multi-week + history + progress
══════════════════════════════════════ */

/* Master render — updates hero, stats, week tracker */
function renderMyPlan() {
  if (!activePlan) return;
  const totalWeeks = activePlan.weeks;
  const schedule = activePlan.schedule || [];
  const trainDays = schedule.filter(d => d.type === 'train').length;

  // Count total completed training days across ALL weeks
  let totalCompleted = 0;
  for (let w = 0; w < totalWeeks; w++) {
    const wEx = w === currentWeek ? completedExercises : (weekHistory[w] || {});
    schedule.forEach((day, di) => {
      if (day.type !== 'train') return;
      const exSet = wEx[di] || new Set();
      if (day.exercises && exSet.size >= day.exercises.length) totalCompleted++;
    });
  }

  const totalTrainSessions = trainDays * totalWeeks;
  const pct = totalTrainSessions > 0 ? Math.round(totalCompleted / totalTrainSessions * 100) : 0;
  const weeksLeft = totalWeeks - currentWeek - 1;

  // Hero
  document.getElementById('mp-fill').style.width = pct + '%';
  document.getElementById('mp-pct').textContent = pct + '% выполнено';
  document.getElementById('mp-week-lbl').textContent = 'Неделя ' + (currentWeek + 1);
  document.getElementById('mp-eye-lbl').textContent = `Активная программа · Неделя ${currentWeek + 1} из ${totalWeeks}`;
  document.getElementById('mps-done').textContent = totalCompleted;
  document.getElementById('mps-left').textContent = weeksLeft;
  document.getElementById('mps-freq').textContent = activePlan.freq;

  // Sidebar week badge
  const nb = document.getElementById('nav-myplan-b');
  if (nb) nb.textContent = 'Нед. ' + (currentWeek + 1);

  renderActiveWeek();
  renderWeekNav();
  renderHistory();
}

/* Week navigation */
function changeWeek(delta) {
  const totalWeeks = activePlan.weeks;
  const newWeek = currentWeek + delta;
  if (newWeek < 0 || newWeek >= totalWeeks) return;

  // Archive current week data before moving
  if (delta !== 0) {
    weekHistory[currentWeek] = JSON.parse(
      JSON.stringify(completedExercises, (k, v) => v instanceof Set ? [...v] : v)
    );
  }

  currentWeek = newWeek;

  // Restore saved data for the target week if it exists
  const saved = weekHistory[currentWeek];
  if (saved) {
    completedExercises = {};
    Object.keys(saved).forEach(di => {
      completedExercises[parseInt(di)] = new Set(saved[di]);
    });
  } else {
    completedExercises = {};
  }

  openDayIdx = null;
  renderMyPlan();
}

function renderWeekNav() {
  const totalWeeks = activePlan.weeks;
  const prevBtn = document.getElementById('week-prev-btn');
  const nextBtn = document.getElementById('week-next-btn');
  const titleEl = document.getElementById('ses-week-title');
  if (prevBtn) prevBtn.disabled = currentWeek === 0;
  if (nextBtn) nextBtn.disabled = currentWeek >= totalWeeks - 1;
  if (titleEl) titleEl.textContent = 'Неделя ' + (currentWeek + 1);
}

/* Tab switcher */
function switchMpTab(tab) {
  document.getElementById('mp-content-week').style.display = tab === 'week' ? 'block' : 'none';
  document.getElementById('mp-content-history').style.display = tab === 'history' ? 'block' : 'none';
  document.getElementById('mptab-week').classList.toggle('active', tab === 'week');
  document.getElementById('mptab-history').classList.toggle('active', tab === 'history');
}

/* Active week tracker */
function renderActiveWeek() {
  if (!activePlan) return;
  const schedule = activePlan.schedule || [];
  const list = document.getElementById('active-week-list');
  if (!list) return;

  let completedDays = 0;
  const trainDays = schedule.filter(d => d.type === 'train').length;

  list.innerHTML = schedule.map((day, di) => {
    const isOpen = openDayIdx === di;
    const exSet = completedExercises[di] || new Set();
    const exCount = day.exercises ? day.exercises.length : 0;
    const exDone = exSet.size;
    const isDayComplete = exCount > 0 && exDone >= exCount;
    if (isDayComplete) completedDays++;

    if (day.type === 'rest') {
      return `<div class="aw-day">
        <div class="aw-day-hd" style="cursor:default">
          <div class="aw-day-pill"><span class="aw-dp-d">${day.day.slice(0,2).toUpperCase()}</span><span class="aw-dp-n">${di + 1}</span></div>
          <div class="aw-day-info"><div class="aw-day-name">${day.name}</div><div class="aw-day-sub">День отдыха</div></div>
          <div style="font-size:12px;color:var(--t3);margin-left:auto;padding-right:4px">😴</div>
        </div></div>`;
    }

    const pillClass = isDayComplete ? 'is-done' : (di === 0 ? 'is-today' : '');
    return `<div class="aw-day${isDayComplete ? ' day-complete' : ''}${isOpen ? ' open' : ''}" id="awd-${di}">
      <div class="aw-day-hd" onclick="toggleAwDay(${di})">
        <div class="aw-day-pill ${pillClass}">
          <span class="aw-dp-d">${day.day.slice(0,2).toUpperCase()}</span>
          <span class="aw-dp-n">${di + 1}</span>
        </div>
        <div class="aw-day-info">
          <div class="aw-day-name">${day.name}</div>
          <div class="aw-day-sub">${exCount} упражнений${isDayComplete ? ' · ✓ Завершено' : exDone > 0 ? ` · ${exDone}/${exCount}` : ''}</div>
        </div>
        <div class="aw-progress-pill">${isDayComplete ? '✓' : `${exDone}/${exCount}`}</div>
        <i class="ph ph-caret-down aw-chevron"></i>
      </div>
      <div class="aw-exercises">
        ${(day.exercises || []).map((ex, ei) => {
          const done = exSet.has(ei);
          return `<div class="aw-ex-row${done ? ' ex-done' : ''}">
            <button class="aw-ex-check-btn" onclick="toggleExercise(${di},${ei})">${done ? '✓' : ''}</button>
            <div class="aw-ex-icon">${exEmoji(ex.n)}</div>
            <div class="aw-ex-info"><div class="aw-ex-name">${ex.n}</div><div class="aw-ex-detail">${ex.detail}</div></div>
            <div class="aw-ex-sets">${ex.sets}</div>
          </div>`;
        }).join('')}
        <button class="aw-finish-btn" onclick="finishDay(${di})" ${isDayComplete || exDone < exCount ? 'disabled' : ''}>
          ${isDayComplete ? '✓ День завершён' : 'Завершить тренировку'}
        </button>
      </div></div>`;
  }).join('');

  document.getElementById('ses-prog-lbl').textContent = completedDays + ' / ' + trainDays + ' тренировок';
}

/* History tab — all weeks overview */
function renderHistory() {
  if (!activePlan) return;
  const container = document.getElementById('plan-history-list');
  if (!container) return;
  const schedule = activePlan.schedule || [];
  const totalWeeks = activePlan.weeks;

  // Build list of weeks that have any data
  const weeks = [];
  for (let w = 0; w < totalWeeks; w++) {
    const isCurrentWk = w === currentWeek;
    const wData = isCurrentWk ? completedExercises : (() => {
      const saved = weekHistory[w];
      if (!saved) return {};
      const res = {};
      Object.keys(saved).forEach(di => { res[parseInt(di)] = new Set(saved[di]); });
      return res;
    })();

    const trainDays = schedule.filter(d => d.type === 'train').length;
    let doneDays = 0;
    schedule.forEach((day, di) => {
      if (day.type !== 'train') return;
      const exSet = wData[di] || new Set();
      if (day.exercises && exSet.size >= day.exercises.length) doneDays++;
    });

    const hasAnyData = Object.keys(wData).length > 0 || isCurrentWk;
    weeks.push({ w, isCurrentWk, doneDays, trainDays, wData, hasAnyData });
  }

  const weeksWithData = weeks.filter(x => x.hasAnyData);

  if (!weeksWithData.length) {
    container.innerHTML = `<div class="history-empty">Пока нет завершённых тренировок.<br>Начни первую неделю!</div>`;
    return;
  }

  container.innerHTML = weeksWithData.map(({ w, isCurrentWk, doneDays, trainDays, wData }) => {
    const isComplete = doneDays >= trainDays && trainDays > 0;
    const numClass = isComplete ? 'done' : (isCurrentWk ? 'active-wk' : '');
    const badgeClass = isComplete ? 'done' : (isCurrentWk ? 'active' : '');
    const badgeText = isComplete ? '✓ Завершена' : (isCurrentWk ? 'Сейчас' : `${doneDays}/${trainDays}`);

    const daysHtml = schedule.map((day, di) => {
      if (day.type === 'rest') {
        return `<div class="hw-day-row">
          <div class="hw-day-dot rest"></div>
          <span class="hw-day-name">${day.day}</span>
          <span class="hw-day-tag">Отдых</span>
        </div>`;
      }
      const exSet = wData[di] || new Set();
      const exCount = day.exercises ? day.exercises.length : 0;
      const done = exCount > 0 && exSet.size >= exCount;
      return `<div class="hw-day-row">
        <div class="hw-day-dot${done ? ' done' : ''}"></div>
        <span class="hw-day-name">${day.day} — ${day.name}</span>
        <span class="hw-day-tag${done ? ' done' : ''}">${done ? '✓ Выполнено' : (exSet.size > 0 ? `${exSet.size}/${exCount}` : '—')}</span>
      </div>`;
    }).join('');

    return `<div class="history-week${isCurrentWk ? ' open' : ''}" id="hw-${w}">
      <div class="history-week-hd" onclick="toggleHistoryWeek(${w})">
        <div class="hw-num ${numClass}">${w + 1}</div>
        <div class="hw-info">
          <div class="hw-title">Неделя ${w + 1}${isCurrentWk ? ' · Текущая' : ''}</div>
          <div class="hw-sub">${doneDays} из ${trainDays} тренировок выполнено</div>
        </div>
        <span class="hw-badge ${badgeClass}">${badgeText}</span>
        <i class="ph ph-caret-down hw-chevron"></i>
      </div>
      <div class="history-week-body">${daysHtml}</div>
    </div>`;
  }).join('');
}

function toggleHistoryWeek(w) {
  document.getElementById('hw-' + w)?.classList.toggle('open');
}

function toggleAwDay(di) { openDayIdx = openDayIdx === di ? null : di; renderActiveWeek(); }

function toggleExercise(di, ei) {
  if (!completedExercises[di]) completedExercises[di] = new Set();
  const set = completedExercises[di];
  if (set.has(ei)) set.delete(ei); else set.add(ei);
  renderMyPlan();
}

function finishDay(di) {
  const day = activePlan.schedule[di];
  if (!day || day.type === 'rest') return;
  if (!completedExercises[di]) completedExercises[di] = new Set();
  (day.exercises || []).forEach((_, i) => completedExercises[di].add(i));
  streakDays++;
  document.getElementById('mp-streak-stat').textContent = streakDays;
  document.getElementById('profile-streak-val').textContent = streakDays + ' 🔥';
  const t = document.getElementById('ph-tag-streak');
  if (t) t.textContent = '🔥 ' + streakDays + ' дней серия';
  openDayIdx = null;

  // Auto-advance week when all train days done
  const schedule = activePlan.schedule || [];
  const trainDays = schedule.filter(d => d.type === 'train').length;
  let doneDays = 0;
  schedule.forEach((day, i) => {
    if (day.type !== 'train') return;
    const exSet = completedExercises[i] || new Set();
    if (day.exercises && exSet.size >= day.exercises.length) doneDays++;
  });

  if (doneDays >= trainDays && currentWeek < activePlan.weeks - 1) {
    // Show a brief congratulation then offer to move to next week
    setTimeout(() => {
      if (confirm(`🎉 Неделя ${currentWeek + 1} завершена! Перейти к неделе ${currentWeek + 2}?`)) {
        changeWeek(1);
      } else {
        renderMyPlan();
      }
    }, 400);
    return;
  }

  renderMyPlan();
}

/* ══════════════════════════════════════
   DIET — full implementation
══════════════════════════════════════ */
const FOOD_DB = [
  /* ── БЕЛКИ ── */
  {id:'f1',  name:'Куриная грудка',          cat:'protein', ico:'🍗', kcal:165, p:31,  c:0,    f:3.6,  budget:'low'},
  {id:'f2',  name:'Куриное бедро',           cat:'protein', ico:'🍗', kcal:215, p:26,  c:0,    f:12,   budget:'low'},
  {id:'f3',  name:'Говядина нежирная',       cat:'protein', ico:'🥩', kcal:250, p:26,  c:0,    f:16,   budget:'medium'},
  {id:'f4',  name:'Говяжий фарш 10%',        cat:'protein', ico:'🥩', kcal:218, p:20,  c:0,    f:15,   budget:'medium'},
  {id:'f5',  name:'Индейка (филе)',           cat:'protein', ico:'🦃', kcal:157, p:29,  c:0,    f:3.6,  budget:'medium'},
  {id:'f6',  name:'Лосось',                  cat:'protein', ico:'🐟', kcal:208, p:20,  c:0,    f:13,   budget:'high'},
  {id:'f7',  name:'Тунец консервированный',  cat:'protein', ico:'🐟', kcal:128, p:28,  c:0,    f:1,    budget:'low'},
  {id:'f8',  name:'Скумбрия',                cat:'protein', ico:'🐟', kcal:262, p:18,  c:0,    f:21,   budget:'low'},
  {id:'f9',  name:'Яйцо куриное',            cat:'protein', ico:'🥚', kcal:155, p:13,  c:1.1,  f:11,   budget:'low'},
  {id:'f10', name:'Яичные белки',            cat:'protein', ico:'🥚', kcal:52,  p:11,  c:0.7,  f:0.2,  budget:'low'},
  {id:'f11', name:'Свинина (вырезка)',        cat:'protein', ico:'🥩', kcal:143, p:22,  c:0,    f:5.4,  budget:'medium'},
  {id:'f12', name:'Кальмары',                cat:'protein', ico:'🦑', kcal:92,  p:18,  c:2,    f:1.4,  budget:'medium'},
  {id:'f13', name:'Креветки варёные',         cat:'protein', ico:'🦐', kcal:99,  p:24,  c:0,    f:0.3,  budget:'high'},
  {id:'f14', name:'Форель запечённая',        cat:'protein', ico:'🐟', kcal:190, p:22,  c:0,    f:11,   budget:'high'},
  {id:'f15', name:'Минтай',                  cat:'protein', ico:'🐟', kcal:72,  p:16,  c:0,    f:0.9,  budget:'low'},
  {id:'f16', name:'Печень говяжья',          cat:'protein', ico:'🥩', kcal:127, p:20,  c:5,    f:3.7,  budget:'low'},
  {id:'f17', name:'Нут варёный',             cat:'protein', ico:'🫘', kcal:164, p:8.9, c:27,   f:2.6,  budget:'low'},
  {id:'f18', name:'Фасоль красная',          cat:'protein', ico:'🫘', kcal:127, p:8.7, c:22,   f:0.5,  budget:'low'},
  {id:'f19', name:'Чечевица варёная',         cat:'protein', ico:'🫘', kcal:116, p:9,   c:20,   f:0.4,  budget:'low'},
  {id:'f20', name:'Тофу',                    cat:'protein', ico:'🌱', kcal:76,  p:8,   c:1.9,  f:4.2,  budget:'medium'},
  /* ── МОЛОЧНОЕ ── */
  {id:'d1',  name:'Творог 5%',               cat:'dairy',   ico:'🧀', kcal:121, p:14,  c:3.3,  f:5,    budget:'low'},
  {id:'d2',  name:'Творог 0%',               cat:'dairy',   ico:'🧀', kcal:79,  p:18,  c:3,    f:0.6,  budget:'low'},
  {id:'d3',  name:'Греческий йогурт 2%',     cat:'dairy',   ico:'🥛', kcal:59,  p:10,  c:3.6,  f:0.4,  budget:'low'},
  {id:'d4',  name:'Кефир 1%',                cat:'dairy',   ico:'🥛', kcal:40,  p:3.6, c:4.7,  f:1,    budget:'low'},
  {id:'d5',  name:'Молоко 3.2%',             cat:'dairy',   ico:'🥛', kcal:60,  p:3.2, c:4.7,  f:3.2,  budget:'low'},
  {id:'d6',  name:'Сыр твёрдый',             cat:'dairy',   ico:'🧀', kcal:364, p:26,  c:0,    f:29,   budget:'medium'},
  {id:'d7',  name:'Сыр моцарелла',           cat:'dairy',   ico:'🧀', kcal:280, p:28,  c:2.2,  f:17,   budget:'medium'},
  {id:'d8',  name:'Сметана 15%',             cat:'dairy',   ico:'🥛', kcal:160, p:2.8, c:3.5,  f:15,   budget:'low'},
  {id:'d9',  name:'Йогурт натуральный',      cat:'dairy',   ico:'🥛', kcal:68,  p:5,   c:7,    f:1.5,  budget:'low'},
  {id:'d10', name:'Ряженка',                 cat:'dairy',   ico:'🥛', kcal:85,  p:2.8, c:4.2,  f:4.8,  budget:'low'},
  /* ── УГЛЕВОДЫ ── */
  {id:'c1',  name:'Гречка варёная',           cat:'carbs',   ico:'🌾', kcal:92,  p:3.4, c:19,   f:0.6,  budget:'low'},
  {id:'c2',  name:'Рис белый варёный',        cat:'carbs',   ico:'🍚', kcal:130, p:2.7, c:28,   f:0.3,  budget:'low'},
  {id:'c3',  name:'Рис бурый варёный',        cat:'carbs',   ico:'🍚', kcal:111, p:2.6, c:23,   f:0.9,  budget:'low'},
  {id:'c4',  name:'Овсянка варёная',          cat:'carbs',   ico:'🥣', kcal:71,  p:2.5, c:12,   f:1.5,  budget:'low'},
  {id:'c5',  name:'Паста варёная',            cat:'carbs',   ico:'🍝', kcal:131, p:5,   c:25,   f:1.1,  budget:'low'},
  {id:'c6',  name:'Картофель отварной',       cat:'carbs',   ico:'🥔', kcal:77,  p:2,   c:17,   f:0.1,  budget:'low'},
  {id:'c7',  name:'Перловка варёная',         cat:'carbs',   ico:'🌾', kcal:123, p:2.9, c:25,   f:0.4,  budget:'low'},
  {id:'c8',  name:'Хлеб ржаной',             cat:'carbs',   ico:'🍞', kcal:259, p:6.8, c:48,   f:3.3,  budget:'low'},
  {id:'c9',  name:'Хлеб цельнозерновой',     cat:'carbs',   ico:'🍞', kcal:247, p:8.5, c:41,   f:3.5,  budget:'low'},
  {id:'c10', name:'Булгур варёный',           cat:'carbs',   ico:'🌾', kcal:83,  p:3,   c:18,   f:0.2,  budget:'low'},
  {id:'c11', name:'Киноа варёная',            cat:'carbs',   ico:'🌾', kcal:120, p:4.4, c:21,   f:1.9,  budget:'medium'},
  {id:'c12', name:'Батат запечённый',         cat:'carbs',   ico:'🍠', kcal:90,  p:2,   c:21,   f:0.1,  budget:'low'},
  {id:'c13', name:'Рисовые хлебцы',          cat:'carbs',   ico:'🫓', kcal:387, p:7,   c:81,   f:3,    budget:'low'},
  {id:'c14', name:'Гранола',                 cat:'carbs',   ico:'🥣', kcal:471, p:10,  c:64,   f:20,   budget:'medium'},
  {id:'c15', name:'Мюсли без сахара',        cat:'carbs',   ico:'🥣', kcal:368, p:11,  c:66,   f:7,    budget:'medium'},
  /* ── ОВОЩИ ── */
  {id:'v1',  name:'Брокколи',                cat:'veg',     ico:'🥦', kcal:34,  p:2.8, c:7,    f:0.4,  budget:'low'},
  {id:'v2',  name:'Шпинат',                  cat:'veg',     ico:'🥬', kcal:23,  p:2.9, c:3.6,  f:0.4,  budget:'low'},
  {id:'v3',  name:'Огурец свежий',           cat:'veg',     ico:'🥒', kcal:15,  p:0.7, c:3.6,  f:0.1,  budget:'low'},
  {id:'v4',  name:'Помидор',                 cat:'veg',     ico:'🍅', kcal:18,  p:0.9, c:3.9,  f:0.2,  budget:'low'},
  {id:'v5',  name:'Перец болгарский',        cat:'veg',     ico:'🫑', kcal:31,  p:1,   c:6,    f:0.3,  budget:'low'},
  {id:'v6',  name:'Белокочанная капуста',    cat:'veg',     ico:'🥬', kcal:25,  p:1.3, c:5.8,  f:0.1,  budget:'low'},
  {id:'v7',  name:'Цветная капуста',         cat:'veg',     ico:'🥦', kcal:25,  p:1.9, c:5,    f:0.3,  budget:'low'},
  {id:'v8',  name:'Кабачок',                 cat:'veg',     ico:'🥒', kcal:24,  p:1.1, c:4.6,  f:0.3,  budget:'low'},
  {id:'v9',  name:'Свёкла варёная',          cat:'veg',     ico:'🫀', kcal:44,  p:1.7, c:9.6,  f:0.1,  budget:'low'},
  {id:'v10', name:'Морковь',                 cat:'veg',     ico:'🥕', kcal:41,  p:0.9, c:9.6,  f:0.2,  budget:'low'},
  {id:'v11', name:'Спаржа',                  cat:'veg',     ico:'🥦', kcal:20,  p:2.2, c:3.9,  f:0.1,  budget:'medium'},
  {id:'v12', name:'Грибы шампиньоны',        cat:'veg',     ico:'🍄', kcal:22,  p:3.1, c:3.3,  f:0.3,  budget:'low'},
  {id:'v13', name:'Лук репчатый',            cat:'veg',     ico:'🧅', kcal:40,  p:1.1, c:9.3,  f:0.1,  budget:'low'},
  {id:'v14', name:'Чеснок',                  cat:'veg',     ico:'🧄', kcal:149, p:6.4, c:33,   f:0.5,  budget:'low'},
  {id:'v15', name:'Авокадо',                 cat:'veg',     ico:'🥑', kcal:160, p:2,   c:9,    f:15,   budget:'medium'},
  /* ── ФРУКТЫ ── */
  {id:'fr1', name:'Банан',                   cat:'fruit',   ico:'🍌', kcal:89,  p:1.1, c:23,   f:0.3,  budget:'low'},
  {id:'fr2', name:'Яблоко',                  cat:'fruit',   ico:'🍎', kcal:52,  p:0.3, c:14,   f:0.2,  budget:'low'},
  {id:'fr3', name:'Апельсин',                cat:'fruit',   ico:'🍊', kcal:47,  p:0.9, c:12,   f:0.1,  budget:'low'},
  {id:'fr4', name:'Черника',                 cat:'fruit',   ico:'🫐', kcal:57,  p:0.7, c:14,   f:0.3,  budget:'medium'},
  {id:'fr5', name:'Клубника',                cat:'fruit',   ico:'🍓', kcal:32,  p:0.7, c:7.7,  f:0.3,  budget:'low'},
  {id:'fr6', name:'Груша',                   cat:'fruit',   ico:'🍐', kcal:57,  p:0.4, c:15,   f:0.1,  budget:'low'},
  {id:'fr7', name:'Манго',                   cat:'fruit',   ico:'🥭', kcal:60,  p:0.8, c:15,   f:0.4,  budget:'medium'},
  {id:'fr8', name:'Киви',                    cat:'fruit',   ico:'🥝', kcal:61,  p:1.1, c:15,   f:0.5,  budget:'low'},
  {id:'fr9', name:'Виноград',                cat:'fruit',   ico:'🍇', kcal:67,  p:0.6, c:17,   f:0.4,  budget:'low'},
  {id:'fr10',name:'Гранат',                  cat:'fruit',   ico:'🍎', kcal:83,  p:1.7, c:19,   f:1.2,  budget:'medium'},
  /* ── ЖИРЫ ── */
  {id:'ft1', name:'Орехи грецкие',           cat:'fat',     ico:'🌰', kcal:654, p:15,  c:14,   f:65,   budget:'medium'},
  {id:'ft2', name:'Миндаль',                 cat:'fat',     ico:'🌰', kcal:579, p:21,  c:22,   f:50,   budget:'medium'},
  {id:'ft3', name:'Арахис',                  cat:'fat',     ico:'🥜', kcal:567, p:26,  c:16,   f:49,   budget:'low'},
  {id:'ft4', name:'Арахисовая паста',        cat:'fat',     ico:'🥜', kcal:590, p:25,  c:20,   f:50,   budget:'low'},
  {id:'ft5', name:'Оливковое масло',         cat:'fat',     ico:'🫙', kcal:884, p:0,   c:0,    f:100,  budget:'medium'},
  {id:'ft6', name:'Семена чиа',              cat:'fat',     ico:'🌱', kcal:486, p:17,  c:42,   f:31,   budget:'medium'},
  {id:'ft7', name:'Тыквенные семечки',       cat:'fat',     ico:'🌱', kcal:559, p:30,  c:11,   f:49,   budget:'low'},
  {id:'ft8', name:'Семена льна',             cat:'fat',     ico:'🌱', kcal:534, p:18,  c:29,   f:42,   budget:'low'},
  {id:'ft9', name:'Кешью',                   cat:'fat',     ico:'🌰', kcal:553, p:18,  c:30,   f:44,   budget:'high'},
  /* ── СПОРТИВНОЕ ПИТАНИЕ ── */
  {id:'s1',  name:'Протеин (сыворотка)',     cat:'sport',   ico:'🥤', kcal:400, p:80,  c:8,    f:5,    budget:'medium'},
  {id:'s2',  name:'Гейнер',                  cat:'sport',   ico:'🥤', kcal:380, p:25,  c:65,   f:3,    budget:'medium'},
  {id:'s3',  name:'Протеиновый батончик',    cat:'sport',   ico:'🍫', kcal:200, p:20,  c:18,   f:6,    budget:'medium'},
  {id:'s4',  name:'BCAA (порция)',           cat:'sport',   ico:'💊', kcal:20,  p:5,   c:0,    f:0,    budget:'medium'},
  {id:'s5',  name:'Казеин (порция)',         cat:'sport',   ico:'🥤', kcal:120, p:25,  c:4,    f:1,    budget:'medium'},
  {id:'s6',  name:'Растительный протеин',   cat:'sport',   ico:'🌱', kcal:380, p:75,  c:12,   f:6,    budget:'medium'},
  /* ── ГОТОВЫЕ БЛЮДА ── */
  {id:'m1',  name:'Гречка с курицей (порция)',     cat:'meal', ico:'🍱', kcal:310, p:28, c:32, f:6,   budget:'low'},
  {id:'m2',  name:'Рис с лососем и брокколи',      cat:'meal', ico:'🍱', kcal:380, p:30, c:38, f:12,  budget:'medium'},
  {id:'m3',  name:'Овсянка с бананом и мёдом',     cat:'meal', ico:'🥣', kcal:380, p:12, c:68, f:6,   budget:'low'},
  {id:'m4',  name:'Омлет из 3 яиц со шпинатом',   cat:'meal', ico:'🍳', kcal:290, p:22, c:4,  f:20,  budget:'low'},
  {id:'m5',  name:'Паста с говяжьим фаршем',       cat:'meal', ico:'🍝', kcal:490, p:32, c:56, f:12,  budget:'medium'},
  {id:'m6',  name:'Борщ (порция 300г)',             cat:'meal', ico:'🍲', kcal:130, p:6,  c:14, f:5,   budget:'low'},
  {id:'m7',  name:'Куриный суп с лапшой',           cat:'meal', ico:'🍜', kcal:120, p:10, c:12, f:3,   budget:'low'},
  {id:'m8',  name:'Творожная запеканка',            cat:'meal', ico:'🧁', kcal:180, p:16, c:18, f:5,   budget:'low'},
  {id:'m9',  name:'Блинчики (3 шт)',                cat:'meal', ico:'🥞', kcal:340, p:10, c:52, f:12,  budget:'low'},
  {id:'m10', name:'Котлеты паровые (2 шт)',         cat:'meal', ico:'🍽️', kcal:250, p:28, c:8,  f:12,  budget:'medium'},
  {id:'m11', name:'Стейк говяжий 200г',            cat:'meal', ico:'🥩', kcal:440, p:48, c:0,  f:26,  budget:'high'},
  {id:'m12', name:'Салат с тунцом и яйцом',        cat:'meal', ico:'🥗', kcal:220, p:24, c:6,  f:10,  budget:'low'},
  {id:'m13', name:'Греческий салат',               cat:'meal', ico:'🥗', kcal:180, p:6,  c:10, f:14,  budget:'medium'},
  {id:'m14', name:'Шаурма с курицей (без соуса)',  cat:'meal', ico:'🌯', kcal:340, p:24, c:38, f:8,   budget:'low'},
  {id:'m15', name:'Плов с курицей (порция)',        cat:'meal', ico:'🍚', kcal:420, p:22, c:58, f:10,  budget:'low'},
  {id:'m16', name:'Запечённый батат с творогом',   cat:'meal', ico:'🍠', kcal:260, p:16, c:38, f:4,   budget:'low'},
  {id:'m17', name:'Протеиновый смузи',             cat:'meal', ico:'🥤', kcal:320, p:32, c:36, f:6,   budget:'medium'},
  {id:'m18', name:'Тост с авокадо и яйцом',        cat:'meal', ico:'🍞', kcal:310, p:14, c:26, f:18,  budget:'medium'},
  {id:'m19', name:'Плов с бараниной',              cat:'meal', ico:'🍖', kcal:480, p:24, c:52, f:18,  budget:'high'},
  {id:'m20', name:'Гречневые котлеты',             cat:'meal', ico:'🍽️', kcal:210, p:8,  c:36, f:5,   budget:'low'},
  {id:'m21', name:'Паста с тунцом и оливками',     cat:'meal', ico:'🍝', kcal:380, p:28, c:46, f:8,   budget:'medium'},
  {id:'m22', name:'Куриный боул с овощами',        cat:'meal', ico:'🥗', kcal:420, p:38, c:42, f:8,   budget:'medium'},
  {id:'m23', name:'Рыбные котлеты (2 шт)',         cat:'meal', ico:'🍽️', kcal:220, p:22, c:10, f:10,  budget:'medium'},
  {id:'m24', name:'Яичница с беконом и тостом',   cat:'meal', ico:'🍳', kcal:490, p:24, c:22, f:32,  budget:'medium'},
  {id:'m25', name:'Стир-фрай с говядиной',        cat:'meal', ico:'🥘', kcal:350, p:30, c:22, f:14,  budget:'medium'},
];

const WEEK_MEAL_PLANS = {
  standard: [
    {day:'Пн',meals:[{time:'Завтрак',ico:'🥣',name:'Овсянка с бананом и мёдом',kcal:380,p:12,c:68,f:6},{time:'Перекус',ico:'🍎',name:'Яблоко + горсть миндаля',kcal:230,p:6,c:24,f:13},{time:'Обед',ico:'🍽️',name:'Гречка с куриной грудкой и овощами',kcal:520,p:42,c:55,f:8},{time:'Перекус',ico:'🥛',name:'Творог 5% с ягодами',kcal:190,p:20,c:18,f:5},{time:'Ужин',ico:'🥩',name:'Лосось запечённый + брокколи',kcal:410,p:38,c:8,f:22}]},
    {day:'Вт',meals:[{time:'Завтрак',ico:'🍳',name:'Омлет из 3 яиц со шпинатом',kcal:310,p:22,c:4,f:22},{time:'Перекус',ico:'🍌',name:'Банан + протеиновый батончик',kcal:290,p:22,c:40,f:7},{time:'Обед',ico:'🍝',name:'Паста с говяжьим фаршем',kcal:560,p:38,c:62,f:14},{time:'Перекус',ico:'🥛',name:'Греческий йогурт с семенами чиа',kcal:170,p:12,c:16,f:5},{time:'Ужин',ico:'🍗',name:'Куриная грудка с рисом и перцем',kcal:490,p:45,c:52,f:6}]},
    {day:'Ср',meals:[{time:'Завтрак',ico:'🥣',name:'Мюсли с молоком и клубникой',kcal:360,p:11,c:62,f:8},{time:'Перекус',ico:'🧀',name:'Цельнозерновой хлеб с сыром',kcal:250,p:12,c:28,f:10},{time:'Обед',ico:'🍽️',name:'Борщ + куриное бедро',kcal:480,p:32,c:44,f:14},{time:'Перекус',ico:'🥜',name:'Арахисовая паста + рисовые хлебцы',kcal:260,p:10,c:28,f:13},{time:'Ужин',ico:'🥩',name:'Говядина тушёная с овощами',kcal:430,p:35,c:18,f:22}]},
    {day:'Чт',meals:[{time:'Завтрак',ico:'🍳',name:'Яичница + тост с авокадо',kcal:390,p:18,c:24,f:26},{time:'Перекус',ico:'🍊',name:'Апельсин + творог 0%',kcal:180,p:18,c:20,f:1},{time:'Обед',ico:'🍚',name:'Рис с индейкой и тушёными овощами',kcal:510,p:40,c:58,f:8},{time:'Перекус',ico:'🥤',name:'Протеиновый шейк с бананом',kcal:280,p:28,c:32,f:4},{time:'Ужин',ico:'🐟',name:'Скумбрия запечённая + гречка',kcal:450,p:30,c:38,f:18}]},
    {day:'Пт',meals:[{time:'Завтрак',ico:'🥣',name:'Гречневая каша с молоком',kcal:300,p:10,c:52,f:6},{time:'Перекус',ico:'🍇',name:'Греческий йогурт с черникой',kcal:160,p:11,c:18,f:3},{time:'Обед',ico:'🍽️',name:'Суп с фрикадельками + хлеб',kcal:420,p:28,c:42,f:12},{time:'Перекус',ico:'🌰',name:'Смесь орехов + сухофрукты',kcal:310,p:8,c:34,f:18},{time:'Ужин',ico:'🍗',name:'Котлеты из индейки + батат',kcal:460,p:38,c:46,f:10}]},
    {day:'Сб',meals:[{time:'Завтрак',ico:'🥞',name:'Овсяные блинчики с ягодами',kcal:380,p:14,c:58,f:10},{time:'Перекус',ico:'🧀',name:'Творог с мёдом и орехами',kcal:270,p:18,c:22,f:12},{time:'Обед',ico:'🥩',name:'Стейк из говядины + овощи гриль',kcal:540,p:48,c:12,f:30},{time:'Перекус',ico:'🍌',name:'Смузи: банан, молоко, протеин',kcal:290,p:26,c:36,f:5},{time:'Ужин',ico:'🐟',name:'Тунец с салатом и оливковым маслом',kcal:360,p:36,c:8,f:18}]},
    {day:'Вс',meals:[{time:'Завтрак',ico:'🍳',name:'Яйца Бенедикт (без соуса)',kcal:350,p:22,c:24,f:18},{time:'Перекус',ico:'🍎',name:'Фруктовый салат с йогуртом',kcal:200,p:6,c:36,f:3},{time:'Обед',ico:'🍽️',name:'Воскресное жаркое из курицы',kcal:520,p:42,c:42,f:16},{time:'Перекус',ico:'🥜',name:'Хумус с морковными палочками',kcal:200,p:7,c:22,f:10},{time:'Ужин',ico:'🥩',name:'Лёгкий ужин: творог + зелень',kcal:220,p:24,c:10,f:8}]},
  ],
  high_protein: [
    {day:'Пн',meals:[{time:'Завтрак',ico:'🍳',name:'Омлет из 4 яиц + куриная грудка',kcal:420,p:52,c:4,f:20},{time:'Перекус',ico:'🥤',name:'Протеиновый шейк (2 мерных)',kcal:240,p:48,c:8,f:4},{time:'Обед',ico:'🍗',name:'Двойная порция курицы + гречка',kcal:620,p:72,c:52,f:10},{time:'Перекус',ico:'🧀',name:'Творог 0% + протеиновый батончик',kcal:280,p:44,c:18,f:5},{time:'Ужин',ico:'🥩',name:'Говядина запечённая + брокколи',kcal:490,p:55,c:8,f:24}]},
    {day:'Вт',meals:[{time:'Завтрак',ico:'🥣',name:'Протеиновая овсянка + белки',kcal:380,p:44,c:36,f:6},{time:'Перекус',ico:'🧀',name:'Творог + тунец консервированный',kcal:250,p:50,c:4,f:3},{time:'Обед',ico:'🐟',name:'Лосось + рис + шпинат',kcal:570,p:52,c:44,f:18},{time:'Перекус',ico:'🥤',name:'Казеин с молоком',kcal:200,p:32,c:10,f:3},{time:'Ужин',ico:'🦃',name:'Индейка запечённая + кабачки',kcal:420,p:58,c:6,f:16}]},
    {day:'Ср',meals:[{time:'Завтрак',ico:'🍳',name:'Белковый омлет + греческий йогурт',kcal:360,p:48,c:12,f:14},{time:'Перекус',ico:'🥚',name:'Варёные яйца (3 шт) + огурец',kcal:220,p:20,c:4,f:14},{time:'Обед',ico:'🥩',name:'Говяжий стейк + батат',kcal:580,p:55,c:42,f:20},{time:'Перекус',ico:'🥤',name:'BCAA + протеиновый батончик',kcal:220,p:26,c:18,f:6},{time:'Ужин',ico:'🍗',name:'Куриная грудка 300г + рис',kcal:550,p:70,c:48,f:6}]},
    {day:'Чт',meals:[{time:'Завтрак',ico:'🥣',name:'Творожная запеканка с ягодами',kcal:340,p:38,c:28,f:8},{time:'Перекус',ico:'🥤',name:'Протеиновый шейк + миндаль',kcal:320,p:36,c:12,f:16},{time:'Обед',ico:'🐟',name:'Тунец + гречка + салат',kcal:500,p:52,c:48,f:8},{time:'Перекус',ico:'🧀',name:'Моцарелла + помидоры',kcal:280,p:22,c:6,f:18},{time:'Ужин',ico:'🦑',name:'Кальмары тушёные + шпинат',kcal:310,p:44,c:10,f:10}]},
    {day:'Пт',meals:[{time:'Завтрак',ico:'🍳',name:'Скрэмбл + индейка + хлеб',kcal:400,p:46,c:22,f:14},{time:'Перекус',ico:'🥛',name:'Протеиновый коктейль на кефире',kcal:260,p:40,c:16,f:4},{time:'Обед',ico:'🍗',name:'Куриная грудка 300г + паста',kcal:610,p:62,c:58,f:12},{time:'Перекус',ico:'🥚',name:'Яичные белки 6 шт + овощи',kcal:190,p:32,c:8,f:3},{time:'Ужин',ico:'🥩',name:'Говяжий фарш с овощами',kcal:470,p:46,c:14,f:24}]},
    {day:'Сб',meals:[{time:'Завтрак',ico:'🥣',name:'Высокобелковая овсянка',kcal:420,p:50,c:38,f:8},{time:'Перекус',ico:'🧀',name:'Творог + орехи + мёд',kcal:310,p:28,c:20,f:15},{time:'Обед',ico:'🐟',name:'Лосось 250г + рис',kcal:600,p:58,c:50,f:18},{time:'Перекус',ico:'🥤',name:'Гейнер после тренировки',kcal:290,p:28,c:38,f:4},{time:'Ужин',ico:'🦃',name:'Индейка 250г + брокколи',kcal:380,p:54,c:8,f:14}]},
    {day:'Вс',meals:[{time:'Завтрак',ico:'🍳',name:'Яичница 4 яйца + бекон из индейки',kcal:430,p:44,c:2,f:26},{time:'Перекус',ico:'🥤',name:'Казеиновый коктейль + банан',kcal:300,p:32,c:36,f:4},{time:'Обед',ico:'🥩',name:'Говядина тушёная 300г + гречка',kcal:570,p:56,c:50,f:16},{time:'Перекус',ico:'🧀',name:'Творог с протеиновым порошком',kcal:260,p:46,c:10,f:4},{time:'Ужин',ico:'🍗',name:'Куриный бульон + грудка + овощи',kcal:340,p:50,c:14,f:8}]},
  ],
  vegan: [
    {day:'Пн',meals:[{time:'Завтрак',ico:'🥣',name:'Чиа-пудинг с кокосовым молоком',kcal:340,p:10,c:38,f:16},{time:'Перекус',ico:'🍌',name:'Смузи: банан, шпинат, протеин',kcal:280,p:22,c:42,f:5},{time:'Обед',ico:'🫘',name:'Нут с овощами и киноа',kcal:480,p:22,c:68,f:10},{time:'Перекус',ico:'🥜',name:'Хумус + цельнозерновые хлебцы',kcal:260,p:10,c:34,f:10},{time:'Ужин',ico:'🌱',name:'Тофу с рисом и овощами соте',kcal:420,p:24,c:52,f:12}]},
    {day:'Вт',meals:[{time:'Завтрак',ico:'🍳',name:'Тост с авокадо и томатами',kcal:310,p:8,c:36,f:16},{time:'Перекус',ico:'🫐',name:'Соевый йогурт + ягоды',kcal:200,p:16,c:24,f:4},{time:'Обед',ico:'🍝',name:'Паста с соусом из чечевицы',kcal:510,p:24,c:76,f:8},{time:'Перекус',ico:'🌰',name:'Ореховый микс + сухофрукты',kcal:320,p:8,c:36,f:18},{time:'Ужин',ico:'🥦',name:'Овощной карри с гречкой',kcal:390,p:14,c:58,f:12}]},
    {day:'Ср',meals:[{time:'Завтрак',ico:'🥣',name:'Овсянка на растительном молоке',kcal:360,p:24,c:52,f:8},{time:'Перекус',ico:'🍎',name:'Яблоко + арахисовая паста',kcal:270,p:8,c:38,f:13},{time:'Обед',ico:'🫘',name:'Суп из чечевицы + хлеб',kcal:440,p:20,c:62,f:8},{time:'Перекус',ico:'🥤',name:'Зелёный смузи с протеином',kcal:240,p:22,c:28,f:6},{time:'Ужин',ico:'🌱',name:'Стир-фрай из темпе с овощами',kcal:410,p:28,c:38,f:14}]},
    {day:'Чт',meals:[{time:'Завтрак',ico:'🥞',name:'Веганские блины с кленовым сиропом',kcal:380,p:10,c:68,f:8},{time:'Перекус',ico:'🥜',name:'Протеиновый батончик + банан',kcal:290,p:20,c:46,f:7},{time:'Обед',ico:'🥙',name:'Буррито с фасолью и рисом',kcal:530,p:20,c:80,f:12},{time:'Перекус',ico:'🫘',name:'Эдамаме + семена тыквы',kcal:260,p:18,c:20,f:14},{time:'Ужин',ico:'🍚',name:'Рис с тофу и брокколи',kcal:400,p:22,c:54,f:10}]},
    {day:'Пт',meals:[{time:'Завтрак',ico:'🥣',name:'Гранола с кокосовым йогуртом',kcal:350,p:8,c:56,f:12},{time:'Перекус',ico:'🍇',name:'Виноград + грецкие орехи',kcal:240,p:6,c:38,f:10},{time:'Обед',ico:'🫘',name:'Фалафель с табуле',kcal:480,p:16,c:60,f:18},{time:'Перекус',ico:'🥤',name:'Растительный протеин + клубника',kcal:220,p:22,c:22,f:5},{time:'Ужин',ico:'🥦',name:'Тушёные овощи с киноа и нутом',kcal:420,p:18,c:62,f:10}]},
    {day:'Сб',meals:[{time:'Завтрак',ico:'🍳',name:'Тофу-скрэмбл с куркумой',kcal:310,p:20,c:24,f:14},{time:'Перекус',ico:'🍌',name:'Протеиновый смузи с ореховым молоком',kcal:300,p:24,c:36,f:8},{time:'Обед',ico:'🥙',name:'Веганская лазанья из овощей',kcal:490,p:18,c:62,f:16},{time:'Перекус',ico:'🥜',name:'Миндальное масло + рисовые хлебцы',kcal:270,p:8,c:34,f:14},{time:'Ужин',ico:'🌱',name:'Тёплый салат с чечевицей и авокадо',kcal:380,p:16,c:40,f:18}]},
    {day:'Вс',meals:[{time:'Завтрак',ico:'🥣',name:'Ягодная каша с семенами чиа',kcal:330,p:12,c:50,f:10},{time:'Перекус',ico:'🍎',name:'Фруктовый салат с тофу',kcal:220,p:12,c:34,f:5},{time:'Обед',ico:'🍝',name:'Паста примавера с нутом',kcal:510,p:20,c:74,f:12},{time:'Перекус',ico:'🥜',name:'BCAA + горсть орехов',kcal:230,p:10,c:8,f:16},{time:'Ужин',ico:'🥦',name:'Овощной боул с кунжутной заправкой',kcal:360,p:14,c:46,f:14}]},
  ],
  keto: [
    {day:'Пн',meals:[{time:'Завтрак',ico:'🍳',name:'Яичница на масле с беконом',kcal:420,p:28,c:2,f:34},{time:'Перекус',ico:'🧀',name:'Сыр + грецкие орехи',kcal:310,p:14,c:4,f:28},{time:'Обед',ico:'🥩',name:'Стейк + спаржа на гриле',kcal:540,p:48,c:6,f:36},{time:'Перекус',ico:'🥑',name:'Авокадо с тунцом',kcal:280,p:22,c:6,f:20},{time:'Ужин',ico:'🐟',name:'Лосось в сливочном соусе',kcal:490,p:40,c:4,f:34}]},
    {day:'Вт',meals:[{time:'Завтрак',ico:'🥣',name:'Кето-смузи: авокадо + кокос',kcal:380,p:10,c:6,f:36},{time:'Перекус',ico:'🥚',name:'Яйца вкрутую (3 шт) + оливки',kcal:280,p:20,c:4,f:22},{time:'Обед',ico:'🍗',name:'Куриные бёдра с кабачками',kcal:510,p:38,c:8,f:34},{time:'Перекус',ico:'🧀',name:'Творог с семенами льна',kcal:230,p:18,c:6,f:14},{time:'Ужин',ico:'🥩',name:'Говяжий фарш с цветной капустой',kcal:470,p:36,c:8,f:32}]},
    {day:'Ср',meals:[{time:'Завтрак',ico:'🍳',name:'Сырный омлет со шпинатом',kcal:400,p:26,c:4,f:32},{time:'Перекус',ico:'🥜',name:'Миндаль + камамбер',kcal:320,p:12,c:6,f:28},{time:'Обед',ico:'🐟',name:'Скумбрия с овощами и маслом',kcal:530,p:36,c:8,f:38},{time:'Перекус',ico:'🥑',name:'Гуакамоле с сельдереем',kcal:220,p:4,c:10,f:18},{time:'Ужин',ico:'🍗',name:'Кето-курица в кремовом соусе',kcal:480,p:42,c:4,f:32}]},
    {day:'Чт',meals:[{time:'Завтрак',ico:'🥣',name:'Кокосовая каша с орехами',kcal:360,p:10,c:8,f:32},{time:'Перекус',ico:'🧀',name:'Пармезан + ветчина',kcal:300,p:24,c:2,f:22},{time:'Обед',ico:'🥩',name:'Котлеты из говядины + цезарь',kcal:560,p:44,c:6,f:38},{time:'Перекус',ico:'🥚',name:'Фаршированные яйца с майонезом',kcal:240,p:14,c:2,f:20},{time:'Ужин',ico:'🐟',name:'Запечённая форель с розмарином',kcal:440,p:44,c:2,f:28}]},
    {day:'Пт',meals:[{time:'Завтрак',ico:'🍳',name:'Яйца пашот + авокадо',kcal:390,p:20,c:8,f:32},{time:'Перекус',ico:'🧀',name:'Моцарелла с томатами',kcal:270,p:18,c:6,f:20},{time:'Обед',ico:'🥩',name:'Тушёная свинина с капустой',kcal:520,p:40,c:10,f:34},{time:'Перекус',ico:'🥜',name:'Тыквенные семечки + чеддер',kcal:310,p:16,c:6,f:26},{time:'Ужин',ico:'🍗',name:'Куриные крылышки гриль',kcal:450,p:36,c:4,f:32}]},
    {day:'Сб',meals:[{time:'Завтрак',ico:'🍳',name:'Кето-панкейки из миндальной муки',kcal:380,p:18,c:8,f:30},{time:'Перекус',ico:'🥑',name:'Авокадо с лимоном и чесноком',kcal:220,p:4,c:10,f:18},{time:'Обед',ico:'🐟',name:'Тунец с оливковым маслом',kcal:490,p:44,c:4,f:30},{time:'Перекус',ico:'🧀',name:'Йогурт без лактозы + орехи',kcal:300,p:14,c:6,f:24},{time:'Ужин',ico:'🥩',name:'Рибай стейк + гриль-овощи',kcal:600,p:52,c:6,f:40}]},
    {day:'Вс',meals:[{time:'Завтрак',ico:'🥣',name:'Кофе буллет + яйца со шпинатом',kcal:350,p:20,c:4,f:28},{time:'Перекус',ico:'🥚',name:'Девиллед эгг + сёмга',kcal:290,p:24,c:2,f:22},{time:'Обед',ico:'🍗',name:'Запечённая курица (порция)',kcal:540,p:46,c:2,f:36},{time:'Перекус',ico:'🧀',name:'Творог с маслом и орехами',kcal:280,p:18,c:4,f:22},{time:'Ужин',ico:'🐟',name:'Лосось с лимонным маслом',kcal:470,p:40,c:2,f:32}]},
  ],
};

let currentDietDay = 0;
let activeDietType = 'standard';
let activeBudget = 'any';
let weekPlan = null;
let currentFoodCat = 'all';
let currentMealTime = 'Завтрак';
let mealsByDay = {};

function todayKey(offset = 0) {
  const d = new Date(); d.setDate(d.getDate() + offset);
  return d.toISOString().split('T')[0];
}
function switchDietTab(tab) {
  ['today','week','calc'].forEach(t => {
    document.getElementById('diet-content-' + t).style.display = t === tab ? 'block' : 'none';
    document.getElementById('dtab-' + t).classList.toggle('active', t === tab);
  });
}
function changeDietDay(delta) {
  currentDietDay = Math.max(-6, Math.min(0, currentDietDay + delta));
  updateDietDayLabel();
  loadDayMeals();
  document.getElementById('diet-day-next').disabled = currentDietDay >= 0;
}
function updateDietDayLabel() {
  const days = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];
  const months = ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'];
  const d = new Date(); d.setDate(d.getDate() + currentDietDay);
  const el = document.getElementById('diet-day-lbl');
  const sub = document.getElementById('diet-date-sub');
  if (currentDietDay === 0) {
    el.textContent = 'Сегодня';
    if (sub) sub.textContent = `Сегодня · ${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`;
  } else if (currentDietDay === -1) {
    el.textContent = 'Вчера';
    if (sub) sub.textContent = `Вчера · ${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`;
  } else {
    el.textContent = `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`;
    if (sub) sub.textContent = el.textContent;
  }
}
function loadDayMeals() {
  const key = todayKey(currentDietDay);
  meals = mealsByDay[key] || [];
  renderMeals(); recalcMacros();
}
function recalcMacros() {
  let kcal = 0, p = 0, c = 0, f = 0;
  meals.forEach(m => { kcal += m.kcal; p += m.p; c += m.c; f += m.f; });
  const t = MEAL_TARGETS;
  document.getElementById('mc-kcal-val').textContent = Math.round(kcal).toLocaleString('ru');
  document.getElementById('mc-prot-val').textContent = Math.round(p);
  document.getElementById('mc-carb-val').textContent = Math.round(c);
  document.getElementById('mc-fat-val').textContent  = Math.round(f);
  document.getElementById('mc-kcal-bar').style.width = Math.min(100, kcal / t.kcal * 100) + '%';
  document.getElementById('mc-prot-bar').style.width = Math.min(100, p   / t.p   * 100) + '%';
  document.getElementById('mc-carb-bar').style.width = Math.min(100, c   / t.c   * 100) + '%';
  document.getElementById('mc-fat-bar').style.width  = Math.min(100, f   / t.f   * 100) + '%';
}
function renderMeals() {
  const el = document.getElementById('meals-list');
  if (!meals.length) {
    el.innerHTML = `<div style="text-align:center;padding:var(--sp7) 0;color:var(--t3)">
      <div style="font-size:36px;margin-bottom:var(--sp3)">🍽️</div>
      <div style="font-size:14px;font-weight:600;color:var(--t2);margin-bottom:var(--sp2)">Нет записей за этот день</div>
      <div style="font-size:13px">Нажми «Добавить» чтобы зафиксировать приём пищи</div>
    </div>`; return;
  }
  const order = ['Завтрак','Обед','Перекус','Перед тренировкой','После тренировки','Ужин'];
  const grouped = {};
  meals.forEach((m, i) => { if (!grouped[m.time]) grouped[m.time] = []; grouped[m.time].push({...m, idx:i}); });
  el.innerHTML = order.filter(t => grouped[t]).map(time => `
    <div class="meal-group">
      <div class="meal-group-lbl">${MEAL_EMOJI[time]||'🍽️'} ${time}</div>
      ${grouped[time].map(m => `
        <div class="meal-row">
          <div class="meal-info">
            <div class="meal-name">${m.name}${m.g ? ` · ${m.g}г` : ''}</div>
            <div class="meal-mac">Б ${Math.round(m.p)}г · У ${Math.round(m.c)}г · Ж ${Math.round(m.f)}г</div>
          </div>
          <div class="meal-kcal">${Math.round(m.kcal)}<small>ккал</small></div>
          <button class="del-meal-btn" onclick="deleteMeal(${m.idx})"><i class="ph ph-trash"></i></button>
        </div>`).join('')}
    </div>`).join('');
}
function deleteMeal(i) {
  meals.splice(i, 1);
  mealsByDay[todayKey(currentDietDay)] = [...meals];
  renderMeals(); recalcMacros();
}
function openMealDrawer() {
  document.getElementById('mealDrawer').classList.add('open');
  document.body.style.overflow = 'hidden';
  currentFoodCat = 'all';
  document.querySelectorAll('.meal-time-chip').forEach((c,i) => c.classList.toggle('active', i===0));
  document.querySelectorAll('.meal-cat-btn').forEach((c,i) => c.classList.toggle('active', i===0));
  document.getElementById('meal-search-input').value = '';
  document.getElementById('meal-search-clear').style.display = 'none';
  document.getElementById('meal-gram-input').value = 100;
  currentMealTime = 'Завтрак';
  renderFoodGrid('');
}
function closeMealDrawer() {
  document.getElementById('mealDrawer').classList.remove('open');
  document.body.style.overflow = '';
}
function maybecloseMealDrawer(e) {
  if (e.target === document.getElementById('mealDrawer')) closeMealDrawer();
}
function selectMealTime(btn, time) {
  document.querySelectorAll('.meal-time-chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  currentMealTime = time;
  document.getElementById('meal-drawer-sub').textContent = `Добавляем в: ${time}`;
}
function filterFoodCat(btn, cat) {
  document.querySelectorAll('.meal-cat-btn').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  currentFoodCat = cat;
  renderFoodGrid(document.getElementById('meal-search-input').value);
}
function clearFoodSearch() {
  document.getElementById('meal-search-input').value = '';
  document.getElementById('meal-search-clear').style.display = 'none';
  renderFoodGrid('');
}
function updateFoodGridCalcs() { renderFoodGrid(document.getElementById('meal-search-input').value); }
function renderFoodGrid(query) {
  const clearBtn = document.getElementById('meal-search-clear');
  if (clearBtn) clearBtn.style.display = query ? 'flex' : 'none';
  const g = parseInt(document.getElementById('meal-gram-input').value) || 100;
  let list = FOOD_DB;
  if (currentFoodCat !== 'all') list = list.filter(f => f.cat === currentFoodCat);
  if (query.trim()) list = list.filter(f => f.name.toLowerCase().includes(query.toLowerCase()));
  if (activeBudget && activeBudget !== 'any') {
    const bo = ['low','medium','high'];
    const maxIdx = bo.indexOf(activeBudget);
    list = list.filter(f => bo.indexOf(f.budget) <= maxIdx);
  }
  const el = document.getElementById('food-grid');
  if (!list.length) { el.innerHTML = `<div style="text-align:center;padding:var(--sp7) 0;color:var(--t3);font-size:13.5px">Ничего не найдено</div>`; return; }
  el.innerHTML = list.map(f => {
    const mult = g / 100;
    return `<div class="food-item" id="fi-${f.id}" onclick="quickAddFood('${f.id}')">
      <div class="food-item-ico">${f.ico}</div>
      <div class="food-item-info">
        <div class="food-item-name">${f.name}</div>
        <div class="food-item-mac">Б${Math.round(f.p*mult)} · У${Math.round(f.c*mult)} · Ж${Math.round(f.f*mult)}</div>
      </div>
      <div class="food-item-kcal">${Math.round(f.kcal*mult)}</div>
      <button class="food-item-add" onclick="event.stopPropagation();quickAddFood('${f.id}')"><i class="ph ph-plus"></i></button>
    </div>`;
  }).join('');
}
function quickAddFood(id) {
  const f = FOOD_DB.find(x => x.id === id); if (!f) return;
  const g = parseInt(document.getElementById('meal-gram-input').value) || 100;
  const mult = g / 100;
  meals.push({ name:f.name, time:currentMealTime, g, kcal:f.kcal*mult, p:f.p*mult, c:f.c*mult, f:f.f*mult });
  mealsByDay[todayKey(currentDietDay)] = [...meals];
  renderMeals(); recalcMacros();
  const el = document.getElementById('fi-' + id);
  if (el) { el.classList.add('just-added'); setTimeout(() => el.classList.remove('just-added'), 800); }
}
function openCustomMeal() { document.getElementById('customMealModal').classList.add('open'); }
function addCustomMeal() {
  const name = document.getElementById('custom-name').value.trim();
  const g    = parseFloat(document.getElementById('custom-g').value)    || 0;
  const kcal = parseFloat(document.getElementById('custom-kcal').value) || 0;
  const p    = parseFloat(document.getElementById('custom-p').value)    || 0;
  const c    = parseFloat(document.getElementById('custom-c').value)    || 0;
  const f    = parseFloat(document.getElementById('custom-f').value)    || 0;
  if (!name) return;
  meals.push({ name, time:currentMealTime, g, kcal, p, c, f });
  mealsByDay[todayKey(currentDietDay)] = [...meals];
  renderMeals(); recalcMacros();
  document.getElementById('customMealModal').classList.remove('open');
  ['custom-name','custom-kcal','custom-p','custom-c','custom-f'].forEach(id => document.getElementById(id).value='');
  document.getElementById('custom-g').value = 300;
}
/* Budget-specific plan overrides — low budget */
const WEEK_MEAL_PLANS_LOW = {
  standard: [
    {day:'Пн',meals:[{time:'Завтрак',ico:'🥣',name:'Овсянка на воде с бананом',kcal:290,p:8,c:58,f:4},{time:'Перекус',ico:'🍎',name:'Яблоко',kcal:52,p:0,c:14,f:0},{time:'Обед',ico:'🍱',name:'Гречка с куриным бедром',kcal:420,p:32,c:42,f:10},{time:'Перекус',ico:'🧀',name:'Творог 5% с вареньем',kcal:180,p:14,c:20,f:4},{time:'Ужин',ico:'🐟',name:'Скумбрия запечённая + капуста',kcal:340,p:26,c:8,f:18}]},
    {day:'Вт',meals:[{time:'Завтрак',ico:'🍳',name:'Яичница 3 яйца + хлеб ржаной',kcal:330,p:20,c:24,f:18},{time:'Перекус',ico:'🍌',name:'Банан',kcal:89,p:1,c:23,f:0},{time:'Обед',ico:'🍲',name:'Борщ домашний + хлеб',kcal:310,p:12,c:36,f:10},{time:'Перекус',ico:'🥛',name:'Кефир 1%',kcal:80,p:6,c:9,f:2},{time:'Ужин',ico:'🍗',name:'Куриная грудка + гречка',kcal:390,p:36,c:38,f:5}]},
    {day:'Ср',meals:[{time:'Завтрак',ico:'🥣',name:'Овсянка с молоком',kcal:270,p:9,c:48,f:5},{time:'Перекус',ico:'🍎',name:'Яблоко + чай',kcal:52,p:0,c:14,f:0},{time:'Обед',ico:'🍽️',name:'Перловка с куриным фаршем',kcal:380,p:28,c:42,f:8},{time:'Перекус',ico:'🧀',name:'Творог 0% с мёдом',kcal:120,p:18,c:10,f:1},{time:'Ужин',ico:'🥩',name:'Говяжий фарш с тушёными овощами',kcal:360,p:26,c:14,f:18}]},
    {day:'Чт',meals:[{time:'Завтрак',ico:'🍳',name:'Омлет из 2 яиц + хлеб',kcal:280,p:16,c:20,f:14},{time:'Перекус',ico:'🍊',name:'Апельсин',kcal:47,p:1,c:12,f:0},{time:'Обед',ico:'🍚',name:'Рис с тушёной курицей',kcal:400,p:28,c:48,f:7},{time:'Перекус',ico:'🥛',name:'Кефир + хлебец',kcal:140,p:8,c:22,f:2},{time:'Ужин',ico:'🐟',name:'Тунец консервированный + картофель',kcal:310,p:24,c:32,f:4}]},
    {day:'Пт',meals:[{time:'Завтрак',ico:'🥣',name:'Гречневая каша на воде',kcal:185,p:7,c:38,f:2},{time:'Перекус',ico:'🍌',name:'Банан + стакан молока',kcal:149,p:4,c:32,f:3},{time:'Обед',ico:'🍽️',name:'Куриный суп с вермишелью',kcal:210,p:14,c:24,f:5},{time:'Перекус',ico:'🧀',name:'Творог с яблоком',kcal:160,p:14,c:16,f:4},{time:'Ужин',ico:'🥩',name:'Котлеты домашние + макароны',kcal:480,p:28,c:52,f:16}]},
    {day:'Сб',meals:[{time:'Завтрак',ico:'🥞',name:'Блинчики на кефире',kcal:320,p:10,c:50,f:9},{time:'Перекус',ico:'🍎',name:'Фрукты по сезону',kcal:70,p:1,c:17,f:0},{time:'Обед',ico:'🥩',name:'Запечённое куриное бедро + овощи',kcal:380,p:30,c:16,f:18},{time:'Перекус',ico:'🥛',name:'Молоко + хлеб',kcal:160,p:6,c:26,f:4},{time:'Ужин',ico:'🥚',name:'Яичница с помидором и луком',kcal:260,p:16,c:8,f:18}]},
    {day:'Вс',meals:[{time:'Завтрак',ico:'🥣',name:'Каша пшённая с молоком',kcal:240,p:7,c:44,f:4},{time:'Перекус',ico:'🍌',name:'Банан',kcal:89,p:1,c:23,f:0},{time:'Обед',ico:'🍽️',name:'Картофельное пюре + скумбрия',kcal:390,p:22,c:42,f:12},{time:'Перекус',ico:'🧀',name:'Творог 5% с ягодами',kcal:150,p:14,c:14,f:4},{time:'Ужин',ico:'🐟',name:'Минтай тушёный + рис',kcal:290,p:22,c:38,f:3}]},
  ],
  high_protein: [
    {day:'Пн',meals:[{time:'Завтрак',ico:'🍳',name:'Яичница 4 яйца + хлеб',kcal:380,p:28,c:18,f:24},{time:'Перекус',ico:'🧀',name:'Творог 0% 200г',kcal:158,p:36,c:6,f:1},{time:'Обед',ico:'🍗',name:'Куриная грудка 300г + гречка',kcal:490,p:56,c:40,f:8},{time:'Перекус',ico:'🥛',name:'Кефир 500мл',kcal:200,p:18,c:24,f:5},{time:'Ужин',ico:'🐟',name:'Скумбрия + капуста тушёная',kcal:380,p:28,c:10,f:22}]},
    {day:'Вт',meals:[{time:'Завтрак',ico:'🥣',name:'Овсянка на молоке + 3 белка',kcal:320,p:28,c:36,f:6},{time:'Перекус',ico:'🐟',name:'Тунец консервированный 185г',kcal:235,p:52,c:0,f:2},{time:'Обед',ico:'🥩',name:'Говяжий фарш с рисом',kcal:480,p:38,c:46,f:14},{time:'Перекус',ico:'🧀',name:'Творог 5% с арахисовой пастой',kcal:260,p:22,c:12,f:14},{time:'Ужин',ico:'🍗',name:'Куриные бёдра 300г + брокколи',kcal:420,p:40,c:8,f:20}]},
    {day:'Ср',meals:[{time:'Завтрак',ico:'🍳',name:'Омлет 4 яйца + тунец',kcal:360,p:44,c:4,f:18},{time:'Перекус',ico:'🥚',name:'Яйца вкрутую 3 шт',kcal:234,p:18,c:2,f:16},{time:'Обед',ico:'🍱',name:'Гречка 200г + куриная грудка',kcal:450,p:46,c:40,f:8},{time:'Перекус',ico:'🥛',name:'Молоко + творог',kcal:220,p:24,c:12,f:6},{time:'Ужин',ico:'🐟',name:'Скумбрия запечённая',kcal:300,p:24,c:0,f:20}]},
    {day:'Чт',meals:[{time:'Завтрак',ico:'🥣',name:'Творожная каша с бананом',kcal:340,p:30,c:38,f:6},{time:'Перекус',ico:'🐟',name:'Тунец с огурцом',kcal:170,p:34,c:4,f:2},{time:'Обед',ico:'🥩',name:'Котлеты паровые + рис',kcal:480,p:42,c:48,f:10},{time:'Перекус',ico:'🧀',name:'Творог 0% 250г',kcal:198,p:45,c:8,f:2},{time:'Ужин',ico:'🍗',name:'Куриный фарш с овощами',kcal:360,p:38,c:12,f:16}]},
    {day:'Пт',meals:[{time:'Завтрак',ico:'🍳',name:'Яичница + кефир',kcal:310,p:24,c:10,f:18},{time:'Перекус',ico:'🥚',name:'3 варёных яйца',kcal:234,p:18,c:2,f:16},{time:'Обед',ico:'🍱',name:'Перловка + говяжий фарш',kcal:440,p:36,c:50,f:10},{time:'Перекус',ico:'🧀',name:'Творог + кефир смузи',kcal:180,p:28,c:8,f:4},{time:'Ужин',ico:'🍗',name:'Куриная грудка запечённая',kcal:280,p:48,c:0,f:8}]},
    {day:'Сб',meals:[{time:'Завтрак',ico:'🥣',name:'Гречка с молоком + яйца',kcal:380,p:24,c:48,f:10},{time:'Перекус',ico:'🐟',name:'Скумбрия консервированная',kcal:220,p:18,c:0,f:16},{time:'Обед',ico:'🥩',name:'Говядина тушёная + картофель',kcal:500,p:36,c:46,f:14},{time:'Перекус',ico:'🧀',name:'Творог с молоком',kcal:200,p:24,c:10,f:6},{time:'Ужин',ico:'🥚',name:'Белковый омлет из 4 яиц',kcal:280,p:28,c:4,f:16}]},
    {day:'Вс',meals:[{time:'Завтрак',ico:'🍳',name:'Яйца пашот + хлеб + тунец',kcal:350,p:32,c:18,f:16},{time:'Перекус',ico:'🥛',name:'Кефир 500мл',kcal:200,p:18,c:24,f:5},{time:'Обед',ico:'🍗',name:'Куриная грудка + гречка',kcal:450,p:52,c:40,f:8},{time:'Перекус',ico:'🧀',name:'Творог 0% + банан',kcal:240,p:36,c:26,f:1},{time:'Ужин',ico:'🐟',name:'Рыбные котлеты + тушёные овощи',kcal:340,p:28,c:16,f:14}]},
  ],
};

const WEEK_MEAL_PLANS_HIGH = {
  standard: [
    {day:'Пн',meals:[{time:'Завтрак',ico:'🥞',name:'Панкейки с ягодами и мёдом',kcal:420,p:14,c:72,f:10},{time:'Перекус',ico:'🫐',name:'Ягодный смузи-боул',kcal:280,p:8,c:52,f:6},{time:'Обед',ico:'🥩',name:'Стейк из говядины + спаржа',kcal:580,p:52,c:8,f:34},{time:'Перекус',ico:'🥑',name:'Авокадо-тост с лососем',kcal:360,p:20,c:24,f:22},{time:'Ужин',ico:'🐟',name:'Форель запечённая с травами',kcal:420,p:40,c:4,f:26}]},
    {day:'Вт',meals:[{time:'Завтрак',ico:'🥣',name:'Гранола с кокосовым молоком и манго',kcal:440,p:10,c:68,f:14},{time:'Перекус',ico:'🍓',name:'Клубника со сливками',kcal:180,p:3,c:22,f:10},{time:'Обед',ico:'🍝',name:'Паста с морепродуктами',kcal:560,p:36,c:62,f:14},{time:'Перекус',ico:'🧀',name:'Сыр с виноградом',kcal:280,p:14,c:22,f:16},{time:'Ужин',ico:'🥩',name:'Говяжий рибай + руккола',kcal:560,p:48,c:4,f:38}]},
    {day:'Ср',meals:[{time:'Завтрак',ico:'🍳',name:'Яйца Бенедикт с лососем',kcal:480,p:28,c:26,f:30},{time:'Перекус',ico:'🥝',name:'Фруктовый боул',kcal:200,p:3,c:44,f:2},{time:'Обед',ico:'🍜',name:'Том-ям с креветками',kcal:360,p:28,c:24,f:16},{time:'Перекус',ico:'🥜',name:'Миндаль + тёмный шоколад',kcal:290,p:8,c:20,f:20},{time:'Ужин',ico:'🐟',name:'Лосось с мисо-глазурью + рис',kcal:490,p:38,c:46,f:16}]},
    {day:'Чт',meals:[{time:'Завтрак',ico:'🥣',name:'Чиа-пудинг с манго и кокосом',kcal:380,p:12,c:52,f:14},{time:'Перекус',ico:'🫐',name:'Черника с греческим йогуртом',kcal:180,p:10,c:28,f:3},{time:'Обед',ico:'🥗',name:'Сёмга с киноа-салатом',kcal:520,p:38,c:42,f:20},{time:'Перекус',ico:'🍫',name:'Протеиновый батончик премиум',kcal:240,p:22,c:20,f:8},{time:'Ужин',ico:'🦐',name:'Креветки гриль + авокадо',kcal:360,p:34,c:8,f:22}]},
    {day:'Пт',meals:[{time:'Завтрак',ico:'🍳',name:'Омлет с трюфелем и сыром',kcal:460,p:26,c:4,f:38},{time:'Перекус',ico:'🍇',name:'Виноград + камамбер',kcal:260,p:8,c:28,f:14},{time:'Обед',ico:'🥩',name:'Утиная грудка с вишнёвым соусом',kcal:540,p:42,c:18,f:32},{time:'Перекус',ico:'🥑',name:'Гуакамоле с чипсами тортилья',kcal:320,p:6,c:36,f:18},{time:'Ужин',ico:'🐟',name:'Дорадо запечённая с лимоном',kcal:340,p:36,c:2,f:20}]},
    {day:'Сб',meals:[{time:'Завтрак',ico:'🥞',name:'Бельгийские вафли с ягодами',kcal:480,p:12,c:78,f:14},{time:'Перекус',ico:'🍓',name:'Ягодный смузи с протеином',kcal:280,p:24,c:36,f:5},{time:'Обед',ico:'🦞',name:'Лангустины гриль + салат',kcal:380,p:44,c:6,f:18},{time:'Перекус',ico:'🧀',name:'Брускетта с моцареллой',kcal:300,p:12,c:30,f:16},{time:'Ужин',ico:'🥩',name:'Стейк Нью-Йорк + картофель Дофинуа',kcal:680,p:52,c:38,f:36}]},
    {day:'Вс',meals:[{time:'Завтрак',ico:'🍳',name:'Фритата с овощами и козьим сыром',kcal:360,p:22,c:12,f:26},{time:'Перекус',ico:'🥭',name:'Манго с лаймом',kcal:120,p:2,c:30,f:0},{time:'Обед',ico:'🍽️',name:'Воскресный ростбиф с йоркширскими пудингами',kcal:620,p:48,c:36,f:30},{time:'Перекус',ico:'🧀',name:'Сырная тарелка с инжиром',kcal:320,p:16,c:22,f:20},{time:'Ужин',ico:'🐟',name:'Карпаччо из лосося + авокадо',kcal:380,p:30,c:8,f:26}]},
  ],
};

function generateWeekPlan() {
  const budget = activeBudget || 'any';
  const diet   = activeDietType || 'standard';

  // Choose plan based on budget
  let planSource;
  if (budget === 'low' && WEEK_MEAL_PLANS_LOW[diet]) {
    planSource = WEEK_MEAL_PLANS_LOW[diet];
  } else if (budget === 'high' && WEEK_MEAL_PLANS_HIGH[diet]) {
    planSource = WEEK_MEAL_PLANS_HIGH[diet];
  } else {
    planSource = WEEK_MEAL_PLANS[diet] || WEEK_MEAL_PLANS.standard;
  }

  weekPlan = planSource;
  renderWeekPlan();

  // Auto-switch to week plan tab
  switchDietTab('week');
}
function renderWeekPlan() {
  const container = document.getElementById('week-plan-container');
  if (!weekPlan) {
    container.innerHTML = `<div class="week-plan-empty">
      <div class="week-plan-empty-icon">🥗</div>
      <div class="week-plan-empty-title">Рацион ещё не создан</div>
      <div class="week-plan-empty-sub">Пройди опрос или нажми «Сгенерировать» — составим план питания на 7 дней под твои цели и бюджет.</div>
      <button class="week-plan-gen-btn" onclick="generateWeekPlan()"><i class="ph ph-sparkle"></i> Сгенерировать рацион</button>
    </div>`;
    return;
  }

  const dietLabels   = { standard:'Стандартное', high_protein:'Высокобелковое', vegan:'Веганское', keto:'Кето' };
  const budgetLabels = { low:'💰 Эконом', medium:'💳 Умеренный', high:'💎 Премиум', any:'Любой' };
  const dayNames     = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];

  const badge = `<div class="week-plan-meta">
    <span class="wp-badge">${dietLabels[activeDietType]||'Стандартное'}</span>
    <span class="wp-badge">${budgetLabels[activeBudget]||'Любой'}</span>
    <span class="wp-badge">${MEAL_TARGETS.kcal} ккал/день</span>
  </div>`;

  container.innerHTML = badge + weekPlan.map((dayData, idx) => {
    const totalKcal = dayData.meals.reduce((s,m) => s+m.kcal, 0);
    const totalP    = dayData.meals.reduce((s,m) => s+m.p, 0);
    const totalC    = dayData.meals.reduce((s,m) => s+m.c, 0);
    const totalF    = dayData.meals.reduce((s,m) => s+m.f, 0);
    return `<div class="week-day-card" id="wdc-${idx}">
      <div class="week-day-hd" onclick="toggleWeekDay(${idx})">
        <div class="week-day-pill"><span class="wdp-d">${dayData.day}</span><span class="wdp-n">${idx+1}</span></div>
        <div class="week-day-info">
          <div class="week-day-name">${dayNames[idx]}</div>
          <div class="week-day-macros">Б ${Math.round(totalP)}г · У ${Math.round(totalC)}г · Ж ${Math.round(totalF)}г</div>
        </div>
        <div class="week-day-kcal">${Math.round(totalKcal)}<span style="font-size:11px;color:rgba(0,0,0,.35);font-family:var(--body);margin-left:2px">ккал</span></div>
        <i class="ph ph-caret-down week-day-chevron"></i>
      </div>
      <div class="week-day-meals">
        ${dayData.meals.map(m => `
          <div class="wdm-row">
            <div class="wdm-ico">${m.ico}</div>
            <div class="wdm-info">
              <div class="wdm-time">${m.time}</div>
              <div class="wdm-name">${m.name}</div>
              <div class="wdm-mac">Б ${Math.round(m.p)} · У ${Math.round(m.c)} · Ж ${Math.round(m.f)}</div>
            </div>
            <div class="wdm-kcal">${m.kcal}<small>ккал</small></div>
            <button class="wdm-add-btn" onclick='addFromWeekPlan(${JSON.stringify(m)})'>+ Сегодня</button>
          </div>`).join('')}
        <button class="wdm-day-btn" onclick="applyFullDay(${idx})">
          <i class="ph ph-calendar-check"></i> Добавить весь день в журнал
        </button>
      </div>
    </div>`;
  }).join('');
}
function toggleWeekDay(idx) { document.getElementById('wdc-'+idx)?.classList.toggle('open'); }
function addFromWeekPlan(m) {
  meals.push({ name:m.name, time:m.time, g:null, kcal:m.kcal, p:m.p, c:m.c, f:m.f });
  mealsByDay[todayKey(currentDietDay)] = [...meals];
  renderMeals(); recalcMacros();
  switchDietTab('today');
}
function applyFullDay(idx) {
  if (!weekPlan || !weekPlan[idx]) return;
  weekPlan[idx].meals.forEach(m => {
    meals.push({ name:m.name, time:m.time, g:null, kcal:m.kcal, p:m.p, c:m.c, f:m.f });
  });
  mealsByDay[todayKey(currentDietDay)] = [...meals];
  renderMeals(); recalcMacros();
  switchDietTab('today');
}
function calcCalories() {
  const age = parseInt(document.getElementById('calc-age').value)      || 25;
  const w   = parseFloat(document.getElementById('calc-weight').value) || 70;
  const h   = parseFloat(document.getElementById('calc-height').value) || 170;
  const sex = document.getElementById('calc-sex').value;
  const act = parseFloat(document.getElementById('calc-activity').value) || 1.55;
  const bmr = sex === 'm' ? (10*w+6.25*h-5*age+5) : (10*w+6.25*h-5*age-161);
  const tdee = Math.round(bmr * act);
  calcTdee = tdee;
  document.getElementById('cr-bmr').textContent  = Math.round(bmr);
  document.getElementById('cr-tdee').textContent  = tdee;
  document.getElementById('cr-cut').textContent   = tdee - 400;
  document.getElementById('cr-bulk').textContent  = tdee + 400;
  document.getElementById('calc-result').classList.add('show');
}
function applyCalcResult() {
  if (!calcTdee) return;
  MEAL_TARGETS.kcal = calcTdee;
  MEAL_TARGETS.p = Math.round(calcTdee*.3/4);
  MEAL_TARGETS.c = Math.round(calcTdee*.45/4);
  MEAL_TARGETS.f = Math.round(calcTdee*.25/9);
  document.getElementById('kcal-target').textContent = calcTdee.toLocaleString('ru');
  document.getElementById('prot-target').textContent = MEAL_TARGETS.p;
  document.getElementById('carb-target').textContent = MEAL_TARGETS.c;
  document.getElementById('fat-target').textContent  = MEAL_TARGETS.f;
  recalcMacros();
  document.getElementById('calc-result').classList.remove('show');
  const btn = document.querySelector('.calc-apply-btn');
  btn.textContent = '✓ Цели обновлены!'; btn.style.background = 'var(--sage)';
  setTimeout(() => { btn.textContent = 'Применить как цель →'; btn.style.background=''; }, 2000);
}
function applyDietOnboarding() {
  const { diet_type, kcal, budget } = obProfile.diet;
  if (!kcal && !diet_type) return;
  activeDietType = diet_type || 'standard';
  activeBudget   = budget   || 'any';
  const base = 2200;
  const adjMap = { deficit:-400, maintenance:0, surplus:400, auto:0 };
  const adj = adjMap[kcal] ?? 0;
  const target = base + adj;
  const ratios = { standard:{p:.30,c:.45,f:.25}, high_protein:{p:.40,c:.40,f:.20}, vegan:{p:.25,c:.55,f:.20}, keto:{p:.30,c:.05,f:.65} };
  const r = ratios[diet_type] || ratios.standard;
  MEAL_TARGETS.kcal = target;
  MEAL_TARGETS.p = Math.round(target*r.p/4);
  MEAL_TARGETS.c = Math.round(target*r.c/4);
  MEAL_TARGETS.f = Math.round(target*r.f/9);
  document.getElementById('kcal-target').textContent = target.toLocaleString('ru');
  document.getElementById('prot-target').textContent = MEAL_TARGETS.p;
  document.getElementById('carb-target').textContent = MEAL_TARGETS.c;
  document.getElementById('fat-target').textContent  = MEAL_TARGETS.f;
  recalcMacros();
  generateWeekPlan();
  const dietLabels = { standard:'Стандартное', high_protein:'Высокобелковое', vegan:'Веганское', keto:'Кето' };
  const budgetLabels = { low:'до 400 ₽/день', medium:'400–800 ₽/день', high:'без ограничений', any:'любой бюджет' };
  showObResultsBanner('🥗',
    `Рацион настроен: <strong>${dietLabels[diet_type]||'Стандартное'}</strong> · ${target} ккал/день · ${budgetLabels[budget]||''}`,
    'Рацион готов'
  );
}

/* ══════════════════════════════════════
   SHOP
══════════════════════════════════════ */
function renderShop() {
  const recIds = activePlan ? activePlan.recSupps : [];
  const banner = document.getElementById('shop-banner');
  if (activePlan) { banner.style.display = 'flex'; document.getElementById('srb-name').textContent = activePlan.title; }
  else banner.style.display = 'none';

  document.getElementById('shop-grid').innerHTML = PRODUCTS.map(p => {
    const isRec = recIds.includes(p.id);
    const inCart = cartItems[p.id] && cartItems[p.id].qty > 0;
    return `<div class="prod-card${isRec ? ' rec' : ''}${inCart ? ' in-cart' : ''}">
      <div class="prod-thumb">
        <img src="${PROD_PHOTOS[p.id]}" alt="${p.name}" onerror="this.style.background='#e8e4de'">
        ${p.badge ? `<div class="p-new-b">${p.badge}</div>` : ''}
        ${isRec ? '<div class="p-rec-b">Для тебя</div>' : ''}
      </div>
      <div class="prod-body">
        <div class="p-brand">${p.brand}</div>
        <div class="p-name">${p.name}</div>
        <div class="p-desc">${p.desc}</div>
        <div class="prod-footer">
          <div class="p-price">${p.priceStr}<small>${p.unit}</small></div>
          <button class="add-btn${inCart ? ' added' : ''}" onclick="addToCart('${p.id}', event)">${inCart ? '✓ В корзине' : 'Купить'}</button>
        </div>
      </div></div>`;
  }).join('');
}

function addToCart(id, e) {
  e.stopPropagation();
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  if (!cartItems[id]) cartItems[id] = { ...p, qty: 0 };
  cartItems[id].qty++;
  updateCartBadge(); renderShop();
}
function updateCartBadge() {
  const total = Object.values(cartItems).reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cart-badge');
  badge.textContent = total;
  badge.style.display = total ? 'inline' : 'none';
  document.getElementById('cart-count-btn').textContent = total;
  document.getElementById('cart-open-btn').style.display = total ? 'flex' : 'none';
}
function openCart() { renderCart(); document.getElementById('cartDrawer').classList.add('open'); }
function closeCart() { document.getElementById('cartDrawer').classList.remove('open'); }
function maybeCloseCart(e) { if (e.target === document.getElementById('cartDrawer')) closeCart(); }
function renderCart() {
  const items = Object.values(cartItems).filter(i => i.qty > 0);
  const body = document.getElementById('cart-body');
  const footer = document.getElementById('cart-footer');
  if (!items.length) {
    body.innerHTML = `<div class="cart-empty"><span>🛒</span><p>Корзина пуста.</p></div>`;
    footer.style.display = 'none'; return;
  }
  body.innerHTML = items.map(i => `
    <div class="cart-item">
      <div class="cart-item-photo"><img src="${PROD_PHOTOS[i.id] || ''}" alt="${i.name}" onerror="this.parentNode.textContent='📦'"></div>
      <div class="cart-item-info"><strong>${i.name}</strong><span>${i.priceStr}${i.unit}</span></div>
      <div class="cart-qty">
        <button class="qty-btn" onclick="changeQty('${i.id}',-1)">−</button>
        <span class="qty-val">${i.qty}</span>
        <button class="qty-btn" onclick="changeQty('${i.id}',1)">+</button>
      </div>
      <div class="cart-item-price">₽${(i.price * i.qty).toLocaleString('ru')}</div>
    </div>`).join('');
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cart-total-val').textContent = '₽' + total.toLocaleString('ru');
  footer.style.display = 'block';
}
function changeQty(id, delta) {
  if (!cartItems[id]) return;
  cartItems[id].qty = Math.max(0, cartItems[id].qty + delta);
  if (cartItems[id].qty === 0) delete cartItems[id];
  updateCartBadge(); renderCart(); renderShop();
}
function checkout() {
  const items = Object.values(cartItems);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('checkout-summary').textContent = `Заказ на ₽${total.toLocaleString('ru')} принят. Доставка 2–4 рабочих дня.`;
  cartItems = {}; updateCartBadge(); renderCart(); closeCart(); renderShop();
  document.getElementById('checkoutModal').classList.add('open');
}
function gotoShop() { closeDetail(); switchTo('shop'); }

/* ══════════════════════════════════════
   RATING
══════════════════════════════════════ */
function renderLeaderboard() {
  document.getElementById('lb-table').innerHTML = LEADERBOARD.map(u => `
    <div class="lb-row${u.me ? ' me' : ''}">
      <div class="lb-rank${u.rank <= 3 ? ' top' : ''}">${u.rank}</div>
      <div class="lb-user-av" style="background:${u.avBg}">${u.av}</div>
      <div class="lb-user-info">
        <div class="lb-user-name">${u.name}${u.me ? '<span class="lb-you-badge">Ты</span>' : ''}</div>
        <div class="lb-user-sub">${u.sub}</div>
      </div>
      <div class="lb-pts">${u.pts.toLocaleString('ru')}<small> оч.</small></div>
      <div class="lb-change ${u.change.startsWith('+') ? 'up' : u.change.startsWith('-') ? 'down' : 'same'}">${u.change}</div>
    </div>`).join('');
}

/* ══════════════════════════════════════
   PROFILE
══════════════════════════════════════ */
function saveProfile() {
  const name    = document.getElementById('pf-name').value.trim();
  const surname = document.getElementById('pf-surname').value.trim();
  const age     = document.getElementById('pf-age').value;
  const city    = document.getElementById('pf-city').value.trim();
  const full = name + (surname ? ' ' + surname : '');

  document.getElementById('ph-name-display').textContent = full;
  document.getElementById('ph-sub-display').textContent = (city || '') + (age ? ' · ' + age + ' лет' : '');
  document.getElementById('sb-uname').textContent = full;
  document.getElementById('sb-usub').textContent = currentUser?.isGuest ? 'Гость' : 'Про';

  if (age)  document.getElementById('calc-age').value    = age;
  if (document.getElementById('pf-weight').value) document.getElementById('calc-weight').value = document.getElementById('pf-weight').value;
  if (document.getElementById('pf-height').value) document.getElementById('calc-height').value = document.getElementById('pf-height').value;

  const init = (name[0] || '') + (surname[0] || '');
  const img = document.getElementById('ph-avatar-img');
  if (img.style.display === 'none') {
    document.getElementById('ph-avatar-el').childNodes[0].textContent = init.toUpperCase() || 'А';
    document.getElementById('sb-avatar-el').textContent = init[0] || 'А';
  }
  const sc = document.getElementById('save-confirm');
  sc.classList.add('show');
  setTimeout(() => sc.classList.remove('show'), 2500);
}

function changeAvatar(input) {
  if (!input.files || !input.files[0]) return;
  const r = new FileReader();
  r.onload = e => {
    const img = document.getElementById('ph-avatar-img');
    img.src = e.target.result; img.style.display = 'block';
    document.getElementById('ph-avatar-el').childNodes[0].textContent = '';
    const sb = document.getElementById('sb-avatar-el');
    sb.style.backgroundImage = `url(${e.target.result})`;
    sb.style.backgroundSize = 'cover'; sb.textContent = '';
  };
  r.readAsDataURL(input.files[0]);
}

/* ══════════════════════════════════════
   NAVIGATION
══════════════════════════════════════ */
const TB_TITLES = {
  plans:   'Программы',
  myplan:  'Моя программа',
  diet:    'Питание',
  shop:    'Добавки',
  rating:  'Рейтинг',
  profile: 'Профиль',
};

function switchTo(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.sb-item').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.mn-item').forEach(b => b.classList.remove('active'));
  const p = document.getElementById('panel-' + name);
  if (p) p.classList.add('active');
  const nav = document.getElementById('nav-' + name);
  if (nav) nav.classList.add('active');
  const mn = document.getElementById('mn-' + name);
  if (mn) mn.classList.add('active');
  document.getElementById('tb-title').textContent = TB_TITLES[name] || '';
  closeSidebar();
  maybeShowOb(name);
  if (name === 'myplan' && activePlan) renderMyPlan();
}

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
renderProgs();
renderShop();
renderLeaderboard();

// Set today's date in diet subtitle
(function() {
  const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
  const months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
  const now = new Date();
  const el = document.getElementById('diet-date-sub');
  if (el) el.textContent = `Сегодня · ${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]}`;
})();

// Init diet day label
updateDietDayLabel();
document.getElementById('diet-day-next').disabled = true;

// Seed demo meals for today
const _todayKey = todayKey(0);
[
  {name:'Греческий йогурт с овсянкой', time:'Завтрак',  g:300, kcal:440, p:32, c:58, f:8},
  {name:'Куриное филе с киноа',        time:'Обед',     g:400, kcal:620, p:52, c:70, f:14},
].forEach(m => meals.push(m));
mealsByDay[_todayKey] = [...meals];
renderMeals();
recalcMacros();