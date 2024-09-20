function openModal(event) {
    const modalId = event.target.dataset.target;
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.modal-content');

    if(modalId === 'modal1') {
        modalContent.innerHTML = `<p>Парк Победы открыт 9 мая 1975 года, как раз в канун празднования 30-летия Победы над фашистскими захватчиками.<br> 
                    На территории парка также находится открытый 26 декабря 2010 года памятник<br> 
                    погибшим в локальных конфликтах воинам-интернационалистам. В канун 50-летия Победы в парке была возведена<br> 
                    Триумфальная арка с колоннами, торжественное открытие которой состоялось 8 мая 2005 года.<br>
                    На территории парка расположен мемориал в честь 50-летия Победы, построенный на средства березовчан и открытый 9 мая 1975 г.</p>
                <img src="img/pobeda2.jpg" style="border-radius: 20px;" width="377" height="348" loading="lazy" alt="Парк победы" title="До:">
                <img src="img/pobeda3.jpg" style="border-radius: 20px;" width="377" height="348" loading="lazy" alt="Парк победы" title="После:">
                <button type="submit" class="close-btn">X</button>`;
    } else if(modalId === 'modal2') {
        modalContent.innerHTML = `<p>Музей золота в Березовском был создан в 1970 году по инициативе краеведа Сильвии Опёнкиной.
                            С того времени музей развивался, менял названия, пополнялся экспонатами. В конце 1970-х вошёл
                            он в состав Свердловского областного краеведческого музея, преемника Музея УОЛЕ. 
                            Несколько лет назад обветшавшее здание музея было закрыто на ремонт, продолжавшийся более 4 лет. 
                            В 2013 году открыта обновленная экспозиция Музея золота.</p>
                <img src="img/holl.jpg" style="border-radius: 20px;" width="377" height="348" loading="lazy" title="До:" alt="Музей золота" title="До:">
                <img src="img/cube.jpg" style="border-radius: 20px;" width="377" height="348" loading="lazy" title="После:" alt="Музей золота" title="После:">
                <button type="submit" class="close-btn">X</button>`;
    } else if(modalId === 'modal3') {
        modalContent.innerHTML = `<p>Исторический сквер в Березовском - центральное место и место образования города. 
                    В месте где находится ажурный мост, в 1754 году была сделана плотина, а затем возведен золотопромывальный завод. 
                    Вокруг него образовалось поселение в 903 двора, которое постепенно превратилось в город. 
                    Серьезная реконструкция Исторического сквера произведена в 2007 году. 
                    В результате проведенных работ была выложена тротуарной плиткой набережная канала, восстановлены стены за памятником Ерофею Маркову,
                    отреставрированы мостики. Сегодня это одно из мест отдыха березовчан.</p>
                <img src="img/most-skver.jpg" style="border-radius: 20px;" width="377" height="348" loading="lazy" alt="Исторический сквер" title="До:">
                <img src="img/erofey3.jpg" style="border-radius: 20px;" width="377" height="348" loading="lazy" alt="Исторический сквер" title="После:">
                <button type="submit" class="close-btn">X</button>`;
    } else if(modalId === 'modal4') {
        modalContent.innerHTML = `<p>Шиловский пруд – искусственный водоём на русле реки Шиловка (правый приток реки Пышма) в черте города Берёзовского Свердловской области,
                        образованный в результате преграждения устья реки двумя дамбами. 
                        По этой причине пруд неофициально подразделяют на два: южную часть пруда (выше по течению) называют «Верхний пруд», а северную 
                        (ниже по течению) − «Нижний пруд». 
                        Организован в конце 50-х и 70-х годов ХХ века в два этапа: сначала появилась южная часть пруда вследствие постройки дамбы, 
                        а через некоторое время уже северная по такому же принципу. 
                        В этой связи эти части называют иногда «Старым» и «Новым» прудами, соответственно.</p>
                <img src="img/shilPrud-vid.jpg" style="border-radius: 20px;" width="377" height="348" loading="lazy" alt="Шиловский пруд" title="До:">
                <img src="img/5.jpg" style="border-radius: 20px;" width="377" height="348" loading="lazy" alt="Шиловский пруд" title="После:">
                <button type="submit" class="close-btn">X</button>`;
    } else if(modalId === 'modal5') {
        modalContent.innerHTML = `<p>Тропа здоровья появилась в Берёзовском в конце 1970 гг. Летом 2008 года Тропа была обновлена, благоустроена. 
                    Асфальтированная полуторометровая дорожка протянулась по лесу. 
                    Бетонные скульптуры сделаны мастером из Каменск-Уральского В. Поляковым.</p>
                <img src="img/tropa1.jpg" style="border-radius: 20px;" width="377" height="348" loading="lazy" alt="Тропа здоровья" title="До:">
                <img src="img/tropa3.jpg" style="border-radius: 20px;" width="377" height="348" loading="lazy" alt="Тропа здоровья" title="После:">
                <button type="submit" class="close-btn">X</button>`;
    } else if(modalId === 'modal6') {
        modalContent.innerHTML = `<p>Скульптурная Композиция Дворик расположена в центральной части российского города Березовский, что в Свердловской области. 
                    Композиция является уникальным творением местного скульптора, выпускника 
                    Уральской художественной академии УралГАХА, Алексея Самолова.</p>
                <img src="img/2.jpg" style="border-radius: 20px;" width="377" height="348" loading="lazy" alt="Композиция "Дворик"" title="До:">
                <img src="img/3.jpg" style="border-radius: 20px;" width="377" height="348" loading="lazy" alt="Композиция "Дворик"" title="После:">
                <button type="submit" class="close-btn">X</button>`;
    } else if(modalId === 'modal7') {
        modalContent.innerHTML = `<p>В 1803 г., в конце декабря, после пожара, берёзовские жители остались без единственного  Пророко-Илиинского храма. 
                        После обращения с просьбой о построении  новой церкви к епископу Пермскому Иустину с его  благословения 14 июля в 1804г. 
                        решено было построить около кладбища деревянную церковь. Она была заложена в полуверсте от сгоревшей, к востоку. 
                        Помогали строить личным трудом, пожертвованиями.</p>
                <img src="img/church3.jpg" style="border-radius: 20px;" width="377" height="348" loading="lazy" alt="Храм Пресвятой Богородицы" title="До:">
                <img src="img/church1.jpg" style="border-radius: 20px;" width="377" height="348" loading="lazy" alt="Храм Пресвятой Богородицы" title="После:">
                <button type="submit" class="close-btn">X</button>`;
    } else if(modalId === 'modal8') {
        modalContent.innerHTML = `<p>Поблизости, на углу улиц Ленина и Революционная стоит бывший дом купца Гавриила Рожкова. 
        Каменный дом построен купцом Рожковым в 1891 году, 
        выполнен в классическом стиле. 26 января 1918 года здесь открылся первый кинотеатр Березовского. 
        В 1930-е годы здание отдали школе, а позже здесь размещалась администрация города. В наши дни в этом здании расположен военкомат.</p>
                <img src="img/dom-kupza.jpg" style="border-radius: 20px;" width="377" height="348" loading="lazy" alt="Дом купца" title="До:">
                <img src="img/dom-kupza2.jpg" style="border-radius: 20px;" width="377" height="348" loading="lazy" alt="Дом купца" title="После:">
                <button type="submit" class="close-btn">X</button>`;
    } else if(modalId === 'modal9') {
        modalContent.innerHTML = `<p>Недалеко от въезда в Березовский, почти на углу улиц Ленина и Воротникова, 
        стоит дом, как будто сошедший со страниц детских сказок. Он привлекает внимание ярким резным фасадом, с 
        которого глядят герои всем известных произведений — Волк и Заяц из «Ну, погоди!», Старик и Старуха из «Сказки о 
        рыбаке и рыбке» и другие. Всю эту красоту создал сын кузнеца Николая Вольхина Виктор.</p>
                <img src="img/dom-kuzniza1.jpg" style="border-radius: 20px;" width="377" height="348" loading="lazy" alt="Дом кузница" title="До:">
                <img src="img/dom-kuzniza2.jpg" style="border-radius: 20px;" width="377" height="348" loading="lazy" alt="Дом кузница" title="После:">
                <button type="submit" class="close-btn">X</button>`;
    } 
   
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    const buttonClose = modalContent.querySelector('.close-btn');
    buttonClose.addEventListener("click", () => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
}
const buttons = document.querySelectorAll('.modal-btn');

buttons.forEach(button => { 
  button.addEventListener("click", openModal); 
});

document.querySelector('.btn-learn').addEventListener('click', () => { document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' }); });
