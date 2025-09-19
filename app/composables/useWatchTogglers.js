export default () => {
  const showMenu = useState('showMenu');
  const showFormModal = useState('showFormModal');
  const { $lenis } = useNuxtApp();

  watch([showMenu, showFormModal], () => {
    if (showMenu.value || showFormModal.value) $lenis.stop();
    else $lenis.start();
  });
};
