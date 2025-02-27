
import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CBButton from "./Button.vue";

describe("Button.vue", () => {
  test("primary", () => {
    const wrapper = mount(CBButton, {
      props: {
        type: "primary"
      }
    });
    expect(wrapper.classes()).toContain('cb-button')
    expect(wrapper.classes()).toContain('cb-button--primary')
  });
  test("primary", () => {
    const wrapper = mount(CBButton, {
      props: {
        type: "primary"
      }
    });
    expect(wrapper.classes()).toContain('cb-button')
    expect(wrapper.classes()).toContain('cb-button--primary')
  });

  
});