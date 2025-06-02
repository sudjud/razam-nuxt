import { resolveDirective, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrGetDirectiveProps } from "vue/server-renderer";
import _imports_0 from "../../_virtual/virtual_public56.mjs";
import _imports_1 from "../../_virtual/virtual_public43.mjs";
import _imports_2 from "../../_virtual/virtual_public44.mjs";
import _imports_3 from "../../_virtual/virtual_public45.mjs";
import _imports_4 from "../../_virtual/virtual_public33.mjs";
/* empty css                             */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _directive_lazy_load = resolveDirective("lazy-load");
  let _temp0, _temp1, _temp2, _temp3, _temp4;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "lights" }, _attrs))} data-v-c21fadec><div class="main-image" data-v-c21fadec><img${ssrRenderAttrs(_temp0 = mergeProps({
    "data-src": _imports_0,
    alt: ""
  }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-c21fadec>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</div><div class="text-content" data-v-c21fadec><h5 data-v-c21fadec> Как правильно выбранное освещение способно полностью преобразить интерьер и создать идеальную атмосферу для каждого пространства </h5><p data-v-c21fadec> Освещение — это не просто способ сделать помещение светлым. Это ключевой элемент, который способен полностью изменить восприятие пространства. От правильного выбора света зависит уют, функциональность и даже настроение в интерьере. </p><h4 data-v-c21fadec>Роль освещения в интерьере</h4><p data-v-c21fadec> Освещение помогает зонировать пространство, выделять акценты и создавать комфортную атмосферу. Например, тёплый свет делает комнату более уютной, а холодный добавляет свежести и концентрации. </p><p class="black-p" data-v-c21fadec><b data-v-c21fadec>Общее — </b>основное освещение, которое равномерно заполняет комнату светом. </p><p class="black-p" data-v-c21fadec><b data-v-c21fadec>Акцентное — </b>подчеркивает отдельные элементы: картины, мебель или архитектурные детали. </p><p class="black-p" data-v-c21fadec><b data-v-c21fadec>Функциональное — </b>создаёт направленный свет для работы или чтения, например, настольные лампы. </p><h4 data-v-c21fadec>Советы по выбору освещения</h4><ul data-v-c21fadec><li data-v-c21fadec> Выбирайте регулируемые светильники для создания разных настроений. </li><li data-v-c21fadec>Используйте светодиоды — они энергоэффективны и долговечны.</li><li data-v-c21fadec>Сочетайте источники света, чтобы добиться баланса.</li></ul><p class="black-p" data-v-c21fadec> Освещение — это инструмент, который делает интерьер живым и динамичным. Подберите свет, который подчеркнёт стиль вашего пространства и создаст комфортную атмосферу для жизни. </p></div><div class="images-block" data-v-c21fadec><img${ssrRenderAttrs(_temp1 = mergeProps({
    "data-src": _imports_1,
    alt: ""
  }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-c21fadec>${"textContent" in _temp1 ? ssrInterpolate(_temp1.textContent) : _temp1.innerHTML ?? ""}<img${ssrRenderAttrs(_temp2 = mergeProps({
    "data-src": _imports_2,
    alt: ""
  }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-c21fadec>${"textContent" in _temp2 ? ssrInterpolate(_temp2.textContent) : _temp2.innerHTML ?? ""}<img${ssrRenderAttrs(_temp3 = mergeProps({
    "data-src": _imports_3,
    alt: ""
  }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-c21fadec>${"textContent" in _temp3 ? ssrInterpolate(_temp3.textContent) : _temp3.innerHTML ?? ""}</div><div class="quote" data-v-c21fadec><div class="image-wrapper" data-v-c21fadec><img${ssrRenderAttrs(_temp4 = mergeProps({
    "data-src": _imports_4,
    alt: ""
  }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-c21fadec>${"textContent" in _temp4 ? ssrInterpolate(_temp4.textContent) : _temp4.innerHTML ?? ""}</div><h5 data-v-c21fadec> &quot;Правильно подобранное освещение — это невидимая магия, которая наполняет пространство жизнью и создаёт уникальную атмосферу.&quot; </h5></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/LightsArticleComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LightsArticleComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c21fadec"]]);
export {
  LightsArticleComponent as default
};
//# sourceMappingURL=LightsArticleComponent.vue.mjs.map
