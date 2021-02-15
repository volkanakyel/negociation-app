import { mount } from "@vue/test-utils";
import Modal from "@/components/Modal.vue";

const ModalWrapper = mount(Modal);
describe("Modal.vue", () => {
  it("renders a vue instance", () => {
    expect(ModalWrapper.isVueInstance()).toBe(true);
  });
});
