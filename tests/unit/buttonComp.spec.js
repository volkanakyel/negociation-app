import { mount } from "@vue/test-utils";
import ButtonComp from "@/components/ButtonComp.vue";
//Wrapped buttonComp component

describe("ButtonComp.vue", () => {
  const ButtonWrapper = mount(ButtonComp, {
    propsData: { buttonName: "Test Button" },
  });
  it("renders a visible button with vlk-btn class", () => {
    expect(ButtonWrapper.isVisible()).toBe(true);
    expect(ButtonWrapper.findAll(".vlk-btn").isVisible()).toBe(true);
  });
  it("setted props value should be the button text", () => {
    const buttonText = ButtonWrapper.find(".vlk-btn");
    // expect(ButtonWrapper.find(".vlk-btn").isEmpty()).toBe(false);
    expect(buttonText.text()).toBe("Test Button");
  });
});
