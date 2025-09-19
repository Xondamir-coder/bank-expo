<template>
  <main class="policy">
    <NavBreadcrumbs :breadcrumbs />
    <LegalBase
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
    to: '/privacy-policy',
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
</script>

<style lang="scss" scoped>
.policy {
  display: flex;
  gap: max(20px, 3rem);
  flex-direction: column;
  @include section-margin-inline;
}
</style>
