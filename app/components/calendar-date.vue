<template>
  <div class="date">
    <IconsCalendar class="date__icon" />
    <span>{{ Intl.DateTimeFormat($i18n.locale).format(new Date(date)) }}</span>
  </div>
</template>

<script setup>
defineProps({
  date: {
    required: true,
    type: String
  }
});
</script>

<style scoped lang="scss">
.date {
  color: $clr-grey;
  font-size: max(1.6rem, 14px);
  display: flex;
  align-items: center;
  gap: max(1rem, 10px);
  &__icon {
    fill: $clr-cyan;
    width: max(2.4rem, 20px);
  }
}
</style>
