<template>
  <div>
    <HeaderLogoOnly />
    <h1 class="title is-1">Jätkamiseks palun...</h1>
    <div class="level buttons are-medium">
      <a class="level-item button is-danger">Logi sisse</a>
      <a class="level-item button is-link">Registreeri kasutajaks</a>
      <router-link to="bankchoose" class="level-item button"
        >Jätka ilma kontota</router-link
      >
    </div>
  </div>
</template>

<script>
import HeaderLogoOnly from "../components/layout/HeaderLogoOnly";

export default {
  name: "LoginPrompt",
  components: {
    HeaderLogoOnly
  }
};
</script>
