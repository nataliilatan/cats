ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.938576, 30.323122],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Котейка',
            balloonContent: 'Котейка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'image/fox.svg',
            // Размеры метки.
            iconImageSize: [62, 108],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-32, -70]
        });
   

    myMap.geoObjects
        .add(myPlacemark)
        
});