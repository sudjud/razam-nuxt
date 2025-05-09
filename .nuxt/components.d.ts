
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'BlocksContactShield': typeof import("../components/Blocks/ContactShield.vue")['default']
    'BlocksContactShield2': typeof import("../components/Blocks/ContactShield2.vue")['default']
    'BlocksContactShield3': typeof import("../components/Blocks/ContactShield3.vue")['default']
    'BlocksHomeStatsComponent': typeof import("../components/Blocks/HomeStatsComponent.vue")['default']
    'BlocksOfferComponent': typeof import("../components/Blocks/OfferComponent.vue")['default']
    'BlocksTabsPortfolioComponent': typeof import("../components/Blocks/TabsPortfolioComponent.vue")['default']
    'BlogCardComponent': typeof import("../components/Blog/BlogCardComponent.vue")['default']
    'BlogLightsArticleComponent': typeof import("../components/Blog/LightsArticleComponent.vue")['default']
    'FooterComponent': typeof import("../components/Footer/FooterComponent.vue")['default']
    'HeaderComponent': typeof import("../components/Header/HeaderComponent.vue")['default']
    'HeaderSmComponent': typeof import("../components/Header/HeaderSmComponent.vue")['default']
    'LoaderComponent': typeof import("../components/Loader/LoaderComponent.vue")['default']
    'ProjectsProjectCardComponent': typeof import("../components/Projects/ProjectCardComponent.vue")['default']
    'ProjectsSingleComponent': typeof import("../components/Projects/SingleComponent.vue")['default']
    'SwipersFullWidthImage': typeof import("../components/Swipers/FullWidthImage.vue")['default']
    'SwipersHomeGallery': typeof import("../components/Swipers/HomeGallery.vue")['default']
    'SwipersNewsSwiperComponent': typeof import("../components/Swipers/NewsSwiperComponent.vue")['default']
    'SwipersProjectsSwiperComponent': typeof import("../components/Swipers/ProjectsSwiperComponent.vue")['default']
    'SwipersReviewsSliderComponent': typeof import("../components/Swipers/ReviewsSliderComponent.vue")['default']
    'ToolsBreadcrumbs': typeof import("../components/Tools/Breadcrumbs.vue")['default']
    'ToolsCostCalcModal': typeof import("../components/Tools/CostCalcModal.vue")['default']
    'ToolsCostCalculator': typeof import("../components/Tools/CostCalculator.vue")['default']
    'ToolsFaqComponent': typeof import("../components/Tools/FaqComponent.vue")['default']
    'ToolsGoogleReviewsComponent': typeof import("../components/Tools/GoogleReviewsComponent.vue")['default']
    'ToolsLangSwitchComponent': typeof import("../components/Tools/LangSwitchComponent.vue")['default']
    'ToolsPhoneInputComponent': typeof import("../components/Tools/PhoneInputComponent.vue")['default']
    'ToolsSearchComponent': typeof import("../components/Tools/SearchComponent.vue")['default']
    'ToolsSliderArrowsComponent': typeof import("../components/Tools/SliderArrowsComponent.vue")['default']
    'ToolsSocialMedias': typeof import("../components/Tools/SocialMedias.vue")['default']
    'ToolsTetsComp': typeof import("../components/Tools/TetsComp.vue")['default']
    'ToolsValuesArrowsComponent': typeof import("../components/Tools/ValuesArrowsComponent.vue")['default']
    'ToolsWhyWeComponent': typeof import("../components/Tools/WhyWeComponent.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'NuxtLinkLocale': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
    'SwitchLocalePathLink': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyBlocksContactShield': LazyComponent<typeof import("../components/Blocks/ContactShield.vue")['default']>
    'LazyBlocksContactShield2': LazyComponent<typeof import("../components/Blocks/ContactShield2.vue")['default']>
    'LazyBlocksContactShield3': LazyComponent<typeof import("../components/Blocks/ContactShield3.vue")['default']>
    'LazyBlocksHomeStatsComponent': LazyComponent<typeof import("../components/Blocks/HomeStatsComponent.vue")['default']>
    'LazyBlocksOfferComponent': LazyComponent<typeof import("../components/Blocks/OfferComponent.vue")['default']>
    'LazyBlocksTabsPortfolioComponent': LazyComponent<typeof import("../components/Blocks/TabsPortfolioComponent.vue")['default']>
    'LazyBlogCardComponent': LazyComponent<typeof import("../components/Blog/BlogCardComponent.vue")['default']>
    'LazyBlogLightsArticleComponent': LazyComponent<typeof import("../components/Blog/LightsArticleComponent.vue")['default']>
    'LazyFooterComponent': LazyComponent<typeof import("../components/Footer/FooterComponent.vue")['default']>
    'LazyHeaderComponent': LazyComponent<typeof import("../components/Header/HeaderComponent.vue")['default']>
    'LazyHeaderSmComponent': LazyComponent<typeof import("../components/Header/HeaderSmComponent.vue")['default']>
    'LazyLoaderComponent': LazyComponent<typeof import("../components/Loader/LoaderComponent.vue")['default']>
    'LazyProjectsProjectCardComponent': LazyComponent<typeof import("../components/Projects/ProjectCardComponent.vue")['default']>
    'LazyProjectsSingleComponent': LazyComponent<typeof import("../components/Projects/SingleComponent.vue")['default']>
    'LazySwipersFullWidthImage': LazyComponent<typeof import("../components/Swipers/FullWidthImage.vue")['default']>
    'LazySwipersHomeGallery': LazyComponent<typeof import("../components/Swipers/HomeGallery.vue")['default']>
    'LazySwipersNewsSwiperComponent': LazyComponent<typeof import("../components/Swipers/NewsSwiperComponent.vue")['default']>
    'LazySwipersProjectsSwiperComponent': LazyComponent<typeof import("../components/Swipers/ProjectsSwiperComponent.vue")['default']>
    'LazySwipersReviewsSliderComponent': LazyComponent<typeof import("../components/Swipers/ReviewsSliderComponent.vue")['default']>
    'LazyToolsBreadcrumbs': LazyComponent<typeof import("../components/Tools/Breadcrumbs.vue")['default']>
    'LazyToolsCostCalcModal': LazyComponent<typeof import("../components/Tools/CostCalcModal.vue")['default']>
    'LazyToolsCostCalculator': LazyComponent<typeof import("../components/Tools/CostCalculator.vue")['default']>
    'LazyToolsFaqComponent': LazyComponent<typeof import("../components/Tools/FaqComponent.vue")['default']>
    'LazyToolsGoogleReviewsComponent': LazyComponent<typeof import("../components/Tools/GoogleReviewsComponent.vue")['default']>
    'LazyToolsLangSwitchComponent': LazyComponent<typeof import("../components/Tools/LangSwitchComponent.vue")['default']>
    'LazyToolsPhoneInputComponent': LazyComponent<typeof import("../components/Tools/PhoneInputComponent.vue")['default']>
    'LazyToolsSearchComponent': LazyComponent<typeof import("../components/Tools/SearchComponent.vue")['default']>
    'LazyToolsSliderArrowsComponent': LazyComponent<typeof import("../components/Tools/SliderArrowsComponent.vue")['default']>
    'LazyToolsSocialMedias': LazyComponent<typeof import("../components/Tools/SocialMedias.vue")['default']>
    'LazyToolsTetsComp': LazyComponent<typeof import("../components/Tools/TetsComp.vue")['default']>
    'LazyToolsValuesArrowsComponent': LazyComponent<typeof import("../components/Tools/ValuesArrowsComponent.vue")['default']>
    'LazyToolsWhyWeComponent': LazyComponent<typeof import("../components/Tools/WhyWeComponent.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
    'LazyNuxtLinkLocale': LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
    'LazySwitchLocalePathLink': LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const BlocksContactShield: typeof import("../components/Blocks/ContactShield.vue")['default']
export const BlocksContactShield2: typeof import("../components/Blocks/ContactShield2.vue")['default']
export const BlocksContactShield3: typeof import("../components/Blocks/ContactShield3.vue")['default']
export const BlocksHomeStatsComponent: typeof import("../components/Blocks/HomeStatsComponent.vue")['default']
export const BlocksOfferComponent: typeof import("../components/Blocks/OfferComponent.vue")['default']
export const BlocksTabsPortfolioComponent: typeof import("../components/Blocks/TabsPortfolioComponent.vue")['default']
export const BlogCardComponent: typeof import("../components/Blog/BlogCardComponent.vue")['default']
export const BlogLightsArticleComponent: typeof import("../components/Blog/LightsArticleComponent.vue")['default']
export const FooterComponent: typeof import("../components/Footer/FooterComponent.vue")['default']
export const HeaderComponent: typeof import("../components/Header/HeaderComponent.vue")['default']
export const HeaderSmComponent: typeof import("../components/Header/HeaderSmComponent.vue")['default']
export const LoaderComponent: typeof import("../components/Loader/LoaderComponent.vue")['default']
export const ProjectsProjectCardComponent: typeof import("../components/Projects/ProjectCardComponent.vue")['default']
export const ProjectsSingleComponent: typeof import("../components/Projects/SingleComponent.vue")['default']
export const SwipersFullWidthImage: typeof import("../components/Swipers/FullWidthImage.vue")['default']
export const SwipersHomeGallery: typeof import("../components/Swipers/HomeGallery.vue")['default']
export const SwipersNewsSwiperComponent: typeof import("../components/Swipers/NewsSwiperComponent.vue")['default']
export const SwipersProjectsSwiperComponent: typeof import("../components/Swipers/ProjectsSwiperComponent.vue")['default']
export const SwipersReviewsSliderComponent: typeof import("../components/Swipers/ReviewsSliderComponent.vue")['default']
export const ToolsBreadcrumbs: typeof import("../components/Tools/Breadcrumbs.vue")['default']
export const ToolsCostCalcModal: typeof import("../components/Tools/CostCalcModal.vue")['default']
export const ToolsCostCalculator: typeof import("../components/Tools/CostCalculator.vue")['default']
export const ToolsFaqComponent: typeof import("../components/Tools/FaqComponent.vue")['default']
export const ToolsGoogleReviewsComponent: typeof import("../components/Tools/GoogleReviewsComponent.vue")['default']
export const ToolsLangSwitchComponent: typeof import("../components/Tools/LangSwitchComponent.vue")['default']
export const ToolsPhoneInputComponent: typeof import("../components/Tools/PhoneInputComponent.vue")['default']
export const ToolsSearchComponent: typeof import("../components/Tools/SearchComponent.vue")['default']
export const ToolsSliderArrowsComponent: typeof import("../components/Tools/SliderArrowsComponent.vue")['default']
export const ToolsSocialMedias: typeof import("../components/Tools/SocialMedias.vue")['default']
export const ToolsTetsComp: typeof import("../components/Tools/TetsComp.vue")['default']
export const ToolsValuesArrowsComponent: typeof import("../components/Tools/ValuesArrowsComponent.vue")['default']
export const ToolsWhyWeComponent: typeof import("../components/Tools/WhyWeComponent.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const NuxtLinkLocale: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
export const SwitchLocalePathLink: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyBlocksContactShield: LazyComponent<typeof import("../components/Blocks/ContactShield.vue")['default']>
export const LazyBlocksContactShield2: LazyComponent<typeof import("../components/Blocks/ContactShield2.vue")['default']>
export const LazyBlocksContactShield3: LazyComponent<typeof import("../components/Blocks/ContactShield3.vue")['default']>
export const LazyBlocksHomeStatsComponent: LazyComponent<typeof import("../components/Blocks/HomeStatsComponent.vue")['default']>
export const LazyBlocksOfferComponent: LazyComponent<typeof import("../components/Blocks/OfferComponent.vue")['default']>
export const LazyBlocksTabsPortfolioComponent: LazyComponent<typeof import("../components/Blocks/TabsPortfolioComponent.vue")['default']>
export const LazyBlogCardComponent: LazyComponent<typeof import("../components/Blog/BlogCardComponent.vue")['default']>
export const LazyBlogLightsArticleComponent: LazyComponent<typeof import("../components/Blog/LightsArticleComponent.vue")['default']>
export const LazyFooterComponent: LazyComponent<typeof import("../components/Footer/FooterComponent.vue")['default']>
export const LazyHeaderComponent: LazyComponent<typeof import("../components/Header/HeaderComponent.vue")['default']>
export const LazyHeaderSmComponent: LazyComponent<typeof import("../components/Header/HeaderSmComponent.vue")['default']>
export const LazyLoaderComponent: LazyComponent<typeof import("../components/Loader/LoaderComponent.vue")['default']>
export const LazyProjectsProjectCardComponent: LazyComponent<typeof import("../components/Projects/ProjectCardComponent.vue")['default']>
export const LazyProjectsSingleComponent: LazyComponent<typeof import("../components/Projects/SingleComponent.vue")['default']>
export const LazySwipersFullWidthImage: LazyComponent<typeof import("../components/Swipers/FullWidthImage.vue")['default']>
export const LazySwipersHomeGallery: LazyComponent<typeof import("../components/Swipers/HomeGallery.vue")['default']>
export const LazySwipersNewsSwiperComponent: LazyComponent<typeof import("../components/Swipers/NewsSwiperComponent.vue")['default']>
export const LazySwipersProjectsSwiperComponent: LazyComponent<typeof import("../components/Swipers/ProjectsSwiperComponent.vue")['default']>
export const LazySwipersReviewsSliderComponent: LazyComponent<typeof import("../components/Swipers/ReviewsSliderComponent.vue")['default']>
export const LazyToolsBreadcrumbs: LazyComponent<typeof import("../components/Tools/Breadcrumbs.vue")['default']>
export const LazyToolsCostCalcModal: LazyComponent<typeof import("../components/Tools/CostCalcModal.vue")['default']>
export const LazyToolsCostCalculator: LazyComponent<typeof import("../components/Tools/CostCalculator.vue")['default']>
export const LazyToolsFaqComponent: LazyComponent<typeof import("../components/Tools/FaqComponent.vue")['default']>
export const LazyToolsGoogleReviewsComponent: LazyComponent<typeof import("../components/Tools/GoogleReviewsComponent.vue")['default']>
export const LazyToolsLangSwitchComponent: LazyComponent<typeof import("../components/Tools/LangSwitchComponent.vue")['default']>
export const LazyToolsPhoneInputComponent: LazyComponent<typeof import("../components/Tools/PhoneInputComponent.vue")['default']>
export const LazyToolsSearchComponent: LazyComponent<typeof import("../components/Tools/SearchComponent.vue")['default']>
export const LazyToolsSliderArrowsComponent: LazyComponent<typeof import("../components/Tools/SliderArrowsComponent.vue")['default']>
export const LazyToolsSocialMedias: LazyComponent<typeof import("../components/Tools/SocialMedias.vue")['default']>
export const LazyToolsTetsComp: LazyComponent<typeof import("../components/Tools/TetsComp.vue")['default']>
export const LazyToolsValuesArrowsComponent: LazyComponent<typeof import("../components/Tools/ValuesArrowsComponent.vue")['default']>
export const LazyToolsWhyWeComponent: LazyComponent<typeof import("../components/Tools/WhyWeComponent.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyNuxtLinkLocale: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
export const LazySwitchLocalePathLink: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
