<script lang="ts" setup>
import type { EntryListDriver } from '@/lib/gameFiles'
import { getPlatformClass, parsePlayerId } from '@/lib/utils'
import { useDriverStore } from '@/stores/drivers'
import { VueFinalModal } from 'vue-final-modal'

const emits = defineEmits<{
  (e: 'select', value: EntryListDriver): void
  (e: 'close'): void
}>()
const driverStore = useDriverStore()
const tableFields = ['playerID', 'shortName', 'firstName', 'lastName', 'controls']
</script>

<template>
  <VueFinalModal
    id="driver-select-modal"
    class="d-flex justify-content-center align-items-center modal"
    content-class="modal-dialog modal-dialog-scrollable modal-lg modal-fullscreen-lg-down"
    content-transition="vfm-fade"
    overlay-transition="vfm-fade"
  >
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Add saved driver</h5>
      </div>
      <div class="modal-body">
        <b-table :items="driverStore.drivers" :fields="tableFields" striped>
          <template #cell(playerID)="data">
            <div class="d-flex">
              <div class="platform-badge" :class="getPlatformClass(parsePlayerId(data.value as string).platform)">
                <i :class="`bi bi-${getPlatformClass(parsePlayerId(data.value as string).platform)} me-1`" />
                {{ parsePlayerId(data.value as string).playerId }}
              </div>
            </div>
          </template>
          <template #cell(controls)="data">
            <div class="d-flex flex-row gap-1">
              <b-button @click="emits('select', data.item)" size="sm" variant="success">Select</b-button>
            </div>
          </template>
        </b-table>
      </div>
      <div class="modal-footer">
        <div class="d-flex flex-row justify-content-end">
          <b-button @click="emits('close')" variant="secondary">Cancel</b-button>
        </div>
      </div>
    </div>
  </VueFinalModal>
</template>
