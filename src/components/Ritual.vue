<template>
  <div>
    <q-input v-model="ritual.title" @keyup.enter="save" placeholder="+ Ajouter un rituel"></q-input>
    <div v-show="ritual.title">
      <h5 class="text-h5">Planifier Mon Créneau De Rituel</h5>
      <q-select v-model="ritual.type" :options="types" label="Rituel du jour" />
      <q-select v-model="ritual.moment" :options="moments" label="Tous les" />
      <q-select v-model="ritual.day" :options="days" multiple label="Jour(s)" />

      <q-item-label header>Créneau</q-item-label>
      <q-input
        label="Début"
        filled
        v-model="ritual.slot.start"
        mask="time"
        :rules="['time']">
        <template v-slot:append>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-time v-model="ritual.slot.start">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-input
        label="Fin"
        filled
        v-model="ritual.slot.end"
        mask="time"
        :rules="['time']">
        <template v-slot:append>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-time v-model="ritual.slot.end">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-btn color="red-4" label="Annuler" @click="reset"/>
      <q-btn color="cyan-4" label="Valider" @click="save"/>
    </div>
  </div>
</template>

<script>
import { extend } from 'quasar';
import RitualService from '../RitualService';

export default {
  props: ['ritual'],

  data() {
    return {
      types: ['Matinal', 'Vespéral'],
      moments: ['Premiers', 'Derniers'],
      days: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
    }
  },

  methods: {
    async save() {
      this.$emit('pending');
      if (this.ritual._id) {
        await RitualService.update(this.ritual);
      } else {
        this.ritual._id = await RitualService.add(this.ritual);
      }

      this.$emit('saved', this.ritual);
    },

    reset() {
      this.$emit('reset');
    }
  }
}
</script>
