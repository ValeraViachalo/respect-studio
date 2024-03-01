<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ElementFadeUp from "@/components/ElementFadeUp.vue";
import TextReveal from "@/components/TextReveal.vue";

gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      steps: [
        {
          num: 27,
          height: 14,
        },
        {
          num: 53,
          height: 17,
        },
        {
          num: 61,
          height: 20,
        },
        {
          num: 58,
          height: 18,
        },
        {
          num: 30,
          height: 13,
        },
        {
          num: 63,
          height: 17,
        },
        {
          num: 55,
          height: 19,
        },
        {
          num: 63,
          height: 22,
        },
        {
          num: 71,
          height: 18,
        },
        {
          num: 76,
          height: 21,
        },
        {
          num: 67,
          height: 26,
        },
        {
          num: 88,
          height: 30,
        },
        {
          num: 78,
          height: 24,
        },
        {
          num: 90,
          height: 37,
        },
      ],
    };
  },
  mounted() {
    this.initSteps();
    this.initStatisctics();
  },
  methods: {
    initSteps() {
      const stepRectangleElements = gsap.utils.toArray(
        "#step .steps__rectangle"
      );
      const stepNumsElements = gsap.utils.toArray("#step .steps__num");

      stepRectangleElements.forEach((currS) => {
        gsap.set(currS, {
          clipPath: "inset(100% 0 0 0)",
        });
      });

      stepNumsElements.forEach((currN) => {
        gsap.set(currN, {
          opacity: 0,
          yPercent: 52,
        });
      });

      ScrollTrigger.create({
        trigger: this.$refs.stepCoantainer,
        start: "top 70%",
        end: "top 70%",
        onEnter: () =>
          this.animateSteps(stepRectangleElements, stepNumsElements),
      });
    },

    initStatisctics() {
      const statisticsWrappers = gsap.utils.toArray(
        ".statistics .statistics__wrapper"
      );
      const statisticsText = gsap.utils.toArray(
        ".statistics .statistics__text"
      );

      statisticsWrappers.forEach((currS) => {
        gsap.set(currS, {
          clipPath: "inset(0 100% 0 0)",
        });
      });

      statisticsText.forEach((currST) => {
        gsap.set(currST, {
          opacity: 0,
          xPercent: -52,
        });
      });

      ScrollTrigger.create({
        trigger: this.$refs.statistics,
        start: "top 70%",
        end: "top 70%",
        onEnter: () =>
          this.animateStatistics(statisticsWrappers, statisticsText),
      });
    },

    animateSteps(stepRectangleElements, stepNumsElements) {
      const tl = gsap.timeline();

      stepRectangleElements.forEach((currStep, i) => {
        tl.to(
          currStep,
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.5,
            ease: "power3.inOut",
          },
          0.04 * i
        );

        stepNumsElements.forEach((currNum, i) => {
          tl.to(
            currNum,
            {
              opacity: 1,
              yPercent: 0,
              duration: 1,
              delay: 1,
              ease: "power3.inOut",
            },
            0.04 * i
          );
        });
      });
    },

    animateStatistics(statisticsWrappers, statisticsText) {
      const tl = gsap.timeline();

      statisticsWrappers.forEach((currS, i) => {
        tl.to(
          currS,
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.8,
            ease: "power3.out",
          },
          0.04 * i
        );
      });

      statisticsText.forEach((currST, i) => {
        tl.to(
          currST,
          {
            opacity: 1,
            xPercent: 0,
            duration: 1.3,
            delay: 0.2,
            ease: "power3.inOut",
          },
          0.04 * i
        );
      });
    },
  },
  components: {
    TextReveal,
    ElementFadeUp,
  },
};
</script>

<template>
  <section class="flow container" id="flowSection">
    <div class="flow__top">
      <h1 class="flow__title">
        <TextReveal wrapperId="flowText">
          Consitent leads flow to streamline Your business growth.
        </TextReveal>
      </h1>
      <ElementFadeUp
        wrapperId="flowTextSecond"
        sectionId="flowSection"
        startInSection="top"
      >
        <p class="flow__sub-title">
          We combine disruptive marketing techniques with proven tech solutions
          to provide maximum business value.
        </p>
      </ElementFadeUp>
    </div>

    <div class="steps" ref="stepCoantainer">
      <div
        class="steps__wrapper"
        id="step"
        v-for="(step, index) in steps"
        :key="index"
        :style="{ height: step.height + 'vw' }"
      >
        <span class="steps__num">{{ step.num }}</span>
        <div class="steps__rectangle" />
      </div>
    </div>

    <div class="statistics" ref="statistics">
      <div class="statistics__wrapper">
        <div class="statistics__text">
          <p>Revenue generated for clients</p>
          <h3 class="statistics__num">1570</h3>
        </div>
      </div>
      <div class="statistics__wrapper">
        <div class="statistics__text">
          <p>Conversationd opened</p>
          <h3 class="statistics__num">1200</h3>
        </div>
      </div>
      <div class="statistics__wrapper">
        <div class="statistics__text">
          <p>Leads generated via targeted</p>
          <h3 class="statistics__num">378</h3>
        </div>
      </div>
      <div class="statistics__wrapper">
        <div class="statistics__text">
          <p>Calls scheduled for clients</p>
          <h3 class="statistics__num">179</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/global.scss";

.flow {
  margin-top: 6vw;

  &__title {
    width: 67vw;
  }

  &__sub-title {
    width: 34vw;
    margin-top: 3vw;
  }

  .steps {
    width: 100%;
    height: 35vw;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
    text-align: center;
    color: $c-orange;
    transform: translateY(-10%);

    &__wrapper {
      width: 7%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    &__rectangle {
      width: 100%;
      background-color: $c-orange;
      height: 100%;
    }
  }

  .statistics {
    transform: translateY(-10%);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.1vw;

    &__wrapper {
      color: $c-orange;
      background-color: $c-black;
      padding: 0.6vw 0;
      display: flex;

      &:nth-of-type(1) {
        width: 100%;
        justify-content: flex-end;
      }

      &:nth-of-type(2) {
        width: 60%;
      }

      &:nth-of-type(3) {
        width: 100%;
      }

      &:nth-of-type(4) {
        width: 45%;
        .statistics__text {
          padding: 0 2vw 0 1.3vw;
        }
      }
    }

    &__text {
      display: flex;
      align-items: center;
      text-align: end;
      gap: 1vw;
      width: 20vw;
      padding: 0 2vw 0 6vw;
    }

    &__num {
      font-size: 3.4vw;
      font-weight: 100;
    }
  }
}
</style>
