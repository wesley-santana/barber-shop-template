<template>
    <div class="container">
      <Carousel autoplay="5000" :items-to-show="4" :wrap-around="true">
        <Slide v-for="item in items" :key="item.id">
        <div class="carousel__item">
            <img src="/assets/images/barber.png" :alt="item.title" />
            <span>{{ item.title }}</span>
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
        title: 'Corte de cabelo normal',
        image: '#',
      },
      {
        id: 2,
        title: 'Facial Masculino',
        image: '#',
      },
      {
        id: 3,
        title: 'Barbear Real',
        image: '#',
      },
    ]);

    return {
      items
    }
  },
})
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
