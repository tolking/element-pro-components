<template>
  <pro-crud
    v-model="form"
    v-model:search="serachForm"
    :columns="columns"
    :menu="{ label: 'Operations' }"
    :search-props="{ labelWidth: '80px' }"
    :data="data"
    :detail="detail"
    :before-open="beforeOpen"
    selection
    label-width="100px"
    @search="search"
    @submit="submit"
    @delete="deleteRow"
  >
    <template #crud-table="{ showMenu, createTableMenu }">
      <section class="list">
        <div
          v-for="item in data"
          :key="item.name"
          class="item"
        >
          <div class="item-content">
            <el-image
              :src="item.avatar"
              fit="cover"
              class="item-avatar"
            />
            <div class="item-info">
              <p class="name">
                {{ item.name }}
              </p>
              <p>address: {{ item.address }}</p>
              <p>creation date: {{ item.date }}</p>
            </div>
          </div>
          <div class="item-menu">
            <component
              :is="() => createTableMenu({ row: item })"
              v-if="showMenu"
            />
          </div>
        </div>
      </section>
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :total="total"
      />
    </template>
    <template #crud-detail>
      <div class="detail">
        <el-image
          :src="detail.avatar"
          fit="cover"
          class="item-avatar"
        />
        <div class="item-info">
          <p class="name">
            {{ detail.name }}
          </p>
          <p>address: {{ detail.address }}</p>
          <p>creation date: {{ detail.date }}</p>
        </div>
      </div>
    </template>
  </pro-crud>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Refresh } from '@element-plus/icons-vue'
import {
  defineCrudColumns,
  defineCrudSubmit,
  defineCrudSearch,
  defineCrudBeforeOpen,
} from 'element-pro-components'

export default defineComponent({
  setup() {
    const form = ref({})
    const serachForm = ref({})
    const currentPage = ref(1)
    const pageSize = ref(10)
    const total = ref(2)
    const detail = ref({})
    const columns = ref(
      defineCrudColumns([
        {
          label: 'Date',
          prop: 'date',
          component: 'el-input',
          add: true,
          edit: true,
          search: true,
          detail: true,
        },
        {
          label: 'Name',
          prop: 'name',
          component: 'el-input',
          add: true,
          search: true,
          detail: true,
        },
        {
          label: 'Address',
          prop: 'address',
          component: 'el-input',
          add: true,
          edit: true,
        },
      ]),
    )
    const data = ref([
      {
        avatar: 'https://avatars.githubusercontent.com/u/23313167?v=4',
        date: '2016-05-03',
        name: 'qiang',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        avatar: 'https://avatars.githubusercontent.com/u/23313167?v=4',
        date: '2016-05-02',
        name: 'qiang',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ])

    const beforeOpen = defineCrudBeforeOpen((done, type, row) => {
      if (type === 'edit') {
        form.value = row || {}
      } else if (type === 'detail') {
        detail.value = row || {}
      }
      done()
    })

    const search = defineCrudSearch((done, isValid, invalidFields) => {
      ElMessage(`search: ${isValid}`)
      console.log('search', serachForm.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    })

    const submit = defineCrudSubmit(
      (close, done, type, isValid, invalidFields) => {
        ElMessage(`submit: ${type}, ${isValid}`)
        console.log('submit', form.value, type, isValid, invalidFields)
        setTimeout(() => {
          isValid ? close() : done()
        }, 1000)
      },
    )

    const deleteRow = (row) => {
      ElMessage('deleteRow')
      console.log('deleteRow', row)
    }

    return {
      Refresh,
      form,
      columns,
      serachForm,
      data,
      currentPage,
      pageSize,
      total,
      detail,
      beforeOpen,
      search,
      submit,
      deleteRow,
    }
  },
})
</script>

<style scoped>
.list {
  margin-top: calc(var(--el-component-size) / 2);
}
.list .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(var(--el-component-size) / 2) 0;
}
.list .item .item-content {
  display: flex;
}
.list .item .item-content .item-avatar {
  margin-right: var(--el-component-size);
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.item-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.item-info p {
  margin: 0;
  padding: 0;
}
.item-info .name {
  font-size: 22px;
  font-weight: bold;
}

.detail {
  display: flex;
  justify-content: center;
}
.detail .item-avatar {
  margin-right: 100px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
</style>
