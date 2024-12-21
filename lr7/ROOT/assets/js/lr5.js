let step, steps_history, path_photo, steps; // Инициализируем переменные до блока if, чтобы они были доступны в других частях кода
function made_choice(event) {
    // Создание переменных
    console.log(typeof step);
    if ((typeof step == 'undefined') || (steps_history == 'undefined') || (path_photo == 'undefined') || (steps == 'undefined')) {
        step = "1";
        steps_history = ["1"];
        path_photo = "../assets/img/lr5/";
        steps = {
            1: {
                img: path_photo + "1.webp",
                story: "В лесу, среди высоких деревьев и уютных полян, живут три необычных брата-медведя. Каждый из них не только уникален по внешности, но и обладает своим характером и подходом к жизни, что делает их дружную семью по-настоящему неповторимой. <br>Гризли — энергичный и неугомонный лидер, он обожает быть в центре внимания и стремится взять на себя ответственность в любой ситуации, иногда немного поспешно. <br>Панда — черно-белый медведь с мягким сердцем, всегда в поисках комфорта и гармонии. Он искренне заботится о своих братьях и готов поддержать их, несмотря на собственные сомнения. <br>Белый — загадочный и молчаливый младший брат, который своим спокойствием и решимостью компенсирует эмоциональность других. Его молчаливость скрывает острый ум и уникальные способности, которые выручают братьев в сложных ситуациях. <br>Эти три медведя, несмотря на различия, всегда вместе. Они поддерживают друг друга в любых приключениях, будь то поиски новой пиццерии или спасение их лесного дома от надвигающейся угрозы.",
                question: [],
                selections: ["Начать"],
                next: ["2"],
            },
            2: {
                img: path_photo + "2.webp",
                story: "Три медведя собрались под своим любимым деревом в лесу. Гризли, с тревожным выражением лица, показал братьям статью из газеты, где сообщалось о начале вырубки леса для строительства огромного торгового центра. Панда с сомнением покачал головой, предложив сначала проверить информацию, прежде чем принимать какие-либо действия. Белый, молча кивая, одобрил эту идею, намекая, что разведка поможет понять масштаб проблемы.",
                question: ["Как медведи действуют?"],
                selections: ["☐ Гризли настаивает на немедленных действиях","☐ Они отправляются к краю леса, чтобы разведать обстановку"],
                next: ["4.1", "3.1"],
            },

            3.1: {
                img: path_photo + "3.1.webp",
                story: "Медведи подошли к краю леса, где наткнулись на рабочие машины и людей, отмечающих деревья для вырубки. Панда сделал несколько фотографий, а Белый, внимательно наблюдая, заметил документы у рабочих. Гризли предложил поговорить с людьми, но братья усомнились, что это приведет к чему-то хорошему.",
                question: ["Что делать дальше?"],
                selections: ["☐ Поговорить с рабочими и попытаться понять, кто стоит за проектом", "☐ Обратиться за поддержкой через соцсети"],
                next: ["4.1", "5.2"],
            },
            4.1:{
                img: path_photo + "4.1.webp",
                story: "Медведи подошли к рабочим, чтобы задать вопросы, но те лишь отмахнулись от них, сказав, что у них приказ и ничего не изменить. Гризли, не сдерживая эмоций, закричал, что лес — это их дом, но это лишь вызвало смех у рабочих. Белый внимательно рассматривал документы, лежащие в машине, и предложил выяснить, кто является заказчиком проекта. Панда предложил выложить снимки вырубки в соцсети для огласки.",
                question: ["Какой путь выбрать?"],
                selections: ["☐ Начать прямое противостояние с рабочими", "☐ Обратиться за поддержкой через соцсети"],
                next: ["5.1", "5.2"],
            },
            5.1:{
                img: path_photo + "5.1.webp",
                story: "Гризли решил действовать более решительно. Ночью он с братьями проник на стройплощадку, чтобы саботировать технику. Они отключили камеры, развинтили несколько машин, но звук привлек охрану. Панда нервничал, умоляя их остановиться, но Гризли настаивал, что это их единственный шанс. В итоге охрана заметила их, и медведям пришлось спасаться бегством. Панда и Белый перелезли через забор, а у Гризли уже не было сил и он решил протиснуться между прутьями забора, но застрял.",
                question: ["Помогут ли братья ему выбраться, как поступить?"],
                selections: ["☐ Оставить Гризли и дать дёру от охраны", "☐ Панда отвлекает охрану, пока Белый спасает Гризли"],
                next: ["6.1.1", "6.1.2"],
            },
            "6.1.1":{
                img: path_photo + "6.1.1.webp",
                story: "Пока Гризли застрял в заборе, Панда и Белый поспешили скрыться в темноте. Они оглядываются, пытаясь найти безопасное место для укрытия, а Гризли в это время продолжает бороться с забором, изо всех сил пытаясь вылезти. Когда Панда решает, что это слишком рискованно, он начинает тихо хихикать от мысли, как Гризли сейчас выглядит, но Белый молча качает головой, следя за тем, как охрана их не замечает.",
                question: ["Что будет дальше?"],
                selections: ["☐ Панда решает, что лучше было бы вернуться за Гризли, но тут же осознаёт, что это не лучшая идея", "☐ Белый молчит, но кидает взгляд на Панду, как бы говоря: 'Я же предупреждал тебя'"],
                next: ["7.1.1", "7.1.1"],
            },
            "7.1.1":{
                img: path_photo + "7.1.1.webp",
                story: "Панда и Белый прячутся в кустах, продолжая следить за тем, как Гризли мучительно протискивается через забор. Это происходит дольше, чем они ожидали, и Панда начинает хихикать. Он всё-таки решает отправиться в сторону дома, думав, что Гризли и так справится. Белый с кривой улыбкой замечает, что Гризли может провести в этом заборе целый день, но на всякий случай даёт ему ещё несколько минут, прежде чем уйти.",
                question: ["Как поступить медведям?"],
                selections: ["☐ Панда решает подождать ещё немного, весело шутя про Гризли, пока он не выберется", "☐ Белый уходит, не переживая, но Панда всё же решает вернуться за Гризли и, возможно, выслушать его ярость"],
                next: ["8.1.1", "8.1.1"],
            },
            "8.1.1":{
                img: path_photo + "8.1.1.webp",
                story: "Когда Гризли наконец вырывается из забора, его запутанная шерсть и колючки, как на самом деле кажется Панде, выглядят так, будто он был частью необычного растения. Он выглядит настолько уморительно, что Панда едва сдерживает смех, но при этом чувствует, что Гризли будет злиться ещё больше. Белый, заметив недовольство Гризли, делает шаг назад, как бы не участвуя в этом комедийном шоу.",
                question: ["Что произойдет?"],
                selections: ["☐ Панда говорит, что Гризли теперь стал 'экологически чистым', а Белый кивает, одобрительно соглашаясь", "☐ Гризли рычит, но Панда решает, что лучше будет об этом промолчать и уйти подальше"],
                next: ["9.1.1", "9.1.1"],
            },
            "9.1.1":{
                img: path_photo + "9.1.1.webp",
                story: "Медведи решили, что надо как-то скрыться, и побежали в лес, но их побег стал чем-то, что напоминало не спасение, а весёлую прогулку в стиле 'откроем секреты природы'. Панда с Белым убегают так быстро, что иногда сталкиваются друг с другом и падают, но при этом держат темп, уверенные, что скрыться они смогут.",
                question: ["Какое событие произойдет?"],
                selections: ["☐ Белый запутался в кустах и только из-за этого с трудом смог догнать Панду, после чего они решают скрыться в другом месте", "☐ Панда решает, что лучше спрятаться в ближайшем доме, а Белый, задумавшись, говорит: 'Скоро мы снова с Гризли, не переживай'"],
                next: ["10.1.1", "10.1.1"],
            },
            "10.1.1":{
                img: path_photo + "10.1.1.webp",
                story: "Как только медведи наконец находят убежище в лесу, они решают немного передохнуть. Панда с улыбкой говорит, что их приключения стали настоящей 'легендой о заблудших медведях', ведь они бегали и прятались по всему лесу, но, на удивление, так и не попались. Белый, в своей манере, молчит, наслаждаясь тихим моментом. Гризли же, сидя на дереве, громко ворчит о том, что его опять 'предали'.",
                question: ["Каким будет продолжение?"],
                selections: ["☐ Панда решает сдаться и извиниться перед Гризли, но понимает, что это не спасёт ситуацию", "☐ Белый, так и не вмешиваясь, решает, что они просто потратили слишком много сил, чтобы спасать Гризли, и всё, что они сейчас могут сделать, это пожить в своем собственном укрытии"],
                next: ["11.1.1", "11.1.1"],
            },
            "11.1.1":{
                img: path_photo + "11.1.1.webp",
                story: "После всей этой суеты и смеха, медведи возвращаются домой, поняв, что они просто не могут больше работать в одной команде. Гризли, отчаявшийся из-за неудач, решает, что больше не будет продолжать бороться, Панда чувствует себя слишком виноватым, а Белый, спокойно разжёвывая траву, осознаёт, что они все потеряли фокус. Миссия по спасению леса не удалась, а их разногласия разрушили команду. Медведи покидают свой дом, решив, что надо попробовать что-то новое, но уже поодиночке.",
                question: [],
                selections: [],
                next: [],
            },
            // конец первой ветки

            // начало второй ветки
            "6.1.2":{
                img: path_photo + "6.1.2.webp",
                story: "Белый и Панда возвращаются к нему. Панда действует быстро, подталкивая Гризли, а Белый размахивает руками, привлекая внимание охраны. В последний момент Гризли вырывается, и медведи убегают в темноту.",
                question: ["Стоит ли показать напоследок непристойный жест охранникам, ради издевки?"],
                selections: ["☐ Конечно! Большего они и не заслуживают, охраняя вырубку леса", "☐ А вдруг из-за злости они ускорятся и догонят медведей? Думаю не стоит"],
                next: ["7.1.2", "7.1.2"],
            },
            "7.1.2":{
                img: path_photo + "7.1.2.webp",
                story: "После изнуряющей ночной вылазки медведи вернулись в свою берлогу. Гризли первым ворвался внутрь, захлопнул дверь и, упав на ближайший стул, с раздражением ударил лапой по столу. Он был явно зол и разочарован, осознавая, что их план едва не провалился. Его пылкое желание остановить вырубку любой ценой привело их к опасному столкновению, и теперь он винил себя за это. Панда, напротив, старался разрядить обстановку. Он метался по берлоге, проверяя, не оставили ли они следов, которые могли бы привести к ним. Белый, как всегда, оставался невозмутим. Он разложил перед собой украденные документы и углубился в их изучение. Для него это был не провал, а полезный урок, из которого можно вынести стратегически важные выводы. <br>Гризли, видя, как братья погружены в свои дела, вдруг почувствовал отчаяние. Он громко заявил, что в следующий раз всё должно быть иначе, иначе их борьба закончится неудачей. Панда попытался убедить его, что время передышки необходимо, чтобы не повторить ошибок, но Гризли лишь отмахнулся. Белый коротко заметил, что у них есть шанс выработать новый план, если они начнут действовать немедленно. Это стало толчком для обсуждения следующего шага, и каждый из них предложил свою стратегию.",
                question: ["Какую из стратегий выбрать?"],
                selections: ["☐ Сосредоточиться на анализе документов, чтобы найти слабые места компании и использовать их в борьбе", "☐ Искать в документах данные, которые помогут привлечь внимание прессы и общественности", "☐ Разработать стратегию на основе найденных бумаг, чтобы максимально эффективно сорвать планы застройщика"],
                next: ["8.1.2", "8.1.2", "8.1.2"],
            },
            "8.1.2":{
                img: path_photo + "8.1.2.webp",
                story: "Белый разложил перед братьями найденные документы. Среди них обнаружились счета за доставку строительных материалов, список подрядчиков и распечатка электронных писем. Одно письмо выделяется: в нем упоминаются 'альтернативные меры безопасности' для защиты стройки от активистов.",
                question: ["Как быть с этой информацией?"],
                selections: ["☐ Продолжить анализ документов", "☐ Позвонить активистам, чтобы уточнить информацию", "☐ Устроить перекличку в соцсетях, чтобы узнать, кто может помочь"],
                next: ["9.1.2", "9.1.2", "9.1.2"],
            },
            "9.1.2":{
                img: path_photo + "9.1.2.webp",
                story: "Гризли предлагает устроить крупный протест прямо на стройке. Панда считает, что нужно действовать через прессу и общественное мнение, а не идти на открытое столкновение. Белый предлагает объединить оба подхода: подготовить медийную кампанию и одновременно сорвать работы.",
                question: ["Чей подход будет оптимальным?"],
                selections: ["☐ Присоединиться к Гризли и организовать протест на стройке", "☐ Помочь Панде в подготовке пресс-кампании", "☐ Следовать плану Белого, совмещая оба метода"],
                next: ["10.1.2", "10.1.2", "10.1.2"],
            },
            "10.1.2":{
                img: path_photo + "10.1.2.webp",
                story: "Медведи и их сторонники приходят на стройплощадку. Они блокируют въезд техники и требуют остановить работы. Гризли громко выкрикивает лозунги, Панда раздает журналистам листовки с информацией о вреде вырубки, а Белый снимает происходящее на камеру.",
                question: ["Ситуация обостряется, когда на место приезжает полиция, как быть?"],
                selections: ["☐ Остаться и продолжать протест", "☐ Начать скандировать лозунги еще громче", "☐ Попробовать договориться с полицией"],
                next: ["11.1.2", "11.1.2", "11.1.2"],
            },
            "11.1.2":{
                img: path_photo + "11.1.2.webp",
                story: "Полиция предупреждает протестующих о возможных арестах. Гризли отказывается уходить, утверждая, что это их законное право. Панда пытается договориться с офицерами, объясняя, что протест мирный. Белый наблюдает за действиями полиции, записывая всё на видео. <br>Когда полиция начинает разгонять толпу, медведи оказываются в центре внимания.",
                question: ["Как им лучше поступить?"],
                selections: ["☐ Уклониться от ареста и попытаться уйти", "☐ Остаться и попытаться защитить активистов", "☐ Уступить полиции и добровольно сдаться"],
                next: ["12.1.2", "12.1.2", "12.1.2"],
            },
            "12.1.2":{
                img: path_photo + "12.1.2.webp",
                story: "Ситуация достигает кульминации. Протест перерастает в открытое столкновение. Гризли, пытаясь защитить участников, оказывается в первых рядах и его арестовывают. Панду задерживают, когда он передает журналистам важные документы. Белый, понимая, что уходить бесполезно, поднимает лапы, позволяя полиции надеть на него наручники. <br>Медведей сажают в полицейский фургон. Толпа кричит в их поддержку, а камеры журналистов фиксируют происходящее.Новость о задержании медведей становится вирусной. Видео разгона протеста разлетается по соцсетям, вызывая широкий резонанс. Благодаря этому внимание привлекается к деятельности компании-застройщика, и проект замораживают. Лес получает статус охраняемой территории. <br>Их жертва не была напрасной: лес спасен, а их действия вдохновили многих на борьбу за природу и свой дом.",
                question: [],
                selections: [],
                next: [],
            },
            // конец второй ветки

            // начало третьей ветки
            5.2:{
                img: path_photo + "5.2.webp",
                story: "Панда, вооружившись смартфоном, выложил снимки в социальные сети с призывом спасти лес. Пост Панды начал набирать популярность. Хэштег #СпаситеЛес разошелся по соцсетям, и люди начали высказывать свою поддержку. Вскоре Панду пригласили присоединиться к местной экологической группе, которая уже боролась против вырубки.",
                question: ["Как поступить медведям?"],
                selections: ["☐ Начать прямое противостояние с рабочими", "☐ Объединиться с экологами и действовать через общественное мнение"],
                next: ["5.1", "6.2"],
            },
            6.2:{
                img: path_photo + "6.2.webp",
                story: "Панда продолжал активно работать в интернете. Он встретился с активистами, которые предложили организовать митинг у мэрии города. На этот раз Гризли, хоть и неохотно, согласился, что открытое действие привлечет внимание, хотя все равно свою стратегию считал лучшей.",
                question: ["Какое развитие событий приведет к наилучшему исходу?"],
                selections: ["☐ Медведи в итоге предположили, что митинг им вряд ли в тоге согласуют и решили выбрать радикальный путь Гризли", "☐ Гризли усмирил свой пылкий нрав и медведи начали митинг"],
                next: ["5.1", "7.2"],
            },
            7.2:{
                img: path_photo + "7.2.webp",
                story: "Медведи и активисты собираются на площади перед мэрией. Атмосфера напряженная: кто-то держит транспаранты, кто-то выкрикивает лозунги. Гризли берет мегафон и начинает громко призывать всех поддержать их борьбу за лес. Панда раздает листовки с QR-кодом на петицию, а Белый снимает происходящее на камеру, чтобы позже выложить видео в интернет.",
                question: ["Как поступить?"],
                selections: ["☐ Поддержать Гризли, выкрикивая лозунги", "☐ Помочь Панде раздавать листовки", "☐ Присоединиться к Белому и снять несколько важных моментов"],
                next: ["8.2", "8.2", "8.2"],
            },
            8.2:{
                img: path_photo + "8.2.webp",
                story: "Через некоторое время к митингующим выходит представитель мэрии. Он просит разойтись, заявляя, что действия участников несанкционированны. Гризли спорит, утверждая, что протест мирный и имеет право на существование. Панда пытается успокоить ситуацию, а Белый внимательно слушает, не теряя ни слова.",
                question: ["Что следует сделать?"],
                selections: ["☐ Поддержать Гризли и вступить в спор с представителем власти", "☐ Сказать Панде, чтобы он попытался урегулировать конфликт", "☐ Остаться с Белым, чтобы фиксировать все на камеру"],
                next: ["9.2", "9.2", "9.2"],
            },
            9.2:{
                img: path_photo + "9.2.webp",
                story: "К митингу подключаются журналисты. Они снимают репортажи, берут интервью у участников. Панда, будучи самым разговорчивым, идет отвечать на вопросы прессы. Гризли продолжает вдохновлять толпу, а Белый тихо передает журналистам копии документов, подтверждающих связь застройщика с чиновниками.",
                question: ["Какой выбор приблизит достижение цели?"],
                selections: ["☐ Попросить журналистов сфокусироваться на экологическом вреде", "☐ Рассказать о коррупционных связях компании-застройщика", "☐ Призвать людей подписывать петицию прямо во время интервью"],
                next: ["10.2", "10.2", "10.2"],
            },
            10.2:{
                img: path_photo + "10.2.webp",
                story: "Протест привлекает внимание прохожих. Некоторые люди начинают присоединяться, а другие выражают сомнения. Панда объясняет собравшимся, почему важно защитить лес, и показывает на телефоне фотографии стройки. Гризли берет микрофон и просит всех помнить, что лес — это не только дом для животных, но и часть экосистемы города. Белый раздает брошюры с данными о вреде вырубки.",
                question: ["Как поступить?"],
                selections: ["☐ Помочь Панде объяснить людям ситуацию", "☐ Присоединиться к Гризли и призывать к поддержке леса", "☐ Раздавать брошюры вместе с Белым"],
                next: ["11.2", "11.2", "11.2"],
            },
            11.2:{
                img: path_photo + "11.2.webp",
                story: "Под давлением СМИ и митингующих представитель мэрии обещает провести переговоры с компанией-застройщиком. Толпа начинает аплодировать, а Гризли, хотя и недоволен 'ничего не значащими обещаниями', поддерживает решение остаться и наблюдать за дальнейшими действиями. Панда предлагает оставить контактные данные активистов, чтобы их пригласили на обсуждение. Белый, как всегда, работает молча, но в итоге передает журналистам последний пакет данных для давления на чиновников.",
                question: ["Что следует сделать?"],
                selections: ["☐ Настоять на том, чтобы переговоры прошли как можно быстрее", "☐ Поддержать предложение Панды о передаче контактов", "☐ Предложить дождаться решения, чтобы не провоцировать конфликт"],
                next: ["12.2", "12.2", "12.2"],
            },
            12.2:{
                img: path_photo + "12.2.webp",
                story: "Через несколько дней власти объявляют, что проект торгового центра заморожен. Лес официально получает статус охраняемой зоны. В новостях показывают, как протесты, организованные медведями и их союзниками, помогли сохранить природу. Гризли, хоть и был скептичен к мирным методам, признает, что усилия Панды и Белого сыграли решающую роль. Панда гордится, что их петиция собрала тысячи подписей, а Белый остается скромным героем, довольным результатом. <br>Медведи возвращаются к своему любимому дереву, радуясь, что их дом спасен.",
                question: [],
                selections: [],
                next: [],
            },
            // конец третьей ветки
        };
        /* 
        // Шаблон для добавления нового блока
        :{
            img: path_photo + ".webp",
            story: "",
            question: [""],
            selections: ["☐ ", "☐ "],
            next: ["", ""],
        },
        */
    }


    console.log(steps_history);
    // console.log(event.currentTarget.id);


    // Получение id кнопки
    let button_id = event.currentTarget.id;


    // Проверка какая кнопка нажата и соответственно получение следующего шага
    if (button_id == "selection_button1") {
        step = steps[step]["next"][0];
    } else if (button_id == "selection_button2") {
        step = steps[step]["next"][1];
    } else if (button_id == "selection_button3") {
        step = steps[step]["next"][2];
    } else if (button_id == "start_button") {
        step = "2";
        steps_history = ["1"];
        document.getElementById("div_start_button").style.display = "none";
        document.getElementById("div_back_button").style.display = "block";
        document.getElementById("back_button").style.display = "block";
        document.getElementById("selection_section").style.display = "block";
    } else if (button_id == "back_button") {
        // Получаем предпоследний наш шаг из массива для возврата назад
        step = steps_history[steps_history.length - 1 - 1];
        console.log(step);
        if (step == "1") {
            document.getElementById("selection_section").style.display = "none";
            document.getElementById("selection_button1").style.display = "none";
            document.getElementById("div_back_button").style.display = "none";
            document.getElementById("div_start_button").style.display = "block";
        }
    }


    // Добавление шага в массив истории шагов или изменение массива
    console.log(step);
    if (steps[step]["next"].length !== 0) {
        if (button_id == "back_button") {
            // Обрезаем массив, чтобы получить все элементы, кроме последнего
            steps_history = steps_history.slice(0, -1);
            // step = steps_history[steps_history.length - 1 - 1];
        } else {
            steps_history.push(step);
        }
    } else {
        steps_history.push(step);  
    }


    // Вывод картинки и текста
    document.getElementById("story_section").innerHTML = steps[step]["story"];
    document.getElementById("img_section").src = steps[step]["img"];


    // Проверка на начало и конец, чтобы скрыть лишние блоки
    if (steps[step]["question"].length == 0 || steps[step]["selections"].length == 0 || steps[step]["next"].length == 0) {
        document.getElementById("div_question_section").style.display = "none";
        document.getElementById("selection_section").style.display = "none";
    } else {
        document.getElementById("div_question_section").innerHTML = steps[step]["question"];
        document.getElementById("div_question_section").style.display = "block";
        document.getElementById("selection_section").style.display = "block";
    }


    // Вывод вариантов ответа в зависимости от их количества в массиве
    if (steps[step]["next"].length == 1) {
        document.getElementById("selection_button1").style.display = "block";
        document.getElementById("selection_button1").textContent = steps[step]["selections"][0];
        document.getElementById("selection_button2").style.display = "none";
        document.getElementById("selection_button3").style.display = "none";
    } else if (steps[step]["next"].length == 2) {
        document.getElementById("selection_button1").style.display = "block";
        document.getElementById("selection_button1").textContent = steps[step]["selections"][0];
        document.getElementById("selection_button2").style.display = "block";
        document.getElementById("selection_button2").textContent = steps[step]["selections"][1];
        document.getElementById("selection_button3").style.display = "none";
    } else if (steps[step]["next"].length == 3) {
        document.getElementById("selection_button1").style.display = "block";
        document.getElementById("selection_button1").textContent = steps[step]["selections"][0];
        document.getElementById("selection_button2").style.display = "block";
        document.getElementById("selection_button2").textContent = steps[step]["selections"][1];
        document.getElementById("selection_button3").style.display = "block";
        document.getElementById("selection_button3").textContent = steps[step]["selections"][2];
    }
}