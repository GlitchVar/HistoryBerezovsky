function openHumanModal(event) {
    const modalId = event.target.dataset.target;
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.modal-humans-content');
    if(modalId === 'modal-humans1') {
        modalContent.innerHTML = `<h1 align="center" style="position: relative; left: 500px; padding-top: 21px; font-weight: 400; width: 500px;">Лев Иванович Брусницын</h1>
        <p style="position: relative; right: 530px;">Родился в 1784 году (по другим данным в 1786 году) в семье потомственных мастеровых, работавших на золотых промыслах.
        3 января 1795 года поступил на службу промывальщиком Ключевской золототолчейной фабрики. Работая как взрослые, промывал дроблёную руду, отделяя черный шлих на деревянных лотках.
        С 1807 года находился на промываленной работе золотопромываленной фабрике следил за нарядом рабочих людей.
        В 1808 году стал руководителем бригады рабочих. В 1811 году на Урал прибыл обер-бергмейстер Николай Алексеевий Шленев (1776—1863), назначенный руководить Уфалейскими приисками. Лев Брусницын был им замечен и принят на работу в качестве рудойщика. Спустя некоторое время он выявил несколько участков золоторудных жил, где впоследствии были образованы Золотарский и Шеминский рудники. За этот успех Брусницын был произведен в статский внеклассный чин похштейгера, что означало скачок через несколько ступеней.
        Старательские работы на реке Берёзовке
        В 1814 году Лев Иванович был определён на Первопавловскую фабрику Берёзовского завода в качестве смотрителя по всему золотому производству. В этом же году было объявлено об открытии золотосодержащих песков около Первопавловской золотопромывочной фабрики, за что Брусницын был назначен обер-похштейгером. Исследования и открытия новых золотоносных участков в долине рек Березовки и Пышмы продолжались: в 1817 году были заложены Мальковский и Даниловский прииски, в 1818 году — Становской прииск. Брусницына стали привлекать для работ по обнаружению и добыче золота в разные места Урала и Сибири. В результате в 1819 году начал работу рудник на верхней Нейве, а в 1821 году россыпное золото было найдено на реке Чусовой.
        </p>
        <img src="img/lev1.jpg" style="border-radius: 20px;" width="200" height="358" loading="lazy" class="kartinkabog">
        <button type="submit" class="close-btn-modal">✖️</button>`;
        modal.style.height = "670px";
    } else if(modalId === 'modal-humans2') {
        modalContent.innerHTML = `<h1 align="center" style="position: relative; left: 450px; padding-top: 21px; font-weight: 400; width: 500px;">Кузьма Дмитриевич Фролов</h1>
        <p style="position: relative; right: 530px;">Родился 29 июня (10 июля) 1726 года в Полевском заводе, на Урале, в семье мастерового.
        В 1744 году окончил горнозаводскую школу в Екатеринбурге. Службу начал на Березовских золотых промыслов «горным учеником». Впоследствии работал рудокопом, писарем, строителем конных водоподъемников для откачки воды из шахт.
        В 1758 году получил звание штейгера (горного техника) и направлен на Воицкий рудник, (Надвоицы) для налаживания работ по промывке золота.
        С 1759 года — руководитель работ по добыче золота на Березовском руднике.
        В 1762 году возглавил все золотые промыслы Урала.
        В 1763 году, по настоянию начальника Колывано-Воскресенских заводов А. И. Порошина, переведен на Алтай для механизации Змеиногорского рудника.
        В 1790 году назначен руководителем работ на всех рудниках Алтая.
        В 1798 году вышел в отставку по состоянию здоровья в чине берггауптмана (полковника горной службы). Остался членом Горного совета алтайских рудников.
        Могила Фролова
        Скончался 9 (21) марта 1800 года, во время приезда в Барнаул на очередное заседание Горного совета. Похоронен на Нагорном кладбище в Барнауле.</p>
        <img src="img/kuzma.jpg" style="border-radius: 20px; position: relative; top: -100px; left: -50px;" width="272" height="358" loading="lazy" class="kartinkabog">
        <button type="submit" class="close-btn-modal">✖️</button>`;
        modal.style.width = "1351px";
        modal.style.height = "500px";
    } else if(modalId === 'modal-humans3') {
        modalContent.innerHTML = `<h1 align="center" style="position: relative; left: 450px; padding-top: 21px; font-weight: 400; width: 500px;">Константин Жильцов</h1>
        <p style="position: relative; right: 530px;"> О жизни Константина Фёдоровича известно немного. Но судя по фактам его биографии понятно, что это человек с нелёгкой, но насыщенной событиями судьбой. Он родился в 1909 году в семье кустаря-сапожника в городе Льгове Курской области. После окончания восьми классов начинается его трудовой путь, когда в 1928 году он устраивается разнорабочим на строительство дома крестьянина, а спустя год перебирается в Ленинград, где зарабатывает на жизнь рабочим порта. После службы в Красной Армии, Жильцов в 1933 году поступает в Ленинградский горный техникум, а затем продолжает учёбу в Свердловском горно-металлургическом техникуме имени Ползунова. В 1937 году он переезжает в совсем незнакомый уральский город, куда молодой специалист Константин Жильцов направлен в Берёзовское рудоуправление начальником участка и где с первых дней зарекомендовал себя, как специалист, знающий горное производство. Уже в то время он зарекомендовал себя инициативным и хорошим организатором. Вскоре Жильцов был назначен начальником шахты и в 1939 году директором Благодатского рудника в составе комбината «Берёзовзолото». В том же (1939) году березовчане избирают его депутатом городского Совета. Незадолго до окончания войны в апреле 1945 года Константин Фёдорович был избиран Председателем Березовского городского совета депутатов трудящихся и работал в этой должности до 1963 года. Умер Константин Фёдорович в 1964 году.</p>
        <img src="img/shilcov.png" style="border-radius: 20px; position: relative; top: -100px; left: -50px;" width="272" height="358" loading="lazy" class="kartinkabog"> 
        <button type="submit" class="close-btn-modal">✖️</button>`;
        modal.style.width = "1351px";
        modal.style.height = "580px";
    } else if(modalId === 'modal-humans4') {
        modalContent.innerHTML = `<h1 align="center" style="position: relative; left: 440px; padding-top: 21px; font-weight: 400; width: 500px;">Ерофей Марков Сидорович</h1>
        <p style="position: relative; right: 530px;">Ерофей Сидорович Марков (1695-1783) родился в селе Павлово Троице-Сергиева монастыря. Вместе с общиной староверов раскольников семья Е. Маркова была переселена на Урал и обосновалась в знаменитом старообрядческом селе Шарташ. Ерофей Марков со временем стал одним из наемных рабочих Екатеринбургского казенного завода. Занимался он и розыском самоцветов, поставляя их на Екатеринбургскую гранильную фабрику.  В мае 1745 г. недалеко от места впадения реки Березовки в реку Пышму Ерофей Марков обнаружил кварцевые жилы с вкраплениями рудного золота.  Для проверки находки Е. Марков передал камни с вкраплениями на опробование в Главную канцелярию заводов. Опробование показало содержание золота. Начались поиски на указанном Е. Марковым месте. Однако никаких следов золота обнаружено не было. Первооткрывателя заподозрили в укрывательстве настоящего месторождения. К счастью обошлось без репрессий, так как за Маркова поручились его односельчане. Горная канцелярия послала подробное донесение в Берг-коллегию. Берг-коллегия вынесла решение: «С Марковым поступать без озлобления, чтобы через то к совершенному и полезному прибытку впредь мог он тщаться и отыскивать. После указа Берг-коллегии канцелярия сняла Маркова с порук, а 4 мая 1747 г. было решено вновь произвести исследование глин и песков на месте находки Маркова. Этим занялся пробирных дел мастер Е. Рюмин. 11 июня 1747 г. Рюмину удалось обнаружить «в песчаной материи малый знак золота». Была начата постройка рудника для разработки золота. Первый уральский золотой рудник получил название Шарташский, а в 1804 г. он был переименован в Первоначальный.  За свою находку Ерофей Марков получил вознаграждение. С 1752 по 1777 год Ерофей Марков служил на Березовских промыслах, закончив службу в чине штейгера.</p>
        <img src="img/erofey.jpg" style="border-radius: 20px; position: relative; top: -100px; left: -50px;" width="175.87" height="327" loading="lazy" class="kartinkabog">
        <button type="submit" class="close-btn-modal">✖️</button>`;
        modal.style.width = "1251px";
        modal.style.height = "680px";
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    const buttonClose = modalContent.querySelector('.close-btn-modal');
    buttonClose.addEventListener("click", () => {
      modal.style.display = 'none';
      document.body.style.overflowY = 'auto';
    });

    window.addEventListener("keydown", (event) => {
        if(event.key === "Escape") {
            modal.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    });
}

const modalButtonsHumans = document.querySelectorAll(".modal1");
modalButtonsHumans.forEach(modalButtonsHuman => {
    modalButtonsHuman.addEventListener("click", openHumanModal); 
})
