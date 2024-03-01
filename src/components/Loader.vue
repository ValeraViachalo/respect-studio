<script>
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

import Logo from "../components/Logo.vue";
import Hero from "../sections/Hero.vue";
import Header from "../components/Header.vue";

gsap.registerPlugin(TextPlugin);

export default {
  emits: ["finished"],
  components: {
    Logo,
    Hero,
    Header,
  },
  mounted() {
    Splitting();
    this.initLoader();
  },
  methods: {
    animationFinished() {
      this.$emit("finished");
    },
    initLoader() {
      const tl = gsap.timeline({
        onComplete: () => this.animationFinished(),
      });

      const logoTextChar = gsap.utils.toArray("#logoText2 .chars .char");

      gsap.set("#preview", {
        filter: "brightness(0.2)",
        yPercent: 20,
      });

      logoTextChar.forEach((currCh) => {
        gsap.set(currCh, {
          opacity: 0,
        });
      });

      tl
        .add(this.progressAnim(), 0)
        .add(this.logoAnim(), "90%")
        .add(this.finishedAnim(), '95%')
    },
    progressAnim() {
      const tl = gsap.timeline();

      tl.to("#loadingNum", {
        textContent: "100",
        duration: 6,
        roundProps: "textContent",
        ease: "power3.inOut",
      }).to(
        "#loadingNum",
        {
          opacity: 0,
          duration: 0.5,
          ease: "power3.inOut",
        },
        "<90%"
      );

      return tl;
    },
    logoAnim() {
      const tl = gsap.timeline();

      const logoTextChar = gsap.utils.toArray("#logoText2 .chars .char");

      tl.to(
        "#logoText1",
        {
          duration: 1,
          text: {
            value: "Respect",
            delimiter: "",
          },
        },
        0
      ).to(
        ".dot",
        {
          duration: 1,
          text: {
            value: ".",
            delimiter: "",
          },
        },
        0
      );

      logoTextChar.forEach((currCh, i) => {
        tl.to(
          currCh,
          {
            opacity: 1,
            delay: 0.07 * i,
            duration: 0,
          }, 0.5
        );
      });

      return tl;
    },
    finishedAnim() {
      const tl = gsap.timeline();

      tl.to(
        "#preview, .hero",
        {
          backgroundImage: 'url("/public/images/hero/01.webp")',
          animation: "none",
        },
        0
      );
      tl.to(
        "#loader",
        {
          clipPath: "inset(0 0 100% 0)",
          duration: 2,
          ease: "expo.inOut",
        },
        0
      );
      tl.to(
        "#preview",
        {
          filter: "brightness(1)",
          yPercent: 0,
          ease: "power4.inOut",
          duration: 1,
        },
        0.5
      );

      return tl;
    },
  },
};
</script>

<template>
  <div class="loader__wrapper">
    <div class="logo">
      <span id="logoText1"></span>
      <span class="dot"></span>
      <span
        data-splitting="words"
        class="words text-wrapper reverted"
        id="logoText2"
      >
        <span data-splitting="chars" class="chars"> Studio </span>
      </span>
      <!-- <span class="reverted" id="logoText2">Studio</span> -->
    </div>
    <div class="loader container" id="loader">
      <h1 class="big-text loader__num" id="loadingNum">00</h1>
    </div>
    <div class="preview" id="preview">
      <Hero />
      <Header />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/global.scss";
.loader {
  position: fixed;
  inset: 0;
  z-index: 100;
  background-color: $c-black;
  color: $c-orange;

  &__wrapper {
    height: 100lvh;
    overflow: hidden;
    .logo {
      position: absolute;
      z-index: 1000;
      left: 1vw;
      color: $c-orange;
      .reverted {
        transform: rotate(90deg) translateY(70%);
        position: absolute;
        left: 0;
        top: 8.4vw;
      }
  
      .dot {
        position: absolute;
        left: 0;
        transform: translateX(-0%);
        top: 1vw;
      }
    }
  }

  &__num {
    position: absolute;
    bottom: 0;
    right: 2vw;
    font-size: 12vw;
  }
}

.preview {
  .hero {
    // background-image: url("/public/images/hero/01.webp") !important;

    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-attachment: none;
    background-size: cover;
  }
}
</style>
