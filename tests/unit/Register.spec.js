import { shallowMount } from "@vue/test-utils";

// import vue from "vue";
// import VueMask from 'v-mask'
// Vue.use(VueMask);

import Register from "@/components/Register.vue";

describe("Register.vue", () => {
  let wrapper;

  beforeAll(() => {
    window.open = jest.fn();
    wrapper = shallowMount(Register);
  });

  it("is a vue component", () => {
    expect(wrapper).toBeTruthy();
  });

  describe("send button tests", () => {
    test("computed prop 'canSend' start like false", async () => {
      await wrapper.setData({
        form: {
          name: "",
          phone: "",
          telegramId: "",
          password: "",
          email: "",
        },
      });

      expect(wrapper.vm.canSend).toBeFalsy();
    });

    test("computed prop 'canSend' recive true, when is valid", async () => {
      await wrapper.setData({
        form: {
          name: "",
          phone: "",
          telegramId: "",
          password: "",
          email: "",
        },
      });

      expect(wrapper.vm.canSend).toBeFalsy();

      await wrapper.setData({
        form: {
          name: "aaaaaaaaa",
          phone: "aaaaaaaaa",
          telegramId: "aaaaaaaaa",
          password: "aaaaaaaaa",
        },
      });

      expect(wrapper.vm.canSend).toBeFalsy();

      await wrapper.setData({
        form: {
          email: "aaaaaaaaa",
        },
      });

      expect(wrapper.vm.canSend).toBeTruthy();
    });
  });

  describe("post user tests", () => {
    test("method 'registerNewUser', with correct datas, return status >= 200 and < 300 and go to de success()", async () => {
      await wrapper.setData({
        form: {
          name: "unit test",
          phone: "99 9 9999-9999",
          telegramId: Math.floor(Math.random() * (100000 - 1 + 1) + 1),
          password: "xxxxxxxxxxx",
          email: `${Math.floor(Math.random() * (10000 - 1 + 1) + 1)}@mail.com`,
        },
        message: "",
      });

      const spy = jest.spyOn(wrapper.vm, "success");

      let response = await wrapper.vm.registerNewUser();
      let result = response >= 200 && response < 300;

      expect(spy).toHaveBeenCalled();
      expect(result).toBeTruthy();
    });

    test("method 'registerNewUser', with incorrect datas, return status >= 400 and message recive the error text", async () => {
      await wrapper.setData({
        form: {
          name: null, //can't be null
          phone: "99 9 9999-9999",
          telegramId: Math.floor(Math.random() * (100000 - 1 + 1) + 1),
          password: "xxxxxxxxxxx",
          email: `${Math.floor(Math.random() * (10000 - 1 + 1) + 1)}@mail.com`,
        },
        message: "",
      });

      let response = await wrapper.vm.registerNewUser();
      let result = response >= 400;

      expect(result).toBeTruthy();
      expect(wrapper.vm.message).not.toBeFalsy();
    });
  });
});
