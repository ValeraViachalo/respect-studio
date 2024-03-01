<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

export default {
  props: {
    wrapperId: String,
  },
  setup(props) {
    return {
      wrapperId: props.wrapperId,
    };
  },
  mounted() {
    Splitting();

    const wrappers = document.querySelectorAll(".text-wrapper");

    wrappers.forEach((currW) => {
      ScrollTrigger.create({
        trigger: currW,
        start: "top 70%",
        end: "top 70%",
        onEnter: () => this.animateTitle(currW),
      });
    });

    const chars = gsap.utils.toArray(".splitting .char");

    chars.forEach((currC) => {
      gsap.set(currC, {
        opacity: 0,
      });
    });
  },
  methods: {
    animateTitle(currW) {
      const chars = gsap.utils.toArray(`#${currW.id} .char`);

      chars.forEach((currC, i) => {
        gsap.to(currC, {
          opacity: 1,
          delay: 0.03 * i,
          duration: 0.05,
        });
      });
    },
  },
};
</script>

<template>
  <span data-splitting="words" class="words text-wrapper" :id="wrapperId">
    <span data-splitting="chars" class="chars">
      <slot></slot>
    </span>
  </span>
</template>

<style lang="scss" scoped></style>
