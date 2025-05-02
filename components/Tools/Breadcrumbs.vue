<template>
  <nav class="breadcrumbs" aria-label="breadcrumbs">
    <ul>
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <NuxtLink
          v-if="crumb.to"
          :to="localePath(crumb.to)"
          :aria-current="index === breadcrumbs.length - 1 ? 'page' : null"
        >
          {{ crumb.label }}
        </NuxtLink>
        <span v-else>{{ crumb.label }}</span>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const route = useRoute();
const { t } = useI18n();
const localePath = useLocalePath();

const props = defineProps({
  reservedLastCrumb: String,
});

const breadcrumbs = computed(() => {
  const pathArray = route.path.split("/").filter((p) => p);
  let breadcrumbPath = "";
  const crumbs = [{ label: t("menu.home"), to: "/" }];

  pathArray.forEach((segment, index) => {
    if (segment !== "ru" && segment !== "en") {
      breadcrumbPath += `/${segment}`;
      const isLast = index === pathArray.length - 1;

      let translatedLabel = t(`menu.${segment}`, segment);

      crumbs.push({
        label:
          isLast && props.reservedLastCrumb
            ? props.reservedLastCrumb.length > 20
              ? `${props.reservedLastCrumb.slice(0, 20)}...`
              : props.reservedLastCrumb
            : translatedLabel,
        to: isLast ? null : breadcrumbPath,
      });
    }
  });

  return crumbs;
});
</script>

<style lang="sass" scoped>
.breadcrumbs
  ul
    display: flex
    list-style: none
    padding: 0
    margin: 0
  li
    font-size: 1.25rem
    color: $font-grey
    &:not(:last-child)::after
      content: " / "
      margin: 0 5px
    a
      text-decoration: none
      color: $font-black
      &:hover
        text-decoration: underline
</style>
