<template>
    <v-app-bar elevation="5" color="#000FFF">
        <v-toolbar-title id="logo" style="cursor: pointer" @click="$router.push('/')" dark fixed app>
            POKEPONG
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <img id="profilePic" :src="$store.state.userInfos.profilePic"/>
        <v-btn class="btn" router :to="'/profil'">
                {{ username }}
        </v-btn>
        <v-btn v-if="$router.currentRoute.value.path == '/options'" @click="$router.go(-1)">
            <img id="optionsImg" src="@/assets/optionsButton.png"/>
        </v-btn>
        <v-btn v-else router :to="'/options'">
            <img id="optionsImg" src="@/assets/optionsButton.png"/>
        </v-btn>
    </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { mapState, useStore } from 'vuex';
import store from '@/store';
import { computed } from '@vue/reactivity';

export default defineComponent({
    computed: {
        ...mapState({
            user: 'userInfos'
        })
    },
    setup() {
        const store = useStore()
        return {
            username: computed(() => store.getters.getUsername)
        }
    },
    mounted() {
        this.$store.dispatch('getUserInfos')
    }
})
</script>

<style scoped>
#logo {
    font-family: "pokemon";
    color: rgb(255, 200, 0);
    text-shadow: 2px 2px 4px rgb(0, 4, 255), 0 0 0.2em rgb(0, 0, 0), 0 0 0.2em rgb(2, 175, 255);
    font-size: 150%;
}
#logo:hover {
  color: rgb(255, 233, 0);
}
.btn {
  font-family: "pokemon";
  font-size: 20px;
  color: rgb(255, 200, 0);
  text-shadow: 2px 2px 4px rgb(0, 4, 255), 0 0 0.5em rgb(0, 0, 0), 0 0 0.2em rgb(2, 175, 255);
  margin-left: 30px;
}
#optionsImg {
    width: 4vh;
}
#profilePic {
    width: 3vh;
}
</style>