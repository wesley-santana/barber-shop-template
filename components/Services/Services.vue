<template>
    <div class="container">
      <Carousel :autoplay="5000" :items-to-show="itemsToShow" :wrap-around="true">
        <Slide v-for="item in items" :key="item.id">
        <div class="carousel__item">
            <img :src="item.image" :alt="item.title" />
            <span>
                <h3>{{ item.title }}</h3>   
            </span>
            <button>Saiba Mais</button>
        </div>
        </Slide>
        <template #addons>
        <Navigation />
        </template>
      </Carousel>
    </div>
</template>

<script>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineNuxtComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    
    const items = ref([
      {
        id: 1,
        title: 'Barboterapia',
        image: './images/oleo-de-barba.png',
      },
      {
        id: 2,
        title: 'Botox ou Progressiva',
        image: './images/cadeira.png',
      },
      {
        id: 3,
        title: 'Coloração',
        image: './images/escova-de-barbear.png',
      },
      {
        id: 4,
        title: 'Corte',
        image: './images/barbearia.png',
      },
      {
        id: 5,
        title: 'Corte e Barba',
        image: './images/lamina-de-barbear.png',
      },
       {
        id: 6,
        title: 'Corte Barba e Limpeza de Pele',
        image: './images/bigode.png',
      }
    ]);
    
    const itemsToShow = ref(3);

    const updateItemsToShow = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        itemsToShow.value = 1;
      } else if (screenWidth < 1024) {
        itemsToShow.value = 2;
      } else {
        itemsToShow.value = 3;
      }
    };

    onMounted(() => {
      updateItemsToShow();
      window.addEventListener('resize', updateItemsToShow);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateItemsToShow);
    });
    return {
      items,
      itemsToShow
    }
  },
})
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
