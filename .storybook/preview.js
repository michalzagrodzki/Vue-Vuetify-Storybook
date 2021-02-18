import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
const vuetify = new Vuetify()

export const decorators = [
  (story, context) => {
    // wrap the passed component within the passed context
    const wrapped = story(context)
    // extend Vue to use Vuetify around the wrapped component
    return Vue.extend({
      vuetify,
      components: { wrapped },
      props: {
        dark: {
          type: Boolean,
          default: context.globals.backgrounds === "#333333" ? true : false,
        },
      },
      watch: {
        dark: {
          immediate: true,
          handler (val) {
            this.$vuetify.theme.dark = val
          }
        }
      },
      template: `
        <v-app style="background-color: transparent;">
          <v-main>
            <v-container fluid>
              <wrapped />
            </v-container>
          </v-main>
        </v-app>
      `
    })
  },
]