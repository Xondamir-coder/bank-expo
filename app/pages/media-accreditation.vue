<template>
  <BreadcrumbsLayout :breadcrumbs>
    <div class="media-accreditation">
      <h1 class="heading">{{ $t('media-accreditation.name') }}</h1>
      <ul class="info-card">
        <li
          v-for="(item, index) in $tm('media-accreditation.items')"
          :key="index"
          class="media-accreditation__item"
        >
          <h3 class="info-card__title">
            {{ $rt(item.title) }}
          </h3>
          <p>
            {{ $rt(item.text) }}
          </p>
        </li>
      </ul>
      <div class="info-card">
        <p>
          <span>
            {{ $t('media-accreditation.available') }}
          </span>
          <a
            href="https://gov.uz/en/mfa/sections/xorijiy-jurnalistlarni-akkreditasiyadan-o-tkazish-tartibi"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://gov.uz/en/mfa/sections/xorijiy-jurnalistlarni-akkreditasiyadan-o-tkazish-tartibi
          </a>
        </p>
      </div>
      <div class="info-card">
        <h3 class="info-card__title">
          {{ $t('media-accreditation.contacts') }}
        </h3>
        <div class="info-card__item">
          <div class="info-card__item-box">
            <IconsMail class="info-card__item-icon" />
          </div>
          <a href="mailto:media@tiif.online" class="info-card__item-text">media@tiif.online</a>
        </div>
      </div>
    </div>
  </BreadcrumbsLayout>
</template>

<script setup>
const { t } = useI18n();
const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/media',
    label: t('nav.media-library')
  },
  {
    to: '/media-accreditation',
    label: t('nav.media-accreditation')
  }
]);
useAnimation({ selector: '.media-accreditation>*', base: { x: -50 } });
</script>

<style lang="scss" scoped>
.media-accreditation {
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: max(2rem, 16px);
  max-width: max(61.25%, 700px);
  &__item {
    display: flex;
    flex-direction: column;
    gap: max(1.2rem, 12px);
    &:last-child {
      padding-top: max(1.2rem, 12px);
      border-top: 1px solid #d9d9d9;
    }
  }
  a[href^="https://"]
  {
    color: #3399cc;
    text-decoration: underline;
  }
}
</style>
