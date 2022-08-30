<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">

      <div>
      <q-card class="bg-dk5 tach-card"><q-card-section>{{ $t('colorDarker') }} - 5</q-card-section></q-card>
      <q-card class="bg-dk4 tach-card"><q-card-section>{{ $t('colorDarker') }} - 4</q-card-section></q-card>
      <q-card class="bg-dk3 tach-card"><q-card-section>{{ $t('colorDarker') }} - 3</q-card-section></q-card>
      <q-card class="bg-dk2 tach-card"><q-card-section>{{ $t('colorDarker') }} - 2</q-card-section></q-card>
      <q-card class="bg-dk1 tach-card"><q-card-section>{{ $t('colorDarker') }} - 1</q-card-section></q-card>

      <q-card class="bg-primary tach-card"><q-card-section>{{ $t('primaryColor') }}</q-card-section></q-card>

      <q-card class="bg-lt1 tach-card"><q-card-section>{{ $t('colorLighter') }} - 1</q-card-section></q-card>
      <q-card class="bg-lt2 tach-card"><q-card-section>{{ $t('colorLighter') }} - 2</q-card-section></q-card>
      <q-card class="bg-lt3 tach-card"><q-card-section>{{ $t('colorLighter') }} - 3</q-card-section></q-card>
      <q-card class="bg-lt4 tach-card"><q-card-section>{{ $t('colorLighter') }} - 4</q-card-section></q-card>
      <q-card class="bg-lt5 tach-card"><q-card-section>{{ $t('colorLighter') }} - 5</q-card-section></q-card>
      </div>

<div>


      <q-card class="bg-sdk5 tach-card"><q-card-section>{{ $t('colorDarker') }} - 5</q-card-section></q-card>
      <q-card class="bg-sdk4 tach-card"><q-card-section>{{ $t('colorDarker') }} - 4</q-card-section></q-card>
      <q-card class="bg-sdk3 tach-card"><q-card-section>{{ $t('colorDarker') }} - 3</q-card-section></q-card>
      <q-card class="bg-sdk2 tach-card"><q-card-section>{{ $t('colorDarker') }} - 2</q-card-section></q-card>
      <q-card class="bg-sdk1 tach-card"><q-card-section>{{ $t('colorDarker') }} - 1</q-card-section></q-card>

      <q-card class="bg-secondary tach-card"><q-card-section>{{ $t('secondaryColor') }}</q-card-section></q-card>

      <q-card class="bg-slt1 tach-card"><q-card-section>{{ $t('colorLighter') }} - 1</q-card-section></q-card>
      <q-card class="bg-slt2 tach-card"><q-card-section>{{ $t('colorLighter') }} - 2</q-card-section></q-card>
      <q-card class="bg-slt3 tach-card"><q-card-section>{{ $t('colorLighter') }} - 3</q-card-section></q-card>
      <q-card class="bg-slt4 tach-card"><q-card-section>{{ $t('colorLighter') }} - 4</q-card-section></q-card>
      <q-card class="bg-slt5 tach-card"><q-card-section>{{ $t('colorLighter') }} - 5</q-card-section></q-card>

</div>

      <q-card class="bg-accent tach-card"><q-card-section>{{ $t('accentColor') }}</q-card-section></q-card>
      <q-card class="bg-cta tach-card"><q-card-section>{{ $t('callToAction') }}</q-card-section></q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const emit = defineEmits(['notification']);
import { Todo, Meta } from 'components/models';

import { ref } from 'vue';
</script>

<style scoped lang="scss">
.bg-slt1 {
  background-color: '#454';
}
</style>
