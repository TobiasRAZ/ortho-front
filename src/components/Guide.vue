<template>
  <q-card bordered class="q-mb-xl" v-show="show">
    <q-card-section>
      <div class="row items-center no-wrap">
        <div class="col">
        </div>
        <div class="col-auto">
          <q-btn color="cyan-4" round flat icon="close" @click="show = false">
          </q-btn>
        </div>
      </div>
    </q-card-section>

    <q-card-section>
      <slot></slot>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>
