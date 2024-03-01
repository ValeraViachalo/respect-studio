<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  props: {
    wrapperId: String,
    sectionId: String,
    startInSection: {
      type: String,
      default: 'center'
    }
  },
  setup(props) {
    return {
      wrapperId: props.wrapperId,
      sectionId: props.sectionId,
      startInSection: props.startInSection,
    };
  },
  methods: {
    hideElements() {
      gsap.set(`#${this.wrapperId}`, {
        opacity: 0,
        yPercent: 50,
      })
    },
    scrollTriggerInit() {
      ScrollTrigger.create({
        trigger: `#${this.sectionId}`,
        start: `${this.startInSection} center`,
        end: "center center",
        onEnter: () => this.fadeUpAnim(`#${this.wrapperId}`),
      })
    },
    fadeUpAnim(element) {
      gsap.to(element, {
        opacity: 1,
        yPercent: 0,
      })
    }
  },
  mounted() {
    this.hideElements();
    this.scrollTriggerInit();
  }
};
</script>

<template>
  <div class="fadeUp-element" :id="wrapperId">
    <slot></slot>
  </div>
</template>
