<template>
  <q-table
    title="Mes Ritules Mensuels"
    :rows="rituals"
    :columns="columns"
    row-key="title"
    :loading="loading"
    dense
    flat
  >
    <template v-slot:header="props">
      <q-tr :props="props">
        <q-th
          v-for="col in props.cols"
          :key="col.name"
          :props="props"
          class="text-cyan-4"
        >
          {{ col.label }}
        </q-th>
      </q-tr>
    </template>
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="title" :props="props">
          <div class="row">
            <div class="col">{{ props.row.title }}</div>
            <q-btn
              padding="none"
              color="cyan-4"
              icon="edit"
              @click="edit(props.rowIndex)"
            />
            <q-btn
              padding="none"
              color="red-4"
              icon="delete"
              @click="drop(props.rowIndex, props.row._id)"
            />
          </div>
        </q-td>
        <q-td key="done" :props="props">
          <q-checkbox v-model="props.row.done" @click="check(props.rowIndex)"/>
        </q-td>
      </q-tr>
    </template>

    <template v-slot:bottom-row>
      <q-tr>
        <q-td colspan="100%">
          <ritual v-show="loading == false" @pending="this.loading = true" @saved="onSaved" @reset="onReset" :ritual="ritual"></ritual>
        </q-td>
      </q-tr>
    </template>
  </q-table>

</template>

<script>
import { extend } from 'quasar';
import Ritual from '../Ritual';
import RitualComponent from '../components/Ritual';
import RitualService from '../RitualService';

const columns = [
  {
    name: 'title',
    label: 'Rituel',
    field: ritual => ritual.title,
    align: 'left'
  },
  {
    name: 'done',
    label: 'Cochez quand l\'item est réalisé',
    field: ritual => ritual.done,
    align: 'rigth'
  }
];

export default {
  components: { 'ritual': RitualComponent },

  data() {
    return {
      columns,
      loading: false,
      ritual: new Ritual,
      editing: null,
      rituals: []
    }
  },

  async created() {
    this.loading = true;
    this.rituals = await RitualService.get();
    this.reset();
  },

  methods: {
    async drop(rowIndex, id) {
      this.loading = true;
      await RitualService.delete(id);
      this.rituals.splice(rowIndex, 1);
      this.reset()
    },

    edit(rowIndex) {
      this.ritual = extend(false, {}, this.rituals[rowIndex]);
      this.editing = rowIndex;
    },

    async check(rowIndex) {
      this.loading = true;
      const ritual = this.rituals[rowIndex];
      await RitualService.update(ritual);
      this.loading = false;
    },

    onSaved(ritual) {
      if (this.editing == null) {
        this.rituals.push(this.ritual);
      }
      this.rituals[this.editing] = this.ritual;

      this.reset();
    },

    onReset() {
      this.reset();
    },

    reset() {
      this.editing = null;
      this.ritual = new Ritual;
      this.loading = false;
    }
  }
}
</script>
