document.addEventListener('DOMContentLoaded', () => {

    // 1. Находим все кнопки-вкладки и все блоки с контентом
    const navButtons = document.querySelectorAll('.nav-btn');
    const contents = document.querySelectorAll('.tab-content');

    // 2. Навешиваем обработчик на каждую кнопку
    navButtons.forEach(button => {
        button.addEventListener('click', () => {

            // Убираем активность у всех кнопок и скрываем весь контент
            navButtons.forEach(btn => btn.classList.remove('active'));
            contents.forEach(section => section.classList.remove('active'));

            // Делаем нажатую кнопку активной
            button.classList.add('active');

            // Показываем нужную секцию
            const tabId = button.getAttribute('data-tab');
            const activeSection = document.getElementById(tabId);
            if (activeSection) {
                activeSection.classList.add('active');
            }

            // Прокрутка наверх
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});