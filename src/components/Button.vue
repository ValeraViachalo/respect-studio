<script>
export default {
  props: {
    link: String,
    color: {
      type: String,
      default: '#E63E3A'
    },
  },
};
</script>

<template>
  <a :href="link" class="button">
    <div className="arrow-wrapper">
      <div className="arrow">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 22 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.1007 6.49956L15.3873 0.786133H12.5306L17.2399 5.49546L0.899353 5.48769L0.900767 7.51284L17.2498 7.51355L12.5306 12.213L15.3866 12.2137L21.1007 6.49956Z"
            :fill="color"
          />
        </svg>
      </div>
      <div className="arrow">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 22 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.1007 6.49956L15.3873 0.786133H12.5306L17.2399 5.49546L0.899353 5.48769L0.900767 7.51284L17.2498 7.51355L12.5306 12.213L15.3866 12.2137L21.1007 6.49956Z"
            :fill="color"
          />
        </svg>
      </div>
    </div>
    <slot></slot>
  </a>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/global.scss";

.button {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2vw;

  text-align: end;

  width: 100%;
  height: 100%;

  background-color: $c-black;
  color: $c-orange;

  padding-right: 1vw;

  &:hover {
    .arrow {
      &:nth-of-type(1) {
        left: 100%;
      }
      &:nth-of-type(2) {
        left: 0;
      }
    }
  }

  .arrow {
    width: 1.3vw;
    height: 0.6vw;
    transition: $transition;

    &:nth-of-type(1) {
      position: absolute;
      left: 0;
    }
    &:nth-of-type(2) {
      position: absolute;
      left: -100%;
    }

    &-wrapper {
      display: flex;
      overflow: hidden;
      width: 1.6vw;
      height: 1.6vw;

      position: relative;

      &:nth-of-type(2) {
        transform: rotate(-180deg);
      }
    }
  }
}
</style>
