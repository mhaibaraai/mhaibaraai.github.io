<script lang="tsx">
import { defineComponent, onUnmounted } from 'vue'
import { ViewEventToggleHandler } from '~/shared/utils-class'
import { useView } from '~/composables'
import { sMitter } from '~/shared/symbol'

export default defineComponent({
  setup() {
    const view = useView() as __ol.Map

    const mitter = view[sMitter]

    const clickHandler = new ViewEventToggleHandler(view, 'click', async (event) => {
      console.log('click', event)
      mitter.emit('click', event)
    })

    clickHandler.add()

    onUnmounted(() => {
      clickHandler.remove()
    })

    return () => ''
  },
})
</script>
