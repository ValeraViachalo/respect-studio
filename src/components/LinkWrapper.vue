<script>
export default {
  props: {
    href: String,
    classes: {
      type: String,
      default: ''
    },
    rest: Object,
  },
  setup(props) {

    return {
      href: props.href,
      classes: props.classes,
      rest: props.rest,
    };
  },
};
</script>

<template>
  <a :href="href" class="link-wrapper" v-bind="rest">
    <span :class="`${classes} link-button`">
      <slot></slot>
    </span>
    <span :class="`${classes} link-button`">
      <slot></slot>
    </span>
  </a>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/global.scss";

.link {
  &-wrapper {
    display: flex;
    flex-direction: column;
    overflow-y: clip;
    height: inherit;
    font: inherit;
    height: 1.4vw;

    &:hover {
      .link-button {
        cursor: pointer;

        transform: translateY(-100%);
      }
    }
  }

  &-button {
    transition: $transition;
    font: inherit;
    padding-bottom: 0.4vw;
    text-wrap: nowrap;
  }
}
</style>
