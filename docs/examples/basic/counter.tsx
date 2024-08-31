import { defineComponent, ref } from 'vue'
import './counter.css'

export default defineComponent({
  setup() {
    const counter = ref(0)
    return () => (
      <div>
        <p>
          Count：
          {counter.value}
        </p>
        <button class="modal-button" onClick={() => counter.value++}>Increment</button>
      </div>
    )
  },
})
