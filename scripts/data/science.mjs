/**
 * 과학 — 2022 개정 교육과정 과학과 5~6학년군(6학년 중심) 주제 기반 예제 100문장.
 * Lexile 700 전후. 주제: 전기, 계절의 변화, 연소와 소화, 우리 몸, 빛과 렌즈,
 * 지구와 달, 여러 가지 기체, 생물과 환경, 식물, 열·에너지, 물의 상태와 날씨, 운동 등.
 *
 * 작성 형식: { tr, p: [ [문장성분, chunkGloss, "단어/품사 ..."] ] }
 * 품사: n명사 pr대명사 v동사 a형용사(관사/한정사) av부사 p전치사 c접속사
 * 성분: S주어 P서술어 O목적어 Od직접 Oi간접 C보어 M수식어
 */
export default {
  meta: { id: "science-6", title: "과학 6학년 — 다양한 주제 100문장" },
  items: [
    // ── 전기의 이용 ──
    { tr: "전기는 금속 전선을 통해 흐른다.", p: [["S","전기는","Electricity/n"],["P","흐른다","flows/v"],["M","금속 전선을 통해","through/p metal/a wires./n"]] },
    { tr: "건전지는 전구에 전기를 공급한다.", p: [["S","건전지는","A/a battery/n"],["P","공급한다","gives/v"],["O","전기를","power/n"],["M","전구에","to/p the/a bulb./n"]] },
    { tr: "전구는 밝게 빛난다.", p: [["S","전구는","The/a light/a bulb/n"],["P","빛난다","shines/v"],["M","밝게","brightly./av"]] },
    { tr: "스위치는 전류를 멈춘다.", p: [["S","스위치는","A/a switch/n"],["P","멈춘다","stops/v"],["O","전류를","the/a electric/a current./n"]] },
    { tr: "자석은 두 개의 극을 가지고 있다.", p: [["S","자석은","Magnets/n"],["P","가지고 있다","have/v"],["O","두 개의 극을","two/a poles./n"]] },
    { tr: "전자석은 전기가 있을 때만 작동한다.", p: [["S","전자석은","An/a electromagnet/n"],["P","작동한다","works/v"],["M","전기가 있을 때만","only/av with/p electricity./n"]] },
    { tr: "많은 가정은 매일 전기 에너지를 사용한다.", p: [["S","많은 가정은","Many/a homes/n"],["P","사용한다","use/v"],["O","전기 에너지를","electric/a energy/n"],["M","매일","every/a day./n"]] },
    { tr: "구리 전선은 전류를 잘 전달한다.", p: [["S","구리 전선은","A/a copper/a wire/n"],["P","전달한다","carries/v"],["O","전류를","the/a current/n"],["M","잘","well./av"]] },

    // ── 계절의 변화 ──
    { tr: "지구는 태양 주위를 움직인다.", p: [["S","지구는","The/a Earth/n"],["P","움직인다","moves/v"],["M","태양 주위를","around/p the/a Sun./n"]] },
    { tr: "지구의 축은 기울어져 있다.", p: [["S","지구의 축은","The/a Earth's/n axis/n"],["P","이다","is/v"],["C","기울어진 상태","tilted./a"]] },
    { tr: "여름의 낮은 길고 따뜻하다.", p: [["S","여름의 낮은","Summer/a days/n"],["P","이다","are/v"],["C","길고 따뜻하다","long/a and/c warm./a"]] },
    { tr: "겨울에는 밤이 더 길어진다.", p: [["M","겨울에는","In/p winter,/n"],["S","밤은","the/a nights/n"],["P","된다","become/v"],["C","더 길어","longer./a"]] },
    { tr: "여름에는 태양이 높이 뜬다.", p: [["S","태양은","The/a Sun/n"],["P","뜬다","rises/v"],["M","높이","high/av"],["M","여름에","in/p summer./n"]] },
    { tr: "계절은 기울기 때문에 변한다.", p: [["S","계절은","Seasons/n"],["P","변한다","change/v"],["M","기울기 때문에","because/p of/p the/a tilt./n"]] },
    { tr: "봄은 우리에게 따뜻한 날씨를 가져온다.", p: [["S","봄은","Spring/n"],["P","가져온다","brings/v"],["O","따뜻한 날씨를","warm/a weather/n"],["M","우리에게","to/p us./pr"]] },

    // ── 연소와 소화 ──
    { tr: "불은 산소와 열을 필요로 한다.", p: [["S","불은","Fire/n"],["P","필요로 한다","needs/v"],["O","산소와 열을","oxygen/n and/c heat./n"]] },
    { tr: "타는 나무는 재와 연기를 만든다.", p: [["S","타는 나무는","Burning/a wood/n"],["P","만든다","produces/v"],["O","재와 연기를","ash/n and/c smoke./n"]] },
    { tr: "물은 불을 빠르게 끈다.", p: [["S","물은","Water/n"],["P","끈다","stops/v"],["O","불을","a/a fire/n"],["M","빠르게","quickly./av"]] },
    { tr: "촛불의 불꽃은 매우 뜨겁다.", p: [["S","촛불의 불꽃은","A/a candle/a flame/n"],["P","이다","is/v"],["C","매우 뜨겁다","very/av hot./a"]] },
    { tr: "이산화탄소는 타는 것을 돕지 않는다.", p: [["S","이산화탄소는","Carbon/a dioxide/n"],["P","돕지 않는다","does/v not/av help/v"],["O","타는 것을","burning./n"]] },
    { tr: "마른 나뭇잎은 매우 빠르게 탄다.", p: [["S","마른 나뭇잎은","Dry/a leaves/n"],["P","탄다","burn/v"],["M","매우 빠르게","very/av fast./av"]] },

    // ── 우리 몸의 구조와 기능 ──
    { tr: "심장은 온몸으로 피를 내보낸다.", p: [["S","심장은","The/a heart/n"],["P","내보낸다","pumps/v"],["O","피를","blood/n"],["M","온몸으로","through/p the/a body./n"]] },
    { tr: "우리의 폐는 신선한 공기를 담는다.", p: [["S","우리의 폐는","Our/pr lungs/n"],["P","담는다","hold/v"],["O","신선한 공기를","fresh/a air./n"]] },
    { tr: "위는 우리의 음식을 소화한다.", p: [["S","위는","The/a stomach/n"],["P","소화한다","digests/v"],["O","우리의 음식을","our/pr food./n"]] },
    { tr: "튼튼한 뼈는 온몸을 지탱한다.", p: [["S","튼튼한 뼈는","Strong/a bones/n"],["P","지탱한다","support/v"],["O","온몸을","the/a whole/a body./n"]] },
    { tr: "근육은 우리의 팔과 다리를 움직인다.", p: [["S","근육은","Muscles/n"],["P","움직인다","move/v"],["O","우리의 팔과 다리를","our/pr arms/n and/c legs./n"]] },
    { tr: "뇌는 모든 신체 부위를 조절한다.", p: [["S","뇌는","The/a brain/n"],["P","조절한다","controls/v"],["O","모든 신체 부위를","every/a body/a part./n"]] },
    { tr: "우리는 폐로 숨 쉰다.", p: [["S","우리는","We/pr"],["P","숨 쉰다","breathe/v"],["M","폐로","with/p our/pr lungs./n"]] },
    { tr: "피는 세포로 산소를 운반한다.", p: [["S","피는","Blood/n"],["P","운반한다","carries/v"],["O","산소를","oxygen/n"],["M","세포로","to/p the/a cells./n"]] },
    { tr: "우리의 피부는 안쪽 장기를 보호한다.", p: [["S","우리의 피부는","Our/pr skin/n"],["P","보호한다","protects/v"],["O","안쪽 장기를","the/a inside/a organs./n"]] },
    { tr: "심장은 밤낮으로 뛴다.", p: [["S","심장은","The/a heart/n"],["P","뛴다","beats/v"],["M","밤낮으로","day/n and/c night./n"]] },

    // ── 빛과 렌즈 ──
    { tr: "빛은 직선으로 나아간다.", p: [["S","빛은","Light/n"],["P","나아간다","travels/v"],["M","직선으로","in/p a/a straight/a line./n"]] },
    { tr: "거울은 밝은 빛을 반사한다.", p: [["S","거울은","A/a mirror/n"],["P","반사한다","reflects/v"],["O","밝은 빛을","the/a bright/a light./n"]] },
    { tr: "렌즈는 빛을 굽힐 수 있다.", p: [["S","렌즈는","A/a lens/n"],["P","굽힐 수 있다","can/v bend/v"],["O","빛을","the/a light./n"]] },
    { tr: "볼록 렌즈는 더 큰 상을 보여 준다.", p: [["S","볼록 렌즈는","A/a convex/a lens/n"],["P","보여 준다","shows/v"],["O","더 큰 상을","a/a bigger/a image./n"]] },
    { tr: "햇빛은 여러 다른 색을 담고 있다.", p: [["S","햇빛은","Sunlight/n"],["P","담고 있다","contains/v"],["O","여러 다른 색을","many/a different/a colors./n"]] },
    { tr: "그림자는 단단한 물체 뒤에 생긴다.", p: [["S","그림자는","Shadows/n"],["P","생긴다","form/v"],["M","단단한 물체 뒤에","behind/p solid/a objects./n"]] },
    { tr: "프리즘은 흰 빛을 나눈다.", p: [["S","프리즘은","A/a prism/n"],["P","나눈다","splits/v"],["O","흰 빛을","white/a light./n"]] },
    { tr: "우리는 눈으로 물체를 본다.", p: [["S","우리는","We/pr"],["P","본다","see/v"],["O","물체를","objects/n"],["M","눈으로","with/p our/pr eyes./n"]] },

    // ── 지구와 달, 별 ──
    { tr: "달은 지구 주위를 천천히 돈다.", p: [["S","달은","The/a Moon/n"],["P","돈다","orbits/v"],["O","지구를","the/a Earth/n"],["M","천천히","slowly./av"]] },
    { tr: "달은 바위로 된 표면을 가지고 있다.", p: [["S","달은","The/a Moon/n"],["P","가지고 있다","has/v"],["O","바위로 된 표면을","a/a rocky/a surface./n"]] },
    { tr: "달의 모양은 매일 밤 변한다.", p: [["S","달의 모양은","The/a Moon's/n shape/n"],["P","변한다","changes/v"],["M","매일 밤","each/a night./n"]] },
    { tr: "우리는 한 달에 한 번 보름달을 본다.", p: [["S","우리는","We/pr"],["P","본다","see/v"],["O","보름달을","a/a full/a moon/n"],["M","한 달에 한 번","monthly./av"]] },
    { tr: "태양은 거대한 별이다.", p: [["S","태양은","The/a Sun/n"],["P","이다","is/v"],["C","거대한 별","a/a giant/a star./n"]] },
    { tr: "별은 지구에서 작게 보인다.", p: [["S","별은","Stars/n"],["P","보인다","look/v"],["C","작게","small/a"],["M","지구에서","from/p the/a Earth./n"]] },
    { tr: "분화구는 달의 표면을 덮는다.", p: [["S","분화구는","Craters/n"],["P","덮는다","cover/v"],["O","달의 표면을","the/a Moon's/n surface./n"]] },
    { tr: "북극성은 북쪽을 알려 준다.", p: [["S","북극성은","The/a North/a Star/n"],["P","알려 준다","shows/v"],["O","북쪽을","the/a north./n"]] },

    // ── 여러 가지 기체 ──
    { tr: "공기는 기체의 혼합물이다.", p: [["S","공기는","Air/n"],["P","이다","is/v"],["C","기체의 혼합물","a/a mixture/n of/p gases./n"]] },
    { tr: "산소는 모든 생물을 돕는다.", p: [["S","산소는","Oxygen/n"],["P","돕는다","helps/v"],["O","모든 생물을","every/a living/a thing./n"]] },
    { tr: "식물은 공기 중으로 산소를 내보낸다.", p: [["S","식물은","Plants/n"],["P","내보낸다","release/v"],["O","산소를","oxygen/n"],["M","공기 중으로","into/p the/a air./n"]] },
    { tr: "이산화탄소는 석회수를 뿌옇게 만든다.", p: [["S","이산화탄소는","Carbon/a dioxide/n"],["P","만든다","makes/v"],["O","석회수를","lime/a water/n"],["C","뿌옇게","cloudy./a"]] },
    { tr: "기체는 모든 방향으로 퍼져 나간다.", p: [["S","기체는","Gas/n"],["P","퍼져 나간다","spreads/v out/av"],["M","모든 방향으로","in/p every/a direction./n"]] },
    { tr: "따뜻한 공기는 차가운 공기 위로 올라간다.", p: [["S","따뜻한 공기는","Warm/a air/n"],["P","올라간다","rises/v"],["M","차가운 공기 위로","above/p cold/a air./n"]] },
    { tr: "헬륨은 공기보다 가볍다.", p: [["S","헬륨은","Helium/n"],["P","이다","is/v"],["C","공기보다 가볍다","lighter/a than/p air./n"]] },

    // ── 생물과 환경 ──
    { tr: "식물은 햇빛으로 양분을 만든다.", p: [["S","식물은","Plants/n"],["P","만든다","make/v"],["O","양분을","food/n"],["M","햇빛으로","from/p sunlight./n"]] },
    { tr: "동물은 에너지를 얻기 위해 식물을 먹는다.", p: [["S","동물은","Animals/n"],["P","먹는다","eat/v"],["O","식물을","plants/n"],["M","에너지를 위해","for/p energy./n"]] },
    { tr: "먹이 사슬은 생물들을 연결한다.", p: [["S","먹이 사슬은","A/a food/a chain/n"],["P","연결한다","links/v"],["O","생물들을","living/a things./n"]] },
    { tr: "분해자는 죽은 잎을 분해한다.", p: [["S","분해자는","Decomposers/n"],["P","분해한다","break/v down/av"],["O","죽은 잎을","dead/a leaves./n"]] },
    { tr: "햇빛은 식물에게 에너지를 준다.", p: [["S","햇빛은","Sunlight/n"],["P","준다","gives/v"],["O","에너지를","energy/n"],["M","식물에게","to/p the/a plants./n"]] },
    { tr: "어떤 동물은 더 작은 동물을 사냥한다.", p: [["S","어떤 동물은","Some/a animals/n"],["P","사냥한다","hunt/v"],["O","더 작은 동물을","smaller/a animals./n"]] },
    { tr: "생물은 깨끗한 물을 필요로 한다.", p: [["S","생물은","Living/a things/n"],["P","필요로 한다","need/v"],["O","깨끗한 물을","clean/a water./n"]] },
    { tr: "곰팡이는 따뜻한 곳에서 잘 자란다.", p: [["S","곰팡이는","Mold/n"],["P","자란다","grows/v"],["M","잘","well/av"],["M","따뜻한 곳에서","in/p warm/a places./n"]] },
    { tr: "세균은 매우 작은 생물이다.", p: [["S","세균은","Bacteria/n"],["P","이다","are/v"],["C","매우 작은 생물","very/av tiny/a living/a things./n"]] },
    { tr: "숲은 많은 동물에게 보금자리를 준다.", p: [["S","숲은","A/a forest/n"],["P","준다","gives/v"],["O","보금자리를","homes/n"],["M","많은 동물에게","to/p many/a animals./n"]] },
    { tr: "지렁이는 젖은 흙 아래에서 산다.", p: [["S","지렁이는","Earthworms/n"],["P","산다","live/v"],["M","젖은 흙 아래에서","under/p the/a wet/a soil./n"]] },

    // ── 식물의 구조와 기능 ──
    { tr: "뿌리는 흙에서 물을 흡수한다.", p: [["S","뿌리는","Roots/n"],["P","흡수한다","take/v in/av"],["O","물을","water/n"],["M","흙에서","from/p the/a soil./n"]] },
    { tr: "줄기는 잎으로 물을 운반한다.", p: [["S","줄기는","A/a stem/n"],["P","운반한다","carries/v"],["O","물을","water/n"],["M","잎으로","to/p the/a leaves./n"]] },
    { tr: "초록 잎은 햇빛 속에서 양분을 만든다.", p: [["S","초록 잎은","Green/a leaves/n"],["P","만든다","make/v"],["O","양분을","food/n"],["M","햇빛 속에서","in/p sunlight./n"]] },
    { tr: "밝은 꽃은 바쁜 벌들을 끌어들인다.", p: [["S","밝은 꽃은","Bright/a flowers/n"],["P","끌어들인다","attract/v"],["O","바쁜 벌들을","many/a busy/a bees./n"]] },
    { tr: "작은 씨앗은 새 식물로 자란다.", p: [["S","작은 씨앗은","Small/a seeds/n"],["P","자란다","grow/v"],["M","새 식물로","into/p new/a plants./n"]] },
    { tr: "나무는 가을에 잎을 떨어뜨린다.", p: [["S","나무는","A/a tree/n"],["P","떨어뜨린다","drops/v"],["O","자기 잎을","its/pr leaves/n"],["M","가을에","in/p fall./n"]] },
    { tr: "뿌리는 식물을 제자리에 고정한다.", p: [["S","뿌리는","Roots/n"],["P","고정한다","hold/v"],["O","식물을","the/a plant/n"],["M","제자리에","in/p place./n"]] },

    // ── 열과 에너지 ──
    { tr: "열은 뜨거운 곳에서 차가운 곳으로 이동한다.", p: [["S","열은","Heat/n"],["P","이동한다","moves/v"],["M","뜨거운 곳에서 차가운 곳으로","from/p hot/a to/p cold/a places./n"]] },
    { tr: "금속은 나무보다 차갑게 느껴진다.", p: [["S","금속은","Metal/n"],["P","느껴진다","feels/v"],["C","나무보다 차갑게","colder/a than/p wood./n"]] },
    { tr: "태양은 땅과 바다를 데운다.", p: [["S","태양은","The/a Sun/n"],["P","데운다","warms/v"],["O","땅과 바다를","the/a land/n and/c sea./n"]] },
    { tr: "움직이는 자동차는 운동 에너지를 가지고 있다.", p: [["S","움직이는 자동차는","A/a moving/a car/n"],["P","가지고 있다","has/v"],["O","운동 에너지를","kinetic/a energy./n"]] },
    { tr: "식물은 씨앗 속에 에너지를 저장한다.", p: [["S","식물은","Plants/n"],["P","저장한다","store/v"],["O","에너지를","energy/n"],["M","씨앗 속에","in/p their/pr seeds./n"]] },
    { tr: "우리는 음식에서 에너지를 얻는다.", p: [["S","우리는","We/pr"],["P","얻는다","get/v"],["O","에너지를","energy/n"],["M","음식에서","from/p our/pr food./n"]] },
    { tr: "강한 바람은 큰 터빈을 돌린다.", p: [["S","강한 바람은","Strong/a wind/n"],["P","돌린다","turns/v"],["O","큰 터빈을","a/a big/a turbine./n"]] },
    { tr: "태양광 패널은 깨끗한 전기를 만든다.", p: [["S","태양광 패널은","Solar/a panels/n"],["P","만든다","make/v"],["O","깨끗한 전기를","clean/a electricity./n"]] },
    { tr: "에너지는 한 형태에서 다른 형태로 바뀐다.", p: [["S","에너지는","Energy/n"],["P","바뀐다","changes/v"],["M","한 형태에서 다른 형태로","from/p one/a form/n to/p another./pr"]] },

    // ── 물의 상태와 날씨 ──
    { tr: "물은 영하에서 얼음이 된다.", p: [["S","물은","Water/n"],["P","된다","becomes/v"],["C","얼음이","ice/n"],["M","영하에서","below/p zero./n"]] },
    { tr: "뜨거운 김은 냄비에서 올라온다.", p: [["S","뜨거운 김은","Hot/a steam/n"],["P","올라온다","rises/v"],["M","냄비에서","from/p the/a pot./n"]] },
    { tr: "구름은 작은 물방울에서 만들어진다.", p: [["S","구름은","Clouds/n"],["P","만들어진다","form/v"],["M","작은 물방울에서","from/p tiny/a water/a drops./n"]] },
    { tr: "거센 비는 회색 구름에서 내린다.", p: [["S","거센 비는","Heavy/a rain/n"],["P","내린다","falls/v"],["M","회색 구름에서","from/p gray/a clouds./n"]] },
    { tr: "하얀 눈은 차가운 땅을 덮는다.", p: [["S","하얀 눈은","White/a snow/n"],["P","덮는다","covers/v"],["O","차가운 땅을","the/a cold/a ground./n"]] },
    { tr: "바람은 나뭇잎을 이리저리 날린다.", p: [["S","바람은","The/a wind/n"],["P","날린다","blows/v"],["O","나뭇잎을","the/a leaves/n"],["M","이리저리","around./av"]] },
    { tr: "물은 뜨거운 태양 아래에서 증발한다.", p: [["S","물은","Water/n"],["P","증발한다","evaporates/v"],["M","뜨거운 태양 아래에서","under/p the/a hot/a sun./n"]] },
    { tr: "얼음은 따뜻한 공기 속에서 천천히 녹는다.", p: [["S","얼음은","Ice/n"],["P","녹는다","melts/v"],["M","천천히","slowly/av"],["M","따뜻한 공기 속에서","in/p warm/a air./n"]] },
    { tr: "안개는 아침 길을 가린다.", p: [["S","안개는","Fog/n"],["P","가린다","hides/v"],["O","아침 길을","the/a morning/a road./n"]] },

    // ── 운동과 측정, 기타 ──
    { tr: "빠른 기차는 매우 빠르게 달린다.", p: [["S","빠른 기차는","A/a fast/a train/n"],["P","달린다","moves/v"],["M","매우 빠르게","very/av quickly./av"]] },
    { tr: "공은 언덕 아래로 굴러간다.", p: [["S","공은","The/a ball/n"],["P","굴러간다","rolls/v"],["M","언덕 아래로","down/p the/a hill./n"]] },
    { tr: "무거운 상자는 아주 천천히 움직인다.", p: [["S","무거운 상자는","A/a heavy/a box/n"],["P","움직인다","moves/v"],["M","아주 천천히","very/av slowly./av"]] },
    { tr: "자석은 쇠못을 끌어당긴다.", p: [["S","자석은","A/a magnet/n"],["P","끌어당긴다","pulls/v"],["O","쇠못을","iron/a nails./n"]] },
    { tr: "레몬즙은 매우 신맛이 난다.", p: [["S","레몬즙은","Lemon/a juice/n"],["P","맛이 난다","tastes/v"],["C","매우 신","very/av sour./a"]] },
    { tr: "비누는 손에서 미끄럽게 느껴진다.", p: [["S","비누는","Soap/n"],["P","느껴진다","feels/v"],["C","미끄럽게","slippery/a"],["M","손에서","on/p our/pr hands./n"]] },
    { tr: "온도계는 기온을 측정한다.", p: [["S","온도계는","A/a thermometer/n"],["P","측정한다","measures/v"],["O","기온을","the/a air/a temperature./n"]] },
    { tr: "소리는 공기를 통해 빠르게 이동한다.", p: [["S","소리는","Sound/n"],["P","이동한다","travels/v"],["M","공기를 통해","through/p the/a air/n"],["M","빠르게","fast./av"]] },
    { tr: "나침반 바늘은 북쪽을 가리킨다.", p: [["S","나침반 바늘은","A/a compass/a needle/n"],["P","가리킨다","points/v"],["M","북쪽을","to/p the/a north./n"]] },
    { tr: "과학자들은 자연 세계를 주의 깊게 연구한다.", p: [["S","과학자들은","Scientists/n"],["P","연구한다","study/v"],["O","자연 세계를","the/a natural/a world/n"],["M","주의 깊게","carefully./av"]] },
  ],
};
