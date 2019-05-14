<template>
  <div>
    <AppHeader />
    <div class="columns">
      <div class="column is-three-quarters is-offset-2">
        <div class="columns">
          <div class="column is-two-thirds">
            <img :src="this.pattern.picture" />
          </div>
          <div class="column">
            <h1 class="title is-1">{{ this.pattern.title }}</h1>
            <h2 class="title is-2">{{ this.pattern.desc }}</h2>
            <h2 class="title is-2">{{ this.pattern.price }}</h2>
            <a class="button is-info is-large" v-on:click="addToBasket"
              >Lisa ostukorvi</a
            >
          </div>
        </div>
      </div>
    </div>
    <router-link to="/patterns" class="button is-pulled-left"
      >Tagasi</router-link
    >
  </div>
</template>

<script>
import router from "../router.js";
import AppHeader from "../components/layout/AppHeader";

export default {
  components: { AppHeader },
  created: function() {
    this.pattern = this.patterns[this.$route.query.id - 1];
  },
  methods: {
    addToBasket() {
      console.log("here");
      router.push({
        name: "basket",
        params: {
          patterns: [this.pattern]
        }
      });
    }
  },
  data: function() {
    return {
      patterns: [
        {
          id: 1,
          type: "kampsun",
          title: "Armas titekampsun",
          picture:
            "https://i.pinimg.com/564x/eb/83/64/eb8364e236f099e2e1450f743be910fe.jpg",
          price: "4€",
          desc: "Maali muster"
        },
        {
          id: 2,
          type: "kampsun",
          title: "Elegantne kardigan",
          picture:
            "https://i.pinimg.com/564x/35/c2/e7/35c2e7bae6b2b8ffd1a04d598a50391a.jpg",
          price: "2€",
          desc: "Sügiseseks kandmseks"
        },
        {
          id: 3,
          type: "kindad",
          title: "Kirjud kindad",
          picture:
            "https://i.pinimg.com/564x/07/42/81/074281d3bc848db0c28ddd716789dbd3.jpg",
          price: "1€",
          desc: "Soojad kindad talveks"
        },
        {
          id: 4,
          type: "sall",
          title: "Soe sall",
          picture:
            "https://i.pinimg.com/564x/e2/c6/ac/e2c6acaab15e83f7569434ed53a05a1f.jpg",
          price: "2€",
          desc: "Väga pikk sall"
        },
        {
          id: 5,
          type: "sall",
          title: "Pitsiline sall",
          picture:
            "https://i.pinimg.com/564x/71/c2/82/71c282e0bd15050686048650d3f914f0.jpg",
          price: "5€",
          desc: "Natuke pikem töö"
        },
        {
          id: 6,
          type: "müts",
          title: "Värviline müts",
          picture:
            "https://i.pinimg.com/564x/36/52/4b/36524b3fb986b2b10174b913b4068dc2.jpg",
          price: "0.5€",
          desc: "Rõõmsate värvidega müts"
        },
        {
          id: 7,
          type: "kindad",
          title: "Traditsioonilised labakud",
          picture:
            "https://i.pinimg.com/564x/c8/92/57/c8925743209b8a1261b501b083dc0831.jpg",
          price: "6€",
          desc: "Eesti rahvusmustritega labakindad"
        },
        {
          id: 8,
          type: "muud",
          title: "Heegeldatud jänes",
          picture:
            "https://i.pinimg.com/564x/ab/a3/7e/aba37eea3c5d2d09126f574b32df885b.jpg",
          price: "8€",
          desc: "Armas mänguasi lapsele"
        },
        {
          id: 9,
          type: "muud",
          title: "Väike vaip",
          picture:
            "https://i.pinimg.com/564x/f6/8b/53/f68b53fe526deb8d8c0c9c71058dbd66.jpg",
          price: "6€",
          desc: "Ringikujuline vaip suvilasse"
        },
        {
          id: 10,
          type: "müts",
          title: "Müts abikaasale",
          picture:
            "https://i.pinimg.com/564x/cf/5d/e1/cf5de101f036d357b9f9f7ec02fa9623.jpg",
          price: "1€",
          desc: "Saab puude lõhkumiseks pähe panna"
        }
      ],
      pattern: null
    };
  }
};
</script>
