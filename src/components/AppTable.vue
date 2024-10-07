<script lang="ts" setup>
import { ref } from 'vue';

const tableItems = [
  { isActive: true, age: 23, gender: 1, fullName: '张三' },
  { isActive: true, age: 34, gender: 0, fullName: '李四' },
  { isActive: false, age: 45, gender: 1, fullName: '王五' },
  { isActive: false, age: 36, gender: 1, fullName: '周六' },
  { isActive: false, age: 27, gender: 0, fullName: '赵七' },
  { isActive: true, age: 18, gender: 1, fullName: '陈八' }
];

const tableFields = [
  { key: 'fullName', label: '姓名', sortable: true },
  { key: 'gender', label: '性别', sortable: true },
  { key: 'age', label: '年龄', sortable: true },
  { key: 'isActive', label: '是否激活', sortable: false }
];

const totalRows = ref(tableItems.length);
const currentPage = ref(1);
const perPage = ref(4);
</script>

<template>
  <BTable
    :sort-by="[{ key: 'fullName', order: 'asc' }]"
    :items="tableItems"
    :fields="tableFields"
    :current-page="currentPage"
    :per-page="perPage"
    hover
    bordered
    outlined
  >
    <template #cell(gender)="row">
      {{ row.value ? '男' : '女' }}
    </template>
    <template #cell(isActive)="row">
      <div class="active" :class="row.value ? 'is-active' : 'no-active'">{{ row.value ? '已' : '未' }}激活</div>
    </template>
  </BTable>
  <BRow>
    <BCol class="current">
      共
      <strong>{{ totalRows }}</strong>
      条记录, 当前第
      <strong>{{ currentPage }}</strong>
      页, 共
      <strong>{{ Math.ceil(totalRows / perPage) }}</strong>
      页
    </BCol>
    <BCol class="page">
      <BPagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" class="my-0" />
    </BCol>
  </BRow>
</template>

<style lang="scss" scoped>
.active {
  font-weight: bolder;

  &.is-active {
    color: green;
  }

  &.no-active {
    color: orange;
  }
}

.current {
  display: flex;
  align-items: center;

  strong {
    color: darkgoldenrod;
    margin: 0 5px;
  }
}

.page {
  display: flex;
  justify-content: flex-end;
}
</style>
