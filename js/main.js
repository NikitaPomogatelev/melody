$(function () {
    let currentFloor = 7; // переменная текущего этажа
    const floorPath = $('.home-image path') // каждый отдельный этаж в svg
    const counterUp = $('.counter-arrow-up');
    const counterDown = $('.counter-arrow-down');
    const modal = $('.modal');
    const viewFlatsBtn = $('.view-flats');
    let currentFlat = 1; // текущая квартира
    const flatsPath = $('.flats path'); // квартиры в svg
    const flatsPathItem = $(".flat-item .flat-link")

    // функция при наведении машью на этаж
    floorPath.on('mouseover', function ()  {
        floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
        currentFloor = $(this).attr('data-floor'); // получаем и записываем класс текущего этажа
        $('.counter').text(currentFloor) // записываем занечение этажа в счетчик справа
    });

    flatsPathItem.on('mouseover', function () {
        currentFlat = $(this).attr("data-item"); // записываем текущее значение в переменную с квартирами
        console.log(currentFlat);
        flatsPath.removeClass("current-flats"); // удаляем класс квартир
        flatsPathItem.removeClass("current-flats-item"); // удаляем класс характеристик квартиры
        $(`[data-flats=${currentFlat}]`).toggleClass("current-flats"); // добавляем класс квартиры
        $(`[data-item=${currentFlat}]`).toggleClass("current-flats-item"); // добавляем класс характеристик квартиры
    })
    flatsPath.on('mouseover', function () {
        currentFlats = $(this).attr("data-flats"); // записываем текущее значение в переменную с квартирами
        flatsPath.removeClass("current-flats"); // удаляем класс квартир
        flatsPathItem.removeClass("current-flats-item"); // удаляем класс характеристик квартиры
        $(`[data-flats=${currentFlats}]`).toggleClass("current-flats"); // добавляем класс квартиры
        $(`[data-item=${currentFlats}]`).toggleClass("current-flats-item"); // добавляем класс характеристик квартиры
    })

    viewFlatsBtn.on('click', toggleModal);

    counterUp.on('click', function () {
        if(currentFloor < floorPath.length + 1) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, useGrouping: false}); // форматирование 2 -> 02
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor')
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсвечиваем этаж
        }
    });
    counterDown.on('click', function () {
        if(currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor')
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });
    
    function toggleModal() {
        modal.toggleClass('is-open');
    }

    floorPath.on('click', toggleModal);
    modal.on('click', function ({target}) {
        console.log(target)
        if (target.classList.contains('modal-close') || target.closest('.modal-close')) {
            toggleModal();
        }
    });

    
});
