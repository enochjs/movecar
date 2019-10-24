<template>
  <div class="about">
    <h1>This is an about page</h1>
    <nut-button
      @click="clickHandler"
    >
      去结算
    </nut-button>
  </div>
</template>

<script>

export default {
  name: 'about',
  methods: {
    clickHandler: () => {
      console.log('handle');
    },
  },
};
</script>
