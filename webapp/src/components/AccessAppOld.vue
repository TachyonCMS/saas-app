<template>
  <q-card class="tach-card" v-if="$q.platform.is.desktop">
    <q-card-section>
      <div class="row">
        <div class="fit col-xs-12 q-pa-sm">
          <q-btn
            rounded
            style="width: 100%"
            color="primary"
            @click="openDir('new')"
            >Create Stash</q-btn
          >
        </div>
        <div
          class="
            row
            col-12
            text-body1
            justify-center
            text-center text-italic
            tach-text-dark
            block
          "
        >
          Select or create an empty directory
        </div>

        <div class="col-xs-12 q-pa-sm q-pt-lg">
          <q-btn
            rounded
            style="width: 100%"
            color="primary"
            @click="openDir('existing')"
            >Open Stash</q-btn
          >
        </div>
        <div
          class="
            row
            col-12
            text-body1
            justify-center
            text-center text-italic
            tach-text-dark
          "
        >
          Select an existing Secret Stash directory
        </div>
      </div>
    </q-card-section>
  </q-card>
  <q-card v-else class="tach-card">
    <q-card-section class="text-center tach-text-dark">
      <div><span class="tach-h1">We're Sorry, </span></div>

      <div>
        Secret Stash is only available on <b>desktop</b> computers running the
        latest <b>Chrome</b> browser.
      </div>
      <q-icon
        class="q-py-md"
        name="mdi-emoticon-frown"
        color="orange"
        size="lg"
      ></q-icon
      ><q-icon
        class="q-py-md"
        name="mdi-emoticon-sad"
        color="orange"
        size="lg"
      ></q-icon
      ><q-icon
        class="q-py-md"
        name="mdi-emoticon-cry"
        color="orange"
        size="lg"
      ></q-icon>
    </q-card-section>
  </q-card>
</template>

<script setup language="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';


</script>
