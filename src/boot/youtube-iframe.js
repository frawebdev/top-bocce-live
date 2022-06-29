import { boot } from 'quasar/wrappers'
import YoutubeIframe from '@techassi/vue-youtube-iframe'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // something to do
  YoutubeIframe.install(app)
})
