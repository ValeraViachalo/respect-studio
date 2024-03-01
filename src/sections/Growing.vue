<script>
import ElementFadeUp from "@/components/ElementFadeUp.vue";
import TextReveal from "@/components/TextReveal.vue";

export default {
  components: {
    TextReveal,
    ElementFadeUp
  },
};
</script>

<template>
  <section class="growing" id="growingSection">
    <h1 class="big-text growing__title">
      <TextReveal wrapperId="growingText">
        Growing businesses by building relationships
      </TextReveal>
    </h1>
    <ElementFadeUp wrapperId="growingTextSecond" sectionId="growingSection">
      <p>
        B2B Marketing & LinkedIn Lead
        <br />
        Generation agency
      </p>
    </ElementFadeUp>
  </section>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/global.scss";

.growing {
  background-color: $c-orange;
  height: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4vw 1vw 1.5vw;

  &__title {
    width: 42%;
    text-align: end;
    align-self: end;
  }
}
</style>
