// YourComponent.stories.js
import HelloWorld from "./HelloWorld.vue";

//👇 This default export determines where your story goes in the story list
export default {
  component: HelloWorld,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { HelloWorld },
    setup() {
      return { args };
    },
    template: '<HelloWorld v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
    msg: "Hello world!",
  },
};

export const SecondStory = {
  render: (args) => ({
    components: { HelloWorld },
    setup() {
      return { args };
    },
    template: '<HelloWorld v-bind="args" />',
  }),
  args: {
    msg: "This is a story",
    color: "red",
  },
};

