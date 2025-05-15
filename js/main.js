// Создаем приложение PixiJS
const app = new PIXI.Application({
    width: 512,         // Ширина холста
    height: 512,        // Высота холста
    backgroundColor: 0x1099bb, // Цвет фона
    antialias: true       // Включаем сглаживание
});

// Добавляем холст в DOM
document.body.appendChild(app.view);

// Загружаем текстуру спрайта
PIXI.Assets.load('assets/images/sprite.png').then((texture) => {
    // Создаем спрайт из загруженной текстуры
    const sprite = new PIXI.Sprite(texture);

    // Устанавливаем якорь спрайта по центру
    sprite.anchor.set(0.5);

    // Позиционируем спрайт по центру экрана
    sprite.x = app.screen.width / 2;
    sprite.y = app.screen.height / 2;

    // Добавляем спрайт на сцену
    app.stage.addChild(sprite);

    // Запускаем цикл анимации
    app.ticker.add(() => {
        // Вращаем спрайт
        sprite.rotation += 0.01;
    });
});
