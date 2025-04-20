<template>
  <main class="lights">
    <div class="main-image">
      <img src="/images/blog/lights/1.webp" alt="" />
    </div>
    <div class="text-content">
      <h5>
        Как правильно выбранное освещение способно полностью преобразить
        интерьер и создать идеальную атмосферу для каждого пространства
      </h5>
      <p>
        Освещение — это не просто способ сделать помещение светлым. Это ключевой
        элемент, который способен полностью изменить восприятие пространства. От
        правильного выбора света зависит уют, функциональность и даже настроение
        в интерьере.
      </p>
      <h4>Роль освещения в интерьере</h4>
      <p>
        Освещение помогает зонировать пространство, выделять акценты и создавать
        комфортную атмосферу. Например, тёплый свет делает комнату более уютной,
        а холодный добавляет свежести и концентрации.
      </p>
      <p class="black-p">
        <b>Общее — </b>основное освещение, которое равномерно заполняет комнату
        светом.
      </p>
      <p class="black-p">
        <b>Акцентное — </b>подчеркивает отдельные элементы: картины, мебель или
        архитектурные детали.
      </p>
      <p class="black-p">
        <b>Функциональное — </b>создаёт направленный свет для работы или чтения,
        например, настольные лампы.
      </p>
      <h4>Советы по выбору освещения</h4>
      <ul>
        <li>
          Выбирайте регулируемые светильники для создания разных настроений.
        </li>
        <li>Используйте светодиоды — они энергоэффективны и долговечны.</li>
        <li>Сочетайте источники света, чтобы добиться баланса.</li>
      </ul>
      <p class="black-p">
        Освещение — это инструмент, который делает интерьер живым и динамичным.
        Подберите свет, который подчеркнёт стиль вашего пространства и создаст
        комфортную атмосферу для жизни.
      </p>
    </div>
    <div class="images-block">
      <img src="/images/blog/lights/2.webp" alt="" />
      <img src="/images/blog/lights/3.webp" alt="" />
      <img src="/images/blog/lights/4.webp" alt="" />
    </div>
    <div class="quote">
      <div class="image-wrapper">
        <img src="/images/blog/lights/quote.svg" alt="" />
      </div>
      <h5>
        "Правильно подобранное освещение — это невидимая магия, которая
        наполняет пространство жизнью и создаёт уникальную атмосферу."
      </h5>
    </div>
  </main>
</template>

<style lang="sass" scoped>
main.lights
  margin-bottom: 10rem
  @media (max-width: 768px)
    margin-bottom: 2rem
  .main-image
    margin-bottom: 7rem
    img
      max-width: 100%
  .text-content
    padding-left: 10%
    @media (max-width: 768px)
      padding-left: 0
  h5
    font-size: 2.5rem
    color: $font-black
  p
    font-size: 1.25rem
    color: $font-grey
  h4
    font-size: 2rem
  .black-p
    color: $font-black
  ul
    list-style: decimal
    li
      color: $font-black
      font-size: 1.25rem
  .images-block
    margin-top: 5rem
    margin-bottom: 5rem
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    gap: 20px
    @media (max-width: 768px)
      grid-template-columns: 1fr
    img
      max-width: 100%
  .quote
    padding: 3rem 0 0 3rem
    position: relative
    .image-wrapper
      position: absolute
      top: 0
      left: 0
      z-index: -1
</style>
