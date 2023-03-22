import { ref } from "vue";

export default function handlePagination() {
  let page = ref(1);

  // const data = Array.from(Array(24).keys()).map((item) => {
  //   return { index: item, value: `this_${item}` };
  // });

  const perPage = 9;

  // const paginatedData = computed(() =>
  //   data.slice((page.value - 1) * perPage, page.value * perPage)
  // );

  const nextPage = (data) => {
    if (page.value !== Math.ceil(data.length / perPage) - 1) {
      page.value += 1;
    }
  };

  const backPage = () => {
    if (page.value !== 1) {
      page.value -= 1;
    }
  };

  const goToPage = (numPage) => {
    page.value = numPage;
  };

  return { perPage, page, nextPage, backPage, goToPage };
}
