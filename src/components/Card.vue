<template>
  <div class="card">
    <div class="media" v-bind:style="mediaBg" v-if="mediaHref"></div>
    <h3 class="title">{{ title }}</h3>
    <p class="subtitle">{{ subTitle }}</p>
    <p class="text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    subTitle: String,
    text: String,
    mediaHref: String,
  },
  computed: {
    mediaBg() {
      return {
        backgroundImage: `url(${this.mediaHref})`,
      };
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");

.card {
  background-color: #fff;
  border-radius: 0.2rem;
  box-shadow: rgb(150, 150, 150) 0px 1px 3px;
  width: 350px;
  padding: 0.8rem;
  font-family: "Roboto", sans-serif;
}

.media {
  height: 200px;
}

.title {
  margin-top: 10px;
  margin-bottom: 2px;
}

.subtitle {
  margin: 0.5rem auto 0.5rem auto;
}
</style>