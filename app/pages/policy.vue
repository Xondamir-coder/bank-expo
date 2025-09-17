<template>
  <main class="policy">
    <NavBreadcrumbs :breadcrumbs="breadcrumbs" />
    <Legal
      title="Privacy Policy"
      subtitle="The Bank Expo Exhibition is a premier international event uniting banking institutions from Uzbekistan and around the globe under one roof. As a dynamic platform for collaboration, innovation, and growth, the exhibition serves as a gateway to the future of banking and financial services."
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
    to: '/policy',
    label: 'Privacy Policy'
  }
];
const content = [
  {
    title: 'About the Bank ExpoExhibition',
    subtitle:
      'The Bank ExpoExhibition is a premier international event uniting banking institutions from Uzbekistan and around the globe under one roof. As a dynamic platform for collaboration, innovation, and growth, the exhibition serves as a gateway to the future of banking and financial services.',
    texts: null
  },
  {
    title: 'About the Bank ExpoExhibition',
    subtitle:
      'The Bank ExpoExhibition is designed to bring together banks, financial institutions, fintech companies, and industry experts to foster collaboration and exchange ideas. This event provides a unique opportunity for participants to:',
    texts: [
      'Showcase their latest financial products and services.',
      'Explore cutting-edge banking technologies and solutions.',
      'Build connections with global and regional industry leaders.',
      'Expand their customer base through direct engagement.'
    ]
  },
  {
    title: 'Who Should Attend?',
    subtitle: 'The Bank ExpoExhibition is open to a diverse audience, including:',
    texts: [
      'General Public: Individuals interested in learning about modern banking solutions and financial literacy.',
      'Fintech Innovators: Startups and tech companies revolutionizing the financial sector..',
      'Government and Regulators: Policy-makers and authorities shaping the banking landscape.'
    ]
  },
  {
    title: 'Who Should Attend?',
    subtitle: 'The Bank ExpoExhibition is open to a diverse audience, including:',
    texts: [
      'General Public: Individuals interested in learning about modern banking solutions and financial literacy.',
      'Fintech Innovators: Startups and tech companies revolutionizing the financial sector..',
      'Government and Regulators: Policy-makers and authorities shaping the banking landscape.'
    ]
  },
  {
    title: 'Who Should Attend?',
    subtitle: 'The Bank ExpoExhibition is open to a diverse audience, including:',
    texts: [
      'General Public: Individuals interested in learning about modern banking solutions and financial literacy.',
      'Fintech Innovators: Startups and tech companies revolutionizing the financial sector..',
      'Government and Regulators: Policy-makers and authorities shaping the banking landscape.'
    ]
  },
  {
    title: 'Who Should Attend?',
    subtitle: 'The Bank ExpoExhibition is open to a diverse audience, including:',
    texts: [
      'General Public: Individuals interested in learning about modern banking solutions and financial literacy.',
      'Fintech Innovators: Startups and tech companies revolutionizing the financial sector..',
      'Government and Regulators: Policy-makers and authorities shaping the banking landscape.'
    ]
  }
];
useHead({
  title: 'Privacy Policy | Bank Expo',
  meta: [
    {
      name: 'description',
      content:
        'Read the Privacy Policy of Bank Expo to understand how we collect, use, and protect your personal information while browsing our site.'
    },
    {
      property: 'og:title',
      content: 'Privacy Policy | Bank Expo'
    },
    {
      property: 'og:description',
      content:
        'Learn about our privacy practices at Bank Expo, including how we handle data collection and ensure your information is secure.'
    },
    {
      property: 'og:url',
      content: 'https://bankexpo.uz/policy'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    // {
    // 	property: 'og:image',
    // 	content: 'https://bankexpo.uz/images/privacy-banner.jpg'
    // },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Privacy Policy | Bank Expo'
    },
    {
      name: 'twitter:description',
      content:
        'Understand how Bank Expo respects your privacy and protects your personal information while using our services.'
    }
    // {
    // 	name: 'twitter:image',
    // 	content: 'https://bankexpo.uz/images/privacy-banner.jpg'
    // }
  ]
});
</script>

<style lang="scss" scoped>
.policy {
  display: flex;
  gap: clamp(20px, 3vw, 30px);
  flex-direction: column;
  @include section-margin-inline;
}
</style>
