<template>
  <q-page>
    <div class="q-pa-md">
      <h1 class="text-h4 text-cyan-4 text-uppercase">
        Mes rituels mensuels
        <q-icon
          :size="xs"
          name="info"
        />
      </h1>
      <guide>
        <div class="text-caption text-weight-light">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </guide>
      <ritual-list></ritual-list>
    </div>
  </q-page>
</template>
<script>
import Guide from '../components/Guide';
import RitualList from '../components/RitualList';
import RitualService from '../RitualService';

export default {
  components: { 'ritual-list': RitualList, Guide },

  data() {
    return {
      rituals: []
    }
  }
}
</script>
