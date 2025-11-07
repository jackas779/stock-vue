import { defineStore } from "pinia";
import { Dark, Light } from "../styles/themes.mjs";

export const useThemeStore = defineStore('theme',{
  state: () => ({
    themeName : "dark",
  }), 
  getters: {
    activeStyle : (state) => {
      return state.themeName === 'light' ? Light : Dark;
    }
  }, 
  actions: {
    toogleTheme(){
      this.themeName = this.toogleTheme === "light" ? "ligth" : "dark"
    },
    setTheme(theme){
      if(['light','dark'].includes(theme)){
        this.themeName = theme
      }
    }
  }
})