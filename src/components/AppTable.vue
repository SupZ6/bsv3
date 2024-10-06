<script setup>
import { BTable } from 'bootstrap-vue-next'

const sortItems = [
  { isActive: true, age: 23, gender: 1, fullName: '张三' },
  { isActive: true, age: 34, gender: 0, fullName: '李四' },
  { isActive: false, age: 45, gender: 1, fullName: '王五' },
  { isActive: false, age: 36, gender: 1, fullName: '周六' },
  { isActive: false, age: 27, gender: 0, fullName: '赵七' },
  { isActive: true, age: 18, gender: 1, fullName: '陈八' },
]

const sortFields = [
  { key: 'fullName', label: '姓名', sortable: true },
  { key: 'gender', label: '性别', sortable: true },
  { key: 'age', label: '年龄', sortable: true },
  { key: 'isActive', label: '是否激活', sortable: false },
]
</script>

<template>
  <BTable :sort-by="[{ key: 'fullName', order: 'asc' }]" :items="sortItems" :fields="sortFields">
    <template #cell(gender)="row">
      {{ row.value ? '男' : '女' }}
    </template>
    <template #cell(isActive)="row">
      <div class="active" :class="row.value ? 'is-active' : 'no-active'">{{ row.value ? '已' : '未' }}激活</div>
    </template>
  </BTable>

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
</style>