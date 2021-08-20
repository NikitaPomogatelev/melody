$(function () {
    let currentFloor = 2; // переменная текущего этажа
    const floorPath = $('.home-image path') // каждый отдельный этаж в svg
    const counterUp = $('.counter-arrow-up');
    const counterDown = $('.counter-arrow-down');

    // функция при наведении машью на этаж
    floorPath.on('mouseover', function ()  {
        floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
        currentFloor = $(this).attr('data-floor'); // получаем и записываем класс текущего этажа
        $('.counter').text(currentFloor) // записываем занечение этажа в счетчик справа
    });

    counterUp.on('click', function () {
        if(currentFloor < 18) {
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
});