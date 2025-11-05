import { defineStore } from "pinia";
import { supabase } from "../db/supabase.configuration.mjs";


export const authStore = defineStore('auth', {
  state : () =>({user: null}),
  actions : {
    setupAuthListener (){
      const { data: authListener } = supabase.auth.onAuthStateChange(
        (event, session) => {
          console.log("Supabase Auth Event:", event, session);
          
          // La acción modifica el estado directamente con 'this'
          if (session?.user) {
            this.user = session.user;
          } else {
            this.user = null;
          }
        })
        return authListener.subscription;
    } 
  },
})