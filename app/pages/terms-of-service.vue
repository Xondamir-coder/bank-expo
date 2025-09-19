<template>
  <main class="terms">
    <NavBreadcrumbs :breadcrumbs />
    <LegalBase
      title="Terms & Conditions"
      subtitle="Welcome to Bank Expo! By accessing or using this website, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please refrain from using our site."
      :content="content"
    />
  </main>
</template>

<script setup>
const breadcrumbs = [
  {
    to: '/',
    label: 'Home'
  },
  {
    to: '/terms-of-service',
    label: 'Terms and Conditions'
  }
];
const content = [
  {
    title: 'Use of the Website',
    subtitle:
      'The Bank Expo Exhibition is a premier international event uniting banking institutions from Uzbekistan and around the globe under one roof. As a dynamic platform for collaboration, innovation, and growth, the exhibition serves as a gateway to the future of banking and financial services.',
    texts: [
      'You must be at least [Insert Age, e.g., 18 years] to use this website.',
      'You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit the use of this website by any third party.',
      'Unauthorized use of this website may give rise to a claim for damages or be a criminal offense.'
    ]
  },
  {
    title: 'Intellectual Property Rights',
    subtitle: null,
    texts: [
      'All content on this website, including but not limited to text, images, logos, and code, is owned by or licensed to Bank Expo.',
      'You may not reproduce, distribute, or otherwise exploit any content on this website without prior written consent from us.'
    ]
  },
  {
    title: 'User Account',
    subtitle: null,
    texts: [
      'If you create an account on our website, you are responsible for maintaining the confidentiality of your account credentials.',
      'You agree to notify us immediately of any unauthorized use of your account.',
      'We reserve the right to terminate accounts that violate these terms.'
    ]
  },
  {
    title: 'User Account',
    subtitle: null,
    texts: [
      'If you create an account on our website, you are responsible for maintaining the confidentiality of your account credentials.',
      'You agree to notify us immediately of any unauthorized use of your account.',
      'We reserve the right to terminate accounts that violate these terms.'
    ]
  },
  {
    title: 'User Account',
    subtitle: null,
    texts: [
      'If you create an account on our website, you are responsible for maintaining the confidentiality of your account credentials.',
      'You agree to notify us immediately of any unauthorized use of your account.',
      'We reserve the right to terminate accounts that violate these terms.'
    ]
  },
  {
    title: 'User Account',
    subtitle: null,
    texts: [
      'If you create an account on our website, you are responsible for maintaining the confidentiality of your account credentials.',
      'You agree to notify us immediately of any unauthorized use of your account.',
      'We reserve the right to terminate accounts that violate these terms.'
    ]
  }
];
</script>

<style lang="scss" scoped>
.terms {
  display: flex;
  gap: max(20px, 3rem);
  flex-direction: column;
  @include section-margin-inline;
}
</style>
