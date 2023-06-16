// YourComponent.stories.js

import Card from "./Card.vue";

//👇 This default export determines where your story goes in the story list
export default {
  component: Card,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
    title: "Story 1",
    subTitle: "Description",
    text: "This is a longer text",
    mediaHref: "https://picsum.photos/200/300",
  },
};

export const SecondStory = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args" />',
  }),
  args: {
    title: "Story 2",
    subTitle: "Description",
    text: "This is a longer text",
    mediaHref: "https://picsum.photos/200/300",
  },
};
