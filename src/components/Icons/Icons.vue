<template><div>
  <font-awesome-icon :icon="userIcon" />
</div>
</template>

<script>

import { defineComponent } from 'vue'
import { FontAwesomeIcon } from 'fortawesome/vue-fontawesome'
import { faUser } from 'fortawesome/free-solid-svg-icons'


export default defineComponent({
  name: 'MyComponent',
  components: {
    FontAwesomeIcon
  },
  setup() {
    return {
      userIcon: faUser
    }
  }
})
</script>