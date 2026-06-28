/**
 * 게임·IT — 마인크래프트, 8번출구, 신칸센, 게임 프로그래밍, 바이브코딩, AI, 파이썬 100문장.
 * Lexile 700 전후.
 *
 * 작성 형식: { tr, p: [ [문장성분, chunkGloss, "단어/품사 ..."] ] }
 * 품사: n명사 pr대명사 v동사 a형용사(관사/한정사) av부사 p전치사 c접속사
 * 성분: S주어 P서술어 O목적어 Od직접 Oi간접 C보어 M수식어
 */
export default {
  meta: { id: "tech-fun", title: "게임·IT — 마크·신칸센·AI·파이썬 100문장" },
  items: [
    // ── 마인크래프트 ──
    { tr: "플레이어는 블록으로 집을 짓는다.", p: [["S","플레이어는","Players/n"],["P","짓는다","build/v"],["O","집을","houses/n"],["M","블록으로","with/p blocks./n"]] },
    { tr: "마인크래프트는 거대한 열린 세계를 가지고 있다.", p: [["S","마인크래프트는","Minecraft/n"],["P","가지고 있다","has/v"],["O","거대한 열린 세계를","a/a huge/a open/a world./n"]] },
    { tr: "크리퍼는 플레이어 근처에서 폭발한다.", p: [["S","크리퍼는","Creepers/n"],["P","폭발한다","explode/v"],["M","플레이어 근처에서","near/p the/a players./n"]] },
    { tr: "광부는 다이아몬드를 찾아 깊이 판다.", p: [["S","광부는","Miners/n"],["P","판다","dig/v"],["M","깊이","deep/av"],["M","다이아몬드를 찾아","for/p diamonds./n"]] },
    { tr: "제작대는 유용한 도구를 만든다.", p: [["S","제작대는","A/a crafting/a table/n"],["P","만든다","makes/v"],["O","유용한 도구를","useful/a tools./n"]] },
    { tr: "플레이어는 검과 곡괭이를 제작한다.", p: [["S","플레이어는","Players/n"],["P","제작한다","craft/v"],["O","검과 곡괭이를","swords/n and/c pickaxes./n"]] },
    { tr: "좀비는 밤에 나타난다.", p: [["S","좀비는","Zombies/n"],["P","나타난다","appear/v"],["M","밤에","at/p night./n"]] },
    { tr: "플레이어는 서바이벌 모드에서 생존한다.", p: [["S","플레이어는","The/a player/n"],["P","생존한다","survives/v"],["M","서바이벌 모드에서","in/p survival/a mode./n"]] },
    { tr: "레드스톤은 영리한 기계를 작동시킨다.", p: [["S","레드스톤은","Redstone/n"],["P","작동시킨다","powers/v"],["O","영리한 기계를","clever/a machines./n"]] },
    { tr: "플레이어는 늑대를 쉽게 길들인다.", p: [["S","플레이어는","Players/n"],["P","길들인다","tame/v"],["O","늑대를","wolves/n"],["M","쉽게","easily./av"]] },
    { tr: "주민은 음식을 받고 에메랄드를 거래한다.", p: [["S","주민은","Villagers/n"],["P","거래한다","trade/v"],["O","에메랄드를","emeralds/n"],["M","음식과","for/p food./n"]] },
    { tr: "농부는 농장에서 밀을 기른다.", p: [["S","농부는","Farmers/n"],["P","기른다","grow/v"],["O","밀을","wheat/n"],["M","농장에서","on/p farms./n"]] },
    { tr: "네더는 위험한 곳이다.", p: [["S","네더는","The/a Nether/n"],["P","이다","is/v"],["C","위험한 곳","a/a dangerous/a place./n"]] },
    { tr: "플레이어는 연료로 석탄을 캔다.", p: [["S","플레이어는","Players/n"],["P","캔다","mine/v"],["O","석탄을","coal/n"],["M","연료로","for/p fuel./n"]] },
    { tr: "횃불은 어두운 동굴을 밝힌다.", p: [["S","횃불은","Torches/n"],["P","밝힌다","light/v"],["O","어두운 동굴을","the/a dark/a caves./n"]] },
    { tr: "많은 아이들은 이 창의적인 게임을 좋아한다.", p: [["S","많은 아이들은","Many/a children/n"],["P","좋아한다","love/v"],["O","이 창의적인 게임을","this/a creative/a game./n"]] },

    // ── 8번출구 (The Exit 8) ──
    { tr: "8번 출구는 무서운 게임이다.", p: [["S","8번 출구는","The/a Exit/n 8/n"],["P","이다","is/v"],["C","무서운 게임","a/a scary/a game./n"]] },
    { tr: "한 남자는 역을 지나 걷는다.", p: [["S","한 남자는","A/a man/n"],["P","걷는다","walks/v"],["M","역을 지나","through/p the/a station./n"]] },
    { tr: "플레이어는 이상한 변화를 찾는다.", p: [["S","플레이어는","Players/n"],["P","찾는다","look/v"],["M","이상한 변화를","for/p strange/a anomalies./n"]] },
    { tr: "플레이어는 작은 변화를 알아채야 한다.", p: [["S","플레이어는","The/a player/n"],["P","알아채야 한다","must/v notice/v"],["O","작은 변화를","small/a changes./n"]] },
    { tr: "같은 복도가 다시 반복된다.", p: [["S","같은 복도가","The/a same/a hallway/n"],["P","반복된다","repeats/v"],["M","다시","again./av"]] },
    { tr: "플레이어는 이상 현상에서 되돌아간다.", p: [["S","플레이어는","The/a player/n"],["P","되돌아간다","turns/v back/av"],["M","이상 현상에서","at/p anomalies./n"]] },
    { tr: "여덟 번째 출구는 탈출을 의미한다.", p: [["S","여덟 번째 출구는","The/a eighth/a exit/n"],["P","의미한다","means/v"],["O","탈출을","freedom./n"]] },
    { tr: "이상한 남자가 천천히 지나간다.", p: [["S","이상한 남자가","A/a strange/a man/n"],["P","지나간다","passes/v by/av"],["M","천천히","slowly./av"]] },
    { tr: "그 게임은 당신의 주의력을 시험한다.", p: [["S","그 게임은","The/a game/n"],["P","시험한다","tests/v"],["O","당신의 주의력을","your/pr attention./n"]] },
    { tr: "밝은 불빛이 긴 복도를 채운다.", p: [["S","밝은 불빛이","Bright/a lights/n"],["P","채운다","fill/v"],["O","긴 복도를","the/a long/a hallway./n"]] },

    // ── 신칸센 ──
    { tr: "신칸센은 매우 빠르게 달린다.", p: [["S","신칸센은","The/a Shinkansen/n"],["P","달린다","runs/v"],["M","매우 빠르게","very/av fast./av"]] },
    { tr: "일본은 최초의 고속열차를 만들었다.", p: [["S","일본은","Japan/n"],["P","만들었다","built/v"],["O","최초의 고속열차를","the/a first/a bullet/a train./n"]] },
    { tr: "그 열차는 날마다 많은 승객을 실어 나른다.", p: [["S","그 열차는","The/a train/n"],["P","실어 나른다","carries/v"],["O","많은 승객을","many/a passengers/n"],["M","날마다","daily./av"]] },
    { tr: "열차는 도쿄와 오사카를 연결한다.", p: [["S","열차는","Trains/n"],["P","연결한다","connect/v"],["O","도쿄와 오사카를","Tokyo/n and/c Osaka./n"]] },
    { tr: "고속열차는 새처럼 보인다.", p: [["S","고속열차는","The/a bullet/a train/n"],["P","보인다","looks/v"],["M","새처럼","like/p a/a bird./n"]] },
    { tr: "승객은 열차를 편안하게 탄다.", p: [["S","승객은","Passengers/n"],["P","탄다","ride/v"],["O","열차를","the/a train/n"],["M","편안하게","comfortably./av"]] },
    { tr: "신칸센은 정시에 역을 떠난다.", p: [["S","신칸센은","The/a Shinkansen/n"],["P","떠난다","leaves/v"],["O","역을","the/a station/n"],["M","정시에","on/p time./n"]] },
    { tr: "고속열차는 많은 시간을 절약한다.", p: [["S","고속열차는","Fast/a trains/n"],["P","절약한다","save/v"],["O","많은 시간을","much/a time./n"]] },
    { tr: "매끄러운 열차는 조용히 미끄러진다.", p: [["S","매끄러운 열차는","The/a smooth/a train/n"],["P","미끄러진다","glides/v"],["M","조용히","quietly./av"]] },
    { tr: "기술자는 안전한 현대식 열차를 설계한다.", p: [["S","기술자는","Engineers/n"],["P","설계한다","design/v"],["O","안전한 현대식 열차를","safe/a modern/a trains./n"]] },

    // ── 게임 프로그래밍 ──
    { tr: "프로그래머는 재미있는 비디오 게임을 만든다.", p: [["S","프로그래머는","Programmers/n"],["P","만든다","create/v"],["O","재미있는 비디오 게임을","fun/a video/a games./n"]] },
    { tr: "게임은 명확한 규칙을 필요로 한다.", p: [["S","게임은","A/a game/n"],["P","필요로 한다","needs/v"],["O","명확한 규칙을","clear/a rules./n"]] },
    { tr: "코드는 게임 캐릭터를 조종한다.", p: [["S","코드는","The/a code/n"],["P","조종한다","controls/v"],["O","게임 캐릭터를","the/a game/a character./n"]] },
    { tr: "플레이어는 동작을 위해 버튼을 누른다.", p: [["S","플레이어는","Players/n"],["P","누른다","press/v"],["O","버튼을","buttons/n"],["M","동작을 위해","for/p actions./n"]] },
    { tr: "반복문은 같은 코드를 반복한다.", p: [["S","반복문은","A/a loop/n"],["P","반복한다","repeats/v"],["O","같은 코드를","the/a same/a code./n"]] },
    { tr: "버그는 실행 중인 게임을 망가뜨린다.", p: [["S","버그는","Bugs/n"],["P","망가뜨린다","break/v"],["O","실행 중인 게임을","the/a running/a game./n"]] },
    { tr: "개발자는 고장 난 코드를 고친다.", p: [["S","개발자는","Developers/n"],["P","고친다","fix/v"],["O","고장 난 코드를","the/a broken/a code./n"]] },
    { tr: "화면은 플레이어의 점수를 보여 준다.", p: [["S","화면은","The/a screen/n"],["P","보여 준다","shows/v"],["O","플레이어의 점수를","the/a player's/n score./n"]] },
    { tr: "변수는 게임 데이터를 저장한다.", p: [["S","변수는","A/a variable/n"],["P","저장한다","stores/v"],["O","게임 데이터를","the/a game/a data./n"]] },
    { tr: "좋은 게임은 플레이어를 즐겁게 만든다.", p: [["S","좋은 게임은","Good/a games/n"],["P","유지시킨다","keep/v"],["O","플레이어를","players/n"],["C","즐겁게","happy./a"]] },
    { tr: "디자이너는 다채로운 게임 지도를 그린다.", p: [["S","디자이너는","Designers/n"],["P","그린다","draw/v"],["O","다채로운 게임 지도를","colorful/a game/a maps./n"]] },
    { tr: "엔진은 게임 전체를 구동한다.", p: [["S","엔진은","The/a engine/n"],["P","구동한다","runs/v"],["O","게임 전체를","the/a whole/a game./n"]] },
    { tr: "플레이어는 속도에 대해 점수를 얻는다.", p: [["S","플레이어는","Players/n"],["P","얻는다","win/v"],["O","점수를","points/n"],["M","속도에 대해","for/p speed./n"]] },
    { tr: "새로운 단계가 갑자기 나타난다.", p: [["S","새로운 단계가","A/a new/a level/n"],["P","나타난다","appears/v"],["M","갑자기","suddenly./av"]] },

    // ── 바이브코딩 ──
    { tr: "바이브 코딩은 편안하고 쉽게 느껴진다.", p: [["S","바이브 코딩은","Vibe/a coding/n"],["P","느껴진다","feels/v"],["C","편안하고 쉽게","relaxed/a and/c easy./a"]] },
    { tr: "코더는 앱을 간단하게 설명한다.", p: [["S","코더는","A/a coder/n"],["P","설명한다","describes/v"],["O","앱을","the/a app/n"],["M","간단하게","simply./av"]] },
    { tr: "인공지능은 실제 코드를 작성한다.", p: [["S","인공지능은","The/a AI/n"],["P","작성한다","writes/v"],["O","실제 코드를","the/a real/a code./n"]] },
    { tr: "개발자는 자기 생각을 명확하게 설명한다.", p: [["S","개발자는","Developers/n"],["P","설명한다","explain/v"],["O","자기 생각을","their/pr ideas/n"],["M","명확하게","clearly./av"]] },
    { tr: "모델은 앱을 빠르게 만든다.", p: [["S","모델은","The/a model/n"],["P","만든다","builds/v"],["O","앱을","an/a app/n"],["M","빠르게","quickly./av"]] },
    { tr: "코더들은 새 기능을 함께 시험한다.", p: [["S","코더들은","Coders/n"],["P","시험한다","test/v"],["O","새 기능을","the/a new/a feature/n"],["M","함께","together./av"]] },
    { tr: "바이브 코딩은 많은 초보자를 돕는다.", p: [["S","바이브 코딩은","Vibe/a coding/n"],["P","돕는다","helps/v"],["O","많은 초보자를","many/a beginners./n"]] },
    { tr: "프로그래머는 인공지능의 답을 읽는다.", p: [["S","프로그래머는","The/a programmer/n"],["P","읽는다","reads/v"],["O","인공지능의 답을","the/a AI's/n answer./n"]] },
    { tr: "그들은 코드를 차근차근 바꾼다.", p: [["S","그들은","They/pr"],["P","바꾼다","change/v"],["O","코드를","the/a code/n"],["M","차근차근","step/n by/p step./n"]] },
    { tr: "간단한 말은 더 나은 프로그램을 만든다.", p: [["S","간단한 말은","Simple/a words/n"],["P","만든다","make/v"],["O","더 나은 프로그램을","better/a programs./n"]] },

    // ── AI ──
    { tr: "인공지능은 데이터로부터 배운다.", p: [["S","인공지능은","Artificial/a intelligence/n"],["P","배운다","learns/v"],["M","데이터로부터","from/p data./n"]] },
    { tr: "인공지능은 우리의 많은 질문에 답한다.", p: [["S","인공지능은","AI/n"],["P","답한다","answers/v"],["O","우리의 많은 질문에","our/pr many/a questions./n"]] },
    { tr: "똑똑한 로봇은 바쁜 의사를 돕는다.", p: [["S","똑똑한 로봇은","Smart/a robots/n"],["P","돕는다","help/v"],["O","바쁜 의사를","busy/a doctors./n"]] },
    { tr: "컴퓨터는 사람의 얼굴을 인식한다.", p: [["S","컴퓨터는","A/a computer/n"],["P","인식한다","recognizes/v"],["O","사람의 얼굴을","human/a faces./n"]] },
    { tr: "인공지능은 여러 다른 언어를 번역한다.", p: [["S","인공지능은","AI/n"],["P","번역한다","translates/v"],["O","여러 다른 언어를","many/a different/a languages./n"]] },
    { tr: "모델은 내일의 날씨를 예측한다.", p: [["S","모델은","The/a model/n"],["P","예측한다","predicts/v"],["O","내일의 날씨를","tomorrow's/n weather./n"]] },
    { tr: "자율주행차는 도로를 읽는다.", p: [["S","자율주행차는","Self-driving/a cars/n"],["P","읽는다","read/v"],["O","도로를","the/a road./n"]] },
    { tr: "인공지능은 아름다운 새 그림을 만든다.", p: [["S","인공지능은","AI/n"],["P","만든다","creates/v"],["O","아름다운 새 그림을","beautiful/a new/a pictures./n"]] },
    { tr: "기계는 많은 예시로부터 배운다.", p: [["S","기계는","Machines/n"],["P","배운다","learn/v"],["M","많은 예시로부터","from/p many/a examples./n"]] },
    { tr: "인공지능은 지친 학생을 돕는다.", p: [["S","인공지능은","AI/n"],["P","돕는다","helps/v"],["O","지친 학생을","tired/a students./n"]] },
    { tr: "챗봇은 사람들과 친절하게 대화한다.", p: [["S","챗봇은","A/a chatbot/n"],["P","대화한다","talks/v"],["M","사람들과","with/p people/n"],["M","친절하게","kindly./av"]] },
    { tr: "컴퓨터는 엄청난 양의 데이터를 처리한다.", p: [["S","컴퓨터는","Computers/n"],["P","처리한다","process/v"],["O","엄청난 양의 데이터를","huge/a amounts/n of/p data./n"]] },
    { tr: "인공지능은 때때로 간단한 실수를 한다.", p: [["S","인공지능은","AI/n"],["M","때때로","sometimes/av"],["P","한다","makes/v"],["O","간단한 실수를","simple/a mistakes./n"]] },
    { tr: "사람들은 인공지능을 현명하게 사용해야 한다.", p: [["S","사람들은","People/n"],["P","사용해야 한다","should/v use/v"],["O","인공지능을","AI/n"],["M","현명하게","wisely./av"]] },
    { tr: "스마트 스피커는 우리가 좋아하는 노래를 재생한다.", p: [["S","스마트 스피커는","Smart/a speakers/n"],["P","재생한다","play/v"],["O","우리가 좋아하는 노래를","our/pr favorite/a songs./n"]] },
    { tr: "인공지능은 우리의 미래 세계를 바꾼다.", p: [["S","인공지능은","AI/n"],["P","바꾼다","changes/v"],["O","우리의 미래 세계를","our/pr future/a world./n"]] },

    // ── 파이썬 ──
    { tr: "파이썬은 인기 있는 프로그래밍 언어이다.", p: [["S","파이썬은","Python/n"],["P","이다","is/v"],["C","인기 있는 프로그래밍 언어","a/a popular/a programming/a language./n"]] },
    { tr: "초보자는 파이썬을 아주 쉽게 배운다.", p: [["S","초보자는","Beginners/n"],["P","배운다","learn/v"],["O","파이썬을","Python/n"],["M","아주 쉽게","very/av easily./av"]] },
    { tr: "파이썬은 간단하고 명확한 단어를 사용한다.", p: [["S","파이썬은","Python/n"],["P","사용한다","uses/v"],["O","간단하고 명확한 단어를","simple/a clear/a words./n"]] },
    { tr: "함수는 유용한 값을 반환한다.", p: [["S","함수는","A/a function/n"],["P","반환한다","returns/v"],["O","유용한 값을","a/a useful/a value./n"]] },
    { tr: "출력 명령은 글자를 보여 준다.", p: [["S","출력 명령은","The/a print/a command/n"],["P","보여 준다","shows/v"],["O","글자를","the/a text./n"]] },
    { tr: "리스트는 많은 항목을 담는다.", p: [["S","리스트는","A/a list/n"],["P","담는다","holds/v"],["O","많은 항목을","many/a items./n"]] },
    { tr: "프로그래머는 매일 파이썬을 작성한다.", p: [["S","프로그래머는","Programmers/n"],["P","작성한다","write/v"],["O","파이썬을","Python/n"],["M","매일","every/a day./n"]] },
    { tr: "반복문은 숫자를 빠르게 센다.", p: [["S","반복문은","A/a loop/n"],["P","센다","counts/v"],["O","숫자를","the/a numbers/n"],["M","빠르게","quickly./av"]] },
    { tr: "파이썬은 데이터로 과학자를 돕는다.", p: [["S","파이썬은","Python/n"],["P","돕는다","helps/v"],["O","과학자를","scientists/n"],["M","데이터로","with/p data./n"]] },
    { tr: "변수는 유용한 정보를 저장한다.", p: [["S","변수는","Variables/n"],["P","저장한다","store/v"],["O","유용한 정보를","useful/a information./n"]] },
    { tr: "프로그램은 입력 파일을 읽는다.", p: [["S","프로그램은","The/a program/n"],["P","읽는다","reads/v"],["O","입력 파일을","the/a input/a file./n"]] },
    { tr: "오류는 실행 중인 프로그램을 멈춘다.", p: [["S","오류는","An/a error/n"],["P","멈춘다","stops/v"],["O","실행 중인 프로그램을","the/a running/a program./n"]] },
    { tr: "코더는 자기 파이썬 프로젝트를 온라인으로 공유한다.", p: [["S","코더는","Coders/n"],["P","공유한다","share/v"],["O","자기 파이썬 프로젝트를","their/pr Python/a projects/n"],["M","온라인으로","online./av"]] },
    { tr: "파이썬은 많은 컴퓨터에서 실행된다.", p: [["S","파이썬은","Python/n"],["P","실행된다","runs/v"],["M","많은 컴퓨터에서","on/p many/a computers./n"]] },
    { tr: "조건문은 먼저 값을 확인한다.", p: [["S","조건문은","A/a condition/n"],["P","확인한다","checks/v"],["O","값을","the/a value/n"],["M","먼저","first./av"]] },
    { tr: "라이브러리는 강력한 새 도구를 더한다.", p: [["S","라이브러리는","Libraries/n"],["P","더한다","add/v"],["O","강력한 새 도구를","powerful/a new/a tools./n"]] },

    // ── 기술 일반 ──
    { tr: "컴퓨터는 어려운 문제를 빠르게 푼다.", p: [["S","컴퓨터는","Computers/n"],["P","푼다","solve/v"],["O","어려운 문제를","hard/a problems/n"],["M","빠르게","fast./av"]] },
    { tr: "좋은 코드는 오류 없이 실행된다.", p: [["S","좋은 코드는","Good/a code/n"],["P","실행된다","runs/v"],["M","오류 없이","without/p errors./n"]] },
    { tr: "학생들은 코드로 작은 게임을 만든다.", p: [["S","학생들은","Students/n"],["P","만든다","build/v"],["O","작은 게임을","small/a games/n"],["M","코드로","with/p code./n"]] },
    { tr: "기술은 우리의 일상을 바꾼다.", p: [["S","기술은","Technology/n"],["P","바꾼다","changes/v"],["O","우리의 일상을","our/pr daily/a life./n"]] },
    { tr: "키보드는 화면으로 글자를 보낸다.", p: [["S","키보드는","A/a keyboard/n"],["P","보낸다","sends/v"],["O","글자를","letters/n"],["M","화면으로","to/p the/a screen./n"]] },
    { tr: "프로그래머는 어려운 문제에 대해 생각한다.", p: [["S","프로그래머는","Programmers/n"],["P","생각한다","think/v"],["M","어려운 문제에 대해","about/p hard/a problems./n"]] },
    { tr: "새 앱은 날마다 휴대폰에 나타난다.", p: [["S","새 앱은","New/a apps/n"],["P","나타난다","appear/v"],["M","휴대폰에","on/p phones/n"],["M","날마다","daily./av"]] },
    { tr: "호기심 많은 아이들은 코딩을 즐겁게 배운다.", p: [["S","호기심 많은 아이들은","Curious/a kids/n"],["P","배운다","learn/v"],["O","코딩을","coding/n"],["M","즐겁게","happily./av"]] },
  ],
};
