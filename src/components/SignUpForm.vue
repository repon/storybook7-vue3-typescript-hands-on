<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({
  name: "",
  age: 18,
});
const errors = reactive({
  name: "",
  age: "",
});

const emits = defineEmits<{
  (e: "submit", payload: { name: string; age: number }): void;
}>();

const onSubmit = () => {
  errors.name = state.name !== "" ? "名前を入力してください" : "";
  errors.age = state.age < 18 ? "18歳未満は登録できません" : "";

  if (errors.name === "" && errors.age === "") {
    emits("submit", { name: state.name, age: state.age });
  }
};

const onReset = () => {
  state.name = "";
  state.age = 18;
};
</script>

<template>
  <div class="sign-up-form">
    <h1>会員登録</h1>
    <form class="form" @submit.prevent="onSubmit">
      <div class="form-group">
        <label>
          Name
          <input
            type="text"
            v-model="state.name"
            placeholder="Enter your name"
          />
          <span class="error">{{ errors.name }}</span>
        </label>
      </div>
      <div class="form-group">
        <label>
          Age
          <input
            type="number"
            v-model="state.age"
            placeholder="Enter your age"
          />
          <span class="error">{{ errors.age }}</span>
        </label>
      </div>
      <div class="form-group">
        <button type="button" @click="onReset">リセット</button>
        <button type="submit">確定</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.sign-up-form {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: white;
}
.sign-up-form .form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.sign-up-form .form .form-group {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}
.sign-up-form .form .form-group .error {
  color: red;
}
</style>
