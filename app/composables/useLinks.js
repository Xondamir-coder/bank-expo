export default () => {
  const { t } = useI18n();

  const links = computed(() => [
    {
      to: '/',
      label: t('nav.home')
    },
    {
      to: '/participants',
      label: t('nav.participants')
    },
    {
      to: '/speakers',
      label: t('nav.speakers')
    },
    {
      to: '/partners',
      label: t('nav.partners')
    },
    {
      to: '/sponsors',
      label: t('nav.sponsors')
    },
    {
      to: '/visitors',
      label: t('nav.for-visitors')
    }
  ]);
  const aboutLinks = computed(() => [
    {
      to: '/mission',
      label: t('nav.mission')
    },
    {
      to: '/venue',
      label: t('nav.venue')
    },
    {
      to: '/organizer',
      label: t('nav.organizer')
    }
  ]);
  const mediaLinks = computed(() => [
    {
      to: '/media',
      label: t('nav.media-library')
    },
    {
      to: '/media-accreditation',
      label: t('nav.media-accreditation')
    }
  ]);
  const headerLinks = computed(() => [
    {
      label: t('nav.about'),
      sublinks: aboutLinks.value
    },
    {
      to: '/participants',
      label: t('nav.participants')
    },
    {
      to: '/speakers',
      label: t('nav.speakers')
    },
    {
      to: '/partners',
      label: t('nav.partners')
    },
    {
      to: '/sponsors',
      label: t('nav.sponsors')
    },
    {
      label: t('nav.media'),
      sublinks: mediaLinks.value
    },
    {
      to: '/visitors',
      label: t('nav.for-visitors')
    }
  ]);
  const footerLinks = computed(() => [
    {
      label: t('links'),
      links: links.value
    },
    {
      label: t('nav.about'),
      links: aboutLinks.value
    }
    // {
    //   label: t('nav.media'),
    //   links: mediaLinks.value
    // }
  ]);
  const allLinks = computed(() => [...links.value, ...aboutLinks.value, ...mediaLinks.value]);

  return {
    links,
    aboutLinks,
    mediaLinks,
    headerLinks,
    footerLinks,
    allLinks
  };
};
