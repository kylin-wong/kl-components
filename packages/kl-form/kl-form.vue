<template>
  <div class="at-form--search">
    <component v-for="item in formConfig" :key="item.id" v-bind:is="item.type" 
      v-on="$listeners" :configData="item"></component>
    <!-- 自定义组件 -->
    <!-- 时间选择器 -->
    <slot name="timePicker"></slot>
    <!-- 日期选择器 -->
    <slot name="datePicker"></slot>
    <!-- 日期时间选择器 -->
    <slot name="dateTimePicker"></slot>
    <!-- 默认插槽 -->
    <slot></slot>
  </div>
</template>
<script>
import KlRadioGroup from "./searchFormComponents/KlRadioGroup";
import KlCheckboxGroup from "./searchFormComponents/KlCheckboxGroup";
import KlInput from "./searchFormComponents/KlInput";
import KlSelect from "./searchFormComponents/KlSelect";
import KlCascader from "./searchFormComponents/KlCascader";
import KlSwitch from "./searchFormComponents/KlSwitch";
export default {
  name: "KlForm",
  data() {
    return {};
  },
  props: {
    formConfig: {
      type: Array,
      required: true
    }
  },
  components: {
    "kl-radio": KlRadioGroup,
    "kl-checkbox": KlCheckboxGroup,
    "kl-input": KlInput,
    "kl-select": KlSelect,
    "kl-cascader": KlCascader,
    "kl-switch": KlSwitch
  }
};
</script>

<style>
.at-form--search {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.at-form-component:not(:last-child) {
  margin-right: 10px;
}

.at-form-component {
  margin-bottom: 10px;
}
</style>