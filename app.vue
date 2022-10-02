<template>
  <div class="container">
    <div>
      <form action="" class="p-fluid grid formgrid">
        <div class="field col-12 md:col-4">
          <label for="dateformat">Data de inicio</label>
          <Calendar
            v-model="form.data"
            input-id="icon"
            :show-icon="true"
            date-format="dd/mm/yy"
          />
        </div>
        <div class="field col-12 md:col-4">
          <label for="dateformat">Quantidade</label>
          <Dropdown
            v-model="form.dias"
            :options="listDias"
            option-label="name"
            option-value="code"
          />
        </div>
      </form>

      <DataTable
        :value="data"
        :paginator="true"
        :rows="10"
        :loading="false"
        paginator-template="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        :rows-per-page-options="[10, 20, 50]"
        responsive-layout="scroll"
        current-page-report-template="Showing {first} to {last} of {totalRecords}"
      >
        <Column field="name" header="Name" />
        <Column field="size" header="Size" />
        <Column field="color" header="Color" />
        <template #paginatorstart>
          <Button type="button" icon="pi pi-refresh" class="p-button-text" />
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

enum Day {
  "10 days" = "10 days",
  "15 days" = "15 days",
  "30 days" = "30 days",
}

const data = ref([
  { name: "Short", size: "3", color: "Green" },
  { name: "Hat", size: "2", color: "Brown" },
  { name: "Board", size: "4x", color: "Euro" },
]);

const form = ref({
  data: null,
  dias: null as Day,
});

const listDias = computed(() =>
  Object.values(Day).map((item) => ({
    name: item,
    code: item,
  }))
);
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }
}
</style>
