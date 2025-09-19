<template>
  <div class="info-card">
    <h3 class="info-card__title">
      {{ $rt(info.title) }}
    </h3>
    <ul v-if="info.details" class="info-card__details">
      <li v-for="(detail, i) in info.details" :key="i" class="info-card__detail">
        {{ $rt(detail) }}
      </li>
    </ul>
    <ul v-if="info.list" class="info-card__list">
      <li v-for="(item, i) in info.list" :key="i" class="info-card__item">
        <div class="info-card__item-box">
          <component :is="item.icon" class="info-card__item-icon" />
        </div>
        <p>{{ $rt(item.text) }}</p>
      </li>
    </ul>
    <p v-if="info.text">
      {{ $rt(info.text) }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  info: {
    required: true,
    type: Object
  }
});
</script>
