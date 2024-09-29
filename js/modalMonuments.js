// Функция для открытия модального окна монументов
function openMonumentsModal(event) {
    const modalId = event.target.dataset.target;
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.modal-monuments-content');

    if(modalId === 'modal-monuments1') {
        modalContent.innerHTML = `
        <h1 align="center" style="position: relative; left: 500px; padding-top: 21px; font-weight: 500; width: 500px; padding-bottom: 40px; font-size: 21px;">Памятник Ерофея Маркова</h1>
        <p style="position: relative; right: 498px;">В 1977 году, в честь 60-летия Октябрьской революции, 
        в Историческом сквере города Берёзовского был открыт памятник 
        первооткрывателю рудного золота Ерофею Маркову. Это первый и до сих пор 
        единственный подобный памятник в стране. Авторы скульптурной композиции – В. Я. Зайцев и Г. П. Гаев
        …Присев на каменном пьедестале, Ерофей внимательно рассматривает кусок породы. 
        Два с половиной века назад он так же, может быть, впервые увидел блеснувшие чешуйки золота и застыл в безмолвном удивлении… 
        Ерофей Сидорович Марков (1695-1783) родился в селе Павлово Троице-Сергиева монастыря.</p>
        
        <img src="img/do.jpg" loading="lazy" style="position: relative; top: 130px; right: 1030px;" alt="do">
        <h2 style="position: absolute; top: 330px; left: 80px;">До:</h2>
        <h2 style="position: absolute; top: 330px; left: 735px;">После:</h2>
        <img src="img/posle.jpg" loading="lazy" style="position: absolute; top: 130px; left: 1200px;" alt="posle">
        <button type="submit" class="close-btn-monuments">X</button>
        `;
        modal.style.width = "1351px";
        modal.style.height = "755px";
    } else if(modalId === 'modal-monuments2') {
        modalContent.innerHTML = `
        <h1 align="center" style="position: relative; left: 500px; padding-top: 21px; font-weight: 500; width: 500px; padding-bottom: 40px; font-size: 21px;">Монумент горняцкая слава</h1>
        <p style="position: relative; right: 498px;">Двухметровая фигура шахтёра, отлитая из бронзы, установлена на каменном постаменте. Площадку обрамляет импровизированный свод поземного забоя. По замыслу авторов, горняк управляет бурильной установкой. Промышленный агрегат также покрыт цветным сплавом. Открытие монумента «Горняцкая слава» стало событием общегородского масштаба и было приурочено ко Дню шахтёра, который отмечается 25 августа по всей стране.
        Идея монумента «Горняцкая слава» принадлежит молодым екатеринбургским скульпторам-монументалистам Александру и Дмитрию Бородиным.
        Внутреннюю поверхность подземного «тоннеля» мастера намеренно сделали не круглой, а угловатой, как и должно быть в настоящей шахте. 
        Общая высота монумента «Горняцкая слава» достигает пяти метров. 
        Расположенный на гостевом маршруте памятник своими размерами непроизвольно обращает внимание на себя жителей и гостей города.</p>
        <img src="img/do2.jpg" loading="lazy" style="position: relative; top: 230px; right: 1030px;" alt="do">
        <h2 style="position: absolute; top: 430px; left: 80px;">До:</h2>
        <h2 style="position: absolute; top: 430px; left: 535px;">После:</h2>
        <img src="img/posle2.jpg" loading="lazy" style="position: absolute; top: 230px; left: 1000px;"  alt="posle">
        <button type="submit" class="close-btn-monuments">X</button>
        `;
        modal.style.width = "1351px";
        modal.style.height = "855px";
    } else if(modalId === 'modal-monuments3') {
        modalContent.innerHTML = `
        <h1 align="center" style="position: relative; left: 500px; padding-top: 21px; font-weight: 500; width: 500px; padding-bottom: 40px; font-size: 21px;">Памятник Кирову</h1>
        <p style="position: relative; right: 498px;">Недалеко от шахты «Южная» разбит сквер, на территории которого находится памятник С.М. Кирову. Во времена Советского Союза рудоуправление носило имя этого политического деятеля. Недавно в этом сквере также была установлена скульптура Хозяйки медной горы.
        Новый бюст, отлитый из бронзы, появился на прежнем месте – на территории возле Берёзовского рудника (который вплоть до 90-х годов носил его имя), 
        где ранее располагался памятник этому политическому деятелю из бетона.
        Торжественное открытие памятника состоялось 1 июля – в день голосования по поправкам в Конституцию. 
        Открытие монумента приурочено к Дню города Берёзовского и к 275-летию с начала разработок на золотоносном месторождении Берёзовского. 
        Памятник Кирову – это вторая большая работа братьев Бородиных в Берёзовском. 
        Несколькими годами ранее  - в 2013-м - они изготовили монумент «Горняцкая слава», который сегодня расположен на перекрестке улиц Ленина и Октябрьской, рядом со зданием, которое ранее занимало Берёзовское рудоуправление.</p>
        <img src="img/kirov1.jpg" loading="lazy" style="position: relative; top: 270px; right: 1030px;" alt="do">
        <h2 style="position: absolute; top: 470px; left: 80px;">До:</h2>
        <h2 style="position: absolute; top: 470px; left: 535px;">После:</h2>
        <img src="img/kirov2.jpg" loading="lazy" style="position: absolute; top: 270px; left: 1000px;" alt="posle"> 
        <button type="submit" class="close-btn-monuments">X</button>
        `;
        modal.style.width = "1351px";
        modal.style.height = "895px";
    } else if(modalId === 'modal-monuments4') {
        modalContent.innerHTML = `
        <h1 align="center" style="position: relative; left: 500px; padding-top: 21px; font-weight: 500; width: 500px; padding-bottom: 40px; font-size: 21px;">Монумент Воинской славы</h1>
        <p style="position: relative; right: 498px;">Ровно 41 год назад появилась одна из главных достопримечательностей Берёзовского – мемориал боевой  доблести и трудовой славы березовчан. Строили его на благотворительные средства, собранные населением и промышленными предприятиями. Наш мемориальный комплекс до сих пор остаётся одним из крупнейших на Среднем Урале.
        Спустя годы мы вспоминаем историю создания мемориала: кто принимал решения, с какими трудностями сталкивались 
        строители и как развивался парк Победы вокруг скульптурного комплекса. Стройка для Берёзовского во многом была 
        уникальной – таких масштабных объектов в рекордно короткие сроки в городе не строили. 
        События 1970-х годов хорошо помнит Почётный гражданин Берёзовского Тамара Ерёмина. 
        В то время Тамара Ивановна была секретарём городского комитета Коммунистической партии Советского Союза (далее – партии), 
        в переводе на сегодняшние реалии – четвертым человеком в руководстве города.</p>
        <img src="img/parkPobedi1.jpg" loading="lazy" style="position: relative; top: 240px; right: 1030px;" alt="do">
        <h2 style="position: absolute; top: 440px; left: 80px;">До:</h2>
        <h2 style="position: absolute; top: 440px; left: 535px;">После:</h2>
        <img src="img/parkPobedi2.jpg" loading="lazy" style="position: absolute; top: 240px; left: 1000px;" alt="posle"> 
        <button type="submit" class="close-btn-monuments">X</button>
        `;
        modal.style.width = "1351px";
        modal.style.height = "865px";
    }

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    window.addEventListener("keydown", (event) => {
        if(event.key == "Escape") {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    })

    const buttonClose = modalContent.querySelector('.close-btn-monuments');
    
    buttonClose.addEventListener("click", () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

const modalButtonsMonuments = document.querySelectorAll(".monuments-button");

modalButtonsMonuments.forEach(modalButtonsMonument => {
    modalButtonsMonument.addEventListener("click", openMonumentsModal); 
})
