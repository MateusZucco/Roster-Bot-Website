import { shallowMount } from "@vue/test-utils";
import AppBar from "@/components/AppBar.vue";

import Vue from "vue";

import Vuetify from "vuetify";
const vuetify = new Vuetify();

Vue.prototype.$screenSize = window.screen.width

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

  describe("app bar tests", () => {
    test("change color text", async () => {
      const REFS = ["homeText", "projectText", "registerText"];

      let i = 0;
      Vue.prototype.$screenSize = 1600;
      const FIND_CLASS = "app-bar-button-selected-text"

      while (i < REFS.length) {
        await wrapper.setProps({
          screenId: i,
        });
        expect(
          wrapper
            .getComponent({ ref: REFS[i] })
            .html()
            .toString()
            .indexOf(FIND_CLASS) != -1
        ).toBeTruthy();
        expect(wrapper.findAll(`.${FIND_CLASS}`).length).toBe(1);
        i++;
      }
    });

    test("change color text mobile", async () => {
      const REFS = ["moblieHomeText", "moblieProjectText", "moblieRegisterText"];

      let i = 0;
      Vue.prototype.$screenSize = 300;
      const FIND_CLASS = "app-nav-selected-text"

      while (i < REFS.length) {
        await wrapper.setProps({
          screenId: i,
        });
        expect(
          wrapper
            .getComponent({ ref: REFS[i] })
            .html()
            .toString()
            .indexOf(FIND_CLASS) != -1
        ).toBeTruthy();
        expect(wrapper.findAll(`.${FIND_CLASS}`).length).toBe(1);
        i++;
      }
    });
  });
});
