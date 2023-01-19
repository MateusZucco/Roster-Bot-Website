import { shallowMount } from "@vue/test-utils";
import AppBar from "@/components/AppBar.vue";

import Vue from "vue";

import Vuetify from "vuetify";
const vuetify = new Vuetify();

Vue.prototype.$screenSize = window.screen.width;

describe("AppBar.vue", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallowMount(AppBar, {
      vuetify,
    });
  });

  it("is a vue component", () => {
    expect(wrapper).toBeTruthy();
  });

  describe("screenId value tests", () => {
    test("change color text", () => {
    
    });
  });
});
