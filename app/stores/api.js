import { defineStore } from 'pinia';

export const useApiStore = defineStore('api', () => {
  // Static data
  const filters = ref();
  const speakers = ref();

  // Dynamic query
  const partners = ref();
  const banks = ref();
  const media = ref();

  // Fetch dynamic data
  const fetchPartners = async catID => {
    try {
      let result;
      if (catID) {
        result = await $fetch(`${API_URL}/partners`, {
          query: { category_id: catID }
        });
      } else {
        const { data } = await useFetch(`${API_URL}/partners`, {
          query: { category_id: 1 }
        });
        result = data.value;
      }

      if (!result) {
        console.error(`Error fetching partners for category ${catID}`);
        return;
      }

      partners.value = result;
    } catch (error) {
      console.error('Error fetching partners:', error);
    }
  };
  const fetchMedia = async ({ take, page } = {}) => {
    const params = {
      query: {
        ...(page && { page }),
        ...(take && { take })
      }
    };
    try {
      const res = await $fetch(`${API_URL}/media-center`, params);

      if (!res) {
        console.error('Error fetching media');
        return;
      }

      media.value = res;
    } catch (error) {
      console.error('Error fetching media:', error);
    }
  };
  const fetchBanks = async ({ page, take, search } = {}) => {
    const params = {
      query: {
        ...(page && { page }),
        ...(take && { take }),
        ...(search !== undefined && { search })
      }
    };
    try {
      const res = await $fetch(`${API_URL}/banks`, params);

      if (!res) {
        console.error('Error fetching banks');
        return;
      }

      banks.value = res;
    } catch (error) {
      console.error('Error fetching banks:', error);
    }
  };

  // Fetch static data (filters, speakers)
  const fetchStaticData = async () => {
    const endpoints = [
      { key: 'filters', url: `${API_URL}/partners-categories`, ref: filters },
      { key: 'speakers', url: `${API_URL}/speakers`, ref: speakers },
      { key: 'partners', url: `${API_URL}/partners`, ref: partners }
    ];

    try {
      const results = await Promise.all(endpoints.map(endpoint => useFetch(endpoint.url)));

      results.forEach((result, index) => {
        if (result.status.value === 'success') {
          endpoints[index].ref.value = result.data.value;
        } else {
          console.error(`Failed to fetch ${endpoints[index].key}`);
        }
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return {
    // State
    partners,
    filters,
    speakers,
    banks,
    media,

    // Methods
    fetchStaticData,
    fetchPartners,
    fetchMedia,
    fetchBanks
  };
});
