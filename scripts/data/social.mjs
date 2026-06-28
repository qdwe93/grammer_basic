/**
 * 사회 — 2022 개정 교육과정 사회과 5~6학년군(6학년 중심) 주제 기반 예제 100문장.
 * Lexile 700 전후. 주제: 정치·민주주의, 인권·헌법, 경제, 우리 역사, 세계 지리,
 * 세계 여러 나라와 문화, 지구촌 평화·국제 협력, 환경·지속가능, 지역 사회·정보화 등.
 *
 * 작성 형식: { tr, p: [ [문장성분, chunkGloss, "단어/품사 ..."] ] }
 * 품사: n명사 pr대명사 v동사 a형용사(관사/한정사) av부사 p전치사 c접속사
 * 성분: S주어 P서술어 O목적어 Od직접 Oi간접 C보어 M수식어
 */
export default {
  meta: { id: "social-6", title: "사회 6학년 — 다양한 주제 100문장" },
  items: [
    // ── 정치와 민주주의 ──
    { tr: "사람들은 투표로 자기 지도자를 뽑는다.", p: [["S","사람들은","People/n"],["P","뽑는다","choose/v"],["O","자기 지도자를","their/pr leaders/n"],["M","투표로","by/p voting./n"]] },
    { tr: "민주주의에서는 시민들이 권력을 가진다.", p: [["M","민주주의에서는","In/p a/a democracy,/n"],["S","시민들은","citizens/n"],["P","가진다","have/v"],["O","권력을","power./n"]] },
    { tr: "국회는 새로운 법을 만든다.", p: [["S","국회는","The/a National/a Assembly/n"],["P","만든다","makes/v"],["O","새로운 법을","new/a laws./n"]] },
    { tr: "정부는 모든 국민을 섬긴다.", p: [["S","정부는","The/a government/n"],["P","섬긴다","serves/v"],["O","모든 국민을","all/a the/a people./n"]] },
    { tr: "법원은 우리의 기본권을 보호한다.", p: [["S","법원은","Courts/n"],["P","보호한다","protect/v"],["O","우리의 기본권을","our/pr basic/a rights./n"]] },
    { tr: "시민들은 모든 선거에서 투표한다.", p: [["S","시민들은","Citizens/n"],["P","투표한다","vote/v"],["M","모든 선거에서","in/p every/a election./n"]] },
    { tr: "좋은 지도자는 사람들에게 귀 기울인다.", p: [["S","좋은 지도자는","A/a good/a leader/n"],["P","귀 기울인다","listens/v"],["M","사람들에게","to/p people./n"]] },
    { tr: "대통령은 나라 전체를 이끈다.", p: [["S","대통령은","The/a president/n"],["P","이끈다","leads/v"],["O","나라 전체를","the/a whole/a country./n"]] },
    { tr: "법은 우리 사회를 안전하게 지킨다.", p: [["S","법은","Laws/n"],["P","지킨다","keep/v"],["O","우리 사회를","our/pr society/n"],["C","안전하게","safe./a"]] },
    { tr: "사람들은 자기 의견을 자유롭게 나눌 수 있다.", p: [["S","사람들은","People/n"],["P","나눌 수 있다","can/v share/v"],["O","자기 의견을","their/pr opinions/n"],["M","자유롭게","freely./av"]] },

    // ── 인권과 헌법 ──
    { tr: "헌법은 인권을 보호한다.", p: [["S","헌법은","The/a constitution/n"],["P","보호한다","protects/v"],["O","인권을","human/a rights./n"]] },
    { tr: "모든 사람은 평등한 권리를 가진다.", p: [["S","모든 사람은","Every/a person/n"],["P","가진다","has/v"],["O","평등한 권리를","equal/a rights./n"]] },
    { tr: "어린이도 중요한 권리를 가진다.", p: [["S","어린이도","Children/n"],["M","또한","also/av"],["P","가진다","have/v"],["O","중요한 권리를","important/a rights./n"]] },
    { tr: "우리는 다른 사람들을 존중해야 한다.", p: [["S","우리는","We/pr"],["P","존중해야 한다","must/v respect/v"],["O","다른 사람들을","other/a people./n"]] },
    { tr: "자유는 소중한 가치이다.", p: [["S","자유는","Freedom/n"],["P","이다","is/v"],["C","소중한 가치","a/a precious/a value./n"]] },

    // ── 경제 생활 ──
    { tr: "가계는 시장에서 상품을 산다.", p: [["S","가계는","Families/n"],["P","산다","buy/v"],["O","상품을","goods/n"],["M","시장에서","at/p the/a market./n"]] },
    { tr: "기업은 많은 유용한 제품을 생산한다.", p: [["S","기업은","Companies/n"],["P","생산한다","produce/v"],["O","많은 유용한 제품을","many/a useful/a products./n"]] },
    { tr: "노동자는 자기 일에 대해 돈을 번다.", p: [["S","노동자는","Workers/n"],["P","번다","earn/v"],["O","돈을","money/n"],["M","자기 일에 대해","for/p their/pr work./n"]] },
    { tr: "가격은 수요가 늘면 오른다.", p: [["S","가격은","Prices/n"],["P","오른다","rise/v"],["M","수요가 늘면","when/c demand/n grows./v"]] },
    { tr: "사람들은 미래를 위해 돈을 저축한다.", p: [["S","사람들은","People/n"],["P","저축한다","save/v"],["O","돈을","money/n"],["M","미래를 위해","for/p the/a future./n"]] },
    { tr: "자유 경쟁은 가격을 낮춘다.", p: [["S","자유 경쟁은","Free/a competition/n"],["P","낮춘다","lowers/v"],["O","가격을","the/a prices./n"]] },
    { tr: "우리나라는 다른 나라들과 무역한다.", p: [["S","우리나라는","Our/pr country/n"],["P","무역한다","trades/v"],["M","다른 나라들과","with/p other/a nations./n"]] },
    { tr: "한국은 자동차와 휴대폰을 수출한다.", p: [["S","한국은","Korea/n"],["P","수출한다","exports/v"],["O","자동차와 휴대폰을","cars/n and/c phones./n"]] },
    { tr: "우리는 다른 나라에서 석유를 수입한다.", p: [["S","우리는","We/pr"],["P","수입한다","import/v"],["O","석유를","oil/n"],["M","다른 나라에서","from/p other/a countries./n"]] },
    { tr: "은행은 우리의 돈을 안전하게 보관한다.", p: [["S","은행은","Banks/n"],["P","보관한다","keep/v"],["O","우리의 돈을","our/pr money/n"],["M","안전하게","safely./av"]] },

    // ── 우리나라 역사 ──
    { tr: "세종대왕은 한글을 만들었다.", p: [["S","세종대왕은","King/n Sejong/n"],["P","만들었다","created/v"],["O","한글을","the/a Korean/a alphabet./n"]] },
    { tr: "한글은 많은 평범한 백성을 도왔다.", p: [["S","한글은","Hangul/n"],["P","도왔다","helped/v"],["O","많은 평범한 백성을","many/a common/a people./n"]] },
    { tr: "조선 왕조는 오래 지속되었다.", p: [["S","조선 왕조는","The/a Joseon/a Dynasty/n"],["P","지속되었다","lasted/v"],["M","오래","long./av"]] },
    { tr: "이순신 장군은 조선의 바다를 지켰다.", p: [["S","이순신 장군은","Admiral/n Yi/n"],["P","지켰다","defended/v"],["O","조선의 바다를","the/a Korean/a sea./n"]] },
    { tr: "일본은 여러 해 동안 한국을 지배했다.", p: [["S","일본은","Japan/n"],["P","지배했다","ruled/v"],["O","한국을","Korea/n"],["M","여러 해 동안","for/p many/a years./n"]] },
    { tr: "용감한 사람들은 독립을 위해 싸웠다.", p: [["S","용감한 사람들은","Brave/a people/n"],["P","싸웠다","fought/v"],["M","독립을 위해","for/p independence./n"]] },
    { tr: "한국은 1945년에 자유로워졌다.", p: [["S","한국은","Korea/n"],["P","되었다","became/v"],["C","자유롭게","free/a"],["M","1945년에","in/p 1945./n"]] },
    { tr: "한국 전쟁은 나라를 둘로 나누었다.", p: [["S","한국 전쟁은","The/a Korean/a War/n"],["P","나누었다","divided/v"],["O","나라를","the/a country./n"]] },
    { tr: "시민들은 민주주의를 위해 용감하게 행진했다.", p: [["S","시민들은","Citizens/n"],["P","행진했다","marched/v"],["M","민주주의를 위해","for/p democracy/n"],["M","용감하게","bravely./av"]] },
    { tr: "오래된 궁궐은 우리의 긴 역사를 들려준다.", p: [["S","오래된 궁궐은","Old/a palaces/n"],["P","들려준다","tell/v"],["O","우리의 긴 역사를","our/pr long/a history./n"]] },

    // ── 세계 지리 ──
    { tr: "지구는 다섯 개의 큰 대양을 가지고 있다.", p: [["S","지구는","The/a Earth/n"],["P","가지고 있다","has/v"],["O","다섯 큰 대양을","five/a great/a oceans./n"]] },
    { tr: "아시아는 가장 큰 대륙이다.", p: [["S","아시아는","Asia/n"],["P","이다","is/v"],["C","가장 큰 대륙","the/a largest/a continent./n"]] },
    { tr: "사막은 아주 적은 비를 받는다.", p: [["S","사막은","Deserts/n"],["P","받는다","get/v"],["O","아주 적은 비를","very/av little/a rain./n"]] },
    { tr: "많은 사람들은 강 근처에 산다.", p: [["S","많은 사람들은","Many/a people/n"],["P","산다","live/v"],["M","강 근처에","near/p rivers./n"]] },
    { tr: "산은 한국의 많은 부분을 덮는다.", p: [["S","산은","Mountains/n"],["P","덮는다","cover/v"],["O","한국의 많은 부분을","much/n of/p Korea./n"]] },
    { tr: "적도는 일 년 내내 따뜻하다.", p: [["S","적도는","The/a equator/n"],["P","유지한다","stays/v"],["C","따뜻하게","warm/a"],["M","일 년 내내","all/a year./n"]] },
    { tr: "찬 바람은 극지방 근처에서 분다.", p: [["S","찬 바람은","Cold/a winds/n"],["P","분다","blow/v"],["M","극지방 근처에서","near/p the/a poles./n"]] },
    { tr: "지도는 세계 전체를 보여 준다.", p: [["S","지도는","Maps/n"],["P","보여 준다","show/v"],["O","세계 전체를","the/a whole/a world./n"]] },
    { tr: "강은 넓은 바다로 흘러간다.", p: [["S","강은","Rivers/n"],["P","흘러간다","flow/v"],["M","넓은 바다로","into/p the/a wide/a sea./n"]] },
    { tr: "각 나라는 자기 국기를 가지고 있다.", p: [["S","각 나라는","Each/a country/n"],["P","가지고 있다","has/v"],["O","자기 국기를","its/pr own/a flag./n"]] },

    // ── 세계 여러 나라와 문화 ──
    { tr: "여러 나라는 서로 다른 문화를 가지고 있다.", p: [["S","여러 나라는","Different/a countries/n"],["P","가지고 있다","have/v"],["O","서로 다른 문화를","different/a cultures./n"]] },
    { tr: "전 세계 사람들은 쌀을 먹는다.", p: [["S","사람들은","People/n"],["M","전 세계의","around/p the/a world/n"],["P","먹는다","eat/v"],["O","쌀을","rice./n"]] },
    { tr: "우리는 다른 문화와 관습을 존중한다.", p: [["S","우리는","We/pr"],["P","존중한다","respect/v"],["O","다른 문화와 관습을","other/a cultures/n and/c customs./n"]] },
    { tr: "축제는 사람들을 함께 즐겁게 모은다.", p: [["S","축제는","Festivals/n"],["P","모은다","bring/v"],["O","사람들을","people/n"],["M","함께 즐겁게","together/av happily./av"]] },
    { tr: "여행자는 새로운 곳에 대해 배운다.", p: [["S","여행자는","Travelers/n"],["P","배운다","learn/v"],["M","새로운 곳에 대해","about/p new/a places./n"]] },
    { tr: "한국 음식은 전 세계에서 인기 있다.", p: [["S","한국 음식은","Korean/a food/n"],["P","이다","is/v"],["C","인기 있는","popular/a"],["M","전 세계에서","worldwide./av"]] },
    { tr: "언어는 먼 곳의 사람들을 이어 준다.", p: [["S","언어는","Languages/n"],["P","이어 준다","connect/v"],["O","사람들을","people/n"],["M","먼 곳에서 온","from/p far/a places./n"]] },

    // ── 지구촌 평화와 국제 협력 ──
    { tr: "국제연합은 평화를 위해 노력한다.", p: [["S","국제연합은","The/a United/a Nations/n"],["P","노력한다","works/v"],["M","평화를 위해","for/p peace./n"]] },
    { tr: "많은 나라들은 가난한 아이들을 돕는다.", p: [["S","많은 나라들은","Many/a nations/n"],["P","돕는다","help/v"],["O","가난한 아이들을","poor/a children./n"]] },
    { tr: "자원봉사자는 난민에게 음식을 전한다.", p: [["S","자원봉사자는","Volunteers/n"],["P","전한다","bring/v"],["O","음식을","food/n"],["M","난민에게","to/p refugees./n"]] },
    { tr: "나라들은 문제를 함께 해결해야 한다.", p: [["S","나라들은","Countries/n"],["P","해결해야 한다","should/v solve/v"],["O","문제를","problems/n"],["M","함께","together./av"]] },
    { tr: "전쟁은 많은 무고한 가족을 해친다.", p: [["S","전쟁은","War/n"],["P","해친다","hurts/v"],["O","많은 무고한 가족을","many/a innocent/a families./n"]] },
    { tr: "평화는 모든 나라를 돕는다.", p: [["S","평화는","Peace/n"],["P","돕는다","helps/v"],["O","모든 나라를","every/a country./n"]] },
    { tr: "지도자들은 만나서 세계 문제를 논의한다.", p: [["S","지도자들은","Leaders/n"],["P","만나서 논의한다","meet/v and/c discuss/v"],["O","세계 문제를","world/a problems./n"]] },

    // ── 환경과 지속가능한 생활 ──
    { tr: "우리는 깨끗한 지구를 보호해야 한다.", p: [["S","우리는","We/pr"],["P","보호해야 한다","should/v protect/v"],["O","깨끗한 지구를","our/pr clean/a Earth./n"]] },
    { tr: "오염은 바다를 심하게 해친다.", p: [["S","오염은","Pollution/n"],["P","해친다","harms/v"],["O","바다를","the/a ocean/n"],["M","심하게","badly./av"]] },
    { tr: "사람들은 종이와 플라스틱을 재활용한다.", p: [["S","사람들은","People/n"],["P","재활용한다","recycle/v"],["O","종이와 플라스틱을","paper/n and/c plastic./n"]] },
    { tr: "나무는 우리의 더러운 공기를 정화한다.", p: [["S","나무는","Trees/n"],["P","정화한다","clean/v"],["O","우리의 더러운 공기를","our/pr dirty/a air./n"]] },
    { tr: "우리는 매일 물을 아낀다.", p: [["S","우리는","We/pr"],["P","아낀다","save/v"],["O","물을","water/n"],["M","매일","every/a single/a day./n"]] },
    { tr: "깨끗한 에너지는 우리 행성을 지킨다.", p: [["S","깨끗한 에너지는","Clean/a energy/n"],["P","지킨다","protects/v"],["O","우리 행성을","our/pr planet./n"]] },
    { tr: "너무 많은 쓰레기는 자연을 해친다.", p: [["S","너무 많은 쓰레기는","Too/av much/a trash/n"],["P","해친다","hurts/v"],["O","자연을","nature./n"]] },
    { tr: "풍력 발전 단지는 친환경 전기를 만든다.", p: [["S","풍력 발전 단지는","Wind/a farms/n"],["P","만든다","make/v"],["O","친환경 전기를","green/a power./n"]] },

    // ── 지역 사회와 공공기관 ──
    { tr: "도시는 새 공원을 짓는다.", p: [["S","도시는","The/a city/n"],["P","짓는다","builds/v"],["O","새 공원을","new/a public/a parks./n"]] },
    { tr: "소방관은 우리 마을을 안전하게 지킨다.", p: [["S","소방관은","Firefighters/n"],["P","지킨다","keep/v"],["O","우리 마을을","our/pr town/n"],["C","안전하게","safe./a"]] },
    { tr: "공공기관은 지역 주민을 돕는다.", p: [["S","공공기관은","Public/a offices/n"],["P","돕는다","help/v"],["O","지역 주민을","local/a people./n"]] },
    { tr: "세금은 공공 서비스를 위해 쓰인다.", p: [["S","세금은","Taxes/n"],["P","쓰인다","pay/v"],["M","공공 서비스를 위해","for/p public/a services./n"]] },
    { tr: "시민들은 교통 규칙을 지킨다.", p: [["S","시민들은","Citizens/n"],["P","지킨다","follow/v"],["O","교통 규칙을","the/a traffic/a rules./n"]] },
    { tr: "도서관은 무료로 책을 빌려준다.", p: [["S","도서관은","The/a library/n"],["P","빌려준다","lends/v"],["O","무료 책을","free/a books./n"]] },
    { tr: "경찰관은 사람들을 보호한다.", p: [["S","경찰관은","Police/a officers/n"],["P","보호한다","protect/v"],["O","사람들을","the/a people./n"]] },
    { tr: "이웃은 서로 음식을 나눈다.", p: [["S","이웃은","Neighbors/n"],["P","나눈다","share/v"],["O","음식을","food/n"],["M","서로","with/p each/a other./pr"]] },

    // ── 선거·시민 참여·언론 ──
    { tr: "모든 성인은 자유롭게 투표할 수 있다.", p: [["S","모든 성인은","Every/a adult/n"],["P","투표할 수 있다","can/v vote/v"],["M","자유롭게","freely./av"]] },
    { tr: "신문은 매일 중요한 소식을 전한다.", p: [["S","신문은","Newspapers/n"],["P","전한다","share/v"],["O","중요한 매일의 소식을","important/a daily/a news./n"]] },
    { tr: "사람들은 여러 지역 모임에 참여한다.", p: [["S","사람들은","People/n"],["P","참여한다","join/v"],["O","여러 지역 모임에","many/a local/a groups./n"]] },
    { tr: "우리는 이웃과 함께 문제를 논의한다.", p: [["S","우리는","We/pr"],["P","논의한다","discuss/v"],["O","문제를","problems/n"],["M","이웃과 함께","with/p our/pr neighbors./n"]] },
    { tr: "투표는 국민의 뜻을 보여 준다.", p: [["S","투표는","A/a vote/n"],["P","보여 준다","shows/v"],["O","국민의 뜻을","the/a people's/n will./n"]] },

    // ── 사회 변화·정보화 ──
    { tr: "도시는 오늘날 매우 빠르게 성장한다.", p: [["S","도시는","Cities/n"],["P","성장한다","grow/v"],["M","매우 빠르게","very/av fast/av"],["M","오늘날","today./av"]] },
    { tr: "많은 노인들은 이제 혼자 산다.", p: [["S","많은 노인들은","Many/a old/a people/n"],["P","산다","live/v"],["M","혼자","alone/av"],["M","이제","now./av"]] },
    { tr: "인터넷은 멀리 있는 사람들을 연결한다.", p: [["S","인터넷은","The/a internet/n"],["P","연결한다","connects/v"],["O","멀리 있는 사람들을","distant/a people./n"]] },
    { tr: "스마트폰은 우리의 일상을 바꾸었다.", p: [["S","스마트폰은","Smartphones/n"],["P","바꾸었다","changed/v"],["O","우리의 일상을","our/pr daily/a lives./n"]] },
    { tr: "로봇은 공장에서 노동자를 돕는다.", p: [["S","로봇은","Robots/n"],["P","돕는다","help/v"],["O","노동자를","workers/n"],["M","공장에서","in/p factories./n"]] },
    { tr: "새로운 직업은 해마다 생겨난다.", p: [["S","새로운 직업은","New/a jobs/n"],["P","생겨난다","appear/v"],["M","해마다","every/a year./n"]] },
    { tr: "요즘 가족은 더 작아진다.", p: [["S","가족은","Families/n"],["P","된다","become/v"],["C","더 작아","smaller/a"],["M","요즘","these/a days./n"]] },

    // ── 권리와 의무 ──
    { tr: "시민은 권리와 의무를 가진다.", p: [["S","시민은","Citizens/n"],["P","가진다","have/v"],["O","권리와 의무를","rights/n and/c duties./n"]] },
    { tr: "우리는 나라의 법을 따라야 한다.", p: [["S","우리는","We/pr"],["P","따라야 한다","must/v obey/v"],["O","나라의 법을","the/a country's/n laws./n"]] },
    { tr: "어린이는 법에 따라 학교에 간다.", p: [["S","어린이는","Children/n"],["P","간다","go/v"],["M","학교에","to/p school/n"],["M","법에 따라","by/p law./n"]] },
    { tr: "어른들은 세금을 정직하게 낸다.", p: [["S","어른들은","Adults/n"],["P","낸다","pay/v"],["O","세금을","their/pr taxes/n"],["M","정직하게","honestly./av"]] },
    { tr: "법은 모든 사람을 평등하게 대한다.", p: [["S","법은","The/a law/n"],["P","대한다","treats/v"],["O","모든 사람을","everyone/pr"],["M","평등하게","equally./av"]] },

    // ── 합리적 소비와 경제 ──
    { tr: "현명한 소비자는 가격을 비교한다.", p: [["S","현명한 소비자는","Wise/a shoppers/n"],["P","비교한다","compare/v"],["O","가격을","the/a prices./n"]] },
    { tr: "사람들은 음식에 돈을 쓴다.", p: [["S","사람들은","People/n"],["P","쓴다","spend/v"],["O","돈을","money/n"],["M","음식에","on/p food./n"]] },
    { tr: "예산은 우리의 월 지출을 계획한다.", p: [["S","예산은","A/a budget/n"],["P","계획한다","plans/v"],["O","우리의 월 지출을","our/pr monthly/a spending./n"]] },
    { tr: "시장은 날마다 신선한 과일을 판다.", p: [["S","시장은","Markets/n"],["P","판다","sell/v"],["O","신선한 과일을","fresh/a fruit/n"],["M","날마다","daily./av"]] },
    { tr: "은행은 기업에 돈을 빌려준다.", p: [["S","은행은","Banks/n"],["P","빌려준다","lend/v"],["O","돈을","money/n"],["M","기업에","to/p businesses./n"]] },

    // ── 문화유산 ──
    { tr: "많은 관광객은 오래된 절을 방문한다.", p: [["S","많은 관광객은","Many/a tourists/n"],["P","방문한다","visit/v"],["O","오래된 절을","old/a temples./n"]] },
    { tr: "우리 조상은 튼튼한 성을 지었다.", p: [["S","우리 조상은","Our/pr ancestors/n"],["P","지었다","built/v"],["O","튼튼한 성을","strong/a castles./n"]] },
    { tr: "박물관은 우리의 문화재를 보관한다.", p: [["S","박물관은","Museums/n"],["P","보관한다","keep/v"],["O","우리의 문화재를","our/pr cultural/a treasures./n"]] },
  ],
};
